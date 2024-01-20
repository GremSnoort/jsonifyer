window.BENCHMARK_DATA = {
  "lastUpdate": 1705772712358,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-11 20.04 Debug c++-17": [
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
        "date": 1702489558931,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7679.24484578608,
            "unit": "ns/iter",
            "extra": "iterations: 90751\ncpu: 7678.357263280846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55306.989700000035,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55307.08 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 102869.93618294758,
            "unit": "ns/iter",
            "extra": "iterations: 8352\ncpu: 102867.00191570882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 151017.38211665858,
            "unit": "ns/iter",
            "extra": "iterations: 5726\ncpu: 151011.92804750262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 196779.5690909084,
            "unit": "ns/iter",
            "extra": "iterations: 4400\ncpu: 196776.11363636368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 243303.16918767823,
            "unit": "ns/iter",
            "extra": "iterations: 3570\ncpu: 243290.70028011204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 290272.5741050693,
            "unit": "ns/iter",
            "extra": "iterations: 2989\ncpu: 290261.0572097694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 336105.6065763851,
            "unit": "ns/iter",
            "extra": "iterations: 2585\ncpu: 336090.4835589942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 382568.212869147,
            "unit": "ns/iter",
            "extra": "iterations: 2269\ncpu: 382530.4539444686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6357.964488301629,
            "unit": "ns/iter",
            "extra": "iterations: 110358\ncpu: 6357.677739719821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5193.08750009213,
            "unit": "ns/iter",
            "extra": "iterations: 135337\ncpu: 5192.879256965939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5214.3832065803745,
            "unit": "ns/iter",
            "extra": "iterations: 135303\ncpu: 5201.679194105083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5149.9702390585635,
            "unit": "ns/iter",
            "extra": "iterations: 135950\ncpu: 5149.793306362622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8384.917329854507,
            "unit": "ns/iter",
            "extra": "iterations: 83561\ncpu: 8384.343174447406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 27858.026277924873,
            "unit": "ns/iter",
            "extra": "iterations: 29188\ncpu: 27857.21872002188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 141629.06832092445,
            "unit": "ns/iter",
            "extra": "iterations: 6045\ncpu: 141620.76095947073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 107741.54394567026,
            "unit": "ns/iter",
            "extra": "iterations: 7953\ncpu: 107737.84735320008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 107629.40903941356,
            "unit": "ns/iter",
            "extra": "iterations: 7943\ncpu: 107623.39166561764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 102313.34878983934,
            "unit": "ns/iter",
            "extra": "iterations: 8346\ncpu: 102309.58543014628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 224219.0480161854,
            "unit": "ns/iter",
            "extra": "iterations: 3957\ncpu: 224201.76901693243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1815340.6954813628,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1815250.098231826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1419411.9311926495,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1419281.1926605487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1416289.9801527003,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1416211.908396943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1397580.5362537594,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1397496.0725075507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 783534.3211554813,
            "unit": "ns/iter",
            "extra": "iterations: 1177\ncpu: 783496.6864910783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1379876.9180328469,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1379743.219076006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36536.05510663498,
            "unit": "ns/iter",
            "extra": "iterations: 22647\ncpu: 36534.09281582556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 176582.0867608001,
            "unit": "ns/iter",
            "extra": "iterations: 4887\ncpu: 176568.75383670963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 137369.82841822747,
            "unit": "ns/iter",
            "extra": "iterations: 6341\ncpu: 137362.35609525308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 137607.75440281973,
            "unit": "ns/iter",
            "extra": "iterations: 6246\ncpu: 137593.32372718552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 132157.1573790499,
            "unit": "ns/iter",
            "extra": "iterations: 6532\ncpu: 132151.08695652153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 257304.70847051434,
            "unit": "ns/iter",
            "extra": "iterations: 3341\ncpu: 257290.99072134023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1882955.014169881,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1882873.68421052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1451731.936137054,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1451682.8660436033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1486529.826433111,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1486442.5159235683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1468209.3059936373,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1468128.548895899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 818952.6581272024,
            "unit": "ns/iter",
            "extra": "iterations: 1132\ncpu: 818900.5300353381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1428324.4228395543,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1428211.419753094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5088248.1499991175,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5087981.999999939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3084925.3675497067,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3084586.423841063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25982.361687283123,
            "unit": "ns/iter",
            "extra": "iterations: 31530\ncpu: 25981.183000317258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 138401.53406346103,
            "unit": "ns/iter",
            "extra": "iterations: 6209\ncpu: 138393.81542921634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 110428.02537809749,
            "unit": "ns/iter",
            "extra": "iterations: 7802\ncpu: 110421.99436041979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 110307.3574286823,
            "unit": "ns/iter",
            "extra": "iterations: 7747\ncpu: 110300.82612624246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 100909.60798675977,
            "unit": "ns/iter",
            "extra": "iterations: 8464\ncpu: 100904.45415879003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 219261.36432542975,
            "unit": "ns/iter",
            "extra": "iterations: 3958\ncpu: 219246.23547246063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1851907.8489065084,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1851839.5626242452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1438184.7507692887,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1438116.923076922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1418848.3531202173,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1418776.7123287616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1412138.415781343,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1412029.1350531112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 788893.8443514169,
            "unit": "ns/iter",
            "extra": "iterations: 1195\ncpu: 788867.8661087897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1389788.5701492587,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1389765.9701492554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2924.233377958184,
            "unit": "ns/iter",
            "extra": "iterations: 238283\ncpu: 2924.162025826446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19372.89381046318,
            "unit": "ns/iter",
            "extra": "iterations: 36077\ncpu: 19372.364664467666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14203.763327093244,
            "unit": "ns/iter",
            "extra": "iterations: 49148\ncpu: 14203.758036949619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14441.218953841908,
            "unit": "ns/iter",
            "extra": "iterations: 48444\ncpu: 14440.283626455177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11391.98214634153,
            "unit": "ns/iter",
            "extra": "iterations: 61500\ncpu: 11391.466666666598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 71184.02060382898,
            "unit": "ns/iter",
            "extra": "iterations: 9804\ncpu: 71178.58017135889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 130680.18186906028,
            "unit": "ns/iter",
            "extra": "iterations: 5361\ncpu: 130674.31449356562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30801.33595881181,
            "unit": "ns/iter",
            "extra": "iterations: 22726\ncpu: 30799.86359236112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 31144.834074933253,
            "unit": "ns/iter",
            "extra": "iterations: 22474\ncpu: 31142.79611996091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30757.391011533717,
            "unit": "ns/iter",
            "extra": "iterations: 22718\ncpu: 30755.035654546944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 62029.2351339416,
            "unit": "ns/iter",
            "extra": "iterations: 11385\ncpu: 62027.19367588921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 58356.91620993265,
            "unit": "ns/iter",
            "extra": "iterations: 12042\ncpu: 58356.917455572126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23264.049897153243,
            "unit": "ns/iter",
            "extra": "iterations: 30142\ncpu: 23263.525977042034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 116922.94369256716,
            "unit": "ns/iter",
            "extra": "iterations: 5985\ncpu: 116917.91144527905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 93613.27753305054,
            "unit": "ns/iter",
            "extra": "iterations: 7491\ncpu: 93603.35068749219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 93827.33819397054,
            "unit": "ns/iter",
            "extra": "iterations: 7475\ncpu: 93821.51170568416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 93379.60013332727,
            "unit": "ns/iter",
            "extra": "iterations: 7500\ncpu: 93377.63999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 137432.58211893967,
            "unit": "ns/iter",
            "extra": "iterations: 5078\ncpu: 137429.00748326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 554066.6355731402,
            "unit": "ns/iter",
            "extra": "iterations: 1265\ncpu: 554049.9604743113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 455504.57627121854,
            "unit": "ns/iter",
            "extra": "iterations: 1534\ncpu: 455469.42633637105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 455205.26623373706,
            "unit": "ns/iter",
            "extra": "iterations: 1540\ncpu: 455182.20779220393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 441475.18742140004,
            "unit": "ns/iter",
            "extra": "iterations: 1590\ncpu: 441452.70440252195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 288009.0919208455,
            "unit": "ns/iter",
            "extra": "iterations: 2426\ncpu: 287987.0156636491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 443063.00126902905,
            "unit": "ns/iter",
            "extra": "iterations: 1576\ncpu: 443037.94416244427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23348.89304866352,
            "unit": "ns/iter",
            "extra": "iterations: 30023\ncpu: 23347.297072244506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 118774.46854331582,
            "unit": "ns/iter",
            "extra": "iterations: 5897\ncpu: 118766.321858573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 95602.31434426432,
            "unit": "ns/iter",
            "extra": "iterations: 7320\ncpu: 95595.04098360619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 95674.25560415567,
            "unit": "ns/iter",
            "extra": "iterations: 7316\ncpu: 95670.44833242116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 94065.41542188314,
            "unit": "ns/iter",
            "extra": "iterations: 7431\ncpu: 94060.67823980526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 138800.29942264777,
            "unit": "ns/iter",
            "extra": "iterations: 5023\ncpu: 138788.69201672223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 550508.3985849416,
            "unit": "ns/iter",
            "extra": "iterations: 1272\ncpu: 550473.8993710688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 455800.9672775074,
            "unit": "ns/iter",
            "extra": "iterations: 1528\ncpu: 455751.963350783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 453787.29023913963,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 453766.90368455334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 441755.30138714466,
            "unit": "ns/iter",
            "extra": "iterations: 1586\ncpu: 441749.81084489374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 285497.83077548246,
            "unit": "ns/iter",
            "extra": "iterations: 2476\ncpu: 285493.659127621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 442815.0794060084,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 442788.70238863846 ns\nthreads: 1"
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
        "date": 1702489558931,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7679.24484578608,
            "unit": "ns/iter",
            "extra": "iterations: 90751\ncpu: 7678.357263280846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55306.989700000035,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55307.08 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 102869.93618294758,
            "unit": "ns/iter",
            "extra": "iterations: 8352\ncpu: 102867.00191570882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 151017.38211665858,
            "unit": "ns/iter",
            "extra": "iterations: 5726\ncpu: 151011.92804750262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 196779.5690909084,
            "unit": "ns/iter",
            "extra": "iterations: 4400\ncpu: 196776.11363636368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 243303.16918767823,
            "unit": "ns/iter",
            "extra": "iterations: 3570\ncpu: 243290.70028011204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 290272.5741050693,
            "unit": "ns/iter",
            "extra": "iterations: 2989\ncpu: 290261.0572097694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 336105.6065763851,
            "unit": "ns/iter",
            "extra": "iterations: 2585\ncpu: 336090.4835589942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 382568.212869147,
            "unit": "ns/iter",
            "extra": "iterations: 2269\ncpu: 382530.4539444686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6357.964488301629,
            "unit": "ns/iter",
            "extra": "iterations: 110358\ncpu: 6357.677739719821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5193.08750009213,
            "unit": "ns/iter",
            "extra": "iterations: 135337\ncpu: 5192.879256965939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5214.3832065803745,
            "unit": "ns/iter",
            "extra": "iterations: 135303\ncpu: 5201.679194105083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5149.9702390585635,
            "unit": "ns/iter",
            "extra": "iterations: 135950\ncpu: 5149.793306362622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8384.917329854507,
            "unit": "ns/iter",
            "extra": "iterations: 83561\ncpu: 8384.343174447406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 27858.026277924873,
            "unit": "ns/iter",
            "extra": "iterations: 29188\ncpu: 27857.21872002188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 141629.06832092445,
            "unit": "ns/iter",
            "extra": "iterations: 6045\ncpu: 141620.76095947073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 107741.54394567026,
            "unit": "ns/iter",
            "extra": "iterations: 7953\ncpu: 107737.84735320008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 107629.40903941356,
            "unit": "ns/iter",
            "extra": "iterations: 7943\ncpu: 107623.39166561764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 102313.34878983934,
            "unit": "ns/iter",
            "extra": "iterations: 8346\ncpu: 102309.58543014628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 224219.0480161854,
            "unit": "ns/iter",
            "extra": "iterations: 3957\ncpu: 224201.76901693243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1815340.6954813628,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1815250.098231826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1419411.9311926495,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1419281.1926605487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1416289.9801527003,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1416211.908396943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1397580.5362537594,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1397496.0725075507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 783534.3211554813,
            "unit": "ns/iter",
            "extra": "iterations: 1177\ncpu: 783496.6864910783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1379876.9180328469,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1379743.219076006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36536.05510663498,
            "unit": "ns/iter",
            "extra": "iterations: 22647\ncpu: 36534.09281582556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 176582.0867608001,
            "unit": "ns/iter",
            "extra": "iterations: 4887\ncpu: 176568.75383670963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 137369.82841822747,
            "unit": "ns/iter",
            "extra": "iterations: 6341\ncpu: 137362.35609525308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 137607.75440281973,
            "unit": "ns/iter",
            "extra": "iterations: 6246\ncpu: 137593.32372718552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 132157.1573790499,
            "unit": "ns/iter",
            "extra": "iterations: 6532\ncpu: 132151.08695652153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 257304.70847051434,
            "unit": "ns/iter",
            "extra": "iterations: 3341\ncpu: 257290.99072134023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1882955.014169881,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1882873.68421052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1451731.936137054,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1451682.8660436033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1486529.826433111,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1486442.5159235683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1468209.3059936373,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1468128.548895899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 818952.6581272024,
            "unit": "ns/iter",
            "extra": "iterations: 1132\ncpu: 818900.5300353381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1428324.4228395543,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1428211.419753094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5088248.1499991175,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5087981.999999939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3084925.3675497067,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3084586.423841063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25982.361687283123,
            "unit": "ns/iter",
            "extra": "iterations: 31530\ncpu: 25981.183000317258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 138401.53406346103,
            "unit": "ns/iter",
            "extra": "iterations: 6209\ncpu: 138393.81542921634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 110428.02537809749,
            "unit": "ns/iter",
            "extra": "iterations: 7802\ncpu: 110421.99436041979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 110307.3574286823,
            "unit": "ns/iter",
            "extra": "iterations: 7747\ncpu: 110300.82612624246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 100909.60798675977,
            "unit": "ns/iter",
            "extra": "iterations: 8464\ncpu: 100904.45415879003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 219261.36432542975,
            "unit": "ns/iter",
            "extra": "iterations: 3958\ncpu: 219246.23547246063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1851907.8489065084,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1851839.5626242452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1438184.7507692887,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1438116.923076922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1418848.3531202173,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1418776.7123287616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1412138.415781343,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1412029.1350531112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 788893.8443514169,
            "unit": "ns/iter",
            "extra": "iterations: 1195\ncpu: 788867.8661087897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1389788.5701492587,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1389765.9701492554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2924.233377958184,
            "unit": "ns/iter",
            "extra": "iterations: 238283\ncpu: 2924.162025826446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19372.89381046318,
            "unit": "ns/iter",
            "extra": "iterations: 36077\ncpu: 19372.364664467666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14203.763327093244,
            "unit": "ns/iter",
            "extra": "iterations: 49148\ncpu: 14203.758036949619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14441.218953841908,
            "unit": "ns/iter",
            "extra": "iterations: 48444\ncpu: 14440.283626455177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11391.98214634153,
            "unit": "ns/iter",
            "extra": "iterations: 61500\ncpu: 11391.466666666598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 71184.02060382898,
            "unit": "ns/iter",
            "extra": "iterations: 9804\ncpu: 71178.58017135889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 130680.18186906028,
            "unit": "ns/iter",
            "extra": "iterations: 5361\ncpu: 130674.31449356562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30801.33595881181,
            "unit": "ns/iter",
            "extra": "iterations: 22726\ncpu: 30799.86359236112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 31144.834074933253,
            "unit": "ns/iter",
            "extra": "iterations: 22474\ncpu: 31142.79611996091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30757.391011533717,
            "unit": "ns/iter",
            "extra": "iterations: 22718\ncpu: 30755.035654546944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 62029.2351339416,
            "unit": "ns/iter",
            "extra": "iterations: 11385\ncpu: 62027.19367588921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 58356.91620993265,
            "unit": "ns/iter",
            "extra": "iterations: 12042\ncpu: 58356.917455572126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23264.049897153243,
            "unit": "ns/iter",
            "extra": "iterations: 30142\ncpu: 23263.525977042034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 116922.94369256716,
            "unit": "ns/iter",
            "extra": "iterations: 5985\ncpu: 116917.91144527905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 93613.27753305054,
            "unit": "ns/iter",
            "extra": "iterations: 7491\ncpu: 93603.35068749219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 93827.33819397054,
            "unit": "ns/iter",
            "extra": "iterations: 7475\ncpu: 93821.51170568416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 93379.60013332727,
            "unit": "ns/iter",
            "extra": "iterations: 7500\ncpu: 93377.63999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 137432.58211893967,
            "unit": "ns/iter",
            "extra": "iterations: 5078\ncpu: 137429.00748326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 554066.6355731402,
            "unit": "ns/iter",
            "extra": "iterations: 1265\ncpu: 554049.9604743113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 455504.57627121854,
            "unit": "ns/iter",
            "extra": "iterations: 1534\ncpu: 455469.42633637105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 455205.26623373706,
            "unit": "ns/iter",
            "extra": "iterations: 1540\ncpu: 455182.20779220393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 441475.18742140004,
            "unit": "ns/iter",
            "extra": "iterations: 1590\ncpu: 441452.70440252195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 288009.0919208455,
            "unit": "ns/iter",
            "extra": "iterations: 2426\ncpu: 287987.0156636491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 443063.00126902905,
            "unit": "ns/iter",
            "extra": "iterations: 1576\ncpu: 443037.94416244427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23348.89304866352,
            "unit": "ns/iter",
            "extra": "iterations: 30023\ncpu: 23347.297072244506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 118774.46854331582,
            "unit": "ns/iter",
            "extra": "iterations: 5897\ncpu: 118766.321858573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 95602.31434426432,
            "unit": "ns/iter",
            "extra": "iterations: 7320\ncpu: 95595.04098360619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 95674.25560415567,
            "unit": "ns/iter",
            "extra": "iterations: 7316\ncpu: 95670.44833242116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 94065.41542188314,
            "unit": "ns/iter",
            "extra": "iterations: 7431\ncpu: 94060.67823980526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 138800.29942264777,
            "unit": "ns/iter",
            "extra": "iterations: 5023\ncpu: 138788.69201672223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 550508.3985849416,
            "unit": "ns/iter",
            "extra": "iterations: 1272\ncpu: 550473.8993710688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 455800.9672775074,
            "unit": "ns/iter",
            "extra": "iterations: 1528\ncpu: 455751.963350783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 453787.29023913963,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 453766.90368455334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 441755.30138714466,
            "unit": "ns/iter",
            "extra": "iterations: 1586\ncpu: 441749.81084489374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 285497.83077548246,
            "unit": "ns/iter",
            "extra": "iterations: 2476\ncpu: 285493.659127621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 442815.0794060084,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 442788.70238863846 ns\nthreads: 1"
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
        "date": 1702489558931,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7679.24484578608,
            "unit": "ns/iter",
            "extra": "iterations: 90751\ncpu: 7678.357263280846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55306.989700000035,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55307.08 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 102869.93618294758,
            "unit": "ns/iter",
            "extra": "iterations: 8352\ncpu: 102867.00191570882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 151017.38211665858,
            "unit": "ns/iter",
            "extra": "iterations: 5726\ncpu: 151011.92804750262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 196779.5690909084,
            "unit": "ns/iter",
            "extra": "iterations: 4400\ncpu: 196776.11363636368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 243303.16918767823,
            "unit": "ns/iter",
            "extra": "iterations: 3570\ncpu: 243290.70028011204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 290272.5741050693,
            "unit": "ns/iter",
            "extra": "iterations: 2989\ncpu: 290261.0572097694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 336105.6065763851,
            "unit": "ns/iter",
            "extra": "iterations: 2585\ncpu: 336090.4835589942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 382568.212869147,
            "unit": "ns/iter",
            "extra": "iterations: 2269\ncpu: 382530.4539444686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6357.964488301629,
            "unit": "ns/iter",
            "extra": "iterations: 110358\ncpu: 6357.677739719821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5193.08750009213,
            "unit": "ns/iter",
            "extra": "iterations: 135337\ncpu: 5192.879256965939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5214.3832065803745,
            "unit": "ns/iter",
            "extra": "iterations: 135303\ncpu: 5201.679194105083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5149.9702390585635,
            "unit": "ns/iter",
            "extra": "iterations: 135950\ncpu: 5149.793306362622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8384.917329854507,
            "unit": "ns/iter",
            "extra": "iterations: 83561\ncpu: 8384.343174447406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 27858.026277924873,
            "unit": "ns/iter",
            "extra": "iterations: 29188\ncpu: 27857.21872002188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 141629.06832092445,
            "unit": "ns/iter",
            "extra": "iterations: 6045\ncpu: 141620.76095947073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 107741.54394567026,
            "unit": "ns/iter",
            "extra": "iterations: 7953\ncpu: 107737.84735320008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 107629.40903941356,
            "unit": "ns/iter",
            "extra": "iterations: 7943\ncpu: 107623.39166561764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 102313.34878983934,
            "unit": "ns/iter",
            "extra": "iterations: 8346\ncpu: 102309.58543014628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 224219.0480161854,
            "unit": "ns/iter",
            "extra": "iterations: 3957\ncpu: 224201.76901693243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1815340.6954813628,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1815250.098231826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1419411.9311926495,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1419281.1926605487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1416289.9801527003,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1416211.908396943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1397580.5362537594,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1397496.0725075507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 783534.3211554813,
            "unit": "ns/iter",
            "extra": "iterations: 1177\ncpu: 783496.6864910783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1379876.9180328469,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1379743.219076006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36536.05510663498,
            "unit": "ns/iter",
            "extra": "iterations: 22647\ncpu: 36534.09281582556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 176582.0867608001,
            "unit": "ns/iter",
            "extra": "iterations: 4887\ncpu: 176568.75383670963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 137369.82841822747,
            "unit": "ns/iter",
            "extra": "iterations: 6341\ncpu: 137362.35609525308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 137607.75440281973,
            "unit": "ns/iter",
            "extra": "iterations: 6246\ncpu: 137593.32372718552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 132157.1573790499,
            "unit": "ns/iter",
            "extra": "iterations: 6532\ncpu: 132151.08695652153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 257304.70847051434,
            "unit": "ns/iter",
            "extra": "iterations: 3341\ncpu: 257290.99072134023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1882955.014169881,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1882873.68421052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1451731.936137054,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1451682.8660436033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1486529.826433111,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1486442.5159235683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1468209.3059936373,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1468128.548895899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 818952.6581272024,
            "unit": "ns/iter",
            "extra": "iterations: 1132\ncpu: 818900.5300353381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1428324.4228395543,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1428211.419753094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5088248.1499991175,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5087981.999999939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3084925.3675497067,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3084586.423841063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25982.361687283123,
            "unit": "ns/iter",
            "extra": "iterations: 31530\ncpu: 25981.183000317258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 138401.53406346103,
            "unit": "ns/iter",
            "extra": "iterations: 6209\ncpu: 138393.81542921634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 110428.02537809749,
            "unit": "ns/iter",
            "extra": "iterations: 7802\ncpu: 110421.99436041979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 110307.3574286823,
            "unit": "ns/iter",
            "extra": "iterations: 7747\ncpu: 110300.82612624246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 100909.60798675977,
            "unit": "ns/iter",
            "extra": "iterations: 8464\ncpu: 100904.45415879003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 219261.36432542975,
            "unit": "ns/iter",
            "extra": "iterations: 3958\ncpu: 219246.23547246063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1851907.8489065084,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1851839.5626242452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1438184.7507692887,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1438116.923076922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1418848.3531202173,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1418776.7123287616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1412138.415781343,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1412029.1350531112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 788893.8443514169,
            "unit": "ns/iter",
            "extra": "iterations: 1195\ncpu: 788867.8661087897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1389788.5701492587,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1389765.9701492554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2924.233377958184,
            "unit": "ns/iter",
            "extra": "iterations: 238283\ncpu: 2924.162025826446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19372.89381046318,
            "unit": "ns/iter",
            "extra": "iterations: 36077\ncpu: 19372.364664467666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14203.763327093244,
            "unit": "ns/iter",
            "extra": "iterations: 49148\ncpu: 14203.758036949619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14441.218953841908,
            "unit": "ns/iter",
            "extra": "iterations: 48444\ncpu: 14440.283626455177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11391.98214634153,
            "unit": "ns/iter",
            "extra": "iterations: 61500\ncpu: 11391.466666666598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 71184.02060382898,
            "unit": "ns/iter",
            "extra": "iterations: 9804\ncpu: 71178.58017135889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 130680.18186906028,
            "unit": "ns/iter",
            "extra": "iterations: 5361\ncpu: 130674.31449356562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30801.33595881181,
            "unit": "ns/iter",
            "extra": "iterations: 22726\ncpu: 30799.86359236112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 31144.834074933253,
            "unit": "ns/iter",
            "extra": "iterations: 22474\ncpu: 31142.79611996091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30757.391011533717,
            "unit": "ns/iter",
            "extra": "iterations: 22718\ncpu: 30755.035654546944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 62029.2351339416,
            "unit": "ns/iter",
            "extra": "iterations: 11385\ncpu: 62027.19367588921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 58356.91620993265,
            "unit": "ns/iter",
            "extra": "iterations: 12042\ncpu: 58356.917455572126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23264.049897153243,
            "unit": "ns/iter",
            "extra": "iterations: 30142\ncpu: 23263.525977042034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 116922.94369256716,
            "unit": "ns/iter",
            "extra": "iterations: 5985\ncpu: 116917.91144527905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 93613.27753305054,
            "unit": "ns/iter",
            "extra": "iterations: 7491\ncpu: 93603.35068749219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 93827.33819397054,
            "unit": "ns/iter",
            "extra": "iterations: 7475\ncpu: 93821.51170568416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 93379.60013332727,
            "unit": "ns/iter",
            "extra": "iterations: 7500\ncpu: 93377.63999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 137432.58211893967,
            "unit": "ns/iter",
            "extra": "iterations: 5078\ncpu: 137429.00748326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 554066.6355731402,
            "unit": "ns/iter",
            "extra": "iterations: 1265\ncpu: 554049.9604743113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 455504.57627121854,
            "unit": "ns/iter",
            "extra": "iterations: 1534\ncpu: 455469.42633637105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 455205.26623373706,
            "unit": "ns/iter",
            "extra": "iterations: 1540\ncpu: 455182.20779220393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 441475.18742140004,
            "unit": "ns/iter",
            "extra": "iterations: 1590\ncpu: 441452.70440252195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 288009.0919208455,
            "unit": "ns/iter",
            "extra": "iterations: 2426\ncpu: 287987.0156636491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 443063.00126902905,
            "unit": "ns/iter",
            "extra": "iterations: 1576\ncpu: 443037.94416244427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23348.89304866352,
            "unit": "ns/iter",
            "extra": "iterations: 30023\ncpu: 23347.297072244506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 118774.46854331582,
            "unit": "ns/iter",
            "extra": "iterations: 5897\ncpu: 118766.321858573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 95602.31434426432,
            "unit": "ns/iter",
            "extra": "iterations: 7320\ncpu: 95595.04098360619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 95674.25560415567,
            "unit": "ns/iter",
            "extra": "iterations: 7316\ncpu: 95670.44833242116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 94065.41542188314,
            "unit": "ns/iter",
            "extra": "iterations: 7431\ncpu: 94060.67823980526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 138800.29942264777,
            "unit": "ns/iter",
            "extra": "iterations: 5023\ncpu: 138788.69201672223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 550508.3985849416,
            "unit": "ns/iter",
            "extra": "iterations: 1272\ncpu: 550473.8993710688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 455800.9672775074,
            "unit": "ns/iter",
            "extra": "iterations: 1528\ncpu: 455751.963350783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 453787.29023913963,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 453766.90368455334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 441755.30138714466,
            "unit": "ns/iter",
            "extra": "iterations: 1586\ncpu: 441749.81084489374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 285497.83077548246,
            "unit": "ns/iter",
            "extra": "iterations: 2476\ncpu: 285493.659127621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 442815.0794060084,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 442788.70238863846 ns\nthreads: 1"
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
        "date": 1702489558931,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7679.24484578608,
            "unit": "ns/iter",
            "extra": "iterations: 90751\ncpu: 7678.357263280846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55306.989700000035,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55307.08 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 102869.93618294758,
            "unit": "ns/iter",
            "extra": "iterations: 8352\ncpu: 102867.00191570882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 151017.38211665858,
            "unit": "ns/iter",
            "extra": "iterations: 5726\ncpu: 151011.92804750262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 196779.5690909084,
            "unit": "ns/iter",
            "extra": "iterations: 4400\ncpu: 196776.11363636368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 243303.16918767823,
            "unit": "ns/iter",
            "extra": "iterations: 3570\ncpu: 243290.70028011204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 290272.5741050693,
            "unit": "ns/iter",
            "extra": "iterations: 2989\ncpu: 290261.0572097694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 336105.6065763851,
            "unit": "ns/iter",
            "extra": "iterations: 2585\ncpu: 336090.4835589942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 382568.212869147,
            "unit": "ns/iter",
            "extra": "iterations: 2269\ncpu: 382530.4539444686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6357.964488301629,
            "unit": "ns/iter",
            "extra": "iterations: 110358\ncpu: 6357.677739719821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5193.08750009213,
            "unit": "ns/iter",
            "extra": "iterations: 135337\ncpu: 5192.879256965939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5214.3832065803745,
            "unit": "ns/iter",
            "extra": "iterations: 135303\ncpu: 5201.679194105083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5149.9702390585635,
            "unit": "ns/iter",
            "extra": "iterations: 135950\ncpu: 5149.793306362622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8384.917329854507,
            "unit": "ns/iter",
            "extra": "iterations: 83561\ncpu: 8384.343174447406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 27858.026277924873,
            "unit": "ns/iter",
            "extra": "iterations: 29188\ncpu: 27857.21872002188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 141629.06832092445,
            "unit": "ns/iter",
            "extra": "iterations: 6045\ncpu: 141620.76095947073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 107741.54394567026,
            "unit": "ns/iter",
            "extra": "iterations: 7953\ncpu: 107737.84735320008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 107629.40903941356,
            "unit": "ns/iter",
            "extra": "iterations: 7943\ncpu: 107623.39166561764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 102313.34878983934,
            "unit": "ns/iter",
            "extra": "iterations: 8346\ncpu: 102309.58543014628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 224219.0480161854,
            "unit": "ns/iter",
            "extra": "iterations: 3957\ncpu: 224201.76901693243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1815340.6954813628,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1815250.098231826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1419411.9311926495,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1419281.1926605487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1416289.9801527003,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1416211.908396943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1397580.5362537594,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1397496.0725075507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 783534.3211554813,
            "unit": "ns/iter",
            "extra": "iterations: 1177\ncpu: 783496.6864910783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1379876.9180328469,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1379743.219076006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36536.05510663498,
            "unit": "ns/iter",
            "extra": "iterations: 22647\ncpu: 36534.09281582556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 176582.0867608001,
            "unit": "ns/iter",
            "extra": "iterations: 4887\ncpu: 176568.75383670963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 137369.82841822747,
            "unit": "ns/iter",
            "extra": "iterations: 6341\ncpu: 137362.35609525308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 137607.75440281973,
            "unit": "ns/iter",
            "extra": "iterations: 6246\ncpu: 137593.32372718552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 132157.1573790499,
            "unit": "ns/iter",
            "extra": "iterations: 6532\ncpu: 132151.08695652153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 257304.70847051434,
            "unit": "ns/iter",
            "extra": "iterations: 3341\ncpu: 257290.99072134023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1882955.014169881,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1882873.68421052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1451731.936137054,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1451682.8660436033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1486529.826433111,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1486442.5159235683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1468209.3059936373,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1468128.548895899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 818952.6581272024,
            "unit": "ns/iter",
            "extra": "iterations: 1132\ncpu: 818900.5300353381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1428324.4228395543,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1428211.419753094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5088248.1499991175,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5087981.999999939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3084925.3675497067,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3084586.423841063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25982.361687283123,
            "unit": "ns/iter",
            "extra": "iterations: 31530\ncpu: 25981.183000317258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 138401.53406346103,
            "unit": "ns/iter",
            "extra": "iterations: 6209\ncpu: 138393.81542921634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 110428.02537809749,
            "unit": "ns/iter",
            "extra": "iterations: 7802\ncpu: 110421.99436041979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 110307.3574286823,
            "unit": "ns/iter",
            "extra": "iterations: 7747\ncpu: 110300.82612624246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 100909.60798675977,
            "unit": "ns/iter",
            "extra": "iterations: 8464\ncpu: 100904.45415879003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 219261.36432542975,
            "unit": "ns/iter",
            "extra": "iterations: 3958\ncpu: 219246.23547246063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1851907.8489065084,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1851839.5626242452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1438184.7507692887,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1438116.923076922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1418848.3531202173,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1418776.7123287616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1412138.415781343,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1412029.1350531112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 788893.8443514169,
            "unit": "ns/iter",
            "extra": "iterations: 1195\ncpu: 788867.8661087897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1389788.5701492587,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1389765.9701492554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2924.233377958184,
            "unit": "ns/iter",
            "extra": "iterations: 238283\ncpu: 2924.162025826446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19372.89381046318,
            "unit": "ns/iter",
            "extra": "iterations: 36077\ncpu: 19372.364664467666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14203.763327093244,
            "unit": "ns/iter",
            "extra": "iterations: 49148\ncpu: 14203.758036949619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14441.218953841908,
            "unit": "ns/iter",
            "extra": "iterations: 48444\ncpu: 14440.283626455177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11391.98214634153,
            "unit": "ns/iter",
            "extra": "iterations: 61500\ncpu: 11391.466666666598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 71184.02060382898,
            "unit": "ns/iter",
            "extra": "iterations: 9804\ncpu: 71178.58017135889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 130680.18186906028,
            "unit": "ns/iter",
            "extra": "iterations: 5361\ncpu: 130674.31449356562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30801.33595881181,
            "unit": "ns/iter",
            "extra": "iterations: 22726\ncpu: 30799.86359236112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 31144.834074933253,
            "unit": "ns/iter",
            "extra": "iterations: 22474\ncpu: 31142.79611996091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30757.391011533717,
            "unit": "ns/iter",
            "extra": "iterations: 22718\ncpu: 30755.035654546944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 62029.2351339416,
            "unit": "ns/iter",
            "extra": "iterations: 11385\ncpu: 62027.19367588921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 58356.91620993265,
            "unit": "ns/iter",
            "extra": "iterations: 12042\ncpu: 58356.917455572126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23264.049897153243,
            "unit": "ns/iter",
            "extra": "iterations: 30142\ncpu: 23263.525977042034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 116922.94369256716,
            "unit": "ns/iter",
            "extra": "iterations: 5985\ncpu: 116917.91144527905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 93613.27753305054,
            "unit": "ns/iter",
            "extra": "iterations: 7491\ncpu: 93603.35068749219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 93827.33819397054,
            "unit": "ns/iter",
            "extra": "iterations: 7475\ncpu: 93821.51170568416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 93379.60013332727,
            "unit": "ns/iter",
            "extra": "iterations: 7500\ncpu: 93377.63999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 137432.58211893967,
            "unit": "ns/iter",
            "extra": "iterations: 5078\ncpu: 137429.00748326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 554066.6355731402,
            "unit": "ns/iter",
            "extra": "iterations: 1265\ncpu: 554049.9604743113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 455504.57627121854,
            "unit": "ns/iter",
            "extra": "iterations: 1534\ncpu: 455469.42633637105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 455205.26623373706,
            "unit": "ns/iter",
            "extra": "iterations: 1540\ncpu: 455182.20779220393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 441475.18742140004,
            "unit": "ns/iter",
            "extra": "iterations: 1590\ncpu: 441452.70440252195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 288009.0919208455,
            "unit": "ns/iter",
            "extra": "iterations: 2426\ncpu: 287987.0156636491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 443063.00126902905,
            "unit": "ns/iter",
            "extra": "iterations: 1576\ncpu: 443037.94416244427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23348.89304866352,
            "unit": "ns/iter",
            "extra": "iterations: 30023\ncpu: 23347.297072244506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 118774.46854331582,
            "unit": "ns/iter",
            "extra": "iterations: 5897\ncpu: 118766.321858573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 95602.31434426432,
            "unit": "ns/iter",
            "extra": "iterations: 7320\ncpu: 95595.04098360619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 95674.25560415567,
            "unit": "ns/iter",
            "extra": "iterations: 7316\ncpu: 95670.44833242116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 94065.41542188314,
            "unit": "ns/iter",
            "extra": "iterations: 7431\ncpu: 94060.67823980526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 138800.29942264777,
            "unit": "ns/iter",
            "extra": "iterations: 5023\ncpu: 138788.69201672223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 550508.3985849416,
            "unit": "ns/iter",
            "extra": "iterations: 1272\ncpu: 550473.8993710688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 455800.9672775074,
            "unit": "ns/iter",
            "extra": "iterations: 1528\ncpu: 455751.963350783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 453787.29023913963,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 453766.90368455334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 441755.30138714466,
            "unit": "ns/iter",
            "extra": "iterations: 1586\ncpu: 441749.81084489374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 285497.83077548246,
            "unit": "ns/iter",
            "extra": "iterations: 2476\ncpu: 285493.659127621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 442815.0794060084,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 442788.70238863846 ns\nthreads: 1"
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
        "date": 1702489558931,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7679.24484578608,
            "unit": "ns/iter",
            "extra": "iterations: 90751\ncpu: 7678.357263280846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55306.989700000035,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55307.08 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 102869.93618294758,
            "unit": "ns/iter",
            "extra": "iterations: 8352\ncpu: 102867.00191570882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 151017.38211665858,
            "unit": "ns/iter",
            "extra": "iterations: 5726\ncpu: 151011.92804750262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 196779.5690909084,
            "unit": "ns/iter",
            "extra": "iterations: 4400\ncpu: 196776.11363636368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 243303.16918767823,
            "unit": "ns/iter",
            "extra": "iterations: 3570\ncpu: 243290.70028011204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 290272.5741050693,
            "unit": "ns/iter",
            "extra": "iterations: 2989\ncpu: 290261.0572097694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 336105.6065763851,
            "unit": "ns/iter",
            "extra": "iterations: 2585\ncpu: 336090.4835589942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 382568.212869147,
            "unit": "ns/iter",
            "extra": "iterations: 2269\ncpu: 382530.4539444686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6357.964488301629,
            "unit": "ns/iter",
            "extra": "iterations: 110358\ncpu: 6357.677739719821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5193.08750009213,
            "unit": "ns/iter",
            "extra": "iterations: 135337\ncpu: 5192.879256965939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5214.3832065803745,
            "unit": "ns/iter",
            "extra": "iterations: 135303\ncpu: 5201.679194105083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5149.9702390585635,
            "unit": "ns/iter",
            "extra": "iterations: 135950\ncpu: 5149.793306362622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8384.917329854507,
            "unit": "ns/iter",
            "extra": "iterations: 83561\ncpu: 8384.343174447406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 27858.026277924873,
            "unit": "ns/iter",
            "extra": "iterations: 29188\ncpu: 27857.21872002188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 141629.06832092445,
            "unit": "ns/iter",
            "extra": "iterations: 6045\ncpu: 141620.76095947073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 107741.54394567026,
            "unit": "ns/iter",
            "extra": "iterations: 7953\ncpu: 107737.84735320008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 107629.40903941356,
            "unit": "ns/iter",
            "extra": "iterations: 7943\ncpu: 107623.39166561764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 102313.34878983934,
            "unit": "ns/iter",
            "extra": "iterations: 8346\ncpu: 102309.58543014628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 224219.0480161854,
            "unit": "ns/iter",
            "extra": "iterations: 3957\ncpu: 224201.76901693243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1815340.6954813628,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1815250.098231826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1419411.9311926495,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1419281.1926605487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1416289.9801527003,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1416211.908396943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1397580.5362537594,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1397496.0725075507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 783534.3211554813,
            "unit": "ns/iter",
            "extra": "iterations: 1177\ncpu: 783496.6864910783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1379876.9180328469,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1379743.219076006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36536.05510663498,
            "unit": "ns/iter",
            "extra": "iterations: 22647\ncpu: 36534.09281582556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 176582.0867608001,
            "unit": "ns/iter",
            "extra": "iterations: 4887\ncpu: 176568.75383670963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 137369.82841822747,
            "unit": "ns/iter",
            "extra": "iterations: 6341\ncpu: 137362.35609525308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 137607.75440281973,
            "unit": "ns/iter",
            "extra": "iterations: 6246\ncpu: 137593.32372718552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 132157.1573790499,
            "unit": "ns/iter",
            "extra": "iterations: 6532\ncpu: 132151.08695652153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 257304.70847051434,
            "unit": "ns/iter",
            "extra": "iterations: 3341\ncpu: 257290.99072134023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1882955.014169881,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1882873.68421052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1451731.936137054,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1451682.8660436033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1486529.826433111,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1486442.5159235683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1468209.3059936373,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1468128.548895899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 818952.6581272024,
            "unit": "ns/iter",
            "extra": "iterations: 1132\ncpu: 818900.5300353381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1428324.4228395543,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1428211.419753094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5088248.1499991175,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5087981.999999939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3084925.3675497067,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3084586.423841063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25982.361687283123,
            "unit": "ns/iter",
            "extra": "iterations: 31530\ncpu: 25981.183000317258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 138401.53406346103,
            "unit": "ns/iter",
            "extra": "iterations: 6209\ncpu: 138393.81542921634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 110428.02537809749,
            "unit": "ns/iter",
            "extra": "iterations: 7802\ncpu: 110421.99436041979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 110307.3574286823,
            "unit": "ns/iter",
            "extra": "iterations: 7747\ncpu: 110300.82612624246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 100909.60798675977,
            "unit": "ns/iter",
            "extra": "iterations: 8464\ncpu: 100904.45415879003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 219261.36432542975,
            "unit": "ns/iter",
            "extra": "iterations: 3958\ncpu: 219246.23547246063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1851907.8489065084,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1851839.5626242452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1438184.7507692887,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1438116.923076922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1418848.3531202173,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1418776.7123287616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1412138.415781343,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1412029.1350531112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 788893.8443514169,
            "unit": "ns/iter",
            "extra": "iterations: 1195\ncpu: 788867.8661087897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1389788.5701492587,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1389765.9701492554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2924.233377958184,
            "unit": "ns/iter",
            "extra": "iterations: 238283\ncpu: 2924.162025826446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19372.89381046318,
            "unit": "ns/iter",
            "extra": "iterations: 36077\ncpu: 19372.364664467666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14203.763327093244,
            "unit": "ns/iter",
            "extra": "iterations: 49148\ncpu: 14203.758036949619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14441.218953841908,
            "unit": "ns/iter",
            "extra": "iterations: 48444\ncpu: 14440.283626455177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11391.98214634153,
            "unit": "ns/iter",
            "extra": "iterations: 61500\ncpu: 11391.466666666598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 71184.02060382898,
            "unit": "ns/iter",
            "extra": "iterations: 9804\ncpu: 71178.58017135889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 130680.18186906028,
            "unit": "ns/iter",
            "extra": "iterations: 5361\ncpu: 130674.31449356562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30801.33595881181,
            "unit": "ns/iter",
            "extra": "iterations: 22726\ncpu: 30799.86359236112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 31144.834074933253,
            "unit": "ns/iter",
            "extra": "iterations: 22474\ncpu: 31142.79611996091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30757.391011533717,
            "unit": "ns/iter",
            "extra": "iterations: 22718\ncpu: 30755.035654546944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 62029.2351339416,
            "unit": "ns/iter",
            "extra": "iterations: 11385\ncpu: 62027.19367588921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 58356.91620993265,
            "unit": "ns/iter",
            "extra": "iterations: 12042\ncpu: 58356.917455572126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23264.049897153243,
            "unit": "ns/iter",
            "extra": "iterations: 30142\ncpu: 23263.525977042034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 116922.94369256716,
            "unit": "ns/iter",
            "extra": "iterations: 5985\ncpu: 116917.91144527905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 93613.27753305054,
            "unit": "ns/iter",
            "extra": "iterations: 7491\ncpu: 93603.35068749219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 93827.33819397054,
            "unit": "ns/iter",
            "extra": "iterations: 7475\ncpu: 93821.51170568416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 93379.60013332727,
            "unit": "ns/iter",
            "extra": "iterations: 7500\ncpu: 93377.63999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 137432.58211893967,
            "unit": "ns/iter",
            "extra": "iterations: 5078\ncpu: 137429.00748326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 554066.6355731402,
            "unit": "ns/iter",
            "extra": "iterations: 1265\ncpu: 554049.9604743113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 455504.57627121854,
            "unit": "ns/iter",
            "extra": "iterations: 1534\ncpu: 455469.42633637105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 455205.26623373706,
            "unit": "ns/iter",
            "extra": "iterations: 1540\ncpu: 455182.20779220393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 441475.18742140004,
            "unit": "ns/iter",
            "extra": "iterations: 1590\ncpu: 441452.70440252195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 288009.0919208455,
            "unit": "ns/iter",
            "extra": "iterations: 2426\ncpu: 287987.0156636491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 443063.00126902905,
            "unit": "ns/iter",
            "extra": "iterations: 1576\ncpu: 443037.94416244427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23348.89304866352,
            "unit": "ns/iter",
            "extra": "iterations: 30023\ncpu: 23347.297072244506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 118774.46854331582,
            "unit": "ns/iter",
            "extra": "iterations: 5897\ncpu: 118766.321858573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 95602.31434426432,
            "unit": "ns/iter",
            "extra": "iterations: 7320\ncpu: 95595.04098360619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 95674.25560415567,
            "unit": "ns/iter",
            "extra": "iterations: 7316\ncpu: 95670.44833242116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 94065.41542188314,
            "unit": "ns/iter",
            "extra": "iterations: 7431\ncpu: 94060.67823980526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 138800.29942264777,
            "unit": "ns/iter",
            "extra": "iterations: 5023\ncpu: 138788.69201672223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 550508.3985849416,
            "unit": "ns/iter",
            "extra": "iterations: 1272\ncpu: 550473.8993710688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 455800.9672775074,
            "unit": "ns/iter",
            "extra": "iterations: 1528\ncpu: 455751.963350783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 453787.29023913963,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 453766.90368455334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 441755.30138714466,
            "unit": "ns/iter",
            "extra": "iterations: 1586\ncpu: 441749.81084489374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 285497.83077548246,
            "unit": "ns/iter",
            "extra": "iterations: 2476\ncpu: 285493.659127621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 442815.0794060084,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 442788.70238863846 ns\nthreads: 1"
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
        "date": 1702489558931,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7679.24484578608,
            "unit": "ns/iter",
            "extra": "iterations: 90751\ncpu: 7678.357263280846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55306.989700000035,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55307.08 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 102869.93618294758,
            "unit": "ns/iter",
            "extra": "iterations: 8352\ncpu: 102867.00191570882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 151017.38211665858,
            "unit": "ns/iter",
            "extra": "iterations: 5726\ncpu: 151011.92804750262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 196779.5690909084,
            "unit": "ns/iter",
            "extra": "iterations: 4400\ncpu: 196776.11363636368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 243303.16918767823,
            "unit": "ns/iter",
            "extra": "iterations: 3570\ncpu: 243290.70028011204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 290272.5741050693,
            "unit": "ns/iter",
            "extra": "iterations: 2989\ncpu: 290261.0572097694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 336105.6065763851,
            "unit": "ns/iter",
            "extra": "iterations: 2585\ncpu: 336090.4835589942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 382568.212869147,
            "unit": "ns/iter",
            "extra": "iterations: 2269\ncpu: 382530.4539444686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6357.964488301629,
            "unit": "ns/iter",
            "extra": "iterations: 110358\ncpu: 6357.677739719821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5193.08750009213,
            "unit": "ns/iter",
            "extra": "iterations: 135337\ncpu: 5192.879256965939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5214.3832065803745,
            "unit": "ns/iter",
            "extra": "iterations: 135303\ncpu: 5201.679194105083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5149.9702390585635,
            "unit": "ns/iter",
            "extra": "iterations: 135950\ncpu: 5149.793306362622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8384.917329854507,
            "unit": "ns/iter",
            "extra": "iterations: 83561\ncpu: 8384.343174447406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 27858.026277924873,
            "unit": "ns/iter",
            "extra": "iterations: 29188\ncpu: 27857.21872002188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 141629.06832092445,
            "unit": "ns/iter",
            "extra": "iterations: 6045\ncpu: 141620.76095947073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 107741.54394567026,
            "unit": "ns/iter",
            "extra": "iterations: 7953\ncpu: 107737.84735320008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 107629.40903941356,
            "unit": "ns/iter",
            "extra": "iterations: 7943\ncpu: 107623.39166561764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 102313.34878983934,
            "unit": "ns/iter",
            "extra": "iterations: 8346\ncpu: 102309.58543014628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 224219.0480161854,
            "unit": "ns/iter",
            "extra": "iterations: 3957\ncpu: 224201.76901693243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1815340.6954813628,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1815250.098231826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1419411.9311926495,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1419281.1926605487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1416289.9801527003,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1416211.908396943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1397580.5362537594,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1397496.0725075507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 783534.3211554813,
            "unit": "ns/iter",
            "extra": "iterations: 1177\ncpu: 783496.6864910783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1379876.9180328469,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1379743.219076006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36536.05510663498,
            "unit": "ns/iter",
            "extra": "iterations: 22647\ncpu: 36534.09281582556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 176582.0867608001,
            "unit": "ns/iter",
            "extra": "iterations: 4887\ncpu: 176568.75383670963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 137369.82841822747,
            "unit": "ns/iter",
            "extra": "iterations: 6341\ncpu: 137362.35609525308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 137607.75440281973,
            "unit": "ns/iter",
            "extra": "iterations: 6246\ncpu: 137593.32372718552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 132157.1573790499,
            "unit": "ns/iter",
            "extra": "iterations: 6532\ncpu: 132151.08695652153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 257304.70847051434,
            "unit": "ns/iter",
            "extra": "iterations: 3341\ncpu: 257290.99072134023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1882955.014169881,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1882873.68421052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1451731.936137054,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1451682.8660436033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1486529.826433111,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1486442.5159235683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1468209.3059936373,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1468128.548895899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 818952.6581272024,
            "unit": "ns/iter",
            "extra": "iterations: 1132\ncpu: 818900.5300353381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1428324.4228395543,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1428211.419753094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5088248.1499991175,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5087981.999999939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3084925.3675497067,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3084586.423841063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25982.361687283123,
            "unit": "ns/iter",
            "extra": "iterations: 31530\ncpu: 25981.183000317258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 138401.53406346103,
            "unit": "ns/iter",
            "extra": "iterations: 6209\ncpu: 138393.81542921634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 110428.02537809749,
            "unit": "ns/iter",
            "extra": "iterations: 7802\ncpu: 110421.99436041979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 110307.3574286823,
            "unit": "ns/iter",
            "extra": "iterations: 7747\ncpu: 110300.82612624246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 100909.60798675977,
            "unit": "ns/iter",
            "extra": "iterations: 8464\ncpu: 100904.45415879003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 219261.36432542975,
            "unit": "ns/iter",
            "extra": "iterations: 3958\ncpu: 219246.23547246063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1851907.8489065084,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1851839.5626242452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1438184.7507692887,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1438116.923076922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1418848.3531202173,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1418776.7123287616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1412138.415781343,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1412029.1350531112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 788893.8443514169,
            "unit": "ns/iter",
            "extra": "iterations: 1195\ncpu: 788867.8661087897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1389788.5701492587,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1389765.9701492554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2924.233377958184,
            "unit": "ns/iter",
            "extra": "iterations: 238283\ncpu: 2924.162025826446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19372.89381046318,
            "unit": "ns/iter",
            "extra": "iterations: 36077\ncpu: 19372.364664467666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14203.763327093244,
            "unit": "ns/iter",
            "extra": "iterations: 49148\ncpu: 14203.758036949619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14441.218953841908,
            "unit": "ns/iter",
            "extra": "iterations: 48444\ncpu: 14440.283626455177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11391.98214634153,
            "unit": "ns/iter",
            "extra": "iterations: 61500\ncpu: 11391.466666666598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 71184.02060382898,
            "unit": "ns/iter",
            "extra": "iterations: 9804\ncpu: 71178.58017135889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 130680.18186906028,
            "unit": "ns/iter",
            "extra": "iterations: 5361\ncpu: 130674.31449356562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30801.33595881181,
            "unit": "ns/iter",
            "extra": "iterations: 22726\ncpu: 30799.86359236112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 31144.834074933253,
            "unit": "ns/iter",
            "extra": "iterations: 22474\ncpu: 31142.79611996091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30757.391011533717,
            "unit": "ns/iter",
            "extra": "iterations: 22718\ncpu: 30755.035654546944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 62029.2351339416,
            "unit": "ns/iter",
            "extra": "iterations: 11385\ncpu: 62027.19367588921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 58356.91620993265,
            "unit": "ns/iter",
            "extra": "iterations: 12042\ncpu: 58356.917455572126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23264.049897153243,
            "unit": "ns/iter",
            "extra": "iterations: 30142\ncpu: 23263.525977042034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 116922.94369256716,
            "unit": "ns/iter",
            "extra": "iterations: 5985\ncpu: 116917.91144527905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 93613.27753305054,
            "unit": "ns/iter",
            "extra": "iterations: 7491\ncpu: 93603.35068749219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 93827.33819397054,
            "unit": "ns/iter",
            "extra": "iterations: 7475\ncpu: 93821.51170568416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 93379.60013332727,
            "unit": "ns/iter",
            "extra": "iterations: 7500\ncpu: 93377.63999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 137432.58211893967,
            "unit": "ns/iter",
            "extra": "iterations: 5078\ncpu: 137429.00748326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 554066.6355731402,
            "unit": "ns/iter",
            "extra": "iterations: 1265\ncpu: 554049.9604743113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 455504.57627121854,
            "unit": "ns/iter",
            "extra": "iterations: 1534\ncpu: 455469.42633637105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 455205.26623373706,
            "unit": "ns/iter",
            "extra": "iterations: 1540\ncpu: 455182.20779220393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 441475.18742140004,
            "unit": "ns/iter",
            "extra": "iterations: 1590\ncpu: 441452.70440252195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 288009.0919208455,
            "unit": "ns/iter",
            "extra": "iterations: 2426\ncpu: 287987.0156636491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 443063.00126902905,
            "unit": "ns/iter",
            "extra": "iterations: 1576\ncpu: 443037.94416244427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23348.89304866352,
            "unit": "ns/iter",
            "extra": "iterations: 30023\ncpu: 23347.297072244506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 118774.46854331582,
            "unit": "ns/iter",
            "extra": "iterations: 5897\ncpu: 118766.321858573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 95602.31434426432,
            "unit": "ns/iter",
            "extra": "iterations: 7320\ncpu: 95595.04098360619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 95674.25560415567,
            "unit": "ns/iter",
            "extra": "iterations: 7316\ncpu: 95670.44833242116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 94065.41542188314,
            "unit": "ns/iter",
            "extra": "iterations: 7431\ncpu: 94060.67823980526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 138800.29942264777,
            "unit": "ns/iter",
            "extra": "iterations: 5023\ncpu: 138788.69201672223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 550508.3985849416,
            "unit": "ns/iter",
            "extra": "iterations: 1272\ncpu: 550473.8993710688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 455800.9672775074,
            "unit": "ns/iter",
            "extra": "iterations: 1528\ncpu: 455751.963350783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 453787.29023913963,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 453766.90368455334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 441755.30138714466,
            "unit": "ns/iter",
            "extra": "iterations: 1586\ncpu: 441749.81084489374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 285497.83077548246,
            "unit": "ns/iter",
            "extra": "iterations: 2476\ncpu: 285493.659127621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 442815.0794060084,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 442788.70238863846 ns\nthreads: 1"
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
        "date": 1702492193916,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7619.994409937573,
            "unit": "ns/iter",
            "extra": "iterations: 91770\ncpu: 7619.544513457557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54843.70709999666,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54839.48000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 100913.1951104941,
            "unit": "ns/iter",
            "extra": "iterations: 8508\ncpu: 100908.90926187116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 146549.7319727825,
            "unit": "ns/iter",
            "extra": "iterations: 5880\ncpu: 146537.95918367346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 192154.70804700383,
            "unit": "ns/iter",
            "extra": "iterations: 4511\ncpu: 192145.7991576148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 237256.55552487005,
            "unit": "ns/iter",
            "extra": "iterations: 3620\ncpu: 237238.81215469606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 283527.63477399404,
            "unit": "ns/iter",
            "extra": "iterations: 3031\ncpu: 283517.81590234226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 328177.4490181541,
            "unit": "ns/iter",
            "extra": "iterations: 2648\ncpu: 328163.5574018125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 373902.40740744234,
            "unit": "ns/iter",
            "extra": "iterations: 2322\ncpu: 373879.80189491797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6405.842383645502,
            "unit": "ns/iter",
            "extra": "iterations: 109278\ncpu: 6405.556470652833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5254.455441324799,
            "unit": "ns/iter",
            "extra": "iterations: 133745\ncpu: 5254.188941642672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5230.545659046276,
            "unit": "ns/iter",
            "extra": "iterations: 133807\ncpu: 5230.187508874719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5287.432178445778,
            "unit": "ns/iter",
            "extra": "iterations: 132163\ncpu: 5287.461695028108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8414.462714460242,
            "unit": "ns/iter",
            "extra": "iterations: 82941\ncpu: 8413.917121809493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 27489.22914274184,
            "unit": "ns/iter",
            "extra": "iterations: 29606\ncpu: 27488.54286293319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 134531.53145199968,
            "unit": "ns/iter",
            "extra": "iterations: 6343\ncpu: 134529.35519470283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 103282.21128465343,
            "unit": "ns/iter",
            "extra": "iterations: 8259\ncpu: 103280.28817048082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 103032.1034564981,
            "unit": "ns/iter",
            "extra": "iterations: 8390\ncpu: 102986.61501787843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 99524.44491277286,
            "unit": "ns/iter",
            "extra": "iterations: 8541\ncpu: 99521.23873082788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 231511.04920177528,
            "unit": "ns/iter",
            "extra": "iterations: 3821\ncpu: 231494.53022768846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1798054.4649805075,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1797978.4046692548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1414947.3338413716,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1414919.207317075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1410660.0531108107,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1410584.218512898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1393724.4442771256,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1393681.9277108419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 777134.70370372,
            "unit": "ns/iter",
            "extra": "iterations: 1188\ncpu: 777097.3063973057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1369783.742941974,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1369712.184249628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36894.10295894884,
            "unit": "ns/iter",
            "extra": "iterations: 22339\ncpu: 36893.916468955664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 168711.00548911717,
            "unit": "ns/iter",
            "extra": "iterations: 5101\ncpu: 168705.3322877869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 132968.20986699287,
            "unit": "ns/iter",
            "extra": "iterations: 6466\ncpu: 132966.84194246787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 129377.48392452257,
            "unit": "ns/iter",
            "extra": "iterations: 6625\ncpu: 129374.94339622659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 127756.95323204818,
            "unit": "ns/iter",
            "extra": "iterations: 6714\ncpu: 127757.4620196607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 254815.91898284,
            "unit": "ns/iter",
            "extra": "iterations: 3382\ncpu: 254807.95387344845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1876429.077227759,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1876366.336633665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1459679.9420970073,
            "unit": "ns/iter",
            "extra": "iterations: 639\ncpu: 1459618.3098591568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1456334.7254291254,
            "unit": "ns/iter",
            "extra": "iterations: 641\ncpu: 1456272.5429017174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1417248.0501519353,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1417165.8054711309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 837128.8618834844,
            "unit": "ns/iter",
            "extra": "iterations: 1115\ncpu: 837085.3811659189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1410012.1374622658,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1409956.7975830783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5137301.120000757,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5137231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3136539.5270272745,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3136355.4054054217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 26344.06401183602,
            "unit": "ns/iter",
            "extra": "iterations: 31088\ncpu: 26342.61773031384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 126698.92637947138,
            "unit": "ns/iter",
            "extra": "iterations: 6778\ncpu: 126693.09530835085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 106208.28553770845,
            "unit": "ns/iter",
            "extra": "iterations: 8090\ncpu: 106199.76514215079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 104022.64131227434,
            "unit": "ns/iter",
            "extra": "iterations: 8230\ncpu: 104017.04738760581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 95907.53518912321,
            "unit": "ns/iter",
            "extra": "iterations: 8909\ncpu: 95903.58064878211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 227738.01282724028,
            "unit": "ns/iter",
            "extra": "iterations: 3820\ncpu: 227726.0994764411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1822596.3138399704,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1822464.912280704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1421920.4468086571,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1421867.477203644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1409459.8139184278,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1409398.9409984907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1398556.6646707018,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1398513.6227544833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 780488.777777773,
            "unit": "ns/iter",
            "extra": "iterations: 1206\ncpu: 780452.2388059705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1371121.3744492782,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1371060.0587371609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2917.402975847224,
            "unit": "ns/iter",
            "extra": "iterations: 241007\ncpu: 2917.216927309137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19202.526200393204,
            "unit": "ns/iter",
            "extra": "iterations: 36488\ncpu: 19201.71015128258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13800.084866352461,
            "unit": "ns/iter",
            "extra": "iterations: 50880\ncpu: 13799.46344339632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15158.56602998105,
            "unit": "ns/iter",
            "extra": "iterations: 46229\ncpu: 15157.686733435614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11477.922483792445,
            "unit": "ns/iter",
            "extra": "iterations: 61084\ncpu: 11477.704472529664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 76553.05013683843,
            "unit": "ns/iter",
            "extra": "iterations: 9135\ncpu: 76547.6518883415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 127811.69316724416,
            "unit": "ns/iter",
            "extra": "iterations: 5459\ncpu: 127805.12914453229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 31156.886108635746,
            "unit": "ns/iter",
            "extra": "iterations: 22460\ncpu: 31154.287622440082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30393.39340057651,
            "unit": "ns/iter",
            "extra": "iterations: 23002\ncpu: 30391.644204851924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30167.898946730485,
            "unit": "ns/iter",
            "extra": "iterations: 23166\ncpu: 30165.67814901166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 62314.072911127434,
            "unit": "ns/iter",
            "extra": "iterations: 11274\ncpu: 62311.300337058805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 58134.81017174382,
            "unit": "ns/iter",
            "extra": "iterations: 12053\ncpu: 58132.15796897052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22203.333534112124,
            "unit": "ns/iter",
            "extra": "iterations: 31544\ncpu: 22202.52662947011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 114049.85576922199,
            "unit": "ns/iter",
            "extra": "iterations: 6136\ncpu: 114047.96284224329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 90396.69488899778,
            "unit": "ns/iter",
            "extra": "iterations: 7748\ncpu: 90389.31337119226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 89359.83417869698,
            "unit": "ns/iter",
            "extra": "iterations: 7689\ncpu: 89355.75497463948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 89740.7733042817,
            "unit": "ns/iter",
            "extra": "iterations: 7799\ncpu: 89737.49198615168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 135783.138273046,
            "unit": "ns/iter",
            "extra": "iterations: 5142\ncpu: 135780.59120964515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 541453.1068111216,
            "unit": "ns/iter",
            "extra": "iterations: 1292\ncpu: 541426.934984525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 439905.4291091538,
            "unit": "ns/iter",
            "extra": "iterations: 1594\ncpu: 439907.8419071543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 439121.30807766336,
            "unit": "ns/iter",
            "extra": "iterations: 1597\ncpu: 439108.8290544835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 432743.46134814585,
            "unit": "ns/iter",
            "extra": "iterations: 1617\ncpu: 432717.068645639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 278488.4580182996,
            "unit": "ns/iter",
            "extra": "iterations: 2513\ncpu: 278485.67449263606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 430592.79051137663,
            "unit": "ns/iter",
            "extra": "iterations: 1623\ncpu: 430573.0745533001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22468.48448878839,
            "unit": "ns/iter",
            "extra": "iterations: 31171\ncpu: 22467.954188187676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 114122.37985378702,
            "unit": "ns/iter",
            "extra": "iterations: 6155\ncpu: 114114.1023558072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 93157.9143730961,
            "unit": "ns/iter",
            "extra": "iterations: 7521\ncpu: 93157.10676771715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 92519.60456825659,
            "unit": "ns/iter",
            "extra": "iterations: 7574\ncpu: 92518.56350673377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 91193.65334547123,
            "unit": "ns/iter",
            "extra": "iterations: 7682\ncpu: 91189.41681853672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 136026.0068014067,
            "unit": "ns/iter",
            "extra": "iterations: 5146\ncpu: 136024.29071123083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 536346.2154908482,
            "unit": "ns/iter",
            "extra": "iterations: 1304\ncpu: 536313.0368098103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 439408.13232512743,
            "unit": "ns/iter",
            "extra": "iterations: 1587\ncpu: 439403.52867044165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 442462.70517678605,
            "unit": "ns/iter",
            "extra": "iterations: 1584\ncpu: 442435.73232323263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 432889.78950619075,
            "unit": "ns/iter",
            "extra": "iterations: 1620\ncpu: 432886.11111111625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 276236.558185398,
            "unit": "ns/iter",
            "extra": "iterations: 2535\ncpu: 276230.96646942565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 431827.4536464828,
            "unit": "ns/iter",
            "extra": "iterations: 1618\ncpu: 431820.88998763746 ns\nthreads: 1"
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
        "date": 1702503237567,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7617.80544404103,
            "unit": "ns/iter",
            "extra": "iterations: 91917\ncpu: 7617.821512886626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54319.278900004516,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54316.23 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 100675.0389655954,
            "unit": "ns/iter",
            "extra": "iterations: 8546\ncpu: 100674.01123332555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 146284.13456645166,
            "unit": "ns/iter",
            "extra": "iterations: 5893\ncpu: 146282.28406584085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 192838.47300600578,
            "unit": "ns/iter",
            "extra": "iterations: 4501\ncpu: 192824.72783825826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 236074.12033759084,
            "unit": "ns/iter",
            "extra": "iterations: 3673\ncpu: 236059.32480261364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 283488.1949787966,
            "unit": "ns/iter",
            "extra": "iterations: 3067\ncpu: 283466.5797195958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 329460.4939394176,
            "unit": "ns/iter",
            "extra": "iterations: 2640\ncpu: 329438.33333333343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 374201.0318965793,
            "unit": "ns/iter",
            "extra": "iterations: 2320\ncpu: 374179.8706896546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6223.340402489374,
            "unit": "ns/iter",
            "extra": "iterations: 112649\ncpu: 6222.864827916804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5113.196379945804,
            "unit": "ns/iter",
            "extra": "iterations: 137346\ncpu: 5112.83182619078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5100.413477360578,
            "unit": "ns/iter",
            "extra": "iterations: 136733\ncpu: 5100.313750155404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5164.257384588114,
            "unit": "ns/iter",
            "extra": "iterations: 135688\ncpu: 5164.194328164613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8349.623281941043,
            "unit": "ns/iter",
            "extra": "iterations: 83670\ncpu: 8349.530297597697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29216.660995702052,
            "unit": "ns/iter",
            "extra": "iterations: 27920\ncpu: 29214.770773639004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 143232.56125687785,
            "unit": "ns/iter",
            "extra": "iterations: 5983\ncpu: 143230.31923784054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 107856.92475423068,
            "unit": "ns/iter",
            "extra": "iterations: 7934\ncpu: 107853.07537181745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 108176.69862139088,
            "unit": "ns/iter",
            "extra": "iterations: 7834\ncpu: 108172.42787847847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 100366.64920971914,
            "unit": "ns/iter",
            "extra": "iterations: 8478\ncpu: 100360.28544468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 227076.70841889633,
            "unit": "ns/iter",
            "extra": "iterations: 3896\ncpu: 227061.6529774124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1820646.4039216298,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1820542.9411764701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1441718.0703363856,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1441623.2415902116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1419333.1207951917,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1419240.5198776769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1418975.6534351683,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1418907.633587788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 790539.048759617,
            "unit": "ns/iter",
            "extra": "iterations: 1169\ncpu: 790491.9589392636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1376662.4266667417,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1376637.481481482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38135.91927527797,
            "unit": "ns/iter",
            "extra": "iterations: 21691\ncpu: 38135.32801622787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 167975.16242662014,
            "unit": "ns/iter",
            "extra": "iterations: 5110\ncpu: 167968.49315068524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 134983.67748001678,
            "unit": "ns/iter",
            "extra": "iterations: 6381\ncpu: 134980.78671054682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 138453.61660205128,
            "unit": "ns/iter",
            "extra": "iterations: 6192\ncpu: 138451.03359173113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 132250.1291615244,
            "unit": "ns/iter",
            "extra": "iterations: 6488\ncpu: 132248.9827373615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 247875.03050359082,
            "unit": "ns/iter",
            "extra": "iterations: 3475\ncpu: 247868.1438848916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1853669.9661353396,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1853598.605577689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1481247.4171973518,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1481210.0318471307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1458457.82343752,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1458409.3749999916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1449571.2130636794,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1449479.0046656295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 842862.5631969356,
            "unit": "ns/iter",
            "extra": "iterations: 1076\ncpu: 842823.7918215648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1417537.8625952904,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1417474.9618320644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5072645.99999985,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5072545.99999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3169068.8435375495,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3168895.9183673603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27865.74274027314,
            "unit": "ns/iter",
            "extra": "iterations: 29581\ncpu: 27865.40008789444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 138712.42529848314,
            "unit": "ns/iter",
            "extra": "iterations: 6198\ncpu: 138710.4872539528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 112739.72647674574,
            "unit": "ns/iter",
            "extra": "iterations: 7652\ncpu: 112738.35598536294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 111184.6008840451,
            "unit": "ns/iter",
            "extra": "iterations: 7692\ncpu: 111179.57618304776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 100914.21583235427,
            "unit": "ns/iter",
            "extra": "iterations: 8590\ncpu: 100910.26775320162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 224938.12917308204,
            "unit": "ns/iter",
            "extra": "iterations: 3894\ncpu: 224925.19260400484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1840800.1893490818,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1840747.3372781035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1436320.2285276523,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1436279.6012269848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1422154.9771688746,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1422107.0015220703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1418128.8723404016,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1418084.8024316123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 801713.3240033654,
            "unit": "ns/iter",
            "extra": "iterations: 1179\ncpu: 801694.5716709107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1387665.724702492,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1387631.9940476196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2945.685896208467,
            "unit": "ns/iter",
            "extra": "iterations: 240290\ncpu: 2945.616962836591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18771.939019153095,
            "unit": "ns/iter",
            "extra": "iterations: 37274\ncpu: 18771.26683479109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14215.667383934699,
            "unit": "ns/iter",
            "extra": "iterations: 49261\ncpu: 14215.49704634495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14268.425769679308,
            "unit": "ns/iter",
            "extra": "iterations: 48949\ncpu: 14268.038162168661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11219.188482009757,
            "unit": "ns/iter",
            "extra": "iterations: 62563\ncpu: 11218.956891453468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 70783.40521133231,
            "unit": "ns/iter",
            "extra": "iterations: 9748\ncpu: 70780.43701272024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 126975.5754939177,
            "unit": "ns/iter",
            "extra": "iterations: 5517\ncpu: 126971.37937284826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30442.951958770205,
            "unit": "ns/iter",
            "extra": "iterations: 22897\ncpu: 30442.16272874164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30715.566719270446,
            "unit": "ns/iter",
            "extra": "iterations: 22812\ncpu: 30714.49675609341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30033.86865479516,
            "unit": "ns/iter",
            "extra": "iterations: 23305\ncpu: 30032.898519630795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 63748.40850327143,
            "unit": "ns/iter",
            "extra": "iterations: 10984\ncpu: 63746.44027676644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 57993.42744676142,
            "unit": "ns/iter",
            "extra": "iterations: 12067\ncpu: 57993.54437722702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22164.483761174346,
            "unit": "ns/iter",
            "extra": "iterations: 31437\ncpu: 22164.109170722444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 116488.88405315092,
            "unit": "ns/iter",
            "extra": "iterations: 6020\ncpu: 116485.2823920267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 90884.23535524041,
            "unit": "ns/iter",
            "extra": "iterations: 7699\ncpu: 90881.10144174611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 90698.938635188,
            "unit": "ns/iter",
            "extra": "iterations: 7708\ncpu: 90695.64089257969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 89885.95528141572,
            "unit": "ns/iter",
            "extra": "iterations: 7782\ncpu: 89879.52968388634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 136045.99611048077,
            "unit": "ns/iter",
            "extra": "iterations: 5142\ncpu: 136037.18397510878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 542555.9474091626,
            "unit": "ns/iter",
            "extra": "iterations: 1293\ncpu: 542550.0386697586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 447503.44030807796,
            "unit": "ns/iter",
            "extra": "iterations: 1558\ncpu: 447471.6944801028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 448936.2667946346,
            "unit": "ns/iter",
            "extra": "iterations: 1563\ncpu: 448909.9168266149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 442101.34343433543,
            "unit": "ns/iter",
            "extra": "iterations: 1584\ncpu: 442069.5075757531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 281450.69175048004,
            "unit": "ns/iter",
            "extra": "iterations: 2485\ncpu: 281431.0261569428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 437123.8509045592,
            "unit": "ns/iter",
            "extra": "iterations: 1603\ncpu: 437115.4086088544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22867.643669121822,
            "unit": "ns/iter",
            "extra": "iterations: 30525\ncpu: 22867.105651105492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 111875.67260187371,
            "unit": "ns/iter",
            "extra": "iterations: 6234\ncpu: 111866.21751684255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 92770.27403973891,
            "unit": "ns/iter",
            "extra": "iterations: 7550\ncpu: 92760.21192053067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 91632.87287026126,
            "unit": "ns/iter",
            "extra": "iterations: 7630\ncpu: 91631.52031454873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 91303.37046699096,
            "unit": "ns/iter",
            "extra": "iterations: 7666\ncpu: 91300.70440907938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 136430.85201092088,
            "unit": "ns/iter",
            "extra": "iterations: 5122\ncpu: 136424.7169074569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 531818.1545454832,
            "unit": "ns/iter",
            "extra": "iterations: 1320\ncpu: 531789.6212121252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 434548.48727499234,
            "unit": "ns/iter",
            "extra": "iterations: 1611\ncpu: 434541.7132216024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 443098.34686113975,
            "unit": "ns/iter",
            "extra": "iterations: 1577\ncpu: 443099.36588459404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 437117.16510322073,
            "unit": "ns/iter",
            "extra": "iterations: 1599\ncpu: 437086.55409630825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 278693.0878378241,
            "unit": "ns/iter",
            "extra": "iterations: 2516\ncpu: 278672.6550079491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 432178.95474270685,
            "unit": "ns/iter",
            "extra": "iterations: 1613\ncpu: 432136.45381277456 ns\nthreads: 1"
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
        "date": 1705574936935,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7991.423977343292,
            "unit": "ns/iter",
            "extra": "iterations: 87566\ncpu: 7990.901719845602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57213.00760000076,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57212.55999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 106079.63966860721,
            "unit": "ns/iter",
            "extra": "iterations: 8087\ncpu: 106074.62594287127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 153605.2517844394,
            "unit": "ns/iter",
            "extra": "iterations: 5604\ncpu: 153600.42826552462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 202511.9150633351,
            "unit": "ns/iter",
            "extra": "iterations: 4262\ncpu: 202494.97888315356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 248372.58656328786,
            "unit": "ns/iter",
            "extra": "iterations: 3483\ncpu: 248357.9385587138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 295938.04199386324,
            "unit": "ns/iter",
            "extra": "iterations: 2929\ncpu: 295924.78661659267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 343759.35055206576,
            "unit": "ns/iter",
            "extra": "iterations: 2536\ncpu: 343737.3817034702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 389687.54516854766,
            "unit": "ns/iter",
            "extra": "iterations: 2225\ncpu: 389669.57303370774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6422.154039474662,
            "unit": "ns/iter",
            "extra": "iterations: 108628\ncpu: 6421.713554516336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5310.851736140081,
            "unit": "ns/iter",
            "extra": "iterations: 131873\ncpu: 5310.569259818164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5251.3976785885925,
            "unit": "ns/iter",
            "extra": "iterations: 133281\ncpu: 5251.096555397989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5293.106999456776,
            "unit": "ns/iter",
            "extra": "iterations: 132496\ncpu: 5293.028468783956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8405.655008159256,
            "unit": "ns/iter",
            "extra": "iterations: 83344\ncpu: 8405.17253791515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 28858.92081840824,
            "unit": "ns/iter",
            "extra": "iterations: 28201\ncpu: 28857.370306017543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 138280.51455840224,
            "unit": "ns/iter",
            "extra": "iterations: 6182\ncpu: 138269.99352960222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 104142.12098344961,
            "unit": "ns/iter",
            "extra": "iterations: 8216\ncpu: 104136.86708860756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 105243.32314894065,
            "unit": "ns/iter",
            "extra": "iterations: 8117\ncpu: 105238.54872489822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 98923.18373284677,
            "unit": "ns/iter",
            "extra": "iterations: 8594\ncpu: 98918.419827787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 214954.22940460034,
            "unit": "ns/iter",
            "extra": "iterations: 4115\ncpu: 214941.14216281913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1866403.0866934736,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1866284.4758064544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1461715.6677165376,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1461621.5748031544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1468212.9714739884,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1468131.854199685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1444396.6323987767,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1444304.6728971973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 799319.5797227112,
            "unit": "ns/iter",
            "extra": "iterations: 1154\ncpu: 799284.7487001745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1416196.8580152767,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1416098.9312977095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38023.09540081263,
            "unit": "ns/iter",
            "extra": "iterations: 21656\ncpu: 38020.959549316634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 172717.65746298217,
            "unit": "ns/iter",
            "extra": "iterations: 4998\ncpu: 172709.16366546624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 135009.40598557063,
            "unit": "ns/iter",
            "extra": "iterations: 6382\ncpu: 135002.4130366655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 133882.04699984103,
            "unit": "ns/iter",
            "extra": "iterations: 6383\ncpu: 133875.13708287675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 128659.5569355027,
            "unit": "ns/iter",
            "extra": "iterations: 6683\ncpu: 128657.38440820038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 240780.3642163773,
            "unit": "ns/iter",
            "extra": "iterations: 3605\ncpu: 240768.95977808582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1916296.4045175074,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1916190.554414776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1497460.616128922,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1497395.4838709694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1503340.5428109712,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1503256.3812600982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1481365.8769968261,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1481248.4025559109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 843176.87591246,
            "unit": "ns/iter",
            "extra": "iterations: 1096\ncpu: 843128.4671532852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1453014.2225706736,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1452937.3040752371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5119645.209999817,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5119535.000000042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3054640.442623108,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3054429.8360655797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27739.871166883735,
            "unit": "ns/iter",
            "extra": "iterations: 29643\ncpu: 27738.54872988559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 131134.24923780488,
            "unit": "ns/iter",
            "extra": "iterations: 6560\ncpu: 131129.2225609751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 105672.25273107323,
            "unit": "ns/iter",
            "extra": "iterations: 8147\ncpu: 105665.12826807339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 109438.9189983411,
            "unit": "ns/iter",
            "extra": "iterations: 7827\ncpu: 109432.06848089887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 96206.89004642399,
            "unit": "ns/iter",
            "extra": "iterations: 8831\ncpu: 96201.5173819502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 209770.95190672087,
            "unit": "ns/iter",
            "extra": "iterations: 4117\ncpu: 209755.42871022597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1874003.0824950722,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1873917.907444671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1477811.6930380051,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1477753.1645569617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1471024.1772152735,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1470934.4936708908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1460744.23040752,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1460661.5987460737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 812528.7116725118,
            "unit": "ns/iter",
            "extra": "iterations: 1148\ncpu: 812481.7073170749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1419077.2461773716,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1419054.2813455632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2952.1858790166807,
            "unit": "ns/iter",
            "extra": "iterations: 239091\ncpu: 2952.077660806958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18835.30831135122,
            "unit": "ns/iter",
            "extra": "iterations: 37154\ncpu: 18834.93836464454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14827.330104413031,
            "unit": "ns/iter",
            "extra": "iterations: 49036\ncpu: 14826.812953748242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14877.700793429687,
            "unit": "ns/iter",
            "extra": "iterations: 47011\ncpu: 14876.879879177179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11345.413006893377,
            "unit": "ns/iter",
            "extra": "iterations: 61798\ncpu: 11345.088837826557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 71569.7650391424,
            "unit": "ns/iter",
            "extra": "iterations: 9708\ncpu: 71565.71899464383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 130767.92879835122,
            "unit": "ns/iter",
            "extra": "iterations: 5351\ncpu: 130765.42702298694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 31482.54902401851,
            "unit": "ns/iter",
            "extra": "iterations: 22234\ncpu: 31481.150490240263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 31579.298832899305,
            "unit": "ns/iter",
            "extra": "iterations: 22106\ncpu: 31578.381434904546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 31414.920130945287,
            "unit": "ns/iter",
            "extra": "iterations: 22299\ncpu: 31413.516301179516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 63344.42084312907,
            "unit": "ns/iter",
            "extra": "iterations: 11054\ncpu: 63343.269404740095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 59310.99881576635,
            "unit": "ns/iter",
            "extra": "iterations: 11822\ncpu: 59309.01708678719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22340.189452127048,
            "unit": "ns/iter",
            "extra": "iterations: 31248\ncpu: 22339.5705325141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 119013.42861914153,
            "unit": "ns/iter",
            "extra": "iterations: 5989\ncpu: 119010.23543162434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 92969.02997346416,
            "unit": "ns/iter",
            "extra": "iterations: 7540\ncpu: 92963.81962864744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 92063.90941362498,
            "unit": "ns/iter",
            "extra": "iterations: 7606\ncpu: 92060.91243754883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 91574.38628630961,
            "unit": "ns/iter",
            "extra": "iterations: 7642\ncpu: 91568.67312221979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 137145.47660990545,
            "unit": "ns/iter",
            "extra": "iterations: 5109\ncpu: 137142.14131924135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 568156.4561688285,
            "unit": "ns/iter",
            "extra": "iterations: 1232\ncpu: 568139.6915584417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 466569.1554369396,
            "unit": "ns/iter",
            "extra": "iterations: 1499\ncpu: 466560.17344896286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 463866.18115464377,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 463851.82481751515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 461875.40435359057,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 461855.73878628167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 288165.9308926576,
            "unit": "ns/iter",
            "extra": "iterations: 2431\ncpu: 288152.5298231203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 451917.8151260528,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 451902.7795733754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22628.813794438473,
            "unit": "ns/iter",
            "extra": "iterations: 30998\ncpu: 22627.92438221832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 115328.40538308653,
            "unit": "ns/iter",
            "extra": "iterations: 6056\ncpu: 115319.7159841477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 93960.20611915867,
            "unit": "ns/iter",
            "extra": "iterations: 7452\ncpu: 93952.84487385847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 93103.23666355934,
            "unit": "ns/iter",
            "extra": "iterations: 7517\ncpu: 93098.00452308061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 92899.93985661624,
            "unit": "ns/iter",
            "extra": "iterations: 7532\ncpu: 92895.41954328082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 137659.0604145991,
            "unit": "ns/iter",
            "extra": "iterations: 5065\ncpu: 137653.38598222958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 553070.7612648049,
            "unit": "ns/iter",
            "extra": "iterations: 1265\ncpu: 553061.1067193687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 458160.7325428455,
            "unit": "ns/iter",
            "extra": "iterations: 1518\ncpu: 458138.40579710563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 465707.1767441601,
            "unit": "ns/iter",
            "extra": "iterations: 1505\ncpu: 465688.43853820424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 455339.5019556632,
            "unit": "ns/iter",
            "extra": "iterations: 1534\ncpu: 455313.49413298396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 288983.8472049672,
            "unit": "ns/iter",
            "extra": "iterations: 2415\ncpu: 288963.47826087277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 449972.2582098881,
            "unit": "ns/iter",
            "extra": "iterations: 1553\ncpu: 449944.0437862162 ns\nthreads: 1"
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
        "date": 1705772711949,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7654.3924009130305,
            "unit": "ns/iter",
            "extra": "iterations: 91511\ncpu: 7654.456841254057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55249.90650000063,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55248.92 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 101380.66926253506,
            "unit": "ns/iter",
            "extra": "iterations: 8475\ncpu: 101379.1150442478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 147954.01593557323,
            "unit": "ns/iter",
            "extra": "iterations: 5836\ncpu: 147950.25702535984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 193752.1943138658,
            "unit": "ns/iter",
            "extra": "iterations: 4467\ncpu: 193750.83948959026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 237981.0192519484,
            "unit": "ns/iter",
            "extra": "iterations: 3636\ncpu: 237977.9427942794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 286683.93302542326,
            "unit": "ns/iter",
            "extra": "iterations: 3031\ncpu: 286678.5879247773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 333106.1345565992,
            "unit": "ns/iter",
            "extra": "iterations: 2616\ncpu: 333105.3134556577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 378847.74348956934,
            "unit": "ns/iter",
            "extra": "iterations: 2304\ncpu: 378833.4201388887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6247.815774225798,
            "unit": "ns/iter",
            "extra": "iterations: 112183\ncpu: 6247.804925880036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5081.3067717222675,
            "unit": "ns/iter",
            "extra": "iterations: 137705\ncpu: 5081.204749282887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5118.246207744052,
            "unit": "ns/iter",
            "extra": "iterations: 136726\ncpu: 5118.088732208939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5054.450915153154,
            "unit": "ns/iter",
            "extra": "iterations: 139157\ncpu: 5054.403299869932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8228.562605219355,
            "unit": "ns/iter",
            "extra": "iterations: 85536\ncpu: 8228.538860830537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26995.875029736748,
            "unit": "ns/iter",
            "extra": "iterations: 29423\ncpu: 26995.160248784967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 141072.04197530018,
            "unit": "ns/iter",
            "extra": "iterations: 6075\ncpu: 141073.11934156375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 107934.24134892703,
            "unit": "ns/iter",
            "extra": "iterations: 7947\ncpu: 107933.97508493776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 108672.8571064426,
            "unit": "ns/iter",
            "extra": "iterations: 7845\ncpu: 108672.91268323752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 100358.66027074045,
            "unit": "ns/iter",
            "extra": "iterations: 8495\ncpu: 100358.62271924691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 225186.7425088824,
            "unit": "ns/iter",
            "extra": "iterations: 3938\ncpu: 225184.35754189885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1817347.1751969296,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1817309.2519685086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1404965.8558421535,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1404949.3171471944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1429078.4584615652,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1429071.0769230777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1395102.9790104635,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1395081.4092953526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 771876.6025103924,
            "unit": "ns/iter",
            "extra": "iterations: 1195\ncpu: 771860.8368200848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1372163.4726734543,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1372138.404726739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 35603.8852657022,
            "unit": "ns/iter",
            "extra": "iterations: 23184\ncpu: 35602.66994478951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 181476.43276079043,
            "unit": "ns/iter",
            "extra": "iterations: 4774\ncpu: 181473.35567658124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 138122.9693714035,
            "unit": "ns/iter",
            "extra": "iterations: 6236\ncpu: 138120.5420141115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 136504.76548111264,
            "unit": "ns/iter",
            "extra": "iterations: 6298\ncpu: 136501.93712289643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 132467.33776060908,
            "unit": "ns/iter",
            "extra": "iterations: 6475\ncpu: 132465.14285714296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 246988.90924658417,
            "unit": "ns/iter",
            "extra": "iterations: 3504\ncpu: 246988.24200913165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1872523.60764578,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1872483.5010060396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1448925.7207488436,
            "unit": "ns/iter",
            "extra": "iterations: 641\ncpu: 1448903.5881435203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1455684.8656249954,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1455645.6250000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1416459.7108067202,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1416417.0471841677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 822991.2564102968,
            "unit": "ns/iter",
            "extra": "iterations: 1131\ncpu: 822959.1511936346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1408207.6134969052,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1408169.1717791478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5098063.8299995465,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5097819.000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3170663.35034011,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3170547.619047624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25661.70156871448,
            "unit": "ns/iter",
            "extra": "iterations: 31937\ncpu: 25661.33011867118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 139855.4283856419,
            "unit": "ns/iter",
            "extra": "iterations: 6151\ncpu: 139851.1298975786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 108748.35091509622,
            "unit": "ns/iter",
            "extra": "iterations: 7868\ncpu: 108745.37366548087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 110480.18108419355,
            "unit": "ns/iter",
            "extra": "iterations: 7803\ncpu: 110476.80379341217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 99609.6280615782,
            "unit": "ns/iter",
            "extra": "iterations: 8574\ncpu: 99607.31280615841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 220438.11255081676,
            "unit": "ns/iter",
            "extra": "iterations: 3936\ncpu: 220431.3008130088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1841709.8162056953,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1841680.8300395287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1414959.5863636588,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1414901.363636365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1423273.3440366974,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1423244.9541284437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1402108.9517346474,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1402047.2096530905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 776586.4753289488,
            "unit": "ns/iter",
            "extra": "iterations: 1216\ncpu: 776579.851973687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1377426.2144970393,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1377386.2426035467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2923.838023673353,
            "unit": "ns/iter",
            "extra": "iterations: 239677\ncpu: 2923.7469594495915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19248.387046205957,
            "unit": "ns/iter",
            "extra": "iterations: 36360\ncpu: 19247.82728272834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15426.431956699616,
            "unit": "ns/iter",
            "extra": "iterations: 45449\ncpu: 15426.10618495462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15014.765757837491,
            "unit": "ns/iter",
            "extra": "iterations: 46580\ncpu: 15014.218548733452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11349.188974333567,
            "unit": "ns/iter",
            "extra": "iterations: 61638\ncpu: 11348.82702229148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 73209.62395832945,
            "unit": "ns/iter",
            "extra": "iterations: 9600\ncpu: 73209.14583333356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 127537.39014598966,
            "unit": "ns/iter",
            "extra": "iterations: 5480\ncpu: 127535.76642335726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30848.726516422914,
            "unit": "ns/iter",
            "extra": "iterations: 22718\ncpu: 30848.965577955558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 31221.739008420685,
            "unit": "ns/iter",
            "extra": "iterations: 22449\ncpu: 31220.976435476037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30431.809128086825,
            "unit": "ns/iter",
            "extra": "iterations: 22984\ncpu: 30431.7003132614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 63036.54764679377,
            "unit": "ns/iter",
            "extra": "iterations: 11155\ncpu: 63033.71582250143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 58219.64649734058,
            "unit": "ns/iter",
            "extra": "iterations: 12048\ncpu: 58218.301792828766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21757.661639872564,
            "unit": "ns/iter",
            "extra": "iterations: 32161\ncpu: 21756.950965455188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 112525.02445302729,
            "unit": "ns/iter",
            "extra": "iterations: 6216\ncpu: 112521.44465894393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 92119.94706422814,
            "unit": "ns/iter",
            "extra": "iterations: 7613\ncpu: 92116.45868908432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 91582.56913015315,
            "unit": "ns/iter",
            "extra": "iterations: 7645\ncpu: 91580.1177240028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 90340.95843551743,
            "unit": "ns/iter",
            "extra": "iterations: 7747\ncpu: 90339.96385697619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 132913.4851031307,
            "unit": "ns/iter",
            "extra": "iterations: 5236\ncpu: 132907.86860198688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 549912.6132075704,
            "unit": "ns/iter",
            "extra": "iterations: 1272\ncpu: 549895.2830188761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 450642.631612863,
            "unit": "ns/iter",
            "extra": "iterations: 1550\ncpu: 450629.16129032534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 450942.4096462903,
            "unit": "ns/iter",
            "extra": "iterations: 1555\ncpu: 450924.88745980983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 442215.7871130638,
            "unit": "ns/iter",
            "extra": "iterations: 1583\ncpu: 442209.22299430874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 283895.8559287535,
            "unit": "ns/iter",
            "extra": "iterations: 2471\ncpu: 283892.14892756054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 440559.7313997043,
            "unit": "ns/iter",
            "extra": "iterations: 1586\ncpu: 440553.0264817125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22153.052623252013,
            "unit": "ns/iter",
            "extra": "iterations: 31602\ncpu: 22153.20549332302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 116717.99916625214,
            "unit": "ns/iter",
            "extra": "iterations: 5997\ncpu: 116716.32482907947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 93069.19033071508,
            "unit": "ns/iter",
            "extra": "iterations: 7529\ncpu: 93068.17638464567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 93072.38634249762,
            "unit": "ns/iter",
            "extra": "iterations: 7527\ncpu: 93070.24046764888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 91885.45799921227,
            "unit": "ns/iter",
            "extra": "iterations: 7607\ncpu: 91883.3311423681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 133025.88939221008,
            "unit": "ns/iter",
            "extra": "iterations: 5298\ncpu: 133025.7833144589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 540464.2947530928,
            "unit": "ns/iter",
            "extra": "iterations: 1296\ncpu: 540455.0154320995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 442656.3335463391,
            "unit": "ns/iter",
            "extra": "iterations: 1565\ncpu: 442657.69968050584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 453126.3117304056,
            "unit": "ns/iter",
            "extra": "iterations: 1543\ncpu: 453122.2942320088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 441858.17202265863,
            "unit": "ns/iter",
            "extra": "iterations: 1587\ncpu: 441850.5986137313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 280391.4382022167,
            "unit": "ns/iter",
            "extra": "iterations: 2492\ncpu: 280386.6773675795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 437308.0805537951,
            "unit": "ns/iter",
            "extra": "iterations: 1589\ncpu: 437311.1390811825 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}