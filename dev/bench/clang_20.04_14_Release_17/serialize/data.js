window.BENCHMARK_DATA = {
  "lastUpdate": 1705773689297,
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
      }
    ]
  }
}