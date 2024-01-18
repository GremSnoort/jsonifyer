window.BENCHMARK_DATA = {
  "lastUpdate": 1705575682953,
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
      }
    ]
  }
}