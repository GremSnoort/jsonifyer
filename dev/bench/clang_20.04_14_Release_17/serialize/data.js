window.BENCHMARK_DATA = {
  "lastUpdate": 1702490377869,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-14 20.04 Release c++-17": [
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
        "date": 1702490375698,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 711.3181178122566,
            "unit": "ns/iter",
            "extra": "iterations: 968660\ncpu: 711.2323209382033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10991.880758450048,
            "unit": "ns/iter",
            "extra": "iterations: 75628\ncpu: 10991.130269212461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24397.625896762413,
            "unit": "ns/iter",
            "extra": "iterations: 34290\ncpu: 24396.197142023913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39310.15820015118,
            "unit": "ns/iter",
            "extra": "iterations: 21024\ncpu: 39309.00875190259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48940.42506308607,
            "unit": "ns/iter",
            "extra": "iterations: 16247\ncpu: 48939.502677417375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 50205.88160000443,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50202.54999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60868.94840000241,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60864.10000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 70045.52424775547,
            "unit": "ns/iter",
            "extra": "iterations: 12496\ncpu: 70042.4775928297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 80926.99072957726,
            "unit": "ns/iter",
            "extra": "iterations: 10787\ncpu: 80922.89793269675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 595.5587796566981,
            "unit": "ns/iter",
            "extra": "iterations: 1173178\ncpu: 595.5462001503607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 490.778743254066,
            "unit": "ns/iter",
            "extra": "iterations: 1393440\ncpu: 490.7566884831783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 475.093081173997,
            "unit": "ns/iter",
            "extra": "iterations: 1474412\ncpu: 475.0763694272695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 485.05980782911604,
            "unit": "ns/iter",
            "extra": "iterations: 1441634\ncpu: 485.0502277277029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 956.516258779449,
            "unit": "ns/iter",
            "extra": "iterations: 734680\ncpu: 956.4850002722285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4258.268313431294,
            "unit": "ns/iter",
            "extra": "iterations: 189260\ncpu: 4258.077248229952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 20428.906013550506,
            "unit": "ns/iter",
            "extra": "iterations: 40442\ncpu: 20427.82256070424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 16183.351033193881,
            "unit": "ns/iter",
            "extra": "iterations: 51394\ncpu: 16182.745067517626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15337.109494354576,
            "unit": "ns/iter",
            "extra": "iterations: 53674\ncpu: 15336.622945932873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15928.196223855888,
            "unit": "ns/iter",
            "extra": "iterations: 51640\ncpu: 15928.051897753705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 47449.077280449565,
            "unit": "ns/iter",
            "extra": "iterations: 17650\ncpu: 47446.606232294595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 463412.093412521,
            "unit": "ns/iter",
            "extra": "iterations: 1852\ncpu: 463370.95032397466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 383018.84194259293,
            "unit": "ns/iter",
            "extra": "iterations: 2265\ncpu: 383005.43046357605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 381435.2589519406,
            "unit": "ns/iter",
            "extra": "iterations: 2290\ncpu: 381418.8209606996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 382706.9313248084,
            "unit": "ns/iter",
            "extra": "iterations: 2257\ncpu: 382686.1763402733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 232730.83659780127,
            "unit": "ns/iter",
            "extra": "iterations: 3727\ncpu: 232715.96458277496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 376007.69294066774,
            "unit": "ns/iter",
            "extra": "iterations: 2309\ncpu: 375978.25898657535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1953788.4096639056,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1953723.3193277295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 781579.267111898,
            "unit": "ns/iter",
            "extra": "iterations: 1198\ncpu: 781542.1535893145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2650683.9339079345,
            "unit": "ns/iter",
            "extra": "iterations: 348\ncpu: 2650615.5172413755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4293.352793416272,
            "unit": "ns/iter",
            "extra": "iterations: 181534\ncpu: 4293.206782200579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 20623.94244783277,
            "unit": "ns/iter",
            "extra": "iterations: 40207\ncpu: 20623.83415823116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 16481.214927296944,
            "unit": "ns/iter",
            "extra": "iterations: 49654\ncpu: 16480.766906996458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15391.951652569012,
            "unit": "ns/iter",
            "extra": "iterations: 53674\ncpu: 15391.86384469191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15884.520343368631,
            "unit": "ns/iter",
            "extra": "iterations: 51024\ncpu: 15883.688068360025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 46993.462576202415,
            "unit": "ns/iter",
            "extra": "iterations: 17716\ncpu: 46993.05712350423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 476418.85511205916,
            "unit": "ns/iter",
            "extra": "iterations: 1829\ncpu: 476392.4548933866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 390166.7046678586,
            "unit": "ns/iter",
            "extra": "iterations: 2228\ncpu: 390141.47217235126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 388364.50643013563,
            "unit": "ns/iter",
            "extra": "iterations: 2255\ncpu: 388343.7250554327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 388919.32790493726,
            "unit": "ns/iter",
            "extra": "iterations: 2272\ncpu: 388899.38380281784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 233111.07525746746,
            "unit": "ns/iter",
            "extra": "iterations: 3787\ncpu: 233110.13995246871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 390290.93428061396,
            "unit": "ns/iter",
            "extra": "iterations: 2252\ncpu: 390270.24866785225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1961634.2900431762,
            "unit": "ns/iter",
            "extra": "iterations: 462\ncpu: 1961468.831168823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 770296.7547325568,
            "unit": "ns/iter",
            "extra": "iterations: 1215\ncpu: 770237.2016460899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4574.207080703083,
            "unit": "ns/iter",
            "extra": "iterations: 175830\ncpu: 4574.065290337276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 20262.38134097833,
            "unit": "ns/iter",
            "extra": "iterations: 40806\ncpu: 20262.186933294248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 16328.478555037422,
            "unit": "ns/iter",
            "extra": "iterations: 50548\ncpu: 16328.058479069425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15442.67939689105,
            "unit": "ns/iter",
            "extra": "iterations: 53390\ncpu: 15442.404944746304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 16152.012034797846,
            "unit": "ns/iter",
            "extra": "iterations: 51268\ncpu: 16151.336116095841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 47124.82085728656,
            "unit": "ns/iter",
            "extra": "iterations: 17567\ncpu: 47123.128593385416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 476685.7412473023,
            "unit": "ns/iter",
            "extra": "iterations: 1828\ncpu: 476663.6214442025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 396197.00136240025,
            "unit": "ns/iter",
            "extra": "iterations: 2202\ncpu: 396190.55404178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 390438.2604817131,
            "unit": "ns/iter",
            "extra": "iterations: 2242\ncpu: 390435.05798394134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 389429.87577916135,
            "unit": "ns/iter",
            "extra": "iterations: 2246\ncpu: 389419.99109528196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 237750.75746170053,
            "unit": "ns/iter",
            "extra": "iterations: 3719\ncpu: 237748.9109975811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 378383.31122902373,
            "unit": "ns/iter",
            "extra": "iterations: 2262\ncpu: 378372.4137931011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 304.02217222002776,
            "unit": "ns/iter",
            "extra": "iterations: 2302566\ncpu: 304.01977619751335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1706.562517879768,
            "unit": "ns/iter",
            "extra": "iterations: 415969\ncpu: 1706.534381167823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1302.9898445276535,
            "unit": "ns/iter",
            "extra": "iterations: 536558\ncpu: 1302.8899019304627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1293.8817318685672,
            "unit": "ns/iter",
            "extra": "iterations: 515143\ncpu: 1293.7826972316439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1062.1305712283581,
            "unit": "ns/iter",
            "extra": "iterations: 658966\ncpu: 1062.0591957703393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8109.264631771924,
            "unit": "ns/iter",
            "extra": "iterations: 87310\ncpu: 8108.932539228023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19128.117922986934,
            "unit": "ns/iter",
            "extra": "iterations: 33683\ncpu: 19127.88350206371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4568.288906572028,
            "unit": "ns/iter",
            "extra": "iterations: 153316\ncpu: 4567.975292859224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4475.454896150185,
            "unit": "ns/iter",
            "extra": "iterations: 156572\ncpu: 4475.1896890887365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4534.013014115581,
            "unit": "ns/iter",
            "extra": "iterations: 154294\ncpu: 4533.669488120067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9580.300617094328,
            "unit": "ns/iter",
            "extra": "iterations: 71626\ncpu: 9579.525591265676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8568.052690982666,
            "unit": "ns/iter",
            "extra": "iterations: 81513\ncpu: 8567.47758026331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3105.50039002576,
            "unit": "ns/iter",
            "extra": "iterations: 225626\ncpu: 3105.32828663362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15530.132462397993,
            "unit": "ns/iter",
            "extra": "iterations: 45009\ncpu: 15529.480770512639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12409.380930404992,
            "unit": "ns/iter",
            "extra": "iterations: 56341\ncpu: 12409.21886370479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12052.30852235698,
            "unit": "ns/iter",
            "extra": "iterations: 58106\ncpu: 12051.74164458077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12711.9843029285,
            "unit": "ns/iter",
            "extra": "iterations: 54851\ncpu: 12711.102805782912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28475.15623980355,
            "unit": "ns/iter",
            "extra": "iterations: 24520\ncpu: 28473.47471451876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100621.00344382663,
            "unit": "ns/iter",
            "extra": "iterations: 6969\ncpu: 100610.66150093285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86674.64555239941,
            "unit": "ns/iter",
            "extra": "iterations: 8083\ncpu: 86667.27700111407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85298.09324405988,
            "unit": "ns/iter",
            "extra": "iterations: 8215\ncpu: 85290.94339622579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85769.65682068004,
            "unit": "ns/iter",
            "extra": "iterations: 8159\ncpu: 85766.11104302002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 56069.89121204958,
            "unit": "ns/iter",
            "extra": "iterations: 12483\ncpu: 56066.834895457716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 86053.99275895498,
            "unit": "ns/iter",
            "extra": "iterations: 8148\ncpu: 86043.99852724624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3193.899115785618,
            "unit": "ns/iter",
            "extra": "iterations: 229243\ncpu: 3193.7869422403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15142.417064994632,
            "unit": "ns/iter",
            "extra": "iterations: 46235\ncpu: 15141.507515951054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12116.696096573873,
            "unit": "ns/iter",
            "extra": "iterations: 57821\ncpu: 12115.99591843791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12017.749283130046,
            "unit": "ns/iter",
            "extra": "iterations: 58588\ncpu: 12017.8056939988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12596.183761300452,
            "unit": "ns/iter",
            "extra": "iterations: 55534\ncpu: 12595.518061007588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28025.176122976674,
            "unit": "ns/iter",
            "extra": "iterations: 25045\ncpu: 28024.895188660736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 100084.7661839989,
            "unit": "ns/iter",
            "extra": "iterations: 7044\ncpu: 100076.10732538498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 85211.49483659535,
            "unit": "ns/iter",
            "extra": "iterations: 8231\ncpu: 85206.45122099371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 84692.91363252097,
            "unit": "ns/iter",
            "extra": "iterations: 8267\ncpu: 84684.55304221588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83087.62700201928,
            "unit": "ns/iter",
            "extra": "iterations: 8429\ncpu: 83085.47870447268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 56006.753390777674,
            "unit": "ns/iter",
            "extra": "iterations: 12534\ncpu: 56006.99696824699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84510.58499456626,
            "unit": "ns/iter",
            "extra": "iterations: 8277\ncpu: 84508.56590552037 ns\nthreads: 1"
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
        "date": 1702490375698,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 711.3181178122566,
            "unit": "ns/iter",
            "extra": "iterations: 968660\ncpu: 711.2323209382033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10991.880758450048,
            "unit": "ns/iter",
            "extra": "iterations: 75628\ncpu: 10991.130269212461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24397.625896762413,
            "unit": "ns/iter",
            "extra": "iterations: 34290\ncpu: 24396.197142023913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39310.15820015118,
            "unit": "ns/iter",
            "extra": "iterations: 21024\ncpu: 39309.00875190259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48940.42506308607,
            "unit": "ns/iter",
            "extra": "iterations: 16247\ncpu: 48939.502677417375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 50205.88160000443,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50202.54999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60868.94840000241,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60864.10000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 70045.52424775547,
            "unit": "ns/iter",
            "extra": "iterations: 12496\ncpu: 70042.4775928297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 80926.99072957726,
            "unit": "ns/iter",
            "extra": "iterations: 10787\ncpu: 80922.89793269675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 595.5587796566981,
            "unit": "ns/iter",
            "extra": "iterations: 1173178\ncpu: 595.5462001503607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 490.778743254066,
            "unit": "ns/iter",
            "extra": "iterations: 1393440\ncpu: 490.7566884831783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 475.093081173997,
            "unit": "ns/iter",
            "extra": "iterations: 1474412\ncpu: 475.0763694272695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 485.05980782911604,
            "unit": "ns/iter",
            "extra": "iterations: 1441634\ncpu: 485.0502277277029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 956.516258779449,
            "unit": "ns/iter",
            "extra": "iterations: 734680\ncpu: 956.4850002722285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4258.268313431294,
            "unit": "ns/iter",
            "extra": "iterations: 189260\ncpu: 4258.077248229952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 20428.906013550506,
            "unit": "ns/iter",
            "extra": "iterations: 40442\ncpu: 20427.82256070424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 16183.351033193881,
            "unit": "ns/iter",
            "extra": "iterations: 51394\ncpu: 16182.745067517626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15337.109494354576,
            "unit": "ns/iter",
            "extra": "iterations: 53674\ncpu: 15336.622945932873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15928.196223855888,
            "unit": "ns/iter",
            "extra": "iterations: 51640\ncpu: 15928.051897753705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 47449.077280449565,
            "unit": "ns/iter",
            "extra": "iterations: 17650\ncpu: 47446.606232294595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 463412.093412521,
            "unit": "ns/iter",
            "extra": "iterations: 1852\ncpu: 463370.95032397466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 383018.84194259293,
            "unit": "ns/iter",
            "extra": "iterations: 2265\ncpu: 383005.43046357605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 381435.2589519406,
            "unit": "ns/iter",
            "extra": "iterations: 2290\ncpu: 381418.8209606996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 382706.9313248084,
            "unit": "ns/iter",
            "extra": "iterations: 2257\ncpu: 382686.1763402733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 232730.83659780127,
            "unit": "ns/iter",
            "extra": "iterations: 3727\ncpu: 232715.96458277496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 376007.69294066774,
            "unit": "ns/iter",
            "extra": "iterations: 2309\ncpu: 375978.25898657535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1953788.4096639056,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1953723.3193277295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 781579.267111898,
            "unit": "ns/iter",
            "extra": "iterations: 1198\ncpu: 781542.1535893145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2650683.9339079345,
            "unit": "ns/iter",
            "extra": "iterations: 348\ncpu: 2650615.5172413755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4293.352793416272,
            "unit": "ns/iter",
            "extra": "iterations: 181534\ncpu: 4293.206782200579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 20623.94244783277,
            "unit": "ns/iter",
            "extra": "iterations: 40207\ncpu: 20623.83415823116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 16481.214927296944,
            "unit": "ns/iter",
            "extra": "iterations: 49654\ncpu: 16480.766906996458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15391.951652569012,
            "unit": "ns/iter",
            "extra": "iterations: 53674\ncpu: 15391.86384469191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15884.520343368631,
            "unit": "ns/iter",
            "extra": "iterations: 51024\ncpu: 15883.688068360025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 46993.462576202415,
            "unit": "ns/iter",
            "extra": "iterations: 17716\ncpu: 46993.05712350423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 476418.85511205916,
            "unit": "ns/iter",
            "extra": "iterations: 1829\ncpu: 476392.4548933866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 390166.7046678586,
            "unit": "ns/iter",
            "extra": "iterations: 2228\ncpu: 390141.47217235126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 388364.50643013563,
            "unit": "ns/iter",
            "extra": "iterations: 2255\ncpu: 388343.7250554327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 388919.32790493726,
            "unit": "ns/iter",
            "extra": "iterations: 2272\ncpu: 388899.38380281784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 233111.07525746746,
            "unit": "ns/iter",
            "extra": "iterations: 3787\ncpu: 233110.13995246871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 390290.93428061396,
            "unit": "ns/iter",
            "extra": "iterations: 2252\ncpu: 390270.24866785225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1961634.2900431762,
            "unit": "ns/iter",
            "extra": "iterations: 462\ncpu: 1961468.831168823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 770296.7547325568,
            "unit": "ns/iter",
            "extra": "iterations: 1215\ncpu: 770237.2016460899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4574.207080703083,
            "unit": "ns/iter",
            "extra": "iterations: 175830\ncpu: 4574.065290337276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 20262.38134097833,
            "unit": "ns/iter",
            "extra": "iterations: 40806\ncpu: 20262.186933294248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 16328.478555037422,
            "unit": "ns/iter",
            "extra": "iterations: 50548\ncpu: 16328.058479069425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15442.67939689105,
            "unit": "ns/iter",
            "extra": "iterations: 53390\ncpu: 15442.404944746304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 16152.012034797846,
            "unit": "ns/iter",
            "extra": "iterations: 51268\ncpu: 16151.336116095841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 47124.82085728656,
            "unit": "ns/iter",
            "extra": "iterations: 17567\ncpu: 47123.128593385416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 476685.7412473023,
            "unit": "ns/iter",
            "extra": "iterations: 1828\ncpu: 476663.6214442025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 396197.00136240025,
            "unit": "ns/iter",
            "extra": "iterations: 2202\ncpu: 396190.55404178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 390438.2604817131,
            "unit": "ns/iter",
            "extra": "iterations: 2242\ncpu: 390435.05798394134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 389429.87577916135,
            "unit": "ns/iter",
            "extra": "iterations: 2246\ncpu: 389419.99109528196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 237750.75746170053,
            "unit": "ns/iter",
            "extra": "iterations: 3719\ncpu: 237748.9109975811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 378383.31122902373,
            "unit": "ns/iter",
            "extra": "iterations: 2262\ncpu: 378372.4137931011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 304.02217222002776,
            "unit": "ns/iter",
            "extra": "iterations: 2302566\ncpu: 304.01977619751335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1706.562517879768,
            "unit": "ns/iter",
            "extra": "iterations: 415969\ncpu: 1706.534381167823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1302.9898445276535,
            "unit": "ns/iter",
            "extra": "iterations: 536558\ncpu: 1302.8899019304627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1293.8817318685672,
            "unit": "ns/iter",
            "extra": "iterations: 515143\ncpu: 1293.7826972316439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1062.1305712283581,
            "unit": "ns/iter",
            "extra": "iterations: 658966\ncpu: 1062.0591957703393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8109.264631771924,
            "unit": "ns/iter",
            "extra": "iterations: 87310\ncpu: 8108.932539228023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19128.117922986934,
            "unit": "ns/iter",
            "extra": "iterations: 33683\ncpu: 19127.88350206371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4568.288906572028,
            "unit": "ns/iter",
            "extra": "iterations: 153316\ncpu: 4567.975292859224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4475.454896150185,
            "unit": "ns/iter",
            "extra": "iterations: 156572\ncpu: 4475.1896890887365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4534.013014115581,
            "unit": "ns/iter",
            "extra": "iterations: 154294\ncpu: 4533.669488120067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9580.300617094328,
            "unit": "ns/iter",
            "extra": "iterations: 71626\ncpu: 9579.525591265676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8568.052690982666,
            "unit": "ns/iter",
            "extra": "iterations: 81513\ncpu: 8567.47758026331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3105.50039002576,
            "unit": "ns/iter",
            "extra": "iterations: 225626\ncpu: 3105.32828663362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15530.132462397993,
            "unit": "ns/iter",
            "extra": "iterations: 45009\ncpu: 15529.480770512639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12409.380930404992,
            "unit": "ns/iter",
            "extra": "iterations: 56341\ncpu: 12409.21886370479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12052.30852235698,
            "unit": "ns/iter",
            "extra": "iterations: 58106\ncpu: 12051.74164458077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12711.9843029285,
            "unit": "ns/iter",
            "extra": "iterations: 54851\ncpu: 12711.102805782912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28475.15623980355,
            "unit": "ns/iter",
            "extra": "iterations: 24520\ncpu: 28473.47471451876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100621.00344382663,
            "unit": "ns/iter",
            "extra": "iterations: 6969\ncpu: 100610.66150093285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86674.64555239941,
            "unit": "ns/iter",
            "extra": "iterations: 8083\ncpu: 86667.27700111407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85298.09324405988,
            "unit": "ns/iter",
            "extra": "iterations: 8215\ncpu: 85290.94339622579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85769.65682068004,
            "unit": "ns/iter",
            "extra": "iterations: 8159\ncpu: 85766.11104302002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 56069.89121204958,
            "unit": "ns/iter",
            "extra": "iterations: 12483\ncpu: 56066.834895457716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 86053.99275895498,
            "unit": "ns/iter",
            "extra": "iterations: 8148\ncpu: 86043.99852724624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3193.899115785618,
            "unit": "ns/iter",
            "extra": "iterations: 229243\ncpu: 3193.7869422403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15142.417064994632,
            "unit": "ns/iter",
            "extra": "iterations: 46235\ncpu: 15141.507515951054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12116.696096573873,
            "unit": "ns/iter",
            "extra": "iterations: 57821\ncpu: 12115.99591843791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12017.749283130046,
            "unit": "ns/iter",
            "extra": "iterations: 58588\ncpu: 12017.8056939988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12596.183761300452,
            "unit": "ns/iter",
            "extra": "iterations: 55534\ncpu: 12595.518061007588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28025.176122976674,
            "unit": "ns/iter",
            "extra": "iterations: 25045\ncpu: 28024.895188660736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 100084.7661839989,
            "unit": "ns/iter",
            "extra": "iterations: 7044\ncpu: 100076.10732538498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 85211.49483659535,
            "unit": "ns/iter",
            "extra": "iterations: 8231\ncpu: 85206.45122099371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 84692.91363252097,
            "unit": "ns/iter",
            "extra": "iterations: 8267\ncpu: 84684.55304221588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83087.62700201928,
            "unit": "ns/iter",
            "extra": "iterations: 8429\ncpu: 83085.47870447268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 56006.753390777674,
            "unit": "ns/iter",
            "extra": "iterations: 12534\ncpu: 56006.99696824699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84510.58499456626,
            "unit": "ns/iter",
            "extra": "iterations: 8277\ncpu: 84508.56590552037 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}