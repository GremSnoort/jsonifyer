window.BENCHMARK_DATA = {
  "lastUpdate": 1702492165139,
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
      }
    ]
  }
}