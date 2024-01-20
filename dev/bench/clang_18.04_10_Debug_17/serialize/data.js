window.BENCHMARK_DATA = {
  "lastUpdate": 1705774094507,
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
      }
    ]
  }
}