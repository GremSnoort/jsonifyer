window.BENCHMARK_DATA = {
  "lastUpdate": 1705957165650,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-13 20.04 Release c++-17": [
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
        "date": 1702490334396,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 701.5934301488182,
            "unit": "ns/iter",
            "extra": "iterations: 996948\ncpu: 701.5798216155707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10783.812960609823,
            "unit": "ns/iter",
            "extra": "iterations: 78700\ncpu: 10783.659466327827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24377.361814046504,
            "unit": "ns/iter",
            "extra": "iterations: 35170\ncpu: 24377.00881433039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39008.427941741,
            "unit": "ns/iter",
            "extra": "iterations: 20872\ncpu: 39008.35569183595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48380.46525982037,
            "unit": "ns/iter",
            "extra": "iterations: 17012\ncpu: 48379.18528097812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59496.99231918584,
            "unit": "ns/iter",
            "extra": "iterations: 14061\ncpu: 59495.85377995874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59196.02550000036,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59194.89000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68736.12293217929,
            "unit": "ns/iter",
            "extra": "iterations: 12755\ncpu: 68735.17052136414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 79554.12947282726,
            "unit": "ns/iter",
            "extra": "iterations: 10983\ncpu: 79552.4173723028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 591.1508389421293,
            "unit": "ns/iter",
            "extra": "iterations: 1177912\ncpu: 591.1458580946617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 517.670089645459,
            "unit": "ns/iter",
            "extra": "iterations: 1353889\ncpu: 517.6691737653525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 503.0855722574576,
            "unit": "ns/iter",
            "extra": "iterations: 1389060\ncpu: 503.0814363670395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 502.88492860639025,
            "unit": "ns/iter",
            "extra": "iterations: 1391371\ncpu: 502.8841337069702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 969.5066717170681,
            "unit": "ns/iter",
            "extra": "iterations: 720729\ncpu: 969.4907517249899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4316.509768091395,
            "unit": "ns/iter",
            "extra": "iterations: 186065\ncpu: 4316.450165264831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19649.68870365054,
            "unit": "ns/iter",
            "extra": "iterations: 41748\ncpu: 19649.379610999305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15701.367809712256,
            "unit": "ns/iter",
            "extra": "iterations: 52258\ncpu: 15700.937655478583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15189.922946685834,
            "unit": "ns/iter",
            "extra": "iterations: 54339\ncpu: 15189.637277093843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15798.25429940263,
            "unit": "ns/iter",
            "extra": "iterations: 52391\ncpu: 15797.974843007381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 48146.84043722175,
            "unit": "ns/iter",
            "extra": "iterations: 17291\ncpu: 48145.69429182807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 466839.7333694085,
            "unit": "ns/iter",
            "extra": "iterations: 1849\ncpu: 466832.7744726871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 376979.5224766517,
            "unit": "ns/iter",
            "extra": "iterations: 2358\ncpu: 376976.3782866848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 374058.7187769085,
            "unit": "ns/iter",
            "extra": "iterations: 2322\ncpu: 374051.07665805274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 380556.926197673,
            "unit": "ns/iter",
            "extra": "iterations: 2317\ncpu: 380552.48165731627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 231907.2237052731,
            "unit": "ns/iter",
            "extra": "iterations: 3746\ncpu: 231903.36358782704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 371707.5914116034,
            "unit": "ns/iter",
            "extra": "iterations: 2352\ncpu: 371699.99999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1890463.0000001742,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1890399.581589954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 750213.4014480826,
            "unit": "ns/iter",
            "extra": "iterations: 1243\ncpu: 750196.7015285605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2565449.8156425604,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 2565392.737430162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4251.318866044292,
            "unit": "ns/iter",
            "extra": "iterations: 186674\ncpu: 4251.221916281862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19861.455824505632,
            "unit": "ns/iter",
            "extra": "iterations: 41437\ncpu: 19861.42577889319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15921.7176731694,
            "unit": "ns/iter",
            "extra": "iterations: 51366\ncpu: 15921.350698905786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15871.869083157275,
            "unit": "ns/iter",
            "extra": "iterations: 53935\ncpu: 15871.754890145561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15525.301267474006,
            "unit": "ns/iter",
            "extra": "iterations: 53650\ncpu: 15524.846225535943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 47563.52825481736,
            "unit": "ns/iter",
            "extra": "iterations: 17236\ncpu: 47563.45439777177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 480520.314254256,
            "unit": "ns/iter",
            "extra": "iterations: 1817\ncpu: 480512.38304898306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 384762.59109309554,
            "unit": "ns/iter",
            "extra": "iterations: 2223\ncpu: 384760.0539811049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 378285.3901819945,
            "unit": "ns/iter",
            "extra": "iterations: 2363\ncpu: 378284.72280998906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 373952.34088930767,
            "unit": "ns/iter",
            "extra": "iterations: 2294\ncpu: 373942.284219705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 227891.93037662248,
            "unit": "ns/iter",
            "extra": "iterations: 4036\ncpu: 227889.04856293512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 379014.22168568004,
            "unit": "ns/iter",
            "extra": "iterations: 2278\ncpu: 379006.6725197551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1903832.0864976742,
            "unit": "ns/iter",
            "extra": "iterations: 474\ncpu: 1903789.8734177228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 764228.5405844382,
            "unit": "ns/iter",
            "extra": "iterations: 1232\ncpu: 764208.7662337619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4272.913149916885,
            "unit": "ns/iter",
            "extra": "iterations: 185043\ncpu: 4272.851715547178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19404.947867298095,
            "unit": "ns/iter",
            "extra": "iterations: 41145\ncpu: 19404.60566289937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15428.654025669186,
            "unit": "ns/iter",
            "extra": "iterations: 51420\ncpu: 15428.362504861881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14838.002266196305,
            "unit": "ns/iter",
            "extra": "iterations: 54276\ncpu: 14837.683322278706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15623.153546496844,
            "unit": "ns/iter",
            "extra": "iterations: 51854\ncpu: 15623.02426042344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 48267.339479076494,
            "unit": "ns/iter",
            "extra": "iterations: 17085\ncpu: 48266.971027216976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 466888.7259842254,
            "unit": "ns/iter",
            "extra": "iterations: 1905\ncpu: 466877.2178477693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 383135.4698220077,
            "unit": "ns/iter",
            "extra": "iterations: 2303\ncpu: 383130.612244898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 375667.48519164254,
            "unit": "ns/iter",
            "extra": "iterations: 2296\ncpu: 375659.8432055757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 373026.65792810137,
            "unit": "ns/iter",
            "extra": "iterations: 2365\ncpu: 373019.9577167013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 231018.95607303226,
            "unit": "ns/iter",
            "extra": "iterations: 3779\ncpu: 231013.94548822526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 366799.6504980806,
            "unit": "ns/iter",
            "extra": "iterations: 2309\ncpu: 366788.43655262195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 306.34094434785624,
            "unit": "ns/iter",
            "extra": "iterations: 2370906\ncpu: 306.340445382484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1618.4892776817283,
            "unit": "ns/iter",
            "extra": "iterations: 440623\ncpu: 1618.4688497876791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1196.8913052849564,
            "unit": "ns/iter",
            "extra": "iterations: 579927\ncpu: 1196.8723649700803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1205.4282731364156,
            "unit": "ns/iter",
            "extra": "iterations: 580926\ncpu: 1205.4175574858118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1029.2711876051476,
            "unit": "ns/iter",
            "extra": "iterations: 684150\ncpu: 1029.2520646057135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8245.906332454175,
            "unit": "ns/iter",
            "extra": "iterations: 84896\ncpu: 8245.896155295984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18843.968020927132,
            "unit": "ns/iter",
            "extra": "iterations: 37462\ncpu: 18843.65757300725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4375.603904424046,
            "unit": "ns/iter",
            "extra": "iterations: 155311\ncpu: 4375.523948722279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4383.026640398324,
            "unit": "ns/iter",
            "extra": "iterations: 159382\ncpu: 4382.94851363383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4359.266150680219,
            "unit": "ns/iter",
            "extra": "iterations: 156464\ncpu: 4359.209786276715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9341.244109455902,
            "unit": "ns/iter",
            "extra": "iterations: 74696\ncpu: 9340.769251365575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8383.616565850405,
            "unit": "ns/iter",
            "extra": "iterations: 83485\ncpu: 8383.308378750746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3203.650527459694,
            "unit": "ns/iter",
            "extra": "iterations: 217173\ncpu: 3203.543258139801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15628.294860957454,
            "unit": "ns/iter",
            "extra": "iterations: 43763\ncpu: 15627.799739505828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12667.279220778832,
            "unit": "ns/iter",
            "extra": "iterations: 55132\ncpu: 12667.111659290482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12654.842836493515,
            "unit": "ns/iter",
            "extra": "iterations: 55350\ncpu: 12654.460704607098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13159.159791961101,
            "unit": "ns/iter",
            "extra": "iterations: 52875\ncpu: 13158.855791962153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28385.538101008362,
            "unit": "ns/iter",
            "extra": "iterations: 24750\ncpu: 28384.363636363483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99088.17169973782,
            "unit": "ns/iter",
            "extra": "iterations: 6954\ncpu: 99085.00143802233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 83528.34965207739,
            "unit": "ns/iter",
            "extra": "iterations: 8048\ncpu: 83524.42842942354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84300.05292478882,
            "unit": "ns/iter",
            "extra": "iterations: 8257\ncpu: 84299.40656412632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 83969.69149709759,
            "unit": "ns/iter",
            "extra": "iterations: 8256\ncpu: 83968.85901162683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 53759.43927532966,
            "unit": "ns/iter",
            "extra": "iterations: 13413\ncpu: 53758.532766719094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84522.43022717396,
            "unit": "ns/iter",
            "extra": "iterations: 8628\ncpu: 84521.34909596611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3116.769458409001,
            "unit": "ns/iter",
            "extra": "iterations: 217618\ncpu: 3116.627301050491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15616.218990122514,
            "unit": "ns/iter",
            "extra": "iterations: 43728\ncpu: 15615.80909257229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12612.948595827616,
            "unit": "ns/iter",
            "extra": "iterations: 54801\ncpu: 12612.72786992938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12643.328996415388,
            "unit": "ns/iter",
            "extra": "iterations: 55800\ncpu: 12643.136200716937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13034.417380104402,
            "unit": "ns/iter",
            "extra": "iterations: 52796\ncpu: 13034.25638305931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27157.00653518278,
            "unit": "ns/iter",
            "extra": "iterations: 25707\ncpu: 27156.268720581866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 96830.90576420681,
            "unit": "ns/iter",
            "extra": "iterations: 7269\ncpu: 96828.33952400653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83388.36124518626,
            "unit": "ns/iter",
            "extra": "iterations: 8288\ncpu: 83384.77316602257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81609.79792746929,
            "unit": "ns/iter",
            "extra": "iterations: 8492\ncpu: 81605.54639660801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 81855.80278367686,
            "unit": "ns/iter",
            "extra": "iterations: 8478\ncpu: 81852.18211842439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55943.44504490785,
            "unit": "ns/iter",
            "extra": "iterations: 12583\ncpu: 55941.738854009454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 82110.48241451563,
            "unit": "ns/iter",
            "extra": "iterations: 8217\ncpu: 82108.31203602278 ns\nthreads: 1"
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
        "date": 1702490334396,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 701.5934301488182,
            "unit": "ns/iter",
            "extra": "iterations: 996948\ncpu: 701.5798216155707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10783.812960609823,
            "unit": "ns/iter",
            "extra": "iterations: 78700\ncpu: 10783.659466327827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24377.361814046504,
            "unit": "ns/iter",
            "extra": "iterations: 35170\ncpu: 24377.00881433039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39008.427941741,
            "unit": "ns/iter",
            "extra": "iterations: 20872\ncpu: 39008.35569183595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48380.46525982037,
            "unit": "ns/iter",
            "extra": "iterations: 17012\ncpu: 48379.18528097812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59496.99231918584,
            "unit": "ns/iter",
            "extra": "iterations: 14061\ncpu: 59495.85377995874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59196.02550000036,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59194.89000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68736.12293217929,
            "unit": "ns/iter",
            "extra": "iterations: 12755\ncpu: 68735.17052136414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 79554.12947282726,
            "unit": "ns/iter",
            "extra": "iterations: 10983\ncpu: 79552.4173723028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 591.1508389421293,
            "unit": "ns/iter",
            "extra": "iterations: 1177912\ncpu: 591.1458580946617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 517.670089645459,
            "unit": "ns/iter",
            "extra": "iterations: 1353889\ncpu: 517.6691737653525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 503.0855722574576,
            "unit": "ns/iter",
            "extra": "iterations: 1389060\ncpu: 503.0814363670395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 502.88492860639025,
            "unit": "ns/iter",
            "extra": "iterations: 1391371\ncpu: 502.8841337069702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 969.5066717170681,
            "unit": "ns/iter",
            "extra": "iterations: 720729\ncpu: 969.4907517249899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4316.509768091395,
            "unit": "ns/iter",
            "extra": "iterations: 186065\ncpu: 4316.450165264831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19649.68870365054,
            "unit": "ns/iter",
            "extra": "iterations: 41748\ncpu: 19649.379610999305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15701.367809712256,
            "unit": "ns/iter",
            "extra": "iterations: 52258\ncpu: 15700.937655478583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15189.922946685834,
            "unit": "ns/iter",
            "extra": "iterations: 54339\ncpu: 15189.637277093843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15798.25429940263,
            "unit": "ns/iter",
            "extra": "iterations: 52391\ncpu: 15797.974843007381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 48146.84043722175,
            "unit": "ns/iter",
            "extra": "iterations: 17291\ncpu: 48145.69429182807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 466839.7333694085,
            "unit": "ns/iter",
            "extra": "iterations: 1849\ncpu: 466832.7744726871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 376979.5224766517,
            "unit": "ns/iter",
            "extra": "iterations: 2358\ncpu: 376976.3782866848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 374058.7187769085,
            "unit": "ns/iter",
            "extra": "iterations: 2322\ncpu: 374051.07665805274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 380556.926197673,
            "unit": "ns/iter",
            "extra": "iterations: 2317\ncpu: 380552.48165731627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 231907.2237052731,
            "unit": "ns/iter",
            "extra": "iterations: 3746\ncpu: 231903.36358782704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 371707.5914116034,
            "unit": "ns/iter",
            "extra": "iterations: 2352\ncpu: 371699.99999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1890463.0000001742,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1890399.581589954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 750213.4014480826,
            "unit": "ns/iter",
            "extra": "iterations: 1243\ncpu: 750196.7015285605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2565449.8156425604,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 2565392.737430162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4251.318866044292,
            "unit": "ns/iter",
            "extra": "iterations: 186674\ncpu: 4251.221916281862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19861.455824505632,
            "unit": "ns/iter",
            "extra": "iterations: 41437\ncpu: 19861.42577889319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15921.7176731694,
            "unit": "ns/iter",
            "extra": "iterations: 51366\ncpu: 15921.350698905786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15871.869083157275,
            "unit": "ns/iter",
            "extra": "iterations: 53935\ncpu: 15871.754890145561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15525.301267474006,
            "unit": "ns/iter",
            "extra": "iterations: 53650\ncpu: 15524.846225535943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 47563.52825481736,
            "unit": "ns/iter",
            "extra": "iterations: 17236\ncpu: 47563.45439777177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 480520.314254256,
            "unit": "ns/iter",
            "extra": "iterations: 1817\ncpu: 480512.38304898306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 384762.59109309554,
            "unit": "ns/iter",
            "extra": "iterations: 2223\ncpu: 384760.0539811049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 378285.3901819945,
            "unit": "ns/iter",
            "extra": "iterations: 2363\ncpu: 378284.72280998906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 373952.34088930767,
            "unit": "ns/iter",
            "extra": "iterations: 2294\ncpu: 373942.284219705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 227891.93037662248,
            "unit": "ns/iter",
            "extra": "iterations: 4036\ncpu: 227889.04856293512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 379014.22168568004,
            "unit": "ns/iter",
            "extra": "iterations: 2278\ncpu: 379006.6725197551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1903832.0864976742,
            "unit": "ns/iter",
            "extra": "iterations: 474\ncpu: 1903789.8734177228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 764228.5405844382,
            "unit": "ns/iter",
            "extra": "iterations: 1232\ncpu: 764208.7662337619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4272.913149916885,
            "unit": "ns/iter",
            "extra": "iterations: 185043\ncpu: 4272.851715547178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19404.947867298095,
            "unit": "ns/iter",
            "extra": "iterations: 41145\ncpu: 19404.60566289937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15428.654025669186,
            "unit": "ns/iter",
            "extra": "iterations: 51420\ncpu: 15428.362504861881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14838.002266196305,
            "unit": "ns/iter",
            "extra": "iterations: 54276\ncpu: 14837.683322278706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15623.153546496844,
            "unit": "ns/iter",
            "extra": "iterations: 51854\ncpu: 15623.02426042344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 48267.339479076494,
            "unit": "ns/iter",
            "extra": "iterations: 17085\ncpu: 48266.971027216976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 466888.7259842254,
            "unit": "ns/iter",
            "extra": "iterations: 1905\ncpu: 466877.2178477693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 383135.4698220077,
            "unit": "ns/iter",
            "extra": "iterations: 2303\ncpu: 383130.612244898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 375667.48519164254,
            "unit": "ns/iter",
            "extra": "iterations: 2296\ncpu: 375659.8432055757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 373026.65792810137,
            "unit": "ns/iter",
            "extra": "iterations: 2365\ncpu: 373019.9577167013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 231018.95607303226,
            "unit": "ns/iter",
            "extra": "iterations: 3779\ncpu: 231013.94548822526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 366799.6504980806,
            "unit": "ns/iter",
            "extra": "iterations: 2309\ncpu: 366788.43655262195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 306.34094434785624,
            "unit": "ns/iter",
            "extra": "iterations: 2370906\ncpu: 306.340445382484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1618.4892776817283,
            "unit": "ns/iter",
            "extra": "iterations: 440623\ncpu: 1618.4688497876791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1196.8913052849564,
            "unit": "ns/iter",
            "extra": "iterations: 579927\ncpu: 1196.8723649700803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1205.4282731364156,
            "unit": "ns/iter",
            "extra": "iterations: 580926\ncpu: 1205.4175574858118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1029.2711876051476,
            "unit": "ns/iter",
            "extra": "iterations: 684150\ncpu: 1029.2520646057135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8245.906332454175,
            "unit": "ns/iter",
            "extra": "iterations: 84896\ncpu: 8245.896155295984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18843.968020927132,
            "unit": "ns/iter",
            "extra": "iterations: 37462\ncpu: 18843.65757300725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4375.603904424046,
            "unit": "ns/iter",
            "extra": "iterations: 155311\ncpu: 4375.523948722279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4383.026640398324,
            "unit": "ns/iter",
            "extra": "iterations: 159382\ncpu: 4382.94851363383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4359.266150680219,
            "unit": "ns/iter",
            "extra": "iterations: 156464\ncpu: 4359.209786276715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9341.244109455902,
            "unit": "ns/iter",
            "extra": "iterations: 74696\ncpu: 9340.769251365575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8383.616565850405,
            "unit": "ns/iter",
            "extra": "iterations: 83485\ncpu: 8383.308378750746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3203.650527459694,
            "unit": "ns/iter",
            "extra": "iterations: 217173\ncpu: 3203.543258139801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15628.294860957454,
            "unit": "ns/iter",
            "extra": "iterations: 43763\ncpu: 15627.799739505828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12667.279220778832,
            "unit": "ns/iter",
            "extra": "iterations: 55132\ncpu: 12667.111659290482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12654.842836493515,
            "unit": "ns/iter",
            "extra": "iterations: 55350\ncpu: 12654.460704607098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13159.159791961101,
            "unit": "ns/iter",
            "extra": "iterations: 52875\ncpu: 13158.855791962153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28385.538101008362,
            "unit": "ns/iter",
            "extra": "iterations: 24750\ncpu: 28384.363636363483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99088.17169973782,
            "unit": "ns/iter",
            "extra": "iterations: 6954\ncpu: 99085.00143802233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 83528.34965207739,
            "unit": "ns/iter",
            "extra": "iterations: 8048\ncpu: 83524.42842942354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84300.05292478882,
            "unit": "ns/iter",
            "extra": "iterations: 8257\ncpu: 84299.40656412632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 83969.69149709759,
            "unit": "ns/iter",
            "extra": "iterations: 8256\ncpu: 83968.85901162683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 53759.43927532966,
            "unit": "ns/iter",
            "extra": "iterations: 13413\ncpu: 53758.532766719094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84522.43022717396,
            "unit": "ns/iter",
            "extra": "iterations: 8628\ncpu: 84521.34909596611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3116.769458409001,
            "unit": "ns/iter",
            "extra": "iterations: 217618\ncpu: 3116.627301050491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15616.218990122514,
            "unit": "ns/iter",
            "extra": "iterations: 43728\ncpu: 15615.80909257229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12612.948595827616,
            "unit": "ns/iter",
            "extra": "iterations: 54801\ncpu: 12612.72786992938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12643.328996415388,
            "unit": "ns/iter",
            "extra": "iterations: 55800\ncpu: 12643.136200716937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13034.417380104402,
            "unit": "ns/iter",
            "extra": "iterations: 52796\ncpu: 13034.25638305931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27157.00653518278,
            "unit": "ns/iter",
            "extra": "iterations: 25707\ncpu: 27156.268720581866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 96830.90576420681,
            "unit": "ns/iter",
            "extra": "iterations: 7269\ncpu: 96828.33952400653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83388.36124518626,
            "unit": "ns/iter",
            "extra": "iterations: 8288\ncpu: 83384.77316602257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81609.79792746929,
            "unit": "ns/iter",
            "extra": "iterations: 8492\ncpu: 81605.54639660801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 81855.80278367686,
            "unit": "ns/iter",
            "extra": "iterations: 8478\ncpu: 81852.18211842439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55943.44504490785,
            "unit": "ns/iter",
            "extra": "iterations: 12583\ncpu: 55941.738854009454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 82110.48241451563,
            "unit": "ns/iter",
            "extra": "iterations: 8217\ncpu: 82108.31203602278 ns\nthreads: 1"
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
        "date": 1702492986564,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 723.556272012957,
            "unit": "ns/iter",
            "extra": "iterations: 963072\ncpu: 723.5297049441787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11019.98198341646,
            "unit": "ns/iter",
            "extra": "iterations: 75375\ncpu: 11019.579436152571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23789.442336389922,
            "unit": "ns/iter",
            "extra": "iterations: 32837\ncpu: 23787.684624052137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37994.888546551156,
            "unit": "ns/iter",
            "extra": "iterations: 22395\ncpu: 37992.32417950434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47846.560163484806,
            "unit": "ns/iter",
            "extra": "iterations: 16638\ncpu: 47846.42384902034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59373.40871223201,
            "unit": "ns/iter",
            "extra": "iterations: 14164\ncpu: 59369.52838181305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59548.99360000354,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59547.33000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68187.32120402229,
            "unit": "ns/iter",
            "extra": "iterations: 12724\ncpu: 68181.16158440741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 79289.06826000536,
            "unit": "ns/iter",
            "extra": "iterations: 11046\ncpu: 79283.34238638433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 589.407169629714,
            "unit": "ns/iter",
            "extra": "iterations: 1186449\ncpu: 589.3639760326816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 505.4190619636859,
            "unit": "ns/iter",
            "extra": "iterations: 1380309\ncpu: 505.3951687629359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 489.2413880760699,
            "unit": "ns/iter",
            "extra": "iterations: 1431910\ncpu: 489.19561983644263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 492.5240776140882,
            "unit": "ns/iter",
            "extra": "iterations: 1419742\ncpu: 492.52181030074513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 978.3871847964592,
            "unit": "ns/iter",
            "extra": "iterations: 717195\ncpu: 978.3096647355316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4267.181864452165,
            "unit": "ns/iter",
            "extra": "iterations: 186650\ncpu: 4267.164211090273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19693.255993313418,
            "unit": "ns/iter",
            "extra": "iterations: 41880\ncpu: 19693.116045845265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15901.305023968549,
            "unit": "ns/iter",
            "extra": "iterations: 52150\ncpu: 15900.853307765998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15260.826868882321,
            "unit": "ns/iter",
            "extra": "iterations: 53936\ncpu: 15260.64224265793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15818.495840972411,
            "unit": "ns/iter",
            "extra": "iterations: 51815\ncpu: 15818.57377207372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 48300.259956007,
            "unit": "ns/iter",
            "extra": "iterations: 17276\ncpu: 48299.87265570728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 470251.9461045576,
            "unit": "ns/iter",
            "extra": "iterations: 1874\ncpu: 470246.74493063043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 380168.4620419072,
            "unit": "ns/iter",
            "extra": "iterations: 2292\ncpu: 380165.44502617704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 373090.8202150722,
            "unit": "ns/iter",
            "extra": "iterations: 2325\ncpu: 373087.44086021517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 376782.2307357302,
            "unit": "ns/iter",
            "extra": "iterations: 2297\ncpu: 376783.97910317767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 232111.8243279246,
            "unit": "ns/iter",
            "extra": "iterations: 3757\ncpu: 232112.7495342024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 378090.2566680809,
            "unit": "ns/iter",
            "extra": "iterations: 2287\ncpu: 378079.1867074779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1960397.7875000567,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1960325.2083333356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 734629.0583657646,
            "unit": "ns/iter",
            "extra": "iterations: 1285\ncpu: 734567.3929961079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2594103.58146052,
            "unit": "ns/iter",
            "extra": "iterations: 356\ncpu: 2593948.8764044936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4287.761741489936,
            "unit": "ns/iter",
            "extra": "iterations: 187242\ncpu: 4287.733521325333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19844.853836696853,
            "unit": "ns/iter",
            "extra": "iterations: 41481\ncpu: 19844.926592897828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15725.738276947151,
            "unit": "ns/iter",
            "extra": "iterations: 52674\ncpu: 15725.813494323584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15027.210624603083,
            "unit": "ns/iter",
            "extra": "iterations: 55155\ncpu: 15027.277672015187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15641.211087178302,
            "unit": "ns/iter",
            "extra": "iterations: 52926\ncpu: 15641.117787099014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 47897.07405287883,
            "unit": "ns/iter",
            "extra": "iterations: 17474\ncpu: 47896.45187135175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 481958.30828728894,
            "unit": "ns/iter",
            "extra": "iterations: 1810\ncpu: 481952.37569060765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 395037.0826223286,
            "unit": "ns/iter",
            "extra": "iterations: 2227\ncpu: 395030.848675346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 388327.05097514804,
            "unit": "ns/iter",
            "extra": "iterations: 2256\ncpu: 388328.5904255308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 387465.3818584132,
            "unit": "ns/iter",
            "extra": "iterations: 2260\ncpu: 387466.90265486564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 231637.6646437932,
            "unit": "ns/iter",
            "extra": "iterations: 3790\ncpu: 231638.60158311253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 389096.3959074733,
            "unit": "ns/iter",
            "extra": "iterations: 2248\ncpu: 389097.50889679755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1944937.714592349,
            "unit": "ns/iter",
            "extra": "iterations: 466\ncpu: 1944911.5879828418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 762363.7229507911,
            "unit": "ns/iter",
            "extra": "iterations: 1220\ncpu: 762359.3442622945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4345.78628844155,
            "unit": "ns/iter",
            "extra": "iterations: 186485\ncpu: 4345.703407780793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19549.236951687773,
            "unit": "ns/iter",
            "extra": "iterations: 35062\ncpu: 19549.326906622657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15700.727843764105,
            "unit": "ns/iter",
            "extra": "iterations: 52536\ncpu: 15700.795644891152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14299.088034943088,
            "unit": "ns/iter",
            "extra": "iterations: 57693\ncpu: 14299.154143483542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15196.971653660647,
            "unit": "ns/iter",
            "extra": "iterations: 53693\ncpu: 15197.027545490047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 48275.92255544052,
            "unit": "ns/iter",
            "extra": "iterations: 17406\ncpu: 48276.12317591649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 473233.8053908846,
            "unit": "ns/iter",
            "extra": "iterations: 1855\ncpu: 473235.52560647065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 387368.597593543,
            "unit": "ns/iter",
            "extra": "iterations: 2244\ncpu: 387370.0980392161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 376368.6621972377,
            "unit": "ns/iter",
            "extra": "iterations: 2312\ncpu: 376369.8961937705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 381879.7723896985,
            "unit": "ns/iter",
            "extra": "iterations: 2289\ncpu: 381877.41371777887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 237102.3133478119,
            "unit": "ns/iter",
            "extra": "iterations: 3686\ncpu: 237100.35268583873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 378962.3867761366,
            "unit": "ns/iter",
            "extra": "iterations: 2314\ncpu: 378959.72342264454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 307.343415834095,
            "unit": "ns/iter",
            "extra": "iterations: 2234201\ncpu: 307.3447733664068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1630.5057381118386,
            "unit": "ns/iter",
            "extra": "iterations: 430978\ncpu: 1630.4938999206543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1261.993201033884,
            "unit": "ns/iter",
            "extra": "iterations: 554349\ncpu: 1261.985139325587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1246.8958952114838,
            "unit": "ns/iter",
            "extra": "iterations: 561588\ncpu: 1246.8873978788745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1040.8994138029323,
            "unit": "ns/iter",
            "extra": "iterations: 673323\ncpu: 1040.9051822082492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8272.951412562996,
            "unit": "ns/iter",
            "extra": "iterations: 84775\ncpu: 8272.987319374764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18191.808053481556,
            "unit": "ns/iter",
            "extra": "iterations: 38443\ncpu: 18191.89709439953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4523.640976908935,
            "unit": "ns/iter",
            "extra": "iterations: 154692\ncpu: 4523.57781915035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4451.325875498178,
            "unit": "ns/iter",
            "extra": "iterations: 156882\ncpu: 4451.277393199942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4500.922426486725,
            "unit": "ns/iter",
            "extra": "iterations: 155517\ncpu: 4500.945877299541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9256.836266582663,
            "unit": "ns/iter",
            "extra": "iterations: 75684\ncpu: 9256.870672797446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8649.871535560995,
            "unit": "ns/iter",
            "extra": "iterations: 81182\ncpu: 8649.91254218924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3233.908808878451,
            "unit": "ns/iter",
            "extra": "iterations: 216611\ncpu: 3233.9244082710698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16128.875944352221,
            "unit": "ns/iter",
            "extra": "iterations: 43416\ncpu: 16128.73825317869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12799.23590634757,
            "unit": "ns/iter",
            "extra": "iterations: 54670\ncpu: 12799.127492226153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12724.802517273985,
            "unit": "ns/iter",
            "extra": "iterations: 55139\ncpu: 12724.864433522369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13375.06555457332,
            "unit": "ns/iter",
            "extra": "iterations: 52094\ncpu: 13374.966406880043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 30164.74337189967,
            "unit": "ns/iter",
            "extra": "iterations: 23423\ncpu: 30164.919096614067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 101579.85879463221,
            "unit": "ns/iter",
            "extra": "iterations: 6919\ncpu: 101577.3377655729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 87855.55861723315,
            "unit": "ns/iter",
            "extra": "iterations: 7984\ncpu: 87853.71993988116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85913.80577750884,
            "unit": "ns/iter",
            "extra": "iterations: 8135\ncpu: 85914.25937307827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 86263.58125154221,
            "unit": "ns/iter",
            "extra": "iterations: 8086\ncpu: 86262.9483057129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 56225.502061273066,
            "unit": "ns/iter",
            "extra": "iterations: 12371\ncpu: 56225.713361895156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 86310.5576093656,
            "unit": "ns/iter",
            "extra": "iterations: 8115\ncpu: 86309.6364756621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3212.831946352959,
            "unit": "ns/iter",
            "extra": "iterations: 219061\ncpu: 3212.8484759952794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16134.285066383387,
            "unit": "ns/iter",
            "extra": "iterations: 42555\ncpu: 16134.350840089355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12878.119512508949,
            "unit": "ns/iter",
            "extra": "iterations: 54237\ncpu: 12878.175415306889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12756.36381482155,
            "unit": "ns/iter",
            "extra": "iterations: 55017\ncpu: 12756.420742679496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13273.289667476445,
            "unit": "ns/iter",
            "extra": "iterations: 52688\ncpu: 13272.832523534822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27788.171061503323,
            "unit": "ns/iter",
            "extra": "iterations: 25219\ncpu: 27786.26035925273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 102295.55186489472,
            "unit": "ns/iter",
            "extra": "iterations: 7105\ncpu: 102288.95144264678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84373.27701564878,
            "unit": "ns/iter",
            "extra": "iterations: 8310\ncpu: 84362.04572803766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82391.958534573,
            "unit": "ns/iter",
            "extra": "iterations: 8489\ncpu: 82384.88632347871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83369.60385078659,
            "unit": "ns/iter",
            "extra": "iterations: 8310\ncpu: 83367.7737665464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55993.977628636654,
            "unit": "ns/iter",
            "extra": "iterations: 12516\ncpu: 55994.16746564396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 85298.37107377521,
            "unit": "ns/iter",
            "extra": "iterations: 8214\ncpu: 85297.73557341103 ns\nthreads: 1"
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
        "date": 1702503989393,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 703.383581649132,
            "unit": "ns/iter",
            "extra": "iterations: 996312\ncpu: 703.3761512457946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10966.542995067162,
            "unit": "ns/iter",
            "extra": "iterations: 75404\ncpu: 10965.712694286776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24660.88407904014,
            "unit": "ns/iter",
            "extra": "iterations: 33704\ncpu: 24660.980892475665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38452.17669190715,
            "unit": "ns/iter",
            "extra": "iterations: 20997\ncpu: 38450.61199218937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48405.108264569506,
            "unit": "ns/iter",
            "extra": "iterations: 16238\ncpu: 48401.976844439014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59183.89640339218,
            "unit": "ns/iter",
            "extra": "iterations: 14180\ncpu: 59182.40479548657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59574.280899994395,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59573.440000000046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 69292.22867846052,
            "unit": "ns/iter",
            "extra": "iterations: 12546\ncpu: 69290.90546787818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 79624.48544130554,
            "unit": "ns/iter",
            "extra": "iterations: 10990\ncpu: 79623.00272975443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 601.5331598622794,
            "unit": "ns/iter",
            "extra": "iterations: 1167918\ncpu: 601.5085819381153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 524.9207115478433,
            "unit": "ns/iter",
            "extra": "iterations: 1366542\ncpu: 524.9226880695946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 493.3626622398303,
            "unit": "ns/iter",
            "extra": "iterations: 1421044\ncpu: 493.3565744621557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 501.6929927253829,
            "unit": "ns/iter",
            "extra": "iterations: 1397462\ncpu: 501.6947866918745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 985.2460998890813,
            "unit": "ns/iter",
            "extra": "iterations: 708826\ncpu: 985.2369975141997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4389.729763551506,
            "unit": "ns/iter",
            "extra": "iterations: 182196\ncpu: 4389.734132472721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 20044.797602239967,
            "unit": "ns/iter",
            "extra": "iterations: 41789\ncpu: 20044.518892531523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15874.119965379306,
            "unit": "ns/iter",
            "extra": "iterations: 51990\ncpu: 15873.939219080617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15265.260859096727,
            "unit": "ns/iter",
            "extra": "iterations: 53987\ncpu: 15265.071220849466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15823.781243408708,
            "unit": "ns/iter",
            "extra": "iterations: 52163\ncpu: 15823.756302359881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 48704.68379933762,
            "unit": "ns/iter",
            "extra": "iterations: 17024\ncpu: 48703.641917293324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 480059.49543747475,
            "unit": "ns/iter",
            "extra": "iterations: 1863\ncpu: 480054.53569511574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 382039.3030973296,
            "unit": "ns/iter",
            "extra": "iterations: 2260\ncpu: 382031.6371681411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 379809.7931788297,
            "unit": "ns/iter",
            "extra": "iterations: 2287\ncpu: 379804.06646261376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 378957.5167609934,
            "unit": "ns/iter",
            "extra": "iterations: 2297\ncpu: 378958.8158467566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 231998.57643908734,
            "unit": "ns/iter",
            "extra": "iterations: 3735\ncpu: 231991.5127175369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 379162.46961808595,
            "unit": "ns/iter",
            "extra": "iterations: 2304\ncpu: 379164.105902777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1926306.2410901613,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1926245.9119496837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 761455.109943369,
            "unit": "ns/iter",
            "extra": "iterations: 1237\ncpu: 761445.513338725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2578574.221909898,
            "unit": "ns/iter",
            "extra": "iterations: 356\ncpu: 2578412.359550557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4351.62664265838,
            "unit": "ns/iter",
            "extra": "iterations: 184381\ncpu: 4351.404428872829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19637.421098953397,
            "unit": "ns/iter",
            "extra": "iterations: 42040\ncpu: 19636.46289248327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15823.462149606643,
            "unit": "ns/iter",
            "extra": "iterations: 51228\ncpu: 15822.610681658536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15117.025497015766,
            "unit": "ns/iter",
            "extra": "iterations: 53771\ncpu: 15116.352680813025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15746.347569636511,
            "unit": "ns/iter",
            "extra": "iterations: 50692\ncpu: 15745.606801862115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 48152.065784107275,
            "unit": "ns/iter",
            "extra": "iterations: 17147\ncpu: 48150.21286522397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 482581.0413678976,
            "unit": "ns/iter",
            "extra": "iterations: 1813\ncpu: 482567.4572531715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 393376.2756264359,
            "unit": "ns/iter",
            "extra": "iterations: 2195\ncpu: 393355.03416856594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 385599.20431526954,
            "unit": "ns/iter",
            "extra": "iterations: 2271\ncpu: 385580.36107441643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 382408.9377192913,
            "unit": "ns/iter",
            "extra": "iterations: 2280\ncpu: 382388.99122807075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 230507.2594537981,
            "unit": "ns/iter",
            "extra": "iterations: 3808\ncpu: 230498.05672268872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 386971.80954485235,
            "unit": "ns/iter",
            "extra": "iterations: 2263\ncpu: 386966.72558550484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1923810.854430318,
            "unit": "ns/iter",
            "extra": "iterations: 474\ncpu: 1923798.5232067558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 772709.8044554784,
            "unit": "ns/iter",
            "extra": "iterations: 1212\ncpu: 772679.1254125419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4377.769902463974,
            "unit": "ns/iter",
            "extra": "iterations: 184035\ncpu: 4377.597196185543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19666.715285714938,
            "unit": "ns/iter",
            "extra": "iterations: 42000\ncpu: 19665.866666666636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15773.945070878277,
            "unit": "ns/iter",
            "extra": "iterations: 52413\ncpu: 15773.153606929638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15060.622418663888,
            "unit": "ns/iter",
            "extra": "iterations: 54865\ncpu: 15059.945320331737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15651.875735600903,
            "unit": "ns/iter",
            "extra": "iterations: 52678\ncpu: 15651.395269372424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 48035.34994233119,
            "unit": "ns/iter",
            "extra": "iterations: 17340\ncpu: 48032.923875432665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 471493.1949516373,
            "unit": "ns/iter",
            "extra": "iterations: 1862\ncpu: 471468.2599355518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 383325.98715110304,
            "unit": "ns/iter",
            "extra": "iterations: 2257\ncpu: 383315.9060700048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 377658.6556950849,
            "unit": "ns/iter",
            "extra": "iterations: 2309\ncpu: 377636.81247293134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 379008.0925282137,
            "unit": "ns/iter",
            "extra": "iterations: 2302\ncpu: 378991.6159861006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 232162.15138705363,
            "unit": "ns/iter",
            "extra": "iterations: 3785\ncpu: 232153.28929986907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 376839.5572117421,
            "unit": "ns/iter",
            "extra": "iterations: 2281\ncpu: 376819.9035510731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 306.84502216344686,
            "unit": "ns/iter",
            "extra": "iterations: 2279655\ncpu: 306.8309459106738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1633.7235870611335,
            "unit": "ns/iter",
            "extra": "iterations: 431105\ncpu: 1633.6242910659755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1265.0203415975138,
            "unit": "ns/iter",
            "extra": "iterations: 554922\ncpu: 1264.9599403159395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1286.4401142922718,
            "unit": "ns/iter",
            "extra": "iterations: 560668\ncpu: 1286.3939086946293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1042.344267083288,
            "unit": "ns/iter",
            "extra": "iterations: 674456\ncpu: 1042.27940740389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8292.668230999545,
            "unit": "ns/iter",
            "extra": "iterations: 84381\ncpu: 8292.712814496235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19224.58825963407,
            "unit": "ns/iter",
            "extra": "iterations: 36251\ncpu: 19224.44346362852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4567.122412071082,
            "unit": "ns/iter",
            "extra": "iterations: 153163\ncpu: 4567.071681802981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4511.0737743533455,
            "unit": "ns/iter",
            "extra": "iterations: 154959\ncpu: 4510.969998515693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4566.783923654444,
            "unit": "ns/iter",
            "extra": "iterations: 153617\ncpu: 4566.751075727283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9662.174076627194,
            "unit": "ns/iter",
            "extra": "iterations: 72560\ncpu: 9662.001102535842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8613.088599477685,
            "unit": "ns/iter",
            "extra": "iterations: 81084\ncpu: 8613.129594001242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3260.6217303914677,
            "unit": "ns/iter",
            "extra": "iterations: 214437\ncpu: 3260.642519714435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16200.96330508218,
            "unit": "ns/iter",
            "extra": "iterations: 43303\ncpu: 16201.036879661984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12901.043119719128,
            "unit": "ns/iter",
            "extra": "iterations: 54569\ncpu: 12900.932764023568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12852.366758014527,
            "unit": "ns/iter",
            "extra": "iterations: 54371\ncpu: 12852.11785694593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13498.153170920836,
            "unit": "ns/iter",
            "extra": "iterations: 51720\ncpu: 13498.228924980698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28518.001265770414,
            "unit": "ns/iter",
            "extra": "iterations: 24491\ncpu: 28517.496223102105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100922.76654702048,
            "unit": "ns/iter",
            "extra": "iterations: 6965\ncpu: 100923.30222541136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 87376.83442787614,
            "unit": "ns/iter",
            "extra": "iterations: 7918\ncpu: 87375.4483455417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85180.76724975018,
            "unit": "ns/iter",
            "extra": "iterations: 8232\ncpu: 85181.08600583143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 86266.0503517264,
            "unit": "ns/iter",
            "extra": "iterations: 8103\ncpu: 86266.41984450322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 56428.687328709704,
            "unit": "ns/iter",
            "extra": "iterations: 12406\ncpu: 56427.518942447125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 86158.7392909871,
            "unit": "ns/iter",
            "extra": "iterations: 8124\ncpu: 86159.07188577189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3213.3473007975135,
            "unit": "ns/iter",
            "extra": "iterations: 217768\ncpu: 3213.2994746702743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16148.392747287162,
            "unit": "ns/iter",
            "extra": "iterations: 43239\ncpu: 16148.463192950703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12884.39977179054,
            "unit": "ns/iter",
            "extra": "iterations: 54336\ncpu: 12884.444935217787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12740.234475100295,
            "unit": "ns/iter",
            "extra": "iterations: 54944\ncpu: 12740.297393709981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13295.377249272147,
            "unit": "ns/iter",
            "extra": "iterations: 52517\ncpu: 13295.260582287738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27906.13302003366,
            "unit": "ns/iter",
            "extra": "iterations: 25109\ncpu: 27905.65932534152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 99859.56436633783,
            "unit": "ns/iter",
            "extra": "iterations: 6999\ncpu: 99860.00857265374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 85499.76296205804,
            "unit": "ns/iter",
            "extra": "iterations: 8197\ncpu: 85498.35305599737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83705.960706553,
            "unit": "ns/iter",
            "extra": "iterations: 8322\ncpu: 83705.33525594776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84772.99613341007,
            "unit": "ns/iter",
            "extra": "iterations: 8276\ncpu: 84772.28129531296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 56653.34945233018,
            "unit": "ns/iter",
            "extra": "iterations: 12325\ncpu: 56652.097363083165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 85440.66178266029,
            "unit": "ns/iter",
            "extra": "iterations: 8190\ncpu: 85441.00122100004 ns\nthreads: 1"
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
        "date": 1705575682024,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 715.450789651201,
            "unit": "ns/iter",
            "extra": "iterations: 982649\ncpu: 715.4151685902087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10986.31083893364,
            "unit": "ns/iter",
            "extra": "iterations: 75441\ncpu: 10986.27006534908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24516.961576876638,
            "unit": "ns/iter",
            "extra": "iterations: 34042\ncpu: 24516.711709065275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38057.55520790591,
            "unit": "ns/iter",
            "extra": "iterations: 22053\ncpu: 38057.41622454993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48118.660527596796,
            "unit": "ns/iter",
            "extra": "iterations: 16452\ncpu: 48117.60880136156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59588.180159234245,
            "unit": "ns/iter",
            "extra": "iterations: 14193\ncpu: 59586.775170858906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59297.795600002704,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59296.529999999955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68574.51247433931,
            "unit": "ns/iter",
            "extra": "iterations: 12666\ncpu: 68572.98278856778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78978.38234231307,
            "unit": "ns/iter",
            "extra": "iterations: 11066\ncpu: 78976.97451653713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 595.4072335766082,
            "unit": "ns/iter",
            "extra": "iterations: 1184421\ncpu: 595.398848889035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 512.7771601139247,
            "unit": "ns/iter",
            "extra": "iterations: 1368238\ncpu: 512.77460500293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 501.9025226594092,
            "unit": "ns/iter",
            "extra": "iterations: 1406809\ncpu: 501.88895578575335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 501.8855980959962,
            "unit": "ns/iter",
            "extra": "iterations: 1397468\ncpu: 501.87875500548176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 988.2006991498226,
            "unit": "ns/iter",
            "extra": "iterations: 713152\ncpu: 988.196485461725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4261.233372198119,
            "unit": "ns/iter",
            "extra": "iterations: 189547\ncpu: 4261.224392894633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19666.353559038293,
            "unit": "ns/iter",
            "extra": "iterations: 41795\ncpu: 19666.249551381767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15808.811664548615,
            "unit": "ns/iter",
            "extra": "iterations: 51918\ncpu: 15808.326591933423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15162.324331832993,
            "unit": "ns/iter",
            "extra": "iterations: 53991\ncpu: 15162.291863458711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15761.566804803637,
            "unit": "ns/iter",
            "extra": "iterations: 52122\ncpu: 15761.348374966485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 48048.24966814852,
            "unit": "ns/iter",
            "extra": "iterations: 17327\ncpu: 48047.480810296154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 465433.01184705563,
            "unit": "ns/iter",
            "extra": "iterations: 1857\ncpu: 465431.23317178263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 381455.5698497089,
            "unit": "ns/iter",
            "extra": "iterations: 2262\ncpu: 381444.650751548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 377546.65386295534,
            "unit": "ns/iter",
            "extra": "iterations: 2291\ncpu: 377541.6412047144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 375769.65095982706,
            "unit": "ns/iter",
            "extra": "iterations: 2292\ncpu: 375761.60558464227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 234026.51839913725,
            "unit": "ns/iter",
            "extra": "iterations: 3723\ncpu: 234024.17405318323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 379584.73852817505,
            "unit": "ns/iter",
            "extra": "iterations: 2310\ncpu: 379578.3549783555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1926034.7775468484,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1925992.3076923063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 771302.6674877232,
            "unit": "ns/iter",
            "extra": "iterations: 1218\ncpu: 771289.4909687996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2604003.7022472066,
            "unit": "ns/iter",
            "extra": "iterations: 356\ncpu: 2603925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4194.002394788821,
            "unit": "ns/iter",
            "extra": "iterations: 190831\ncpu: 4193.928135365841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19708.749315753525,
            "unit": "ns/iter",
            "extra": "iterations: 42017\ncpu: 19708.096722754977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15811.688057076422,
            "unit": "ns/iter",
            "extra": "iterations: 52282\ncpu: 15811.34233579432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15074.052811493413,
            "unit": "ns/iter",
            "extra": "iterations: 54704\ncpu: 15073.853831529648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15365.567001752926,
            "unit": "ns/iter",
            "extra": "iterations: 53021\ncpu: 15365.474057448993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 47882.947123664395,
            "unit": "ns/iter",
            "extra": "iterations: 17418\ncpu: 47882.35733149613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 481464.03997776634,
            "unit": "ns/iter",
            "extra": "iterations: 1801\ncpu: 481462.40977234783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 396617.1347031701,
            "unit": "ns/iter",
            "extra": "iterations: 2190\ncpu: 396611.4611872137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 389086.2559178396,
            "unit": "ns/iter",
            "extra": "iterations: 2239\ncpu: 389078.82983474736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 387558.6478126441,
            "unit": "ns/iter",
            "extra": "iterations: 2263\ncpu: 387557.7993813508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 230255.66587741327,
            "unit": "ns/iter",
            "extra": "iterations: 3801\ncpu: 230241.88371481135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 389579.42534337484,
            "unit": "ns/iter",
            "extra": "iterations: 2257\ncpu: 389573.3717323881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1930995.98936171,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 1930871.7021276564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 749038.3495999594,
            "unit": "ns/iter",
            "extra": "iterations: 1250\ncpu: 748998.3199999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4347.3009970885805,
            "unit": "ns/iter",
            "extra": "iterations: 184437\ncpu: 4347.009005785159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19768.924859865136,
            "unit": "ns/iter",
            "extra": "iterations: 42281\ncpu: 19768.1204323455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15727.411413177904,
            "unit": "ns/iter",
            "extra": "iterations: 52711\ncpu: 15726.47454990424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15037.046623180435,
            "unit": "ns/iter",
            "extra": "iterations: 55037\ncpu: 15036.459109326503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15545.788497705376,
            "unit": "ns/iter",
            "extra": "iterations: 53172\ncpu: 15544.980440833562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 48298.15192573841,
            "unit": "ns/iter",
            "extra": "iterations: 17344\ncpu: 48295.22024907765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 471055.68093177053,
            "unit": "ns/iter",
            "extra": "iterations: 1846\ncpu: 471026.16468038934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 385352.73930303514,
            "unit": "ns/iter",
            "extra": "iterations: 2267\ncpu: 385354.78606087435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 379920.1766233456,
            "unit": "ns/iter",
            "extra": "iterations: 2310\ncpu: 379905.8441558453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 382794.5700650734,
            "unit": "ns/iter",
            "extra": "iterations: 2305\ncpu: 382224.772234271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 231064.3357836431,
            "unit": "ns/iter",
            "extra": "iterations: 3809\ncpu: 231056.65529010288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 376142.31502147915,
            "unit": "ns/iter",
            "extra": "iterations: 2330\ncpu: 376119.6566523599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 306.4900198257559,
            "unit": "ns/iter",
            "extra": "iterations: 2318196\ncpu: 306.4848701317758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1574.6092209714752,
            "unit": "ns/iter",
            "extra": "iterations: 442795\ncpu: 1574.510778125325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1182.9211581900618,
            "unit": "ns/iter",
            "extra": "iterations: 592338\ncpu: 1182.819606373387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1257.650831898241,
            "unit": "ns/iter",
            "extra": "iterations: 558602\ncpu: 1257.6277922384825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1041.5707127892367,
            "unit": "ns/iter",
            "extra": "iterations: 672990\ncpu: 1041.5762492756144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8232.679985897365,
            "unit": "ns/iter",
            "extra": "iterations: 85090\ncpu: 8232.526736396681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19391.07777005334,
            "unit": "ns/iter",
            "extra": "iterations: 35965\ncpu: 19390.768803002953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4522.6361193128105,
            "unit": "ns/iter",
            "extra": "iterations: 154787\ncpu: 4522.567786700363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4450.40180423251,
            "unit": "ns/iter",
            "extra": "iterations: 157186\ncpu: 4450.213123306169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4498.421751361214,
            "unit": "ns/iter",
            "extra": "iterations: 155696\ncpu: 4498.096290206572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9458.588195523558,
            "unit": "ns/iter",
            "extra": "iterations: 73955\ncpu: 9458.246230816108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8503.022046305066,
            "unit": "ns/iter",
            "extra": "iterations: 82236\ncpu: 8502.85398122482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3251.430303285714,
            "unit": "ns/iter",
            "extra": "iterations: 213726\ncpu: 3251.3358225017196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16111.396312623623,
            "unit": "ns/iter",
            "extra": "iterations: 43554\ncpu: 16111.000137760164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12772.204211369846,
            "unit": "ns/iter",
            "extra": "iterations: 54899\ncpu: 12771.850124774737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12750.543417775114,
            "unit": "ns/iter",
            "extra": "iterations: 54989\ncpu: 12750.09547363995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13287.367004323396,
            "unit": "ns/iter",
            "extra": "iterations: 52716\ncpu: 13286.438652401584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28401.765156430523,
            "unit": "ns/iter",
            "extra": "iterations: 24676\ncpu: 28400.17020586817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99958.82336142664,
            "unit": "ns/iter",
            "extra": "iterations: 7003\ncpu: 99951.04955019278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86337.55934498755,
            "unit": "ns/iter",
            "extra": "iterations: 8122\ncpu: 86332.35656242294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84361.56402219378,
            "unit": "ns/iter",
            "extra": "iterations: 8294\ncpu: 84361.55051844816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85468.06355207725,
            "unit": "ns/iter",
            "extra": "iterations: 8198\ncpu: 85461.17345694054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55410.01345469562,
            "unit": "ns/iter",
            "extra": "iterations: 12635\ncpu: 55407.11515631224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85934.86675655986,
            "unit": "ns/iter",
            "extra": "iterations: 8158\ncpu: 85928.81833782798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3269.7951101880067,
            "unit": "ns/iter",
            "extra": "iterations: 215223\ncpu: 3269.5780655412764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16066.019622694292,
            "unit": "ns/iter",
            "extra": "iterations: 43572\ncpu: 16065.073900670428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13765.801820742328,
            "unit": "ns/iter",
            "extra": "iterations: 54703\ncpu: 13764.654589327594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12602.727700797246,
            "unit": "ns/iter",
            "extra": "iterations: 55641\ncpu: 12602.800093456175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13194.738606856456,
            "unit": "ns/iter",
            "extra": "iterations: 53146\ncpu: 13194.390923117298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27406.543041691,
            "unit": "ns/iter",
            "extra": "iterations: 25545\ncpu: 27406.694069289337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98935.71519164553,
            "unit": "ns/iter",
            "extra": "iterations: 7096\ncpu: 98926.77564825262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83827.78983861806,
            "unit": "ns/iter",
            "extra": "iterations: 8365\ncpu: 83822.90496114832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81932.50421742743,
            "unit": "ns/iter",
            "extra": "iterations: 8536\ncpu: 81928.47938144363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83021.65193174376,
            "unit": "ns/iter",
            "extra": "iterations: 8438\ncpu: 83019.15145769004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55918.31271504688,
            "unit": "ns/iter",
            "extra": "iterations: 12497\ncpu: 55916.419940786494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 85460.13386308005,
            "unit": "ns/iter",
            "extra": "iterations: 8180\ncpu: 85454.10757946188 ns\nthreads: 1"
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
        "date": 1705773502092,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 711.0180955251564,
            "unit": "ns/iter",
            "extra": "iterations: 982066\ncpu: 711.0025191789555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11106.142321847617,
            "unit": "ns/iter",
            "extra": "iterations: 75259\ncpu: 11106.148101888146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24774.935003104834,
            "unit": "ns/iter",
            "extra": "iterations: 33817\ncpu: 24774.61336014431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38837.867417840054,
            "unit": "ns/iter",
            "extra": "iterations: 21300\ncpu: 38837.821596244146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48526.67069282737,
            "unit": "ns/iter",
            "extra": "iterations: 16310\ncpu: 48525.683629675026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 60280.16394486162,
            "unit": "ns/iter",
            "extra": "iterations: 14145\ncpu: 60280.19088016971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60170.73029998983,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60169.389999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 70132.66161007877,
            "unit": "ns/iter",
            "extra": "iterations: 12459\ncpu: 70131.82438397939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78079.4091568238,
            "unit": "ns/iter",
            "extra": "iterations: 9654\ncpu: 78076.28962088257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 575.8555112423229,
            "unit": "ns/iter",
            "extra": "iterations: 1209319\ncpu: 575.8449176768083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 491.47174423991896,
            "unit": "ns/iter",
            "extra": "iterations: 1441069\ncpu: 491.4422557143347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 482.2747546999167,
            "unit": "ns/iter",
            "extra": "iterations: 1450876\ncpu: 482.2558923023059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 482.0600960414045,
            "unit": "ns/iter",
            "extra": "iterations: 1453124\ncpu: 482.06333389304757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 971.6289198533466,
            "unit": "ns/iter",
            "extra": "iterations: 721615\ncpu: 971.5844321417937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4262.907451801278,
            "unit": "ns/iter",
            "extra": "iterations: 187297\ncpu: 4262.905438955241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19595.07079518568,
            "unit": "ns/iter",
            "extra": "iterations: 41726\ncpu: 19593.756890188415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15728.87013061712,
            "unit": "ns/iter",
            "extra": "iterations: 52214\ncpu: 15728.835178304631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15018.205486958032,
            "unit": "ns/iter",
            "extra": "iterations: 54748\ncpu: 15018.004310659777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15144.521389681815,
            "unit": "ns/iter",
            "extra": "iterations: 53998\ncpu: 15144.39053298266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 49609.11460226523,
            "unit": "ns/iter",
            "extra": "iterations: 17059\ncpu: 49608.21853567031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 474133.9288770139,
            "unit": "ns/iter",
            "extra": "iterations: 1870\ncpu: 474120.05347593623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 378218.1216861893,
            "unit": "ns/iter",
            "extra": "iterations: 2301\ncpu: 378215.5584528459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 375225.0208333388,
            "unit": "ns/iter",
            "extra": "iterations: 2304\ncpu: 375217.53472222196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 376156.3859724629,
            "unit": "ns/iter",
            "extra": "iterations: 2324\ncpu: 376152.36660929356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 232207.08583577545,
            "unit": "ns/iter",
            "extra": "iterations: 3763\ncpu: 232207.36114801985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 376561.6069414391,
            "unit": "ns/iter",
            "extra": "iterations: 2305\ncpu: 376553.79609544546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1925808.6825725306,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1925771.5767634865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 753748.1821085481,
            "unit": "ns/iter",
            "extra": "iterations: 1252\ncpu: 753728.5143769968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2573796.3501399485,
            "unit": "ns/iter",
            "extra": "iterations: 357\ncpu: 2573725.490196079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4303.073434303311,
            "unit": "ns/iter",
            "extra": "iterations: 181836\ncpu: 4294.368001935798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19867.73972438395,
            "unit": "ns/iter",
            "extra": "iterations: 41652\ncpu: 19867.235666954886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15957.752586074888,
            "unit": "ns/iter",
            "extra": "iterations: 51816\ncpu: 15957.410838351052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15396.438232508484,
            "unit": "ns/iter",
            "extra": "iterations: 53839\ncpu: 15396.433811920813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15875.282957629195,
            "unit": "ns/iter",
            "extra": "iterations: 50838\ncpu: 15875.052126362203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 48586.37772286072,
            "unit": "ns/iter",
            "extra": "iterations: 17399\ncpu: 48585.91298350495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 479150.25208220456,
            "unit": "ns/iter",
            "extra": "iterations: 1801\ncpu: 479153.24819544674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 390904.05645888747,
            "unit": "ns/iter",
            "extra": "iterations: 2214\ncpu: 390895.52845528256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 382056.26795096043,
            "unit": "ns/iter",
            "extra": "iterations: 2284\ncpu: 382049.9562171636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 381013.3858576827,
            "unit": "ns/iter",
            "extra": "iterations: 2291\ncpu: 381006.6346573533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 229135.6860526225,
            "unit": "ns/iter",
            "extra": "iterations: 3800\ncpu: 229133.71052631622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 383336.97939500515,
            "unit": "ns/iter",
            "extra": "iterations: 2281\ncpu: 383327.22490135866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1914034.0651262263,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1913988.8655462144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 769329.3182565204,
            "unit": "ns/iter",
            "extra": "iterations: 1216\ncpu: 769306.4144736852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4348.477196361568,
            "unit": "ns/iter",
            "extra": "iterations: 184817\ncpu: 4348.308326614951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19532.963031988984,
            "unit": "ns/iter",
            "extra": "iterations: 42388\ncpu: 19532.136453713203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15661.664071379306,
            "unit": "ns/iter",
            "extra": "iterations: 52788\ncpu: 15661.11616276421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14984.14577609494,
            "unit": "ns/iter",
            "extra": "iterations: 54961\ncpu: 14983.551973217305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15550.16924521214,
            "unit": "ns/iter",
            "extra": "iterations: 53260\ncpu: 15549.5662786331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 48045.9435309261,
            "unit": "ns/iter",
            "extra": "iterations: 17089\ncpu: 48043.911287963245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 468927.65593129856,
            "unit": "ns/iter",
            "extra": "iterations: 1863\ncpu: 468912.66774020257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 384216.0530503921,
            "unit": "ns/iter",
            "extra": "iterations: 2262\ncpu: 384213.21839080297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 378119.4413943492,
            "unit": "ns/iter",
            "extra": "iterations: 2295\ncpu: 378107.0152505457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 378214.55128760065,
            "unit": "ns/iter",
            "extra": "iterations: 2291\ncpu: 378201.09122653975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 231833.9079331129,
            "unit": "ns/iter",
            "extra": "iterations: 3769\ncpu: 231824.83417352184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 376121.97580994584,
            "unit": "ns/iter",
            "extra": "iterations: 2315\ncpu: 376110.4103671727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 304.186887019452,
            "unit": "ns/iter",
            "extra": "iterations: 2303397\ncpu: 304.1760061335524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1655.8837996943773,
            "unit": "ns/iter",
            "extra": "iterations: 423992\ncpu: 1655.8222796656519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1300.6630263846748,
            "unit": "ns/iter",
            "extra": "iterations: 537962\ncpu: 1300.5911198188767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1242.6352089372858,
            "unit": "ns/iter",
            "extra": "iterations: 562681\ncpu: 1242.5793655730317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1046.3575350548479,
            "unit": "ns/iter",
            "extra": "iterations: 666027\ncpu: 1046.3458688611727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8820.93855679081,
            "unit": "ns/iter",
            "extra": "iterations: 78658\ncpu: 8820.7251646369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19104.06690739816,
            "unit": "ns/iter",
            "extra": "iterations: 38217\ncpu: 19103.754873485923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4535.807306646263,
            "unit": "ns/iter",
            "extra": "iterations: 154380\ncpu: 4535.757222438186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4490.4560831410945,
            "unit": "ns/iter",
            "extra": "iterations: 155783\ncpu: 4490.447609816231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4536.590281160363,
            "unit": "ns/iter",
            "extra": "iterations: 153969\ncpu: 4536.478122219388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9153.368918478009,
            "unit": "ns/iter",
            "extra": "iterations: 76605\ncpu: 9153.426016578464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8615.286969901583,
            "unit": "ns/iter",
            "extra": "iterations: 81235\ncpu: 8615.181879731623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3244.99025689332,
            "unit": "ns/iter",
            "extra": "iterations: 215537\ncpu: 3244.9853157462944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16246.278152292743,
            "unit": "ns/iter",
            "extra": "iterations: 43167\ncpu: 16246.102346700036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12898.649689396096,
            "unit": "ns/iter",
            "extra": "iterations: 54249\ncpu: 12898.376006931065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12860.469671950143,
            "unit": "ns/iter",
            "extra": "iterations: 54504\ncpu: 12860.446939674144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13419.412320082598,
            "unit": "ns/iter",
            "extra": "iterations: 51899\ncpu: 13419.166072564087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28621.355295366156,
            "unit": "ns/iter",
            "extra": "iterations: 24512\ncpu: 28621.340567884956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 101015.8416126711,
            "unit": "ns/iter",
            "extra": "iterations: 6945\ncpu: 101013.56371490269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 87636.2490617906,
            "unit": "ns/iter",
            "extra": "iterations: 7994\ncpu: 87636.790092568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 86274.72944361849,
            "unit": "ns/iter",
            "extra": "iterations: 8124\ncpu: 86273.46134908992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 87120.25264843476,
            "unit": "ns/iter",
            "extra": "iterations: 8118\ncpu: 87118.76077851735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55971.267563882684,
            "unit": "ns/iter",
            "extra": "iterations: 12483\ncpu: 55971.216854923114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 87323.30063567212,
            "unit": "ns/iter",
            "extra": "iterations: 8023\ncpu: 87321.41343637116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3229.1749343622328,
            "unit": "ns/iter",
            "extra": "iterations: 215195\ncpu: 3229.1201003740775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16249.835093267118,
            "unit": "ns/iter",
            "extra": "iterations: 42994\ncpu: 16249.681350886114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12979.108950353917,
            "unit": "ns/iter",
            "extra": "iterations: 53942\ncpu: 12979.010789366563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12813.44902489691,
            "unit": "ns/iter",
            "extra": "iterations: 54507\ncpu: 12813.319390169883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13292.82573522521,
            "unit": "ns/iter",
            "extra": "iterations: 52535\ncpu: 13292.50785190845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27763.099288525427,
            "unit": "ns/iter",
            "extra": "iterations: 25159\ncpu: 27763.058945109184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 99073.65736937827,
            "unit": "ns/iter",
            "extra": "iterations: 7063\ncpu: 99071.7825286699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84629.9468006933,
            "unit": "ns/iter",
            "extra": "iterations: 8158\ncpu: 84630.47315518586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83298.44084220224,
            "unit": "ns/iter",
            "extra": "iterations: 8359\ncpu: 83298.13374805615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84273.81441441929,
            "unit": "ns/iter",
            "extra": "iterations: 8325\ncpu: 84273.17717717671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55677.43779023122,
            "unit": "ns/iter",
            "extra": "iterations: 12490\ncpu: 55677.33386709378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 86178.34342814735,
            "unit": "ns/iter",
            "extra": "iterations: 8156\ncpu: 86176.45904855344 ns\nthreads: 1"
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
        "date": 1705775401184,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 715.7391884069261,
            "unit": "ns/iter",
            "extra": "iterations: 974232\ncpu: 715.7352663431298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10990.145149729715,
            "unit": "ns/iter",
            "extra": "iterations: 75336\ncpu: 10989.682223638101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24450.925569916766,
            "unit": "ns/iter",
            "extra": "iterations: 34435\ncpu: 24450.17278931319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38411.5849993193,
            "unit": "ns/iter",
            "extra": "iterations: 21959\ncpu: 38411.11161710461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48200.45280520227,
            "unit": "ns/iter",
            "extra": "iterations: 16612\ncpu: 48198.68167589693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 50279.945299996594,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50279.14000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60862.52290000403,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60860.540000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 70646.72702175828,
            "unit": "ns/iter",
            "extra": "iterations: 12316\ncpu: 70643.89412146798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 80252.2304260686,
            "unit": "ns/iter",
            "extra": "iterations: 10984\ncpu: 80250.61908230145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 588.6145311554837,
            "unit": "ns/iter",
            "extra": "iterations: 1178461\ncpu: 588.5982650253167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 509.2830296901231,
            "unit": "ns/iter",
            "extra": "iterations: 1377329\ncpu: 509.27287525348044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 487.3678385106663,
            "unit": "ns/iter",
            "extra": "iterations: 1428404\ncpu: 487.3545579541917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 492.7574628819674,
            "unit": "ns/iter",
            "extra": "iterations: 1432523\ncpu: 492.7377082252783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 976.6924036173657,
            "unit": "ns/iter",
            "extra": "iterations: 716104\ncpu: 976.6688916693673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4267.383704340408,
            "unit": "ns/iter",
            "extra": "iterations: 188541\ncpu: 4267.297829119397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19682.815771193928,
            "unit": "ns/iter",
            "extra": "iterations: 41747\ncpu: 19682.2502215728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15835.097585474374,
            "unit": "ns/iter",
            "extra": "iterations: 51770\ncpu: 15834.662932200103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15065.682281358642,
            "unit": "ns/iter",
            "extra": "iterations: 54564\ncpu: 15065.290301297544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15577.870916863967,
            "unit": "ns/iter",
            "extra": "iterations: 52625\ncpu: 15577.546793349187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 47433.39362568481,
            "unit": "ns/iter",
            "extra": "iterations: 17194\ncpu: 47431.039897638795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 468336.0206896777,
            "unit": "ns/iter",
            "extra": "iterations: 1885\ncpu: 468316.49867373984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 378975.9286025211,
            "unit": "ns/iter",
            "extra": "iterations: 2297\ncpu: 378949.54288201994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 372638.08652606007,
            "unit": "ns/iter",
            "extra": "iterations: 2323\ncpu: 372622.94446836045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 374040.8178278062,
            "unit": "ns/iter",
            "extra": "iterations: 2311\ncpu: 374035.95845954044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 230873.51682118466,
            "unit": "ns/iter",
            "extra": "iterations: 3775\ncpu: 230865.748344371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 371701.08168529137,
            "unit": "ns/iter",
            "extra": "iterations: 2326\ncpu: 371693.4221840063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1906140.2723492049,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1906009.9792099814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 740900.9128728181,
            "unit": "ns/iter",
            "extra": "iterations: 1274\ncpu: 740883.4379905812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2584678.665730063,
            "unit": "ns/iter",
            "extra": "iterations: 356\ncpu: 2584624.4382022466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4228.657276718328,
            "unit": "ns/iter",
            "extra": "iterations: 186547\ncpu: 4228.54240486311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19590.546005101027,
            "unit": "ns/iter",
            "extra": "iterations: 41941\ncpu: 19589.82618440195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15779.030641192707,
            "unit": "ns/iter",
            "extra": "iterations: 53229\ncpu: 15778.73339720833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15044.719978381498,
            "unit": "ns/iter",
            "extra": "iterations: 55510\ncpu: 15044.43703837147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15624.591736040698,
            "unit": "ns/iter",
            "extra": "iterations: 52493\ncpu: 15624.201322080926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 47999.54523933821,
            "unit": "ns/iter",
            "extra": "iterations: 17319\ncpu: 47998.56227264838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 480725.828321453,
            "unit": "ns/iter",
            "extra": "iterations: 1829\ncpu: 480710.3335155831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 390917.5193936578,
            "unit": "ns/iter",
            "extra": "iterations: 2243\ncpu: 390909.1841283985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 383137.84764420206,
            "unit": "ns/iter",
            "extra": "iterations: 2271\ncpu: 383129.37032144243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 385598.0431748852,
            "unit": "ns/iter",
            "extra": "iterations: 2293\ncpu: 385590.27474923595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 229533.4521875977,
            "unit": "ns/iter",
            "extra": "iterations: 3817\ncpu: 229526.5653654701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 384405.39876421686,
            "unit": "ns/iter",
            "extra": "iterations: 2104\ncpu: 384391.44486692105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1925248.6021277364,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 1925121.7021276606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 768116.8375927362,
            "unit": "ns/iter",
            "extra": "iterations: 1213\ncpu: 768065.5399835112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4348.572791769949,
            "unit": "ns/iter",
            "extra": "iterations: 185069\ncpu: 4348.26794330764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19694.109555777024,
            "unit": "ns/iter",
            "extra": "iterations: 42006\ncpu: 19693.02718659244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15735.884273681844,
            "unit": "ns/iter",
            "extra": "iterations: 52002\ncpu: 15734.82558363145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15103.062942939527,
            "unit": "ns/iter",
            "extra": "iterations: 54748\ncpu: 15093.26733396661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15582.922926812074,
            "unit": "ns/iter",
            "extra": "iterations: 52781\ncpu: 15582.70400333447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 48188.261329483015,
            "unit": "ns/iter",
            "extra": "iterations: 17300\ncpu: 48187.24277456656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 472497.16462438117,
            "unit": "ns/iter",
            "extra": "iterations: 1877\ncpu: 472475.27970165346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 384117.66899867053,
            "unit": "ns/iter",
            "extra": "iterations: 2287\ncpu: 384101.7490161809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 377235.02623658115,
            "unit": "ns/iter",
            "extra": "iterations: 2325\ncpu: 377218.5376344079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 381643.53905911517,
            "unit": "ns/iter",
            "extra": "iterations: 2317\ncpu: 381619.4216659475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 232432.37311058334,
            "unit": "ns/iter",
            "extra": "iterations: 3771\ncpu: 232427.81755502676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 376966.28615381935,
            "unit": "ns/iter",
            "extra": "iterations: 2275\ncpu: 376940.87912087864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 307.73340410998867,
            "unit": "ns/iter",
            "extra": "iterations: 2282297\ncpu: 307.7192845628778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1658.3037609784233,
            "unit": "ns/iter",
            "extra": "iterations: 423560\ncpu: 1658.2274057984675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1167.5268845545477,
            "unit": "ns/iter",
            "extra": "iterations: 603246\ncpu: 1167.499991711514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1218.184405031747,
            "unit": "ns/iter",
            "extra": "iterations: 573249\ncpu: 1218.1169090569672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1056.502788944297,
            "unit": "ns/iter",
            "extra": "iterations: 663692\ncpu: 1056.427378964934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8306.173540458032,
            "unit": "ns/iter",
            "extra": "iterations: 84136\ncpu: 8305.946324997592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19086.481452161257,
            "unit": "ns/iter",
            "extra": "iterations: 36635\ncpu: 19085.62030844829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4613.413907415764,
            "unit": "ns/iter",
            "extra": "iterations: 151732\ncpu: 4613.248358948636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4486.942701615224,
            "unit": "ns/iter",
            "extra": "iterations: 155048\ncpu: 4486.725401166132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4541.726613778702,
            "unit": "ns/iter",
            "extra": "iterations: 154792\ncpu: 4541.619075921226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9688.763853721886,
            "unit": "ns/iter",
            "extra": "iterations: 72273\ncpu: 9688.160170464847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8596.837091471252,
            "unit": "ns/iter",
            "extra": "iterations: 81512\ncpu: 8596.504809107928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3241.567449251226,
            "unit": "ns/iter",
            "extra": "iterations: 215866\ncpu: 3241.3793742414578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16200.370312136418,
            "unit": "ns/iter",
            "extra": "iterations: 43250\ncpu: 16199.595375722485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12793.925530549473,
            "unit": "ns/iter",
            "extra": "iterations: 54519\ncpu: 12793.119829784016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12758.923860364306,
            "unit": "ns/iter",
            "extra": "iterations: 54886\ncpu: 12758.444776445725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13290.537420411605,
            "unit": "ns/iter",
            "extra": "iterations: 52458\ncpu: 13290.02440047274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28206.31666734029,
            "unit": "ns/iter",
            "extra": "iterations: 24761\ncpu: 28205.969064254296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100264.16887225924,
            "unit": "ns/iter",
            "extra": "iterations: 6952\ncpu: 100261.62255466187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86524.14246609586,
            "unit": "ns/iter",
            "extra": "iterations: 8037\ncpu: 86518.72589274633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84693.67974253469,
            "unit": "ns/iter",
            "extra": "iterations: 8234\ncpu: 84690.67282001501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85086.2494526941,
            "unit": "ns/iter",
            "extra": "iterations: 8222\ncpu: 85080.6981269748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55737.54999202254,
            "unit": "ns/iter",
            "extra": "iterations: 12542\ncpu: 55736.84420347713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85014.9204046793,
            "unit": "ns/iter",
            "extra": "iterations: 8204\ncpu: 85009.702584104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3215.0795320513303,
            "unit": "ns/iter",
            "extra": "iterations: 217887\ncpu: 3214.9196601907993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16175.744846075339,
            "unit": "ns/iter",
            "extra": "iterations: 43268\ncpu: 16175.314320051992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12940.070783048106,
            "unit": "ns/iter",
            "extra": "iterations: 54109\ncpu: 12939.398251677196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12718.47665896845,
            "unit": "ns/iter",
            "extra": "iterations: 54989\ncpu: 12717.84902435031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13229.085841191616,
            "unit": "ns/iter",
            "extra": "iterations: 53133\ncpu: 13228.25550975854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27638.951904125326,
            "unit": "ns/iter",
            "extra": "iterations: 25366\ncpu: 27638.094299455894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 99200.56342808895,
            "unit": "ns/iter",
            "extra": "iterations: 7071\ncpu: 99196.86041578226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84680.0050792125,
            "unit": "ns/iter",
            "extra": "iterations: 8269\ncpu: 84678.89708549959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82925.53259197726,
            "unit": "ns/iter",
            "extra": "iterations: 8453\ncpu: 82921.04578256288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83860.80745266871,
            "unit": "ns/iter",
            "extra": "iterations: 8346\ncpu: 83857.05727294533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55459.030579103295,
            "unit": "ns/iter",
            "extra": "iterations: 12623\ncpu: 55457.83094351529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 85367.37358352068,
            "unit": "ns/iter",
            "extra": "iterations: 8207\ncpu: 85366.02899963409 ns\nthreads: 1"
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
        "date": 1705778457669,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 711.4378729213164,
            "unit": "ns/iter",
            "extra": "iterations: 985295\ncpu: 711.425106186472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10695.700139377377,
            "unit": "ns/iter",
            "extra": "iterations: 76052\ncpu: 10694.79040656393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24186.540891337743,
            "unit": "ns/iter",
            "extra": "iterations: 34824\ncpu: 24185.61049850678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38330.667814355445,
            "unit": "ns/iter",
            "extra": "iterations: 21202\ncpu: 38329.02556362609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47612.47275123038,
            "unit": "ns/iter",
            "extra": "iterations: 16698\ncpu: 47610.95939633487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59333.84419423393,
            "unit": "ns/iter",
            "extra": "iterations: 14210\ncpu: 59331.294862772724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59237.23949999839,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59237.469999999965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68350.84276580956,
            "unit": "ns/iter",
            "extra": "iterations: 12669\ncpu: 68348.17270502797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78086.15612682933,
            "unit": "ns/iter",
            "extra": "iterations: 11164\ncpu: 78084.42314582576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 576.152124648662,
            "unit": "ns/iter",
            "extra": "iterations: 1219684\ncpu: 576.1074999754046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 511.49041986502147,
            "unit": "ns/iter",
            "extra": "iterations: 1365534\ncpu: 511.4580816003115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 487.5903500354467,
            "unit": "ns/iter",
            "extra": "iterations: 1434969\ncpu: 487.568442245094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 488.6540925673914,
            "unit": "ns/iter",
            "extra": "iterations: 1434112\ncpu: 488.63819562209915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 977.6130702908919,
            "unit": "ns/iter",
            "extra": "iterations: 713649\ncpu: 977.5624992117971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4276.5927185881865,
            "unit": "ns/iter",
            "extra": "iterations: 199302\ncpu: 4276.467371125233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19764.59639190098,
            "unit": "ns/iter",
            "extra": "iterations: 41684\ncpu: 19764.012570770592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15897.387298833135,
            "unit": "ns/iter",
            "extra": "iterations: 51885\ncpu: 15896.704249783214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15266.863640585234,
            "unit": "ns/iter",
            "extra": "iterations: 53821\ncpu: 15266.069006521584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15809.035352465777,
            "unit": "ns/iter",
            "extra": "iterations: 52019\ncpu: 15808.598781214543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 48165.2030583863,
            "unit": "ns/iter",
            "extra": "iterations: 17591\ncpu: 48164.73764993463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 464791.86297072575,
            "unit": "ns/iter",
            "extra": "iterations: 1912\ncpu: 464748.58786610834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 388682.8662640264,
            "unit": "ns/iter",
            "extra": "iterations: 2318\ncpu: 388658.41242450476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 372271.00985857216,
            "unit": "ns/iter",
            "extra": "iterations: 2333\ncpu: 372255.9365623657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 372075.21147260186,
            "unit": "ns/iter",
            "extra": "iterations: 2336\ncpu: 372063.91267123393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 229312.77140590985,
            "unit": "ns/iter",
            "extra": "iterations: 3784\ncpu: 229303.5147991551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 374924.61498704896,
            "unit": "ns/iter",
            "extra": "iterations: 2322\ncpu: 374913.6520241168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1899317.7921810523,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1899275.5144032927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 795438.4089431202,
            "unit": "ns/iter",
            "extra": "iterations: 1230\ncpu: 795408.0487804877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2582412.8543416704,
            "unit": "ns/iter",
            "extra": "iterations: 357\ncpu: 2582272.5490196063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4349.443713522906,
            "unit": "ns/iter",
            "extra": "iterations: 181962\ncpu: 4349.429001659691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19592.39030375259,
            "unit": "ns/iter",
            "extra": "iterations: 41975\ncpu: 19591.654556283498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15731.00932598442,
            "unit": "ns/iter",
            "extra": "iterations: 51898\ncpu: 15730.904851824778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15138.409282857703,
            "unit": "ns/iter",
            "extra": "iterations: 53755\ncpu: 15137.804855362343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15538.098465252688,
            "unit": "ns/iter",
            "extra": "iterations: 52191\ncpu: 15538.163668065448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 47219.9151762897,
            "unit": "ns/iter",
            "extra": "iterations: 17613\ncpu: 47218.02645772979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 478582.86868131976,
            "unit": "ns/iter",
            "extra": "iterations: 1820\ncpu: 478570.8791208778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 389200.9422818894,
            "unit": "ns/iter",
            "extra": "iterations: 2235\ncpu: 389192.6621923928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 382009.6870897283,
            "unit": "ns/iter",
            "extra": "iterations: 2285\ncpu: 381989.9343544858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 390899.6222318833,
            "unit": "ns/iter",
            "extra": "iterations: 2303\ncpu: 390896.6565349553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 227444.49291336146,
            "unit": "ns/iter",
            "extra": "iterations: 3810\ncpu: 227433.07086614208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 380475.8210251651,
            "unit": "ns/iter",
            "extra": "iterations: 2302\ncpu: 380471.3727193742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1915361.4186046186,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1915201.4799154245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 736376.8254344258,
            "unit": "ns/iter",
            "extra": "iterations: 1266\ncpu: 736348.7361769354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4331.171272493148,
            "unit": "ns/iter",
            "extra": "iterations: 180496\ncpu: 4331.073264781498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19968.159680686684,
            "unit": "ns/iter",
            "extra": "iterations: 41965\ncpu: 19968.030501608435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15978.965317808477,
            "unit": "ns/iter",
            "extra": "iterations: 51871\ncpu: 15978.573769543622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15353.235636177273,
            "unit": "ns/iter",
            "extra": "iterations: 54686\ncpu: 15353.035511831207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 16029.764654333825,
            "unit": "ns/iter",
            "extra": "iterations: 52493\ncpu: 16029.184843693434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 48476.14732193848,
            "unit": "ns/iter",
            "extra": "iterations: 17438\ncpu: 48474.429407041884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 469262.69113653636,
            "unit": "ns/iter",
            "extra": "iterations: 1839\ncpu: 469258.8363240917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 384299.81742922956,
            "unit": "ns/iter",
            "extra": "iterations: 2295\ncpu: 384286.230936822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 379376.6648116469,
            "unit": "ns/iter",
            "extra": "iterations: 2336\ncpu: 379372.6455479427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 381785.5209241139,
            "unit": "ns/iter",
            "extra": "iterations: 2294\ncpu: 381769.79075849947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 233633.18829786807,
            "unit": "ns/iter",
            "extra": "iterations: 3760\ncpu: 233627.63297872248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 381497.1842105383,
            "unit": "ns/iter",
            "extra": "iterations: 2280\ncpu: 381497.8947368443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 320.2220905831212,
            "unit": "ns/iter",
            "extra": "iterations: 2221562\ncpu: 320.2105545557597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1594.6380373678924,
            "unit": "ns/iter",
            "extra": "iterations: 439573\ncpu: 1594.6215986878194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1285.901410676679,
            "unit": "ns/iter",
            "extra": "iterations: 544136\ncpu: 1285.8673199347238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1261.3631159169145,
            "unit": "ns/iter",
            "extra": "iterations: 552672\ncpu: 1261.3707587864026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1044.4635048972627,
            "unit": "ns/iter",
            "extra": "iterations: 669857\ncpu: 1044.4512784071803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8263.67025661051,
            "unit": "ns/iter",
            "extra": "iterations: 84681\ncpu: 8263.331798160207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19051.17944326452,
            "unit": "ns/iter",
            "extra": "iterations: 36786\ncpu: 19051.00581743056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4558.755146332968,
            "unit": "ns/iter",
            "extra": "iterations: 153896\ncpu: 4558.514841191389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4505.0442319959075,
            "unit": "ns/iter",
            "extra": "iterations: 155227\ncpu: 4504.988178602959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4518.927355684216,
            "unit": "ns/iter",
            "extra": "iterations: 153639\ncpu: 4518.8741139945005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9590.115846141187,
            "unit": "ns/iter",
            "extra": "iterations: 73002\ncpu: 9590.044108380629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8568.125083216268,
            "unit": "ns/iter",
            "extra": "iterations: 81114\ncpu: 8567.78854451757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3251.6781244068316,
            "unit": "ns/iter",
            "extra": "iterations: 215953\ncpu: 3251.5936337999647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16070.108846974874,
            "unit": "ns/iter",
            "extra": "iterations: 43529\ncpu: 16069.360656114386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12783.711021359355,
            "unit": "ns/iter",
            "extra": "iterations: 54966\ncpu: 12783.58621693404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12719.78630256519,
            "unit": "ns/iter",
            "extra": "iterations: 55003\ncpu: 12719.284402668758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13338.066364660745,
            "unit": "ns/iter",
            "extra": "iterations: 52317\ncpu: 13338.159680409766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28515.961006083806,
            "unit": "ns/iter",
            "extra": "iterations: 24491\ncpu: 28515.115756808686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100011.13207010875,
            "unit": "ns/iter",
            "extra": "iterations: 7019\ncpu: 100010.32910670986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86785.28483125415,
            "unit": "ns/iter",
            "extra": "iterations: 8089\ncpu: 86784.3862034853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84097.04725920422,
            "unit": "ns/iter",
            "extra": "iterations: 8337\ncpu: 84094.18255967404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85024.28284560285,
            "unit": "ns/iter",
            "extra": "iterations: 8167\ncpu: 85024.6969511447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 56164.63077293181,
            "unit": "ns/iter",
            "extra": "iterations: 12472\ncpu: 56163.19756254073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 86265.98072230621,
            "unit": "ns/iter",
            "extra": "iterations: 8196\ncpu: 86264.6168862859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3231.8489923428665,
            "unit": "ns/iter",
            "extra": "iterations: 216393\ncpu: 3231.819883267949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16218.662700524104,
            "unit": "ns/iter",
            "extra": "iterations: 43199\ncpu: 16218.461075488063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12953.409486180168,
            "unit": "ns/iter",
            "extra": "iterations: 54163\ncpu: 12953.272529217535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12873.772590748142,
            "unit": "ns/iter",
            "extra": "iterations: 54602\ncpu: 12873.314164316229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13294.496905962247,
            "unit": "ns/iter",
            "extra": "iterations: 52682\ncpu: 13294.413651721688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27587.179839952187,
            "unit": "ns/iter",
            "extra": "iterations: 25367\ncpu: 27585.642764221204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 99380.63111304361,
            "unit": "ns/iter",
            "extra": "iterations: 6891\ncpu: 99381.0912784793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84384.10638297528,
            "unit": "ns/iter",
            "extra": "iterations: 8272\ncpu: 84383.07543520197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82938.87758497214,
            "unit": "ns/iter",
            "extra": "iterations: 8414\ncpu: 82934.73971951538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84157.19039595555,
            "unit": "ns/iter",
            "extra": "iterations: 8309\ncpu: 84155.19316403942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 56454.3963571949,
            "unit": "ns/iter",
            "extra": "iterations: 12408\ncpu: 56452.699871051125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 85838.82942980088,
            "unit": "ns/iter",
            "extra": "iterations: 8155\ncpu: 85839.44819129321 ns\nthreads: 1"
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
        "date": 1705953600715,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 706.7639130160802,
            "unit": "ns/iter",
            "extra": "iterations: 982066\ncpu: 706.7151291257412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10865.975420001372,
            "unit": "ns/iter",
            "extra": "iterations: 76607\ncpu: 10865.334760531023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24552.67355094645,
            "unit": "ns/iter",
            "extra": "iterations: 34281\ncpu: 24550.996178641228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38316.187751934536,
            "unit": "ns/iter",
            "extra": "iterations: 20591\ncpu: 38314.33150405519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47988.3350284523,
            "unit": "ns/iter",
            "extra": "iterations: 16518\ncpu: 47987.117084392776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59701.74422535545,
            "unit": "ns/iter",
            "extra": "iterations: 14200\ncpu: 59698.47183098588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60241.34329999242,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60240.43999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68805.55908543663,
            "unit": "ns/iter",
            "extra": "iterations: 12465\ncpu: 68803.82671480144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78502.89038876329,
            "unit": "ns/iter",
            "extra": "iterations: 11112\ncpu: 78499.84701223914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 584.2300176191355,
            "unit": "ns/iter",
            "extra": "iterations: 1199269\ncpu: 584.2212214273854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 491.8939359791299,
            "unit": "ns/iter",
            "extra": "iterations: 1402106\ncpu: 491.87885937297233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 478.15817273543604,
            "unit": "ns/iter",
            "extra": "iterations: 1462711\ncpu: 478.11611452980134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 482.4293215418958,
            "unit": "ns/iter",
            "extra": "iterations: 1452352\ncpu: 482.3946260961537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 970.4590551411228,
            "unit": "ns/iter",
            "extra": "iterations: 718393\ncpu: 970.3513258063467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4262.768350911351,
            "unit": "ns/iter",
            "extra": "iterations: 188492\ncpu: 4262.451987352245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19672.668156263233,
            "unit": "ns/iter",
            "extra": "iterations: 41622\ncpu: 19671.149872663533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15860.71631860286,
            "unit": "ns/iter",
            "extra": "iterations: 52002\ncpu: 15859.659243875225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14579.614605788252,
            "unit": "ns/iter",
            "extra": "iterations: 56594\ncpu: 14578.56486553344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15467.955498414676,
            "unit": "ns/iter",
            "extra": "iterations: 53279\ncpu: 15466.857486063964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 48164.16586123126,
            "unit": "ns/iter",
            "extra": "iterations: 17382\ncpu: 48160.643194108845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 468370.9292176484,
            "unit": "ns/iter",
            "extra": "iterations: 1879\ncpu: 468355.0292708894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 378008.34875598585,
            "unit": "ns/iter",
            "extra": "iterations: 2291\ncpu: 377997.20646006154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 375780.33968802914,
            "unit": "ns/iter",
            "extra": "iterations: 2308\ncpu: 375746.01386481774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 378217.73563714203,
            "unit": "ns/iter",
            "extra": "iterations: 2315\ncpu: 378194.1252699776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 234185.93763498685,
            "unit": "ns/iter",
            "extra": "iterations: 3704\ncpu: 234168.81749460014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 378491.8701355568,
            "unit": "ns/iter",
            "extra": "iterations: 2287\ncpu: 378479.44905990316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1908181.4626556234,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1908074.6887966758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 753340.6442845684,
            "unit": "ns/iter",
            "extra": "iterations: 1251\ncpu: 753292.0863309348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2579624.1456582057,
            "unit": "ns/iter",
            "extra": "iterations: 357\ncpu: 2579522.128851541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4167.646521789269,
            "unit": "ns/iter",
            "extra": "iterations: 189494\ncpu: 4167.315587828646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19944.024956554662,
            "unit": "ns/iter",
            "extra": "iterations: 41432\ncpu: 19942.85576366095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15938.013138742062,
            "unit": "ns/iter",
            "extra": "iterations: 51527\ncpu: 15937.390106157847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15026.447528812214,
            "unit": "ns/iter",
            "extra": "iterations: 54144\ncpu: 15025.904994089917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15618.524246321873,
            "unit": "ns/iter",
            "extra": "iterations: 52111\ncpu: 15617.447371955905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 48285.305365066284,
            "unit": "ns/iter",
            "extra": "iterations: 17353\ncpu: 48283.92785109202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 484566.98221230187,
            "unit": "ns/iter",
            "extra": "iterations: 1799\ncpu: 484538.46581434296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 392185.06455980707,
            "unit": "ns/iter",
            "extra": "iterations: 2215\ncpu: 392179.3227990973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 388675.8154525399,
            "unit": "ns/iter",
            "extra": "iterations: 2265\ncpu: 388660.22075054905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 385460.4995598726,
            "unit": "ns/iter",
            "extra": "iterations: 2272\ncpu: 385449.64788732294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 229631.25072501865,
            "unit": "ns/iter",
            "extra": "iterations: 3793\ncpu: 229626.1798049027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 387149.1915541706,
            "unit": "ns/iter",
            "extra": "iterations: 2297\ncpu: 387130.73574227246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1932342.4501062578,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1932268.3651804724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 779192.4115674859,
            "unit": "ns/iter",
            "extra": "iterations: 1193\ncpu: 779148.0301760294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4328.9315681311855,
            "unit": "ns/iter",
            "extra": "iterations: 184417\ncpu: 4328.869355861978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19642.427126512917,
            "unit": "ns/iter",
            "extra": "iterations: 42217\ncpu: 19641.589880853655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15768.811259728729,
            "unit": "ns/iter",
            "extra": "iterations: 52559\ncpu: 15768.578169295379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15113.152417441554,
            "unit": "ns/iter",
            "extra": "iterations: 54810\ncpu: 15112.550629447169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15579.865742906064,
            "unit": "ns/iter",
            "extra": "iterations: 53405\ncpu: 15579.644228068522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 48129.13398861607,
            "unit": "ns/iter",
            "extra": "iterations: 17397\ncpu: 48127.7346668966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 470666.6863587487,
            "unit": "ns/iter",
            "extra": "iterations: 1862\ncpu: 470654.94092373765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 386129.8437776139,
            "unit": "ns/iter",
            "extra": "iterations: 2266\ncpu: 386121.22683142073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 381996.09577713645,
            "unit": "ns/iter",
            "extra": "iterations: 2297\ncpu: 381973.0953417513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 382147.2810457532,
            "unit": "ns/iter",
            "extra": "iterations: 2295\ncpu: 382135.2941176476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 235865.92969794263,
            "unit": "ns/iter",
            "extra": "iterations: 3741\ncpu: 235857.49799518782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 383224.658430874,
            "unit": "ns/iter",
            "extra": "iterations: 2307\ncpu: 383214.9544863445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 308.63728835490826,
            "unit": "ns/iter",
            "extra": "iterations: 2256608\ncpu: 308.6296778173259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1634.1167349489763,
            "unit": "ns/iter",
            "extra": "iterations: 428612\ncpu: 1634.0788405364278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1297.5652761728497,
            "unit": "ns/iter",
            "extra": "iterations: 539952\ncpu: 1297.5281136100982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1241.9523451026407,
            "unit": "ns/iter",
            "extra": "iterations: 563195\ncpu: 1241.9350313834523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1037.5725494963501,
            "unit": "ns/iter",
            "extra": "iterations: 674443\ncpu: 1037.5254839919776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8314.003641237683,
            "unit": "ns/iter",
            "extra": "iterations: 84312\ncpu: 8313.798747509232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19110.107584694084,
            "unit": "ns/iter",
            "extra": "iterations: 36455\ncpu: 19109.131806336383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4590.126068320557,
            "unit": "ns/iter",
            "extra": "iterations: 153044\ncpu: 4590.003528397056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4507.334004530548,
            "unit": "ns/iter",
            "extra": "iterations: 154947\ncpu: 4507.117272357608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4540.500914657823,
            "unit": "ns/iter",
            "extra": "iterations: 154156\ncpu: 4540.311762111097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9627.427800955704,
            "unit": "ns/iter",
            "extra": "iterations: 72868\ncpu: 9627.283581270123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8516.60245786987,
            "unit": "ns/iter",
            "extra": "iterations: 82185\ncpu: 8515.85447466088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3233.5782916259245,
            "unit": "ns/iter",
            "extra": "iterations: 216709\ncpu: 3233.3294879308146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16127.362818384647,
            "unit": "ns/iter",
            "extra": "iterations: 43344\ncpu: 16126.107419712134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12788.44620264758,
            "unit": "ns/iter",
            "extra": "iterations: 54538\ncpu: 12787.315266419662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12634.233978355804,
            "unit": "ns/iter",
            "extra": "iterations: 55347\ncpu: 12633.2953908976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13302.635116075637,
            "unit": "ns/iter",
            "extra": "iterations: 52466\ncpu: 13301.608660846932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28660.822231286562,
            "unit": "ns/iter",
            "extra": "iterations: 24515\ncpu: 28658.535590455213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100471.06059739631,
            "unit": "ns/iter",
            "extra": "iterations: 6997\ncpu: 100469.37258825255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 87166.16059211444,
            "unit": "ns/iter",
            "extra": "iterations: 8039\ncpu: 87160.45528050802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84455.21059602054,
            "unit": "ns/iter",
            "extra": "iterations: 8305\ncpu: 84448.58518964505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85518.071629382,
            "unit": "ns/iter",
            "extra": "iterations: 8181\ncpu: 85510.63439677288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 56375.945470683575,
            "unit": "ns/iter",
            "extra": "iterations: 12397\ncpu: 56371.113979188274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 86483.61453066386,
            "unit": "ns/iter",
            "extra": "iterations: 8107\ncpu: 86481.96620204746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3261.1753177395535,
            "unit": "ns/iter",
            "extra": "iterations: 214405\ncpu: 3261.100254191847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16163.091068706903,
            "unit": "ns/iter",
            "extra": "iterations: 43286\ncpu: 16162.798595388676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12891.758986568258,
            "unit": "ns/iter",
            "extra": "iterations: 54192\ncpu: 12890.876882196753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12619.298105034655,
            "unit": "ns/iter",
            "extra": "iterations: 55410\ncpu: 12618.22053780913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13235.662929619593,
            "unit": "ns/iter",
            "extra": "iterations: 52983\ncpu: 13234.44501066393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27767.04686013111,
            "unit": "ns/iter",
            "extra": "iterations: 25224\ncpu: 27764.81921979047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 99699.83034188914,
            "unit": "ns/iter",
            "extra": "iterations: 7020\ncpu: 99691.23931623923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 85324.77111517279,
            "unit": "ns/iter",
            "extra": "iterations: 8205\ncpu: 85321.01157830615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82695.31646614935,
            "unit": "ns/iter",
            "extra": "iterations: 8478\ncpu: 82693.99622552586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83979.46104129088,
            "unit": "ns/iter",
            "extra": "iterations: 8355\ncpu: 83971.7414721727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55907.03133743631,
            "unit": "ns/iter",
            "extra": "iterations: 12509\ncpu: 55902.73403149689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 85871.6533007321,
            "unit": "ns/iter",
            "extra": "iterations: 8180\ncpu: 85863.69193154038 ns\nthreads: 1"
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
        "date": 1705955070175,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 705.4195837014275,
            "unit": "ns/iter",
            "extra": "iterations: 995103\ncpu: 705.3908992335466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10971.444045882594,
            "unit": "ns/iter",
            "extra": "iterations: 76107\ncpu: 10971.04208548491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24571.934716274274,
            "unit": "ns/iter",
            "extra": "iterations: 34082\ncpu: 24571.014024998538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38498.56209417114,
            "unit": "ns/iter",
            "extra": "iterations: 22023\ncpu: 38497.389093220714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48176.304763624976,
            "unit": "ns/iter",
            "extra": "iterations: 16626\ncpu: 48174.0887766149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 50414.71829999864,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50414.62000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60134.06160000159,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60132.130000000034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68992.2219926915,
            "unit": "ns/iter",
            "extra": "iterations: 12586\ncpu: 68990.26696329254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 79808.62244529302,
            "unit": "ns/iter",
            "extra": "iterations: 11058\ncpu: 79807.29788388497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 589.1486578760855,
            "unit": "ns/iter",
            "extra": "iterations: 1196499\ncpu: 589.1350515127883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 514.4011784531397,
            "unit": "ns/iter",
            "extra": "iterations: 1371968\ncpu: 514.3893297802866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 475.3960109659595,
            "unit": "ns/iter",
            "extra": "iterations: 1470732\ncpu: 475.3679120329197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 483.9675495748278,
            "unit": "ns/iter",
            "extra": "iterations: 1450736\ncpu: 483.9424953954406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1136.6818228115735,
            "unit": "ns/iter",
            "extra": "iterations: 677437\ncpu: 1136.5805233549413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4099.226285353199,
            "unit": "ns/iter",
            "extra": "iterations: 192982\ncpu: 4099.109761532164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19838.01443594681,
            "unit": "ns/iter",
            "extra": "iterations: 41840\ncpu: 19837.57887189294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15873.363526128518,
            "unit": "ns/iter",
            "extra": "iterations: 51955\ncpu: 15872.872678279287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15306.173881632365,
            "unit": "ns/iter",
            "extra": "iterations: 53985\ncpu: 15305.853477817882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15750.398340409387,
            "unit": "ns/iter",
            "extra": "iterations: 52061\ncpu: 15750.13733889095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 47188.65067567301,
            "unit": "ns/iter",
            "extra": "iterations: 17760\ncpu: 47187.083333333416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 458959.8350349323,
            "unit": "ns/iter",
            "extra": "iterations: 1861\ncpu: 458946.6415905422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 380930.37132836273,
            "unit": "ns/iter",
            "extra": "iterations: 2281\ncpu: 380929.32924156124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 376273.9835283718,
            "unit": "ns/iter",
            "extra": "iterations: 2307\ncpu: 376257.9973992199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 377812.05185188306,
            "unit": "ns/iter",
            "extra": "iterations: 2295\ncpu: 377803.22440087196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 233123.15078731344,
            "unit": "ns/iter",
            "extra": "iterations: 3747\ncpu: 233113.79770483018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 378347.6495875024,
            "unit": "ns/iter",
            "extra": "iterations: 2303\ncpu: 378331.17672601045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1918923.4553014652,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1918774.6361746378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 751557.2304038067,
            "unit": "ns/iter",
            "extra": "iterations: 1263\ncpu: 751537.9255740311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2576234.075419133,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 2576101.3966480424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4441.287744081627,
            "unit": "ns/iter",
            "extra": "iterations: 182777\ncpu: 4441.216892716252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19878.616850479935,
            "unit": "ns/iter",
            "extra": "iterations: 41981\ncpu: 19878.24253829109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15840.795735387304,
            "unit": "ns/iter",
            "extra": "iterations: 52197\ncpu: 15840.753299998121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15120.51646725758,
            "unit": "ns/iter",
            "extra": "iterations: 54745\ncpu: 15120.480409169824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15744.011359514194,
            "unit": "ns/iter",
            "extra": "iterations: 52379\ncpu: 15743.868726016239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 48398.496950167515,
            "unit": "ns/iter",
            "extra": "iterations: 17378\ncpu: 48396.7027275868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 478095.6368684248,
            "unit": "ns/iter",
            "extra": "iterations: 1801\ncpu: 478077.62354247586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 391733.44109712046,
            "unit": "ns/iter",
            "extra": "iterations: 2224\ncpu: 391720.3687050372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 385162.3638766267,
            "unit": "ns/iter",
            "extra": "iterations: 2270\ncpu: 385156.03524229274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 388594.79423499655,
            "unit": "ns/iter",
            "extra": "iterations: 2255\ncpu: 388579.8226164071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 231062.43854086217,
            "unit": "ns/iter",
            "extra": "iterations: 3783\ncpu: 231054.77134549344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 387963.1852837173,
            "unit": "ns/iter",
            "extra": "iterations: 2256\ncpu: 387948.537234041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1935207.1783438916,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1935048.195329083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 756983.28398058,
            "unit": "ns/iter",
            "extra": "iterations: 1236\ncpu: 756956.2297734609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4331.184332368413,
            "unit": "ns/iter",
            "extra": "iterations: 185529\ncpu: 4331.049593325033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19608.890587174526,
            "unit": "ns/iter",
            "extra": "iterations: 42134\ncpu: 19607.984050885243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15742.111800293455,
            "unit": "ns/iter",
            "extra": "iterations: 52397\ncpu: 15741.435578372815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15057.032850310474,
            "unit": "ns/iter",
            "extra": "iterations: 54794\ncpu: 15056.329160126976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15583.074362539604,
            "unit": "ns/iter",
            "extra": "iterations: 52513\ncpu: 15582.556700245706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 48213.87373563058,
            "unit": "ns/iter",
            "extra": "iterations: 17400\ncpu: 48213.44827586222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 474419.05280169396,
            "unit": "ns/iter",
            "extra": "iterations: 1856\ncpu: 474400.2693965523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 386117.6625659113,
            "unit": "ns/iter",
            "extra": "iterations: 2276\ncpu: 386104.5254833035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 381870.0853183123,
            "unit": "ns/iter",
            "extra": "iterations: 2309\ncpu: 381854.82893027255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 382249.54066986893,
            "unit": "ns/iter",
            "extra": "iterations: 2299\ncpu: 382234.4932579389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 234101.77402181583,
            "unit": "ns/iter",
            "extra": "iterations: 3757\ncpu: 234095.0758583979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 392679.0219009867,
            "unit": "ns/iter",
            "extra": "iterations: 2283\ncpu: 392630.48620236386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 304.74226202039074,
            "unit": "ns/iter",
            "extra": "iterations: 2296142\ncpu: 304.72858385936115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1651.256299874761,
            "unit": "ns/iter",
            "extra": "iterations: 423937\ncpu: 1651.1948709360229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1277.8752876711308,
            "unit": "ns/iter",
            "extra": "iterations: 547500\ncpu: 1277.8736073059285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1285.8503420667591,
            "unit": "ns/iter",
            "extra": "iterations: 546092\ncpu: 1285.8388330171492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1044.2840373730733,
            "unit": "ns/iter",
            "extra": "iterations: 670535\ncpu: 1044.2397488572578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8284.316930018484,
            "unit": "ns/iter",
            "extra": "iterations: 84678\ncpu: 8284.005290630388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19100.079231878124,
            "unit": "ns/iter",
            "extra": "iterations: 38848\ncpu: 19099.186573311257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4575.590033152677,
            "unit": "ns/iter",
            "extra": "iterations: 152927\ncpu: 4575.422914200864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4493.629365828268,
            "unit": "ns/iter",
            "extra": "iterations: 155841\ncpu: 4493.511335271246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4560.243770271681,
            "unit": "ns/iter",
            "extra": "iterations: 153538\ncpu: 4560.239159035548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9263.243379671107,
            "unit": "ns/iter",
            "extra": "iterations: 75676\ncpu: 9263.055658332918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8621.088012739703,
            "unit": "ns/iter",
            "extra": "iterations: 81011\ncpu: 8620.795941291914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3241.3350254041197,
            "unit": "ns/iter",
            "extra": "iterations: 216106\ncpu: 3241.155729132954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16096.087708390176,
            "unit": "ns/iter",
            "extra": "iterations: 43428\ncpu: 16095.491388044496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12847.246046597238,
            "unit": "ns/iter",
            "extra": "iterations: 54510\ncpu: 12846.703357182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12755.130345448077,
            "unit": "ns/iter",
            "extra": "iterations: 54509\ncpu: 12754.734080610619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13380.066831542346,
            "unit": "ns/iter",
            "extra": "iterations: 52161\ncpu: 13379.661049443048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28884.78861218789,
            "unit": "ns/iter",
            "extra": "iterations: 24254\ncpu: 28883.173909457997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99994.80353578203,
            "unit": "ns/iter",
            "extra": "iterations: 7014\ncpu: 99993.71257485173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 87191.013920243,
            "unit": "ns/iter",
            "extra": "iterations: 7974\ncpu: 87186.79458239296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85047.31335115782,
            "unit": "ns/iter",
            "extra": "iterations: 8224\ncpu: 85043.9810311296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84994.41349544223,
            "unit": "ns/iter",
            "extra": "iterations: 8225\ncpu: 84990.49240121641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55795.15196117543,
            "unit": "ns/iter",
            "extra": "iterations: 12569\ncpu: 55793.48396849354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85875.93141103815,
            "unit": "ns/iter",
            "extra": "iterations: 8150\ncpu: 85875.91411042976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3185.9370454650484,
            "unit": "ns/iter",
            "extra": "iterations: 219730\ncpu: 3185.911345742492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16026.860862600483,
            "unit": "ns/iter",
            "extra": "iterations: 43705\ncpu: 16026.729207184459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12817.901013092263,
            "unit": "ns/iter",
            "extra": "iterations: 54684\ncpu: 12817.357910906278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12657.743919029346,
            "unit": "ns/iter",
            "extra": "iterations: 55131\ncpu: 12657.240028296173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13165.571667448832,
            "unit": "ns/iter",
            "extra": "iterations: 53225\ncpu: 13164.945044621963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27698.218245034772,
            "unit": "ns/iter",
            "extra": "iterations: 25311\ncpu: 27696.76425269618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98109.92507002392,
            "unit": "ns/iter",
            "extra": "iterations: 7140\ncpu: 98105.70028011216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84698.85996845564,
            "unit": "ns/iter",
            "extra": "iterations: 8241\ncpu: 84696.88144642612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82850.57953874535,
            "unit": "ns/iter",
            "extra": "iterations: 8455\ncpu: 82847.15552927332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83314.38789398594,
            "unit": "ns/iter",
            "extra": "iterations: 8376\ncpu: 83310.47039159597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55891.29222284319,
            "unit": "ns/iter",
            "extra": "iterations: 12511\ncpu: 55884.69346974714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84991.22931327528,
            "unit": "ns/iter",
            "extra": "iterations: 8242\ncpu: 84986.05920892977 ns\nthreads: 1"
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
        "date": 1705957164821,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 709.1730102858952,
            "unit": "ns/iter",
            "extra": "iterations: 986398\ncpu: 709.1407322399275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11039.77748203351,
            "unit": "ns/iter",
            "extra": "iterations: 75140\ncpu: 11039.290657439446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24788.076870927387,
            "unit": "ns/iter",
            "extra": "iterations: 33927\ncpu: 24787.278568691592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38206.29591366475,
            "unit": "ns/iter",
            "extra": "iterations: 21682\ncpu: 38204.80582972049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48370.56305039758,
            "unit": "ns/iter",
            "extra": "iterations: 16352\ncpu: 48367.72871819963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59494.72616431167,
            "unit": "ns/iter",
            "extra": "iterations: 14107\ncpu: 59493.6839866733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59820.091899996434,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59818.44000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 69241.44940143537,
            "unit": "ns/iter",
            "extra": "iterations: 12530\ncpu: 69239.02633679177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 79471.90602015417,
            "unit": "ns/iter",
            "extra": "iterations: 11013\ncpu: 79469.95369109232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 585.3305213461266,
            "unit": "ns/iter",
            "extra": "iterations: 1196307\ncpu: 585.3186514832734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 502.5439620403792,
            "unit": "ns/iter",
            "extra": "iterations: 1390950\ncpu: 502.5386246809735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 488.6513470097813,
            "unit": "ns/iter",
            "extra": "iterations: 1438631\ncpu: 488.63405557088583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 495.5507031754567,
            "unit": "ns/iter",
            "extra": "iterations: 1415365\ncpu: 495.538465342862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 970.0007762323995,
            "unit": "ns/iter",
            "extra": "iterations: 724010\ncpu: 969.9901935056149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4295.4097941750415,
            "unit": "ns/iter",
            "extra": "iterations: 185886\ncpu: 4295.269681417635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19815.756565366803,
            "unit": "ns/iter",
            "extra": "iterations: 41658\ncpu: 19814.94790916516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15824.594102777633,
            "unit": "ns/iter",
            "extra": "iterations: 51821\ncpu: 15824.189035333187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14991.559902826662,
            "unit": "ns/iter",
            "extra": "iterations: 54747\ncpu: 14991.268927977817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15702.706106507001,
            "unit": "ns/iter",
            "extra": "iterations: 52747\ncpu: 15702.415303239968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 48143.21620528059,
            "unit": "ns/iter",
            "extra": "iterations: 17303\ncpu: 48140.848407790436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 471997.8859132259,
            "unit": "ns/iter",
            "extra": "iterations: 1867\ncpu: 471980.61060524866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 379067.8289588989,
            "unit": "ns/iter",
            "extra": "iterations: 2286\ncpu: 379060.84864392027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 377514.1152013944,
            "unit": "ns/iter",
            "extra": "iterations: 2309\ncpu: 377506.58293633524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 377240.19825709786,
            "unit": "ns/iter",
            "extra": "iterations: 2295\ncpu: 377233.28976034845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 233852.65513541191,
            "unit": "ns/iter",
            "extra": "iterations: 3729\ncpu: 233847.54625905023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 377373.0643044616,
            "unit": "ns/iter",
            "extra": "iterations: 2286\ncpu: 377357.655293089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1901513.8391753295,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1901353.4020618603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 762884.2797427555,
            "unit": "ns/iter",
            "extra": "iterations: 1244\ncpu: 762858.2797427633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2582453.340782367,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 2582360.3351955325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4303.56599597784,
            "unit": "ns/iter",
            "extra": "iterations: 182996\ncpu: 4303.465103062362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19712.797969689665,
            "unit": "ns/iter",
            "extra": "iterations: 41964\ncpu: 19712.148508245107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15824.40123915715,
            "unit": "ns/iter",
            "extra": "iterations: 52455\ncpu: 15823.997712324766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15107.383437209575,
            "unit": "ns/iter",
            "extra": "iterations: 54713\ncpu: 15106.832014329364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15592.549234679936,
            "unit": "ns/iter",
            "extra": "iterations: 52331\ncpu: 15591.99136267223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 48063.679866468716,
            "unit": "ns/iter",
            "extra": "iterations: 17374\ncpu: 48062.10429377194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 478011.74287280854,
            "unit": "ns/iter",
            "extra": "iterations: 1824\ncpu: 478000.4934210524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 392192.7435441222,
            "unit": "ns/iter",
            "extra": "iterations: 2246\ncpu: 392175.28940338176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 385973.5644876184,
            "unit": "ns/iter",
            "extra": "iterations: 2264\ncpu: 385958.92226148245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 382014.0410480275,
            "unit": "ns/iter",
            "extra": "iterations: 2290\ncpu: 382006.76855895406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 230377.6965042432,
            "unit": "ns/iter",
            "extra": "iterations: 3776\ncpu: 230370.8421610184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 383461.35426591267,
            "unit": "ns/iter",
            "extra": "iterations: 2309\ncpu: 383442.70246860094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1954390.0021096712,
            "unit": "ns/iter",
            "extra": "iterations: 474\ncpu: 1954168.776371311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 748336.0975219803,
            "unit": "ns/iter",
            "extra": "iterations: 1251\ncpu: 748316.626698641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4310.860782284453,
            "unit": "ns/iter",
            "extra": "iterations: 185508\ncpu: 4310.6981909136075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 20520.91403794816,
            "unit": "ns/iter",
            "extra": "iterations: 42321\ncpu: 20513.936343659072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15781.552374448043,
            "unit": "ns/iter",
            "extra": "iterations: 52707\ncpu: 15780.203768000378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15157.970167670825,
            "unit": "ns/iter",
            "extra": "iterations: 55108\ncpu: 15157.05160775206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15649.543413456346,
            "unit": "ns/iter",
            "extra": "iterations: 53002\ncpu: 15648.477415946561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 48247.235402833096,
            "unit": "ns/iter",
            "extra": "iterations: 17315\ncpu: 48245.86196939083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 468790.5443243663,
            "unit": "ns/iter",
            "extra": "iterations: 1850\ncpu: 468761.7297297285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 383604.2982222049,
            "unit": "ns/iter",
            "extra": "iterations: 2250\ncpu: 383571.1555555545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 376609.4043384251,
            "unit": "ns/iter",
            "extra": "iterations: 2305\ncpu: 376568.9804772244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 376395.530718955,
            "unit": "ns/iter",
            "extra": "iterations: 2295\ncpu: 376366.4923747298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 231335.40279610004,
            "unit": "ns/iter",
            "extra": "iterations: 3791\ncpu: 231332.76180427434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 374833.36922408256,
            "unit": "ns/iter",
            "extra": "iterations: 2294\ncpu: 374808.0645161288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 306.3635464556369,
            "unit": "ns/iter",
            "extra": "iterations: 2282132\ncpu: 306.339817328709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1603.7050166326794,
            "unit": "ns/iter",
            "extra": "iterations: 440096\ncpu: 1603.663973314909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1292.7182577040585,
            "unit": "ns/iter",
            "extra": "iterations: 526868\ncpu: 1292.704054905599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1250.4006612789472,
            "unit": "ns/iter",
            "extra": "iterations: 558312\ncpu: 1250.3197137084605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1037.5289949988423,
            "unit": "ns/iter",
            "extra": "iterations: 671840\ncpu: 1037.433615146463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8300.72953204235,
            "unit": "ns/iter",
            "extra": "iterations: 84217\ncpu: 8300.053433392219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19136.998359760993,
            "unit": "ns/iter",
            "extra": "iterations: 36580\ncpu: 19134.97266265703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4523.675996957264,
            "unit": "ns/iter",
            "extra": "iterations: 155122\ncpu: 4523.259112182652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4459.282571006195,
            "unit": "ns/iter",
            "extra": "iterations: 156888\ncpu: 4458.844526031333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4501.853738791412,
            "unit": "ns/iter",
            "extra": "iterations: 155906\ncpu: 4501.75169653501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9493.611395586373,
            "unit": "ns/iter",
            "extra": "iterations: 73625\ncpu: 9492.911375212314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8636.207566185949,
            "unit": "ns/iter",
            "extra": "iterations: 81362\ncpu: 8635.509205771677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3228.7928056625683,
            "unit": "ns/iter",
            "extra": "iterations: 217004\ncpu: 3228.4358813662116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16088.742564243481,
            "unit": "ns/iter",
            "extra": "iterations: 43506\ncpu: 16087.500574633472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12846.854429106817,
            "unit": "ns/iter",
            "extra": "iterations: 54695\ncpu: 12845.872566048185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12853.047727314299,
            "unit": "ns/iter",
            "extra": "iterations: 54539\ncpu: 12852.028823410657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13387.45362791612,
            "unit": "ns/iter",
            "extra": "iterations: 52413\ncpu: 13386.949802529965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28547.155648059244,
            "unit": "ns/iter",
            "extra": "iterations: 24504\ncpu: 28546.274077701488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100249.75279770614,
            "unit": "ns/iter",
            "extra": "iterations: 6970\ncpu: 100241.75035868175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 87083.79776119013,
            "unit": "ns/iter",
            "extra": "iterations: 8040\ncpu: 87076.8905472636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84966.14289173864,
            "unit": "ns/iter",
            "extra": "iterations: 8258\ncpu: 84959.82077985063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85101.26686145834,
            "unit": "ns/iter",
            "extra": "iterations: 8214\ncpu: 85093.14584855203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55511.81251030313,
            "unit": "ns/iter",
            "extra": "iterations: 12134\ncpu: 55509.988462172594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85718.77375121393,
            "unit": "ns/iter",
            "extra": "iterations: 8168\ncpu: 85712.9774730663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3199.437056044281,
            "unit": "ns/iter",
            "extra": "iterations: 218631\ncpu: 3199.259940264647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16072.487737543046,
            "unit": "ns/iter",
            "extra": "iterations: 43466\ncpu: 16071.131459071457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12810.227085657114,
            "unit": "ns/iter",
            "extra": "iterations: 54671\ncpu: 12808.918805216528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12686.165582473857,
            "unit": "ns/iter",
            "extra": "iterations: 55187\ncpu: 12685.204848968113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13262.52896873534,
            "unit": "ns/iter",
            "extra": "iterations: 52712\ncpu: 13261.350356655012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27530.76291275412,
            "unit": "ns/iter",
            "extra": "iterations: 25227\ncpu: 27529.024457922096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97688.74148994933,
            "unit": "ns/iter",
            "extra": "iterations: 7168\ncpu: 97685.17020089319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84064.98332533865,
            "unit": "ns/iter",
            "extra": "iterations: 8336\ncpu: 84060.68857965438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82132.48308953417,
            "unit": "ns/iter",
            "extra": "iterations: 8545\ncpu: 82127.12697483979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83119.93974328873,
            "unit": "ns/iter",
            "extra": "iterations: 8414\ncpu: 83115.36724506767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55729.011456761815,
            "unit": "ns/iter",
            "extra": "iterations: 12569\ncpu: 55726.74039303082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84570.40629521375,
            "unit": "ns/iter",
            "extra": "iterations: 8292\ncpu: 84566.85962373261 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}