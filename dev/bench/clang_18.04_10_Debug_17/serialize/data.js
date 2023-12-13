window.BENCHMARK_DATA = {
  "lastUpdate": 1702489541499,
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
      }
    ]
  }
}