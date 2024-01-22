window.BENCHMARK_DATA = {
  "lastUpdate": 1705952900098,
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
        "date": 1705772717578,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8333.82910486933,
            "unit": "ns/iter",
            "extra": "iterations: 83876\ncpu: 8333.721207496781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 76551.52306182556,
            "unit": "ns/iter",
            "extra": "iterations: 11209\ncpu: 76547.51538941923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 145169.8049850401,
            "unit": "ns/iter",
            "extra": "iterations: 5015\ncpu: 145167.7567298106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 214686.78726020406,
            "unit": "ns/iter",
            "extra": "iterations: 4066\ncpu: 214679.93113625183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 283637.4029654149,
            "unit": "ns/iter",
            "extra": "iterations: 3035\ncpu: 283630.08237232285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 349040.4937068444,
            "unit": "ns/iter",
            "extra": "iterations: 2463\ncpu: 349016.36215996736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 417065.30772921036,
            "unit": "ns/iter",
            "extra": "iterations: 2083\ncpu: 417056.5050408066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 484172.1592427683,
            "unit": "ns/iter",
            "extra": "iterations: 1796\ncpu: 484162.1937639198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 552441.7780595898,
            "unit": "ns/iter",
            "extra": "iterations: 1577\ncpu: 552413.1261889666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6425.56562705821,
            "unit": "ns/iter",
            "extra": "iterations: 107829\ncpu: 6425.31786439641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5459.685756606689,
            "unit": "ns/iter",
            "extra": "iterations: 128270\ncpu: 5459.437904420356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5471.860725933316,
            "unit": "ns/iter",
            "extra": "iterations: 127863\ncpu: 5471.277852076051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5509.899220722326,
            "unit": "ns/iter",
            "extra": "iterations: 127169\ncpu: 5509.683177503944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9790.679961934788,
            "unit": "ns/iter",
            "extra": "iterations: 71454\ncpu: 9790.683516668056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 35480.08449300068,
            "unit": "ns/iter",
            "extra": "iterations: 23067\ncpu: 35478.41938700302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 142042.4439081152,
            "unit": "ns/iter",
            "extra": "iterations: 6008\ncpu: 142035.4027962719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 118085.61296092793,
            "unit": "ns/iter",
            "extra": "iterations: 7268\ncpu: 118081.49422124363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 112499.53860342418,
            "unit": "ns/iter",
            "extra": "iterations: 7590\ncpu: 112494.12384716728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 113831.72378790304,
            "unit": "ns/iter",
            "extra": "iterations: 7487\ncpu: 113831.5346600777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 290810.8384925722,
            "unit": "ns/iter",
            "extra": "iterations: 2972\ncpu: 290795.39030955645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2295081.690593827,
            "unit": "ns/iter",
            "extra": "iterations: 404\ncpu: 2294977.2277227696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1885779.2116936282,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1885656.0483870928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1850113.6407184242,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1850049.3013972037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1902720.527720761,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1902630.595482546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1144336.0665844034,
            "unit": "ns/iter",
            "extra": "iterations: 811\ncpu: 1144292.1085080146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1833325.3616602137,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1833233.3992094824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7629927.799999905,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7629452.000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4399043.753554502,
            "unit": "ns/iter",
            "extra": "iterations: 211\ncpu: 4398773.459715635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9390526.086207272,
            "unit": "ns/iter",
            "extra": "iterations: 116\ncpu: 9390084.482758628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 34059.53775752841,
            "unit": "ns/iter",
            "extra": "iterations: 23929\ncpu: 34059.112374106735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 153047.28085868421,
            "unit": "ns/iter",
            "extra": "iterations: 5590\ncpu: 153045.08050089458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 121265.19844081895,
            "unit": "ns/iter",
            "extra": "iterations: 7055\ncpu: 121263.20340184263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 115625.65508383462,
            "unit": "ns/iter",
            "extra": "iterations: 7396\ncpu: 115619.32125473204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 117169.0554642616,
            "unit": "ns/iter",
            "extra": "iterations: 7302\ncpu: 117162.7910161592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 298277.59380377555,
            "unit": "ns/iter",
            "extra": "iterations: 2905\ncpu: 298272.4612736658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2316507.427499914,
            "unit": "ns/iter",
            "extra": "iterations: 400\ncpu: 2316375.000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1906317.4089977534,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1906166.0531697308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1873862.1730382247,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1873802.2132796731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1894245.323829079,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1894120.773930751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1139728.7242646667,
            "unit": "ns/iter",
            "extra": "iterations: 816\ncpu: 1139681.4950980414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1840032.5207922193,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1839912.8712871266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7685212.029999775,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7684774.000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4357065.671296435,
            "unit": "ns/iter",
            "extra": "iterations: 216\ncpu: 4356874.074074068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 33629.298430180206,
            "unit": "ns/iter",
            "extra": "iterations: 24334\ncpu: 33628.62661296932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 145684.7959392543,
            "unit": "ns/iter",
            "extra": "iterations: 5861\ncpu: 145673.17863845802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 118516.9847158631,
            "unit": "ns/iter",
            "extra": "iterations: 7197\ncpu: 118511.1713213836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 112611.8964243219,
            "unit": "ns/iter",
            "extra": "iterations: 7579\ncpu: 112603.25900514594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 113872.41991979818,
            "unit": "ns/iter",
            "extra": "iterations: 7480\ncpu: 113867.32620320811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 288585.1673267602,
            "unit": "ns/iter",
            "extra": "iterations: 3030\ncpu: 288566.1716171618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2322462.259351759,
            "unit": "ns/iter",
            "extra": "iterations: 401\ncpu: 2322360.349127181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1888046.6592292916,
            "unit": "ns/iter",
            "extra": "iterations: 493\ncpu: 1887933.6713996031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1866617.1019999639,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1866497.4 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1906124.347648048,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1906075.0511247383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1146933.743494485,
            "unit": "ns/iter",
            "extra": "iterations: 807\ncpu: 1146902.9739776892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1843459.434782498,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1843327.6679842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3452.685750083827,
            "unit": "ns/iter",
            "extra": "iterations: 202724\ncpu: 3452.5024170793554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17276.571195489996,
            "unit": "ns/iter",
            "extra": "iterations: 40452\ncpu: 17275.924552556105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13993.365133685773,
            "unit": "ns/iter",
            "extra": "iterations: 49968\ncpu: 13993.071565802142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13696.493871158002,
            "unit": "ns/iter",
            "extra": "iterations: 51070\ncpu: 13695.909535931076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11275.10462443396,
            "unit": "ns/iter",
            "extra": "iterations: 62213\ncpu: 11274.182244868445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 66973.29336393281,
            "unit": "ns/iter",
            "extra": "iterations: 10458\ncpu: 66966.05469497021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 144700.3997935998,
            "unit": "ns/iter",
            "extra": "iterations: 4845\ncpu: 144693.3746130029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 39001.820925444335,
            "unit": "ns/iter",
            "extra": "iterations: 17959\ncpu: 38997.55554318158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 39152.70717120279,
            "unit": "ns/iter",
            "extra": "iterations: 17891\ncpu: 39150.38846347301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 39312.14121150733,
            "unit": "ns/iter",
            "extra": "iterations: 17796\ncpu: 39309.1762193755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 81005.45992829354,
            "unit": "ns/iter",
            "extra": "iterations: 8647\ncpu: 81001.74627038247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 70835.2467611399,
            "unit": "ns/iter",
            "extra": "iterations: 9880\ncpu: 70827.80364372428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20540.62962962829,
            "unit": "ns/iter",
            "extra": "iterations: 33993\ncpu: 20539.18747977509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 99086.74525360772,
            "unit": "ns/iter",
            "extra": "iterations: 7058\ncpu: 99082.54463020644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 80439.28258876946,
            "unit": "ns/iter",
            "extra": "iterations: 8730\ncpu: 80438.32760595682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 78232.70550847572,
            "unit": "ns/iter",
            "extra": "iterations: 8968\ncpu: 78227.20785013368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 80530.88839080281,
            "unit": "ns/iter",
            "extra": "iterations: 8700\ncpu: 80520.37931034372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 156119.90214476667,
            "unit": "ns/iter",
            "extra": "iterations: 4476\ncpu: 156108.51206434303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 648492.0343228776,
            "unit": "ns/iter",
            "extra": "iterations: 1078\ncpu: 648463.2653061165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 552246.4723101828,
            "unit": "ns/iter",
            "extra": "iterations: 1264\ncpu: 552237.1835442969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 543824.5398915155,
            "unit": "ns/iter",
            "extra": "iterations: 1291\ncpu: 543788.458559254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 539579.8298690942,
            "unit": "ns/iter",
            "extra": "iterations: 1299\ncpu: 539512.0862201761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 362704.4328512344,
            "unit": "ns/iter",
            "extra": "iterations: 1936\ncpu: 362674.01859504095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 535206.5030674664,
            "unit": "ns/iter",
            "extra": "iterations: 1304\ncpu: 535154.141104292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20604.91115239311,
            "unit": "ns/iter",
            "extra": "iterations: 33912\ncpu: 20604.04576551083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 98830.68009011121,
            "unit": "ns/iter",
            "extra": "iterations: 7102\ncpu: 98830.89270628025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 80008.29655882157,
            "unit": "ns/iter",
            "extra": "iterations: 8747\ncpu: 80002.0578484062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 78235.59569699092,
            "unit": "ns/iter",
            "extra": "iterations: 8924\ncpu: 78230.19946212444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 80421.40999425747,
            "unit": "ns/iter",
            "extra": "iterations: 8705\ncpu: 80414.23319931001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 156504.3220981975,
            "unit": "ns/iter",
            "extra": "iterations: 4480\ncpu: 156495.35714285748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 649918.1933394775,
            "unit": "ns/iter",
            "extra": "iterations: 1081\ncpu: 649919.148936164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 548574.2711598048,
            "unit": "ns/iter",
            "extra": "iterations: 1276\ncpu: 548516.7711598752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 541205.9111968541,
            "unit": "ns/iter",
            "extra": "iterations: 1295\ncpu: 541159.9999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 539017.4797822166,
            "unit": "ns/iter",
            "extra": "iterations: 1286\ncpu: 538966.7185070016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 363518.28727273137,
            "unit": "ns/iter",
            "extra": "iterations: 1925\ncpu: 363502.28571428166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 534709.0397249369,
            "unit": "ns/iter",
            "extra": "iterations: 1309\ncpu: 534681.3598166619 ns\nthreads: 1"
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
        "date": 1705774150224,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8454.675716257085,
            "unit": "ns/iter",
            "extra": "iterations: 82582\ncpu: 8454.23457896394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 78148.45307323497,
            "unit": "ns/iter",
            "extra": "iterations: 10868\ncpu: 78147.67206477733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 150124.9724375544,
            "unit": "ns/iter",
            "extra": "iterations: 5805\ncpu: 150118.5185185185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 221619.17201019166,
            "unit": "ns/iter",
            "extra": "iterations: 3930\ncpu: 221618.42239185752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 294333.84906304814,
            "unit": "ns/iter",
            "extra": "iterations: 2935\ncpu: 294320.8177172062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 363196.51388889924,
            "unit": "ns/iter",
            "extra": "iterations: 2376\ncpu: 363195.4545454546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 436189.5472736213,
            "unit": "ns/iter",
            "extra": "iterations: 1999\ncpu: 436170.0850425211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 502543.3177570342,
            "unit": "ns/iter",
            "extra": "iterations: 1712\ncpu: 502513.4929906544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 573497.0895915894,
            "unit": "ns/iter",
            "extra": "iterations: 1518\ncpu: 573490.6455862975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6435.317186323479,
            "unit": "ns/iter",
            "extra": "iterations: 108854\ncpu: 6434.956914766566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5488.598458414295,
            "unit": "ns/iter",
            "extra": "iterations: 127531\ncpu: 5488.506323952616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5520.644462317545,
            "unit": "ns/iter",
            "extra": "iterations: 126822\ncpu: 5520.509848449005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5601.755925879165,
            "unit": "ns/iter",
            "extra": "iterations: 124876\ncpu: 5601.479067234689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 10054.801419662315,
            "unit": "ns/iter",
            "extra": "iterations: 69594\ncpu: 10054.766215478348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 38244.40756087136,
            "unit": "ns/iter",
            "extra": "iterations: 21479\ncpu: 38242.82322268255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 155686.4856259022,
            "unit": "ns/iter",
            "extra": "iterations: 5496\ncpu: 155684.51601164497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 122955.2358952186,
            "unit": "ns/iter",
            "extra": "iterations: 6948\ncpu: 122950.59009787005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 120134.6794582396,
            "unit": "ns/iter",
            "extra": "iterations: 7088\ncpu: 120134.28329571118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 121587.125035563,
            "unit": "ns/iter",
            "extra": "iterations: 7030\ncpu: 121579.84352773828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 301752.32686307095,
            "unit": "ns/iter",
            "extra": "iterations: 2885\ncpu: 301744.99133448844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2323712.9849626524,
            "unit": "ns/iter",
            "extra": "iterations: 399\ncpu: 2323570.175438593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1910247.0020575048,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1910224.2798353909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1898387.3524591597,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1898313.114754098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1913751.8312755886,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1913686.8312757225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1167485.4974746907,
            "unit": "ns/iter",
            "extra": "iterations: 792\ncpu: 1167468.8131313156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1859242.5963855288,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1859167.2690763015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7842729.933823106,
            "unit": "ns/iter",
            "extra": "iterations: 136\ncpu: 7842517.647058834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4462166.688995239,
            "unit": "ns/iter",
            "extra": "iterations: 209\ncpu: 4461916.2679425925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9767305.299999407,
            "unit": "ns/iter",
            "extra": "iterations: 110\ncpu: 9767179.090909101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 36758.96957902391,
            "unit": "ns/iter",
            "extra": "iterations: 22353\ncpu: 36754.40433051497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 156227.44908759106,
            "unit": "ns/iter",
            "extra": "iterations: 5480\ncpu: 156217.9379562043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 127315.27101276958,
            "unit": "ns/iter",
            "extra": "iterations: 6734\ncpu: 127306.01425601453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 120385.34626234122,
            "unit": "ns/iter",
            "extra": "iterations: 7090\ncpu: 120384.9506346965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 123957.74022954103,
            "unit": "ns/iter",
            "extra": "iterations: 6883\ncpu: 123952.33183204975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 304487.3718717101,
            "unit": "ns/iter",
            "extra": "iterations: 2837\ncpu: 304472.85865350574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2337051.0577887897,
            "unit": "ns/iter",
            "extra": "iterations: 398\ncpu: 2336902.7638190873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1944685.1820084304,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1944571.9665271894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1910768.9754098018,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1910635.8606557408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1921949.340909059,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1921796.4876033182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1171351.9747792615,
            "unit": "ns/iter",
            "extra": "iterations: 793\ncpu: 1171282.2194199192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1879008.9397592433,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1878928.3132530113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7930616.022058664,
            "unit": "ns/iter",
            "extra": "iterations: 136\ncpu: 7930160.294117631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4483181.679425911,
            "unit": "ns/iter",
            "extra": "iterations: 209\ncpu: 4482501.913875608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 36070.29164285203,
            "unit": "ns/iter",
            "extra": "iterations: 22747\ncpu: 36069.10801424369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 152206.02782733578,
            "unit": "ns/iter",
            "extra": "iterations: 5606\ncpu: 152196.8783446307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 124101.16878980896,
            "unit": "ns/iter",
            "extra": "iterations: 6908\ncpu: 124093.84771279688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 119340.8728742578,
            "unit": "ns/iter",
            "extra": "iterations: 7174\ncpu: 119332.3808196265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 123172.68713069835,
            "unit": "ns/iter",
            "extra": "iterations: 6939\ncpu: 123168.20867560197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 302645.15556330694,
            "unit": "ns/iter",
            "extra": "iterations: 2867\ncpu: 302625.2877572384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2342228.749999763,
            "unit": "ns/iter",
            "extra": "iterations: 396\ncpu: 2342011.616161616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1923227.6446281264,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1923084.090909088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1920038.4541750883,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1919922.6069246393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1925515.1449273566,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1925410.144927532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1178426.1401273606,
            "unit": "ns/iter",
            "extra": "iterations: 785\ncpu: 1178353.8853503133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1873071.1106638475,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1873015.0905432487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3476.453321360172,
            "unit": "ns/iter",
            "extra": "iterations: 201559\ncpu: 3476.279898193594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17986.17985630011,
            "unit": "ns/iter",
            "extra": "iterations: 38831\ncpu: 17985.797429888422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13664.824994624958,
            "unit": "ns/iter",
            "extra": "iterations: 51147\ncpu: 13664.089780436747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13862.57057796233,
            "unit": "ns/iter",
            "extra": "iterations: 50384\ncpu: 13862.341219434746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11546.33104778182,
            "unit": "ns/iter",
            "extra": "iterations: 60671\ncpu: 11546.292297802906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 69903.43473925564,
            "unit": "ns/iter",
            "extra": "iterations: 10029\ncpu: 69899.17240003988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 154641.68440811962,
            "unit": "ns/iter",
            "extra": "iterations: 4528\ncpu: 154635.9098939948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 40172.32698284793,
            "unit": "ns/iter",
            "extra": "iterations: 17374\ncpu: 40170.496143662574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 39716.45311702361,
            "unit": "ns/iter",
            "extra": "iterations: 17629\ncpu: 39716.325372964624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 39962.89611872568,
            "unit": "ns/iter",
            "extra": "iterations: 17520\ncpu: 39962.34589041102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 83232.68865905757,
            "unit": "ns/iter",
            "extra": "iterations: 8412\ncpu: 83231.419400856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 72573.59761657765,
            "unit": "ns/iter",
            "extra": "iterations: 9650\ncpu: 72568.74611399017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21409.229700006083,
            "unit": "ns/iter",
            "extra": "iterations: 32734\ncpu: 21409.158672939517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 102662.70580473679,
            "unit": "ns/iter",
            "extra": "iterations: 6822\ncpu: 102659.02961008546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 81735.30434274786,
            "unit": "ns/iter",
            "extra": "iterations: 8566\ncpu: 81733.99486341333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 81120.36062537065,
            "unit": "ns/iter",
            "extra": "iterations: 8635\ncpu: 81118.32078749318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 82623.83333333136,
            "unit": "ns/iter",
            "extra": "iterations: 8472\ncpu: 82618.44900849898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 167220.57987602963,
            "unit": "ns/iter",
            "extra": "iterations: 4194\ncpu: 167220.19551740724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 668631.9817658938,
            "unit": "ns/iter",
            "extra": "iterations: 1042\ncpu: 668599.2322456728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 570494.6924328969,
            "unit": "ns/iter",
            "extra": "iterations: 1229\ncpu: 570493.8161106546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 563523.3925986006,
            "unit": "ns/iter",
            "extra": "iterations: 1243\ncpu: 563516.0096540693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 562504.3127505743,
            "unit": "ns/iter",
            "extra": "iterations: 1247\ncpu: 562480.9943865256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 383393.78614292,
            "unit": "ns/iter",
            "extra": "iterations: 1833\ncpu: 383392.8532460417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 553481.816101072,
            "unit": "ns/iter",
            "extra": "iterations: 1267\ncpu: 553445.9352801912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21791.845331167136,
            "unit": "ns/iter",
            "extra": "iterations: 31978\ncpu: 21791.48164362964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 101800.08123086323,
            "unit": "ns/iter",
            "extra": "iterations: 6857\ncpu: 101796.41242525954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 82771.46230977775,
            "unit": "ns/iter",
            "extra": "iterations: 8477\ncpu: 82769.21080571023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 82125.21773527395,
            "unit": "ns/iter",
            "extra": "iterations: 8469\ncpu: 82125.0442791368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 83105.94554514044,
            "unit": "ns/iter",
            "extra": "iterations: 8429\ncpu: 83101.09146992397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 166597.19557985803,
            "unit": "ns/iter",
            "extra": "iterations: 4208\ncpu: 166594.86692015274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 669204.1070745209,
            "unit": "ns/iter",
            "extra": "iterations: 1046\ncpu: 669175.9082218063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 568201.2599513186,
            "unit": "ns/iter",
            "extra": "iterations: 1231\ncpu: 568189.7644191715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 562105.4119067529,
            "unit": "ns/iter",
            "extra": "iterations: 1243\ncpu: 562104.1834271919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 567502.0469635247,
            "unit": "ns/iter",
            "extra": "iterations: 1235\ncpu: 567464.4534412882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 385375.82553659653,
            "unit": "ns/iter",
            "extra": "iterations: 1817\ncpu: 385364.22674738785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 553376.0924170868,
            "unit": "ns/iter",
            "extra": "iterations: 1266\ncpu: 553336.0979462897 ns\nthreads: 1"
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
        "date": 1705952899204,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8430.88030506052,
            "unit": "ns/iter",
            "extra": "iterations: 82869\ncpu: 8430.678540829502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 77422.6499084227,
            "unit": "ns/iter",
            "extra": "iterations: 10920\ncpu: 77419.2216117216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 147643.4289845344,
            "unit": "ns/iter",
            "extra": "iterations: 5879\ncpu: 147626.26296989288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 219207.33316595497,
            "unit": "ns/iter",
            "extra": "iterations: 3983\ncpu: 219198.39317097663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 290096.30915773736,
            "unit": "ns/iter",
            "extra": "iterations: 2992\ncpu: 290075.9024064171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 356214.9132948274,
            "unit": "ns/iter",
            "extra": "iterations: 2422\ncpu: 356189.76052848913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 426091.0376896597,
            "unit": "ns/iter",
            "extra": "iterations: 2043\ncpu: 426046.5002447377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 496420.2804112179,
            "unit": "ns/iter",
            "extra": "iterations: 1751\ncpu: 496379.8400913761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 569921.0881399369,
            "unit": "ns/iter",
            "extra": "iterations: 1543\ncpu: 569877.7057679838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6531.568955314076,
            "unit": "ns/iter",
            "extra": "iterations: 106453\ncpu: 6531.153654664492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5541.660840184516,
            "unit": "ns/iter",
            "extra": "iterations: 126377\ncpu: 5541.227438537076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5571.397513154606,
            "unit": "ns/iter",
            "extra": "iterations: 125621\ncpu: 5570.976986331909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5596.148085513558,
            "unit": "ns/iter",
            "extra": "iterations: 125360\ncpu: 5595.424377791968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9975.00938666256,
            "unit": "ns/iter",
            "extra": "iterations: 70206\ncpu: 9974.197362048812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 35348.274430074285,
            "unit": "ns/iter",
            "extra": "iterations: 23117\ncpu: 35346.29060864301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 142689.3561210886,
            "unit": "ns/iter",
            "extra": "iterations: 6012\ncpu: 142680.08982035943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 118440.1589018385,
            "unit": "ns/iter",
            "extra": "iterations: 7212\ncpu: 118431.44758735466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 113513.54842583135,
            "unit": "ns/iter",
            "extra": "iterations: 7496\ncpu: 113505.97652081113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 115554.46667570445,
            "unit": "ns/iter",
            "extra": "iterations: 7367\ncpu: 115544.9300936608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 278180.45968518045,
            "unit": "ns/iter",
            "extra": "iterations: 3113\ncpu: 278161.4519755869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2346623.3106059595,
            "unit": "ns/iter",
            "extra": "iterations: 396\ncpu: 2346461.6161616207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1928339.6112265058,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1928184.4074844085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1898155.6265307332,
            "unit": "ns/iter",
            "extra": "iterations: 490\ncpu: 1898001.0204081587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1927867.476091386,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1927720.374220374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1164771.6092384304,
            "unit": "ns/iter",
            "extra": "iterations: 801\ncpu: 1164675.280898877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1870796.2177419201,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1870620.1612903236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7826295.99275358,
            "unit": "ns/iter",
            "extra": "iterations: 138\ncpu: 7825673.188405815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4362106.827102784,
            "unit": "ns/iter",
            "extra": "iterations: 214\ncpu: 4361714.485981299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9839397.05454511,
            "unit": "ns/iter",
            "extra": "iterations: 110\ncpu: 9838570.909090905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 34664.96813423978,
            "unit": "ns/iter",
            "extra": "iterations: 23599\ncpu: 34661.76956650703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 150467.6687192144,
            "unit": "ns/iter",
            "extra": "iterations: 5684\ncpu: 150457.3363828292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 124103.18713872482,
            "unit": "ns/iter",
            "extra": "iterations: 6920\ncpu: 124095.08670520164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 115206.52017270788,
            "unit": "ns/iter",
            "extra": "iterations: 7411\ncpu: 115198.7046282556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 117836.38497458216,
            "unit": "ns/iter",
            "extra": "iterations: 7281\ncpu: 117826.63095728612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 287334.1483078918,
            "unit": "ns/iter",
            "extra": "iterations: 3014\ncpu: 287312.07697412046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2367273.664122106,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2367137.9134860053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1957747.7259412487,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1957580.9623430897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1927729.4504133281,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1927555.371900827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1945624.950000043,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1945473.33333334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1157086.5373134871,
            "unit": "ns/iter",
            "extra": "iterations: 804\ncpu: 1157008.208955222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1881839.5070707772,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1881697.1717171639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7955711.6222228315,
            "unit": "ns/iter",
            "extra": "iterations: 135\ncpu: 7954945.925925945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4414945.882075472,
            "unit": "ns/iter",
            "extra": "iterations: 212\ncpu: 4414547.641509446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 34437.36454442231,
            "unit": "ns/iter",
            "extra": "iterations: 23827\ncpu: 34434.14193981599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 146351.29733425152,
            "unit": "ns/iter",
            "extra": "iterations: 5852\ncpu: 146347.3684210525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 120142.12074302982,
            "unit": "ns/iter",
            "extra": "iterations: 7106\ncpu: 120136.03996622632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 112872.4090427056,
            "unit": "ns/iter",
            "extra": "iterations: 7542\ncpu: 112868.54945637724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 115845.45345997249,
            "unit": "ns/iter",
            "extra": "iterations: 7370\ncpu: 115841.47896879193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 285002.2068740103,
            "unit": "ns/iter",
            "extra": "iterations: 3055\ncpu: 284990.4091653042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2368294.6751269177,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2368080.456852791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1928569.2842322155,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1928429.8755186705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1921363.9338841795,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1921147.7272727333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1934056.706860623,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1933915.8004158018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1170184.793450944,
            "unit": "ns/iter",
            "extra": "iterations: 794\ncpu: 1170093.1989924442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1880272.9455645264,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1880155.8467741918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3470.1149399028022,
            "unit": "ns/iter",
            "extra": "iterations: 201340\ncpu: 3469.9771530744088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17715.761546262165,
            "unit": "ns/iter",
            "extra": "iterations: 39450\ncpu: 17715.338403041842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13929.362330948477,
            "unit": "ns/iter",
            "extra": "iterations: 50280\ncpu: 13928.267700875194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 14159.688154471143,
            "unit": "ns/iter",
            "extra": "iterations: 49563\ncpu: 14158.660694469738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11511.39979907233,
            "unit": "ns/iter",
            "extra": "iterations: 60718\ncpu: 11510.367601040884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 66619.03790613385,
            "unit": "ns/iter",
            "extra": "iterations: 10526\ncpu: 66612.88238647164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 156199.57072953242,
            "unit": "ns/iter",
            "extra": "iterations: 4496\ncpu: 156195.21797153025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 40430.61906410675,
            "unit": "ns/iter",
            "extra": "iterations: 17331\ncpu: 40427.45369569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 40690.63670694876,
            "unit": "ns/iter",
            "extra": "iterations: 17212\ncpu: 40687.90959795499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 40387.648196249786,
            "unit": "ns/iter",
            "extra": "iterations: 17325\ncpu: 40384.525252524974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 82932.314917778,
            "unit": "ns/iter",
            "extra": "iterations: 8453\ncpu: 82926.83071099018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 72975.63894099901,
            "unit": "ns/iter",
            "extra": "iterations: 9594\ncpu: 72970.25224098423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21606.229074756953,
            "unit": "ns/iter",
            "extra": "iterations: 32413\ncpu: 21605.76929009935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 104262.90135598432,
            "unit": "ns/iter",
            "extra": "iterations: 6711\ncpu: 104258.20295038086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 82865.57869221107,
            "unit": "ns/iter",
            "extra": "iterations: 8457\ncpu: 82865.01123329846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 82598.55917788825,
            "unit": "ns/iter",
            "extra": "iterations: 8466\ncpu: 82593.05457122491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 83635.21327919356,
            "unit": "ns/iter",
            "extra": "iterations: 8374\ncpu: 83633.40100310538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 161991.91850474774,
            "unit": "ns/iter",
            "extra": "iterations: 4307\ncpu: 161987.50870675495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 671427.1123918829,
            "unit": "ns/iter",
            "extra": "iterations: 1041\ncpu: 671381.8443803914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 573839.115196116,
            "unit": "ns/iter",
            "extra": "iterations: 1224\ncpu: 573823.2843137159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 574818.4815422454,
            "unit": "ns/iter",
            "extra": "iterations: 1219\ncpu: 574780.3117309228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 573205.0229697042,
            "unit": "ns/iter",
            "extra": "iterations: 1219\ncpu: 573184.3314191877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 378780.7970857853,
            "unit": "ns/iter",
            "extra": "iterations: 1853\ncpu: 378763.5725849982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 559350.2498005616,
            "unit": "ns/iter",
            "extra": "iterations: 1253\ncpu: 559326.4964086221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21525.91668463939,
            "unit": "ns/iter",
            "extra": "iterations: 32455\ncpu: 21525.04390694833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 103015.1967116012,
            "unit": "ns/iter",
            "extra": "iterations: 6751\ncpu: 103008.53206932341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 82768.09631460925,
            "unit": "ns/iter",
            "extra": "iterations: 8493\ncpu: 82766.45472742202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 82197.80028162008,
            "unit": "ns/iter",
            "extra": "iterations: 8522\ncpu: 82192.99460220552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 83748.31670256067,
            "unit": "ns/iter",
            "extra": "iterations: 8358\ncpu: 83744.46039722547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 163846.41135085665,
            "unit": "ns/iter",
            "extra": "iterations: 4264\ncpu: 163842.7532833034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 670992.1306436671,
            "unit": "ns/iter",
            "extra": "iterations: 1041\ncpu: 670918.2516810794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 572089.02773246,
            "unit": "ns/iter",
            "extra": "iterations: 1226\ncpu: 572076.1827079821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 572140.5147058514,
            "unit": "ns/iter",
            "extra": "iterations: 1224\ncpu: 572098.8562091498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 573445.4848980207,
            "unit": "ns/iter",
            "extra": "iterations: 1225\ncpu: 573413.8775510218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 376831.5704301204,
            "unit": "ns/iter",
            "extra": "iterations: 1860\ncpu: 376806.9354838683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 557995.0486443315,
            "unit": "ns/iter",
            "extra": "iterations: 1254\ncpu: 557971.132376396 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}