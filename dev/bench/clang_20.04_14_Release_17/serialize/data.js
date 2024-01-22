window.BENCHMARK_DATA = {
  "lastUpdate": 1705957173042,
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
        "date": 1702493006674,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 721.9738350447402,
            "unit": "ns/iter",
            "extra": "iterations: 966904\ncpu: 721.9353731083954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11092.016205724016,
            "unit": "ns/iter",
            "extra": "iterations: 76763\ncpu: 11091.493297552206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24377.72195008784,
            "unit": "ns/iter",
            "extra": "iterations: 34501\ncpu: 24377.362974986227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39956.576329971875,
            "unit": "ns/iter",
            "extra": "iterations: 21335\ncpu: 39954.70822591986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48319.99212551575,
            "unit": "ns/iter",
            "extra": "iterations: 16763\ncpu: 48318.37379943925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 50491.64890000384,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50487.02999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60841.895399994435,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60841.21000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68750.83047055395,
            "unit": "ns/iter",
            "extra": "iterations: 12517\ncpu: 68748.6298633858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 80193.7877648317,
            "unit": "ns/iter",
            "extra": "iterations: 10903\ncpu: 80187.4529945887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 590.1959574242975,
            "unit": "ns/iter",
            "extra": "iterations: 1174944\ncpu: 590.1804681755046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 499.7978661354339,
            "unit": "ns/iter",
            "extra": "iterations: 1395590\ncpu: 499.7681267420944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 486.3286808525676,
            "unit": "ns/iter",
            "extra": "iterations: 1445752\ncpu: 486.3305739850273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 493.6111344860502,
            "unit": "ns/iter",
            "extra": "iterations: 1414147\ncpu: 493.58659319009917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 965.9772041109968,
            "unit": "ns/iter",
            "extra": "iterations: 717761\ncpu: 965.9606749321838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4346.235444099662,
            "unit": "ns/iter",
            "extra": "iterations: 181198\ncpu: 4346.007130321532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 20001.04324324419,
            "unit": "ns/iter",
            "extra": "iterations: 40145\ncpu: 20001.103499813176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 16092.729869053821,
            "unit": "ns/iter",
            "extra": "iterations: 50631\ncpu: 16091.710612075582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15119.703558287012,
            "unit": "ns/iter",
            "extra": "iterations: 52722\ncpu: 15118.847919274662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 16003.690133638234,
            "unit": "ns/iter",
            "extra": "iterations: 50809\ncpu: 16002.645200653467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 44835.123109312895,
            "unit": "ns/iter",
            "extra": "iterations: 18049\ncpu: 44834.561471549605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 462015.4623431312,
            "unit": "ns/iter",
            "extra": "iterations: 1912\ncpu: 461993.46234309656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 384068.08934707794,
            "unit": "ns/iter",
            "extra": "iterations: 2328\ncpu: 384037.4999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 380922.2302284462,
            "unit": "ns/iter",
            "extra": "iterations: 2276\ncpu: 380903.95430580014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 383306.5254458728,
            "unit": "ns/iter",
            "extra": "iterations: 2299\ncpu: 383268.2905611138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 232803.03743456028,
            "unit": "ns/iter",
            "extra": "iterations: 3820\ncpu: 232798.63874345584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 380787.8694505444,
            "unit": "ns/iter",
            "extra": "iterations: 2275\ncpu: 380771.29670329625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1936781.1894737412,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1936478.5263157925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 780511.8420181676,
            "unit": "ns/iter",
            "extra": "iterations: 1209\ncpu: 780470.967741933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2631777.4628572417,
            "unit": "ns/iter",
            "extra": "iterations: 350\ncpu: 2631607.142857147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4550.937019511941,
            "unit": "ns/iter",
            "extra": "iterations: 174562\ncpu: 4550.9011124987155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 20232.583708506343,
            "unit": "ns/iter",
            "extra": "iterations: 40426\ncpu: 20231.19527037061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 16079.897606463217,
            "unit": "ns/iter",
            "extra": "iterations: 50511\ncpu: 16079.46387915501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15246.011642584106,
            "unit": "ns/iter",
            "extra": "iterations: 53081\ncpu: 15244.955822233858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 16034.326832784083,
            "unit": "ns/iter",
            "extra": "iterations: 51329\ncpu: 16034.156130062976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 46490.43786347225,
            "unit": "ns/iter",
            "extra": "iterations: 17711\ncpu: 46486.9629044096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 478308.5791190414,
            "unit": "ns/iter",
            "extra": "iterations: 1839\ncpu: 478293.5834692757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 391433.36677256605,
            "unit": "ns/iter",
            "extra": "iterations: 2203\ncpu: 391423.60417612304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 383808.2463382284,
            "unit": "ns/iter",
            "extra": "iterations: 2253\ncpu: 383761.47359076916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 380367.3128515571,
            "unit": "ns/iter",
            "extra": "iterations: 2311\ncpu: 380358.19991345896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 224791.28159411857,
            "unit": "ns/iter",
            "extra": "iterations: 3814\ncpu: 224773.7283691661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 383257.9540838831,
            "unit": "ns/iter",
            "extra": "iterations: 2265\ncpu: 383259.5143487874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1924722.4477611817,
            "unit": "ns/iter",
            "extra": "iterations: 469\ncpu: 1924610.6609808053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 766141.5339885082,
            "unit": "ns/iter",
            "extra": "iterations: 1221\ncpu: 766123.177723178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4438.699248667155,
            "unit": "ns/iter",
            "extra": "iterations: 178749\ncpu: 4438.474061393352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 20178.3459505984,
            "unit": "ns/iter",
            "extra": "iterations: 41821\ncpu: 20177.351091556888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 16330.317999486684,
            "unit": "ns/iter",
            "extra": "iterations: 50607\ncpu: 16328.72922718207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15344.757220067053,
            "unit": "ns/iter",
            "extra": "iterations: 53843\ncpu: 15343.97228980558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 16025.234346162722,
            "unit": "ns/iter",
            "extra": "iterations: 52559\ncpu: 16023.712399398744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 47080.626351961335,
            "unit": "ns/iter",
            "extra": "iterations: 17752\ncpu: 47077.41099594424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 462316.00582009455,
            "unit": "ns/iter",
            "extra": "iterations: 1890\ncpu: 462285.13227513235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 383005.65346106107,
            "unit": "ns/iter",
            "extra": "iterations: 2297\ncpu: 382980.58336961095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 384577.19227431086,
            "unit": "ns/iter",
            "extra": "iterations: 2304\ncpu: 384544.66145833157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 373291.3663366195,
            "unit": "ns/iter",
            "extra": "iterations: 2323\ncpu: 373280.542402065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 232827.38686130647,
            "unit": "ns/iter",
            "extra": "iterations: 3973\ncpu: 232811.98087087861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 376827.32693983766,
            "unit": "ns/iter",
            "extra": "iterations: 2294\ncpu: 376817.21883173566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 299.4755065829896,
            "unit": "ns/iter",
            "extra": "iterations: 2328197\ncpu: 299.456145678393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1705.1214540407614,
            "unit": "ns/iter",
            "extra": "iterations: 404968\ncpu: 1705.0971928646238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1302.1022243301072,
            "unit": "ns/iter",
            "extra": "iterations: 537690\ncpu: 1302.0487641577804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1284.484390162025,
            "unit": "ns/iter",
            "extra": "iterations: 548244\ncpu: 1284.4509014234497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1044.3476655118297,
            "unit": "ns/iter",
            "extra": "iterations: 673124\ncpu: 1044.3309107980056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8235.077934050807,
            "unit": "ns/iter",
            "extra": "iterations: 84610\ncpu: 8234.779576882123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18926.97326869488,
            "unit": "ns/iter",
            "extra": "iterations: 36923\ncpu: 18926.262763047514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4624.317026808082,
            "unit": "ns/iter",
            "extra": "iterations: 153088\ncpu: 4624.236386914768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4536.654360788255,
            "unit": "ns/iter",
            "extra": "iterations: 156646\ncpu: 4536.392885869995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4679.71216884889,
            "unit": "ns/iter",
            "extra": "iterations: 152989\ncpu: 4679.1507886188165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9723.290091112538,
            "unit": "ns/iter",
            "extra": "iterations: 72329\ncpu: 9722.638222566284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8759.09158360195,
            "unit": "ns/iter",
            "extra": "iterations: 80058\ncpu: 8759.053436258724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3047.7602500134085,
            "unit": "ns/iter",
            "extra": "iterations: 229268\ncpu: 3047.7733482212616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15483.57035713297,
            "unit": "ns/iter",
            "extra": "iterations: 45333\ncpu: 15482.760902653756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12471.119353961072,
            "unit": "ns/iter",
            "extra": "iterations: 55105\ncpu: 12471.04436983932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12264.56394001021,
            "unit": "ns/iter",
            "extra": "iterations: 56944\ncpu: 12263.434251194174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12850.037923233882,
            "unit": "ns/iter",
            "extra": "iterations: 54373\ncpu: 12849.923675353717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28679.071764082393,
            "unit": "ns/iter",
            "extra": "iterations: 24483\ncpu: 28676.824735530918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100290.14008062944,
            "unit": "ns/iter",
            "extra": "iterations: 6946\ncpu: 100287.9067088974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86635.41732381616,
            "unit": "ns/iter",
            "extra": "iterations: 7989\ncpu: 86634.18450369276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85748.81184967008,
            "unit": "ns/iter",
            "extra": "iterations: 8169\ncpu: 85741.87783082388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85818.61366153765,
            "unit": "ns/iter",
            "extra": "iterations: 8125\ncpu: 85815.23692307656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55448.51454618293,
            "unit": "ns/iter",
            "extra": "iterations: 12615\ncpu: 55444.26476416961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 86114.4860032059,
            "unit": "ns/iter",
            "extra": "iterations: 8109\ncpu: 86105.88235294084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3033.9959969698702,
            "unit": "ns/iter",
            "extra": "iterations: 232324\ncpu: 3033.835075153714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15170.11598882873,
            "unit": "ns/iter",
            "extra": "iterations: 45832\ncpu: 15168.932187118167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12319.969892209769,
            "unit": "ns/iter",
            "extra": "iterations: 56962\ncpu: 12320.027386678721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12052.463956592885,
            "unit": "ns/iter",
            "extra": "iterations: 58055\ncpu: 12052.03686159673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12476.089376114745,
            "unit": "ns/iter",
            "extra": "iterations: 56100\ncpu: 12475.124777183613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28275.08110290401,
            "unit": "ns/iter",
            "extra": "iterations: 24771\ncpu: 28272.148883775426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97121.82726763998,
            "unit": "ns/iter",
            "extra": "iterations: 7144\ncpu: 97115.95744681002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84697.61687762784,
            "unit": "ns/iter",
            "extra": "iterations: 8295\ncpu: 84691.86256781308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 85018.82600266601,
            "unit": "ns/iter",
            "extra": "iterations: 8253\ncpu: 85014.57651763037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84340.32023550884,
            "unit": "ns/iter",
            "extra": "iterations: 8322\ncpu: 84335.85676520027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 56821.3684210493,
            "unit": "ns/iter",
            "extra": "iterations: 12312\ncpu: 56816.49610136434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 85635.42120729717,
            "unit": "ns/iter",
            "extra": "iterations: 8167\ncpu: 85631.74972450257 ns\nthreads: 1"
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
        "date": 1702504000821,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 717.350033452435,
            "unit": "ns/iter",
            "extra": "iterations: 971530\ncpu: 717.3358516978375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11036.773404849302,
            "unit": "ns/iter",
            "extra": "iterations: 75134\ncpu: 11036.593286661164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24315.81228049773,
            "unit": "ns/iter",
            "extra": "iterations: 34168\ncpu: 24315.41500819481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38306.16168860646,
            "unit": "ns/iter",
            "extra": "iterations: 22030\ncpu: 38304.9205628688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48221.23626143719,
            "unit": "ns/iter",
            "extra": "iterations: 16723\ncpu: 48220.25952281291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 60295.4024666919,
            "unit": "ns/iter",
            "extra": "iterations: 14108\ncpu: 60294.75474907849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60212.28880000535,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60212.43999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 69361.57676881035,
            "unit": "ns/iter",
            "extra": "iterations: 12466\ncpu: 69360.20375421154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 79621.27311690334,
            "unit": "ns/iter",
            "extra": "iterations: 10966\ncpu: 79620.66387014398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 594.2285019217054,
            "unit": "ns/iter",
            "extra": "iterations: 1180152\ncpu: 594.2137114541166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 503.9635634018694,
            "unit": "ns/iter",
            "extra": "iterations: 1385283\ncpu: 503.9558703889393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 494.40441344368065,
            "unit": "ns/iter",
            "extra": "iterations: 1423333\ncpu: 494.3950572353765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 500.28982759808065,
            "unit": "ns/iter",
            "extra": "iterations: 1344068\ncpu: 500.2836910037283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 966.2405406822526,
            "unit": "ns/iter",
            "extra": "iterations: 705627\ncpu: 966.1583244405342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4505.829627414124,
            "unit": "ns/iter",
            "extra": "iterations: 167210\ncpu: 4505.7341068117885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 20523.782711118412,
            "unit": "ns/iter",
            "extra": "iterations: 39054\ncpu: 20523.106467967442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 16229.926543059675,
            "unit": "ns/iter",
            "extra": "iterations: 49512\ncpu: 16229.057602197467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15711.198327203301,
            "unit": "ns/iter",
            "extra": "iterations: 53563\ncpu: 15710.131994100411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 16288.793531856778,
            "unit": "ns/iter",
            "extra": "iterations: 51514\ncpu: 16288.496331094471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 46939.776303263476,
            "unit": "ns/iter",
            "extra": "iterations: 17859\ncpu: 46938.02004591514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 466796.8535031837,
            "unit": "ns/iter",
            "extra": "iterations: 1884\ncpu: 466743.47133758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 375002.43314582075,
            "unit": "ns/iter",
            "extra": "iterations: 2311\ncpu: 374992.34097793093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 378530.96253230306,
            "unit": "ns/iter",
            "extra": "iterations: 2322\ncpu: 378522.0068906113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 386052.65640125924,
            "unit": "ns/iter",
            "extra": "iterations: 2273\ncpu: 386045.5785305761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 237523.19361058171,
            "unit": "ns/iter",
            "extra": "iterations: 3631\ncpu: 237518.61746075389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 382162.4556907181,
            "unit": "ns/iter",
            "extra": "iterations: 2302\ncpu: 382153.6924413545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1958833.1297872502,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 1958784.2553191502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 757071.0866774202,
            "unit": "ns/iter",
            "extra": "iterations: 1246\ncpu: 757050.9630818634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2657995.0888253343,
            "unit": "ns/iter",
            "extra": "iterations: 349\ncpu: 2657870.487106027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4535.634824459036,
            "unit": "ns/iter",
            "extra": "iterations: 174119\ncpu: 4535.532595523764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 20440.63220205202,
            "unit": "ns/iter",
            "extra": "iterations: 40544\ncpu: 20440.43754932916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 16308.62157581513,
            "unit": "ns/iter",
            "extra": "iterations: 50742\ncpu: 16308.08206219697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15487.81899243827,
            "unit": "ns/iter",
            "extra": "iterations: 53158\ncpu: 15487.665073930604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 16242.838763105261,
            "unit": "ns/iter",
            "extra": "iterations: 51322\ncpu: 16242.361950040911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 47139.82409188689,
            "unit": "ns/iter",
            "extra": "iterations: 17674\ncpu: 47138.97816000891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 477658.8986225871,
            "unit": "ns/iter",
            "extra": "iterations: 1815\ncpu: 477646.1157024822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 392383.5329448362,
            "unit": "ns/iter",
            "extra": "iterations: 2231\ncpu: 392384.31196772534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 388381.93075898226,
            "unit": "ns/iter",
            "extra": "iterations: 2253\ncpu: 388375.27740789944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 387944.730277622,
            "unit": "ns/iter",
            "extra": "iterations: 2269\ncpu: 387934.5967386486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 232104.32660650124,
            "unit": "ns/iter",
            "extra": "iterations: 3766\ncpu: 232102.46946362252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 385341.3162505444,
            "unit": "ns/iter",
            "extra": "iterations: 2283\ncpu: 385331.05562855804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1951590.05579382,
            "unit": "ns/iter",
            "extra": "iterations: 466\ncpu: 1951528.9699570707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 770646.77491689,
            "unit": "ns/iter",
            "extra": "iterations: 1204\ncpu: 770610.8803986721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4567.2956701613475,
            "unit": "ns/iter",
            "extra": "iterations: 176450\ncpu: 4567.265514310015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 20423.059809148785,
            "unit": "ns/iter",
            "extra": "iterations: 40345\ncpu: 20422.813235840753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 16324.596536710334,
            "unit": "ns/iter",
            "extra": "iterations: 50530\ncpu: 16324.371660399822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15502.1536161581,
            "unit": "ns/iter",
            "extra": "iterations: 53178\ncpu: 15501.906803565447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 16100.95085369746,
            "unit": "ns/iter",
            "extra": "iterations: 51072\ncpu: 16100.342653508837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 47396.858124858554,
            "unit": "ns/iter",
            "extra": "iterations: 17748\ncpu: 47394.3373901283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 473707.9297498743,
            "unit": "ns/iter",
            "extra": "iterations: 1879\ncpu: 473666.57796700427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 386765.39099733764,
            "unit": "ns/iter",
            "extra": "iterations: 2266\ncpu: 386733.27449249756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 382165.0372133261,
            "unit": "ns/iter",
            "extra": "iterations: 2311\ncpu: 382155.7334487224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 381344.6436880804,
            "unit": "ns/iter",
            "extra": "iterations: 2321\ncpu: 381332.83067643136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 235697.94172434427,
            "unit": "ns/iter",
            "extra": "iterations: 3758\ncpu: 235686.08302288386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 382093.650301473,
            "unit": "ns/iter",
            "extra": "iterations: 2322\ncpu: 382072.39448750805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 305.6125205257299,
            "unit": "ns/iter",
            "extra": "iterations: 2304424\ncpu: 305.59020388608883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1673.997374662769,
            "unit": "ns/iter",
            "extra": "iterations: 418232\ncpu: 1673.8623539088298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1319.3141987830102,
            "unit": "ns/iter",
            "extra": "iterations: 532440\ncpu: 1319.2344677334445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1326.1616155498307,
            "unit": "ns/iter",
            "extra": "iterations: 544830\ncpu: 1326.1525613494127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1061.5882271722514,
            "unit": "ns/iter",
            "extra": "iterations: 659077\ncpu: 1061.5714097138962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8087.062809555803,
            "unit": "ns/iter",
            "extra": "iterations: 86818\ncpu: 8086.415259508401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19439.721029083907,
            "unit": "ns/iter",
            "extra": "iterations: 35760\ncpu: 19438.2941834451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4588.954112760865,
            "unit": "ns/iter",
            "extra": "iterations: 150957\ncpu: 4588.719966613071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4591.8139745502785,
            "unit": "ns/iter",
            "extra": "iterations: 152377\ncpu: 4591.782224351416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4621.714452606857,
            "unit": "ns/iter",
            "extra": "iterations: 151509\ncpu: 4621.405329056399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9706.347797100718,
            "unit": "ns/iter",
            "extra": "iterations: 71996\ncpu: 9706.362853491813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8759.076996185868,
            "unit": "ns/iter",
            "extra": "iterations: 79965\ncpu: 8758.678171700034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3143.337380140505,
            "unit": "ns/iter",
            "extra": "iterations: 223386\ncpu: 3143.2918804222622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16602.76517447974,
            "unit": "ns/iter",
            "extra": "iterations: 42555\ncpu: 16564.54940665031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12654.910480270155,
            "unit": "ns/iter",
            "extra": "iterations: 55094\ncpu: 12654.071223726867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12410.158738028147,
            "unit": "ns/iter",
            "extra": "iterations: 56483\ncpu: 12409.413451835064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13118.239339468524,
            "unit": "ns/iter",
            "extra": "iterations: 53351\ncpu: 13117.45046953201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28689.019823071,
            "unit": "ns/iter",
            "extra": "iterations: 24416\ncpu: 28686.95937090446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 102254.15394736687,
            "unit": "ns/iter",
            "extra": "iterations: 6840\ncpu: 102250.99415204713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 87822.73815838568,
            "unit": "ns/iter",
            "extra": "iterations: 7917\ncpu: 87821.19489705715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 87559.95635430796,
            "unit": "ns/iter",
            "extra": "iterations: 7790\ncpu: 87554.30038511024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 87483.1210040015,
            "unit": "ns/iter",
            "extra": "iterations: 8008\ncpu: 87476.48601398511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 57065.48540942476,
            "unit": "ns/iter",
            "extra": "iterations: 12371\ncpu: 57062.63034516197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 87304.02707761538,
            "unit": "ns/iter",
            "extra": "iterations: 8014\ncpu: 87301.94659346207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3262.234217451825,
            "unit": "ns/iter",
            "extra": "iterations: 218485\ncpu: 3262.161704464794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15389.450412496519,
            "unit": "ns/iter",
            "extra": "iterations: 45576\ncpu: 15389.485694225104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12357.171675118294,
            "unit": "ns/iter",
            "extra": "iterations: 56205\ncpu: 12356.877502001827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12299.614717325669,
            "unit": "ns/iter",
            "extra": "iterations: 57062\ncpu: 12299.29024569768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12747.181246147522,
            "unit": "ns/iter",
            "extra": "iterations: 55146\ncpu: 12746.75769774789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28110.965813683906,
            "unit": "ns/iter",
            "extra": "iterations: 24893\ncpu: 28110.344273490697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 99140.86180584478,
            "unit": "ns/iter",
            "extra": "iterations: 7077\ncpu: 99139.19740002847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 85094.51840154974,
            "unit": "ns/iter",
            "extra": "iterations: 8233\ncpu: 85093.59893113174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 84946.14210718748,
            "unit": "ns/iter",
            "extra": "iterations: 8191\ncpu: 84945.26919790005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84203.39714183622,
            "unit": "ns/iter",
            "extra": "iterations: 8327\ncpu: 84201.56118650161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 57104.36813943733,
            "unit": "ns/iter",
            "extra": "iterations: 12335\ncpu: 57103.923794081864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 85166.09686436328,
            "unit": "ns/iter",
            "extra": "iterations: 8228\ncpu: 85166.32231404996 ns\nthreads: 1"
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
        "date": 1705575657246,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 712.6577781512061,
            "unit": "ns/iter",
            "extra": "iterations: 976016\ncpu: 712.6369854592548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10975.60064414365,
            "unit": "ns/iter",
            "extra": "iterations: 75449\ncpu: 10975.036117112222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24156.408394169273,
            "unit": "ns/iter",
            "extra": "iterations: 34381\ncpu: 24155.085657776104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38550.617254760466,
            "unit": "ns/iter",
            "extra": "iterations: 22417\ncpu: 38548.5658205826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 50645.188250761734,
            "unit": "ns/iter",
            "extra": "iterations: 16733\ncpu: 50642.41917169665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 50354.46790000151,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50354.01000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60618.68500000856,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60614.74999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 70412.2697182553,
            "unit": "ns/iter",
            "extra": "iterations: 12387\ncpu: 70408.29902316944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 80745.76844619181,
            "unit": "ns/iter",
            "extra": "iterations: 10883\ncpu: 80740.78838555542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 600.7040591831762,
            "unit": "ns/iter",
            "extra": "iterations: 1164520\ncpu: 600.6755573111678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 494.1749437043103,
            "unit": "ns/iter",
            "extra": "iterations: 1417959\ncpu: 494.1682375865599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 483.0525885419218,
            "unit": "ns/iter",
            "extra": "iterations: 1447958\ncpu: 483.0395633022499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 494.2517878346251,
            "unit": "ns/iter",
            "extra": "iterations: 1409806\ncpu: 494.24693894053524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 974.2416555777734,
            "unit": "ns/iter",
            "extra": "iterations: 721440\ncpu: 974.2255766245311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4408.212095453453,
            "unit": "ns/iter",
            "extra": "iterations: 177637\ncpu: 4408.190861138163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 20249.918804910267,
            "unit": "ns/iter",
            "extra": "iterations: 40064\ncpu: 20248.999101437676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 16181.573415615578,
            "unit": "ns/iter",
            "extra": "iterations: 51045\ncpu: 16181.381134293255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15358.65723691695,
            "unit": "ns/iter",
            "extra": "iterations: 53766\ncpu: 15357.657255514669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15926.992421296916,
            "unit": "ns/iter",
            "extra": "iterations: 51460\ncpu: 15926.088223863144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 45751.670080833974,
            "unit": "ns/iter",
            "extra": "iterations: 18062\ncpu: 45750.58686745651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 454303.19625664805,
            "unit": "ns/iter",
            "extra": "iterations: 1870\ncpu: 454292.19251336815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 377500.42534718313,
            "unit": "ns/iter",
            "extra": "iterations: 2304\ncpu: 377496.0069444438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 380278.8442906396,
            "unit": "ns/iter",
            "extra": "iterations: 2312\ncpu: 380274.956747405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 382260.0131751993,
            "unit": "ns/iter",
            "extra": "iterations: 2277\ncpu: 382252.3056653495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 234579.46616134248,
            "unit": "ns/iter",
            "extra": "iterations: 3694\ncpu: 234574.8511099077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 376279.66867471504,
            "unit": "ns/iter",
            "extra": "iterations: 2324\ncpu: 376267.3407917375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1930139.6659708163,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1930094.1544885193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 780635.3119800071,
            "unit": "ns/iter",
            "extra": "iterations: 1202\ncpu: 780614.3926788672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2616815.2237959355,
            "unit": "ns/iter",
            "extra": "iterations: 353\ncpu: 2616587.252124646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4573.822453828514,
            "unit": "ns/iter",
            "extra": "iterations: 174242\ncpu: 4573.626335785857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 20229.356687898704,
            "unit": "ns/iter",
            "extra": "iterations: 40663\ncpu: 20228.389444950044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 16203.802777668277,
            "unit": "ns/iter",
            "extra": "iterations: 50978\ncpu: 16202.98167837104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15280.167314024064,
            "unit": "ns/iter",
            "extra": "iterations: 54066\ncpu: 15279.417748677623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15851.334033897683,
            "unit": "ns/iter",
            "extra": "iterations: 51863\ncpu: 15850.50614117958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 46926.26213975088,
            "unit": "ns/iter",
            "extra": "iterations: 17731\ncpu: 46924.68557892941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 483654.2181817769,
            "unit": "ns/iter",
            "extra": "iterations: 1815\ncpu: 483631.1845730052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 395431.6814079059,
            "unit": "ns/iter",
            "extra": "iterations: 2216\ncpu: 395421.3447653428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 387530.90391459945,
            "unit": "ns/iter",
            "extra": "iterations: 2248\ncpu: 387528.91459074634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 390476.744567618,
            "unit": "ns/iter",
            "extra": "iterations: 2255\ncpu: 390471.352549892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 231109.03679017065,
            "unit": "ns/iter",
            "extra": "iterations: 3751\ncpu: 231107.83790989127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 387614.6477625284,
            "unit": "ns/iter",
            "extra": "iterations: 2257\ncpu: 387605.9813912272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1938403.6980726933,
            "unit": "ns/iter",
            "extra": "iterations: 467\ncpu: 1938337.0449678905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 779073.2431534805,
            "unit": "ns/iter",
            "extra": "iterations: 1205\ncpu: 779065.3112033244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4546.9644038422375,
            "unit": "ns/iter",
            "extra": "iterations: 176564\ncpu: 4546.89800865409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 20410.305306222326,
            "unit": "ns/iter",
            "extra": "iterations: 40330\ncpu: 20410.359533845673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 16251.353548514235,
            "unit": "ns/iter",
            "extra": "iterations: 50655\ncpu: 16251.19731517129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15453.82944977182,
            "unit": "ns/iter",
            "extra": "iterations: 53087\ncpu: 15453.873829751106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 16689.78998814569,
            "unit": "ns/iter",
            "extra": "iterations: 51459\ncpu: 16689.708311471273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 47114.441902812454,
            "unit": "ns/iter",
            "extra": "iterations: 17574\ncpu: 47113.54273358398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 465542.33153640456,
            "unit": "ns/iter",
            "extra": "iterations: 1855\ncpu: 465533.31536388147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 388197.2856506415,
            "unit": "ns/iter",
            "extra": "iterations: 2244\ncpu: 388192.7807486642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 381039.17221730755,
            "unit": "ns/iter",
            "extra": "iterations: 2282\ncpu: 381037.3356704646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 381862.0451556335,
            "unit": "ns/iter",
            "extra": "iterations: 2281\ncpu: 381857.91319596587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 234806.17672532305,
            "unit": "ns/iter",
            "extra": "iterations: 3695\ncpu: 234805.1150202967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 383524.9356109958,
            "unit": "ns/iter",
            "extra": "iterations: 2283\ncpu: 383519.3166885678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 313.91523880289975,
            "unit": "ns/iter",
            "extra": "iterations: 2231422\ncpu: 313.9139974419898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1717.4141879021372,
            "unit": "ns/iter",
            "extra": "iterations: 406318\ncpu: 1717.3940115869739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1353.3283705478675,
            "unit": "ns/iter",
            "extra": "iterations: 518929\ncpu: 1353.3099903840516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1356.8032800520918,
            "unit": "ns/iter",
            "extra": "iterations: 517004\ncpu: 1356.7796380685702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1069.4460266871506,
            "unit": "ns/iter",
            "extra": "iterations: 653573\ncpu: 1069.4390680153467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8117.577445996095,
            "unit": "ns/iter",
            "extra": "iterations: 86938\ncpu: 8117.540086038274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19195.417889165914,
            "unit": "ns/iter",
            "extra": "iterations: 36469\ncpu: 19195.29189174364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4604.215733806014,
            "unit": "ns/iter",
            "extra": "iterations: 152220\ncpu: 4604.170279858152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4561.872325180095,
            "unit": "ns/iter",
            "extra": "iterations: 153515\ncpu: 4561.806338142768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4594.853907937755,
            "unit": "ns/iter",
            "extra": "iterations: 152267\ncpu: 4594.780221584429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9827.7461748815,
            "unit": "ns/iter",
            "extra": "iterations: 71305\ncpu: 9827.602552415654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8667.288586227833,
            "unit": "ns/iter",
            "extra": "iterations: 81279\ncpu: 8667.232618511565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3107.6424649449104,
            "unit": "ns/iter",
            "extra": "iterations: 223648\ncpu: 3107.5077800829918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15620.024028175698,
            "unit": "ns/iter",
            "extra": "iterations: 44864\ncpu: 15619.423145506353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12496.863719087289,
            "unit": "ns/iter",
            "extra": "iterations: 56046\ncpu: 12496.709845483916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12302.736453548396,
            "unit": "ns/iter",
            "extra": "iterations: 57026\ncpu: 12302.323501560744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12891.324626245998,
            "unit": "ns/iter",
            "extra": "iterations: 54247\ncpu: 12890.519291389526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28605.521760470536,
            "unit": "ns/iter",
            "extra": "iterations: 24448\ncpu: 28605.57918848169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 101311.43589371088,
            "unit": "ns/iter",
            "extra": "iterations: 6887\ncpu: 101309.69943371505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 87375.07224097026,
            "unit": "ns/iter",
            "extra": "iterations: 8001\ncpu: 87374.26571678431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 87025.53118094306,
            "unit": "ns/iter",
            "extra": "iterations: 8146\ncpu: 87024.99386201747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 86446.77175393331,
            "unit": "ns/iter",
            "extra": "iterations: 8079\ncpu: 86445.05508107423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 56050.45347996665,
            "unit": "ns/iter",
            "extra": "iterations: 12457\ncpu: 56048.84000963351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 87322.0362030259,
            "unit": "ns/iter",
            "extra": "iterations: 8038\ncpu: 87320.95048519525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3134.032796047846,
            "unit": "ns/iter",
            "extra": "iterations: 223655\ncpu: 3133.984485032722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15585.751320987943,
            "unit": "ns/iter",
            "extra": "iterations: 45042\ncpu: 15585.631188668496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12526.241201256626,
            "unit": "ns/iter",
            "extra": "iterations: 55775\ncpu: 12526.167637830462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12329.335702696066,
            "unit": "ns/iter",
            "extra": "iterations: 56696\ncpu: 12329.29307182155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12855.399832449402,
            "unit": "ns/iter",
            "extra": "iterations: 53715\ncpu: 12855.213627478264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28510.10544536143,
            "unit": "ns/iter",
            "extra": "iterations: 24553\ncpu: 28509.929540178524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 99916.58892211886,
            "unit": "ns/iter",
            "extra": "iterations: 7023\ncpu: 99914.18197351448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84927.59552057723,
            "unit": "ns/iter",
            "extra": "iterations: 8260\ncpu: 84926.42857142836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 85164.93077948169,
            "unit": "ns/iter",
            "extra": "iterations: 8249\ncpu: 85164.39568432518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 86565.96933333001,
            "unit": "ns/iter",
            "extra": "iterations: 8250\ncpu: 86564.70303030215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 57151.20372792901,
            "unit": "ns/iter",
            "extra": "iterations: 12232\ncpu: 57150.85022890752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 86657.17306974427,
            "unit": "ns/iter",
            "extra": "iterations: 8043\ncpu: 86654.83028720494 ns\nthreads: 1"
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
        "date": 1705773688881,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 733.4269733304453,
            "unit": "ns/iter",
            "extra": "iterations: 959444\ncpu: 733.3827716886029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11106.390504721794,
            "unit": "ns/iter",
            "extra": "iterations: 74437\ncpu: 11105.807595684942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24493.70089114042,
            "unit": "ns/iter",
            "extra": "iterations: 33777\ncpu: 24492.755425289397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38495.23385705735,
            "unit": "ns/iter",
            "extra": "iterations: 20876\ncpu: 38493.75359264227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 49319.67277406788,
            "unit": "ns/iter",
            "extra": "iterations: 16319\ncpu: 49317.2191923525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 50872.16339999258,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50871.62000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 61621.901099999835,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61618.82999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 70657.75441724596,
            "unit": "ns/iter",
            "extra": "iterations: 12338\ncpu: 70655.11428108282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 80888.44743960373,
            "unit": "ns/iter",
            "extra": "iterations: 10721\ncpu: 80885.79423561231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 607.5056585236051,
            "unit": "ns/iter",
            "extra": "iterations: 1154188\ncpu: 607.4949661580251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 511.27482468080495,
            "unit": "ns/iter",
            "extra": "iterations: 1368789\ncpu: 511.259368682828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 502.80670738271505,
            "unit": "ns/iter",
            "extra": "iterations: 1393390\ncpu: 502.7867287694042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 515.733758185847,
            "unit": "ns/iter",
            "extra": "iterations: 1358746\ncpu: 515.7177279638727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1002.4660131486345,
            "unit": "ns/iter",
            "extra": "iterations: 698476\ncpu: 1002.4646516129399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4534.161507554755,
            "unit": "ns/iter",
            "extra": "iterations: 176710\ncpu: 4534.0156188104775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 20333.80297751829,
            "unit": "ns/iter",
            "extra": "iterations: 39899\ncpu: 20333.306599162923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 16211.84805994292,
            "unit": "ns/iter",
            "extra": "iterations: 50849\ncpu: 16211.13886212116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15397.76388188618,
            "unit": "ns/iter",
            "extra": "iterations: 53541\ncpu: 15397.364636446855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15878.231523466284,
            "unit": "ns/iter",
            "extra": "iterations: 51606\ncpu: 15877.698329651626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 47342.87691001616,
            "unit": "ns/iter",
            "extra": "iterations: 17670\ncpu: 47341.00735710255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 478812.0410733916,
            "unit": "ns/iter",
            "extra": "iterations: 1826\ncpu: 478790.5257393203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 386329.47163914354,
            "unit": "ns/iter",
            "extra": "iterations: 2239\ncpu: 386323.71594461787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 383689.2752982692,
            "unit": "ns/iter",
            "extra": "iterations: 2263\ncpu: 383681.263809103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 382819.4968971762,
            "unit": "ns/iter",
            "extra": "iterations: 2256\ncpu: 382802.7925531925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 235908.98929049866,
            "unit": "ns/iter",
            "extra": "iterations: 3735\ncpu: 235902.1954484601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 378164.7266406012,
            "unit": "ns/iter",
            "extra": "iterations: 2301\ncpu: 378149.97827031754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1924312.8661086564,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1924227.1966527256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 773381.4303482755,
            "unit": "ns/iter",
            "extra": "iterations: 1206\ncpu: 773351.907131013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2610091.274011139,
            "unit": "ns/iter",
            "extra": "iterations: 354\ncpu: 2609968.0790960486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4508.515724078353,
            "unit": "ns/iter",
            "extra": "iterations: 179152\ncpu: 4508.380593015989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 20444.19778639251,
            "unit": "ns/iter",
            "extra": "iterations: 41019\ncpu: 20443.47741290617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 16194.794037408104,
            "unit": "ns/iter",
            "extra": "iterations: 50951\ncpu: 16194.331808992953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15438.111046783319,
            "unit": "ns/iter",
            "extra": "iterations: 53545\ncpu: 15437.67298533952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 16071.457714162698,
            "unit": "ns/iter",
            "extra": "iterations: 51211\ncpu: 16071.345999882824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 46986.257076931615,
            "unit": "ns/iter",
            "extra": "iterations: 17769\ncpu: 46984.45044740836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 479512.97682120244,
            "unit": "ns/iter",
            "extra": "iterations: 1812\ncpu: 479495.69536423846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 393495.57033709856,
            "unit": "ns/iter",
            "extra": "iterations: 2225\ncpu: 393484.8089887622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 386083.15763764764,
            "unit": "ns/iter",
            "extra": "iterations: 2252\ncpu: 386079.52930728206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 384527.64257553715,
            "unit": "ns/iter",
            "extra": "iterations: 2283\ncpu: 384516.77617170167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 232050.40932091707,
            "unit": "ns/iter",
            "extra": "iterations: 3755\ncpu: 232050.06657789738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 386515.6836331753,
            "unit": "ns/iter",
            "extra": "iterations: 2279\ncpu: 386509.9166301021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1945594.9034335383,
            "unit": "ns/iter",
            "extra": "iterations: 466\ncpu: 1945498.0686695292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 786975.2533783745,
            "unit": "ns/iter",
            "extra": "iterations: 1184\ncpu: 786958.7837837854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4561.50314049443,
            "unit": "ns/iter",
            "extra": "iterations: 179908\ncpu: 4561.271316450629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 20479.637274095363,
            "unit": "ns/iter",
            "extra": "iterations: 39840\ncpu: 20478.81275100406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 16268.455393965956,
            "unit": "ns/iter",
            "extra": "iterations: 50677\ncpu: 16267.867079740403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15575.405132906417,
            "unit": "ns/iter",
            "extra": "iterations: 53459\ncpu: 15574.853626143316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 16534.01561851937,
            "unit": "ns/iter",
            "extra": "iterations: 50645\ncpu: 16533.568960410692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 47030.45508676383,
            "unit": "ns/iter",
            "extra": "iterations: 17634\ncpu: 47029.76068957695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 472462.9935064948,
            "unit": "ns/iter",
            "extra": "iterations: 1848\ncpu: 472452.7597402602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 387754.81871082255,
            "unit": "ns/iter",
            "extra": "iterations: 2234\ncpu: 387738.9883616847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 384249.94783376897,
            "unit": "ns/iter",
            "extra": "iterations: 2262\ncpu: 384235.9858532278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 383176.57313829375,
            "unit": "ns/iter",
            "extra": "iterations: 2256\ncpu: 383157.6241134764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 234139.76122226348,
            "unit": "ns/iter",
            "extra": "iterations: 3698\ncpu: 234136.0465116274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 375534.1654363517,
            "unit": "ns/iter",
            "extra": "iterations: 2303\ncpu: 375526.05297438236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 309.7625055998093,
            "unit": "ns/iter",
            "extra": "iterations: 2258988\ncpu: 309.75365960332687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1724.5664445326665,
            "unit": "ns/iter",
            "extra": "iterations: 403660\ncpu: 1724.52286577814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1371.940065625983,
            "unit": "ns/iter",
            "extra": "iterations: 533934\ncpu: 1371.9163791779547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1293.4064943529843,
            "unit": "ns/iter",
            "extra": "iterations: 541609\ncpu: 1293.3775103441885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1073.7863651340333,
            "unit": "ns/iter",
            "extra": "iterations: 649482\ncpu: 1073.746000658989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8148.235330807229,
            "unit": "ns/iter",
            "extra": "iterations: 86576\ncpu: 8147.948623175034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19098.523891674038,
            "unit": "ns/iter",
            "extra": "iterations: 36519\ncpu: 19098.214628001802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4640.441525874439,
            "unit": "ns/iter",
            "extra": "iterations: 150340\ncpu: 4640.1210589330985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4562.209550005008,
            "unit": "ns/iter",
            "extra": "iterations: 153424\ncpu: 4561.9922567525455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4601.517629649028,
            "unit": "ns/iter",
            "extra": "iterations: 152045\ncpu: 4601.464040251205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9613.124357954115,
            "unit": "ns/iter",
            "extra": "iterations: 72814\ncpu: 9612.74205509923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8695.1227972278,
            "unit": "ns/iter",
            "extra": "iterations: 80637\ncpu: 8694.853479171985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3117.168753848869,
            "unit": "ns/iter",
            "extra": "iterations: 224066\ncpu: 3117.029803718562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15610.034863774888,
            "unit": "ns/iter",
            "extra": "iterations: 44889\ncpu: 15609.376461939304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12574.748350662949,
            "unit": "ns/iter",
            "extra": "iterations: 55780\ncpu: 12574.438866977482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12350.508349220958,
            "unit": "ns/iter",
            "extra": "iterations: 56652\ncpu: 12350.0953187883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12947.1579493628,
            "unit": "ns/iter",
            "extra": "iterations: 53954\ncpu: 12946.956666790273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28645.676087578988,
            "unit": "ns/iter",
            "extra": "iterations: 24343\ncpu: 28645.12590888564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 101583.54077192454,
            "unit": "ns/iter",
            "extra": "iterations: 6892\ncpu: 101581.60185722735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 87155.89013732749,
            "unit": "ns/iter",
            "extra": "iterations: 8010\ncpu: 87152.12234706583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 86664.2763353183,
            "unit": "ns/iter",
            "extra": "iterations: 8088\ncpu: 86660.22502472853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 86653.48050501512,
            "unit": "ns/iter",
            "extra": "iterations: 8079\ncpu: 86651.59054338418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 56196.70854879773,
            "unit": "ns/iter",
            "extra": "iterations: 12376\ncpu: 56195.7013574656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 87200.68184078598,
            "unit": "ns/iter",
            "extra": "iterations: 8040\ncpu: 87199.01741293517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3079.111086708456,
            "unit": "ns/iter",
            "extra": "iterations: 227660\ncpu: 3079.059562505523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15229.821564491587,
            "unit": "ns/iter",
            "extra": "iterations: 45983\ncpu: 15229.358676032443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12115.330864795513,
            "unit": "ns/iter",
            "extra": "iterations: 57794\ncpu: 12114.892549399576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11935.640441589256,
            "unit": "ns/iter",
            "extra": "iterations: 58697\ncpu: 11935.14489667284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12507.868252353137,
            "unit": "ns/iter",
            "extra": "iterations: 56001\ncpu: 12507.576650417057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28539.655090799908,
            "unit": "ns/iter",
            "extra": "iterations: 24505\ncpu: 28538.649255253524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 100635.1533821639,
            "unit": "ns/iter",
            "extra": "iterations: 6963\ncpu: 100634.16630762652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 85515.54733872403,
            "unit": "ns/iter",
            "extra": "iterations: 8154\ncpu: 85513.61295069869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 84497.05197631266,
            "unit": "ns/iter",
            "extra": "iterations: 8273\ncpu: 84492.77166686901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84465.1842612593,
            "unit": "ns/iter",
            "extra": "iterations: 8298\ncpu: 84463.2803085086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 56407.06461489282,
            "unit": "ns/iter",
            "extra": "iterations: 12412\ncpu: 56405.21269738981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 86028.3336615444,
            "unit": "ns/iter",
            "extra": "iterations: 8125\ncpu: 86027.3476923077 ns\nthreads: 1"
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
        "date": 1705775444228,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 735.7637619415284,
            "unit": "ns/iter",
            "extra": "iterations: 949212\ncpu: 735.7118325516325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11099.32656005822,
            "unit": "ns/iter",
            "extra": "iterations: 74853\ncpu: 11098.917879042923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24694.038471807977,
            "unit": "ns/iter",
            "extra": "iterations: 33713\ncpu: 24692.4035238632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39231.94146114108,
            "unit": "ns/iter",
            "extra": "iterations: 21490\ncpu: 39230.288506282006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 50051.4603926921,
            "unit": "ns/iter",
            "extra": "iterations: 16247\ncpu: 50047.811903736074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 50338.91179999727,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50338.15000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 61319.70430000137,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61313.15000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 70784.81024096432,
            "unit": "ns/iter",
            "extra": "iterations: 12284\ncpu: 70780.34028003909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 80576.92476402021,
            "unit": "ns/iter",
            "extra": "iterations: 10806\ncpu: 80573.32963168607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 602.0365259334407,
            "unit": "ns/iter",
            "extra": "iterations: 1161394\ncpu: 602.0225694294969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 512.0331815190958,
            "unit": "ns/iter",
            "extra": "iterations: 1369437\ncpu: 512.0098259357678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 506.9495791272564,
            "unit": "ns/iter",
            "extra": "iterations: 1383435\ncpu: 506.91676876759584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 512.421132533333,
            "unit": "ns/iter",
            "extra": "iterations: 1358247\ncpu: 512.3786027136441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 975.4984861528307,
            "unit": "ns/iter",
            "extra": "iterations: 719029\ncpu: 975.4790140592397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4262.093540284536,
            "unit": "ns/iter",
            "extra": "iterations: 189095\ncpu: 4261.831354610121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 20730.686368757062,
            "unit": "ns/iter",
            "extra": "iterations: 39945\ncpu: 20729.152584804095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 16669.625110609188,
            "unit": "ns/iter",
            "extra": "iterations: 49724\ncpu: 16668.524253881413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15690.480081869546,
            "unit": "ns/iter",
            "extra": "iterations: 52766\ncpu: 15689.912064587033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 16280.7740056077,
            "unit": "ns/iter",
            "extra": "iterations: 50634\ncpu: 16279.851483193133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 47368.757006171865,
            "unit": "ns/iter",
            "extra": "iterations: 17663\ncpu: 47365.09086791614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 470819.97800430673,
            "unit": "ns/iter",
            "extra": "iterations: 1864\ncpu: 470798.6587982839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 384980.1829105553,
            "unit": "ns/iter",
            "extra": "iterations: 2247\ncpu: 384960.8366711179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 384807.96496673115,
            "unit": "ns/iter",
            "extra": "iterations: 2255\ncpu: 384785.8093126393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 384936.62270896975,
            "unit": "ns/iter",
            "extra": "iterations: 2237\ncpu: 384915.6906571296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 236871.78319188303,
            "unit": "ns/iter",
            "extra": "iterations: 3653\ncpu: 236859.92335067128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 379697.16308634536,
            "unit": "ns/iter",
            "extra": "iterations: 2281\ncpu: 379669.3993862343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1937774.4198311912,
            "unit": "ns/iter",
            "extra": "iterations: 474\ncpu: 1937473.6286919843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 775807.6517783322,
            "unit": "ns/iter",
            "extra": "iterations: 1209\ncpu: 775780.3970223343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2640342.3285301854,
            "unit": "ns/iter",
            "extra": "iterations: 347\ncpu: 2640248.126801147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4427.38590152773,
            "unit": "ns/iter",
            "extra": "iterations: 185169\ncpu: 4427.331248751141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 20625.67015078294,
            "unit": "ns/iter",
            "extra": "iterations: 39991\ncpu: 20624.938111074996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 16576.413952459934,
            "unit": "ns/iter",
            "extra": "iterations: 49769\ncpu: 16576.37686109827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15639.662972521823,
            "unit": "ns/iter",
            "extra": "iterations: 52696\ncpu: 15639.462198269348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15918.999308313301,
            "unit": "ns/iter",
            "extra": "iterations: 50601\ncpu: 15918.608327898684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 47670.47610619657,
            "unit": "ns/iter",
            "extra": "iterations: 17515\ncpu: 47669.24921495857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 479049.4060606193,
            "unit": "ns/iter",
            "extra": "iterations: 1815\ncpu: 479036.1432506889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 394137.16107079136,
            "unit": "ns/iter",
            "extra": "iterations: 2204\ncpu: 394126.8148820339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 383986.9143109427,
            "unit": "ns/iter",
            "extra": "iterations: 2264\ncpu: 383967.4911660787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 384398.39017974766,
            "unit": "ns/iter",
            "extra": "iterations: 2281\ncpu: 384388.952213941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 238830.07896131914,
            "unit": "ns/iter",
            "extra": "iterations: 3774\ncpu: 238820.29676735503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 388607.17833262554,
            "unit": "ns/iter",
            "extra": "iterations: 2243\ncpu: 388592.777530092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1944913.6115880145,
            "unit": "ns/iter",
            "extra": "iterations: 466\ncpu: 1944827.467811161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 774949.418350158,
            "unit": "ns/iter",
            "extra": "iterations: 1188\ncpu: 774929.3771043743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4352.624194259025,
            "unit": "ns/iter",
            "extra": "iterations: 183837\ncpu: 4352.57374739581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 20258.007712207887,
            "unit": "ns/iter",
            "extra": "iterations: 40585\ncpu: 20257.021066896665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 16245.045644957416,
            "unit": "ns/iter",
            "extra": "iterations: 50608\ncpu: 16244.848640531085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15428.77274267591,
            "unit": "ns/iter",
            "extra": "iterations: 53116\ncpu: 15428.44905489879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 16118.924007886842,
            "unit": "ns/iter",
            "extra": "iterations: 51229\ncpu: 16118.719865700952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 46891.5444368737,
            "unit": "ns/iter",
            "extra": "iterations: 17598\ncpu: 46888.53278781675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 474342.5590983805,
            "unit": "ns/iter",
            "extra": "iterations: 1819\ncpu: 474333.7548103375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 389080.4961934492,
            "unit": "ns/iter",
            "extra": "iterations: 2233\ncpu: 389056.06806986395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 383211.3967271146,
            "unit": "ns/iter",
            "extra": "iterations: 2261\ncpu: 383186.20079610636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 381848.3739514282,
            "unit": "ns/iter",
            "extra": "iterations: 2265\ncpu: 381832.141280354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 236707.4710164649,
            "unit": "ns/iter",
            "extra": "iterations: 3709\ncpu: 236698.43623618304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 386542.9420610218,
            "unit": "ns/iter",
            "extra": "iterations: 2261\ncpu: 386524.36974789866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 309.79968434231773,
            "unit": "ns/iter",
            "extra": "iterations: 2244837\ncpu: 309.77750277637057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1728.8283206254453,
            "unit": "ns/iter",
            "extra": "iterations: 404871\ncpu: 1728.8005315273208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1282.1409739677724,
            "unit": "ns/iter",
            "extra": "iterations: 544597\ncpu: 1282.09979122176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1262.8762829263549,
            "unit": "ns/iter",
            "extra": "iterations: 553812\ncpu: 1262.814095758133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1074.3938591716933,
            "unit": "ns/iter",
            "extra": "iterations: 652355\ncpu: 1074.309999923354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8077.520564123738,
            "unit": "ns/iter",
            "extra": "iterations: 86364\ncpu: 8076.801676624566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19392.93419633206,
            "unit": "ns/iter",
            "extra": "iterations: 36153\ncpu: 19391.937045335344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4616.218227584945,
            "unit": "ns/iter",
            "extra": "iterations: 151759\ncpu: 4615.840905646414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4543.0243268301865,
            "unit": "ns/iter",
            "extra": "iterations: 154233\ncpu: 4542.768408836023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4591.558041076296,
            "unit": "ns/iter",
            "extra": "iterations: 152349\ncpu: 4591.479432093374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9842.69975749582,
            "unit": "ns/iter",
            "extra": "iterations: 71339\ncpu: 9842.424199946665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8731.472771474188,
            "unit": "ns/iter",
            "extra": "iterations: 80210\ncpu: 8730.61713003362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3151.2890238688456,
            "unit": "ns/iter",
            "extra": "iterations: 222255\ncpu: 3151.0539695395078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15752.972823626493,
            "unit": "ns/iter",
            "extra": "iterations: 44156\ncpu: 15751.67134704231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12657.02134300283,
            "unit": "ns/iter",
            "extra": "iterations: 55428\ncpu: 12656.379447210884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12574.705194155718,
            "unit": "ns/iter",
            "extra": "iterations: 55986\ncpu: 12574.422176972723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13079.744697140019,
            "unit": "ns/iter",
            "extra": "iterations: 53556\ncpu: 13079.00141907527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28954.776081533782,
            "unit": "ns/iter",
            "extra": "iterations: 24040\ncpu: 28953.136439267484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 101172.81882284065,
            "unit": "ns/iter",
            "extra": "iterations: 6949\ncpu: 101167.85148942268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86818.94815739477,
            "unit": "ns/iter",
            "extra": "iterations: 8005\ncpu: 86814.42848219772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 86668.35544431278,
            "unit": "ns/iter",
            "extra": "iterations: 7990\ncpu: 86661.48936170168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 87535.91370050835,
            "unit": "ns/iter",
            "extra": "iterations: 8007\ncpu: 87530.91045335228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55395.05224057251,
            "unit": "ns/iter",
            "extra": "iterations: 12653\ncpu: 55390.57930925466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 86961.56656308938,
            "unit": "ns/iter",
            "extra": "iterations: 8045\ncpu: 86957.89931634428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3052.6266490074954,
            "unit": "ns/iter",
            "extra": "iterations: 229532\ncpu: 3052.4258055522155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15167.914115888358,
            "unit": "ns/iter",
            "extra": "iterations: 46097\ncpu: 15167.240818274346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12179.727392738845,
            "unit": "ns/iter",
            "extra": "iterations: 57570\ncpu: 12179.18012853925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12163.260042613132,
            "unit": "ns/iter",
            "extra": "iterations: 57729\ncpu: 12162.528365292826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12654.3289736795,
            "unit": "ns/iter",
            "extra": "iterations: 55509\ncpu: 12654.036282404633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28295.204000804573,
            "unit": "ns/iter",
            "extra": "iterations: 24745\ncpu: 28295.00505152567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 100395.66133179962,
            "unit": "ns/iter",
            "extra": "iterations: 6998\ncpu: 100391.14032580865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 85730.07743038089,
            "unit": "ns/iter",
            "extra": "iterations: 8188\ncpu: 85725.35417684318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 85447.32536876394,
            "unit": "ns/iter",
            "extra": "iterations: 8203\ncpu: 85444.27648421448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 85120.90214856317,
            "unit": "ns/iter",
            "extra": "iterations: 8145\ncpu: 85119.03007980273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 56763.435334304544,
            "unit": "ns/iter",
            "extra": "iterations: 12294\ncpu: 56762.184805595956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 86464.10941162273,
            "unit": "ns/iter",
            "extra": "iterations: 8107\ncpu: 86458.82570617922 ns\nthreads: 1"
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
        "date": 1705778467521,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 704.1592158768713,
            "unit": "ns/iter",
            "extra": "iterations: 991528\ncpu: 704.1130457233685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10835.0409252438,
            "unit": "ns/iter",
            "extra": "iterations: 76823\ncpu: 10834.567772672248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24069.607842572328,
            "unit": "ns/iter",
            "extra": "iterations: 34708\ncpu: 24068.1514348277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37433.26323502418,
            "unit": "ns/iter",
            "extra": "iterations: 21836\ncpu: 37431.81901447152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47776.97852741946,
            "unit": "ns/iter",
            "extra": "iterations: 16719\ncpu: 47773.07853340513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58778.77461752821,
            "unit": "ns/iter",
            "extra": "iterations: 14380\ncpu: 58777.7399165508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59334.64319999757,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59333.32999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68731.33517699754,
            "unit": "ns/iter",
            "extra": "iterations: 12656\ncpu: 68729.87515802786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78887.35082350095,
            "unit": "ns/iter",
            "extra": "iterations: 11111\ncpu: 78884.80784807853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 582.7577090527769,
            "unit": "ns/iter",
            "extra": "iterations: 1199207\ncpu: 582.7355911031217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 509.7869570686941,
            "unit": "ns/iter",
            "extra": "iterations: 1375197\ncpu: 509.78158038448294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 496.9387674736854,
            "unit": "ns/iter",
            "extra": "iterations: 1411913\ncpu: 496.9141866389783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 509.29948869274523,
            "unit": "ns/iter",
            "extra": "iterations: 1374516\ncpu: 509.29439890114134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 954.7732650121947,
            "unit": "ns/iter",
            "extra": "iterations: 735740\ncpu: 954.7637752466887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4544.852990616746,
            "unit": "ns/iter",
            "extra": "iterations: 177873\ncpu: 4544.593614545204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 20377.57058235431,
            "unit": "ns/iter",
            "extra": "iterations: 40010\ncpu: 20376.800799800058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 16227.042230622259,
            "unit": "ns/iter",
            "extra": "iterations: 51053\ncpu: 16226.91908408907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15431.038591538638,
            "unit": "ns/iter",
            "extra": "iterations: 53846\ncpu: 15431.051517290001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15957.796835149511,
            "unit": "ns/iter",
            "extra": "iterations: 51756\ncpu: 15957.502511786122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 47041.50762160853,
            "unit": "ns/iter",
            "extra": "iterations: 17844\ncpu: 47039.352163192176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 467351.3773283564,
            "unit": "ns/iter",
            "extra": "iterations: 1879\ncpu: 467334.3799893561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 380887.30476607464,
            "unit": "ns/iter",
            "extra": "iterations: 2287\ncpu: 380877.17533887044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 379772.15697423427,
            "unit": "ns/iter",
            "extra": "iterations: 2287\ncpu: 379758.59204197675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 376171.52200439357,
            "unit": "ns/iter",
            "extra": "iterations: 2295\ncpu: 376169.28104575106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 232158.98666311448,
            "unit": "ns/iter",
            "extra": "iterations: 3749\ncpu: 232159.1891170981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 378209.396818572,
            "unit": "ns/iter",
            "extra": "iterations: 2326\ncpu: 378202.2785898538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1925572.4620253197,
            "unit": "ns/iter",
            "extra": "iterations: 474\ncpu: 1925531.0126582268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 747532.5205148711,
            "unit": "ns/iter",
            "extra": "iterations: 1243\ncpu: 747512.0675784383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2598626.4606739255,
            "unit": "ns/iter",
            "extra": "iterations: 356\ncpu: 2598496.910112366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4547.420308944083,
            "unit": "ns/iter",
            "extra": "iterations: 178414\ncpu: 4547.3550281928665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 20821.423386994295,
            "unit": "ns/iter",
            "extra": "iterations: 40065\ncpu: 20821.208036940006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 16334.93907747605,
            "unit": "ns/iter",
            "extra": "iterations: 50080\ncpu: 16334.68051118208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15545.088364833167,
            "unit": "ns/iter",
            "extra": "iterations: 53811\ncpu: 15544.373826912784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 16041.346849338168,
            "unit": "ns/iter",
            "extra": "iterations: 50656\ncpu: 16040.623025900117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 47775.44002248205,
            "unit": "ns/iter",
            "extra": "iterations: 17790\ncpu: 47773.61439010703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 480803.19288494025,
            "unit": "ns/iter",
            "extra": "iterations: 1799\ncpu: 480781.8788215697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 394154.29569161794,
            "unit": "ns/iter",
            "extra": "iterations: 2205\ncpu: 394133.1519274395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 390465.7685765412,
            "unit": "ns/iter",
            "extra": "iterations: 2234\ncpu: 390447.40376007406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 389217.9982222438,
            "unit": "ns/iter",
            "extra": "iterations: 2250\ncpu: 389209.866666666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 234090.39521117962,
            "unit": "ns/iter",
            "extra": "iterations: 3717\ncpu: 234078.28894269594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 389964.6074435372,
            "unit": "ns/iter",
            "extra": "iterations: 2257\ncpu: 389951.04120513925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1949749.3304720297,
            "unit": "ns/iter",
            "extra": "iterations: 466\ncpu: 1949663.9484978523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 773388.1219916776,
            "unit": "ns/iter",
            "extra": "iterations: 1205\ncpu: 773363.485477183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4558.324202417703,
            "unit": "ns/iter",
            "extra": "iterations: 176032\ncpu: 4558.271791492441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 20360.649302235935,
            "unit": "ns/iter",
            "extra": "iterations: 40773\ncpu: 20360.25801388182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 16367.424891605833,
            "unit": "ns/iter",
            "extra": "iterations: 50740\ncpu: 16367.114702404342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15535.735130580719,
            "unit": "ns/iter",
            "extra": "iterations: 53415\ncpu: 15535.214827295707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 16100.670590548278,
            "unit": "ns/iter",
            "extra": "iterations: 50885\ncpu: 16100.424486587346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 47015.794085993766,
            "unit": "ns/iter",
            "extra": "iterations: 17653\ncpu: 47014.85299949008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 467667.5647248935,
            "unit": "ns/iter",
            "extra": "iterations: 1854\ncpu: 467650.21574972756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 387929.10460438614,
            "unit": "ns/iter",
            "extra": "iterations: 2237\ncpu: 387923.20071524166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 384615.1031291341,
            "unit": "ns/iter",
            "extra": "iterations: 2269\ncpu: 384607.49228735175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 382659.711827055,
            "unit": "ns/iter",
            "extra": "iterations: 2266\ncpu: 382654.36893203744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 236078.2677947768,
            "unit": "ns/iter",
            "extra": "iterations: 3723\ncpu: 236071.63577759775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 381441.7651680485,
            "unit": "ns/iter",
            "extra": "iterations: 2291\ncpu: 381434.00261894305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 305.08089101891517,
            "unit": "ns/iter",
            "extra": "iterations: 2300243\ncpu: 305.0728553461523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1681.273638786842,
            "unit": "ns/iter",
            "extra": "iterations: 418285\ncpu: 1681.2515390224355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1275.9908733902912,
            "unit": "ns/iter",
            "extra": "iterations: 546972\ncpu: 1275.9433755292814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1286.8687716651325,
            "unit": "ns/iter",
            "extra": "iterations: 543785\ncpu: 1286.8442491058117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1055.6562693713931,
            "unit": "ns/iter",
            "extra": "iterations: 663025\ncpu: 1055.6319897439769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8031.807099276781,
            "unit": "ns/iter",
            "extra": "iterations: 87361\ncpu: 8031.8196907086185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19384.094837869885,
            "unit": "ns/iter",
            "extra": "iterations: 36051\ncpu: 19384.091980804962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4623.242491767755,
            "unit": "ns/iter",
            "extra": "iterations: 151234\ncpu: 4623.162780856193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4572.049456379318,
            "unit": "ns/iter",
            "extra": "iterations: 152680\ncpu: 4571.957689284804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4589.9928920508755,
            "unit": "ns/iter",
            "extra": "iterations: 152646\ncpu: 4589.891644720476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9373.350618738747,
            "unit": "ns/iter",
            "extra": "iterations: 74668\ncpu: 9373.056731129831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8655.67923466578,
            "unit": "ns/iter",
            "extra": "iterations: 79965\ncpu: 8654.970299506014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3142.289213260779,
            "unit": "ns/iter",
            "extra": "iterations: 222310\ncpu: 3142.1353065539306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15467.801290094223,
            "unit": "ns/iter",
            "extra": "iterations: 45423\ncpu: 15467.089360015756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12349.992047643374,
            "unit": "ns/iter",
            "extra": "iterations: 56587\ncpu: 12349.48486401485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12316.752536313683,
            "unit": "ns/iter",
            "extra": "iterations: 57071\ncpu: 12316.60037497165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12769.775504976562,
            "unit": "ns/iter",
            "extra": "iterations: 54656\ncpu: 12769.767271662713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28566.217928841153,
            "unit": "ns/iter",
            "extra": "iterations: 24508\ncpu: 28566.1947119309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100108.72942356275,
            "unit": "ns/iter",
            "extra": "iterations: 6974\ncpu: 100103.95755663756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86360.80046833195,
            "unit": "ns/iter",
            "extra": "iterations: 8114\ncpu: 86355.95267439068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 88047.4415712372,
            "unit": "ns/iter",
            "extra": "iterations: 8121\ncpu: 88028.00147765013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85852.77301217425,
            "unit": "ns/iter",
            "extra": "iterations: 8137\ncpu: 85850.7435172663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55604.560649475075,
            "unit": "ns/iter",
            "extra": "iterations: 12564\ncpu: 55602.98471824267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85739.20476014818,
            "unit": "ns/iter",
            "extra": "iterations: 8151\ncpu: 85737.28376886285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3090.4235752961636,
            "unit": "ns/iter",
            "extra": "iterations: 225117\ncpu: 3090.332138399168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15140.58140850127,
            "unit": "ns/iter",
            "extra": "iterations: 45978\ncpu: 15140.262734351123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12221.454450444211,
            "unit": "ns/iter",
            "extra": "iterations: 57410\ncpu: 12221.470127155646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11920.065397605847,
            "unit": "ns/iter",
            "extra": "iterations: 58626\ncpu: 11919.91948964612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12490.333345205454,
            "unit": "ns/iter",
            "extra": "iterations: 56149\ncpu: 12490.339988245629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28077.622653617484,
            "unit": "ns/iter",
            "extra": "iterations: 24932\ncpu: 28076.881116637094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 99476.92784091154,
            "unit": "ns/iter",
            "extra": "iterations: 7040\ncpu: 99476.97443181842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 85023.64600801683,
            "unit": "ns/iter",
            "extra": "iterations: 8229\ncpu: 85022.18981650332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83815.33877550997,
            "unit": "ns/iter",
            "extra": "iterations: 8330\ncpu: 83814.41776710717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83682.31544987719,
            "unit": "ns/iter",
            "extra": "iterations: 8369\ncpu: 83682.32763771171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 56393.80806373796,
            "unit": "ns/iter",
            "extra": "iterations: 12426\ncpu: 56392.636407532635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 85635.51257017931,
            "unit": "ns/iter",
            "extra": "iterations: 8194\ncpu: 85634.72052721535 ns\nthreads: 1"
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
        "date": 1705953655315,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 731.840222755502,
            "unit": "ns/iter",
            "extra": "iterations: 949741\ncpu: 731.7937206038279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11049.573163022942,
            "unit": "ns/iter",
            "extra": "iterations: 75940\ncpu: 11049.22175401633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24490.929588561863,
            "unit": "ns/iter",
            "extra": "iterations: 34270\ncpu: 24490.099212138895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38993.0105267981,
            "unit": "ns/iter",
            "extra": "iterations: 21944\ncpu: 38991.6742617572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48513.11327530242,
            "unit": "ns/iter",
            "extra": "iterations: 16429\ncpu: 48509.53801205183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 50057.708200006346,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50052.87000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60023.43159999554,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60022.929999999964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 69911.18362742486,
            "unit": "ns/iter",
            "extra": "iterations: 12411\ncpu: 69909.7091289985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 79340.34423846178,
            "unit": "ns/iter",
            "extra": "iterations: 11004\ncpu: 79337.00472555445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 593.87283789534,
            "unit": "ns/iter",
            "extra": "iterations: 1177961\ncpu: 593.8487776760014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 496.53509292989804,
            "unit": "ns/iter",
            "extra": "iterations: 1387174\ncpu: 496.49827635177644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 483.8183588008552,
            "unit": "ns/iter",
            "extra": "iterations: 1435682\ncpu: 483.8061632032717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 493.7496398152866,
            "unit": "ns/iter",
            "extra": "iterations: 1415940\ncpu: 493.74563893950335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 960.5332890513461,
            "unit": "ns/iter",
            "extra": "iterations: 728663\ncpu: 960.5146686465505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4446.3365461807925,
            "unit": "ns/iter",
            "extra": "iterations: 180629\ncpu: 4446.171434265822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 20535.426218035598,
            "unit": "ns/iter",
            "extra": "iterations: 40003\ncpu: 20535.247356448297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 16748.77563575938,
            "unit": "ns/iter",
            "extra": "iterations: 49901\ncpu: 16748.343720566732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15078.662053016515,
            "unit": "ns/iter",
            "extra": "iterations: 55343\ncpu: 15078.22850224963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 16145.170446853304,
            "unit": "ns/iter",
            "extra": "iterations: 51717\ncpu: 16144.422530309217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 46650.23270335243,
            "unit": "ns/iter",
            "extra": "iterations: 17937\ncpu: 46649.205552768035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 460942.33262932656,
            "unit": "ns/iter",
            "extra": "iterations: 1894\ncpu: 460923.65364308236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 380881.9907773115,
            "unit": "ns/iter",
            "extra": "iterations: 2277\ncpu: 380864.5147123406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 374346.278667258,
            "unit": "ns/iter",
            "extra": "iterations: 2311\ncpu: 374340.5452185198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 380165.92586128274,
            "unit": "ns/iter",
            "extra": "iterations: 2293\ncpu: 380151.50457915507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 232458.03092226494,
            "unit": "ns/iter",
            "extra": "iterations: 3719\ncpu: 232454.12745361723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 378211.6226086699,
            "unit": "ns/iter",
            "extra": "iterations: 2300\ncpu: 378198.1739130434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1953973.7505286369,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1953832.3467230448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 786837.372189843,
            "unit": "ns/iter",
            "extra": "iterations: 1201\ncpu: 786810.6577851796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2625172.051281887,
            "unit": "ns/iter",
            "extra": "iterations: 351\ncpu: 2625032.763532765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4485.292214839955,
            "unit": "ns/iter",
            "extra": "iterations: 174139\ncpu: 4485.122229942743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 20714.20986450972,
            "unit": "ns/iter",
            "extra": "iterations: 41036\ncpu: 20713.444292816082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 16554.751582648318,
            "unit": "ns/iter",
            "extra": "iterations: 51180\ncpu: 16554.114888628406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15776.640061724635,
            "unit": "ns/iter",
            "extra": "iterations: 53787\ncpu: 15775.648390875116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 16500.113076140082,
            "unit": "ns/iter",
            "extra": "iterations: 51116\ncpu: 16499.328977228262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 47701.66758940185,
            "unit": "ns/iter",
            "extra": "iterations: 17701\ncpu: 47701.570532738384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 481003.4994498968,
            "unit": "ns/iter",
            "extra": "iterations: 1818\ncpu: 480910.2860286003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 390909.06705937866,
            "unit": "ns/iter",
            "extra": "iterations: 2207\ncpu: 390892.6144086981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 384050.0859788324,
            "unit": "ns/iter",
            "extra": "iterations: 2268\ncpu: 384034.6119929443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 384301.27156126004,
            "unit": "ns/iter",
            "extra": "iterations: 2261\ncpu: 384280.8934099963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 232973.31647940585,
            "unit": "ns/iter",
            "extra": "iterations: 3738\ncpu: 232962.86784376742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 388165.9999999838,
            "unit": "ns/iter",
            "extra": "iterations: 2249\ncpu: 388149.13294797734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1952384.1641469342,
            "unit": "ns/iter",
            "extra": "iterations: 463\ncpu: 1952350.1079913557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 780724.4866666944,
            "unit": "ns/iter",
            "extra": "iterations: 1200\ncpu: 780688.5000000049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4547.016235800401,
            "unit": "ns/iter",
            "extra": "iterations: 177201\ncpu: 4546.81519855981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 20147.631113513336,
            "unit": "ns/iter",
            "extra": "iterations: 40709\ncpu: 20147.377729740252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 16149.714695425304,
            "unit": "ns/iter",
            "extra": "iterations: 50907\ncpu: 16149.356670006091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15323.68876597642,
            "unit": "ns/iter",
            "extra": "iterations: 53516\ncpu: 15323.39860976148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15901.4111490052,
            "unit": "ns/iter",
            "extra": "iterations: 51018\ncpu: 15900.782076914009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 47438.24621662979,
            "unit": "ns/iter",
            "extra": "iterations: 17643\ncpu: 47437.578643087814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 470844.2529666108,
            "unit": "ns/iter",
            "extra": "iterations: 1854\ncpu: 470835.9762675311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 387941.1846906934,
            "unit": "ns/iter",
            "extra": "iterations: 2247\ncpu: 387925.8121940368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 382962.0083187331,
            "unit": "ns/iter",
            "extra": "iterations: 2284\ncpu: 382952.8896672506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 385508.6940298666,
            "unit": "ns/iter",
            "extra": "iterations: 2278\ncpu: 385498.2440737501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 237378.82070641912,
            "unit": "ns/iter",
            "extra": "iterations: 3709\ncpu: 237370.85467780923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 379852.25279143965,
            "unit": "ns/iter",
            "extra": "iterations: 2239\ncpu: 379846.7172845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 305.59275008093357,
            "unit": "ns/iter",
            "extra": "iterations: 2277653\ncpu: 305.585047415037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1676.58765499617,
            "unit": "ns/iter",
            "extra": "iterations: 420575\ncpu: 1676.5532901384872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1331.8961980882216,
            "unit": "ns/iter",
            "extra": "iterations: 525867\ncpu: 1331.8559635801569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1299.3327044024961,
            "unit": "ns/iter",
            "extra": "iterations: 537420\ncpu: 1299.2932901641157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1064.3515351136662,
            "unit": "ns/iter",
            "extra": "iterations: 651841\ncpu: 1064.3350142135882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8104.087794802029,
            "unit": "ns/iter",
            "extra": "iterations: 87135\ncpu: 8103.944454008073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19279.1562740808,
            "unit": "ns/iter",
            "extra": "iterations: 36340\ncpu: 19278.81673087514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4581.070104078659,
            "unit": "ns/iter",
            "extra": "iterations: 152673\ncpu: 4580.987469952178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4534.969319738344,
            "unit": "ns/iter",
            "extra": "iterations: 154073\ncpu: 4534.904233707383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4570.519742818035,
            "unit": "ns/iter",
            "extra": "iterations: 153043\ncpu: 4570.399168861075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9634.973098061842,
            "unit": "ns/iter",
            "extra": "iterations: 72597\ncpu: 9634.585451189509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8671.299735272652,
            "unit": "ns/iter",
            "extra": "iterations: 80838\ncpu: 8671.123728939378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3160.1574928584055,
            "unit": "ns/iter",
            "extra": "iterations: 221591\ncpu: 3160.1120984155336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15957.114667638298,
            "unit": "ns/iter",
            "extra": "iterations: 43988\ncpu: 15956.82913521871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12890.1572594708,
            "unit": "ns/iter",
            "extra": "iterations: 54515\ncpu: 12889.909199302703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12583.921469547166,
            "unit": "ns/iter",
            "extra": "iterations: 55609\ncpu: 12583.53503929221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13282.120142283193,
            "unit": "ns/iter",
            "extra": "iterations: 52571\ncpu: 13281.934907077959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28772.447418185293,
            "unit": "ns/iter",
            "extra": "iterations: 24324\ncpu: 28771.974181877948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 102084.89949016244,
            "unit": "ns/iter",
            "extra": "iterations: 6865\ncpu: 102081.7334304448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 87990.40854896733,
            "unit": "ns/iter",
            "extra": "iterations: 7884\ncpu: 87987.89954337843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 87984.55164171982,
            "unit": "ns/iter",
            "extra": "iterations: 7949\ncpu: 87982.72738709181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 87800.70829159254,
            "unit": "ns/iter",
            "extra": "iterations: 7984\ncpu: 87799.96242484942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 56724.82830494705,
            "unit": "ns/iter",
            "extra": "iterations: 12330\ncpu: 56723.72262773743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 87685.65391348307,
            "unit": "ns/iter",
            "extra": "iterations: 7998\ncpu: 87683.25831457702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3196.4069384614736,
            "unit": "ns/iter",
            "extra": "iterations: 218694\ncpu: 3196.265101008725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15904.484330290317,
            "unit": "ns/iter",
            "extra": "iterations: 44034\ncpu: 15904.224008720461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12761.761078541564,
            "unit": "ns/iter",
            "extra": "iterations: 54926\ncpu: 12761.6338346139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12597.816700538628,
            "unit": "ns/iter",
            "extra": "iterations: 55603\ncpu: 12597.69796593697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13053.421275559422,
            "unit": "ns/iter",
            "extra": "iterations: 53357\ncpu: 13053.134546544938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28676.15052002261,
            "unit": "ns/iter",
            "extra": "iterations: 24422\ncpu: 28675.13307673396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 101264.13799593791,
            "unit": "ns/iter",
            "extra": "iterations: 6906\ncpu: 101262.3805386628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 87107.32983712427,
            "unit": "ns/iter",
            "extra": "iterations: 8104\ncpu: 87106.02171767011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 86017.59347798636,
            "unit": "ns/iter",
            "extra": "iterations: 8157\ncpu: 86016.19467941555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 86218.91497431732,
            "unit": "ns/iter",
            "extra": "iterations: 8174\ncpu: 86218.30193295813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 57200.38945466626,
            "unit": "ns/iter",
            "extra": "iterations: 12176\ncpu: 57197.725032851245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 87433.54219725629,
            "unit": "ns/iter",
            "extra": "iterations: 8010\ncpu: 87431.5980024981 ns\nthreads: 1"
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
        "date": 1705955616348,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 710.4705724649131,
            "unit": "ns/iter",
            "extra": "iterations: 984724\ncpu: 710.4264748294954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10840.377686395235,
            "unit": "ns/iter",
            "extra": "iterations: 76357\ncpu: 10839.91120656914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24246.38535170383,
            "unit": "ns/iter",
            "extra": "iterations: 34475\ncpu: 24245.427121102242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38364.40282486091,
            "unit": "ns/iter",
            "extra": "iterations: 21240\ncpu: 38362.34463276837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48264.094364906414,
            "unit": "ns/iter",
            "extra": "iterations: 16415\ncpu: 48261.35242156565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 60144.53547008596,
            "unit": "ns/iter",
            "extra": "iterations: 14040\ncpu: 60143.732193732205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59248.39810001004,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59243.09000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68965.30123828902,
            "unit": "ns/iter",
            "extra": "iterations: 12598\ncpu: 68961.70026988408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 79231.75616165086,
            "unit": "ns/iter",
            "extra": "iterations: 11036\ncpu: 79227.15657847043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 584.6154893639642,
            "unit": "ns/iter",
            "extra": "iterations: 1198474\ncpu: 584.5856480824771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 520.8394815943774,
            "unit": "ns/iter",
            "extra": "iterations: 1378303\ncpu: 520.8163952338489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 483.67430175574304,
            "unit": "ns/iter",
            "extra": "iterations: 1449099\ncpu: 483.65632713844957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 495.39004334845197,
            "unit": "ns/iter",
            "extra": "iterations: 1416199\ncpu: 495.3793216913726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 973.0898769021031,
            "unit": "ns/iter",
            "extra": "iterations: 716747\ncpu: 972.9977244411215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4298.482048235553,
            "unit": "ns/iter",
            "extra": "iterations: 186834\ncpu: 4298.185555091685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 20201.815398335348,
            "unit": "ns/iter",
            "extra": "iterations: 40368\ncpu: 20201.79597701155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 16227.93458091338,
            "unit": "ns/iter",
            "extra": "iterations: 50765\ncpu: 16227.593814636082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15374.764768504541,
            "unit": "ns/iter",
            "extra": "iterations: 53543\ncpu: 15374.74926694436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15920.65411157998,
            "unit": "ns/iter",
            "extra": "iterations: 51586\ncpu: 15920.309773969642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 47020.806077254834,
            "unit": "ns/iter",
            "extra": "iterations: 17837\ncpu: 47020.03139541396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 480639.3254817815,
            "unit": "ns/iter",
            "extra": "iterations: 1868\ncpu: 480612.68736616714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 384838.57035064057,
            "unit": "ns/iter",
            "extra": "iterations: 2253\ncpu: 384824.27873945725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 375980.21838076744,
            "unit": "ns/iter",
            "extra": "iterations: 2285\ncpu: 375964.28884026315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 380408.90017359494,
            "unit": "ns/iter",
            "extra": "iterations: 2304\ncpu: 380389.8437499999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 234128.96011937797,
            "unit": "ns/iter",
            "extra": "iterations: 3686\ncpu: 234119.0450352681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 380201.76784140966,
            "unit": "ns/iter",
            "extra": "iterations: 2270\ncpu: 380181.5418502197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1921627.9161425082,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1921515.7232704402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 791671.4568823046,
            "unit": "ns/iter",
            "extra": "iterations: 1206\ncpu: 791635.1575456059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2618627.355932365,
            "unit": "ns/iter",
            "extra": "iterations: 354\ncpu: 2618486.7231638487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4426.265746454535,
            "unit": "ns/iter",
            "extra": "iterations: 177278\ncpu: 4426.050045690952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 20152.9093319713,
            "unit": "ns/iter",
            "extra": "iterations: 41106\ncpu: 20151.564248528088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 16170.138420950008,
            "unit": "ns/iter",
            "extra": "iterations: 51170\ncpu: 16169.597420363469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15377.446775274248,
            "unit": "ns/iter",
            "extra": "iterations: 53772\ncpu: 15376.6532767983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15893.291826669687,
            "unit": "ns/iter",
            "extra": "iterations: 51301\ncpu: 15892.467983080287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 46719.141360675014,
            "unit": "ns/iter",
            "extra": "iterations: 17947\ncpu: 46716.27012871224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 481002.6749174711,
            "unit": "ns/iter",
            "extra": "iterations: 1818\ncpu: 480978.7678767881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 394687.184900564,
            "unit": "ns/iter",
            "extra": "iterations: 2212\ncpu: 394675.7233273056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 385913.74834725895,
            "unit": "ns/iter",
            "extra": "iterations: 2269\ncpu: 385890.92111062014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 386101.2185314575,
            "unit": "ns/iter",
            "extra": "iterations: 2288\ncpu: 386085.22727272846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 233930.78982777437,
            "unit": "ns/iter",
            "extra": "iterations: 3716\ncpu: 233923.7621097969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 388351.1747443226,
            "unit": "ns/iter",
            "extra": "iterations: 2249\ncpu: 388350.8225878173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1939841.9787232846,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 1939680.2127659686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 756705.0616382656,
            "unit": "ns/iter",
            "extra": "iterations: 1233\ncpu: 756699.0267639917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4437.725858018422,
            "unit": "ns/iter",
            "extra": "iterations: 179221\ncpu: 4437.613337722694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 20144.841279271714,
            "unit": "ns/iter",
            "extra": "iterations: 40398\ncpu: 20144.82400118809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 16214.019816063066,
            "unit": "ns/iter",
            "extra": "iterations: 51322\ncpu: 16213.826429211691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15416.807948733502,
            "unit": "ns/iter",
            "extra": "iterations: 54147\ncpu: 15416.791327312658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 16011.80611405532,
            "unit": "ns/iter",
            "extra": "iterations: 52273\ncpu: 16011.426549078793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 46953.990527435126,
            "unit": "ns/iter",
            "extra": "iterations: 17841\ncpu: 46953.494759262496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 469510.69135801395,
            "unit": "ns/iter",
            "extra": "iterations: 1863\ncpu: 469510.8427267865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 386348.3040752274,
            "unit": "ns/iter",
            "extra": "iterations: 2233\ncpu: 386340.03582624305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 380913.5540955114,
            "unit": "ns/iter",
            "extra": "iterations: 2283\ncpu: 380907.358738501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 378033.6964828671,
            "unit": "ns/iter",
            "extra": "iterations: 2303\ncpu: 378025.1411202783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 232498.15629139828,
            "unit": "ns/iter",
            "extra": "iterations: 3775\ncpu: 232497.80132450408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 381289.5365217628,
            "unit": "ns/iter",
            "extra": "iterations: 2300\ncpu: 381289.3478260857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 311.8927154451989,
            "unit": "ns/iter",
            "extra": "iterations: 2265135\ncpu: 311.88966662031197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1686.8712695282848,
            "unit": "ns/iter",
            "extra": "iterations: 415162\ncpu: 1686.8680177858187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1353.465912652651,
            "unit": "ns/iter",
            "extra": "iterations: 516878\ncpu: 1353.4623257325609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1253.2662690919494,
            "unit": "ns/iter",
            "extra": "iterations: 559727\ncpu: 1253.2506025258685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1063.8951433771567,
            "unit": "ns/iter",
            "extra": "iterations: 657288\ncpu: 1063.8929966772662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7986.366163313414,
            "unit": "ns/iter",
            "extra": "iterations: 87745\ncpu: 7986.271582426413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19343.131204883994,
            "unit": "ns/iter",
            "extra": "iterations: 36020\ncpu: 19343.15102720716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4600.000512456834,
            "unit": "ns/iter",
            "extra": "iterations: 152208\ncpu: 4599.873856827439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4510.059367086413,
            "unit": "ns/iter",
            "extra": "iterations: 155187\ncpu: 4510.05561032815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4535.149620363302,
            "unit": "ns/iter",
            "extra": "iterations: 153963\ncpu: 4535.1435085052835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9138.911848787282,
            "unit": "ns/iter",
            "extra": "iterations: 76607\ncpu: 9138.907671622599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8717.465845479346,
            "unit": "ns/iter",
            "extra": "iterations: 80209\ncpu: 8717.279856375108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3119.7291214555567,
            "unit": "ns/iter",
            "extra": "iterations: 224872\ncpu: 3119.726333202848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15670.444116131855,
            "unit": "ns/iter",
            "extra": "iterations: 44673\ncpu: 15670.246009894132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12490.412973552515,
            "unit": "ns/iter",
            "extra": "iterations: 55960\ncpu: 12490.389563974211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12345.174160080422,
            "unit": "ns/iter",
            "extra": "iterations: 56672\ncpu: 12344.881070017003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12927.799329438769,
            "unit": "ns/iter",
            "extra": "iterations: 54283\ncpu: 12927.658751358755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28804.03350186692,
            "unit": "ns/iter",
            "extra": "iterations: 24327\ncpu: 28804.012003123713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100970.84587762119,
            "unit": "ns/iter",
            "extra": "iterations: 6962\ncpu: 100969.85061763925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 87949.32554047187,
            "unit": "ns/iter",
            "extra": "iterations: 7956\ncpu: 87949.27099044668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 87163.66753344072,
            "unit": "ns/iter",
            "extra": "iterations: 8076\ncpu: 87161.65180782601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 87422.99724964779,
            "unit": "ns/iter",
            "extra": "iterations: 7999\ncpu: 87422.89036129432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55790.37170607551,
            "unit": "ns/iter",
            "extra": "iterations: 12561\ncpu: 55790.33516439841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 86826.28277316195,
            "unit": "ns/iter",
            "extra": "iterations: 8063\ncpu: 86825.15192856213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3057.6809142050392,
            "unit": "ns/iter",
            "extra": "iterations: 229139\ncpu: 3057.6780905912688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15186.552608099875,
            "unit": "ns/iter",
            "extra": "iterations: 45953\ncpu: 15186.229408308329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12205.174493126944,
            "unit": "ns/iter",
            "extra": "iterations: 57263\ncpu: 12205.162146586823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12012.082785011698,
            "unit": "ns/iter",
            "extra": "iterations: 57752\ncpu: 12011.919933508718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12560.127542584882,
            "unit": "ns/iter",
            "extra": "iterations: 55652\ncpu: 12559.98346869838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28061.268623203385,
            "unit": "ns/iter",
            "extra": "iterations: 24942\ncpu: 28060.364044583337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 99133.13855081401,
            "unit": "ns/iter",
            "extra": "iterations: 7066\ncpu: 99133.05972261564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84868.23062909768,
            "unit": "ns/iter",
            "extra": "iterations: 8234\ncpu: 84868.2171484089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 84627.19049921772,
            "unit": "ns/iter",
            "extra": "iterations: 8273\ncpu: 84625.98815423722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84157.86363637373,
            "unit": "ns/iter",
            "extra": "iterations: 8316\ncpu: 84157.82828282948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 56279.330927754716,
            "unit": "ns/iter",
            "extra": "iterations: 12471\ncpu: 56277.29131585272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 85651.4546460215,
            "unit": "ns/iter",
            "extra": "iterations: 8136\ncpu: 85650.57767944917 ns\nthreads: 1"
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
        "date": 1705957169604,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 718.8855418216901,
            "unit": "ns/iter",
            "extra": "iterations: 972460\ncpu: 718.8807765872118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11131.171914517387,
            "unit": "ns/iter",
            "extra": "iterations: 74729\ncpu: 11130.686881933387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25173.349394331064,
            "unit": "ns/iter",
            "extra": "iterations: 33269\ncpu: 25172.313565180797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 40117.958620364414,
            "unit": "ns/iter",
            "extra": "iterations: 21194\ncpu: 40115.76389544211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 49070.301797139036,
            "unit": "ns/iter",
            "extra": "iterations: 16415\ncpu: 49067.57234236974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 50544.246100002965,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50541.660000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 61054.315399996995,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61052.580000000045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 70564.24306290736,
            "unit": "ns/iter",
            "extra": "iterations: 12289\ncpu: 70560.44429978033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 80777.31859473563,
            "unit": "ns/iter",
            "extra": "iterations: 10788\ncpu: 80773.45198368556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 595.0376025980963,
            "unit": "ns/iter",
            "extra": "iterations: 1168882\ncpu: 595.008905946025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 503.6717459693724,
            "unit": "ns/iter",
            "extra": "iterations: 1395139\ncpu: 503.6445114071072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 491.2479736676137,
            "unit": "ns/iter",
            "extra": "iterations: 1428813\ncpu: 491.22789336323245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 499.9468751096386,
            "unit": "ns/iter",
            "extra": "iterations: 1397217\ncpu: 499.9249937554438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 988.1524692428388,
            "unit": "ns/iter",
            "extra": "iterations: 709671\ncpu: 988.1601474486073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4423.54336720617,
            "unit": "ns/iter",
            "extra": "iterations: 181658\ncpu: 4423.3581785553115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 20194.383293637668,
            "unit": "ns/iter",
            "extra": "iterations: 41146\ncpu: 20194.055315218982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 16184.05608442884,
            "unit": "ns/iter",
            "extra": "iterations: 51262\ncpu: 16183.402910538036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15512.021895915952,
            "unit": "ns/iter",
            "extra": "iterations: 53937\ncpu: 15504.379183121038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15899.7033466227,
            "unit": "ns/iter",
            "extra": "iterations: 52172\ncpu: 15899.727823353564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 47785.97565670505,
            "unit": "ns/iter",
            "extra": "iterations: 17664\ncpu: 47784.53917572459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 467461.39255765086,
            "unit": "ns/iter",
            "extra": "iterations: 1908\ncpu: 467446.01677148876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 384192.8837312156,
            "unit": "ns/iter",
            "extra": "iterations: 2262\ncpu: 384185.54376657837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 378901.0847234445,
            "unit": "ns/iter",
            "extra": "iterations: 2278\ncpu: 378898.02458296675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 382765.8844464328,
            "unit": "ns/iter",
            "extra": "iterations: 2276\ncpu: 382757.996485061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 234470.81592037587,
            "unit": "ns/iter",
            "extra": "iterations: 3618\ncpu: 234468.65671641746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 377439.15034661884,
            "unit": "ns/iter",
            "extra": "iterations: 2308\ncpu: 377426.4731369159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1942347.2552742606,
            "unit": "ns/iter",
            "extra": "iterations: 474\ncpu: 1942272.784810125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 784943.8746928453,
            "unit": "ns/iter",
            "extra": "iterations: 1221\ncpu: 784932.5962325967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2632089.3512657713,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2632005.3797468296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4477.200049981754,
            "unit": "ns/iter",
            "extra": "iterations: 180065\ncpu: 4477.0410685030265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 20280.8010632269,
            "unit": "ns/iter",
            "extra": "iterations: 40631\ncpu: 20280.88651522237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 16226.124955590954,
            "unit": "ns/iter",
            "extra": "iterations: 50666\ncpu: 16226.28981960292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15412.218619930863,
            "unit": "ns/iter",
            "extra": "iterations: 53577\ncpu: 15412.234727588277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15942.058875917426,
            "unit": "ns/iter",
            "extra": "iterations: 51651\ncpu: 15941.956593289513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 47465.01177624904,
            "unit": "ns/iter",
            "extra": "iterations: 17323\ncpu: 47465.55446516218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 476986.1416938033,
            "unit": "ns/iter",
            "extra": "iterations: 1842\ncpu: 476991.6938110771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 394916.99774372065,
            "unit": "ns/iter",
            "extra": "iterations: 2216\ncpu: 394911.5523465702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 388581.69343389984,
            "unit": "ns/iter",
            "extra": "iterations: 2254\ncpu: 388580.1242236018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 385871.7605819745,
            "unit": "ns/iter",
            "extra": "iterations: 2268\ncpu: 385875.7054673696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 228877.27179624088,
            "unit": "ns/iter",
            "extra": "iterations: 3808\ncpu: 228879.46428571377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 385357.1614190978,
            "unit": "ns/iter",
            "extra": "iterations: 2255\ncpu: 385360.8425720633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1947353.4723403568,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 1947347.021276598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 772293.391846949,
            "unit": "ns/iter",
            "extra": "iterations: 1202\ncpu: 772296.5058236313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4462.4026620262875,
            "unit": "ns/iter",
            "extra": "iterations: 179863\ncpu: 4462.406387083526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 20483.933261542654,
            "unit": "ns/iter",
            "extra": "iterations: 39932\ncpu: 20484.138034658856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 16329.870191536014,
            "unit": "ns/iter",
            "extra": "iterations: 49704\ncpu: 16330.027764364919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15485.653564430651,
            "unit": "ns/iter",
            "extra": "iterations: 52561\ncpu: 15485.83360286147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 16090.371581356432,
            "unit": "ns/iter",
            "extra": "iterations: 50678\ncpu: 16089.798334582994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 47736.9025538022,
            "unit": "ns/iter",
            "extra": "iterations: 17425\ncpu: 47737.027259684066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 473063.8136611983,
            "unit": "ns/iter",
            "extra": "iterations: 1830\ncpu: 473068.7978142104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 389225.40328305855,
            "unit": "ns/iter",
            "extra": "iterations: 2254\ncpu: 389226.4862466722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 386837.9413062642,
            "unit": "ns/iter",
            "extra": "iterations: 2266\ncpu: 386842.0564872031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 390084.007982223,
            "unit": "ns/iter",
            "extra": "iterations: 2255\ncpu: 390088.2926829276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 236115.3221205493,
            "unit": "ns/iter",
            "extra": "iterations: 3716\ncpu: 236116.06566200257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 386105.56028369995,
            "unit": "ns/iter",
            "extra": "iterations: 2256\ncpu: 386104.07801418396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 307.4345510150776,
            "unit": "ns/iter",
            "extra": "iterations: 2247002\ncpu: 307.43577442298954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1701.9377266539746,
            "unit": "ns/iter",
            "extra": "iterations: 412247\ncpu: 1701.9636286012865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1332.7968365700144,
            "unit": "ns/iter",
            "extra": "iterations: 530184\ncpu: 1332.796538560202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1286.102971724092,
            "unit": "ns/iter",
            "extra": "iterations: 543994\ncpu: 1286.082015610465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1097.4004332801894,
            "unit": "ns/iter",
            "extra": "iterations: 638386\ncpu: 1097.411754017158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8132.729333519607,
            "unit": "ns/iter",
            "extra": "iterations: 86154\ncpu: 8132.73672725582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18583.315768547756,
            "unit": "ns/iter",
            "extra": "iterations: 37727\ncpu: 18583.502531343827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4635.488264186322,
            "unit": "ns/iter",
            "extra": "iterations: 150863\ncpu: 4635.485175291456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4617.300362898901,
            "unit": "ns/iter",
            "extra": "iterations: 151833\ncpu: 4617.292683408721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4618.735941771217,
            "unit": "ns/iter",
            "extra": "iterations: 151815\ncpu: 4618.76889635418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9272.106757728849,
            "unit": "ns/iter",
            "extra": "iterations: 75114\ncpu: 9272.077109460179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8789.95008655519,
            "unit": "ns/iter",
            "extra": "iterations: 79718\ncpu: 8789.748864748384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3133.8794055431217,
            "unit": "ns/iter",
            "extra": "iterations: 223128\ncpu: 3133.9101323007244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15805.629973832458,
            "unit": "ns/iter",
            "extra": "iterations: 44332\ncpu: 15805.650545880799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12671.955042924128,
            "unit": "ns/iter",
            "extra": "iterations: 55097\ncpu: 12672.0837795161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12458.978065112537,
            "unit": "ns/iter",
            "extra": "iterations: 56303\ncpu: 12458.796156510325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13056.93994421375,
            "unit": "ns/iter",
            "extra": "iterations: 53417\ncpu: 13056.83209465147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28553.820436467584,
            "unit": "ns/iter",
            "extra": "iterations: 24515\ncpu: 28553.913930247105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 102709.8464364432,
            "unit": "ns/iter",
            "extra": "iterations: 6805\ncpu: 102711.37398971341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 87316.39229471373,
            "unit": "ns/iter",
            "extra": "iterations: 7112\ncpu: 87317.32283464629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 87872.61661020461,
            "unit": "ns/iter",
            "extra": "iterations: 7971\ncpu: 87871.88558524683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 87414.89474339936,
            "unit": "ns/iter",
            "extra": "iterations: 8028\ncpu: 87414.06327852533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 56499.58353510545,
            "unit": "ns/iter",
            "extra": "iterations: 12390\ncpu: 56499.7094430993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 87190.91293006855,
            "unit": "ns/iter",
            "extra": "iterations: 8051\ncpu: 87191.85194385744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3120.8462254234582,
            "unit": "ns/iter",
            "extra": "iterations: 224608\ncpu: 3120.8536650520205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15429.522710251747,
            "unit": "ns/iter",
            "extra": "iterations: 45398\ncpu: 15429.347107802172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12403.017224863519,
            "unit": "ns/iter",
            "extra": "iterations: 56372\ncpu: 12403.145178457313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12235.107898795099,
            "unit": "ns/iter",
            "extra": "iterations: 57072\ncpu: 12235.096019063621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12720.542568490913,
            "unit": "ns/iter",
            "extra": "iterations: 54935\ncpu: 12720.671702921687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 29915.521825638538,
            "unit": "ns/iter",
            "extra": "iterations: 24627\ncpu: 29915.15003857538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 100530.03332383522,
            "unit": "ns/iter",
            "extra": "iterations: 7022\ncpu: 100527.11478211363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 85569.96786063783,
            "unit": "ns/iter",
            "extra": "iterations: 8152\ncpu: 85568.03238469081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 85724.53254007209,
            "unit": "ns/iter",
            "extra": "iterations: 8236\ncpu: 85723.36085478334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84205.5354014558,
            "unit": "ns/iter",
            "extra": "iterations: 8220\ncpu: 84204.35523114342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 56290.96956486244,
            "unit": "ns/iter",
            "extra": "iterations: 12387\ncpu: 56289.88455639011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 85648.20470415184,
            "unit": "ns/iter",
            "extra": "iterations: 8163\ncpu: 85645.17946833423 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}