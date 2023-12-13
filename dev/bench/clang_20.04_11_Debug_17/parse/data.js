window.BENCHMARK_DATA = {
  "lastUpdate": 1702492195372,
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
      }
    ]
  }
}