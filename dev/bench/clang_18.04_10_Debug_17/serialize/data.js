window.BENCHMARK_DATA = {
  "lastUpdate": 1705957716293,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-10 18.04 Debug c++-17": [
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
        "date": 1702489541121,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8380.999591207592,
            "unit": "ns/iter",
            "extra": "iterations: 83172\ncpu: 8380.791612561921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 75096.60870331687,
            "unit": "ns/iter",
            "extra": "iterations: 11352\ncpu: 75094.67054263566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 144025.97140969324,
            "unit": "ns/iter",
            "extra": "iterations: 6051\ncpu: 144024.85539580238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 211886.96881905556,
            "unit": "ns/iter",
            "extra": "iterations: 4073\ncpu: 211883.13282592685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 280359.4454134446,
            "unit": "ns/iter",
            "extra": "iterations: 3096\ncpu: 280353.4237726098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 344965.2225780231,
            "unit": "ns/iter",
            "extra": "iterations: 2498\ncpu: 344958.96717373887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 412990.6650579178,
            "unit": "ns/iter",
            "extra": "iterations: 2072\ncpu: 412981.03281853296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 478612.7841409559,
            "unit": "ns/iter",
            "extra": "iterations: 1816\ncpu: 478604.9559471364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 545883.0909091316,
            "unit": "ns/iter",
            "extra": "iterations: 1595\ncpu: 545865.9561128531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6384.188498402498,
            "unit": "ns/iter",
            "extra": "iterations: 109550\ncpu: 6384.043815609314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5396.128150711118,
            "unit": "ns/iter",
            "extra": "iterations: 130050\ncpu: 5396.127643214151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5387.734121156031,
            "unit": "ns/iter",
            "extra": "iterations: 130740\ncpu: 5387.704604558655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5384.673746715563,
            "unit": "ns/iter",
            "extra": "iterations: 130178\ncpu: 5384.522730415287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9414.689760049601,
            "unit": "ns/iter",
            "extra": "iterations: 74307\ncpu: 9414.483157710582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 38626.5550450113,
            "unit": "ns/iter",
            "extra": "iterations: 21328\ncpu: 38626.054951237784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 151395.75767737447,
            "unit": "ns/iter",
            "extra": "iterations: 5666\ncpu: 151393.82280268281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 119632.5095264691,
            "unit": "ns/iter",
            "extra": "iterations: 7138\ncpu: 119625.74950966674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 116380.40187934699,
            "unit": "ns/iter",
            "extra": "iterations: 7343\ncpu: 116378.0198828818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 117811.03007727112,
            "unit": "ns/iter",
            "extra": "iterations: 7248\ncpu: 117806.37417218555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 298547.74748872255,
            "unit": "ns/iter",
            "extra": "iterations: 2887\ncpu: 298538.10183581593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2211226.779097361,
            "unit": "ns/iter",
            "extra": "iterations: 421\ncpu: 2211087.885985749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1825308.7792969858,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1825245.1171874988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1850880.5258962745,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1850786.0557768906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1873311.1549297303,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1873268.8128772585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1140934.2708332434,
            "unit": "ns/iter",
            "extra": "iterations: 816\ncpu: 1140880.7598039191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1789230.7456647423,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1789188.631984588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7649357.740000368,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7648699.000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4423179.150234865,
            "unit": "ns/iter",
            "extra": "iterations: 213\ncpu: 4423001.408450715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9357636.295652336,
            "unit": "ns/iter",
            "extra": "iterations: 115\ncpu: 9357122.608695636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 36626.02176220587,
            "unit": "ns/iter",
            "extra": "iterations: 22608\ncpu: 36624.99557678693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 147191.92467757367,
            "unit": "ns/iter",
            "extra": "iterations: 5815\ncpu: 147191.1263972488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 118185.43673244247,
            "unit": "ns/iter",
            "extra": "iterations: 7247\ncpu: 118181.24741272295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 119529.94261380399,
            "unit": "ns/iter",
            "extra": "iterations: 7162\ncpu: 119527.19910639458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 119692.51278448945,
            "unit": "ns/iter",
            "extra": "iterations: 7118\ncpu: 119688.7608878903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 301950.1347368229,
            "unit": "ns/iter",
            "extra": "iterations: 2850\ncpu: 301944.1052631584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2234164.6739131985,
            "unit": "ns/iter",
            "extra": "iterations: 414\ncpu: 2234089.3719806853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1844109.5496032608,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1844087.6984127038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1859352.4789580414,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1859327.0541082248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1860167.3787576212,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1860121.442885779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1132692.4121952166,
            "unit": "ns/iter",
            "extra": "iterations: 820\ncpu: 1132652.8048780551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1799354.0696324138,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1799346.6150870435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7673583.700000108,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7673313.999999962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4251207.3818179695,
            "unit": "ns/iter",
            "extra": "iterations: 220\ncpu: 4251152.727272741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 35520.790319800704,
            "unit": "ns/iter",
            "extra": "iterations: 23202\ncpu: 35520.10171536958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 148330.43802939006,
            "unit": "ns/iter",
            "extra": "iterations: 5785\ncpu: 148331.08038029427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 117787.25880572533,
            "unit": "ns/iter",
            "extra": "iterations: 7268\ncpu: 117783.72317006046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 115696.99136418386,
            "unit": "ns/iter",
            "extra": "iterations: 7411\ncpu: 115695.76305491818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 116630.62420209545,
            "unit": "ns/iter",
            "extra": "iterations: 7363\ncpu: 116626.26646747194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 298287.9979317417,
            "unit": "ns/iter",
            "extra": "iterations: 2901\ncpu: 298289.1761461574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2247092.195652247,
            "unit": "ns/iter",
            "extra": "iterations: 414\ncpu: 2247062.0772946784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1840988.4970295853,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1840929.7029702885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1858148.7624749502,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1858100.598802395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1868652.1526103707,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1868559.8393574394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1128921.897810241,
            "unit": "ns/iter",
            "extra": "iterations: 822\ncpu: 1128898.7834549902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1793119.7965114643,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1793022.0930232496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3368.277192289712,
            "unit": "ns/iter",
            "extra": "iterations: 207614\ncpu: 3368.1818181818194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17259.570632476534,
            "unit": "ns/iter",
            "extra": "iterations: 40555\ncpu: 17258.638885464108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13848.574845909929,
            "unit": "ns/iter",
            "extra": "iterations: 50457\ncpu: 13848.062706859231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13716.03352338447,
            "unit": "ns/iter",
            "extra": "iterations: 51039\ncpu: 13715.921158329838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11091.498965882372,
            "unit": "ns/iter",
            "extra": "iterations: 63339\ncpu: 11091.08132430254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 70073.28647347547,
            "unit": "ns/iter",
            "extra": "iterations: 9973\ncpu: 70070.71091948246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 148625.43988147716,
            "unit": "ns/iter",
            "extra": "iterations: 4724\ncpu: 148617.84504657073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 38561.70519817177,
            "unit": "ns/iter",
            "extra": "iterations: 18141\ncpu: 38560.11245245549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 39133.68076901701,
            "unit": "ns/iter",
            "extra": "iterations: 17893\ncpu: 39130.81093164927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 38907.26051117362,
            "unit": "ns/iter",
            "extra": "iterations: 18076\ncpu: 38907.75060854213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 76254.53416756577,
            "unit": "ns/iter",
            "extra": "iterations: 9190\ncpu: 76252.08922742105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 69637.76765873253,
            "unit": "ns/iter",
            "extra": "iterations: 10080\ncpu: 69637.1527777779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21183.00586794053,
            "unit": "ns/iter",
            "extra": "iterations: 33061\ncpu: 21182.613956020705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 99197.1754261265,
            "unit": "ns/iter",
            "extra": "iterations: 7040\ncpu: 99196.30681818134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 80715.90860957277,
            "unit": "ns/iter",
            "extra": "iterations: 8688\ncpu: 80715.33149171119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 80910.27526855688,
            "unit": "ns/iter",
            "extra": "iterations: 8657\ncpu: 80908.1552500877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 81190.96769712544,
            "unit": "ns/iter",
            "extra": "iterations: 8637\ncpu: 81190.471228436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 154640.89036251864,
            "unit": "ns/iter",
            "extra": "iterations: 4524\ncpu: 154634.19540229905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 638526.817684556,
            "unit": "ns/iter",
            "extra": "iterations: 1097\ncpu: 638513.4913400206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 540477.5399999659,
            "unit": "ns/iter",
            "extra": "iterations: 1300\ncpu: 540479.3846153775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 544169.7534775571,
            "unit": "ns/iter",
            "extra": "iterations: 1294\ncpu: 544160.6646058774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 545344.1338521972,
            "unit": "ns/iter",
            "extra": "iterations: 1285\ncpu: 545338.5992217872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 356203.26907423494,
            "unit": "ns/iter",
            "extra": "iterations: 1966\ncpu: 356191.55645981955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 529567.4094010886,
            "unit": "ns/iter",
            "extra": "iterations: 1319\ncpu: 529556.937073539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21448.75395387425,
            "unit": "ns/iter",
            "extra": "iterations: 32563\ncpu: 21448.441482664595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 100903.32338953236,
            "unit": "ns/iter",
            "extra": "iterations: 6939\ncpu: 100902.19051736464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 81043.29152659958,
            "unit": "ns/iter",
            "extra": "iterations: 8627\ncpu: 81042.64518372508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 80617.23298850268,
            "unit": "ns/iter",
            "extra": "iterations: 8700\ncpu: 80614.7356321837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 81627.00396455708,
            "unit": "ns/iter",
            "extra": "iterations: 8576\ncpu: 81625.09328358211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 154534.7242216989,
            "unit": "ns/iter",
            "extra": "iterations: 4529\ncpu: 154531.39765952755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 635077.5449590923,
            "unit": "ns/iter",
            "extra": "iterations: 1101\ncpu: 635069.573115348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 540913.6687258666,
            "unit": "ns/iter",
            "extra": "iterations: 1295\ncpu: 540909.4208494157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 542304.8009294698,
            "unit": "ns/iter",
            "extra": "iterations: 1291\ncpu: 542287.2192099204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 542629.5986078727,
            "unit": "ns/iter",
            "extra": "iterations: 1293\ncpu: 542616.4733178653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 356375.4522715784,
            "unit": "ns/iter",
            "extra": "iterations: 1959\ncpu: 356369.8825931618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 528175.1676737256,
            "unit": "ns/iter",
            "extra": "iterations: 1324\ncpu: 528167.5226586153 ns\nthreads: 1"
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
        "date": 1702492164631,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8514.225065241924,
            "unit": "ns/iter",
            "extra": "iterations: 80470\ncpu: 8514.056170001244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 79887.73337950265,
            "unit": "ns/iter",
            "extra": "iterations: 11552\ncpu: 79885.4743767313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 143105.00350409176,
            "unit": "ns/iter",
            "extra": "iterations: 5993\ncpu: 143101.83547472052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 213842.97319172096,
            "unit": "ns/iter",
            "extra": "iterations: 3954\ncpu: 213839.1755184623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 283268.4945125884,
            "unit": "ns/iter",
            "extra": "iterations: 3098\ncpu: 283262.39509360894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 341463.82991801586,
            "unit": "ns/iter",
            "extra": "iterations: 2440\ncpu: 341458.9754098361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 414258.3547932477,
            "unit": "ns/iter",
            "extra": "iterations: 2128\ncpu: 414243.37406015047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 475811.21196280705,
            "unit": "ns/iter",
            "extra": "iterations: 1722\ncpu: 475795.18002322887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 546472.5826472315,
            "unit": "ns/iter",
            "extra": "iterations: 1579\ncpu: 546447.1184293858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6449.914769327873,
            "unit": "ns/iter",
            "extra": "iterations: 106992\ncpu: 6449.62333632421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5447.820988791701,
            "unit": "ns/iter",
            "extra": "iterations: 124819\ncpu: 5447.55846465682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5381.733183040075,
            "unit": "ns/iter",
            "extra": "iterations: 129081\ncpu: 5381.676621656165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5356.7486141909,
            "unit": "ns/iter",
            "extra": "iterations: 133496\ncpu: 5356.512554683288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9360.367460499741,
            "unit": "ns/iter",
            "extra": "iterations: 73861\ncpu: 9359.777148969011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 34485.53493495958,
            "unit": "ns/iter",
            "extra": "iterations: 23601\ncpu: 34484.487945425986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 139808.21815181436,
            "unit": "ns/iter",
            "extra": "iterations: 6060\ncpu: 139800.79207920795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 110451.88777923447,
            "unit": "ns/iter",
            "extra": "iterations: 7610\ncpu: 110448.52825229954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 105986.77816134927,
            "unit": "ns/iter",
            "extra": "iterations: 7821\ncpu: 105980.13041810489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 109064.26230340332,
            "unit": "ns/iter",
            "extra": "iterations: 7884\ncpu: 109060.04566210031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 271236.36786269036,
            "unit": "ns/iter",
            "extra": "iterations: 3205\ncpu: 271227.23868954735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2230591.0893300716,
            "unit": "ns/iter",
            "extra": "iterations: 403\ncpu: 2230567.2456575637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1844253.6772278736,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1844199.8019801965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1804247.155470418,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1804220.5374280212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1851397.3125000582,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1851352.9296875012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1106110.862149435,
            "unit": "ns/iter",
            "extra": "iterations: 856\ncpu: 1106101.2850467272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1774144.9393940654,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1774125.7575757564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7398203.139999851,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7398091.999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4139241.3493451397,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4139110.917030564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8991983.714285381,
            "unit": "ns/iter",
            "extra": "iterations: 119\ncpu: 8991531.092436988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 33802.07821522339,
            "unit": "ns/iter",
            "extra": "iterations: 24765\ncpu: 33800.70260448223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 137833.5185480042,
            "unit": "ns/iter",
            "extra": "iterations: 6281\ncpu: 137827.44785862125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 112755.75898183076,
            "unit": "ns/iter",
            "extra": "iterations: 7543\ncpu: 112751.94219806456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 109578.14293051559,
            "unit": "ns/iter",
            "extra": "iterations: 7787\ncpu: 109573.81533324819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 113294.98550918835,
            "unit": "ns/iter",
            "extra": "iterations: 7453\ncpu: 113291.37260163715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 268986.0218613329,
            "unit": "ns/iter",
            "extra": "iterations: 3202\ncpu: 268974.39100562286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2238027.8283583093,
            "unit": "ns/iter",
            "extra": "iterations: 402\ncpu: 2237949.9999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1851602.2879685506,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1851468.0473372813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1831834.0116958162,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1831769.3957115079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1824719.2197581201,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1824616.1290322572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1117565.6476998494,
            "unit": "ns/iter",
            "extra": "iterations: 826\ncpu: 1117517.3123486703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1803510.2716764198,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1803428.90173411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7358280.9900005935,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7358004.999999963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4229418.127853879,
            "unit": "ns/iter",
            "extra": "iterations: 219\ncpu: 4229212.328767094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 33583.75726433839,
            "unit": "ns/iter",
            "extra": "iterations: 24813\ncpu: 33582.767097892356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 135693.43308461906,
            "unit": "ns/iter",
            "extra": "iterations: 6299\ncpu: 135688.42673440167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 109190.9878203472,
            "unit": "ns/iter",
            "extra": "iterations: 7882\ncpu: 109186.29789393577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 106402.85504047514,
            "unit": "ns/iter",
            "extra": "iterations: 8154\ncpu: 106397.76796664284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 108335.72939666251,
            "unit": "ns/iter",
            "extra": "iterations: 7790\ncpu: 108330.66752246465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 269279.3287967708,
            "unit": "ns/iter",
            "extra": "iterations: 3233\ncpu: 269267.522424992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2242805.707021737,
            "unit": "ns/iter",
            "extra": "iterations: 413\ncpu: 2242723.002421317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1861229.1643834852,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1861141.4872798335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1825814.2166343192,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1825734.4294003956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1894388.0019881076,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1894339.16500994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1120577.7349112707,
            "unit": "ns/iter",
            "extra": "iterations: 845\ncpu: 1120525.917159759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1798620.1608526565,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1798569.9612403065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3233.0927104617253,
            "unit": "ns/iter",
            "extra": "iterations: 212414\ncpu: 3232.877776417758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16361.687107217733,
            "unit": "ns/iter",
            "extra": "iterations: 42008\ncpu: 16361.283565035226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12999.02069816657,
            "unit": "ns/iter",
            "extra": "iterations: 53483\ncpu: 12998.9174130097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12352.326535854956,
            "unit": "ns/iter",
            "extra": "iterations: 58404\ncpu: 12352.015272926517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10566.825493630238,
            "unit": "ns/iter",
            "extra": "iterations: 66244\ncpu: 10566.736610108113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 65369.33675943181,
            "unit": "ns/iter",
            "extra": "iterations: 10313\ncpu: 65367.923979443556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 146743.099337762,
            "unit": "ns/iter",
            "extra": "iterations: 4681\ncpu: 146743.04635761605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 38815.32980532009,
            "unit": "ns/iter",
            "extra": "iterations: 18235\ncpu: 38814.54346037809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 38417.13078054375,
            "unit": "ns/iter",
            "extra": "iterations: 18359\ncpu: 38417.037965030206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 38379.12279726393,
            "unit": "ns/iter",
            "extra": "iterations: 17989\ncpu: 38378.270053922104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 79034.00775282214,
            "unit": "ns/iter",
            "extra": "iterations: 8771\ncpu: 79033.88439174458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 69157.25379588133,
            "unit": "ns/iter",
            "extra": "iterations: 9945\ncpu: 69157.12418300661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20453.609581849116,
            "unit": "ns/iter",
            "extra": "iterations: 34294\ncpu: 20453.370852044056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 97754.77553666779,
            "unit": "ns/iter",
            "extra": "iterations: 6941\ncpu: 97753.72424722672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 79911.34273608471,
            "unit": "ns/iter",
            "extra": "iterations: 8969\ncpu: 79910.31330137145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 78739.92490343312,
            "unit": "ns/iter",
            "extra": "iterations: 8802\ncpu: 78739.070665759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 80585.28521680784,
            "unit": "ns/iter",
            "extra": "iterations: 8902\ncpu: 80584.03729498944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 150185.94307891748,
            "unit": "ns/iter",
            "extra": "iterations: 4638\ncpu: 150185.66192324206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 633723.9909256726,
            "unit": "ns/iter",
            "extra": "iterations: 1102\ncpu: 633717.150635209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 552739.607333854,
            "unit": "ns/iter",
            "extra": "iterations: 1309\ncpu: 552731.7035905196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 528087.7253846064,
            "unit": "ns/iter",
            "extra": "iterations: 1300\ncpu: 528080.9999999948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 534811.5520431931,
            "unit": "ns/iter",
            "extra": "iterations: 1297\ncpu: 534810.6399383178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 349712.8768693732,
            "unit": "ns/iter",
            "extra": "iterations: 2006\ncpu: 349709.87038883707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 515291.17271406105,
            "unit": "ns/iter",
            "extra": "iterations: 1378\ncpu: 515282.1480406377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21287.652752054906,
            "unit": "ns/iter",
            "extra": "iterations: 32939\ncpu: 21287.376665958323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 100916.13022009637,
            "unit": "ns/iter",
            "extra": "iterations: 7088\ncpu: 100916.01297968284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 80936.44818832524,
            "unit": "ns/iter",
            "extra": "iterations: 8666\ncpu: 80934.721901686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 79964.56789987376,
            "unit": "ns/iter",
            "extra": "iterations: 9028\ncpu: 79963.76827647393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 81153.4664920836,
            "unit": "ns/iter",
            "extra": "iterations: 8401\ncpu: 81152.00571360576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 151268.1459982538,
            "unit": "ns/iter",
            "extra": "iterations: 4548\ncpu: 151266.24890061526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 636584.7425373506,
            "unit": "ns/iter",
            "extra": "iterations: 1072\ncpu: 636584.4216417883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 544913.0428893768,
            "unit": "ns/iter",
            "extra": "iterations: 1329\ncpu: 544904.0632054147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 526638.4867523842,
            "unit": "ns/iter",
            "extra": "iterations: 1321\ncpu: 526639.0613171849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 540597.2902985243,
            "unit": "ns/iter",
            "extra": "iterations: 1340\ncpu: 540587.6865671581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 345916.30303032504,
            "unit": "ns/iter",
            "extra": "iterations: 1980\ncpu: 345916.56565656635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 522358.12392834015,
            "unit": "ns/iter",
            "extra": "iterations: 1283\ncpu: 522357.5214341443 ns\nthreads: 1"
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
        "date": 1702506757626,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8809.82500347475,
            "unit": "ns/iter",
            "extra": "iterations: 79133\ncpu: 8809.586392529034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 79141.08205080428,
            "unit": "ns/iter",
            "extra": "iterations: 10786\ncpu: 79140.10754681996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 152048.67231542032,
            "unit": "ns/iter",
            "extra": "iterations: 5783\ncpu: 152047.46671277887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 222761.11387808836,
            "unit": "ns/iter",
            "extra": "iterations: 3855\ncpu: 222745.73281452665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 294193.0125679448,
            "unit": "ns/iter",
            "extra": "iterations: 2944\ncpu: 294175.3057065218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 359549.4792800085,
            "unit": "ns/iter",
            "extra": "iterations: 2389\ncpu: 359535.8308915866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 431071.45540138136,
            "unit": "ns/iter",
            "extra": "iterations: 2018\ncpu: 431058.4737363725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 500072.7730659497,
            "unit": "ns/iter",
            "extra": "iterations: 1745\ncpu: 500043.20916905423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 571062.1594488504,
            "unit": "ns/iter",
            "extra": "iterations: 1524\ncpu: 571029.3307086622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6734.063520264353,
            "unit": "ns/iter",
            "extra": "iterations: 104691\ncpu: 6733.600787078163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5710.401798917222,
            "unit": "ns/iter",
            "extra": "iterations: 122407\ncpu: 5710.360518597787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5694.935340021655,
            "unit": "ns/iter",
            "extra": "iterations: 122889\ncpu: 5694.718811284984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5655.132642978273,
            "unit": "ns/iter",
            "extra": "iterations: 124477\ncpu: 5654.810928926619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9822.592504803215,
            "unit": "ns/iter",
            "extra": "iterations: 71299\ncpu: 9821.924571172101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 36100.64519382563,
            "unit": "ns/iter",
            "extra": "iterations: 22804\ncpu: 36098.56604104538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 145437.52852034094,
            "unit": "ns/iter",
            "extra": "iterations: 5873\ncpu: 145433.23684658602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 116010.6646747326,
            "unit": "ns/iter",
            "extra": "iterations: 7363\ncpu: 116003.9521933993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 111507.04289264005,
            "unit": "ns/iter",
            "extra": "iterations: 7647\ncpu: 111500.823852491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 114699.46226161669,
            "unit": "ns/iter",
            "extra": "iterations: 7446\ncpu: 114690.37066881538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 293646.19012179464,
            "unit": "ns/iter",
            "extra": "iterations: 2956\ncpu: 293634.2354533153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2349709.6363634355,
            "unit": "ns/iter",
            "extra": "iterations: 396\ncpu: 2349566.414141412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1929531.7950311136,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1929399.17184265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1921734.9485597506,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1921631.48148148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1951819.0105040462,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1951735.2941176402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1171717.711195906,
            "unit": "ns/iter",
            "extra": "iterations: 786\ncpu: 1171648.72773537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1874914.491902878,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1874751.6194332002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7824662.824817887,
            "unit": "ns/iter",
            "extra": "iterations: 137\ncpu: 7824230.656934288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4352506.204650867,
            "unit": "ns/iter",
            "extra": "iterations: 215\ncpu: 4352370.232558143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9587969.946902433,
            "unit": "ns/iter",
            "extra": "iterations: 113\ncpu: 9587764.601769896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 35191.00085833343,
            "unit": "ns/iter",
            "extra": "iterations: 23301\ncpu: 35190.57551178058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 146454.266655266,
            "unit": "ns/iter",
            "extra": "iterations: 5854\ncpu: 146449.36795353642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 117683.8787587475,
            "unit": "ns/iter",
            "extra": "iterations: 7283\ncpu: 117682.32871069627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 113357.48039215649,
            "unit": "ns/iter",
            "extra": "iterations: 7548\ncpu: 113352.59671436175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 117848.8033305786,
            "unit": "ns/iter",
            "extra": "iterations: 7266\ncpu: 117843.57280484418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 299965.49913701887,
            "unit": "ns/iter",
            "extra": "iterations: 2897\ncpu: 299958.2326544712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2387309.3316327105,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2387184.6938775554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1960424.5953879177,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1960312.3689727434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1937267.829875577,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1937159.5435684673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1964220.0294736922,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1964092.4210526273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1170099.5793449907,
            "unit": "ns/iter",
            "extra": "iterations: 794\ncpu: 1170079.471032747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1887060.5393938676,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1886894.5454545557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7881332.613138067,
            "unit": "ns/iter",
            "extra": "iterations: 137\ncpu: 7881069.343065695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4429231.24170641,
            "unit": "ns/iter",
            "extra": "iterations: 211\ncpu: 4428978.672985776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 34225.084747174704,
            "unit": "ns/iter",
            "extra": "iterations: 23989\ncpu: 34223.47742715391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 141334.53130174582,
            "unit": "ns/iter",
            "extra": "iterations: 6038\ncpu: 141326.97913216267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 114933.79792536769,
            "unit": "ns/iter",
            "extra": "iterations: 7423\ncpu: 114930.99824868616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 111770.53272249944,
            "unit": "ns/iter",
            "extra": "iterations: 7640\ncpu: 111763.12827225184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 114260.8704920273,
            "unit": "ns/iter",
            "extra": "iterations: 7459\ncpu: 114255.59726504887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 294246.3255656709,
            "unit": "ns/iter",
            "extra": "iterations: 2961\ncpu: 294228.77406281664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2367347.940540529,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2367287.0270270263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1943369.9227557878,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1943280.167014614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1929748.1095041006,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1929604.7520661214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1980421.6736595542,
            "unit": "ns/iter",
            "extra": "iterations: 429\ncpu: 1980364.8018647966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1164167.4930990846,
            "unit": "ns/iter",
            "extra": "iterations: 797\ncpu: 1164119.447929736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1878146.9030302858,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1878143.2323232344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3391.0685708756605,
            "unit": "ns/iter",
            "extra": "iterations: 206560\ncpu: 3390.8810999225343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17527.487215483685,
            "unit": "ns/iter",
            "extra": "iterations: 39892\ncpu: 17527.514288579194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13316.515998702796,
            "unit": "ns/iter",
            "extra": "iterations: 52473\ncpu: 13316.543746307674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13641.307996450958,
            "unit": "ns/iter",
            "extra": "iterations: 51848\ncpu: 13640.805817003658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11288.954840167231,
            "unit": "ns/iter",
            "extra": "iterations: 62002\ncpu: 11288.161672204144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 68794.7086768646,
            "unit": "ns/iter",
            "extra": "iterations: 10188\ncpu: 68788.82018060453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 156656.39763074534,
            "unit": "ns/iter",
            "extra": "iterations: 4474\ncpu: 156650.7599463574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 40034.23965901672,
            "unit": "ns/iter",
            "extra": "iterations: 17479\ncpu: 40031.048686996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 40253.589398641525,
            "unit": "ns/iter",
            "extra": "iterations: 17394\ncpu: 40250.21846613779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 40404.770354308755,
            "unit": "ns/iter",
            "extra": "iterations: 17527\ncpu: 40402.91550179729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 82592.06777463498,
            "unit": "ns/iter",
            "extra": "iterations: 8484\ncpu: 82589.21499292714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 72274.97238311713,
            "unit": "ns/iter",
            "extra": "iterations: 9668\ncpu: 72268.8973934617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21592.608686266078,
            "unit": "ns/iter",
            "extra": "iterations: 32419\ncpu: 21591.594435361774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 103008.07535460455,
            "unit": "ns/iter",
            "extra": "iterations: 6768\ncpu: 103005.11229314456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 82624.05956592636,
            "unit": "ns/iter",
            "extra": "iterations: 8478\ncpu: 82619.58008964424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 84922.79542038676,
            "unit": "ns/iter",
            "extra": "iterations: 8647\ncpu: 84918.89672718968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 81446.64520992988,
            "unit": "ns/iter",
            "extra": "iterations: 8622\ncpu: 81439.37601484644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 155114.43380403865,
            "unit": "ns/iter",
            "extra": "iterations: 4532\ncpu: 155103.86142983456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 663920.682509511,
            "unit": "ns/iter",
            "extra": "iterations: 1052\ncpu: 663905.3231939273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 558103.2734499678,
            "unit": "ns/iter",
            "extra": "iterations: 1258\ncpu: 558083.8632750458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 556594.1404762769,
            "unit": "ns/iter",
            "extra": "iterations: 1260\ncpu: 556571.6666666615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 562010.2940704932,
            "unit": "ns/iter",
            "extra": "iterations: 1248\ncpu: 561970.9134615428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 369823.842577921,
            "unit": "ns/iter",
            "extra": "iterations: 1893\ncpu: 369798.4680401489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 547657.1494719443,
            "unit": "ns/iter",
            "extra": "iterations: 1231\ncpu: 547615.4346060195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21573.491239436906,
            "unit": "ns/iter",
            "extra": "iterations: 32418\ncpu: 21572.728114010657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 103036.01988218779,
            "unit": "ns/iter",
            "extra": "iterations: 6790\ncpu: 103035.22827687742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 82982.4941929397,
            "unit": "ns/iter",
            "extra": "iterations: 8438\ncpu: 82979.04716757512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 82014.51087210944,
            "unit": "ns/iter",
            "extra": "iterations: 8554\ncpu: 82008.73275660413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 83437.92116232822,
            "unit": "ns/iter",
            "extra": "iterations: 8397\ncpu: 83431.5707990957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 155260.2117096934,
            "unit": "ns/iter",
            "extra": "iterations: 4492\ncpu: 155254.25200355984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 667571.859330173,
            "unit": "ns/iter",
            "extra": "iterations: 1045\ncpu: 667566.2200956884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 564034.1258012536,
            "unit": "ns/iter",
            "extra": "iterations: 1248\ncpu: 564007.7724358948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 556555.3885804897,
            "unit": "ns/iter",
            "extra": "iterations: 1261\ncpu: 556512.5297383132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 560543.5440000292,
            "unit": "ns/iter",
            "extra": "iterations: 1250\ncpu: 560502.0800000035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 372603.59957400773,
            "unit": "ns/iter",
            "extra": "iterations: 1878\ncpu: 372589.56336527906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 550217.7956147585,
            "unit": "ns/iter",
            "extra": "iterations: 1277\ncpu: 550175.254502749 ns\nthreads: 1"
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
        "date": 1705574922544,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8673.142722281402,
            "unit": "ns/iter",
            "extra": "iterations: 80506\ncpu: 8672.85792363302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 78498.74047707528,
            "unit": "ns/iter",
            "extra": "iterations: 10816\ncpu: 78496.92122781066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 149914.52887432795,
            "unit": "ns/iter",
            "extra": "iterations: 5801\ncpu: 149910.877434925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 221455.90281652924,
            "unit": "ns/iter",
            "extra": "iterations: 3941\ncpu: 221454.75767571683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 291507.6945381082,
            "unit": "ns/iter",
            "extra": "iterations: 2966\ncpu: 291495.5495616992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 359263.8340300951,
            "unit": "ns/iter",
            "extra": "iterations: 2392\ncpu: 359232.8177257527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 431336.6453690428,
            "unit": "ns/iter",
            "extra": "iterations: 2019\ncpu: 431317.5829618625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 507792.3955223583,
            "unit": "ns/iter",
            "extra": "iterations: 1742\ncpu: 507755.45350172196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 571471.1615435184,
            "unit": "ns/iter",
            "extra": "iterations: 1529\ncpu: 571444.4081098757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6594.0081970314,
            "unit": "ns/iter",
            "extra": "iterations: 105770\ncpu: 6593.791245154589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5577.951987143699,
            "unit": "ns/iter",
            "extra": "iterations: 115115\ncpu: 5577.664075055389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5596.395711082509,
            "unit": "ns/iter",
            "extra": "iterations: 125766\ncpu: 5595.940874322156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5561.4659065839505,
            "unit": "ns/iter",
            "extra": "iterations: 126916\ncpu: 5547.779633773525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9688.426843430338,
            "unit": "ns/iter",
            "extra": "iterations: 72338\ncpu: 9688.06021731316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 36711.3803214135,
            "unit": "ns/iter",
            "extra": "iterations: 22339\ncpu: 36710.788307444425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 147514.8971576189,
            "unit": "ns/iter",
            "extra": "iterations: 5805\ncpu: 147506.20155038766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 118529.56885314731,
            "unit": "ns/iter",
            "extra": "iterations: 7211\ncpu: 118525.43336569142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 115080.03701210377,
            "unit": "ns/iter",
            "extra": "iterations: 7430\ncpu: 115078.49259757755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 117005.78136544011,
            "unit": "ns/iter",
            "extra": "iterations: 7309\ncpu: 117001.36817622122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 297799.8953846097,
            "unit": "ns/iter",
            "extra": "iterations: 2925\ncpu: 297788.5470085473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2292610.2389163678,
            "unit": "ns/iter",
            "extra": "iterations: 406\ncpu: 2292406.6502463026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1914196.2258727215,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1914069.199178642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1927583.5061984072,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1927455.991735536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1932556.8087317166,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1932409.9792099772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1148170.6823238605,
            "unit": "ns/iter",
            "extra": "iterations: 809\ncpu: 1148073.0531520415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1859962.2639999324,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1859788.199999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7674909.039999421,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7674468.000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4312844.615740716,
            "unit": "ns/iter",
            "extra": "iterations: 216\ncpu: 4312650.46296296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9436645.83333334,
            "unit": "ns/iter",
            "extra": "iterations: 114\ncpu: 9435929.82456141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 35536.55616153701,
            "unit": "ns/iter",
            "extra": "iterations: 23103\ncpu: 35535.09500930613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 147969.78717904357,
            "unit": "ns/iter",
            "extra": "iterations: 5803\ncpu: 147968.7920041362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 118587.26760758353,
            "unit": "ns/iter",
            "extra": "iterations: 7227\ncpu: 118585.29126885296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 116463.38130968848,
            "unit": "ns/iter",
            "extra": "iterations: 7330\ncpu: 116461.65075034118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 119427.52402969942,
            "unit": "ns/iter",
            "extra": "iterations: 7137\ncpu: 119425.33277287318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 304564.2973821831,
            "unit": "ns/iter",
            "extra": "iterations: 2865\ncpu: 304562.82722513226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2308423.9801490693,
            "unit": "ns/iter",
            "extra": "iterations: 403\ncpu: 2308348.13895781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1934763.133333206,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1934634.7916666674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1956007.5263157878,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1955870.7368421168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1955418.3970587412,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1955258.403361332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1151022.916049324,
            "unit": "ns/iter",
            "extra": "iterations: 810\ncpu: 1150944.8148148116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1877588.4778227508,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1877429.2338709766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7715851.950000082,
            "unit": "ns/iter",
            "extra": "iterations: 140\ncpu: 7715440.714285699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4422517.796208456,
            "unit": "ns/iter",
            "extra": "iterations: 211\ncpu: 4422256.398104266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 35855.07384935078,
            "unit": "ns/iter",
            "extra": "iterations: 23074\ncpu: 35853.77047759399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 144635.19909044108,
            "unit": "ns/iter",
            "extra": "iterations: 5937\ncpu: 144626.6632979621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 116392.22462292216,
            "unit": "ns/iter",
            "extra": "iterations: 7359\ncpu: 116386.83245006141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 114946.53420065047,
            "unit": "ns/iter",
            "extra": "iterations: 7456\ncpu: 114939.35085836894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 116226.64852023295,
            "unit": "ns/iter",
            "extra": "iterations: 7366\ncpu: 116216.67119196283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 296769.8578264052,
            "unit": "ns/iter",
            "extra": "iterations: 2926\ncpu: 296760.59466848715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2283823.830466969,
            "unit": "ns/iter",
            "extra": "iterations: 407\ncpu: 2283810.8108108058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1923378.9565218796,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1923320.0828157412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1946360.0461215414,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1946327.4633123768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1939942.1649269285,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1939888.3089770342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1135649.4718827384,
            "unit": "ns/iter",
            "extra": "iterations: 818\ncpu: 1135624.938875302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1856509.1265060462,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1856399.7991967879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3386.2816215956923,
            "unit": "ns/iter",
            "extra": "iterations: 206710\ncpu: 3386.2295002660717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17047.838613909676,
            "unit": "ns/iter",
            "extra": "iterations: 41094\ncpu: 17047.055531221078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13619.904420896997,
            "unit": "ns/iter",
            "extra": "iterations: 51528\ncpu: 13619.68250271691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13248.707495983099,
            "unit": "ns/iter",
            "extra": "iterations: 52895\ncpu: 13247.991303525856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11055.841862968076,
            "unit": "ns/iter",
            "extra": "iterations: 63211\ncpu: 11055.458701808178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 69299.90403090489,
            "unit": "ns/iter",
            "extra": "iterations: 10097\ncpu: 69297.93007824104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 151073.15939523597,
            "unit": "ns/iter",
            "extra": "iterations: 4630\ncpu: 151067.9265658744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 39602.51508645509,
            "unit": "ns/iter",
            "extra": "iterations: 17698\ncpu: 39601.72900892779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 40090.13986173749,
            "unit": "ns/iter",
            "extra": "iterations: 17503\ncpu: 40088.39056161769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 39863.523294225415,
            "unit": "ns/iter",
            "extra": "iterations: 17558\ncpu: 39861.56737669459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 77167.13643375687,
            "unit": "ns/iter",
            "extra": "iterations: 9074\ncpu: 77165.08706193579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 64072.464753874796,
            "unit": "ns/iter",
            "extra": "iterations: 10909\ncpu: 64069.25474378958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 22070.44232346739,
            "unit": "ns/iter",
            "extra": "iterations: 31694\ncpu: 22068.69123493423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 101891.05724636475,
            "unit": "ns/iter",
            "extra": "iterations: 6900\ncpu: 101884.26086956596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 82346.41502808398,
            "unit": "ns/iter",
            "extra": "iterations: 8544\ncpu: 82340.25046816528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 83093.16696124575,
            "unit": "ns/iter",
            "extra": "iterations: 8487\ncpu: 83089.26593613888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 82966.46528924935,
            "unit": "ns/iter",
            "extra": "iterations: 8470\ncpu: 82961.82998819374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 161880.72206958127,
            "unit": "ns/iter",
            "extra": "iterations: 4368\ncpu: 161768.52106227155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 651962.6326530712,
            "unit": "ns/iter",
            "extra": "iterations: 1078\ncpu: 651929.313543601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 570575.3777777187,
            "unit": "ns/iter",
            "extra": "iterations: 1260\ncpu: 570529.2857142816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 562095.7264681965,
            "unit": "ns/iter",
            "extra": "iterations: 1243\ncpu: 562093.4835076373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 558472.1290836884,
            "unit": "ns/iter",
            "extra": "iterations: 1255\ncpu: 558440.1593625491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 369902.82727748295,
            "unit": "ns/iter",
            "extra": "iterations: 1899\ncpu: 369889.7840968881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 542738.8487199845,
            "unit": "ns/iter",
            "extra": "iterations: 1289\ncpu: 542693.6384794407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 22076.15705370606,
            "unit": "ns/iter",
            "extra": "iterations: 31728\ncpu: 22074.832955118352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 103228.57818716766,
            "unit": "ns/iter",
            "extra": "iterations: 6785\ncpu: 103222.78555637365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 83047.56468779802,
            "unit": "ns/iter",
            "extra": "iterations: 8456\ncpu: 83040.84673604526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 82731.07012122918,
            "unit": "ns/iter",
            "extra": "iterations: 8414\ncpu: 82729.79557879746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 83939.59241933847,
            "unit": "ns/iter",
            "extra": "iterations: 8337\ncpu: 83935.04857862486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 158889.89027433406,
            "unit": "ns/iter",
            "extra": "iterations: 4411\ncpu: 158881.3420992976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 655569.8341142808,
            "unit": "ns/iter",
            "extra": "iterations: 1067\ncpu: 655536.6447985027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 560654.1182109019,
            "unit": "ns/iter",
            "extra": "iterations: 1252\ncpu: 560608.7060702923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 561686.373696924,
            "unit": "ns/iter",
            "extra": "iterations: 1247\ncpu: 561679.3905372988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 560790.5179855904,
            "unit": "ns/iter",
            "extra": "iterations: 1251\ncpu: 560756.7545963197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 371355.0148620374,
            "unit": "ns/iter",
            "extra": "iterations: 1884\ncpu: 371330.67940551694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 544025.2608695569,
            "unit": "ns/iter",
            "extra": "iterations: 1288\ncpu: 543987.0341614861 ns\nthreads: 1"
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
        "date": 1705772693987,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 9274.363125894828,
            "unit": "ns/iter",
            "extra": "iterations: 75332\ncpu: 9273.766792332608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 81521.05565184307,
            "unit": "ns/iter",
            "extra": "iterations: 10386\ncpu: 81516.3104178702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 155595.07105967146,
            "unit": "ns/iter",
            "extra": "iterations: 5615\ncpu: 155584.34550311664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 228342.67614534564,
            "unit": "ns/iter",
            "extra": "iterations: 3798\ncpu: 228316.45602948923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 302444.7538354255,
            "unit": "ns/iter",
            "extra": "iterations: 2868\ncpu: 302441.248256625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 372493.22323364654,
            "unit": "ns/iter",
            "extra": "iterations: 2307\ncpu: 372488.7299523193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 445064.1937627559,
            "unit": "ns/iter",
            "extra": "iterations: 1956\ncpu: 445065.18404907966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 517185.3218322225,
            "unit": "ns/iter",
            "extra": "iterations: 1681\ncpu: 517163.7715645444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 590295.815415809,
            "unit": "ns/iter",
            "extra": "iterations: 1479\ncpu: 590291.3455037184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6886.243540693786,
            "unit": "ns/iter",
            "extra": "iterations: 101675\ncpu: 6886.145070076215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5845.3503754502,
            "unit": "ns/iter",
            "extra": "iterations: 119723\ncpu: 5845.252791861206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5794.419159888843,
            "unit": "ns/iter",
            "extra": "iterations: 120627\ncpu: 5794.419988891373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5731.433317209585,
            "unit": "ns/iter",
            "extra": "iterations: 121973\ncpu: 5731.247899125205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 10227.593389432237,
            "unit": "ns/iter",
            "extra": "iterations: 69162\ncpu: 10226.81674908186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 38347.929864568694,
            "unit": "ns/iter",
            "extra": "iterations: 21487\ncpu: 38347.90338344111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 156507.02899872276,
            "unit": "ns/iter",
            "extra": "iterations: 5483\ncpu: 156505.2343607517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 123786.90408577677,
            "unit": "ns/iter",
            "extra": "iterations: 6902\ncpu: 123788.68443929293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 116612.69450129778,
            "unit": "ns/iter",
            "extra": "iterations: 7329\ncpu: 116611.36580706801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 118878.54007501858,
            "unit": "ns/iter",
            "extra": "iterations: 7199\ncpu: 118875.41325184068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 291816.91776651144,
            "unit": "ns/iter",
            "extra": "iterations: 2955\ncpu: 291810.49069373985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2426927.6570678605,
            "unit": "ns/iter",
            "extra": "iterations: 382\ncpu: 2426832.722513086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1987161.6609806763,
            "unit": "ns/iter",
            "extra": "iterations: 469\ncpu: 1987163.1130063978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1968157.3578947408,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1968084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1974974.8350951578,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1974924.7357293856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1178848.1399491522,
            "unit": "ns/iter",
            "extra": "iterations: 786\ncpu: 1178823.4096692102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1920234.225672994,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1920162.1118012466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7897068.021897424,
            "unit": "ns/iter",
            "extra": "iterations: 137\ncpu: 7896747.445255482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4649027.742573816,
            "unit": "ns/iter",
            "extra": "iterations: 202\ncpu: 4649012.376237635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9527704.37168136,
            "unit": "ns/iter",
            "extra": "iterations: 113\ncpu: 9527575.221238919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 36668.51600301915,
            "unit": "ns/iter",
            "extra": "iterations: 22527\ncpu: 36668.31357926049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 153242.68773365935,
            "unit": "ns/iter",
            "extra": "iterations: 5617\ncpu: 153240.5376535522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 123806.59297282585,
            "unit": "ns/iter",
            "extra": "iterations: 6916\ncpu: 123803.45575477132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 120294.02846673367,
            "unit": "ns/iter",
            "extra": "iterations: 7096\ncpu: 120291.4599774517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 124930.2753095539,
            "unit": "ns/iter",
            "extra": "iterations: 6865\ncpu: 124927.76402039285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 295911.3188949632,
            "unit": "ns/iter",
            "extra": "iterations: 2932\ncpu: 295904.877216917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2434694.705263047,
            "unit": "ns/iter",
            "extra": "iterations: 380\ncpu: 2434652.894736843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2009543.5366379167,
            "unit": "ns/iter",
            "extra": "iterations: 464\ncpu: 2009509.0517241415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1988221.9230771041,
            "unit": "ns/iter",
            "extra": "iterations: 468\ncpu: 1988188.4615384701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1989855.460385302,
            "unit": "ns/iter",
            "extra": "iterations: 467\ncpu: 1989816.2740899345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1187669.7519181252,
            "unit": "ns/iter",
            "extra": "iterations: 782\ncpu: 1187643.2225063914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1933046.2972973187,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1932989.8128898211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7906487.551470238,
            "unit": "ns/iter",
            "extra": "iterations: 136\ncpu: 7906183.8235294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4352374.084112292,
            "unit": "ns/iter",
            "extra": "iterations: 214\ncpu: 4352349.999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 35757.446345596996,
            "unit": "ns/iter",
            "extra": "iterations: 23027\ncpu: 35756.79854084322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 148151.5374243654,
            "unit": "ns/iter",
            "extra": "iterations: 5785\ncpu: 148150.85566119343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 120401.51669940437,
            "unit": "ns/iter",
            "extra": "iterations: 7126\ncpu: 120398.45635700233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 117873.77736523109,
            "unit": "ns/iter",
            "extra": "iterations: 7272\ncpu: 117870.18701870178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 119428.8528838038,
            "unit": "ns/iter",
            "extra": "iterations: 7178\ncpu: 119426.59515185325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 290085.37616822164,
            "unit": "ns/iter",
            "extra": "iterations: 2996\ncpu: 290080.3070761004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2430219.908616022,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2430134.986945185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2003245.7038627195,
            "unit": "ns/iter",
            "extra": "iterations: 466\ncpu: 2003180.0429184632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1973668.3319150233,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 1973599.3617021292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1983164.326225972,
            "unit": "ns/iter",
            "extra": "iterations: 469\ncpu: 1983097.4413646134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1190159.9015345129,
            "unit": "ns/iter",
            "extra": "iterations: 782\ncpu: 1190134.6547314583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1929943.2302904925,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1929837.1369294527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3444.086487389057,
            "unit": "ns/iter",
            "extra": "iterations: 203706\ncpu: 3444.085103040667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17963.84447924447,
            "unit": "ns/iter",
            "extra": "iterations: 38953\ncpu: 17963.481631710158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 14243.770088107794,
            "unit": "ns/iter",
            "extra": "iterations: 49258\ncpu: 14243.314791505987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13910.970272633425,
            "unit": "ns/iter",
            "extra": "iterations: 50324\ncpu: 13910.569509577905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11448.08719012317,
            "unit": "ns/iter",
            "extra": "iterations: 61234\ncpu: 11447.811673253345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 67672.23721881509,
            "unit": "ns/iter",
            "extra": "iterations: 10269\ncpu: 67670.1626253771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 152861.3806198067,
            "unit": "ns/iter",
            "extra": "iterations: 4582\ncpu: 152857.94412920155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 41023.51859019566,
            "unit": "ns/iter",
            "extra": "iterations: 17052\ncpu: 41024.07342247284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 40872.532975058115,
            "unit": "ns/iter",
            "extra": "iterations: 17119\ncpu: 40872.08364974641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 40993.95597373473,
            "unit": "ns/iter",
            "extra": "iterations: 17058\ncpu: 40993.14104818895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 83675.7785347145,
            "unit": "ns/iter",
            "extra": "iterations: 8367\ncpu: 83674.38747460158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 73660.856078108,
            "unit": "ns/iter",
            "extra": "iterations: 9526\ncpu: 73659.31135838693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 22126.634250474483,
            "unit": "ns/iter",
            "extra": "iterations: 31620\ncpu: 22126.635041113495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 107013.01911314829,
            "unit": "ns/iter",
            "extra": "iterations: 6540\ncpu: 107008.79204892981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 86040.11578044176,
            "unit": "ns/iter",
            "extra": "iterations: 8162\ncpu: 86037.77260475371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 84098.39073406164,
            "unit": "ns/iter",
            "extra": "iterations: 8310\ncpu: 84095.24669073371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 85753.3438841873,
            "unit": "ns/iter",
            "extra": "iterations: 8151\ncpu: 85750.3741872151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 159656.64381348607,
            "unit": "ns/iter",
            "extra": "iterations: 4332\ncpu: 159655.95567867009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 682766.4560545844,
            "unit": "ns/iter",
            "extra": "iterations: 1024\ncpu: 682740.5273437531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 580668.930116434,
            "unit": "ns/iter",
            "extra": "iterations: 1202\ncpu: 580653.4941763633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 571990.8509418339,
            "unit": "ns/iter",
            "extra": "iterations: 1221\ncpu: 571981.4086814105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 575832.1624073156,
            "unit": "ns/iter",
            "extra": "iterations: 1213\ncpu: 575828.7716405606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 374822.13097159425,
            "unit": "ns/iter",
            "extra": "iterations: 1863\ncpu: 374803.7573805678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 560237.138263617,
            "unit": "ns/iter",
            "extra": "iterations: 1244\ncpu: 560220.1768488734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 22499.519317998613,
            "unit": "ns/iter",
            "extra": "iterations: 31085\ncpu: 22499.594659803406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 109025.8829389897,
            "unit": "ns/iter",
            "extra": "iterations: 6424\ncpu: 109021.9178082183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 86838.35433461367,
            "unit": "ns/iter",
            "extra": "iterations: 8063\ncpu: 86835.74351978168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 84354.68164839548,
            "unit": "ns/iter",
            "extra": "iterations: 8299\ncpu: 84350.58440775941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 86430.31338854884,
            "unit": "ns/iter",
            "extra": "iterations: 8089\ncpu: 86431.42539250855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 159089.3495675861,
            "unit": "ns/iter",
            "extra": "iterations: 4394\ncpu: 159087.55120618897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 684229.652941159,
            "unit": "ns/iter",
            "extra": "iterations: 1020\ncpu: 684203.3333333324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 578542.62572135,
            "unit": "ns/iter",
            "extra": "iterations: 1213\ncpu: 578519.2085737863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 571602.287346947,
            "unit": "ns/iter",
            "extra": "iterations: 1225\ncpu: 571585.142857142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 575303.8604269221,
            "unit": "ns/iter",
            "extra": "iterations: 1218\ncpu: 575302.7093596142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 375629.7241008829,
            "unit": "ns/iter",
            "extra": "iterations: 1863\ncpu: 375623.18840579875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 562234.5725741972,
            "unit": "ns/iter",
            "extra": "iterations: 1247\ncpu: 562233.0392943013 ns\nthreads: 1"
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
        "date": 1705774093878,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8486.102877566973,
            "unit": "ns/iter",
            "extra": "iterations: 82535\ncpu: 8485.827830617314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 76694.79956623206,
            "unit": "ns/iter",
            "extra": "iterations: 11066\ncpu: 76692.58991505513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 146703.11484452747,
            "unit": "ns/iter",
            "extra": "iterations: 5982\ncpu: 146697.74322968905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 215826.52797029383,
            "unit": "ns/iter",
            "extra": "iterations: 4040\ncpu: 215820.74257425743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 285791.0627876203,
            "unit": "ns/iter",
            "extra": "iterations: 3042\ncpu: 285788.00131492433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 350907.39910129533,
            "unit": "ns/iter",
            "extra": "iterations: 2448\ncpu: 350900.89869281044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 419068.142513272,
            "unit": "ns/iter",
            "extra": "iterations: 2077\ncpu: 419055.5609051516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 487580.72869952885,
            "unit": "ns/iter",
            "extra": "iterations: 1784\ncpu: 487565.8071748877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 555892.6143039414,
            "unit": "ns/iter",
            "extra": "iterations: 1566\ncpu: 555872.6692209457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6472.770823681952,
            "unit": "ns/iter",
            "extra": "iterations: 107930\ncpu: 6472.477531733525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5493.431780313612,
            "unit": "ns/iter",
            "extra": "iterations: 127236\ncpu: 5493.299066301986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5467.042772261895,
            "unit": "ns/iter",
            "extra": "iterations: 127910\ncpu: 5466.8243296067585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5510.342926605665,
            "unit": "ns/iter",
            "extra": "iterations: 126686\ncpu: 5510.231596230055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9625.542396838406,
            "unit": "ns/iter",
            "extra": "iterations: 72871\ncpu: 9625.332436771823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 36929.96808605658,
            "unit": "ns/iter",
            "extra": "iterations: 22404\ncpu: 36929.548294947286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 145699.65018753355,
            "unit": "ns/iter",
            "extra": "iterations: 5866\ncpu: 145696.84623252653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 116801.87053998384,
            "unit": "ns/iter",
            "extra": "iterations: 7315\ncpu: 116799.61722488038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 113317.39346004269,
            "unit": "ns/iter",
            "extra": "iterations: 7523\ncpu: 113314.76804466313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 115575.67307431255,
            "unit": "ns/iter",
            "extra": "iterations: 7387\ncpu: 115574.42804927616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 283062.084200268,
            "unit": "ns/iter",
            "extra": "iterations: 3076\ncpu: 283054.1287386215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2307297.391521184,
            "unit": "ns/iter",
            "extra": "iterations: 401\ncpu: 2307229.1770573603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1884471.5050711655,
            "unit": "ns/iter",
            "extra": "iterations: 493\ncpu: 1884414.8073022303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1887925.9674797484,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1887888.4146341456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1913162.0633947887,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1913107.7709611468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1137358.0684596424,
            "unit": "ns/iter",
            "extra": "iterations: 818\ncpu: 1137325.183374083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1841255.0792077982,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1841222.5742574278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7627577.019999308,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7627307.999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4256068.809090927,
            "unit": "ns/iter",
            "extra": "iterations: 220\ncpu: 4255974.545454548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9353061.99130339,
            "unit": "ns/iter",
            "extra": "iterations: 115\ncpu: 9352696.521739135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 35744.45612431636,
            "unit": "ns/iter",
            "extra": "iterations: 22974\ncpu: 35743.91921302344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 145255.85806452422,
            "unit": "ns/iter",
            "extra": "iterations: 5890\ncpu: 145252.0203735144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 117308.31085165599,
            "unit": "ns/iter",
            "extra": "iterations: 7280\ncpu: 117306.26373626353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 115279.3414568077,
            "unit": "ns/iter",
            "extra": "iterations: 7386\ncpu: 115276.75331708622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 119525.79853994174,
            "unit": "ns/iter",
            "extra": "iterations: 7123\ncpu: 119524.55426084515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 291511.52024087135,
            "unit": "ns/iter",
            "extra": "iterations: 2989\ncpu: 291503.7470726006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2339751.430379612,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2339712.1518987403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1909867.3469387698,
            "unit": "ns/iter",
            "extra": "iterations: 490\ncpu: 1909822.4489795982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1897932.783673445,
            "unit": "ns/iter",
            "extra": "iterations: 490\ncpu: 1897895.9183673467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1911798.893223739,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1911764.8870636572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1137239.970624344,
            "unit": "ns/iter",
            "extra": "iterations: 817\ncpu: 1137206.6095471247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1853678.4282866982,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1853560.1593625392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7684472.110000798,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7684028.000000041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4385510.210280695,
            "unit": "ns/iter",
            "extra": "iterations: 214\ncpu: 4385300.934579428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 35110.00832101606,
            "unit": "ns/iter",
            "extra": "iterations: 23675\ncpu: 35108.6715945089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 141984.4303503144,
            "unit": "ns/iter",
            "extra": "iterations: 6023\ncpu: 141976.88859372417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 115640.86792963544,
            "unit": "ns/iter",
            "extra": "iterations: 7390\ncpu: 115634.01894452005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 113133.13956566571,
            "unit": "ns/iter",
            "extra": "iterations: 7552\ncpu: 113126.81408898278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 117407.3684427439,
            "unit": "ns/iter",
            "extra": "iterations: 7282\ncpu: 117401.23592419674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 286603.15175354783,
            "unit": "ns/iter",
            "extra": "iterations: 3051\ncpu: 286588.85611274897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2306090.6203472633,
            "unit": "ns/iter",
            "extra": "iterations: 403\ncpu: 2305944.416873439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1894596.6761710914,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1894498.9816700649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1890928.3054989497,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1890875.3564154794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1902498.4537986384,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1902416.6324435263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1133181.9647201,
            "unit": "ns/iter",
            "extra": "iterations: 822\ncpu: 1133116.4233576572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1849162.143712592,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1849068.6626746482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3345.5134215698154,
            "unit": "ns/iter",
            "extra": "iterations: 209588\ncpu: 3345.3236826535813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16918.658695652113,
            "unit": "ns/iter",
            "extra": "iterations: 42320\ncpu: 16917.99621928169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13548.397603401112,
            "unit": "ns/iter",
            "extra": "iterations: 51740\ncpu: 13547.723231542323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13183.543154284318,
            "unit": "ns/iter",
            "extra": "iterations: 53077\ncpu: 13183.412777662536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11038.700115267917,
            "unit": "ns/iter",
            "extra": "iterations: 63331\ncpu: 11038.396677772373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 67017.8087264418,
            "unit": "ns/iter",
            "extra": "iterations: 10451\ncpu: 67016.7352406468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 153179.59903907633,
            "unit": "ns/iter",
            "extra": "iterations: 4579\ncpu: 153169.68770474018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 38985.24316041667,
            "unit": "ns/iter",
            "extra": "iterations: 17947\ncpu: 38982.84950130901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 39434.08085919981,
            "unit": "ns/iter",
            "extra": "iterations: 17784\ncpu: 39432.1806117854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 39548.29642392879,
            "unit": "ns/iter",
            "extra": "iterations: 17701\ncpu: 39546.34201457485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 77319.12949482254,
            "unit": "ns/iter",
            "extra": "iterations: 9066\ncpu: 77314.39444076827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 70977.42318987739,
            "unit": "ns/iter",
            "extra": "iterations: 9875\ncpu: 70973.09367088656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21335.838466470683,
            "unit": "ns/iter",
            "extra": "iterations: 32761\ncpu: 21334.95925032793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 102418.20958085063,
            "unit": "ns/iter",
            "extra": "iterations: 6847\ncpu: 102414.35665254871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 82111.19542109575,
            "unit": "ns/iter",
            "extra": "iterations: 8561\ncpu: 82108.4102324482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 81093.2688772545,
            "unit": "ns/iter",
            "extra": "iterations: 8595\ncpu: 81087.43455497333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 81224.40278100318,
            "unit": "ns/iter",
            "extra": "iterations: 8630\ncpu: 81216.11819235189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 155084.4995569384,
            "unit": "ns/iter",
            "extra": "iterations: 4514\ncpu: 155078.95436419998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 644983.87695136,
            "unit": "ns/iter",
            "extra": "iterations: 1089\ncpu: 644977.9614325092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 545624.0202492198,
            "unit": "ns/iter",
            "extra": "iterations: 1284\ncpu: 545618.6137071648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 544490.9798136563,
            "unit": "ns/iter",
            "extra": "iterations: 1288\ncpu: 544478.5714285792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 553116.9487381977,
            "unit": "ns/iter",
            "extra": "iterations: 1268\ncpu: 553111.5141955788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 361517.17975209554,
            "unit": "ns/iter",
            "extra": "iterations: 1936\ncpu: 361506.4566115713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 534432.2987013126,
            "unit": "ns/iter",
            "extra": "iterations: 1309\ncpu: 534426.890756306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21701.439056196545,
            "unit": "ns/iter",
            "extra": "iterations: 32210\ncpu: 21701.018317292976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 103087.15672738425,
            "unit": "ns/iter",
            "extra": "iterations: 6808\ncpu: 103085.19388954317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 82206.97932087857,
            "unit": "ns/iter",
            "extra": "iterations: 8511\ncpu: 82206.1567383383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 80970.11421965741,
            "unit": "ns/iter",
            "extra": "iterations: 8650\ncpu: 80968.68208092394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 82240.19915651774,
            "unit": "ns/iter",
            "extra": "iterations: 8536\ncpu: 82237.687441424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 154749.92229580693,
            "unit": "ns/iter",
            "extra": "iterations: 4530\ncpu: 154748.41059602494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 646122.2995391295,
            "unit": "ns/iter",
            "extra": "iterations: 1085\ncpu: 646110.5990783437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 546982.1929686703,
            "unit": "ns/iter",
            "extra": "iterations: 1280\ncpu: 546977.2656250038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 543789.5167575576,
            "unit": "ns/iter",
            "extra": "iterations: 1283\ncpu: 543775.0584567391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 553345.8466402857,
            "unit": "ns/iter",
            "extra": "iterations: 1265\ncpu: 553335.8893280627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 361050.44811564015,
            "unit": "ns/iter",
            "extra": "iterations: 1937\ncpu: 361043.0046463618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 535943.4456354991,
            "unit": "ns/iter",
            "extra": "iterations: 1306\ncpu: 535933.1546707511 ns\nthreads: 1"
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
        "date": 1705777705026,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8729.634715868458,
            "unit": "ns/iter",
            "extra": "iterations: 79998\ncpu: 8729.553238830971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 80928.06782558846,
            "unit": "ns/iter",
            "extra": "iterations: 10527\ncpu: 80924.43241189321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 153974.74814552604,
            "unit": "ns/iter",
            "extra": "iterations: 5662\ncpu: 153972.3242670434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 226096.192727296,
            "unit": "ns/iter",
            "extra": "iterations: 3850\ncpu: 226084.59740259734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 301368.45353672816,
            "unit": "ns/iter",
            "extra": "iterations: 2884\ncpu: 301349.61858529825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 376204.5597755374,
            "unit": "ns/iter",
            "extra": "iterations: 2317\ncpu: 376182.86577470845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 449937.4770025486,
            "unit": "ns/iter",
            "extra": "iterations: 1935\ncpu: 449909.6124031007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 520979.1869772449,
            "unit": "ns/iter",
            "extra": "iterations: 1674\ncpu: 520948.6260454005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 594375.3655548029,
            "unit": "ns/iter",
            "extra": "iterations: 1469\ncpu: 594330.4288631727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6707.804213147011,
            "unit": "ns/iter",
            "extra": "iterations: 104435\ncpu: 6707.666969885574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5625.16703027735,
            "unit": "ns/iter",
            "extra": "iterations: 124217\ncpu: 5624.7140085495585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5588.39599625378,
            "unit": "ns/iter",
            "extra": "iterations: 124933\ncpu: 5588.0656031633025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5608.105074435828,
            "unit": "ns/iter",
            "extra": "iterations: 124940\ncpu: 5607.642068192725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9997.865338086309,
            "unit": "ns/iter",
            "extra": "iterations: 69849\ncpu: 9997.643488095773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 36878.41474675,
            "unit": "ns/iter",
            "extra": "iterations: 22310\ncpu: 36874.41506051101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 150350.07400213263,
            "unit": "ns/iter",
            "extra": "iterations: 5662\ncpu: 150341.0455669375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 120343.75939744289,
            "unit": "ns/iter",
            "extra": "iterations: 7103\ncpu: 120334.73180346332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 114830.8790572432,
            "unit": "ns/iter",
            "extra": "iterations: 7425\ncpu: 114824.06734006721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 118885.14232158264,
            "unit": "ns/iter",
            "extra": "iterations: 7202\ncpu: 118875.93723965554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 296220.7423521301,
            "unit": "ns/iter",
            "extra": "iterations: 2942\ncpu: 296201.12168592715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2420212.9869790315,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2420055.7291666665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2002953.438972233,
            "unit": "ns/iter",
            "extra": "iterations: 467\ncpu: 2002794.8608137085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1975706.6878981185,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1975538.641188956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1977688.7270789086,
            "unit": "ns/iter",
            "extra": "iterations: 469\ncpu: 1977566.5245202596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1167696.6309823967,
            "unit": "ns/iter",
            "extra": "iterations: 794\ncpu: 1167607.178841307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1933808.5714285367,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1933686.3354037288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7858413.533333279,
            "unit": "ns/iter",
            "extra": "iterations: 135\ncpu: 7857728.888888873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4419073.290475916,
            "unit": "ns/iter",
            "extra": "iterations: 210\ncpu: 4418644.761904761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9767612.009008197,
            "unit": "ns/iter",
            "extra": "iterations: 111\ncpu: 9766940.540540567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 35793.169330474695,
            "unit": "ns/iter",
            "extra": "iterations: 22837\ncpu: 35790.23514472124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 148883.5392751954,
            "unit": "ns/iter",
            "extra": "iterations: 5767\ncpu: 148871.44095717053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 120135.71111735613,
            "unit": "ns/iter",
            "extra": "iterations: 7124\ncpu: 120126.9090398654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 116654.33406262854,
            "unit": "ns/iter",
            "extra": "iterations: 7313\ncpu: 116645.02939969867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 120781.9398666909,
            "unit": "ns/iter",
            "extra": "iterations: 7051\ncpu: 120773.0534675929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 306454.18612879206,
            "unit": "ns/iter",
            "extra": "iterations: 2826\ncpu: 306426.6100495395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2438176.1207350576,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 2437997.375328084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2016810.6414687142,
            "unit": "ns/iter",
            "extra": "iterations: 463\ncpu: 2016645.5723542054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1971105.4173729115,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1970914.4067796557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1997427.9420599905,
            "unit": "ns/iter",
            "extra": "iterations: 466\ncpu: 1997306.0085836847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1176850.594147549,
            "unit": "ns/iter",
            "extra": "iterations: 786\ncpu: 1176746.564885502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1938006.4844074973,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1937890.0207900216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7920253.651851723,
            "unit": "ns/iter",
            "extra": "iterations: 135\ncpu: 7919667.407407431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4516349.485436863,
            "unit": "ns/iter",
            "extra": "iterations: 206\ncpu: 4516198.543689322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 35131.123944627216,
            "unit": "ns/iter",
            "extra": "iterations: 23333\ncpu: 35130.107572965484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 147258.29208856434,
            "unit": "ns/iter",
            "extra": "iterations: 5827\ncpu: 147253.56100909566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 120176.46024230304,
            "unit": "ns/iter",
            "extra": "iterations: 7181\ncpu: 120173.59699206239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 115531.40388245968,
            "unit": "ns/iter",
            "extra": "iterations: 7418\ncpu: 115527.8107306549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 116333.06287261665,
            "unit": "ns/iter",
            "extra": "iterations: 7380\ncpu: 116331.49051490547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 295738.23911562545,
            "unit": "ns/iter",
            "extra": "iterations: 2940\ncpu: 295717.3809523805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2434245.4961039014,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2434094.02597403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2003988.3814655764,
            "unit": "ns/iter",
            "extra": "iterations: 464\ncpu: 2003835.7758620658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1978472.1659574003,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 1978357.8723404317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1990313.7611938992,
            "unit": "ns/iter",
            "extra": "iterations: 469\ncpu: 1990107.6759061816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1181583.5972222225,
            "unit": "ns/iter",
            "extra": "iterations: 792\ncpu: 1181518.055555556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1938069.0788383828,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1937956.6390041502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3455.2146730400905,
            "unit": "ns/iter",
            "extra": "iterations: 202303\ncpu: 3455.0070933204206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17616.13726625041,
            "unit": "ns/iter",
            "extra": "iterations: 39733\ncpu: 17615.91120730882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13584.768423504329,
            "unit": "ns/iter",
            "extra": "iterations: 51551\ncpu: 13584.405734127487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13836.943943038528,
            "unit": "ns/iter",
            "extra": "iterations: 51965\ncpu: 13835.383431155627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11244.006629870331,
            "unit": "ns/iter",
            "extra": "iterations: 61238\ncpu: 11243.708155067125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 68653.62398274422,
            "unit": "ns/iter",
            "extra": "iterations: 10199\ncpu: 68650.78929306795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 161408.78895283438,
            "unit": "ns/iter",
            "extra": "iterations: 4345\ncpu: 161405.6386651304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 41113.83445846306,
            "unit": "ns/iter",
            "extra": "iterations: 17035\ncpu: 41112.59172292297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 41206.17065532273,
            "unit": "ns/iter",
            "extra": "iterations: 16923\ncpu: 41204.9695680435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 41762.27769482829,
            "unit": "ns/iter",
            "extra": "iterations: 16745\ncpu: 41761.39743206938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 84087.40786948815,
            "unit": "ns/iter",
            "extra": "iterations: 8336\ncpu: 84084.77687140123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 70936.89961623891,
            "unit": "ns/iter",
            "extra": "iterations: 9902\ncpu: 70934.13451827974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 22463.365417293768,
            "unit": "ns/iter",
            "extra": "iterations: 31189\ncpu: 22462.89076276896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 107374.78667894154,
            "unit": "ns/iter",
            "extra": "iterations: 6516\ncpu: 107372.63658686471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 87136.69686411366,
            "unit": "ns/iter",
            "extra": "iterations: 8036\ncpu: 87134.54454952804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 86278.39298461856,
            "unit": "ns/iter",
            "extra": "iterations: 8125\ncpu: 86274.85538461665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 86052.77598918835,
            "unit": "ns/iter",
            "extra": "iterations: 8138\ncpu: 86049.27500614473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 169470.40135558663,
            "unit": "ns/iter",
            "extra": "iterations: 4131\ncpu: 169464.36698135984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 691881.5198412221,
            "unit": "ns/iter",
            "extra": "iterations: 1008\ncpu: 691862.2023809417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 587718.6686241821,
            "unit": "ns/iter",
            "extra": "iterations: 1192\ncpu: 587695.0503355776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 578745.5032948847,
            "unit": "ns/iter",
            "extra": "iterations: 1214\ncpu: 578728.5831960397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 579421.3110560816,
            "unit": "ns/iter",
            "extra": "iterations: 1212\ncpu: 579390.9240924007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 380662.5510869164,
            "unit": "ns/iter",
            "extra": "iterations: 1840\ncpu: 380650.5434782583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 566488.0481239761,
            "unit": "ns/iter",
            "extra": "iterations: 1226\ncpu: 566470.3915171272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 22636.38014708011,
            "unit": "ns/iter",
            "extra": "iterations: 30867\ncpu: 22636.022289175995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 109647.96163643792,
            "unit": "ns/iter",
            "extra": "iterations: 6282\ncpu: 109646.06813116897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 87381.27433848653,
            "unit": "ns/iter",
            "extra": "iterations: 8012\ncpu: 87377.43384922636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 85695.96799803534,
            "unit": "ns/iter",
            "extra": "iterations: 8187\ncpu: 85692.24380114819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 87314.93352420154,
            "unit": "ns/iter",
            "extra": "iterations: 8033\ncpu: 87311.70173036284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 166000.06324016087,
            "unit": "ns/iter",
            "extra": "iterations: 4222\ncpu: 165994.9549976342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 695598.3489064632,
            "unit": "ns/iter",
            "extra": "iterations: 1006\ncpu: 695591.8489065504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 584376.8326394714,
            "unit": "ns/iter",
            "extra": "iterations: 1201\ncpu: 584341.7985012535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 577294.7013092964,
            "unit": "ns/iter",
            "extra": "iterations: 1222\ncpu: 577273.4860883798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 575952.8654634539,
            "unit": "ns/iter",
            "extra": "iterations: 1219\ncpu: 575928.0557834252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 379832.3595444237,
            "unit": "ns/iter",
            "extra": "iterations: 1844\ncpu: 379823.8611713603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 567548.37094152,
            "unit": "ns/iter",
            "extra": "iterations: 1232\ncpu: 567528.7337662401 ns\nthreads: 1"
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
        "date": 1705952880138,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8601.852239652619,
            "unit": "ns/iter",
            "extra": "iterations: 81084\ncpu: 8601.375117162448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 75961.5033539066,
            "unit": "ns/iter",
            "extra": "iterations: 11181\ncpu: 75960.96055808963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 144699.1372386229,
            "unit": "ns/iter",
            "extra": "iterations: 6026\ncpu: 144699.75107865917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 213371.48711656616,
            "unit": "ns/iter",
            "extra": "iterations: 4075\ncpu: 213373.03067484664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 282883.83425956697,
            "unit": "ns/iter",
            "extra": "iterations: 3059\ncpu: 282875.05720823805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 347642.4638091724,
            "unit": "ns/iter",
            "extra": "iterations: 2473\ncpu: 347640.8006469877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 416430.4637058338,
            "unit": "ns/iter",
            "extra": "iterations: 2094\ncpu: 416421.1079274117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 483468.78055554046,
            "unit": "ns/iter",
            "extra": "iterations: 1800\ncpu: 483461.22222222225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 550853.5858585803,
            "unit": "ns/iter",
            "extra": "iterations: 1584\ncpu: 550852.4621212112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6480.999225069994,
            "unit": "ns/iter",
            "extra": "iterations: 108397\ncpu: 6480.990248807629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5479.982595197155,
            "unit": "ns/iter",
            "extra": "iterations: 127551\ncpu: 5479.731244757005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5472.0007593129485,
            "unit": "ns/iter",
            "extra": "iterations: 127747\ncpu: 5472.051007068652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5505.647784897233,
            "unit": "ns/iter",
            "extra": "iterations: 127195\ncpu: 5505.519084869695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9681.656572522876,
            "unit": "ns/iter",
            "extra": "iterations: 72088\ncpu: 9681.752857618483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 37665.6751006608,
            "unit": "ns/iter",
            "extra": "iterations: 21856\ncpu: 37664.98444363102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 145632.47136489942,
            "unit": "ns/iter",
            "extra": "iterations: 5832\ncpu: 145631.99588477382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 120223.41304653623,
            "unit": "ns/iter",
            "extra": "iterations: 7113\ncpu: 120219.78068325637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 114960.06904410032,
            "unit": "ns/iter",
            "extra": "iterations: 7459\ncpu: 114961.0537605579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 116803.4703482126,
            "unit": "ns/iter",
            "extra": "iterations: 7352\ncpu: 116802.46191512512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 294921.8619632019,
            "unit": "ns/iter",
            "extra": "iterations: 2934\ncpu: 294919.5978186787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2238145.958837719,
            "unit": "ns/iter",
            "extra": "iterations: 413\ncpu: 2238078.934624699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1849193.4023902658,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1849192.629482076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1839679.7029702223,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1839652.0792079172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1861228.62000002,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1861243.800000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1115457.9049338321,
            "unit": "ns/iter",
            "extra": "iterations: 831\ncpu: 1115413.718411552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1798573.100580352,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1798587.6208897529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7527629.339999748,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7527442.999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4287342.146788896,
            "unit": "ns/iter",
            "extra": "iterations: 218\ncpu: 4287341.284403667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9264332.05982907,
            "unit": "ns/iter",
            "extra": "iterations: 117\ncpu: 9263898.29059827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 36299.20148826848,
            "unit": "ns/iter",
            "extra": "iterations: 22711\ncpu: 36299.13257892651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 147108.59815163177,
            "unit": "ns/iter",
            "extra": "iterations: 5843\ncpu: 147106.05853157627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 117756.67802198569,
            "unit": "ns/iter",
            "extra": "iterations: 7280\ncpu: 117755.23351648389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 116466.64909411593,
            "unit": "ns/iter",
            "extra": "iterations: 7341\ncpu: 116466.353357853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 120307.64951498248,
            "unit": "ns/iter",
            "extra": "iterations: 7113\ncpu: 120306.72008997652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 301499.4183780084,
            "unit": "ns/iter",
            "extra": "iterations: 2873\ncpu: 301496.4845109639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2264373.7853658004,
            "unit": "ns/iter",
            "extra": "iterations: 410\ncpu: 2264275.8536585425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1871833.6767069176,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1871801.6064257007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1851115.7773359693,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1851108.1510934432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1876719.1010102127,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1876699.7979797984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1120980.8065295203,
            "unit": "ns/iter",
            "extra": "iterations: 827\ncpu: 1120940.8706166928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1808950.6964980087,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1808920.2334630399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7568802.2499991795,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7568574.000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4178103.0669640577,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4178012.9464285793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 35079.07486631154,
            "unit": "ns/iter",
            "extra": "iterations: 23562\ncpu: 35078.14277226037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 144488.1718276611,
            "unit": "ns/iter",
            "extra": "iterations: 5942\ncpu: 144486.03163917887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 116347.1619861612,
            "unit": "ns/iter",
            "extra": "iterations: 7371\ncpu: 116344.48514448506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 113755.86617941131,
            "unit": "ns/iter",
            "extra": "iterations: 7525\ncpu: 113752.14617940142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 116614.99753492455,
            "unit": "ns/iter",
            "extra": "iterations: 7302\ncpu: 116612.48972884184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 298616.7511234121,
            "unit": "ns/iter",
            "extra": "iterations: 2893\ncpu: 298611.0957483566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2252527.362530332,
            "unit": "ns/iter",
            "extra": "iterations: 411\ncpu: 2252499.026763985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1872631.8128772718,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1872623.7424547337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1851050.2514852243,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1850988.1188118744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1872168.088353358,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1872165.2610441723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1109354.1610979051,
            "unit": "ns/iter",
            "extra": "iterations: 838\ncpu: 1109315.8711217195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1800422.4777563373,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1800363.829787236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3363.3907084118396,
            "unit": "ns/iter",
            "extra": "iterations: 207930\ncpu: 3363.3496849901426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16959.3979066488,
            "unit": "ns/iter",
            "extra": "iterations: 41178\ncpu: 16959.526931856843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13122.222272200499,
            "unit": "ns/iter",
            "extra": "iterations: 53358\ncpu: 13122.077289253637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12801.510894022256,
            "unit": "ns/iter",
            "extra": "iterations: 54663\ncpu: 12801.461683405598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10963.714039810764,
            "unit": "ns/iter",
            "extra": "iterations: 63904\ncpu: 10963.434213820643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 70317.88634077375,
            "unit": "ns/iter",
            "extra": "iterations: 9942\ncpu: 70315.76141621415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 149701.90986756608,
            "unit": "ns/iter",
            "extra": "iterations: 4682\ncpu: 149698.93208030728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 38824.46404394327,
            "unit": "ns/iter",
            "extra": "iterations: 18022\ncpu: 38823.92631228538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 38836.20329945167,
            "unit": "ns/iter",
            "extra": "iterations: 18003\ncpu: 38834.333166694414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 38778.51152609455,
            "unit": "ns/iter",
            "extra": "iterations: 18046\ncpu: 38778.81524991632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 75996.56457043115,
            "unit": "ns/iter",
            "extra": "iterations: 9207\ncpu: 75993.75475181932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 69603.45598328904,
            "unit": "ns/iter",
            "extra": "iterations: 10053\ncpu: 69600.80572963216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20955.512235350277,
            "unit": "ns/iter",
            "extra": "iterations: 33346\ncpu: 20953.925508307057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 99971.8529663477,
            "unit": "ns/iter",
            "extra": "iterations: 7012\ncpu: 99968.59669138605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 80866.16192232726,
            "unit": "ns/iter",
            "extra": "iterations: 8677\ncpu: 80866.72813184152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 80162.1210074516,
            "unit": "ns/iter",
            "extra": "iterations: 8735\ncpu: 80158.44304521958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 80396.84635776568,
            "unit": "ns/iter",
            "extra": "iterations: 8676\ncpu: 80393.92577224522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 155065.23697625773,
            "unit": "ns/iter",
            "extra": "iterations: 4511\ncpu: 155055.3979162031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 636600.1255686705,
            "unit": "ns/iter",
            "extra": "iterations: 1099\ncpu: 636575.7961783392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 540191.3602771183,
            "unit": "ns/iter",
            "extra": "iterations: 1299\ncpu: 540195.3810623505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 538382.9654377882,
            "unit": "ns/iter",
            "extra": "iterations: 1302\ncpu: 538363.7480798782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 537408.0306278385,
            "unit": "ns/iter",
            "extra": "iterations: 1306\ncpu: 537388.667687593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 354904.59746839246,
            "unit": "ns/iter",
            "extra": "iterations: 1975\ncpu: 354882.83544303826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 526057.9864965763,
            "unit": "ns/iter",
            "extra": "iterations: 1333\ncpu: 526039.8349587464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21356.101451498733,
            "unit": "ns/iter",
            "extra": "iterations: 32587\ncpu: 21355.295056310682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 102109.77133304141,
            "unit": "ns/iter",
            "extra": "iterations: 6879\ncpu: 102110.55385957369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 82313.60875191304,
            "unit": "ns/iter",
            "extra": "iterations: 8501\ncpu: 82312.35148805968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 80803.28271518486,
            "unit": "ns/iter",
            "extra": "iterations: 8574\ncpu: 80798.23886167543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 81494.73695855532,
            "unit": "ns/iter",
            "extra": "iterations: 8588\ncpu: 81490.47508150873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 153843.8127053899,
            "unit": "ns/iter",
            "extra": "iterations: 4565\ncpu: 153838.33515881567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 640748.7622951465,
            "unit": "ns/iter",
            "extra": "iterations: 1098\ncpu: 640745.3551912562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 539562.4573405277,
            "unit": "ns/iter",
            "extra": "iterations: 1301\ncpu: 539531.2067640264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 533742.1681887597,
            "unit": "ns/iter",
            "extra": "iterations: 1314\ncpu: 533704.9467275507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 536936.47226502,
            "unit": "ns/iter",
            "extra": "iterations: 1298\ncpu: 536899.2295839754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 355357.2713414494,
            "unit": "ns/iter",
            "extra": "iterations: 1968\ncpu: 355342.58130081475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 525742.5060060322,
            "unit": "ns/iter",
            "extra": "iterations: 1332\ncpu: 525713.7387387372 ns\nthreads: 1"
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
        "date": 1705954303121,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8930.043543198046,
            "unit": "ns/iter",
            "extra": "iterations: 78336\ncpu: 8929.248366013071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 79723.62698040319,
            "unit": "ns/iter",
            "extra": "iterations: 10667\ncpu: 79647.5203899878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 151732.73579347713,
            "unit": "ns/iter",
            "extra": "iterations: 5772\ncpu: 151723.26749826747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 223379.36746215017,
            "unit": "ns/iter",
            "extra": "iterations: 3897\ncpu: 223363.6643571978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 296133.08285029215,
            "unit": "ns/iter",
            "extra": "iterations: 2933\ncpu: 296112.58097511093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 363772.39130438265,
            "unit": "ns/iter",
            "extra": "iterations: 2369\ncpu: 363749.5567750104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 436877.92917706043,
            "unit": "ns/iter",
            "extra": "iterations: 2005\ncpu: 436861.34663341637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 504865.6358884829,
            "unit": "ns/iter",
            "extra": "iterations: 1722\ncpu: 504831.707317073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 575679.8806365667,
            "unit": "ns/iter",
            "extra": "iterations: 1508\ncpu: 575655.2387267913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6654.790338484975,
            "unit": "ns/iter",
            "extra": "iterations: 105470\ncpu: 6654.201194652501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5714.541024174958,
            "unit": "ns/iter",
            "extra": "iterations: 122440\ncpu: 5714.431558314284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5664.765651444874,
            "unit": "ns/iter",
            "extra": "iterations: 123487\ncpu: 5664.026982597359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5614.962760891665,
            "unit": "ns/iter",
            "extra": "iterations: 123902\ncpu: 5614.466271730887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9936.940043981043,
            "unit": "ns/iter",
            "extra": "iterations: 70485\ncpu: 9936.033198552881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 36318.30877161639,
            "unit": "ns/iter",
            "extra": "iterations: 22664\ncpu: 36315.85333568658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 144969.39803355996,
            "unit": "ns/iter",
            "extra": "iterations: 5899\ncpu: 144957.50127140206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 117655.33989537119,
            "unit": "ns/iter",
            "extra": "iterations: 7264\ncpu: 117648.41685022032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 113644.9765489767,
            "unit": "ns/iter",
            "extra": "iterations: 7505\ncpu: 113637.20186542298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 115598.4010854752,
            "unit": "ns/iter",
            "extra": "iterations: 7370\ncpu: 115590.74626865702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 279530.15406790946,
            "unit": "ns/iter",
            "extra": "iterations: 3122\ncpu: 279508.29596412607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2318845.5989975184,
            "unit": "ns/iter",
            "extra": "iterations: 399\ncpu: 2318674.937343357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1938512.464730272,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1938377.5933609924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1904907.3388089372,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1904785.0102669417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1947717.4166664688,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1947504.1666666619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1151408.8983891492,
            "unit": "ns/iter",
            "extra": "iterations: 807\ncpu: 1151333.828996284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1862334.8336674182,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1862190.380761523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7762061.785713773,
            "unit": "ns/iter",
            "extra": "iterations: 140\ncpu: 7761648.57142856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4301827.201834698,
            "unit": "ns/iter",
            "extra": "iterations: 218\ncpu: 4301546.330275227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9612167.946427925,
            "unit": "ns/iter",
            "extra": "iterations: 112\ncpu: 9611500.000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 35736.144768753154,
            "unit": "ns/iter",
            "extra": "iterations: 23092\ncpu: 35733.50077949081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 143557.7195286212,
            "unit": "ns/iter",
            "extra": "iterations: 5940\ncpu: 143546.0269360277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 118294.2012726396,
            "unit": "ns/iter",
            "extra": "iterations: 7229\ncpu: 118286.31899294464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 117071.72182713861,
            "unit": "ns/iter",
            "extra": "iterations: 7312\ncpu: 117063.75820568949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 117887.335042264,
            "unit": "ns/iter",
            "extra": "iterations: 7217\ncpu: 117878.96632949972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 282956.20853700367,
            "unit": "ns/iter",
            "extra": "iterations: 3069\ncpu: 282925.28510915587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2337725.9999998896,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 2337548.6146095684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1984586.2123895485,
            "unit": "ns/iter",
            "extra": "iterations: 452\ncpu: 1984419.911504431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1917535.0103303813,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1917396.2809917382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1943709.4250001507,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1943548.9583333372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1149199.490074492,
            "unit": "ns/iter",
            "extra": "iterations: 806\ncpu: 1149116.377171217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1870254.0040160248,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1870122.4899598332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7902808.352518111,
            "unit": "ns/iter",
            "extra": "iterations: 139\ncpu: 7902118.705035954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4352626.289719452,
            "unit": "ns/iter",
            "extra": "iterations: 214\ncpu: 4352337.3831775645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 34495.654936381514,
            "unit": "ns/iter",
            "extra": "iterations: 23813\ncpu: 34492.32772015266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 141040.1237232325,
            "unit": "ns/iter",
            "extra": "iterations: 6070\ncpu: 141028.66556836857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 116000.9024125777,
            "unit": "ns/iter",
            "extra": "iterations: 7378\ncpu: 115992.30143670451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 112937.51507570989,
            "unit": "ns/iter",
            "extra": "iterations: 7595\ncpu: 112929.70375246872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 113626.85074428834,
            "unit": "ns/iter",
            "extra": "iterations: 7524\ncpu: 113617.2780435942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 278902.2685512237,
            "unit": "ns/iter",
            "extra": "iterations: 3113\ncpu: 278879.82653388963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2306966.621890593,
            "unit": "ns/iter",
            "extra": "iterations: 402\ncpu: 2306756.4676616886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1940269.5636742914,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1940127.9749478037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1904723.7530611136,
            "unit": "ns/iter",
            "extra": "iterations: 490\ncpu: 1904657.95918368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1940209.4488516434,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1940149.8956158662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1138811.0919118528,
            "unit": "ns/iter",
            "extra": "iterations: 816\ncpu: 1138726.9607843154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1859910.6140000003,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1859854.999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3399.556891126815,
            "unit": "ns/iter",
            "extra": "iterations: 205322\ncpu: 3399.286973631668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17238.33691773976,
            "unit": "ns/iter",
            "extra": "iterations: 40639\ncpu: 17238.197298161973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13654.065331928625,
            "unit": "ns/iter",
            "extra": "iterations: 51246\ncpu: 13653.604183741147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 14211.037933004713,
            "unit": "ns/iter",
            "extra": "iterations: 50721\ncpu: 14182.865085467589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11172.282559825082,
            "unit": "ns/iter",
            "extra": "iterations: 62723\ncpu: 11171.645170033216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 66048.14931145568,
            "unit": "ns/iter",
            "extra": "iterations: 10602\ncpu: 66045.44425580082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 154174.60368663663,
            "unit": "ns/iter",
            "extra": "iterations: 4557\ncpu: 154173.3596664471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 40359.18462689524,
            "unit": "ns/iter",
            "extra": "iterations: 17381\ncpu: 40357.78723893927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 40221.48832112732,
            "unit": "ns/iter",
            "extra": "iterations: 17339\ncpu: 40219.118749639674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 40068.50696522549,
            "unit": "ns/iter",
            "extra": "iterations: 17372\ncpu: 40067.08496430972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 81627.77275375935,
            "unit": "ns/iter",
            "extra": "iterations: 8581\ncpu: 81625.24181330795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 64943.45951718079,
            "unit": "ns/iter",
            "extra": "iterations: 10770\ncpu: 64936.1652739083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21943.383983252734,
            "unit": "ns/iter",
            "extra": "iterations: 32004\ncpu: 21942.916510436233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 104881.94397968405,
            "unit": "ns/iter",
            "extra": "iterations: 6694\ncpu: 104876.85987451652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 85769.2298934993,
            "unit": "ns/iter",
            "extra": "iterations: 8169\ncpu: 85767.33994368794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 83956.24633820361,
            "unit": "ns/iter",
            "extra": "iterations: 8261\ncpu: 83950.57499092021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 85986.23424304696,
            "unit": "ns/iter",
            "extra": "iterations: 8171\ncpu: 85982.45012850415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 158652.03976500875,
            "unit": "ns/iter",
            "extra": "iterations: 4426\ncpu: 158638.68052417444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 669571.5224881035,
            "unit": "ns/iter",
            "extra": "iterations: 1045\ncpu: 669536.3636363586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 572382.416052398,
            "unit": "ns/iter",
            "extra": "iterations: 1221\ncpu: 572337.9197379154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 567417.3016129294,
            "unit": "ns/iter",
            "extra": "iterations: 1240\ncpu: 567357.5000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 570780.3051261925,
            "unit": "ns/iter",
            "extra": "iterations: 1229\ncpu: 570759.2351505272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 371206.3637327979,
            "unit": "ns/iter",
            "extra": "iterations: 1886\ncpu: 371179.5864263025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 556101.3462757366,
            "unit": "ns/iter",
            "extra": "iterations: 1262\ncpu: 556043.5023771768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 22174.02687662081,
            "unit": "ns/iter",
            "extra": "iterations: 31626\ncpu: 22172.23487004373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 106624.50944545925,
            "unit": "ns/iter",
            "extra": "iterations: 6564\ncpu: 106621.1456429008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 85984.73033431203,
            "unit": "ns/iter",
            "extra": "iterations: 8136\ncpu: 85978.55211406133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 84063.13753305792,
            "unit": "ns/iter",
            "extra": "iterations: 8318\ncpu: 84054.00336619453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 86117.69165435781,
            "unit": "ns/iter",
            "extra": "iterations: 8124\ncpu: 86110.74593796144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 158596.82423555545,
            "unit": "ns/iter",
            "extra": "iterations: 4415\ncpu: 158588.65232163272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 671018.9846449574,
            "unit": "ns/iter",
            "extra": "iterations: 1042\ncpu: 670986.1804222607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 570813.5798045633,
            "unit": "ns/iter",
            "extra": "iterations: 1228\ncpu: 570801.7100977245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 565412.1298387017,
            "unit": "ns/iter",
            "extra": "iterations: 1240\ncpu: 565392.0161290304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 568947.5235389604,
            "unit": "ns/iter",
            "extra": "iterations: 1232\ncpu: 568928.4902597422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 371988.2679425937,
            "unit": "ns/iter",
            "extra": "iterations: 1881\ncpu: 371982.5093035639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 554280.4584322846,
            "unit": "ns/iter",
            "extra": "iterations: 1263\ncpu: 554254.0775930271 ns\nthreads: 1"
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
        "date": 1705956125190,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8822.736372583591,
            "unit": "ns/iter",
            "extra": "iterations: 79252\ncpu: 8822.736334729723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 79317.74572150524,
            "unit": "ns/iter",
            "extra": "iterations: 10693\ncpu: 79311.86757691948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 151380.91264327758,
            "unit": "ns/iter",
            "extra": "iterations: 5758\ncpu: 151373.21986800974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 232927.0666324979,
            "unit": "ns/iter",
            "extra": "iterations: 3902\ncpu: 232906.89390056388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 295872.06507667626,
            "unit": "ns/iter",
            "extra": "iterations: 2935\ncpu: 295852.70868824533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 363978.9898175764,
            "unit": "ns/iter",
            "extra": "iterations: 2357\ncpu: 363959.0581247347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 434501.71664171136,
            "unit": "ns/iter",
            "extra": "iterations: 2001\ncpu: 434473.363318341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 504744.33932712284,
            "unit": "ns/iter",
            "extra": "iterations: 1724\ncpu: 504703.8863109048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 574530.1413473986,
            "unit": "ns/iter",
            "extra": "iterations: 1514\ncpu: 574522.6552179662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6728.381510216564,
            "unit": "ns/iter",
            "extra": "iterations: 104144\ncpu: 6728.197495775078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5699.246039895102,
            "unit": "ns/iter",
            "extra": "iterations: 122724\ncpu: 5698.867377204135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5687.4132897713325,
            "unit": "ns/iter",
            "extra": "iterations: 123042\ncpu: 5686.998748394859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5662.447010003304,
            "unit": "ns/iter",
            "extra": "iterations: 123863\ncpu: 5661.957162348723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9803.95342816544,
            "unit": "ns/iter",
            "extra": "iterations: 71073\ncpu: 9803.960716446456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 37034.17695732706,
            "unit": "ns/iter",
            "extra": "iterations: 22237\ncpu: 37031.86131222733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 147862.0729346634,
            "unit": "ns/iter",
            "extra": "iterations: 5786\ncpu: 147859.62668510183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 118415.20566090052,
            "unit": "ns/iter",
            "extra": "iterations: 7172\ncpu: 118413.67819297258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 113336.45690452908,
            "unit": "ns/iter",
            "extra": "iterations: 7553\ncpu: 113334.39692837321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 116000.68684817596,
            "unit": "ns/iter",
            "extra": "iterations: 7383\ncpu: 115996.83055668444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 297566.4456224147,
            "unit": "ns/iter",
            "extra": "iterations: 2924\ncpu: 297559.64432284556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2342089.2367758416,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 2341903.022670024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1915084.331275655,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1914983.3333333328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1916564.5484535976,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1916491.5463917525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1929607.7929608223,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1929587.577639747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1157252.2134831396,
            "unit": "ns/iter",
            "extra": "iterations: 801\ncpu: 1157192.759051188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1864088.941883774,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1864029.458917833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7750072.201438736,
            "unit": "ns/iter",
            "extra": "iterations: 139\ncpu: 7749805.755395683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4415092.824645019,
            "unit": "ns/iter",
            "extra": "iterations: 211\ncpu: 4414918.483412308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9583819.247788507,
            "unit": "ns/iter",
            "extra": "iterations: 113\ncpu: 9583611.504424775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 35582.63927751381,
            "unit": "ns/iter",
            "extra": "iterations: 23087\ncpu: 35581.12790748032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 145098.83381233737,
            "unit": "ns/iter",
            "extra": "iterations: 5915\ncpu: 145097.4302620449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 118592.54876697695,
            "unit": "ns/iter",
            "extra": "iterations: 7218\ncpu: 118589.08284843423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 115723.02489177382,
            "unit": "ns/iter",
            "extra": "iterations: 7392\ncpu: 115723.21428571446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 118362.21039432012,
            "unit": "ns/iter",
            "extra": "iterations: 7177\ncpu: 118357.30806743696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 300173.1521890071,
            "unit": "ns/iter",
            "extra": "iterations: 2878\ncpu: 300169.80542043224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2364191.3984772195,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2364105.07614213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1945135.0852391338,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1945077.546777547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1936992.0519749331,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1936918.5031184957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1939353.0520834664,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1939330.833333323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1157968.285000095,
            "unit": "ns/iter",
            "extra": "iterations: 800\ncpu: 1157913.500000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1879406.7681450737,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1879371.975806458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7822172.014492526,
            "unit": "ns/iter",
            "extra": "iterations: 138\ncpu: 7821868.115942041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4515883.521738885,
            "unit": "ns/iter",
            "extra": "iterations: 207\ncpu: 4515670.531400965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 34900.397408301236,
            "unit": "ns/iter",
            "extra": "iterations: 23691\ncpu: 34899.90713773173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 144111.54291989648,
            "unit": "ns/iter",
            "extra": "iterations: 5918\ncpu: 144105.1537681647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 117138.61072165202,
            "unit": "ns/iter",
            "extra": "iterations: 7275\ncpu: 117133.41580756014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 112214.72703272478,
            "unit": "ns/iter",
            "extra": "iterations: 7576\ncpu: 112209.16050686385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 114220.81390978114,
            "unit": "ns/iter",
            "extra": "iterations: 7448\ncpu: 114220.78410311535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 295712.07831740077,
            "unit": "ns/iter",
            "extra": "iterations: 2924\ncpu: 295701.6757865926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2360151.444162313,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2360131.4720812184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1934611.7763975326,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1934533.1262939929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1933923.5456431373,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1933891.701244808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1936130.793749887,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1936072.7083333214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1162844.3146067543,
            "unit": "ns/iter",
            "extra": "iterations: 801\ncpu: 1162831.7103620465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1877482.5403224877,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1877414.11290323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3400.142668248168,
            "unit": "ns/iter",
            "extra": "iterations: 205708\ncpu: 3400.075835650537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17357.281635285537,
            "unit": "ns/iter",
            "extra": "iterations: 40311\ncpu: 17356.746297536658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12506.337957013426,
            "unit": "ns/iter",
            "extra": "iterations: 56016\ncpu: 12506.158954584373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12945.294182928403,
            "unit": "ns/iter",
            "extra": "iterations: 54065\ncpu: 12944.760935910435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11175.167343089854,
            "unit": "ns/iter",
            "extra": "iterations: 62584\ncpu: 11174.931292343135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 68929.32996269428,
            "unit": "ns/iter",
            "extra": "iterations: 10186\ncpu: 68925.89829177302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 156072.81159741816,
            "unit": "ns/iter",
            "extra": "iterations: 4501\ncpu: 156072.65052210639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 39782.5536273135,
            "unit": "ns/iter",
            "extra": "iterations: 17575\ncpu: 39780.95590327166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 39989.18337338414,
            "unit": "ns/iter",
            "extra": "iterations: 17478\ncpu: 39989.19212724544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 39778.07763851713,
            "unit": "ns/iter",
            "extra": "iterations: 17633\ncpu: 39776.589349514725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 81220.37511606343,
            "unit": "ns/iter",
            "extra": "iterations: 8616\ncpu: 81219.2200557107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 71887.93052414893,
            "unit": "ns/iter",
            "extra": "iterations: 9730\ncpu: 71886.97841726601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21771.540322578738,
            "unit": "ns/iter",
            "extra": "iterations: 32116\ncpu: 21771.528210237964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 105043.96717625886,
            "unit": "ns/iter",
            "extra": "iterations: 6672\ncpu: 105041.57673860874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 83732.17755783742,
            "unit": "ns/iter",
            "extra": "iterations: 8386\ncpu: 83729.14381111268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 83451.18793945515,
            "unit": "ns/iter",
            "extra": "iterations: 8391\ncpu: 83451.07853652709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 84671.42508751887,
            "unit": "ns/iter",
            "extra": "iterations: 8283\ncpu: 84669.22612579938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 159405.98858967022,
            "unit": "ns/iter",
            "extra": "iterations: 4382\ncpu: 159405.7964399818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 670284.4003831801,
            "unit": "ns/iter",
            "extra": "iterations: 1044\ncpu: 670269.9233716383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 570347.4639091778,
            "unit": "ns/iter",
            "extra": "iterations: 1233\ncpu: 570325.5474452445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 560638.9799839976,
            "unit": "ns/iter",
            "extra": "iterations: 1249\ncpu: 560638.3506805426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 561297.5040584353,
            "unit": "ns/iter",
            "extra": "iterations: 1232\ncpu: 561277.029220783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 367031.9392351575,
            "unit": "ns/iter",
            "extra": "iterations: 1909\ncpu: 367026.03457307816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 550891.7743711363,
            "unit": "ns/iter",
            "extra": "iterations: 1272\ncpu: 550879.323899366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21970.879033019097,
            "unit": "ns/iter",
            "extra": "iterations: 31893\ncpu: 21970.85253817422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 103266.01046579926,
            "unit": "ns/iter",
            "extra": "iterations: 6784\ncpu: 103264.15094339527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 84151.76855632811,
            "unit": "ns/iter",
            "extra": "iterations: 8326\ncpu: 84149.08719673297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 84157.76828828316,
            "unit": "ns/iter",
            "extra": "iterations: 8325\ncpu: 84157.72972972952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 84890.461650842,
            "unit": "ns/iter",
            "extra": "iterations: 8214\ncpu: 84885.78037497001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 158634.8558803689,
            "unit": "ns/iter",
            "extra": "iterations: 4413\ncpu: 158634.670292319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 671562.1492822246,
            "unit": "ns/iter",
            "extra": "iterations: 1045\ncpu: 671544.2105263164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 570334.6878565849,
            "unit": "ns/iter",
            "extra": "iterations: 1227\ncpu: 570307.3349633273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 562523.1456155101,
            "unit": "ns/iter",
            "extra": "iterations: 1243\ncpu: 562522.7674979925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 561695.467041728,
            "unit": "ns/iter",
            "extra": "iterations: 1244\ncpu: 561675.9646302267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 368521.79926044523,
            "unit": "ns/iter",
            "extra": "iterations: 1893\ncpu: 368514.4743792874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 550661.57592443,
            "unit": "ns/iter",
            "extra": "iterations: 1271\ncpu: 550654.4453186467 ns\nthreads: 1"
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
        "date": 1705957715347,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8406.428914044498,
            "unit": "ns/iter",
            "extra": "iterations: 83392\ncpu: 8406.217622793552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 75846.77435485239,
            "unit": "ns/iter",
            "extra": "iterations: 11199\ncpu: 75843.79855344228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 146186.05965203853,
            "unit": "ns/iter",
            "extra": "iterations: 6035\ncpu: 146183.36371168183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 211930.79276637308,
            "unit": "ns/iter",
            "extra": "iterations: 4092\ncpu: 211913.4164222874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 291134.4912564676,
            "unit": "ns/iter",
            "extra": "iterations: 3088\ncpu: 290462.20854922273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 352487.00323366525,
            "unit": "ns/iter",
            "extra": "iterations: 2474\ncpu: 352455.8609539206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 417349.4744208138,
            "unit": "ns/iter",
            "extra": "iterations: 2072\ncpu: 417328.7162162163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 483249.0177679033,
            "unit": "ns/iter",
            "extra": "iterations: 1801\ncpu: 483213.3814547474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 550731.6637111509,
            "unit": "ns/iter",
            "extra": "iterations: 1579\ncpu: 550719.3793540219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6480.554985486309,
            "unit": "ns/iter",
            "extra": "iterations: 108174\ncpu: 6480.371438608167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5523.143797184337,
            "unit": "ns/iter",
            "extra": "iterations: 126894\ncpu: 5522.873421911199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5535.45019476415,
            "unit": "ns/iter",
            "extra": "iterations: 126563\ncpu: 5535.114527942601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5492.651360277026,
            "unit": "ns/iter",
            "extra": "iterations: 127180\ncpu: 5492.373014624943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9602.29168029565,
            "unit": "ns/iter",
            "extra": "iterations: 73368\ncpu: 9601.696925089953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 38001.482308009414,
            "unit": "ns/iter",
            "extra": "iterations: 21733\ncpu: 37998.996917130666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 150957.72097938467,
            "unit": "ns/iter",
            "extra": "iterations: 5677\ncpu: 150951.6998414656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 121487.78073043234,
            "unit": "ns/iter",
            "extra": "iterations: 7037\ncpu: 121487.06835299134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 116905.87628160314,
            "unit": "ns/iter",
            "extra": "iterations: 7315\ncpu: 116903.15789473652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 120303.3800140857,
            "unit": "ns/iter",
            "extra": "iterations: 7105\ncpu: 120301.61857846576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 305469.4415266049,
            "unit": "ns/iter",
            "extra": "iterations: 2856\ncpu: 305451.64565826295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2240097.159420417,
            "unit": "ns/iter",
            "extra": "iterations: 414\ncpu: 2239990.821256035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1845403.4331338455,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1845302.994011976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1859736.3160001806,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1859631.3999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1858891.674000006,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1858781.7999999956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1140249.4703703762,
            "unit": "ns/iter",
            "extra": "iterations: 810\ncpu: 1140155.185185184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1800658.1718750247,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1800536.7187500023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7651546.299999837,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7650837.999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4421465.236966374,
            "unit": "ns/iter",
            "extra": "iterations: 211\ncpu: 4421284.834123218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9347263.408696325,
            "unit": "ns/iter",
            "extra": "iterations: 115\ncpu: 9347007.826086964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 36542.261891863796,
            "unit": "ns/iter",
            "extra": "iterations: 22158\ncpu: 36541.790775340865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 148270.5530591051,
            "unit": "ns/iter",
            "extra": "iterations: 5786\ncpu: 148267.49049429677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 121479.66850828641,
            "unit": "ns/iter",
            "extra": "iterations: 7059\ncpu: 121473.97648392098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 119141.10304547257,
            "unit": "ns/iter",
            "extra": "iterations: 7191\ncpu: 119131.80364344353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 123569.16024253698,
            "unit": "ns/iter",
            "extra": "iterations: 6927\ncpu: 123563.36076223396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 313029.1470694316,
            "unit": "ns/iter",
            "extra": "iterations: 2781\ncpu: 313020.3883495144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2264270.2176039685,
            "unit": "ns/iter",
            "extra": "iterations: 409\ncpu: 2264163.3251833855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1862248.147999935,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1862125.2000000083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1871896.370221339,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1871813.078470821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1874864.8548387154,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1874769.758064518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1135120.6100244427,
            "unit": "ns/iter",
            "extra": "iterations: 818\ncpu: 1135058.3129584375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1808487.6062378676,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1808385.185185183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7673201.750000252,
            "unit": "ns/iter",
            "extra": "iterations: 140\ncpu: 7672734.285714304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4336181.553488258,
            "unit": "ns/iter",
            "extra": "iterations: 215\ncpu: 4335907.906976727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 35648.48664483883,
            "unit": "ns/iter",
            "extra": "iterations: 23212\ncpu: 35647.01016715485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 150235.897787135,
            "unit": "ns/iter",
            "extra": "iterations: 5694\ncpu: 150232.77133824982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 121762.35558698088,
            "unit": "ns/iter",
            "extra": "iterations: 7070\ncpu: 121758.27439886909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 117013.42444080758,
            "unit": "ns/iter",
            "extra": "iterations: 7332\ncpu: 117006.21931260229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 114777.19347943047,
            "unit": "ns/iter",
            "extra": "iterations: 7484\ncpu: 114770.28327097798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 303053.3124999918,
            "unit": "ns/iter",
            "extra": "iterations: 2864\ncpu: 303048.95251396595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2248934.452784667,
            "unit": "ns/iter",
            "extra": "iterations: 413\ncpu: 2248809.685230023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1870715.7414141737,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1870637.373737367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1863843.3293172037,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1863731.5261044186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1871412.026051992,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1871370.1402805648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1135813.7999998992,
            "unit": "ns/iter",
            "extra": "iterations: 825\ncpu: 1135776.6060606015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1811048.0721247103,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1811039.9610136414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3401.5216072412964,
            "unit": "ns/iter",
            "extra": "iterations: 205047\ncpu: 3401.392851395043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17029.94977900859,
            "unit": "ns/iter",
            "extra": "iterations: 41178\ncpu: 17029.880033027304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12901.74985223527,
            "unit": "ns/iter",
            "extra": "iterations: 54140\ncpu: 12901.206132249617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13510.441378378398,
            "unit": "ns/iter",
            "extra": "iterations: 51713\ncpu: 13510.376501073231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10934.136063017419,
            "unit": "ns/iter",
            "extra": "iterations: 64110\ncpu: 10933.826236156581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 70548.36854270357,
            "unit": "ns/iter",
            "extra": "iterations: 9950\ncpu: 70546.66331658285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 148935.5613997844,
            "unit": "ns/iter",
            "extra": "iterations: 4715\ncpu: 148933.12831389197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 38897.761251796546,
            "unit": "ns/iter",
            "extra": "iterations: 18086\ncpu: 38896.61063806243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 39292.73986296966,
            "unit": "ns/iter",
            "extra": "iterations: 17806\ncpu: 39292.103785241095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 39142.83166984418,
            "unit": "ns/iter",
            "extra": "iterations: 17834\ncpu: 39142.25075698085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 80163.75858910022,
            "unit": "ns/iter",
            "extra": "iterations: 8732\ncpu: 80162.40265689368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 69944.19853750622,
            "unit": "ns/iter",
            "extra": "iterations: 9983\ncpu: 69942.00140238475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21011.480410085085,
            "unit": "ns/iter",
            "extra": "iterations: 33359\ncpu: 21009.91036901556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 100787.08152407734,
            "unit": "ns/iter",
            "extra": "iterations: 6955\ncpu: 100782.1567217821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 78868.06739423981,
            "unit": "ns/iter",
            "extra": "iterations: 8888\ncpu: 78864.3564356443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 79710.40091013076,
            "unit": "ns/iter",
            "extra": "iterations: 8790\ncpu: 79708.56655290037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 80191.52417419106,
            "unit": "ns/iter",
            "extra": "iterations: 8749\ncpu: 80185.55263458582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 159773.95582513793,
            "unit": "ns/iter",
            "extra": "iterations: 4369\ncpu: 159762.5085831982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 646641.3880184833,
            "unit": "ns/iter",
            "extra": "iterations: 1085\ncpu: 646591.981566823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 537876.7031610805,
            "unit": "ns/iter",
            "extra": "iterations: 1297\ncpu: 537832.8450269883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 539679.5072796856,
            "unit": "ns/iter",
            "extra": "iterations: 1305\ncpu: 539660.5363984662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 539851.5895061592,
            "unit": "ns/iter",
            "extra": "iterations: 1296\ncpu: 539815.9722222222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 356973.5908163053,
            "unit": "ns/iter",
            "extra": "iterations: 1960\ncpu: 356945.66326530516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 529334.5170325179,
            "unit": "ns/iter",
            "extra": "iterations: 1321\ncpu: 529283.0431491269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21543.026454698167,
            "unit": "ns/iter",
            "extra": "iterations: 32395\ncpu: 21541.395277048974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 101934.64687044636,
            "unit": "ns/iter",
            "extra": "iterations: 6870\ncpu: 101928.07860262197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 81106.32535440978,
            "unit": "ns/iter",
            "extra": "iterations: 8606\ncpu: 81106.10039507368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 80666.43798315336,
            "unit": "ns/iter",
            "extra": "iterations: 8667\ncpu: 80663.8283142958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 81665.7732042894,
            "unit": "ns/iter",
            "extra": "iterations: 8576\ncpu: 81659.08348880634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 157021.30101008856,
            "unit": "ns/iter",
            "extra": "iterations: 4455\ncpu: 157008.03591470263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 643274.3988970829,
            "unit": "ns/iter",
            "extra": "iterations: 1088\ncpu: 643223.897058816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 537700.9415385076,
            "unit": "ns/iter",
            "extra": "iterations: 1300\ncpu: 537683.9999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 535439.6804597151,
            "unit": "ns/iter",
            "extra": "iterations: 1305\ncpu: 535394.1762452156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 542147.1256746924,
            "unit": "ns/iter",
            "extra": "iterations: 1297\ncpu: 542107.6329992248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 362429.0036231895,
            "unit": "ns/iter",
            "extra": "iterations: 1932\ncpu: 362400.621118006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 526495.1772832545,
            "unit": "ns/iter",
            "extra": "iterations: 1303\ncpu: 526450.3453568747 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}