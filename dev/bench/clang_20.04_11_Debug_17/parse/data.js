window.BENCHMARK_DATA = {
  "lastUpdate": 1702489563624,
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
      }
    ]
  }
}