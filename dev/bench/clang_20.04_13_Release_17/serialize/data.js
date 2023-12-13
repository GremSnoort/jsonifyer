window.BENCHMARK_DATA = {
  "lastUpdate": 1702490335816,
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
      }
    ]
  }
}