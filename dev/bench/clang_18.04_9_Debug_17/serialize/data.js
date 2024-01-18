window.BENCHMARK_DATA = {
  "lastUpdate": 1705574895906,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-9 18.04 Debug c++-17": [
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
        "date": 1702489597517,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8918.591304127356,
            "unit": "ns/iter",
            "extra": "iterations: 78819\ncpu: 8918.314112079575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 82680.9867433477,
            "unit": "ns/iter",
            "extra": "iterations: 10259\ncpu: 82679.54966370993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 157613.83291184477,
            "unit": "ns/iter",
            "extra": "iterations: 5536\ncpu: 157614.25216763004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 233334.8432995366,
            "unit": "ns/iter",
            "extra": "iterations: 3746\ncpu: 233333.12867058188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 309459.9893466065,
            "unit": "ns/iter",
            "extra": "iterations: 2816\ncpu: 309460.51136363647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 380002.3862434274,
            "unit": "ns/iter",
            "extra": "iterations: 2268\ncpu: 380002.5132275132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 455061.84375003754,
            "unit": "ns/iter",
            "extra": "iterations: 1920\ncpu: 455063.1250000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 526711.8631960835,
            "unit": "ns/iter",
            "extra": "iterations: 1652\ncpu: 526706.5980629544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 602939.511756592,
            "unit": "ns/iter",
            "extra": "iterations: 1446\ncpu: 602935.5463347164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6719.439843855372,
            "unit": "ns/iter",
            "extra": "iterations: 104262\ncpu: 6719.008843106777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5639.305140721293,
            "unit": "ns/iter",
            "extra": "iterations: 124146\ncpu: 5639.2570038503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5515.192244093349,
            "unit": "ns/iter",
            "extra": "iterations: 125788\ncpu: 5514.884567685316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5710.170230061859,
            "unit": "ns/iter",
            "extra": "iterations: 123010\ncpu: 5709.819526867742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 10197.209670374452,
            "unit": "ns/iter",
            "extra": "iterations: 68684\ncpu: 10196.788189389084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 41019.13058615773,
            "unit": "ns/iter",
            "extra": "iterations: 20967\ncpu: 41012.5053655745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 149724.99877622616,
            "unit": "ns/iter",
            "extra": "iterations: 5720\ncpu: 149718.98601398594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 122217.87101387592,
            "unit": "ns/iter",
            "extra": "iterations: 6993\ncpu: 122211.46861146859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 120123.05191334206,
            "unit": "ns/iter",
            "extra": "iterations: 7108\ncpu: 120118.68317388846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 121946.49914359684,
            "unit": "ns/iter",
            "extra": "iterations: 7006\ncpu: 121946.9312018268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 321975.6198071312,
            "unit": "ns/iter",
            "extra": "iterations: 2696\ncpu: 321971.1795252231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2435475.0417755027,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2435382.245430812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1999099.0793992793,
            "unit": "ns/iter",
            "extra": "iterations: 466\ncpu: 1999090.3433476416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1958011.4589473996,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1958016.421052632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1980664.9658847316,
            "unit": "ns/iter",
            "extra": "iterations: 469\ncpu: 1980594.0298507465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1218434.703022319,
            "unit": "ns/iter",
            "extra": "iterations: 761\ncpu: 1218387.9106438914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1938474.3916667446,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1938386.874999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 8204577.251908562,
            "unit": "ns/iter",
            "extra": "iterations: 131\ncpu: 8203915.267175583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4674779.845000217,
            "unit": "ns/iter",
            "extra": "iterations: 200\ncpu: 4674504.499999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 10102241.000000067,
            "unit": "ns/iter",
            "extra": "iterations: 106\ncpu: 10101784.905660378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 36579.55421203079,
            "unit": "ns/iter",
            "extra": "iterations: 22412\ncpu: 36577.90469391391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 153330.65407340607,
            "unit": "ns/iter",
            "extra": "iterations: 5585\ncpu: 153324.6911369739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 126342.08332104083,
            "unit": "ns/iter",
            "extra": "iterations: 6781\ncpu: 126335.36351570541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 120578.27577937872,
            "unit": "ns/iter",
            "extra": "iterations: 7089\ncpu: 120573.04274227649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 122839.3212367689,
            "unit": "ns/iter",
            "extra": "iterations: 6889\ncpu: 122835.14298156484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 325976.82381670637,
            "unit": "ns/iter",
            "extra": "iterations: 2662\ncpu: 325963.6739293765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2456759.8164891447,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2456658.2446808564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2024390.2663756416,
            "unit": "ns/iter",
            "extra": "iterations: 458\ncpu: 2024297.8165938882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1980171.527542161,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1980100.2118644137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1993942.8221257206,
            "unit": "ns/iter",
            "extra": "iterations: 461\ncpu: 1993845.7700650834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1228617.2928760534,
            "unit": "ns/iter",
            "extra": "iterations: 758\ncpu: 1228580.738786281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1956313.0780589718,
            "unit": "ns/iter",
            "extra": "iterations: 474\ncpu: 1956224.6835443028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 8241642.707692056,
            "unit": "ns/iter",
            "extra": "iterations: 130\ncpu: 8241167.692307709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4665812.7525255615,
            "unit": "ns/iter",
            "extra": "iterations: 198\ncpu: 4665441.414141412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 36237.50809332519,
            "unit": "ns/iter",
            "extra": "iterations: 22673\ncpu: 36236.86763992384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 150867.91110330584,
            "unit": "ns/iter",
            "extra": "iterations: 5692\ncpu: 150868.21855235388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 122365.66852090131,
            "unit": "ns/iter",
            "extra": "iterations: 7011\ncpu: 122365.79660533444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 118972.53623993546,
            "unit": "ns/iter",
            "extra": "iterations: 7202\ncpu: 118970.2304915309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 121519.22678062251,
            "unit": "ns/iter",
            "extra": "iterations: 7020\ncpu: 121519.27350427311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 323186.5553903104,
            "unit": "ns/iter",
            "extra": "iterations: 2690\ncpu: 323181.7472118965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2464993.1984128226,
            "unit": "ns/iter",
            "extra": "iterations: 378\ncpu: 2464950.529100534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2011291.5517240355,
            "unit": "ns/iter",
            "extra": "iterations: 464\ncpu: 2011205.387931046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1967788.4432772358,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1967715.7563025295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1991068.0835118813,
            "unit": "ns/iter",
            "extra": "iterations: 467\ncpu: 1991012.4197002237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1234305.0518616242,
            "unit": "ns/iter",
            "extra": "iterations: 752\ncpu: 1234248.5372340367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1950070.171907659,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1950011.9496855352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3467.578829810238,
            "unit": "ns/iter",
            "extra": "iterations: 201916\ncpu: 3467.446363834465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17832.566581826974,
            "unit": "ns/iter",
            "extra": "iterations: 39290\ncpu: 17831.835072537586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 14171.342964746353,
            "unit": "ns/iter",
            "extra": "iterations: 49387\ncpu: 14170.5833518943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 14094.542552335635,
            "unit": "ns/iter",
            "extra": "iterations: 49680\ncpu: 14094.114331723042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11755.730474526434,
            "unit": "ns/iter",
            "extra": "iterations: 59512\ncpu: 11755.39891114393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 73636.61494795648,
            "unit": "ns/iter",
            "extra": "iterations: 9513\ncpu: 73633.74329864413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 155315.23994698733,
            "unit": "ns/iter",
            "extra": "iterations: 4526\ncpu: 155307.51215201028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 41423.33404406347,
            "unit": "ns/iter",
            "extra": "iterations: 16884\ncpu: 41422.83226723475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 41134.61026213925,
            "unit": "ns/iter",
            "extra": "iterations: 17014\ncpu: 41133.44892441504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 41630.99499791832,
            "unit": "ns/iter",
            "extra": "iterations: 16793\ncpu: 41629.70880724067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 87087.19857979067,
            "unit": "ns/iter",
            "extra": "iterations: 8027\ncpu: 87085.31207175899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 75589.40393130947,
            "unit": "ns/iter",
            "extra": "iterations: 9259\ncpu: 75584.83637541793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21757.81077142505,
            "unit": "ns/iter",
            "extra": "iterations: 32252\ncpu: 21756.660052089668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 105922.80127233882,
            "unit": "ns/iter",
            "extra": "iterations: 6602\ncpu: 105920.99363829287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 84656.90082145631,
            "unit": "ns/iter",
            "extra": "iterations: 8278\ncpu: 84654.59048079328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 81576.03671327862,
            "unit": "ns/iter",
            "extra": "iterations: 8580\ncpu: 81576.11888111799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 84449.71735716244,
            "unit": "ns/iter",
            "extra": "iterations: 8279\ncpu: 84448.03720256043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 162495.6002782269,
            "unit": "ns/iter",
            "extra": "iterations: 4313\ncpu: 162494.82958497608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 691848.9617706102,
            "unit": "ns/iter",
            "extra": "iterations: 994\ncpu: 691848.7927565404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 594794.9490230217,
            "unit": "ns/iter",
            "extra": "iterations: 1177\ncpu: 594794.5624468916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 577585.8507462458,
            "unit": "ns/iter",
            "extra": "iterations: 1206\ncpu: 577586.7330016615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 581994.9725000128,
            "unit": "ns/iter",
            "extra": "iterations: 1200\ncpu: 581983.1666666649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 393461.5472973279,
            "unit": "ns/iter",
            "extra": "iterations: 1776\ncpu: 393467.0045045066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 574847.8204917564,
            "unit": "ns/iter",
            "extra": "iterations: 1220\ncpu: 574849.3442623016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 22195.411695871735,
            "unit": "ns/iter",
            "extra": "iterations: 32473\ncpu: 22195.433129061097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 105245.21051046335,
            "unit": "ns/iter",
            "extra": "iterations: 6641\ncpu: 105242.65923806805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 84948.93875817592,
            "unit": "ns/iter",
            "extra": "iterations: 8246\ncpu: 84948.82367208257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 82456.44218897868,
            "unit": "ns/iter",
            "extra": "iterations: 8424\ncpu: 82456.57644824355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 84660.73899333549,
            "unit": "ns/iter",
            "extra": "iterations: 8245\ncpu: 84658.72650091091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 163047.39930315595,
            "unit": "ns/iter",
            "extra": "iterations: 4305\ncpu: 163046.89895470065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 693624.1890547426,
            "unit": "ns/iter",
            "extra": "iterations: 1005\ncpu: 693595.7213930358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 593405.7911714627,
            "unit": "ns/iter",
            "extra": "iterations: 1178\ncpu: 593403.565365026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 578501.6184210135,
            "unit": "ns/iter",
            "extra": "iterations: 1216\ncpu: 578507.3190789474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 582782.517470853,
            "unit": "ns/iter",
            "extra": "iterations: 1202\ncpu: 582782.2795341145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 395024.9266366293,
            "unit": "ns/iter",
            "extra": "iterations: 1772\ncpu: 395024.3792325087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 575310.1360656341,
            "unit": "ns/iter",
            "extra": "iterations: 1220\ncpu: 575288.3606557377 ns\nthreads: 1"
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
        "date": 1702503246637,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8343.192445849407,
            "unit": "ns/iter",
            "extra": "iterations: 83795\ncpu: 8343.067008771408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 77714.7470948847,
            "unit": "ns/iter",
            "extra": "iterations: 10929\ncpu: 77713.72495196268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 148627.90163098523,
            "unit": "ns/iter",
            "extra": "iterations: 5886\ncpu: 148626.0108732586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 218614.54575163923,
            "unit": "ns/iter",
            "extra": "iterations: 3978\ncpu: 218611.66415284065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 289677.9824005473,
            "unit": "ns/iter",
            "extra": "iterations: 2841\ncpu: 289670.5385427667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 356423.6452410288,
            "unit": "ns/iter",
            "extra": "iterations: 2427\ncpu: 356415.6159868152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 425802.84127763275,
            "unit": "ns/iter",
            "extra": "iterations: 2035\ncpu: 425792.13759213727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 495717.8977726873,
            "unit": "ns/iter",
            "extra": "iterations: 1751\ncpu: 495701.5990862368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 565176.1701298486,
            "unit": "ns/iter",
            "extra": "iterations: 1540\ncpu: 565158.3766233766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6573.518059527086,
            "unit": "ns/iter",
            "extra": "iterations: 106675\ncpu: 6572.854933208348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5516.40737436265,
            "unit": "ns/iter",
            "extra": "iterations: 126655\ncpu: 5516.199913149891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5504.395541064286,
            "unit": "ns/iter",
            "extra": "iterations: 126667\ncpu: 5504.100515524954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5511.937989617633,
            "unit": "ns/iter",
            "extra": "iterations: 127140\ncpu: 5511.588013213774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9794.79373730271,
            "unit": "ns/iter",
            "extra": "iterations: 71375\ncpu: 9794.371978984242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 34930.2193344944,
            "unit": "ns/iter",
            "extra": "iterations: 23471\ncpu: 34927.72357377192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 141825.969591798,
            "unit": "ns/iter",
            "extra": "iterations: 6051\ncpu: 141818.77375640385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 117872.11483320054,
            "unit": "ns/iter",
            "extra": "iterations: 7254\ncpu: 117861.2627515858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 114152.54966623045,
            "unit": "ns/iter",
            "extra": "iterations: 7490\ncpu: 114146.50200267007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 114779.43652291552,
            "unit": "ns/iter",
            "extra": "iterations: 7420\ncpu: 114771.72506738531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 286707.3738410614,
            "unit": "ns/iter",
            "extra": "iterations: 3020\ncpu: 286693.07947019883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2367580.230964456,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2367404.0609137085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1922935.0579709762,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1922841.40786749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1888373.7357724363,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1888218.49593496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1942992.264583173,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1942898.1249999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1163147.7062501006,
            "unit": "ns/iter",
            "extra": "iterations: 800\ncpu: 1163060.374999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1871712.455823284,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1871595.1807228953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7737086.244603834,
            "unit": "ns/iter",
            "extra": "iterations: 139\ncpu: 7736325.89928057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4543480.907767009,
            "unit": "ns/iter",
            "extra": "iterations: 206\ncpu: 4543378.155339808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9561805.348214746,
            "unit": "ns/iter",
            "extra": "iterations: 112\ncpu: 9561670.53571428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 37069.22155607425,
            "unit": "ns/iter",
            "extra": "iterations: 22184\ncpu: 37067.499098449225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 146558.90284929678,
            "unit": "ns/iter",
            "extra": "iterations: 5826\ncpu: 146554.53141091642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 120231.98821383106,
            "unit": "ns/iter",
            "extra": "iterations: 7127\ncpu: 120228.81998035581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 114301.5758629913,
            "unit": "ns/iter",
            "extra": "iterations: 7474\ncpu: 114299.11693872146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 116248.13852872953,
            "unit": "ns/iter",
            "extra": "iterations: 7327\ncpu: 116245.18902688687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 293066.90564763325,
            "unit": "ns/iter",
            "extra": "iterations: 2957\ncpu: 293059.6212377396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2375636.119898083,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2375523.979591827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1953996.3431579485,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1953955.789473681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1914807.7345677433,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1914734.9794238675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1949762.6471815095,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1949732.7766179596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1156602.0499999751,
            "unit": "ns/iter",
            "extra": "iterations: 800\ncpu: 1156534.0000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1886642.768762609,
            "unit": "ns/iter",
            "extra": "iterations: 493\ncpu: 1886636.5111561841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7794692.942029278,
            "unit": "ns/iter",
            "extra": "iterations: 138\ncpu: 7794399.999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4389672.962441208,
            "unit": "ns/iter",
            "extra": "iterations: 213\ncpu: 4389302.816901416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 36351.576193188936,
            "unit": "ns/iter",
            "extra": "iterations: 22817\ncpu: 36350.120524170605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 144147.5340851709,
            "unit": "ns/iter",
            "extra": "iterations: 5941\ncpu: 144136.47534085167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 116891.92990142817,
            "unit": "ns/iter",
            "extra": "iterations: 7304\ncpu: 116884.18674698779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 114889.68683608713,
            "unit": "ns/iter",
            "extra": "iterations: 7437\ncpu: 114881.01384967113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 115871.63255374,
            "unit": "ns/iter",
            "extra": "iterations: 7397\ncpu: 115866.02676760871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 289163.59195211774,
            "unit": "ns/iter",
            "extra": "iterations: 3007\ncpu: 289142.33455270965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2380007.6240410316,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2379897.1867007627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1967535.5488565452,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1967415.5925155832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1915347.8553718745,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1915320.8677685966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1951968.4327731435,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1951854.2016806595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1162621.8976279018,
            "unit": "ns/iter",
            "extra": "iterations: 801\ncpu: 1162549.0636704166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1885227.269776741,
            "unit": "ns/iter",
            "extra": "iterations: 493\ncpu: 1885100 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3453.628558615858,
            "unit": "ns/iter",
            "extra": "iterations: 202923\ncpu: 3453.3818246330165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17153.168601369325,
            "unit": "ns/iter",
            "extra": "iterations: 40747\ncpu: 17152.320416227045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13299.464145057362,
            "unit": "ns/iter",
            "extra": "iterations: 52559\ncpu: 13299.04107764606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13915.630876099518,
            "unit": "ns/iter",
            "extra": "iterations: 50097\ncpu: 13915.072758847897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11238.28107457895,
            "unit": "ns/iter",
            "extra": "iterations: 62350\ncpu: 11237.448275862012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 66856.26877734065,
            "unit": "ns/iter",
            "extra": "iterations: 10518\ncpu: 66850.24719528407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 149330.97330201993,
            "unit": "ns/iter",
            "extra": "iterations: 4682\ncpu: 149321.31567706112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 39973.766782836006,
            "unit": "ns/iter",
            "extra": "iterations: 17503\ncpu: 39970.907844369656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 40357.19526153332,
            "unit": "ns/iter",
            "extra": "iterations: 17474\ncpu: 40354.48094311605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 39855.569549304426,
            "unit": "ns/iter",
            "extra": "iterations: 17484\ncpu: 39854.478380233464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 82587.3427728629,
            "unit": "ns/iter",
            "extra": "iterations: 8475\ncpu: 82582.6430678458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 72484.17861205792,
            "unit": "ns/iter",
            "extra": "iterations: 9669\ncpu: 72480.03930085897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 22318.751034305726,
            "unit": "ns/iter",
            "extra": "iterations: 31422\ncpu: 22317.3349882248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 102637.74159447878,
            "unit": "ns/iter",
            "extra": "iterations: 6811\ncpu: 102631.44912641235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 82685.60684463772,
            "unit": "ns/iter",
            "extra": "iterations: 8503\ncpu: 82684.33494060766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 83483.08552003208,
            "unit": "ns/iter",
            "extra": "iterations: 8384\ncpu: 83478.42318702387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 84035.08659150687,
            "unit": "ns/iter",
            "extra": "iterations: 8338\ncpu: 84028.32813624335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 161395.66259788504,
            "unit": "ns/iter",
            "extra": "iterations: 4342\ncpu: 161385.1681252883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 671191.9608030525,
            "unit": "ns/iter",
            "extra": "iterations: 1046\ncpu: 671143.0210325143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 569853.4241435454,
            "unit": "ns/iter",
            "extra": "iterations: 1226\ncpu: 569843.2300163108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 571309.6710203491,
            "unit": "ns/iter",
            "extra": "iterations: 1225\ncpu: 571276.5714285724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 567086.6027619281,
            "unit": "ns/iter",
            "extra": "iterations: 1231\ncpu: 567032.8188464644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 374270.1678246699,
            "unit": "ns/iter",
            "extra": "iterations: 1871\ncpu: 374250.2939604452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 553667.5043478444,
            "unit": "ns/iter",
            "extra": "iterations: 1265\ncpu: 553634.0711462465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21769.210095796025,
            "unit": "ns/iter",
            "extra": "iterations: 32152\ncpu: 21768.27569047014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 103015.01891811259,
            "unit": "ns/iter",
            "extra": "iterations: 6766\ncpu: 103008.83830919195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 83345.33218404502,
            "unit": "ns/iter",
            "extra": "iterations: 8411\ncpu: 83343.45499940557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 83466.97181926637,
            "unit": "ns/iter",
            "extra": "iterations: 8410\ncpu: 83462.73483947749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 83207.38702407741,
            "unit": "ns/iter",
            "extra": "iterations: 8431\ncpu: 83200.8895741902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 161082.789291482,
            "unit": "ns/iter",
            "extra": "iterations: 4333\ncpu: 161069.16685898992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 670298.0086206663,
            "unit": "ns/iter",
            "extra": "iterations: 1044\ncpu: 670257.3754789279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 571150.0520748334,
            "unit": "ns/iter",
            "extra": "iterations: 1229\ncpu: 571134.9877949508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 571380.2085036385,
            "unit": "ns/iter",
            "extra": "iterations: 1223\ncpu: 571349.3867538868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 572573.3521241972,
            "unit": "ns/iter",
            "extra": "iterations: 1224\ncpu: 572527.9411764689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 375005.2833422635,
            "unit": "ns/iter",
            "extra": "iterations: 1867\ncpu: 374977.8253883231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 555029.176843788,
            "unit": "ns/iter",
            "extra": "iterations: 1261\ncpu: 554993.1007137115 ns\nthreads: 1"
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
        "date": 1705574895469,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8356.011741378536,
            "unit": "ns/iter",
            "extra": "iterations: 83721\ncpu: 8355.326620561149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 76532.00873952343,
            "unit": "ns/iter",
            "extra": "iterations: 11099\ncpu: 76525.10136048292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 146217.92391669194,
            "unit": "ns/iter",
            "extra": "iterations: 5954\ncpu: 146211.65602955993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 216159.55418110185,
            "unit": "ns/iter",
            "extra": "iterations: 4042\ncpu: 216144.606630381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 285380.02869393374,
            "unit": "ns/iter",
            "extra": "iterations: 3032\ncpu: 285375.13192612136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 350995.5852665703,
            "unit": "ns/iter",
            "extra": "iterations: 2457\ncpu: 350994.7903947903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 418842.8833734738,
            "unit": "ns/iter",
            "extra": "iterations: 2075\ncpu: 418834.65060240973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 488558.71934754174,
            "unit": "ns/iter",
            "extra": "iterations: 1778\ncpu: 488553.37457817775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 559883.0185422428,
            "unit": "ns/iter",
            "extra": "iterations: 1564\ncpu: 559862.723785167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6550.505407608274,
            "unit": "ns/iter",
            "extra": "iterations: 110400\ncpu: 6550.488224637688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5453.842659033586,
            "unit": "ns/iter",
            "extra": "iterations: 128212\ncpu: 5453.686082425994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5409.510979984179,
            "unit": "ns/iter",
            "extra": "iterations: 129645\ncpu: 5409.488217825601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5454.749625293071,
            "unit": "ns/iter",
            "extra": "iterations: 128100\ncpu: 5454.6042154566785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9879.67026867081,
            "unit": "ns/iter",
            "extra": "iterations: 70979\ncpu: 9879.63623043436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 36427.360735223454,
            "unit": "ns/iter",
            "extra": "iterations: 22687\ncpu: 36427.06836514305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 149102.5509034054,
            "unit": "ns/iter",
            "extra": "iterations: 5756\ncpu: 149099.33981931896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 118679.89783454133,
            "unit": "ns/iter",
            "extra": "iterations: 7204\ncpu: 118677.47084952798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 115338.8607920048,
            "unit": "ns/iter",
            "extra": "iterations: 7399\ncpu: 115338.46465738611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 117463.01060313327,
            "unit": "ns/iter",
            "extra": "iterations: 7262\ncpu: 117463.94932525462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 286033.94075047405,
            "unit": "ns/iter",
            "extra": "iterations: 3038\ncpu: 286028.6701777488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2277880.6089107627,
            "unit": "ns/iter",
            "extra": "iterations: 404\ncpu: 2277801.4851485146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1888984.2403258441,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1888956.2118126312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1821814.7886495553,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1821806.262230918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1860518.6753506905,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1860492.1843687417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1136756.109202449,
            "unit": "ns/iter",
            "extra": "iterations: 815\ncpu: 1136732.1472392639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1814434.2328767632,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1814447.7495107644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7673896.456522279,
            "unit": "ns/iter",
            "extra": "iterations: 138\ncpu: 7672943.478260874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4405717.719047667,
            "unit": "ns/iter",
            "extra": "iterations: 210\ncpu: 4405485.714285717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9539976.236841572,
            "unit": "ns/iter",
            "extra": "iterations: 114\ncpu: 9539054.385964893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 34269.58086016062,
            "unit": "ns/iter",
            "extra": "iterations: 23856\ncpu: 34268.716465459336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 155784.78719913072,
            "unit": "ns/iter",
            "extra": "iterations: 5484\ncpu: 155770.53245805958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 124642.70514503095,
            "unit": "ns/iter",
            "extra": "iterations: 6861\ncpu: 124633.96006413101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 115506.28902438536,
            "unit": "ns/iter",
            "extra": "iterations: 7380\ncpu: 115505.52845528461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 120961.45217392813,
            "unit": "ns/iter",
            "extra": "iterations: 7015\ncpu: 120962.32359230178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 292141.9292517128,
            "unit": "ns/iter",
            "extra": "iterations: 2940\ncpu: 292132.7891156465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2300181.254320896,
            "unit": "ns/iter",
            "extra": "iterations: 405\ncpu: 2300156.790123464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1930199.5124482047,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1930190.4564315288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1843927.2910891215,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1843920.7920792035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1875455.868421129,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1875432.995951406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1135058.9631449014,
            "unit": "ns/iter",
            "extra": "iterations: 814\ncpu: 1135035.626535624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1832457.4350393186,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1832471.259842514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7731124.136690635,
            "unit": "ns/iter",
            "extra": "iterations: 139\ncpu: 7730919.424460427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4429360.863207743,
            "unit": "ns/iter",
            "extra": "iterations: 212\ncpu: 4429236.320754713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 34403.786729659696,
            "unit": "ns/iter",
            "extra": "iterations: 23918\ncpu: 34403.38657078355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 149052.56372804596,
            "unit": "ns/iter",
            "extra": "iterations: 5751\ncpu: 149051.95618153393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 122002.5795551654,
            "unit": "ns/iter",
            "extra": "iterations: 7014\ncpu: 121994.83889364175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 114744.80672381667,
            "unit": "ns/iter",
            "extra": "iterations: 7466\ncpu: 114739.2177873022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 119297.80730111251,
            "unit": "ns/iter",
            "extra": "iterations: 7177\ncpu: 119289.46635084327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 283174.3167863918,
            "unit": "ns/iter",
            "extra": "iterations: 3062\ncpu: 283161.46309601347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2297630.2382133757,
            "unit": "ns/iter",
            "extra": "iterations: 403\ncpu: 2297473.2009925684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1909939.9712526125,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1909868.172484599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1835813.1992109525,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1835715.779092705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1858985.9839999008,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1858856.60000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1145065.7810576817,
            "unit": "ns/iter",
            "extra": "iterations: 813\ncpu: 1145003.9360393584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1826109.0866141203,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1825966.5354330703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3511.939323885912,
            "unit": "ns/iter",
            "extra": "iterations: 199848\ncpu: 3511.758936791941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17331.43838973955,
            "unit": "ns/iter",
            "extra": "iterations: 40391\ncpu: 17329.897749498683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 14079.12574167934,
            "unit": "ns/iter",
            "extra": "iterations: 50898\ncpu: 14078.266336594748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 14035.463776269382,
            "unit": "ns/iter",
            "extra": "iterations: 49774\ncpu: 14035.170972797016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11384.893316007783,
            "unit": "ns/iter",
            "extra": "iterations: 61565\ncpu: 11384.739706001794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 66643.61590973772,
            "unit": "ns/iter",
            "extra": "iterations: 10547\ncpu: 66640.30530008495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 151153.07196400868,
            "unit": "ns/iter",
            "extra": "iterations: 4669\ncpu: 151138.18804883296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 39256.88731526843,
            "unit": "ns/iter",
            "extra": "iterations: 17864\ncpu: 39254.64621585312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 38725.33183881598,
            "unit": "ns/iter",
            "extra": "iterations: 18066\ncpu: 38722.677958596316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 39146.302608012425,
            "unit": "ns/iter",
            "extra": "iterations: 17868\ncpu: 39146.5413028876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 81250.80195258137,
            "unit": "ns/iter",
            "extra": "iterations: 8604\ncpu: 81244.60715945969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 70677.63722812485,
            "unit": "ns/iter",
            "extra": "iterations: 9885\ncpu: 70670.6120384416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20259.93065291735,
            "unit": "ns/iter",
            "extra": "iterations: 34522\ncpu: 20257.971728173194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 99614.10099713753,
            "unit": "ns/iter",
            "extra": "iterations: 7020\ncpu: 99609.38746438634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 80481.04894300803,
            "unit": "ns/iter",
            "extra": "iterations: 8704\ncpu: 80479.33134191237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 76557.5777387059,
            "unit": "ns/iter",
            "extra": "iterations: 9101\ncpu: 76555.00494451202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 79201.53060072138,
            "unit": "ns/iter",
            "extra": "iterations: 8856\ncpu: 79197.04155374883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 162490.37019790726,
            "unit": "ns/iter",
            "extra": "iterations: 4295\ncpu: 162484.3538998848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 649946.3033395645,
            "unit": "ns/iter",
            "extra": "iterations: 1078\ncpu: 649923.8404452667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 552995.3309748425,
            "unit": "ns/iter",
            "extra": "iterations: 1272\ncpu: 552991.5880503145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 539357.9992283512,
            "unit": "ns/iter",
            "extra": "iterations: 1296\ncpu: 539339.1975308574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 546179.4817120235,
            "unit": "ns/iter",
            "extra": "iterations: 1285\ncpu: 546159.8443579663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 369910.5068565136,
            "unit": "ns/iter",
            "extra": "iterations: 1896\ncpu: 369897.15189874015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 535357.1779984932,
            "unit": "ns/iter",
            "extra": "iterations: 1309\ncpu: 535346.1420931937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20293.91543039561,
            "unit": "ns/iter",
            "extra": "iterations: 34445\ncpu: 20293.00043547669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 103306.49971566537,
            "unit": "ns/iter",
            "extra": "iterations: 7034\ncpu: 103303.11344896194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 80932.03080130361,
            "unit": "ns/iter",
            "extra": "iterations: 8636\ncpu: 80930.87077350503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 77617.78101948624,
            "unit": "ns/iter",
            "extra": "iterations: 9083\ncpu: 77613.81702080758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 79684.66859279244,
            "unit": "ns/iter",
            "extra": "iterations: 8826\ncpu: 79683.55993655078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 162822.7399207597,
            "unit": "ns/iter",
            "extra": "iterations: 4291\ncpu: 162813.95945001155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 648389.2359963654,
            "unit": "ns/iter",
            "extra": "iterations: 1089\ncpu: 648386.7768595023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 555848.6624203835,
            "unit": "ns/iter",
            "extra": "iterations: 1256\ncpu: 555838.7738853595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 541534.7325670259,
            "unit": "ns/iter",
            "extra": "iterations: 1305\ncpu: 541538.3908045988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 548282.2789968312,
            "unit": "ns/iter",
            "extra": "iterations: 1276\ncpu: 548280.32915361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 370683.1075211856,
            "unit": "ns/iter",
            "extra": "iterations: 1888\ncpu: 370685.6991525471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 538132.1811926825,
            "unit": "ns/iter",
            "extra": "iterations: 1308\ncpu: 538110.932721712 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}