window.BENCHMARK_DATA = {
  "lastUpdate": 1705959252751,
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
        "date": 1705954307201,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8566.171071101959,
            "unit": "ns/iter",
            "extra": "iterations: 81925\ncpu: 8565.94446139762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 79244.56369901246,
            "unit": "ns/iter",
            "extra": "iterations: 10738\ncpu: 79239.25311976159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 151661.54205770386,
            "unit": "ns/iter",
            "extra": "iterations: 5754\ncpu: 151649.7393117831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 223774.6247428081,
            "unit": "ns/iter",
            "extra": "iterations: 3888\ncpu: 223744.6759259259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 294486.0459340152,
            "unit": "ns/iter",
            "extra": "iterations: 2939\ncpu: 294478.4960871043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 363516.3361380257,
            "unit": "ns/iter",
            "extra": "iterations: 2377\ncpu: 363487.0845603701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 430930.2658670815,
            "unit": "ns/iter",
            "extra": "iterations: 2001\ncpu: 430900.04997501225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 503939.5017361388,
            "unit": "ns/iter",
            "extra": "iterations: 1728\ncpu: 503893.4606481484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 576117.0587846881,
            "unit": "ns/iter",
            "extra": "iterations: 1514\ncpu: 576089.8282694845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6631.580895891292,
            "unit": "ns/iter",
            "extra": "iterations: 105370\ncpu: 6631.335294675895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5555.6750476939305,
            "unit": "ns/iter",
            "extra": "iterations: 125800\ncpu: 5555.349761526228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5561.804406666468,
            "unit": "ns/iter",
            "extra": "iterations: 126354\ncpu: 5561.1171787201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5627.546819196903,
            "unit": "ns/iter",
            "extra": "iterations: 124041\ncpu: 5627.137801210899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9965.15458978491,
            "unit": "ns/iter",
            "extra": "iterations: 70134\ncpu: 9964.895770952731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 36207.51310228248,
            "unit": "ns/iter",
            "extra": "iterations: 22477\ncpu: 36204.84495261819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 146170.36073682588,
            "unit": "ns/iter",
            "extra": "iterations: 5863\ncpu: 146156.40457103853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 123525.11672874264,
            "unit": "ns/iter",
            "extra": "iterations: 6982\ncpu: 123515.41105700404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 117529.89786353703,
            "unit": "ns/iter",
            "extra": "iterations: 7255\ncpu: 117526.05099931087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 118074.94572025571,
            "unit": "ns/iter",
            "extra": "iterations: 7185\ncpu: 118071.55184411998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 282898.01871921384,
            "unit": "ns/iter",
            "extra": "iterations: 3045\ncpu: 282871.49425287324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2362732.147582818,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2362523.1552162804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1952910.1869746977,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1950419.747899162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1921358.6625513881,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1921211.5226337407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1932800.2029598302,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1932709.7251585638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1138820.873152668,
            "unit": "ns/iter",
            "extra": "iterations: 812\ncpu: 1138762.5615763583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1872594.455645163,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1872580.8467741937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7729563.237409703,
            "unit": "ns/iter",
            "extra": "iterations: 139\ncpu: 7729141.007194238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4278540.917808334,
            "unit": "ns/iter",
            "extra": "iterations: 219\ncpu: 4278177.625570779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9642231.821427824,
            "unit": "ns/iter",
            "extra": "iterations: 112\ncpu: 9641196.42857142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 34812.906534151865,
            "unit": "ns/iter",
            "extra": "iterations: 23645\ncpu: 34811.37661239169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 150988.36394076986,
            "unit": "ns/iter",
            "extra": "iterations: 5674\ncpu: 150981.6179062392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 122278.7331139166,
            "unit": "ns/iter",
            "extra": "iterations: 6988\ncpu: 122276.51688609053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 119343.1045276553,
            "unit": "ns/iter",
            "extra": "iterations: 7156\ncpu: 119339.7847959759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 119972.21722002562,
            "unit": "ns/iter",
            "extra": "iterations: 7108\ncpu: 119968.30332020247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 293107.3394834195,
            "unit": "ns/iter",
            "extra": "iterations: 2981\ncpu: 293096.2093257284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2374961.731457797,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2374849.6163682835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2052280.8538136247,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 2052227.7542372881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1926158.7246377696,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1926044.5134575663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1953245.4597457715,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1953053.601694909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1154334.992555752,
            "unit": "ns/iter",
            "extra": "iterations: 806\ncpu: 1154287.5930521104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1891828.755600766,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1891676.1710794258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7808777.869564582,
            "unit": "ns/iter",
            "extra": "iterations: 138\ncpu: 7808281.159420262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4378881.943925161,
            "unit": "ns/iter",
            "extra": "iterations: 214\ncpu: 4378543.457943936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 34614.190902944334,
            "unit": "ns/iter",
            "extra": "iterations: 23656\ncpu: 34612.84240784571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 149817.64845523002,
            "unit": "ns/iter",
            "extra": "iterations: 5729\ncpu: 149812.39308779914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 120893.79043182674,
            "unit": "ns/iter",
            "extra": "iterations: 7086\ncpu: 120890.55884843373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 116521.41127378623,
            "unit": "ns/iter",
            "extra": "iterations: 7309\ncpu: 116519.15446709536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 117713.57370957347,
            "unit": "ns/iter",
            "extra": "iterations: 7265\ncpu: 117709.38747419188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 286225.4362194105,
            "unit": "ns/iter",
            "extra": "iterations: 3026\ncpu: 286215.8294778597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2396813.776349658,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 2396720.5655527115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1969369.3565399111,
            "unit": "ns/iter",
            "extra": "iterations: 474\ncpu: 1969284.8101265864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1925544.2851238716,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1925528.9256198336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1945111.7364015987,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1944988.702928872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1154826.7475124004,
            "unit": "ns/iter",
            "extra": "iterations: 804\ncpu: 1154768.7810945236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1894634.830957085,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1894527.2912423643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3456.3973587478467,
            "unit": "ns/iter",
            "extra": "iterations: 202404\ncpu: 3456.372897768809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17785.105355374017,
            "unit": "ns/iter",
            "extra": "iterations: 39381\ncpu: 17784.27160305721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13650.158914957074,
            "unit": "ns/iter",
            "extra": "iterations: 51279\ncpu: 13649.7747615983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13619.941601153345,
            "unit": "ns/iter",
            "extra": "iterations: 51388\ncpu: 13619.352767183102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11590.30546724938,
            "unit": "ns/iter",
            "extra": "iterations: 60396\ncpu: 11590.232796874023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 67642.06371459345,
            "unit": "ns/iter",
            "extra": "iterations: 10343\ncpu: 67640.21077056945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 150101.1323497931,
            "unit": "ns/iter",
            "extra": "iterations: 4677\ncpu: 150091.98203976935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 40665.10869060307,
            "unit": "ns/iter",
            "extra": "iterations: 17214\ncpu: 40664.26745672156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 40067.42642092838,
            "unit": "ns/iter",
            "extra": "iterations: 17471\ncpu: 40067.1169366375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 40133.27150799799,
            "unit": "ns/iter",
            "extra": "iterations: 17447\ncpu: 40131.76477331331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 82186.08743105303,
            "unit": "ns/iter",
            "extra": "iterations: 8521\ncpu: 82183.78124633264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 72654.9607598868,
            "unit": "ns/iter",
            "extra": "iterations: 9633\ncpu: 72653.2751998346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20753.306525490883,
            "unit": "ns/iter",
            "extra": "iterations: 33622\ncpu: 20752.54892629848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 102638.13270420539,
            "unit": "ns/iter",
            "extra": "iterations: 6782\ncpu: 102637.89442642295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 82302.71734022633,
            "unit": "ns/iter",
            "extra": "iterations: 8512\ncpu: 82298.96616541361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 81631.42335935462,
            "unit": "ns/iter",
            "extra": "iterations: 8579\ncpu: 81629.01270544276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 82610.10305387579,
            "unit": "ns/iter",
            "extra": "iterations: 8481\ncpu: 82609.45643202534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 155553.73499331498,
            "unit": "ns/iter",
            "extra": "iterations: 4498\ncpu: 155552.73454868808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 676382.7804641329,
            "unit": "ns/iter",
            "extra": "iterations: 1034\ncpu: 676290.0386847171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 604861.2159672759,
            "unit": "ns/iter",
            "extra": "iterations: 977\ncpu: 604792.2210849618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 566061.582257989,
            "unit": "ns/iter",
            "extra": "iterations: 1240\ncpu: 565989.8387096766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 562693.5619433211,
            "unit": "ns/iter",
            "extra": "iterations: 1235\ncpu: 562670.9311740906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 372836.1028387771,
            "unit": "ns/iter",
            "extra": "iterations: 1867\ncpu: 372816.9255490115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 558314.7977706905,
            "unit": "ns/iter",
            "extra": "iterations: 1256\ncpu: 558304.2197452257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20944.796688324535,
            "unit": "ns/iter",
            "extra": "iterations: 33397\ncpu: 20943.902146899643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 103471.85788151762,
            "unit": "ns/iter",
            "extra": "iterations: 6769\ncpu: 103467.20342739073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 83623.72377332319,
            "unit": "ns/iter",
            "extra": "iterations: 8417\ncpu: 83621.96744683292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 82137.07511956811,
            "unit": "ns/iter",
            "extra": "iterations: 8573\ncpu: 82134.95859092356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 83644.15680684742,
            "unit": "ns/iter",
            "extra": "iterations: 8418\ncpu: 83643.65645046395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 157826.26636363065,
            "unit": "ns/iter",
            "extra": "iterations: 4400\ncpu: 157816.63636363484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 679696.9400386761,
            "unit": "ns/iter",
            "extra": "iterations: 1034\ncpu: 679675.4352030936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 578194.1544178232,
            "unit": "ns/iter",
            "extra": "iterations: 1211\ncpu: 578182.2460776295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 566661.0792880192,
            "unit": "ns/iter",
            "extra": "iterations: 1236\ncpu: 566635.1941747647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 567518.9570502228,
            "unit": "ns/iter",
            "extra": "iterations: 1234\ncpu: 567506.969205833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 373719.37606842024,
            "unit": "ns/iter",
            "extra": "iterations: 1872\ncpu: 373687.9273504277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 558960.3317306915,
            "unit": "ns/iter",
            "extra": "iterations: 1248\ncpu: 558946.474358974 ns\nthreads: 1"
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
        "date": 1705956349488,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8410.903813523988,
            "unit": "ns/iter",
            "extra": "iterations: 83099\ncpu: 8410.327440763427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 77269.7264770175,
            "unit": "ns/iter",
            "extra": "iterations: 10968\ncpu: 77267.18636032092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 148845.37178184302,
            "unit": "ns/iter",
            "extra": "iterations: 5904\ncpu: 148839.54945799458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 219536.89989913636,
            "unit": "ns/iter",
            "extra": "iterations: 3966\ncpu: 219530.68582955116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 291903.9597701361,
            "unit": "ns/iter",
            "extra": "iterations: 2958\ncpu: 291906.0513860716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 360232.0312760491,
            "unit": "ns/iter",
            "extra": "iterations: 2398\ncpu: 360227.3561301084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 431114.740722397,
            "unit": "ns/iter",
            "extra": "iterations: 2021\ncpu: 431101.83077684283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 503635.0697808574,
            "unit": "ns/iter",
            "extra": "iterations: 1734\ncpu: 503634.6020761251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 573976.370808711,
            "unit": "ns/iter",
            "extra": "iterations: 1521\ncpu: 573957.9224194607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6522.202105380015,
            "unit": "ns/iter",
            "extra": "iterations: 107914\ncpu: 6521.975832607444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5483.2779233861165,
            "unit": "ns/iter",
            "extra": "iterations: 127053\ncpu: 5482.989775920277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5557.299551683209,
            "unit": "ns/iter",
            "extra": "iterations: 125581\ncpu: 5557.293698887569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5596.52508620807,
            "unit": "ns/iter",
            "extra": "iterations: 124989\ncpu: 5596.565297746203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 10007.30926185135,
            "unit": "ns/iter",
            "extra": "iterations: 69986\ncpu: 10007.122853142058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 36388.14019856392,
            "unit": "ns/iter",
            "extra": "iterations: 22461\ncpu: 36387.76546013093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 146474.67339605346,
            "unit": "ns/iter",
            "extra": "iterations: 5845\ncpu: 146470.43627031663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 118808.09376302388,
            "unit": "ns/iter",
            "extra": "iterations: 7199\ncpu: 118809.0151409918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 113565.37835681844,
            "unit": "ns/iter",
            "extra": "iterations: 7522\ncpu: 113559.83780909337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 115657.73532998962,
            "unit": "ns/iter",
            "extra": "iterations: 7379\ncpu: 115646.36129556826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 291623.39706862834,
            "unit": "ns/iter",
            "extra": "iterations: 3002\ncpu: 291608.7941372422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2371487.548469348,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2371461.734693877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1917389.734567953,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1917323.2510288109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1901195.5778687778,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1901138.114754096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1926652.3835050378,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1926610.1030927866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1156432.5696518163,
            "unit": "ns/iter",
            "extra": "iterations: 804\ncpu: 1156401.7412935356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1866319.2859999072,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1866289.9999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7841651.253623577,
            "unit": "ns/iter",
            "extra": "iterations: 138\ncpu: 7841366.666666677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4513440.706730876,
            "unit": "ns/iter",
            "extra": "iterations: 208\ncpu: 4513407.211538461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9741697.837837918,
            "unit": "ns/iter",
            "extra": "iterations: 111\ncpu: 9741077.47747747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 36158.646671926435,
            "unit": "ns/iter",
            "extra": "iterations: 22806\ncpu: 36157.29194071745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 150348.04246360008,
            "unit": "ns/iter",
            "extra": "iterations: 5699\ncpu: 150344.86752061802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 123670.9363544562,
            "unit": "ns/iter",
            "extra": "iterations: 6929\ncpu: 123669.24520132811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 115685.6008386332,
            "unit": "ns/iter",
            "extra": "iterations: 7393\ncpu: 115682.75395644487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 118159.31229328159,
            "unit": "ns/iter",
            "extra": "iterations: 7256\ncpu: 118158.18632855576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 295917.15785888204,
            "unit": "ns/iter",
            "extra": "iterations: 2933\ncpu: 295912.9901125125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2381719.0076923766,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2381672.051282052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1942663.72499996,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1942632.08333334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1899525.4498977077,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1899472.5971370228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1933716.270270278,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1933709.771309773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1156300.4615385507,
            "unit": "ns/iter",
            "extra": "iterations: 806\ncpu: 1156260.04962779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1872561.821285153,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1872524.497991967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7880955.364963437,
            "unit": "ns/iter",
            "extra": "iterations: 137\ncpu: 7880637.226277357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4447790.161904799,
            "unit": "ns/iter",
            "extra": "iterations: 210\ncpu: 4447782.380952383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 34668.107354613276,
            "unit": "ns/iter",
            "extra": "iterations: 23781\ncpu: 34667.61700517217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 147416.15986219447,
            "unit": "ns/iter",
            "extra": "iterations: 5805\ncpu: 147411.6968130919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 121027.47807638385,
            "unit": "ns/iter",
            "extra": "iterations: 7070\ncpu: 121024.20084865726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 113257.11016611134,
            "unit": "ns/iter",
            "extra": "iterations: 7525\ncpu: 113256.07973421927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 116044.22683923529,
            "unit": "ns/iter",
            "extra": "iterations: 7340\ncpu: 116042.0163487736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 289106.51058202155,
            "unit": "ns/iter",
            "extra": "iterations: 3024\ncpu: 289098.4788359809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2370080.010177902,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2370046.055979639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1918375.239669357,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1918338.2231404956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1909051.1106557483,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1909002.0491803268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1921391.134171952,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1921328.9308176097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1160272.7974999994,
            "unit": "ns/iter",
            "extra": "iterations: 800\ncpu: 1160271.7499999925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1866087.4084505178,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1866021.9315895378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3432.308112968244,
            "unit": "ns/iter",
            "extra": "iterations: 203526\ncpu: 3432.2656564763342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17794.883268878326,
            "unit": "ns/iter",
            "extra": "iterations: 39304\ncpu: 17794.17870954604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 14289.081961176558,
            "unit": "ns/iter",
            "extra": "iterations: 48889\ncpu: 14289.017979504599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 14108.984650357725,
            "unit": "ns/iter",
            "extra": "iterations: 49708\ncpu: 14108.662589522744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11497.391316490335,
            "unit": "ns/iter",
            "extra": "iterations: 60874\ncpu: 11497.317409731542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 68274.28087708435,
            "unit": "ns/iter",
            "extra": "iterations: 10307\ncpu: 68273.3288056657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 154832.44889382235,
            "unit": "ns/iter",
            "extra": "iterations: 4520\ncpu: 154827.9646017704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 39926.467500569444,
            "unit": "ns/iter",
            "extra": "iterations: 17508\ncpu: 39926.742060772725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 39703.8444167711,
            "unit": "ns/iter",
            "extra": "iterations: 17669\ncpu: 39703.02224234507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 39665.35956711828,
            "unit": "ns/iter",
            "extra": "iterations: 17649\ncpu: 39664.41724743641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 82789.0686842333,
            "unit": "ns/iter",
            "extra": "iterations: 8459\ncpu: 82787.39803759435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 72350.30126085322,
            "unit": "ns/iter",
            "extra": "iterations: 9676\ncpu: 72350.82678792885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21119.4116037079,
            "unit": "ns/iter",
            "extra": "iterations: 33248\ncpu: 21118.650745909574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 101936.64133120241,
            "unit": "ns/iter",
            "extra": "iterations: 6881\ncpu: 101934.29734050306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 81976.71684210519,
            "unit": "ns/iter",
            "extra": "iterations: 8550\ncpu: 81974.7368421055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 80149.48670639361,
            "unit": "ns/iter",
            "extra": "iterations: 8726\ncpu: 80148.20077928156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 84591.08155776645,
            "unit": "ns/iter",
            "extra": "iterations: 8448\ncpu: 84591.6785037877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 160631.67437071152,
            "unit": "ns/iter",
            "extra": "iterations: 4370\ncpu: 160626.3157894739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 676090.9846006029,
            "unit": "ns/iter",
            "extra": "iterations: 1039\ncpu: 676074.3022136764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 574998.9753896676,
            "unit": "ns/iter",
            "extra": "iterations: 1219\ncpu: 574968.4167350252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 559981.221690603,
            "unit": "ns/iter",
            "extra": "iterations: 1254\ncpu: 559971.9298245646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 563214.2349155622,
            "unit": "ns/iter",
            "extra": "iterations: 1243\ncpu: 563219.8712791676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 372605.6548250285,
            "unit": "ns/iter",
            "extra": "iterations: 1886\ncpu: 372593.2131495257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 555819.2190476131,
            "unit": "ns/iter",
            "extra": "iterations: 1260\ncpu: 555812.142857138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21050.080049445438,
            "unit": "ns/iter",
            "extra": "iterations: 33167\ncpu: 21049.166340036896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 103304.63242445471,
            "unit": "ns/iter",
            "extra": "iterations: 6785\ncpu: 103303.92041267474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 83240.39054312208,
            "unit": "ns/iter",
            "extra": "iterations: 8396\ncpu: 83237.31538828123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 80418.22534403257,
            "unit": "ns/iter",
            "extra": "iterations: 8720\ncpu: 80415.8256880724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 83064.20042618563,
            "unit": "ns/iter",
            "extra": "iterations: 8447\ncpu: 83062.86255475359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 162309.6892172719,
            "unit": "ns/iter",
            "extra": "iterations: 4331\ncpu: 162300.69268067568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 673607.1604226893,
            "unit": "ns/iter",
            "extra": "iterations: 1041\ncpu: 673602.9779058532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 573400.4462674108,
            "unit": "ns/iter",
            "extra": "iterations: 1219\ncpu: 573384.9876948252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 557425.6475736406,
            "unit": "ns/iter",
            "extra": "iterations: 1257\ncpu: 557405.091487663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 559550.0704000188,
            "unit": "ns/iter",
            "extra": "iterations: 1250\ncpu: 559541.9999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 373516.6440768591,
            "unit": "ns/iter",
            "extra": "iterations: 1874\ncpu: 373510.56563500775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 556456.639682553,
            "unit": "ns/iter",
            "extra": "iterations: 1260\ncpu: 556460.555555549 ns\nthreads: 1"
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
        "date": 1705957847477,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8622.962606080524,
            "unit": "ns/iter",
            "extra": "iterations: 81778\ncpu: 8622.21379833207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 78535.29542302327,
            "unit": "ns/iter",
            "extra": "iterations: 10815\ncpu: 78529.95839112344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 150541.23530424465,
            "unit": "ns/iter",
            "extra": "iterations: 5801\ncpu: 150534.76986726426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 222211.58369536346,
            "unit": "ns/iter",
            "extra": "iterations: 3913\ncpu: 222200.46000511118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 294345.96462585253,
            "unit": "ns/iter",
            "extra": "iterations: 2940\ncpu: 294329.1156462584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 363747.5183466784,
            "unit": "ns/iter",
            "extra": "iterations: 2371\ncpu: 363732.4335723325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 449738.44946811214,
            "unit": "ns/iter",
            "extra": "iterations: 1880\ncpu: 449722.76595744706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 508899.0979021088,
            "unit": "ns/iter",
            "extra": "iterations: 1716\ncpu: 508880.2447552449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 580112.4897147075,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 580073.258128733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6551.073891117973,
            "unit": "ns/iter",
            "extra": "iterations: 106887\ncpu: 6550.904225958256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5577.51056792728,
            "unit": "ns/iter",
            "extra": "iterations: 125474\ncpu: 5577.294897747742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5549.25605961993,
            "unit": "ns/iter",
            "extra": "iterations: 125998\ncpu: 5549.117446308671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5598.905368480615,
            "unit": "ns/iter",
            "extra": "iterations: 124430\ncpu: 5598.54054488467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9778.492654015436,
            "unit": "ns/iter",
            "extra": "iterations: 71876\ncpu: 9778.092826534586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 35652.76449022244,
            "unit": "ns/iter",
            "extra": "iterations: 22912\ncpu: 35652.147346368736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 142460.25644458405,
            "unit": "ns/iter",
            "extra": "iterations: 5974\ncpu: 142452.47740207583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 118292.69895469215,
            "unit": "ns/iter",
            "extra": "iterations: 7175\ncpu: 118288.34843205597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 112252.8417930036,
            "unit": "ns/iter",
            "extra": "iterations: 7585\ncpu: 112248.99143045521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 115412.95153887902,
            "unit": "ns/iter",
            "extra": "iterations: 7408\ncpu: 115382.92386609063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 284452.65987511195,
            "unit": "ns/iter",
            "extra": "iterations: 3043\ncpu: 284436.90437068767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2294413.528395047,
            "unit": "ns/iter",
            "extra": "iterations: 405\ncpu: 2294305.925925929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1895425.4765785274,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1895290.2240325822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1883349.4230769335,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1883292.1052631582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1908395.2895277399,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1908284.5995893239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1140104.0320592606,
            "unit": "ns/iter",
            "extra": "iterations: 811\ncpu: 1140048.5819975326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1849168.110890904,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1849078.613861387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7711394.899280363,
            "unit": "ns/iter",
            "extra": "iterations: 139\ncpu: 7710717.98561152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4351451.562790718,
            "unit": "ns/iter",
            "extra": "iterations: 215\ncpu: 4351276.27906976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9667712.81249988,
            "unit": "ns/iter",
            "extra": "iterations: 112\ncpu: 9667106.250000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 35954.08249541122,
            "unit": "ns/iter",
            "extra": "iterations: 22874\ncpu: 35952.80668007337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 148677.99687769555,
            "unit": "ns/iter",
            "extra": "iterations: 5765\ncpu: 148668.34345186467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 121086.62835736704,
            "unit": "ns/iter",
            "extra": "iterations: 7074\ncpu: 121081.87729714465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 113894.02618220652,
            "unit": "ns/iter",
            "extra": "iterations: 7486\ncpu: 113888.6588298155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 116743.37178959623,
            "unit": "ns/iter",
            "extra": "iterations: 7281\ncpu: 116739.40392803251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 290128.8109552718,
            "unit": "ns/iter",
            "extra": "iterations: 2994\ncpu: 290116.39946559805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2317419.945137275,
            "unit": "ns/iter",
            "extra": "iterations: 401\ncpu: 2317305.2369077136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1919058.3119834552,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1918936.5702479382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1899746.785276014,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1899703.271983642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1912249.2804122772,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1912132.1649484488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1148760.1662531095,
            "unit": "ns/iter",
            "extra": "iterations: 806\ncpu: 1148689.3300248142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1856787.3326691755,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1856738.4462151297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7780754.217391028,
            "unit": "ns/iter",
            "extra": "iterations: 138\ncpu: 7779783.333333306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4391068.197183096,
            "unit": "ns/iter",
            "extra": "iterations: 213\ncpu: 4390926.29107981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 34160.25836269598,
            "unit": "ns/iter",
            "extra": "iterations: 24125\ncpu: 34157.83212435251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 146116.77842069312,
            "unit": "ns/iter",
            "extra": "iterations: 5876\ncpu: 146112.2872702515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 118922.14414663862,
            "unit": "ns/iter",
            "extra": "iterations: 7201\ncpu: 118914.03971670664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 111834.40998427437,
            "unit": "ns/iter",
            "extra": "iterations: 7632\ncpu: 111828.18396226475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 114774.8905976034,
            "unit": "ns/iter",
            "extra": "iterations: 7413\ncpu: 114766.92297315526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 282564.4569945037,
            "unit": "ns/iter",
            "extra": "iterations: 3081\ncpu: 282560.4024667311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2309120.7338306485,
            "unit": "ns/iter",
            "extra": "iterations: 402\ncpu: 2308937.0646766266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1908224.8891171666,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1908165.913757708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1892157.9410568865,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1892038.6178861675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1909325.652977396,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1909265.2977412743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1149203.6761787306,
            "unit": "ns/iter",
            "extra": "iterations: 806\ncpu: 1149139.9503722119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1858070.5708584224,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1857951.2974051891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3381.5622480081347,
            "unit": "ns/iter",
            "extra": "iterations: 207348\ncpu: 3381.4244651503923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17362.74857908809,
            "unit": "ns/iter",
            "extra": "iterations: 40291\ncpu: 17362.04363257306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13513.219508907925,
            "unit": "ns/iter",
            "extra": "iterations: 51925\ncpu: 13512.294655753554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13712.134509307032,
            "unit": "ns/iter",
            "extra": "iterations: 51305\ncpu: 13711.70256310302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11227.894544810906,
            "unit": "ns/iter",
            "extra": "iterations: 62216\ncpu: 11227.144142985675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 65757.69741663318,
            "unit": "ns/iter",
            "extra": "iterations: 10645\ncpu: 65756.0450915924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 152220.3417446179,
            "unit": "ns/iter",
            "extra": "iterations: 4597\ncpu: 152209.854252774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 40113.319405384354,
            "unit": "ns/iter",
            "extra": "iterations: 17423\ncpu: 40111.77753544199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 39664.404660659035,
            "unit": "ns/iter",
            "extra": "iterations: 17637\ncpu: 39660.82667120209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 39802.07938314641,
            "unit": "ns/iter",
            "extra": "iterations: 17573\ncpu: 39801.820975359566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 82033.09915611937,
            "unit": "ns/iter",
            "extra": "iterations: 8532\ncpu: 82026.84013127105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 71460.01581955356,
            "unit": "ns/iter",
            "extra": "iterations: 9798\ncpu: 71454.05184731582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21374.833307880104,
            "unit": "ns/iter",
            "extra": "iterations: 32737\ncpu: 21373.763631365386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 103188.06185718668,
            "unit": "ns/iter",
            "extra": "iterations: 6806\ncpu: 103184.76344401983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 83182.68251333239,
            "unit": "ns/iter",
            "extra": "iterations: 8435\ncpu: 83177.97273266158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 80743.70580111376,
            "unit": "ns/iter",
            "extra": "iterations: 8688\ncpu: 80738.88121547013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 82832.10789069324,
            "unit": "ns/iter",
            "extra": "iterations: 8453\ncpu: 82826.21554477717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 160895.96449025758,
            "unit": "ns/iter",
            "extra": "iterations: 4365\ncpu: 160886.94158075808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 659072.3675777309,
            "unit": "ns/iter",
            "extra": "iterations: 1061\ncpu: 659059.5664467547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 569520.0292682865,
            "unit": "ns/iter",
            "extra": "iterations: 1230\ncpu: 569502.9268292682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 556581.9689737475,
            "unit": "ns/iter",
            "extra": "iterations: 1257\ncpu: 556547.175815441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 556066.947879836,
            "unit": "ns/iter",
            "extra": "iterations: 1132\ncpu: 556023.5865724401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 372785.00533332897,
            "unit": "ns/iter",
            "extra": "iterations: 1875\ncpu: 372760.4799999957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 547826.7857701173,
            "unit": "ns/iter",
            "extra": "iterations: 1279\ncpu: 547794.9179046189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21171.519591813434,
            "unit": "ns/iter",
            "extra": "iterations: 33024\ncpu: 21171.060440891586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 102963.480146519,
            "unit": "ns/iter",
            "extra": "iterations: 6825\ncpu: 102958.57875458016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 83414.9358684009,
            "unit": "ns/iter",
            "extra": "iterations: 8389\ncpu: 83409.9177494333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 81261.13595308278,
            "unit": "ns/iter",
            "extra": "iterations: 8525\ncpu: 81254.52199413469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 83109.98400094463,
            "unit": "ns/iter",
            "extra": "iterations: 8438\ncpu: 83105.66484949125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 160697.20303168867,
            "unit": "ns/iter",
            "extra": "iterations: 4354\ncpu: 160687.39090491444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 657477.9370891345,
            "unit": "ns/iter",
            "extra": "iterations: 1065\ncpu: 657456.8075117394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 567903.9155159013,
            "unit": "ns/iter",
            "extra": "iterations: 1231\ncpu: 567864.6628757212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 557010.9799357511,
            "unit": "ns/iter",
            "extra": "iterations: 1246\ncpu: 556978.5714285693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 558624.8435754153,
            "unit": "ns/iter",
            "extra": "iterations: 1253\ncpu: 558596.7278531446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 375170.58918050234,
            "unit": "ns/iter",
            "extra": "iterations: 1867\ncpu: 375150.1874665206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 548220.5007861806,
            "unit": "ns/iter",
            "extra": "iterations: 1272\ncpu: 548204.4811320825 ns\nthreads: 1"
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
        "date": 1705959252226,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8481.04366095112,
            "unit": "ns/iter",
            "extra": "iterations: 82820\ncpu: 8480.551799082346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 78433.89205909421,
            "unit": "ns/iter",
            "extra": "iterations: 10830\ncpu: 78431.01569713758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 150026.7768752092,
            "unit": "ns/iter",
            "extra": "iterations: 5786\ncpu: 150024.5247148289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 220734.42138683613,
            "unit": "ns/iter",
            "extra": "iterations: 3937\ncpu: 220722.91084582167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 291853.27030669665,
            "unit": "ns/iter",
            "extra": "iterations: 2967\ncpu: 291838.2204246712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 357848.6734693953,
            "unit": "ns/iter",
            "extra": "iterations: 2401\ncpu: 357845.4810495628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 429431.30594056647,
            "unit": "ns/iter",
            "extra": "iterations: 2020\ncpu: 429424.2574257429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 499057.07560138474,
            "unit": "ns/iter",
            "extra": "iterations: 1746\ncpu: 499055.5555555549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 568574.765604201,
            "unit": "ns/iter",
            "extra": "iterations: 1506\ncpu: 568560.292164674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6506.8716542180955,
            "unit": "ns/iter",
            "extra": "iterations: 107374\ncpu: 6506.777245888214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5528.674093563507,
            "unit": "ns/iter",
            "extra": "iterations: 126567\ncpu: 5528.65833906152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5508.667221623924,
            "unit": "ns/iter",
            "extra": "iterations: 127337\ncpu: 5508.367560096433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5557.736581337414,
            "unit": "ns/iter",
            "extra": "iterations: 125944\ncpu: 5557.5525630439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9841.804646966153,
            "unit": "ns/iter",
            "extra": "iterations: 70928\ncpu: 9841.454714640187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 36359.700722395886,
            "unit": "ns/iter",
            "extra": "iterations: 22287\ncpu: 36359.09274464933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 145024.1724196031,
            "unit": "ns/iter",
            "extra": "iterations: 5939\ncpu: 145020.1212325308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 116838.34656047412,
            "unit": "ns/iter",
            "extra": "iterations: 7283\ncpu: 116835.30138679147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 112604.98172669538,
            "unit": "ns/iter",
            "extra": "iterations: 7552\ncpu: 112601.72139830486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 115475.17370764606,
            "unit": "ns/iter",
            "extra": "iterations: 7409\ncpu: 115473.78863544328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 289568.312605068,
            "unit": "ns/iter",
            "extra": "iterations: 2975\ncpu: 289558.7899159663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2311664.1845387253,
            "unit": "ns/iter",
            "extra": "iterations: 401\ncpu: 2311531.6708229478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1899925.610204106,
            "unit": "ns/iter",
            "extra": "iterations: 490\ncpu: 1899795.9183673493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1885791.8603238403,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1885728.947368419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1905913.1334700526,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1905807.1868583206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1138720.0073619292,
            "unit": "ns/iter",
            "extra": "iterations: 815\ncpu: 1138681.595092025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1851280.4402391622,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1851147.6095617583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7712213.859999793,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7711761.999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4410718.2957747765,
            "unit": "ns/iter",
            "extra": "iterations: 213\ncpu: 4410541.314553986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9683222.607143145,
            "unit": "ns/iter",
            "extra": "iterations: 112\ncpu: 9683057.142857125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 35260.17295827847,
            "unit": "ns/iter",
            "extra": "iterations: 23179\ncpu: 35259.07933905688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 156145.9863710609,
            "unit": "ns/iter",
            "extra": "iterations: 5503\ncpu: 156142.2315100855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 123891.23806769075,
            "unit": "ns/iter",
            "extra": "iterations: 6914\ncpu: 123886.34654324573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 115595.26302260264,
            "unit": "ns/iter",
            "extra": "iterations: 7391\ncpu: 115593.97916384785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 118148.74413468248,
            "unit": "ns/iter",
            "extra": "iterations: 7246\ncpu: 118112.77946453179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 296969.0186206866,
            "unit": "ns/iter",
            "extra": "iterations: 2900\ncpu: 296960.44827586296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2318948.1321693286,
            "unit": "ns/iter",
            "extra": "iterations: 401\ncpu: 2318889.775561098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1922490.761410858,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1922378.6307054071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1903980.332652894,
            "unit": "ns/iter",
            "extra": "iterations: 490\ncpu: 1903897.755102038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1903883.6809814118,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1903771.1656441675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1147730.6835599674,
            "unit": "ns/iter",
            "extra": "iterations: 809\ncpu: 1147702.4721878832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1849399.9920158237,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1849297.604790412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7805045.115107349,
            "unit": "ns/iter",
            "extra": "iterations: 139\ncpu: 7804292.805755383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4367135.294392262,
            "unit": "ns/iter",
            "extra": "iterations: 214\ncpu: 4367086.448598128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 33851.94646698484,
            "unit": "ns/iter",
            "extra": "iterations: 24172\ncpu: 33849.45805063728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 147330.8399379664,
            "unit": "ns/iter",
            "extra": "iterations: 5804\ncpu: 147325.15506547238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 119089.54816673127,
            "unit": "ns/iter",
            "extra": "iterations: 7173\ncpu: 119082.21106928811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 113334.09214199435,
            "unit": "ns/iter",
            "extra": "iterations: 7521\ncpu: 113328.99880335052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 116444.01897869525,
            "unit": "ns/iter",
            "extra": "iterations: 7324\ncpu: 116438.99508465316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 286505.2369903806,
            "unit": "ns/iter",
            "extra": "iterations: 3017\ncpu: 286495.6910838595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2327711.513784468,
            "unit": "ns/iter",
            "extra": "iterations: 399\ncpu: 2327575.187969925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1909974.2217660504,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1909868.788501019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1888255.2040815186,
            "unit": "ns/iter",
            "extra": "iterations: 490\ncpu: 1888111.2244897902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1907247.6419753055,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1907160.6995884737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1153434.914179069,
            "unit": "ns/iter",
            "extra": "iterations: 804\ncpu: 1153347.139303489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1854319.546719686,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1854237.9721669906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3414.505794244437,
            "unit": "ns/iter",
            "extra": "iterations: 204427\ncpu: 3414.282849134422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17677.845938233877,
            "unit": "ns/iter",
            "extra": "iterations: 39601\ncpu: 17677.000580793352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13727.601702076867,
            "unit": "ns/iter",
            "extra": "iterations: 50879\ncpu: 13726.425440751618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 14029.709811856606,
            "unit": "ns/iter",
            "extra": "iterations: 49909\ncpu: 14028.944679316353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11422.673781391033,
            "unit": "ns/iter",
            "extra": "iterations: 60766\ncpu: 11421.679886778822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 67294.50101635848,
            "unit": "ns/iter",
            "extra": "iterations: 10331\ncpu: 67293.58242183748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 153244.4406816555,
            "unit": "ns/iter",
            "extra": "iterations: 4577\ncpu: 153244.43958925153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 40034.204519513296,
            "unit": "ns/iter",
            "extra": "iterations: 17524\ncpu: 40033.07464049326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 39886.6592761467,
            "unit": "ns/iter",
            "extra": "iterations: 17545\ncpu: 39886.02450840734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 39803.417335384496,
            "unit": "ns/iter",
            "extra": "iterations: 17571\ncpu: 39803.21552558171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 81969.34744969725,
            "unit": "ns/iter",
            "extra": "iterations: 8548\ncpu: 81967.61815629434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 71854.09443818615,
            "unit": "ns/iter",
            "extra": "iterations: 9763\ncpu: 71852.52483867748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21561.130420053974,
            "unit": "ns/iter",
            "extra": "iterations: 32472\ncpu: 21561.298965262205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 100422.72289157113,
            "unit": "ns/iter",
            "extra": "iterations: 6972\ncpu: 100418.14400459082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 81544.1518074973,
            "unit": "ns/iter",
            "extra": "iterations: 8603\ncpu: 81543.06637219581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 80282.51889718972,
            "unit": "ns/iter",
            "extra": "iterations: 8705\ncpu: 80280.80413555414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 82048.97398640777,
            "unit": "ns/iter",
            "extra": "iterations: 8534\ncpu: 82048.55870635212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 160083.853675295,
            "unit": "ns/iter",
            "extra": "iterations: 4367\ncpu: 160080.3526448352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 658615.4382657988,
            "unit": "ns/iter",
            "extra": "iterations: 1061\ncpu: 658591.0461828491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 568295.5748988012,
            "unit": "ns/iter",
            "extra": "iterations: 1235\ncpu: 568275.8704453433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 559752.4932378717,
            "unit": "ns/iter",
            "extra": "iterations: 1257\ncpu: 559770.0079554553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 552470.8903785744,
            "unit": "ns/iter",
            "extra": "iterations: 1268\ncpu: 552479.8895899105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 376864.8871574363,
            "unit": "ns/iter",
            "extra": "iterations: 1861\ncpu: 376860.1826974783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 547460.7741433159,
            "unit": "ns/iter",
            "extra": "iterations: 1284\ncpu: 547448.9096573213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21240.92470145033,
            "unit": "ns/iter",
            "extra": "iterations: 32909\ncpu: 21240.85204655277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 101711.65629522302,
            "unit": "ns/iter",
            "extra": "iterations: 6910\ncpu: 101708.205499277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 81886.08896422807,
            "unit": "ns/iter",
            "extra": "iterations: 8554\ncpu: 81882.33574935756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 80817.23623137697,
            "unit": "ns/iter",
            "extra": "iterations: 8661\ncpu: 80817.03036600816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 81810.46795320795,
            "unit": "ns/iter",
            "extra": "iterations: 8550\ncpu: 81810.11695906468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 162564.44022242056,
            "unit": "ns/iter",
            "extra": "iterations: 4316\ncpu: 162561.74698795183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 658015.7027281064,
            "unit": "ns/iter",
            "extra": "iterations: 1063\ncpu: 657993.6970837279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 566047.0726392043,
            "unit": "ns/iter",
            "extra": "iterations: 1239\ncpu: 566011.2187247756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 555958.4416933618,
            "unit": "ns/iter",
            "extra": "iterations: 1252\ncpu: 555945.6070287591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 554682.3346582246,
            "unit": "ns/iter",
            "extra": "iterations: 1258\ncpu: 554668.7599364026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 382261.15900488273,
            "unit": "ns/iter",
            "extra": "iterations: 1849\ncpu: 382261.06003244355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 547014.2133227973,
            "unit": "ns/iter",
            "extra": "iterations: 1261\ncpu: 547005.7097541651 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}