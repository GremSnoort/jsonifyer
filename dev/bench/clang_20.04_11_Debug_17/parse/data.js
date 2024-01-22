window.BENCHMARK_DATA = {
  "lastUpdate": 1705961343358,
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
        "date": 1705774366684,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7615.368662140583,
            "unit": "ns/iter",
            "extra": "iterations: 91908\ncpu: 7615.137964051008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55233.84829999714,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55232.27 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 101617.75978646734,
            "unit": "ns/iter",
            "extra": "iterations: 8430\ncpu: 101614.35349940688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 147650.6115744648,
            "unit": "ns/iter",
            "extra": "iterations: 5875\ncpu: 147646.5191489361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 193487.92383292297,
            "unit": "ns/iter",
            "extra": "iterations: 4477\ncpu: 193476.70314943042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 240051.1572100625,
            "unit": "ns/iter",
            "extra": "iterations: 3613\ncpu: 240041.12925546613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 284940.83815790294,
            "unit": "ns/iter",
            "extra": "iterations: 3040\ncpu: 284933.4210526314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 337160.04446977604,
            "unit": "ns/iter",
            "extra": "iterations: 2631\ncpu: 337143.557582668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 375532.2262110818,
            "unit": "ns/iter",
            "extra": "iterations: 2312\ncpu: 375506.22837370256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6314.583914248126,
            "unit": "ns/iter",
            "extra": "iterations: 110458\ncpu: 6314.170091799612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5221.239597666715,
            "unit": "ns/iter",
            "extra": "iterations: 133720\ncpu: 5220.91758899193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5175.341344695846,
            "unit": "ns/iter",
            "extra": "iterations: 135183\ncpu: 5175.299408949355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5116.4111323055085,
            "unit": "ns/iter",
            "extra": "iterations: 136827\ncpu: 5116.056041570751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8357.882469762473,
            "unit": "ns/iter",
            "extra": "iterations: 83587\ncpu: 8357.357005275948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 27833.985000169883,
            "unit": "ns/iter",
            "extra": "iterations: 29267\ncpu: 27832.511019236674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 136603.21862995997,
            "unit": "ns/iter",
            "extra": "iterations: 6248\ncpu: 136587.1798975671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 105667.04833127905,
            "unit": "ns/iter",
            "extra": "iterations: 8090\ncpu: 105656.26699629173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 106174.27954319735,
            "unit": "ns/iter",
            "extra": "iterations: 8056\ncpu: 106166.68321747752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 99734.32362610771,
            "unit": "ns/iter",
            "extra": "iterations: 8516\ncpu: 99728.52278064808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 230499.2551205596,
            "unit": "ns/iter",
            "extra": "iterations: 3857\ncpu: 230486.54394607182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1815267.3945313059,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1815141.9921875051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1431003.123076817,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1430926.3076923063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1427657.146153846,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1427579.3846153836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1391901.450450451,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1391820.7207207258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 779035.6003373236,
            "unit": "ns/iter",
            "extra": "iterations: 1186\ncpu: 778973.1871838128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1376029.547477615,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1375923.8872403551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37158.77874079523,
            "unit": "ns/iter",
            "extra": "iterations: 22268\ncpu: 37156.74959583252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 176124.9763458254,
            "unit": "ns/iter",
            "extra": "iterations: 4904\ncpu: 176121.81892332793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 134516.84160425194,
            "unit": "ns/iter",
            "extra": "iterations: 6408\ncpu: 134510.19038701648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 132660.58572308606,
            "unit": "ns/iter",
            "extra": "iterations: 6486\ncpu: 132658.14061054616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 130539.14088356451,
            "unit": "ns/iter",
            "extra": "iterations: 6587\ncpu: 130533.79383634422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 255880.4241523047,
            "unit": "ns/iter",
            "extra": "iterations: 3362\ncpu: 255874.18203450317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1866508.5571142582,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1866405.6112224506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1474497.561014286,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1474484.1521394611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1461232.5054944737,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1461186.8131868157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1422458.4969419772,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1422357.3394495368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 819878.2075971254,
            "unit": "ns/iter",
            "extra": "iterations: 1132\ncpu: 819818.8162544171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1412021.9817905503,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1411923.9757207895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5057064.930000478,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5056921.000000046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2995760.1446943707,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2995636.6559485565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 26447.37324330573,
            "unit": "ns/iter",
            "extra": "iterations: 30953\ncpu: 26446.47368591083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 131523.76162701315,
            "unit": "ns/iter",
            "extra": "iterations: 6515\ncpu: 131522.79355333818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 106819.79895691082,
            "unit": "ns/iter",
            "extra": "iterations: 8053\ncpu: 106813.0882900779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 107611.22591153598,
            "unit": "ns/iter",
            "extra": "iterations: 7981\ncpu: 107605.56321262938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 98835.72716763026,
            "unit": "ns/iter",
            "extra": "iterations: 8650\ncpu: 98827.1560693641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 225722.55978120284,
            "unit": "ns/iter",
            "extra": "iterations: 3839\ncpu: 225713.102370409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1834201.8405512697,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1834050.9842519606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1437563.4699537845,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1437473.6517719575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1455822.487654352,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1455445.0617283937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1406188.5707832288,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1406153.4638554223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 785594.8974144581,
            "unit": "ns/iter",
            "extra": "iterations: 1199\ncpu: 785550.2919099256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1389299.0879285126,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1389248.882265278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3006.8239592161717,
            "unit": "ns/iter",
            "extra": "iterations: 239507\ncpu: 3006.628198758261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18972.155172881845,
            "unit": "ns/iter",
            "extra": "iterations: 36817\ncpu: 18971.458836950256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15418.262734996228,
            "unit": "ns/iter",
            "extra": "iterations: 45426\ncpu: 15417.910447761118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15450.63009404464,
            "unit": "ns/iter",
            "extra": "iterations: 45298\ncpu: 15450.527617113457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11364.260892832679,
            "unit": "ns/iter",
            "extra": "iterations: 61669\ncpu: 11363.398141692029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 76193.72659990811,
            "unit": "ns/iter",
            "extra": "iterations: 9188\ncpu: 76189.6713104048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 121931.5065880643,
            "unit": "ns/iter",
            "extra": "iterations: 5768\ncpu: 121925.98821081831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 31320.876978257264,
            "unit": "ns/iter",
            "extra": "iterations: 22305\ncpu: 31319.076440259974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30931.02552095663,
            "unit": "ns/iter",
            "extra": "iterations: 21355\ncpu: 30928.658393818587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30665.383007625875,
            "unit": "ns/iter",
            "extra": "iterations: 22822\ncpu: 30663.876960827136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 59040.091750845786,
            "unit": "ns/iter",
            "extra": "iterations: 11880\ncpu: 59037.8535353536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 57940.85933228516,
            "unit": "ns/iter",
            "extra": "iterations: 12071\ncpu: 57938.57178361359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22757.319439060917,
            "unit": "ns/iter",
            "extra": "iterations: 30948\ncpu: 22757.137779501005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 115618.76062602467,
            "unit": "ns/iter",
            "extra": "iterations: 6070\ncpu: 115610.97199341106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 92383.72023731052,
            "unit": "ns/iter",
            "extra": "iterations: 7585\ncpu: 92381.81938035517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 93562.32397233215,
            "unit": "ns/iter",
            "extra": "iterations: 7371\ncpu: 93553.83258716461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 92179.57631579423,
            "unit": "ns/iter",
            "extra": "iterations: 7600\ncpu: 92174.06578947313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 142178.9558704452,
            "unit": "ns/iter",
            "extra": "iterations: 4940\ncpu: 142171.86234817648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 544349.3253105503,
            "unit": "ns/iter",
            "extra": "iterations: 1288\ncpu: 544331.288819878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 454558.8930899389,
            "unit": "ns/iter",
            "extra": "iterations: 1534\ncpu: 454539.76531941973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 445474.28417041904,
            "unit": "ns/iter",
            "extra": "iterations: 1573\ncpu: 445444.183089637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 447142.0938697425,
            "unit": "ns/iter",
            "extra": "iterations: 1566\ncpu: 447114.04853128735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 289672.2945319052,
            "unit": "ns/iter",
            "extra": "iterations: 2414\ncpu: 289644.15907208045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 438989.89057559316,
            "unit": "ns/iter",
            "extra": "iterations: 1581\ncpu: 438953.51043643046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22450.90559923159,
            "unit": "ns/iter",
            "extra": "iterations: 31165\ncpu: 22449.18658751829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 119440.1372783052,
            "unit": "ns/iter",
            "extra": "iterations: 5864\ncpu: 119427.88199181456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 94144.49218960566,
            "unit": "ns/iter",
            "extra": "iterations: 7426\ncpu: 94138.14974414192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 93485.63506474976,
            "unit": "ns/iter",
            "extra": "iterations: 7489\ncpu: 93483.7361463474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 93411.14361915037,
            "unit": "ns/iter",
            "extra": "iterations: 7499\ncpu: 93409.32124283341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 145744.1210350537,
            "unit": "ns/iter",
            "extra": "iterations: 4792\ncpu: 145736.64440734792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 535159.556913656,
            "unit": "ns/iter",
            "extra": "iterations: 1309\ncpu: 535137.3567608872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 447486.0542438028,
            "unit": "ns/iter",
            "extra": "iterations: 1567\ncpu: 447475.6860242537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 448325.83621240396,
            "unit": "ns/iter",
            "extra": "iterations: 1563\ncpu: 448307.6135636667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 440944.6179066724,
            "unit": "ns/iter",
            "extra": "iterations: 1586\ncpu: 440928.81462800247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 287134.4274558518,
            "unit": "ns/iter",
            "extra": "iterations: 2433\ncpu: 287116.9338265506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 437744.1989956369,
            "unit": "ns/iter",
            "extra": "iterations: 1593\ncpu: 437734.90269930067 ns\nthreads: 1"
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
        "date": 1705777705840,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7834.598963300478,
            "unit": "ns/iter",
            "extra": "iterations: 89129\ncpu: 7834.075329017492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57104.44949999101,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57101.76999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 105483.89982792358,
            "unit": "ns/iter",
            "extra": "iterations: 8136\ncpu: 105480.19911504428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 152334.33993281782,
            "unit": "ns/iter",
            "extra": "iterations: 5657\ncpu: 152328.84921336398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 202633.3463517326,
            "unit": "ns/iter",
            "extra": "iterations: 4276\ncpu: 202627.36202058004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 249340.2548906678,
            "unit": "ns/iter",
            "extra": "iterations: 3476\ncpu: 249324.9712313004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 297496.05962987157,
            "unit": "ns/iter",
            "extra": "iterations: 2918\ncpu: 297484.03015764244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 346805.5101472463,
            "unit": "ns/iter",
            "extra": "iterations: 2513\ncpu: 346788.9375248706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 392774.4950406171,
            "unit": "ns/iter",
            "extra": "iterations: 2218\ncpu: 392760.6402164109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6416.790811840822,
            "unit": "ns/iter",
            "extra": "iterations: 109184\ncpu: 6416.398922919108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5208.824818766329,
            "unit": "ns/iter",
            "extra": "iterations: 134495\ncpu: 5208.544555559681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5288.280153172854,
            "unit": "ns/iter",
            "extra": "iterations: 132399\ncpu: 5288.285410010643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5266.641155424647,
            "unit": "ns/iter",
            "extra": "iterations: 132765\ncpu: 5266.553685082661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8495.20483213658,
            "unit": "ns/iter",
            "extra": "iterations: 82448\ncpu: 8494.768823986024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 27765.73018515306,
            "unit": "ns/iter",
            "extra": "iterations: 29435\ncpu: 27763.869543060977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 136621.99552644283,
            "unit": "ns/iter",
            "extra": "iterations: 6259\ncpu: 136615.0023965491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 105099.69912593687,
            "unit": "ns/iter",
            "extra": "iterations: 8123\ncpu: 105097.3285731872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 106792.17069825446,
            "unit": "ns/iter",
            "extra": "iterations: 8020\ncpu: 106786.95760598482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 99735.1735723696,
            "unit": "ns/iter",
            "extra": "iterations: 8423\ncpu: 99729.00391784366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 223599.3717884169,
            "unit": "ns/iter",
            "extra": "iterations: 3970\ncpu: 223584.45843828752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1885311.436105373,
            "unit": "ns/iter",
            "extra": "iterations: 493\ncpu: 1885251.9269776903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1480300.0942491419,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1480230.1916932932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1475440.3662421175,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1475374.6815286644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1446025.3224299669,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1445956.0747663525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 793415.4159519733,
            "unit": "ns/iter",
            "extra": "iterations: 1166\ncpu: 793400.9433962271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1420537.7059723071,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1420444.7166921918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36801.54035040451,
            "unit": "ns/iter",
            "extra": "iterations: 22317\ncpu: 36800.9230631357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 174422.9082438636,
            "unit": "ns/iter",
            "extra": "iterations: 4937\ncpu: 174420.3767470125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 136210.62275827845,
            "unit": "ns/iter",
            "extra": "iterations: 6301\ncpu: 136205.4118393904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 132018.989253915,
            "unit": "ns/iter",
            "extra": "iterations: 6514\ncpu: 132017.27049431988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 130763.37004135102,
            "unit": "ns/iter",
            "extra": "iterations: 6529\ncpu: 130761.00474804714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 249120.06476685492,
            "unit": "ns/iter",
            "extra": "iterations: 3474\ncpu: 249116.95451928666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1941755.6179540246,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1941682.4634655581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1531648.3234812776,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1531571.9211822716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1515904.2214983178,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1515837.2964169364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1492812.4951923431,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1492805.128205129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 829714.596239913,
            "unit": "ns/iter",
            "extra": "iterations: 1117\ncpu: 829713.7869292751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1464637.5707547173,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1464555.6603773574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5085012.44999934,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5084787.000000048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3125087.92617428,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3125070.134228192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 26426.20266786806,
            "unit": "ns/iter",
            "extra": "iterations: 31036\ncpu: 26425.850625080595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 133455.8806271425,
            "unit": "ns/iter",
            "extra": "iterations: 6442\ncpu: 133454.6569388389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 106695.2306357766,
            "unit": "ns/iter",
            "extra": "iterations: 8069\ncpu: 106691.72140290063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 108862.76366415658,
            "unit": "ns/iter",
            "extra": "iterations: 7849\ncpu: 108862.82328959148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 97697.7524049401,
            "unit": "ns/iter",
            "extra": "iterations: 8732\ncpu: 97696.80485570297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 219741.50076182807,
            "unit": "ns/iter",
            "extra": "iterations: 3938\ncpu: 219738.59827323517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1900032.4317718642,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1900013.4419551988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1492861.6985646419,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1492849.920255181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1474298.3886255869,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1474285.308056873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1454621.438569202,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1454593.6236391892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 799997.7868713185,
            "unit": "ns/iter",
            "extra": "iterations: 1173\ncpu: 799986.7007672606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1427809.4732005533,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1427805.5130168502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2897.0444243656193,
            "unit": "ns/iter",
            "extra": "iterations: 240161\ncpu: 2897.023663292541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18250.76213833104,
            "unit": "ns/iter",
            "extra": "iterations: 38329\ncpu: 18250.288293459304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14727.806789552546,
            "unit": "ns/iter",
            "extra": "iterations: 47632\ncpu: 14727.489922741028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15733.347632546564,
            "unit": "ns/iter",
            "extra": "iterations: 45154\ncpu: 15733.321521902795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11315.840620084677,
            "unit": "ns/iter",
            "extra": "iterations: 52767\ncpu: 11315.960733033897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 70701.08425093692,
            "unit": "ns/iter",
            "extra": "iterations: 9899\ncpu: 70701.81836549117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 130805.01778358598,
            "unit": "ns/iter",
            "extra": "iterations: 5342\ncpu: 130803.85623361965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 31756.937020737325,
            "unit": "ns/iter",
            "extra": "iterations: 22039\ncpu: 31756.604201642636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 31322.446378240853,
            "unit": "ns/iter",
            "extra": "iterations: 22351\ncpu: 31322.795400653205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 31120.30501089065,
            "unit": "ns/iter",
            "extra": "iterations: 22491\ncpu: 31120.65715174959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 63115.84012284038,
            "unit": "ns/iter",
            "extra": "iterations: 11071\ncpu: 63114.32571583415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 59397.65498560826,
            "unit": "ns/iter",
            "extra": "iterations: 11814\ncpu: 59396.33485694938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22720.195227129916,
            "unit": "ns/iter",
            "extra": "iterations: 30841\ncpu: 22719.98313932733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 113281.49821891422,
            "unit": "ns/iter",
            "extra": "iterations: 6176\ncpu: 113281.26619170963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 91633.76597413524,
            "unit": "ns/iter",
            "extra": "iterations: 7653\ncpu: 91634.69227753737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 91286.3293303752,
            "unit": "ns/iter",
            "extra": "iterations: 7661\ncpu: 91283.76191097868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 91902.72847767836,
            "unit": "ns/iter",
            "extra": "iterations: 7620\ncpu: 91902.04724409568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 136967.38881281525,
            "unit": "ns/iter",
            "extra": "iterations: 5113\ncpu: 136959.73009974553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 559282.0845295405,
            "unit": "ns/iter",
            "extra": "iterations: 1254\ncpu: 559278.3094098886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 462359.62860896566,
            "unit": "ns/iter",
            "extra": "iterations: 1524\ncpu: 462353.14960629446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 458636.07924031524,
            "unit": "ns/iter",
            "extra": "iterations: 1527\ncpu: 458625.67125081393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 446238.9120458721,
            "unit": "ns/iter",
            "extra": "iterations: 1569\ncpu: 446238.68706182117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 288106.65707237454,
            "unit": "ns/iter",
            "extra": "iterations: 2432\ncpu: 288105.9621710509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 445869.4716379334,
            "unit": "ns/iter",
            "extra": "iterations: 1569\ncpu: 445861.44040790835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22630.695469391765,
            "unit": "ns/iter",
            "extra": "iterations: 30923\ncpu: 22630.653558839498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 114555.759241083,
            "unit": "ns/iter",
            "extra": "iterations: 6114\ncpu: 114555.07033038732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 93222.30655476531,
            "unit": "ns/iter",
            "extra": "iterations: 7506\ncpu: 93221.16973088174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 93419.72115384329,
            "unit": "ns/iter",
            "extra": "iterations: 7488\ncpu: 93418.6431623941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 92550.99324503359,
            "unit": "ns/iter",
            "extra": "iterations: 7550\ncpu: 92550.39735099394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 134285.4902186414,
            "unit": "ns/iter",
            "extra": "iterations: 5214\ncpu: 134285.15535097834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 553389.6482649669,
            "unit": "ns/iter",
            "extra": "iterations: 1268\ncpu: 553395.3470031549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 452923.3040104024,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 452923.027166885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 457340.48102094047,
            "unit": "ns/iter",
            "extra": "iterations: 1528\ncpu: 457333.3115183269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 448240.5531370648,
            "unit": "ns/iter",
            "extra": "iterations: 1562\ncpu: 448239.69270167255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 285348.5508543517,
            "unit": "ns/iter",
            "extra": "iterations: 2458\ncpu: 285347.965825874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 445403.31269941333,
            "unit": "ns/iter",
            "extra": "iterations: 1567\ncpu: 445390.87428207137 ns\nthreads: 1"
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
        "date": 1705952872509,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7822.910064767534,
            "unit": "ns/iter",
            "extra": "iterations: 89242\ncpu: 7822.4020080231285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 56330.06079999632,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56326.80000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 103813.20576480702,
            "unit": "ns/iter",
            "extra": "iterations: 8257\ncpu: 103808.63509749304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 150925.2153118476,
            "unit": "ns/iter",
            "extra": "iterations: 5708\ncpu: 150917.9572529783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 198816.04038549328,
            "unit": "ns/iter",
            "extra": "iterations: 4358\ncpu: 198807.2280862781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 246560.40779739176,
            "unit": "ns/iter",
            "extra": "iterations: 3514\ncpu: 246549.34547524183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 293551.54290542303,
            "unit": "ns/iter",
            "extra": "iterations: 2960\ncpu: 293528.31081081094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 340300.2346739438,
            "unit": "ns/iter",
            "extra": "iterations: 2561\ncpu: 340278.68020304566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 386976.59241075296,
            "unit": "ns/iter",
            "extra": "iterations: 2240\ncpu: 386952.0535714282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6381.534994296233,
            "unit": "ns/iter",
            "extra": "iterations: 109575\ncpu: 6381.2201688341265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5233.187554167214,
            "unit": "ns/iter",
            "extra": "iterations: 133844\ncpu: 5232.83524102687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5256.563385889138,
            "unit": "ns/iter",
            "extra": "iterations: 133129\ncpu: 5256.280750249759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5195.032864510303,
            "unit": "ns/iter",
            "extra": "iterations: 134948\ncpu: 5194.835047573877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8464.774370907728,
            "unit": "ns/iter",
            "extra": "iterations: 82937\ncpu: 8464.082375779211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 27224.556306004113,
            "unit": "ns/iter",
            "extra": "iterations: 29908\ncpu: 27223.665908786963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 136073.60282898787,
            "unit": "ns/iter",
            "extra": "iterations: 6292\ncpu: 136065.98855689756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 104112.24179431722,
            "unit": "ns/iter",
            "extra": "iterations: 8226\ncpu: 104106.50376853866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 104222.19367879265,
            "unit": "ns/iter",
            "extra": "iterations: 8163\ncpu: 104217.06480460597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 97473.96352303174,
            "unit": "ns/iter",
            "extra": "iterations: 8663\ncpu: 97470.09119242734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 221715.19089760457,
            "unit": "ns/iter",
            "extra": "iterations: 3955\ncpu: 221700.68268015172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1853401.3980001875,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1853336.5999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1426026.4331797254,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1425996.7741935465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1437740.5294117858,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1437696.2848297223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1402588.6797584642,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1402542.9003021165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 792069.6266094055,
            "unit": "ns/iter",
            "extra": "iterations: 1165\ncpu: 792020.6008583687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1388099.0553064067,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1388016.4424514198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36764.12996806244,
            "unit": "ns/iter",
            "extra": "iterations: 22544\ncpu: 36763.49804826104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 171737.89426522737,
            "unit": "ns/iter",
            "extra": "iterations: 5022\ncpu: 171720.78853046554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 133499.6200308175,
            "unit": "ns/iter",
            "extra": "iterations: 6490\ncpu: 133493.18952234185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 132452.0263888877,
            "unit": "ns/iter",
            "extra": "iterations: 6480\ncpu: 132448.65740740762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 127104.44110237155,
            "unit": "ns/iter",
            "extra": "iterations: 6749\ncpu: 127102.47444065803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 244606.66855524163,
            "unit": "ns/iter",
            "extra": "iterations: 3530\ncpu: 244602.4929178466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1885907.9171717914,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1885871.3131313086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1462257.2291994914,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1462187.9120879124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1492552.7548075188,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1492449.8397435835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1434900.531586953,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1434779.044684128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 827111.222222306,
            "unit": "ns/iter",
            "extra": "iterations: 1125\ncpu: 827041.5111111144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1441125.042878903,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1440364.7779479297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5093487.870000217,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5093281.999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3092587.993355317,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3092450.1661129785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 26056.06580911376,
            "unit": "ns/iter",
            "extra": "iterations: 31485\ncpu: 26054.680006352326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 130486.06614077171,
            "unit": "ns/iter",
            "extra": "iterations: 6592\ncpu: 130480.26395631066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 104752.059672295,
            "unit": "ns/iter",
            "extra": "iterations: 8178\ncpu: 104750.92932257308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 106277.09493669773,
            "unit": "ns/iter",
            "extra": "iterations: 8058\ncpu: 106277.48821047386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 96466.541422124,
            "unit": "ns/iter",
            "extra": "iterations: 8860\ncpu: 96464.95485327269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 216835.45427210364,
            "unit": "ns/iter",
            "extra": "iterations: 3991\ncpu: 216834.20195439734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1864003.5328033292,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1863949.3041749413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1440943.1914243046,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1440934.4563552784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1449166.1428572254,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1449158.229813666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1412518.1820940594,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1412507.8907435609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 790758.1265716829,
            "unit": "ns/iter",
            "extra": "iterations: 1193\ncpu: 790753.7300922041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1394286.9820627298,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1394252.0179372237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2892.51377509654,
            "unit": "ns/iter",
            "extra": "iterations: 243011\ncpu: 2892.5246182271617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18665.009270110473,
            "unit": "ns/iter",
            "extra": "iterations: 37540\ncpu: 18665.10388918486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14800.530826686354,
            "unit": "ns/iter",
            "extra": "iterations: 47394\ncpu: 14800.584462168328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14462.485150764012,
            "unit": "ns/iter",
            "extra": "iterations: 48420\ncpu: 14462.395704254463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11338.093613030609,
            "unit": "ns/iter",
            "extra": "iterations: 61829\ncpu: 11337.864109075092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 73223.55033486283,
            "unit": "ns/iter",
            "extra": "iterations: 9556\ncpu: 73223.83842611928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 128442.12449504781,
            "unit": "ns/iter",
            "extra": "iterations: 5446\ncpu: 128442.76533235391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 31416.767788913923,
            "unit": "ns/iter",
            "extra": "iterations: 22247\ncpu: 31416.887670247695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 31132.67523115637,
            "unit": "ns/iter",
            "extra": "iterations: 22496\ncpu: 31131.783428164876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 31096.504066487323,
            "unit": "ns/iter",
            "extra": "iterations: 22501\ncpu: 31095.137993867083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 62939.66223380042,
            "unit": "ns/iter",
            "extra": "iterations: 11129\ncpu: 62937.236049959654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 58353.12171519206,
            "unit": "ns/iter",
            "extra": "iterations: 11987\ncpu: 58349.43688996453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23181.547910243677,
            "unit": "ns/iter",
            "extra": "iterations: 30171\ncpu: 23180.494514600246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 117648.29616549268,
            "unit": "ns/iter",
            "extra": "iterations: 5946\ncpu: 117645.1395896409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 93342.43348897935,
            "unit": "ns/iter",
            "extra": "iterations: 7495\ncpu: 93340.18679119258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 93407.20772107838,
            "unit": "ns/iter",
            "extra": "iterations: 7486\ncpu: 93402.05717338985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 92730.63468927593,
            "unit": "ns/iter",
            "extra": "iterations: 7547\ncpu: 92723.87703723263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 143338.94309109935,
            "unit": "ns/iter",
            "extra": "iterations: 4885\ncpu: 143330.5220061432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 559491.5913807396,
            "unit": "ns/iter",
            "extra": "iterations: 1253\ncpu: 559474.8603351914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 448091.625480163,
            "unit": "ns/iter",
            "extra": "iterations: 1562\ncpu: 448069.52624840225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 453842.1817589717,
            "unit": "ns/iter",
            "extra": "iterations: 1535\ncpu: 453805.79804560356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 450775.1862114089,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 450743.2345360873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 288600.78364986164,
            "unit": "ns/iter",
            "extra": "iterations: 2422\ncpu: 288588.15028901666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 444122.4082539621,
            "unit": "ns/iter",
            "extra": "iterations: 1575\ncpu: 444124.4444444512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23137.588604874167,
            "unit": "ns/iter",
            "extra": "iterations: 30241\ncpu: 23137.277206441533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 120109.89012875853,
            "unit": "ns/iter",
            "extra": "iterations: 5825\ncpu: 120103.17596566545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 95809.78411404659,
            "unit": "ns/iter",
            "extra": "iterations: 7365\ncpu: 95808.41819416182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 95311.75681569634,
            "unit": "ns/iter",
            "extra": "iterations: 7336\ncpu: 95312.75899672881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 95406.5426704846,
            "unit": "ns/iter",
            "extra": "iterations: 7347\ncpu: 95403.82469034987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 141252.9852614659,
            "unit": "ns/iter",
            "extra": "iterations: 4953\ncpu: 141251.92812436726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 544576.9440559491,
            "unit": "ns/iter",
            "extra": "iterations: 1287\ncpu: 544560.2175602216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 450911.2287370705,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 450913.5309278384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 458777.1290957277,
            "unit": "ns/iter",
            "extra": "iterations: 1526\ncpu: 458773.5255570108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 443891.26142128283,
            "unit": "ns/iter",
            "extra": "iterations: 1576\ncpu: 443888.19796955027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 287669.2691834336,
            "unit": "ns/iter",
            "extra": "iterations: 2437\ncpu: 287667.5420599109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 442920.74634458666,
            "unit": "ns/iter",
            "extra": "iterations: 1573\ncpu: 442922.56834075594 ns\nthreads: 1"
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
        "date": 1705954350536,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7705.189275560321,
            "unit": "ns/iter",
            "extra": "iterations: 90746\ncpu: 7705.222268750139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55601.88549999338,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55600.16000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 102867.24384975898,
            "unit": "ns/iter",
            "extra": "iterations: 8333\ncpu: 102865.42661706469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 149729.53336818377,
            "unit": "ns/iter",
            "extra": "iterations: 5739\ncpu: 149729.74385781496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 197101.70707300794,
            "unit": "ns/iter",
            "extra": "iterations: 4397\ncpu: 197097.24812372075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 243413.07092796254,
            "unit": "ns/iter",
            "extra": "iterations: 3567\ncpu: 243412.11101766187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 289807.8376753325,
            "unit": "ns/iter",
            "extra": "iterations: 2994\ncpu: 289792.9191716769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 336722.1279968953,
            "unit": "ns/iter",
            "extra": "iterations: 2586\ncpu: 336712.645011601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 381388.76416337246,
            "unit": "ns/iter",
            "extra": "iterations: 2277\ncpu: 381372.4637681157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6336.143172404184,
            "unit": "ns/iter",
            "extra": "iterations: 110566\ncpu: 6335.983032758721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5177.268004434649,
            "unit": "ns/iter",
            "extra": "iterations: 135300\ncpu: 5177.27716186253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5225.548597900171,
            "unit": "ns/iter",
            "extra": "iterations: 134049\ncpu: 5225.403397265185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5231.658574004964,
            "unit": "ns/iter",
            "extra": "iterations: 133619\ncpu: 5231.54566341613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8370.0747366404,
            "unit": "ns/iter",
            "extra": "iterations: 83346\ncpu: 8370.047752741573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26017.459515725393,
            "unit": "ns/iter",
            "extra": "iterations: 31222\ncpu: 26016.414707578006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 139540.73371427957,
            "unit": "ns/iter",
            "extra": "iterations: 6125\ncpu: 139539.96734693882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 106651.44120941179,
            "unit": "ns/iter",
            "extra": "iterations: 8037\ncpu: 106648.78686076879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 107217.80077297255,
            "unit": "ns/iter",
            "extra": "iterations: 8021\ncpu: 107218.04014462054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 100790.60165582153,
            "unit": "ns/iter",
            "extra": "iterations: 8455\ncpu: 100790.62093435822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 222459.53418480913,
            "unit": "ns/iter",
            "extra": "iterations: 3993\ncpu: 222457.35036313534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1805705.6218322741,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1805670.1754385985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1429345.2400000626,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1429331.6923076888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1433633.5285054229,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1433597.0724191088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1398680.9984893685,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1398669.6374622309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 772167.0852842892,
            "unit": "ns/iter",
            "extra": "iterations: 1196\ncpu: 772125.0000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1382809.1785714019,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1382747.767857142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 34782.4110810588,
            "unit": "ns/iter",
            "extra": "iterations: 23662\ncpu: 34780.52573746933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 173940.8763570698,
            "unit": "ns/iter",
            "extra": "iterations: 4974\ncpu: 173936.2887012464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 137692.72731628813,
            "unit": "ns/iter",
            "extra": "iterations: 6260\ncpu: 137682.61980830683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 133216.71432996212,
            "unit": "ns/iter",
            "extra": "iterations: 6455\ncpu: 133211.8667699456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 129205.60890349686,
            "unit": "ns/iter",
            "extra": "iterations: 6694\ncpu: 129202.04660890398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 244471.34952002412,
            "unit": "ns/iter",
            "extra": "iterations: 3542\ncpu: 244469.73461321267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1856593.3353295417,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1856545.908183632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1471214.2003156033,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1471209.6214511008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1464840.597484189,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1464809.591194963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1459357.0673982198,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1459360.1880877712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 814156.1092658149,
            "unit": "ns/iter",
            "extra": "iterations: 1144\ncpu: 814135.0524475523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1414942.180851034,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1414934.954407288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6663418.107142759,
            "unit": "ns/iter",
            "extra": "iterations: 140\ncpu: 6663381.428571467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3023468.246753182,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3023413.311688315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24860.750600250063,
            "unit": "ns/iter",
            "extra": "iterations: 32903\ncpu: 24860.03707868584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 132691.77400955674,
            "unit": "ns/iter",
            "extra": "iterations: 6487\ncpu: 132689.54832742308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 109388.71383127928,
            "unit": "ns/iter",
            "extra": "iterations: 7859\ncpu: 109387.75925690291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 107849.43696634963,
            "unit": "ns/iter",
            "extra": "iterations: 7964\ncpu: 107847.32546459009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 96843.72134118683,
            "unit": "ns/iter",
            "extra": "iterations: 8828\ncpu: 96843.45265065701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 217561.9088168846,
            "unit": "ns/iter",
            "extra": "iterations: 3981\ncpu: 217560.28636021056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1820366.988304194,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1820369.5906432788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1441666.4907407216,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1441584.104938278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1436209.5978428747,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1436162.4036980018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1408712.1842898936,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1408634.4410876126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 782609.8875000298,
            "unit": "ns/iter",
            "extra": "iterations: 1200\ncpu: 782583.0833333333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1387815.0853292528,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1387769.7604790486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2912.7638784171186,
            "unit": "ns/iter",
            "extra": "iterations: 240067\ncpu: 2912.7635201839403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18879.980538839936,
            "unit": "ns/iter",
            "extra": "iterations: 36894\ncpu: 18879.592887732408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15501.461098619735,
            "unit": "ns/iter",
            "extra": "iterations: 46695\ncpu: 15501.456258700106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15605.324485822657,
            "unit": "ns/iter",
            "extra": "iterations: 44683\ncpu: 15604.245462480061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11358.130656366247,
            "unit": "ns/iter",
            "extra": "iterations: 61612\ncpu: 11358.160747906231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 70636.98841228714,
            "unit": "ns/iter",
            "extra": "iterations: 9838\ncpu: 70637.27383614561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 129312.39038816481,
            "unit": "ns/iter",
            "extra": "iterations: 5410\ncpu: 129298.48428835486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 31365.108156667746,
            "unit": "ns/iter",
            "extra": "iterations: 22264\ncpu: 31363.869924541897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 31141.74665897136,
            "unit": "ns/iter",
            "extra": "iterations: 22523\ncpu: 31141.228965945895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30966.419083835783,
            "unit": "ns/iter",
            "extra": "iterations: 22616\ncpu: 30966.514856738733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 63307.70394083778,
            "unit": "ns/iter",
            "extra": "iterations: 11089\ncpu: 63303.38172964223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 58821.27785314972,
            "unit": "ns/iter",
            "extra": "iterations: 11794\ncpu: 58819.58623028653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21945.64314687412,
            "unit": "ns/iter",
            "extra": "iterations: 31803\ncpu: 21944.294563406052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 115220.33207050466,
            "unit": "ns/iter",
            "extra": "iterations: 6071\ncpu: 115215.7140504039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 91939.59428646271,
            "unit": "ns/iter",
            "extra": "iterations: 7631\ncpu: 91938.48774734566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 90966.45864172977,
            "unit": "ns/iter",
            "extra": "iterations: 7701\ncpu: 90960.23893000884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 91435.84580232821,
            "unit": "ns/iter",
            "extra": "iterations: 7659\ncpu: 91432.19741480758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 134561.5870320342,
            "unit": "ns/iter",
            "extra": "iterations: 5182\ncpu: 134552.66306445343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 546067.2074883198,
            "unit": "ns/iter",
            "extra": "iterations: 1282\ncpu: 546045.397815913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 453052.18729750643,
            "unit": "ns/iter",
            "extra": "iterations: 1543\ncpu: 453019.2482177624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 454276.7369791386,
            "unit": "ns/iter",
            "extra": "iterations: 1536\ncpu: 454256.1848958349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 444962.6301718394,
            "unit": "ns/iter",
            "extra": "iterations: 1571\ncpu: 444935.83704646805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 284069.4862013296,
            "unit": "ns/iter",
            "extra": "iterations: 2464\ncpu: 284068.3847402601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 441823.6220820144,
            "unit": "ns/iter",
            "extra": "iterations: 1585\ncpu: 441811.29337539856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22129.242679540217,
            "unit": "ns/iter",
            "extra": "iterations: 31692\ncpu: 22128.988388237012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 113901.3693283389,
            "unit": "ns/iter",
            "extra": "iterations: 6149\ncpu: 113892.01496178238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 92675.61263408432,
            "unit": "ns/iter",
            "extra": "iterations: 7551\ncpu: 92672.50695272083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 93398.74107262607,
            "unit": "ns/iter",
            "extra": "iterations: 7477\ncpu: 93391.84164771903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 92682.68655528853,
            "unit": "ns/iter",
            "extra": "iterations: 7542\ncpu: 92678.7324317155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 132776.51203791922,
            "unit": "ns/iter",
            "extra": "iterations: 5275\ncpu: 132772.66350710962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 536765.7825420627,
            "unit": "ns/iter",
            "extra": "iterations: 1306\ncpu: 536772.5114854465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 443250.5341340197,
            "unit": "ns/iter",
            "extra": "iterations: 1582\ncpu: 443247.53476611414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 449510.50192556327,
            "unit": "ns/iter",
            "extra": "iterations: 1558\ncpu: 449516.3029525037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 444559.06143131485,
            "unit": "ns/iter",
            "extra": "iterations: 1579\ncpu: 444551.4249525065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 278025.0239425368,
            "unit": "ns/iter",
            "extra": "iterations: 2506\ncpu: 278024.86033519503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 437546.70595609135,
            "unit": "ns/iter",
            "extra": "iterations: 1595\ncpu: 437535.73667711345 ns\nthreads: 1"
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
        "date": 1705956397914,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8017.722886738915,
            "unit": "ns/iter",
            "extra": "iterations: 87365\ncpu: 8017.45893664511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 58719.441699997784,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58716.54999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 108261.78260869955,
            "unit": "ns/iter",
            "extra": "iterations: 7935\ncpu: 108256.95022054191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 158118.4898258505,
            "unit": "ns/iter",
            "extra": "iterations: 5455\ncpu: 158116.0403299725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 210406.19214079986,
            "unit": "ns/iter",
            "extra": "iterations: 4148\ncpu: 210393.39440694317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 257153.8953143528,
            "unit": "ns/iter",
            "extra": "iterations: 3372\ncpu: 257144.98813760362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 306913.2431858079,
            "unit": "ns/iter",
            "extra": "iterations: 2825\ncpu: 306909.5929203539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 355886.4932515155,
            "unit": "ns/iter",
            "extra": "iterations: 2445\ncpu: 355871.5746421271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 405807.1595893517,
            "unit": "ns/iter",
            "extra": "iterations: 2143\ncpu: 405789.967335511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6550.625413515689,
            "unit": "ns/iter",
            "extra": "iterations: 106707\ncpu: 6550.568378831755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5353.1644919782875,
            "unit": "ns/iter",
            "extra": "iterations: 130900\ncpu: 5352.873949579829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5394.022079612757,
            "unit": "ns/iter",
            "extra": "iterations: 129803\ncpu: 5393.923098849787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5415.801978590327,
            "unit": "ns/iter",
            "extra": "iterations: 129385\ncpu: 5415.662557483478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8771.18201625283,
            "unit": "ns/iter",
            "extra": "iterations: 79861\ncpu: 8771.070985837905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 28050.779318393415,
            "unit": "ns/iter",
            "extra": "iterations: 29137\ncpu: 28049.60359680136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 132225.07167129693,
            "unit": "ns/iter",
            "extra": "iterations: 6474\ncpu: 132220.68273092376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 102690.79966329578,
            "unit": "ns/iter",
            "extra": "iterations: 8316\ncpu: 102689.87493987507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 101164.28254946145,
            "unit": "ns/iter",
            "extra": "iterations: 8441\ncpu: 101162.59921810181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 97465.91790362797,
            "unit": "ns/iter",
            "extra": "iterations: 8758\ncpu: 97462.10321991345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 228021.66443986812,
            "unit": "ns/iter",
            "extra": "iterations: 3892\ncpu: 228007.78520041073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1911267.0371134637,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1911194.4329896932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1497806.1260098354,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1497690.791599349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1498343.5322581192,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1498307.2580645147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1482193.534290297,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1482117.5438596488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 805569.5888501339,
            "unit": "ns/iter",
            "extra": "iterations: 1148\ncpu: 805541.3763066193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1445301.5709828583,
            "unit": "ns/iter",
            "extra": "iterations: 641\ncpu: 1445226.5210608426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36890.32993242996,
            "unit": "ns/iter",
            "extra": "iterations: 22347\ncpu: 36888.38322817385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 169092.7347698429,
            "unit": "ns/iter",
            "extra": "iterations: 5105\ncpu: 169082.74240940218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 131065.23377614484,
            "unit": "ns/iter",
            "extra": "iterations: 6549\ncpu: 131054.7106428464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 129947.42679032299,
            "unit": "ns/iter",
            "extra": "iterations: 6577\ncpu: 129940.12467690418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 125986.72727272377,
            "unit": "ns/iter",
            "extra": "iterations: 6809\ncpu: 125981.84755470727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 248954.77576281366,
            "unit": "ns/iter",
            "extra": "iterations: 3474\ncpu: 248946.7184801384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1959813.502100765,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1959708.4033613433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1535291.5643564335,
            "unit": "ns/iter",
            "extra": "iterations: 606\ncpu: 1535213.2013201301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1543549.3793676777,
            "unit": "ns/iter",
            "extra": "iterations: 601\ncpu: 1543454.2429284535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1514480.53670486,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1514377.3246329515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 848172.8940638924,
            "unit": "ns/iter",
            "extra": "iterations: 1095\ncpu: 848122.2831050218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1485719.345600046,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1485611.3600000073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5165771.279999944,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5165270.000000035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3127374.5134227504,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3127204.026845638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 26846.28539267373,
            "unit": "ns/iter",
            "extra": "iterations: 30649\ncpu: 26844.80407191096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 127636.36360919308,
            "unit": "ns/iter",
            "extra": "iterations: 6694\ncpu: 127629.93725724574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 102880.19000240868,
            "unit": "ns/iter",
            "extra": "iterations: 8342\ncpu: 102872.64444977193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 101959.05733617253,
            "unit": "ns/iter",
            "extra": "iterations: 8424\ncpu: 101947.72079772064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 93250.58552848302,
            "unit": "ns/iter",
            "extra": "iterations: 9149\ncpu: 93246.33293256037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 223423.7059886531,
            "unit": "ns/iter",
            "extra": "iterations: 3874\ncpu: 223414.14558595791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1928743.9461695557,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1928654.6583850945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1512533.3549433327,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1512464.019448946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1504206.0598706186,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1504130.9061488744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1498459.2064516002,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1498386.774193548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 813152.1232638643,
            "unit": "ns/iter",
            "extra": "iterations: 1152\ncpu: 813105.9027777775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1451586.7562499451,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1451471.718749997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2931.256717714024,
            "unit": "ns/iter",
            "extra": "iterations: 239516\ncpu: 2931.1837205030233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18969.36348081079,
            "unit": "ns/iter",
            "extra": "iterations: 36819\ncpu: 18968.432059534436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15449.120219783497,
            "unit": "ns/iter",
            "extra": "iterations: 45317\ncpu: 15448.240174768862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15617.644510929767,
            "unit": "ns/iter",
            "extra": "iterations: 44789\ncpu: 15616.71839067639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11391.199203835688,
            "unit": "ns/iter",
            "extra": "iterations: 61545\ncpu: 11390.663741977325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 75106.87011728197,
            "unit": "ns/iter",
            "extra": "iterations: 9293\ncpu: 75103.32508339571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 132540.19284631885,
            "unit": "ns/iter",
            "extra": "iterations: 5284\ncpu: 132538.15291445842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 32106.236731877776,
            "unit": "ns/iter",
            "extra": "iterations: 21725\ncpu: 32105.629459148502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 32223.872692114033,
            "unit": "ns/iter",
            "extra": "iterations: 21719\ncpu: 32223.292969289683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 31972.107354958207,
            "unit": "ns/iter",
            "extra": "iterations: 21890\ncpu: 31969.840109639117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 63928.699489420134,
            "unit": "ns/iter",
            "extra": "iterations: 10968\ncpu: 63926.64113785525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 60246.000257893436,
            "unit": "ns/iter",
            "extra": "iterations: 11633\ncpu: 60242.11295452615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22977.686151521197,
            "unit": "ns/iter",
            "extra": "iterations: 30451\ncpu: 22976.19125808664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 118007.84152727478,
            "unit": "ns/iter",
            "extra": "iterations: 5919\ncpu: 118002.23010643774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 94299.89645409737,
            "unit": "ns/iter",
            "extra": "iterations: 7417\ncpu: 94292.20709181565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 94296.47329999365,
            "unit": "ns/iter",
            "extra": "iterations: 7397\ncpu: 94294.95741516868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 93481.61984244158,
            "unit": "ns/iter",
            "extra": "iterations: 7489\ncpu: 93478.66203765606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 142597.66007743333,
            "unit": "ns/iter",
            "extra": "iterations: 4907\ncpu: 142586.57020582905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 577062.939868209,
            "unit": "ns/iter",
            "extra": "iterations: 1214\ncpu: 577037.7265238872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 467234.718791966,
            "unit": "ns/iter",
            "extra": "iterations: 1490\ncpu: 467204.1610738275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 473733.7633175941,
            "unit": "ns/iter",
            "extra": "iterations: 1483\ncpu: 473719.8921105858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 463850.87782205624,
            "unit": "ns/iter",
            "extra": "iterations: 1506\ncpu: 463834.5949535183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 290057.3467874643,
            "unit": "ns/iter",
            "extra": "iterations: 2428\ncpu: 290051.5650741362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 457362.44750657375,
            "unit": "ns/iter",
            "extra": "iterations: 1524\ncpu: 457337.6640419937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23274.076846373577,
            "unit": "ns/iter",
            "extra": "iterations: 30086\ncpu: 23273.931396662996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 116702.4421157667,
            "unit": "ns/iter",
            "extra": "iterations: 6012\ncpu: 116696.45708582894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 95454.94695936561,
            "unit": "ns/iter",
            "extra": "iterations: 7334\ncpu: 95451.90891736945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 94806.92823355498,
            "unit": "ns/iter",
            "extra": "iterations: 7399\ncpu: 94803.20313555922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 94475.7328295753,
            "unit": "ns/iter",
            "extra": "iterations: 7411\ncpu: 94472.59479152682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 140378.43393573925,
            "unit": "ns/iter",
            "extra": "iterations: 4980\ncpu: 140371.6666666673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 567554.9651539185,
            "unit": "ns/iter",
            "extra": "iterations: 1234\ncpu: 567531.1993517012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 463587.8270378051,
            "unit": "ns/iter",
            "extra": "iterations: 1509\ncpu: 463578.6613651434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 470724.8883658048,
            "unit": "ns/iter",
            "extra": "iterations: 1487\ncpu: 470709.14593140606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 463706.540450971,
            "unit": "ns/iter",
            "extra": "iterations: 1508\ncpu: 463694.96021220245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 289723.2501038961,
            "unit": "ns/iter",
            "extra": "iterations: 2407\ncpu: 289714.99792272586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 455674.4915033116,
            "unit": "ns/iter",
            "extra": "iterations: 1530\ncpu: 455662.2222222166 ns\nthreads: 1"
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
        "date": 1705957836736,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7630.365732807864,
            "unit": "ns/iter",
            "extra": "iterations: 91627\ncpu: 7630.123216955702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55478.28889999664,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55473.76 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 102489.28376155483,
            "unit": "ns/iter",
            "extra": "iterations: 7901\ncpu: 102481.42007340847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 148456.81489142257,
            "unit": "ns/iter",
            "extra": "iterations: 5802\ncpu: 148447.89727680106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 194762.67012168863,
            "unit": "ns/iter",
            "extra": "iterations: 4438\ncpu: 194756.24155024788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 241770.54373259027,
            "unit": "ns/iter",
            "extra": "iterations: 3590\ncpu: 241753.39832869076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 286863.23562459985,
            "unit": "ns/iter",
            "extra": "iterations: 3026\ncpu: 286849.37210839393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 332277.4350823546,
            "unit": "ns/iter",
            "extra": "iterations: 2611\ncpu: 332247.07008808904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 377840.25792448333,
            "unit": "ns/iter",
            "extra": "iterations: 2303\ncpu: 377822.2752930959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6299.179686587923,
            "unit": "ns/iter",
            "extra": "iterations: 111355\ncpu: 6298.756230074979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5244.814189537338,
            "unit": "ns/iter",
            "extra": "iterations: 135762\ncpu: 5244.2215052813035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5126.757009134712,
            "unit": "ns/iter",
            "extra": "iterations: 132898\ncpu: 5126.33598699755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5120.224266316461,
            "unit": "ns/iter",
            "extra": "iterations: 136980\ncpu: 5120.070813257411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8215.438906412239,
            "unit": "ns/iter",
            "extra": "iterations: 84968\ncpu: 8215.379907729975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 27172.54861018373,
            "unit": "ns/iter",
            "extra": "iterations: 29932\ncpu: 27171.993184551622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 135485.71521394237,
            "unit": "ns/iter",
            "extra": "iterations: 6310\ncpu: 135483.78763866881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 103777.21160368546,
            "unit": "ns/iter",
            "extra": "iterations: 8256\ncpu: 103774.10368217058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 102902.55036618038,
            "unit": "ns/iter",
            "extra": "iterations: 8329\ncpu: 102901.95701764913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 98171.84077311399,
            "unit": "ns/iter",
            "extra": "iterations: 8692\ncpu: 98168.35020708703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 224924.51904160154,
            "unit": "ns/iter",
            "extra": "iterations: 3965\ncpu: 224915.5611601511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1818385.240157548,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1818295.0787401574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1412356.8133535723,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1412334.5978755702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1438720.9458203625,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1438638.0804953582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1410867.004559394,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1410828.7234042513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 798971.0320347103,
            "unit": "ns/iter",
            "extra": "iterations: 1155\ncpu: 798953.4199134189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1381818.6944859677,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1381790.7600596137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37032.757012715854,
            "unit": "ns/iter",
            "extra": "iterations: 22174\ncpu: 37031.284387119995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 170424.09229248273,
            "unit": "ns/iter",
            "extra": "iterations: 5060\ncpu: 170419.54545454594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 132860.86409265,
            "unit": "ns/iter",
            "extra": "iterations: 6475\ncpu: 132856.52509652512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 129066.36202759085,
            "unit": "ns/iter",
            "extra": "iterations: 6668\ncpu: 129062.8374325134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 128994.58848293588,
            "unit": "ns/iter",
            "extra": "iterations: 6651\ncpu: 128988.58818222793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 246047.84778912028,
            "unit": "ns/iter",
            "extra": "iterations: 3528\ncpu: 246036.0544217693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1880091.7050506393,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1880059.79797979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1461790.0721003474,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1461763.94984326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1503081.6103060513,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1503015.6199677933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1435993.1510016157,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1435958.551617872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 830201.6678602669,
            "unit": "ns/iter",
            "extra": "iterations: 1117\ncpu: 830179.409131599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1429565.9600614896,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1429509.6774193498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5097018.100000242,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5096729.999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3131382.067340076,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3131268.6868686927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 26093.102921076144,
            "unit": "ns/iter",
            "extra": "iterations: 31461\ncpu: 26092.30793681065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 128792.90852830514,
            "unit": "ns/iter",
            "extra": "iterations: 6625\ncpu: 128785.55471698137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 106087.5637383199,
            "unit": "ns/iter",
            "extra": "iterations: 8025\ncpu: 106081.22118380084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 105586.5831893313,
            "unit": "ns/iter",
            "extra": "iterations: 8102\ncpu: 105580.8442359909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 95313.74704964833,
            "unit": "ns/iter",
            "extra": "iterations: 8982\ncpu: 95310.17590737049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 220815.43206105512,
            "unit": "ns/iter",
            "extra": "iterations: 3930\ncpu: 220806.59033078855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1838342.1043307232,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1838264.960629924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1428397.566412288,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1428327.9389312954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1437633.6527777556,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1437590.7407407372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1410370.4372162696,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1410299.2435703487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 804479.242087257,
            "unit": "ns/iter",
            "extra": "iterations: 1169\ncpu: 804432.848588537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1387508.9461882499,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1387435.4260089705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2894.6287426389936,
            "unit": "ns/iter",
            "extra": "iterations: 241474\ncpu: 2894.5613192310584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18467.870148032107,
            "unit": "ns/iter",
            "extra": "iterations: 37897\ncpu: 18467.335145262263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14524.689585797116,
            "unit": "ns/iter",
            "extra": "iterations: 48213\ncpu: 14524.29220334772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15378.517846161778,
            "unit": "ns/iter",
            "extra": "iterations: 47153\ncpu: 15378.238924352665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11363.154990502131,
            "unit": "ns/iter",
            "extra": "iterations: 62649\ncpu: 11362.874108126238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 71312.75102123815,
            "unit": "ns/iter",
            "extra": "iterations: 9792\ncpu: 71312.16299019598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 128678.95277472168,
            "unit": "ns/iter",
            "extra": "iterations: 5442\ncpu: 128674.49467107678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30641.403232162094,
            "unit": "ns/iter",
            "extra": "iterations: 22833\ncpu: 30640.734901239517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30610.682771913107,
            "unit": "ns/iter",
            "extra": "iterations: 22829\ncpu: 30609.255771168177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30161.297360147473,
            "unit": "ns/iter",
            "extra": "iterations: 23221\ncpu: 30161.05249558577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 64649.350022760846,
            "unit": "ns/iter",
            "extra": "iterations: 10985\ncpu: 64647.4920345928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 59756.082503796264,
            "unit": "ns/iter",
            "extra": "iterations: 11854\ncpu: 59753.94803441906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22202.275414198783,
            "unit": "ns/iter",
            "extra": "iterations: 31567\ncpu: 22201.824690340985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 117665.72901325917,
            "unit": "ns/iter",
            "extra": "iterations: 5432\ncpu: 117663.77025036878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 91463.39587413553,
            "unit": "ns/iter",
            "extra": "iterations: 7659\ncpu: 91461.0523567055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 90339.28143943912,
            "unit": "ns/iter",
            "extra": "iterations: 7753\ncpu: 90336.06345930697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 89823.74977544902,
            "unit": "ns/iter",
            "extra": "iterations: 7793\ncpu: 89821.42948800285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 133908.03310371947,
            "unit": "ns/iter",
            "extra": "iterations: 5226\ncpu: 133904.53501722153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 555787.118483422,
            "unit": "ns/iter",
            "extra": "iterations: 1266\ncpu: 555773.6176935155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 454877.4993472779,
            "unit": "ns/iter",
            "extra": "iterations: 1532\ncpu: 454868.2767623982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 452608.9623865601,
            "unit": "ns/iter",
            "extra": "iterations: 1542\ncpu: 452590.5317769118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 443330.3217226261,
            "unit": "ns/iter",
            "extra": "iterations: 1579\ncpu: 443318.42938568746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 283018.4388663868,
            "unit": "ns/iter",
            "extra": "iterations: 2470\ncpu: 283011.5789473719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 453701.31253940315,
            "unit": "ns/iter",
            "extra": "iterations: 1587\ncpu: 453676.43352236634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23056.004216629084,
            "unit": "ns/iter",
            "extra": "iterations: 30356\ncpu: 23055.19172486487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 113545.18957960341,
            "unit": "ns/iter",
            "extra": "iterations: 6161\ncpu: 113539.65265378922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 92620.79830035458,
            "unit": "ns/iter",
            "extra": "iterations: 7531\ncpu: 92618.41720887097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 91814.24334600318,
            "unit": "ns/iter",
            "extra": "iterations: 7627\ncpu: 91810.3054936415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 92174.01133069662,
            "unit": "ns/iter",
            "extra": "iterations: 7590\ncpu: 92167.40447957772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 133835.30669214966,
            "unit": "ns/iter",
            "extra": "iterations: 5230\ncpu: 133830.8221797321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 549397.9179045901,
            "unit": "ns/iter",
            "extra": "iterations: 1279\ncpu: 549374.3549648077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 444192.80317462893,
            "unit": "ns/iter",
            "extra": "iterations: 1575\ncpu: 444183.1746031774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 452615.7533980296,
            "unit": "ns/iter",
            "extra": "iterations: 1545\ncpu: 452584.6601941696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 440600.44409548887,
            "unit": "ns/iter",
            "extra": "iterations: 1592\ncpu: 440581.03015075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 287114.6383326511,
            "unit": "ns/iter",
            "extra": "iterations: 2447\ncpu: 287104.49530036957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 440423.70031543454,
            "unit": "ns/iter",
            "extra": "iterations: 1585\ncpu: 440403.47003154136 ns\nthreads: 1"
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
        "date": 1705959551702,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7450.457702885122,
            "unit": "ns/iter",
            "extra": "iterations: 94179\ncpu: 7450.097155416814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54482.5967999941,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54480.929999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 100387.5442845383,
            "unit": "ns/iter",
            "extra": "iterations: 8547\ncpu: 100382.42658242659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 149007.09010989292,
            "unit": "ns/iter",
            "extra": "iterations: 5915\ncpu: 149000.82840236687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 190806.52138446915,
            "unit": "ns/iter",
            "extra": "iterations: 4536\ncpu: 190799.2283950618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 237008.83124318311,
            "unit": "ns/iter",
            "extra": "iterations: 3668\ncpu: 236996.23773173388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 281663.66731770715,
            "unit": "ns/iter",
            "extra": "iterations: 3072\ncpu: 281633.7565104167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 326150.4341957331,
            "unit": "ns/iter",
            "extra": "iterations: 2667\ncpu: 326135.020622422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 373274.95219805837,
            "unit": "ns/iter",
            "extra": "iterations: 2343\ncpu: 373249.3811352966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6139.52025340848,
            "unit": "ns/iter",
            "extra": "iterations: 113808\ncpu: 6139.247680303665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5090.952730954812,
            "unit": "ns/iter",
            "extra": "iterations: 137278\ncpu: 5090.558574571307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5068.113615661412,
            "unit": "ns/iter",
            "extra": "iterations: 138326\ncpu: 5067.836849182363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5072.734260022398,
            "unit": "ns/iter",
            "extra": "iterations: 138342\ncpu: 5065.5231238524875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8236.538551895754,
            "unit": "ns/iter",
            "extra": "iterations: 85132\ncpu: 8236.062820091163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26649.70162641784,
            "unit": "ns/iter",
            "extra": "iterations: 30435\ncpu: 26647.46508953505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 145001.7253485629,
            "unit": "ns/iter",
            "extra": "iterations: 5953\ncpu: 144995.27969091214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 108404.99961943555,
            "unit": "ns/iter",
            "extra": "iterations: 7883\ncpu: 108400.9006723328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 110534.00193323627,
            "unit": "ns/iter",
            "extra": "iterations: 7759\ncpu: 110527.54220904763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 101539.49528245462,
            "unit": "ns/iter",
            "extra": "iterations: 8373\ncpu: 101535.97276961662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 219991.56919253053,
            "unit": "ns/iter",
            "extra": "iterations: 4025\ncpu: 219982.7080745343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1774236.747126415,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1774174.7126436757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1398346.344879576,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1398272.28915663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1398451.8569275744,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1398376.9578313266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1371290.4047266901,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1371230.871491874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 780188.0160337448,
            "unit": "ns/iter",
            "extra": "iterations: 1185\ncpu: 780155.9493670902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1347468.5674890426,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1347399.7097242386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38009.272915613226,
            "unit": "ns/iter",
            "extra": "iterations: 21721\ncpu: 38006.76764421536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 181785.19473684372,
            "unit": "ns/iter",
            "extra": "iterations: 4750\ncpu: 181769.1157894733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 138180.0776138535,
            "unit": "ns/iter",
            "extra": "iterations: 6236\ncpu: 138171.37588197534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 142193.0386329906,
            "unit": "ns/iter",
            "extra": "iterations: 6057\ncpu: 142189.10351659276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 130708.80452269738,
            "unit": "ns/iter",
            "extra": "iterations: 6589\ncpu: 130700.40977386537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 249769.01379707895,
            "unit": "ns/iter",
            "extra": "iterations: 3479\ncpu: 249764.7025007189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1814623.0623783567,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1814514.0350877175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1432195.490046053,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1432141.6539050573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1435917.6055470326,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1435834.9768875188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1399700.8375938942,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1399654.8872180472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 822835.1690265492,
            "unit": "ns/iter",
            "extra": "iterations: 1130\ncpu: 822791.3274336328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1384090.9553571073,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1384008.0357142834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5086174.47000006,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5085875.000000044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3057477.196721191,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3057421.6393442624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 26045.536630096616,
            "unit": "ns/iter",
            "extra": "iterations: 32173\ncpu: 26044.37571877038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 145191.43632075196,
            "unit": "ns/iter",
            "extra": "iterations: 5936\ncpu: 145186.3039083557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 107660.67291693592,
            "unit": "ns/iter",
            "extra": "iterations: 8053\ncpu: 107654.81187135215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 112544.39703568818,
            "unit": "ns/iter",
            "extra": "iterations: 7624\ncpu: 112541.61857292763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 101923.00880742494,
            "unit": "ns/iter",
            "extra": "iterations: 8402\ncpu: 101919.28112354207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 215309.42377518796,
            "unit": "ns/iter",
            "extra": "iterations: 4021\ncpu: 215305.0484953991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1804282.9616123808,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1804214.7792706324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1407972.8855420395,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1407889.4578313238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1397003.959520229,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1396964.3178410856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1380445.5480059264,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1380383.6041358977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 783154.2181516135,
            "unit": "ns/iter",
            "extra": "iterations: 1201\ncpu: 783124.6461282253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1357413.7481803782,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1357327.3653566248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2923.342999002097,
            "unit": "ns/iter",
            "extra": "iterations: 239473\ncpu: 2923.1829893140616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19219.75613788548,
            "unit": "ns/iter",
            "extra": "iterations: 36291\ncpu: 19218.828359648436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14745.313465784915,
            "unit": "ns/iter",
            "extra": "iterations: 47565\ncpu: 14744.545358982363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15427.143354486381,
            "unit": "ns/iter",
            "extra": "iterations: 45384\ncpu: 15426.357306539747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11142.835068092721,
            "unit": "ns/iter",
            "extra": "iterations: 62929\ncpu: 11142.40016526565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 74382.34035535176,
            "unit": "ns/iter",
            "extra": "iterations: 9399\ncpu: 74379.81700180905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 125911.05466353372,
            "unit": "ns/iter",
            "extra": "iterations: 5543\ncpu: 125901.87624030309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30158.118275860958,
            "unit": "ns/iter",
            "extra": "iterations: 23200\ncpu: 30156.918103448315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30507.786268187356,
            "unit": "ns/iter",
            "extra": "iterations: 22954\ncpu: 30506.155789840344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29711.989783374243,
            "unit": "ns/iter",
            "extra": "iterations: 23589\ncpu: 29711.039043621866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 62554.425442513704,
            "unit": "ns/iter",
            "extra": "iterations: 11186\ncpu: 62551.56445556944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 56864.729797771295,
            "unit": "ns/iter",
            "extra": "iterations: 12313\ncpu: 56860.78940956718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22302.484779978233,
            "unit": "ns/iter",
            "extra": "iterations: 31406\ncpu: 22302.22250525379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 112201.6051914861,
            "unit": "ns/iter",
            "extra": "iterations: 6241\ncpu: 112197.72472360096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 93057.3471756533,
            "unit": "ns/iter",
            "extra": "iterations: 7754\ncpu: 93052.99200412686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 88821.2332781324,
            "unit": "ns/iter",
            "extra": "iterations: 7849\ncpu: 88816.35877181905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 87544.89447992048,
            "unit": "ns/iter",
            "extra": "iterations: 7989\ncpu: 87540.63086744297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 135364.3184281998,
            "unit": "ns/iter",
            "extra": "iterations: 5166\ncpu: 135356.75571041676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 531189.1751326482,
            "unit": "ns/iter",
            "extra": "iterations: 1319\ncpu: 531170.0530705084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 442743.1892405435,
            "unit": "ns/iter",
            "extra": "iterations: 1580\ncpu: 442724.6202531696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 443399.4539722552,
            "unit": "ns/iter",
            "extra": "iterations: 1586\ncpu: 443379.76040353463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 438306.3335419106,
            "unit": "ns/iter",
            "extra": "iterations: 1598\ncpu: 438162.5156445536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 277641.01433691557,
            "unit": "ns/iter",
            "extra": "iterations: 2511\ncpu: 277625.96575069625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 429532.1136363842,
            "unit": "ns/iter",
            "extra": "iterations: 1628\ncpu: 429520.8845208817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21982.869411062766,
            "unit": "ns/iter",
            "extra": "iterations: 31871\ncpu: 21981.431395312393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 111978.15896368229,
            "unit": "ns/iter",
            "extra": "iterations: 6253\ncpu: 111974.30033584074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 90431.47793926671,
            "unit": "ns/iter",
            "extra": "iterations: 7706\ncpu: 90426.22631715615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 90384.03495421805,
            "unit": "ns/iter",
            "extra": "iterations: 7753\ncpu: 90378.92428737126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 90644.08964450826,
            "unit": "ns/iter",
            "extra": "iterations: 7764\ncpu: 90640.36579082946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 134107.8290205053,
            "unit": "ns/iter",
            "extra": "iterations: 5217\ncpu: 134101.5717845485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 522752.131892763,
            "unit": "ns/iter",
            "extra": "iterations: 1342\ncpu: 522733.7555886774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 432007.295314429,
            "unit": "ns/iter",
            "extra": "iterations: 1622\ncpu: 431979.77805178927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 436703.23268866545,
            "unit": "ns/iter",
            "extra": "iterations: 1603\ncpu: 436676.9806612655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 429604.5505204881,
            "unit": "ns/iter",
            "extra": "iterations: 1633\ncpu: 429603.5517452518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 279628.2704326795,
            "unit": "ns/iter",
            "extra": "iterations: 2496\ncpu: 279620.6730769208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 425068.5407542188,
            "unit": "ns/iter",
            "extra": "iterations: 1644\ncpu: 425052.91970802663 ns\nthreads: 1"
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
        "date": 1705961342062,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7900.346156884039,
            "unit": "ns/iter",
            "extra": "iterations: 88639\ncpu: 7899.3761211205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 56818.3103000024,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56817.81 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 104825.0990111072,
            "unit": "ns/iter",
            "extra": "iterations: 8191\ncpu: 104824.64900500551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 152039.52696948388,
            "unit": "ns/iter",
            "extra": "iterations: 5636\ncpu: 152037.38466997878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 198190.62325154193,
            "unit": "ns/iter",
            "extra": "iterations: 4361\ncpu: 198190.18573721623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 247179.0715915445,
            "unit": "ns/iter",
            "extra": "iterations: 3506\ncpu: 247174.7860810039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 293823.4500507853,
            "unit": "ns/iter",
            "extra": "iterations: 2953\ncpu: 293820.0812732816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 342100.2904368433,
            "unit": "ns/iter",
            "extra": "iterations: 2541\ncpu: 342089.0200708384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 389232.05641936016,
            "unit": "ns/iter",
            "extra": "iterations: 2251\ncpu: 389232.25233229686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6457.65770572853,
            "unit": "ns/iter",
            "extra": "iterations: 108322\ncpu: 6457.274607189681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5329.552328149841,
            "unit": "ns/iter",
            "extra": "iterations: 131306\ncpu: 5329.494463314691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5333.864488937025,
            "unit": "ns/iter",
            "extra": "iterations: 131207\ncpu: 5333.793928677578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5368.131539840883,
            "unit": "ns/iter",
            "extra": "iterations: 130546\ncpu: 5367.945398556836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8454.582075323297,
            "unit": "ns/iter",
            "extra": "iterations: 82869\ncpu: 8454.667004549347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 27161.271942734467,
            "unit": "ns/iter",
            "extra": "iterations: 29896\ncpu: 27160.30238158951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 131074.54405894008,
            "unit": "ns/iter",
            "extra": "iterations: 6514\ncpu: 131069.43506294127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 102185.42406430212,
            "unit": "ns/iter",
            "extra": "iterations: 8336\ncpu: 102183.16938579659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 100777.332860014,
            "unit": "ns/iter",
            "extra": "iterations: 8451\ncpu: 100777.17429889941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 95148.6642769125,
            "unit": "ns/iter",
            "extra": "iterations: 8927\ncpu: 95145.39038870831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 233281.6089575694,
            "unit": "ns/iter",
            "extra": "iterations: 3818\ncpu: 233275.72027239334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1805028.7971311624,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1804970.9016393446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1404557.1104388272,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1404531.6187594598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1415768.2614679139,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1415718.195718659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1412872.8871952142,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1412813.4146341432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 790525.9854326772,
            "unit": "ns/iter",
            "extra": "iterations: 1167\ncpu: 790501.7994858617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1372842.7311669742,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1372820.8271787316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36126.58402934319,
            "unit": "ns/iter",
            "extra": "iterations: 22629\ncpu: 36125.29055636577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 170610.16439170542,
            "unit": "ns/iter",
            "extra": "iterations: 5055\ncpu: 170606.21167161272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 130337.52460257451,
            "unit": "ns/iter",
            "extra": "iterations: 6605\ncpu: 130332.41483724413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 130033.25738970912,
            "unit": "ns/iter",
            "extra": "iterations: 6597\ncpu: 130032.74215552513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 125401.49728220644,
            "unit": "ns/iter",
            "extra": "iterations: 6807\ncpu: 125392.91905391471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 255644.4311058498,
            "unit": "ns/iter",
            "extra": "iterations: 3382\ncpu: 255625.60615020673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1859679.9499998724,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1859569.0000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1463084.9261005856,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1463038.993710697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1477864.184713365,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1477778.9808917192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1451033.929687462,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1450945.6249999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 836838.9928122316,
            "unit": "ns/iter",
            "extra": "iterations: 1113\ncpu: 836800.0898472613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1421448.2247706272,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1421397.0948012203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5106722.4600001285,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5106084.999999965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3063326.4736841014,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3063020.3947368376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25889.313480619123,
            "unit": "ns/iter",
            "extra": "iterations: 31549\ncpu: 25888.21515737434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 124566.18479837243,
            "unit": "ns/iter",
            "extra": "iterations: 6894\ncpu: 124566.27502175843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 102625.60421658431,
            "unit": "ns/iter",
            "extra": "iterations: 8348\ncpu: 102622.86775275467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 104481.58076643068,
            "unit": "ns/iter",
            "extra": "iterations: 8246\ncpu: 104478.12272617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 95469.00873753753,
            "unit": "ns/iter",
            "extra": "iterations: 8927\ncpu: 95466.61812479048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 227074.09598330304,
            "unit": "ns/iter",
            "extra": "iterations: 3834\ncpu: 227076.2910798135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1835227.980314932,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1835148.4251968411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1416831.7511380939,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1416803.4901365775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1419670.0167174207,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1419624.7720364812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1455885.787500044,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1455898.9062500081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 787192.677852348,
            "unit": "ns/iter",
            "extra": "iterations: 1192\ncpu: 787173.9932885875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1392441.1062874128,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1392427.8443113791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2917.3913927271374,
            "unit": "ns/iter",
            "extra": "iterations: 240564\ncpu: 2917.3841472539457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18794.83911536318,
            "unit": "ns/iter",
            "extra": "iterations: 37213\ncpu: 18795.015182866333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15443.308237886331,
            "unit": "ns/iter",
            "extra": "iterations: 45400\ncpu: 15443.21806167399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15120.978800192117,
            "unit": "ns/iter",
            "extra": "iterations: 46274\ncpu: 15120.486666378525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11421.352563997347,
            "unit": "ns/iter",
            "extra": "iterations: 61291\ncpu: 11420.9166109216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 74189.03597198565,
            "unit": "ns/iter",
            "extra": "iterations: 9424\ncpu: 74188.80517826836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 130989.70799775243,
            "unit": "ns/iter",
            "extra": "iterations: 5339\ncpu: 130986.53305862541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 31281.27767848933,
            "unit": "ns/iter",
            "extra": "iterations: 22382\ncpu: 31280.80600482539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 31173.34492288863,
            "unit": "ns/iter",
            "extra": "iterations: 22434\ncpu: 31172.25639654077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 31576.7597478589,
            "unit": "ns/iter",
            "extra": "iterations: 22210\ncpu: 31576.77622692471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 63756.21567912282,
            "unit": "ns/iter",
            "extra": "iterations: 10970\ncpu: 63755.52415679155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 59067.352436251625,
            "unit": "ns/iter",
            "extra": "iterations: 11883\ncpu: 59067.17158966554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22592.282560205884,
            "unit": "ns/iter",
            "extra": "iterations: 30935\ncpu: 22591.918538871832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 115610.97542345194,
            "unit": "ns/iter",
            "extra": "iterations: 6022\ncpu: 115607.48920624425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 92345.46005257599,
            "unit": "ns/iter",
            "extra": "iterations: 7610\ncpu: 92345.41392903974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 91759.72102160635,
            "unit": "ns/iter",
            "extra": "iterations: 7635\ncpu: 91756.47675180051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 91236.05475353592,
            "unit": "ns/iter",
            "extra": "iterations: 7689\ncpu: 91234.06164650824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 139150.37920188365,
            "unit": "ns/iter",
            "extra": "iterations: 5087\ncpu: 139149.911539218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 557856.8114104326,
            "unit": "ns/iter",
            "extra": "iterations: 1262\ncpu: 557830.2694136244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 465877.8224298622,
            "unit": "ns/iter",
            "extra": "iterations: 1498\ncpu: 465882.9773030782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 463045.1176470513,
            "unit": "ns/iter",
            "extra": "iterations: 1513\ncpu: 463024.0581625902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 455153.3218912198,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 455134.19689119054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 285275.88689989457,
            "unit": "ns/iter",
            "extra": "iterations: 2458\ncpu: 285274.77624084876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 448662.985265912,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 448646.5086482977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22573.226058587716,
            "unit": "ns/iter",
            "extra": "iterations: 30961\ncpu: 22571.55776622186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 115590.36083154156,
            "unit": "ns/iter",
            "extra": "iterations: 6061\ncpu: 115583.43507671877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 93602.5331550798,
            "unit": "ns/iter",
            "extra": "iterations: 7480\ncpu: 93600.70855615033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 93296.05244894112,
            "unit": "ns/iter",
            "extra": "iterations: 7493\ncpu: 93297.05058054064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 93058.25419440857,
            "unit": "ns/iter",
            "extra": "iterations: 7510\ncpu: 93050.05326231643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 138266.82587063964,
            "unit": "ns/iter",
            "extra": "iterations: 5025\ncpu: 138258.1890547258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 546933.3900156085,
            "unit": "ns/iter",
            "extra": "iterations: 1282\ncpu: 546901.638065525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 449408.46516129246,
            "unit": "ns/iter",
            "extra": "iterations: 1550\ncpu: 449393.09677419614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 458860.5826771477,
            "unit": "ns/iter",
            "extra": "iterations: 1524\ncpu: 458820.8005249354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 451850.6067270245,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 451844.8253557572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 284552.6535016382,
            "unit": "ns/iter",
            "extra": "iterations: 2456\ncpu: 284545.1140065181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 444657.14203821844,
            "unit": "ns/iter",
            "extra": "iterations: 1570\ncpu: 444655.35031847656 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}