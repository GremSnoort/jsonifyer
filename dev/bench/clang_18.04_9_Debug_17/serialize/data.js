window.BENCHMARK_DATA = {
  "lastUpdate": 1702489598513,
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
      }
    ]
  }
}