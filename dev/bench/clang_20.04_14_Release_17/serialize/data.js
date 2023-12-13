window.BENCHMARK_DATA = {
  "lastUpdate": 1702493008767,
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
      }
    ]
  }
}