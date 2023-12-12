window.BENCHMARK_DATA = {
  "lastUpdate": 1702388114237,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-11 22.04 Debug c++-17": [
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "d50bb7d9db5207dc297814766d8c83b14fcc339b",
          "message": "More tests; More BMs; Separate BMs",
          "timestamp": "2023-12-12T14:29:05+03:00",
          "tree_id": "f44cff78a7d652bd003cb40812243c64e409e254",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d50bb7d9db5207dc297814766d8c83b14fcc339b"
        },
        "date": 1702381092711,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15555.323093051577,
            "unit": "ns/iter",
            "extra": "iterations: 43879\ncpu: 15555.078739260241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 151424.74909682266,
            "unit": "ns/iter",
            "extra": "iterations: 5536\ncpu: 151415.1553468208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 286423.38110963994,
            "unit": "ns/iter",
            "extra": "iterations: 3028\ncpu: 286424.1413474242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 420588.0957240134,
            "unit": "ns/iter",
            "extra": "iterations: 2058\ncpu: 420578.6686103011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 560806.1662404167,
            "unit": "ns/iter",
            "extra": "iterations: 1564\ncpu: 560784.398976982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 560980.2550000041,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 560982.3 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 669338.5991317122,
            "unit": "ns/iter",
            "extra": "iterations: 1382\ncpu: 669303.4732272066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 778511.1452560978,
            "unit": "ns/iter",
            "extra": "iterations: 1191\ncpu: 778456.1712846345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 893257.6835564129,
            "unit": "ns/iter",
            "extra": "iterations: 1046\ncpu: 893209.9426386222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12414.29415106033,
            "unit": "ns/iter",
            "extra": "iterations: 56335\ncpu: 12413.51380136683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10338.642425053222,
            "unit": "ns/iter",
            "extra": "iterations: 67281\ncpu: 10338.06126543898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10198.167297281709,
            "unit": "ns/iter",
            "extra": "iterations: 68716\ncpu: 10197.264101519288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10372.603596168196,
            "unit": "ns/iter",
            "extra": "iterations: 67850\ncpu: 10372.098747236558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16331.271378911219,
            "unit": "ns/iter",
            "extra": "iterations: 43150\ncpu: 16331.19351100812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 63155.20164395782,
            "unit": "ns/iter",
            "extra": "iterations: 13504\ncpu: 63154.61344786738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 331934.19206844043,
            "unit": "ns/iter",
            "extra": "iterations: 2572\ncpu: 331927.9937791606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 263747.21080247953,
            "unit": "ns/iter",
            "extra": "iterations: 3240\ncpu: 263748.1481481478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 264631.6795597455,
            "unit": "ns/iter",
            "extra": "iterations: 3180\ncpu: 264625.37735849014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 260428.16122137554,
            "unit": "ns/iter",
            "extra": "iterations: 3275\ncpu: 260429.16030534307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 585769.060040028,
            "unit": "ns/iter",
            "extra": "iterations: 1499\ncpu: 585744.3629086041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4711326.520201956,
            "unit": "ns/iter",
            "extra": "iterations: 198\ncpu: 4711135.858585862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3846213.555555601,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3846159.6707818955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3796336.4081631377,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3796148.1632653074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3798385.5306123937,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3798369.3877551043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2214454.2833332466,
            "unit": "ns/iter",
            "extra": "iterations: 420\ncpu: 2214426.9047619044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3718755.9879998844,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3718648.3999999925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14704034.150684474,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14704034.246575331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6467869.100000029,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6467676.000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18223851.189655557,
            "unit": "ns/iter",
            "extra": "iterations: 58\ncpu: 18223772.413793094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 68320.76268203126,
            "unit": "ns/iter",
            "extra": "iterations: 12498\ncpu: 68317.30676908293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 370615.3469299921,
            "unit": "ns/iter",
            "extra": "iterations: 2329\ncpu: 370601.58866466157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 296030.95722662786,
            "unit": "ns/iter",
            "extra": "iterations: 2899\ncpu: 296016.8678854779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 292152.2468419342,
            "unit": "ns/iter",
            "extra": "iterations: 2929\ncpu: 292153.26049846277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 289634.242725876,
            "unit": "ns/iter",
            "extra": "iterations: 2612\ncpu: 289617.11332312215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 594855.399450946,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 594850.7892930693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4770632.599999877,
            "unit": "ns/iter",
            "extra": "iterations: 195\ncpu: 4770609.230769233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3881488.1583332317,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3881223.3333333167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3842890.423868305,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3842848.5596707757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3838989.5267489287,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3838951.0288065877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2235339.375000004,
            "unit": "ns/iter",
            "extra": "iterations: 416\ncpu: 2235306.0096153948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3757362.495967698,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3757372.5806451635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15019949.267605651,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 15019654.929577446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6665553.729999943,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6665465.000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 62166.964463294215,
            "unit": "ns/iter",
            "extra": "iterations: 13676\ncpu: 62164.41210880383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 327825.3592974412,
            "unit": "ns/iter",
            "extra": "iterations: 2619\ncpu: 327818.4803360061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 264680.48888201255,
            "unit": "ns/iter",
            "extra": "iterations: 3238\ncpu: 264668.03582458274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 265138.97255627724,
            "unit": "ns/iter",
            "extra": "iterations: 3243\ncpu: 265123.2500770897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 258117.71829710403,
            "unit": "ns/iter",
            "extra": "iterations: 3312\ncpu: 258096.25603864944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 566725.2406801616,
            "unit": "ns/iter",
            "extra": "iterations: 1529\ncpu: 566721.1903204744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4731155.959390848,
            "unit": "ns/iter",
            "extra": "iterations: 197\ncpu: 4730918.781725907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3864753.045454535,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3864468.5950413384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3814538.179591757,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3814388.979591825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3810457.672131184,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3810283.1967212977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2213328.674584252,
            "unit": "ns/iter",
            "extra": "iterations: 421\ncpu: 2213210.451306417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3726946.979999866,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3726676.8000000073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5821.101781789558,
            "unit": "ns/iter",
            "extra": "iterations: 119206\ncpu: 5820.8764659496765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 39070.71461832774,
            "unit": "ns/iter",
            "extra": "iterations: 18039\ncpu: 39070.86867343012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 31944.530334202245,
            "unit": "ns/iter",
            "extra": "iterations: 21873\ncpu: 31942.59589448181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30662.408875843994,
            "unit": "ns/iter",
            "extra": "iterations: 22826\ncpu: 30661.78042583037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23969.00526928128,
            "unit": "ns/iter",
            "extra": "iterations: 29226\ncpu: 23967.990830083003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 150752.11225805976,
            "unit": "ns/iter",
            "extra": "iterations: 4650\ncpu: 150752.301075269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 308128.67311924853,
            "unit": "ns/iter",
            "extra": "iterations: 2273\ncpu: 308116.32204135315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 76511.49568070246,
            "unit": "ns/iter",
            "extra": "iterations: 9145\ncpu: 76498.67687260822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 76203.4109979179,
            "unit": "ns/iter",
            "extra": "iterations: 9129\ncpu: 76202.9356994186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 75813.69237425597,
            "unit": "ns/iter",
            "extra": "iterations: 9245\ncpu: 75811.68199026506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 157974.55079005632,
            "unit": "ns/iter",
            "extra": "iterations: 4430\ncpu: 157974.8081264079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 148704.98284261444,
            "unit": "ns/iter",
            "extra": "iterations: 4721\ncpu: 148687.73564922597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 44208.50352224252,
            "unit": "ns/iter",
            "extra": "iterations: 15757\ncpu: 44205.88944596048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 217619.52471246698,
            "unit": "ns/iter",
            "extra": "iterations: 3217\ncpu: 217606.8697544281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 176355.70737850113,
            "unit": "ns/iter",
            "extra": "iterations: 3971\ncpu: 176349.38302694625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 177755.63255459708,
            "unit": "ns/iter",
            "extra": "iterations: 3938\ncpu: 177739.3600812591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 176187.52540241228,
            "unit": "ns/iter",
            "extra": "iterations: 3976\ncpu: 176179.62776659714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 291538.9866777533,
            "unit": "ns/iter",
            "extra": "iterations: 2402\ncpu: 291524.52123230416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1318277.1766918178,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1318200.3759398477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1097817.3722397422,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1097803.1545741274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1101531.6324921064,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1101485.0157728675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1098884.4645669092,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1098811.6535433107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 700398.3273273514,
            "unit": "ns/iter",
            "extra": "iterations: 999\ncpu: 700331.3313313279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1092349.199687936,
            "unit": "ns/iter",
            "extra": "iterations: 641\ncpu: 1092273.634945407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 45167.97940341121,
            "unit": "ns/iter",
            "extra": "iterations: 15488\ncpu: 45164.3788739673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 219369.42395736484,
            "unit": "ns/iter",
            "extra": "iterations: 3189\ncpu: 219361.1476952007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 180662.0015471866,
            "unit": "ns/iter",
            "extra": "iterations: 3878\ncpu: 180652.5270758117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 179589.2371054694,
            "unit": "ns/iter",
            "extra": "iterations: 3897\ncpu: 179580.5748011298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 180254.30810949567,
            "unit": "ns/iter",
            "extra": "iterations: 3872\ncpu: 180252.35020661267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 296329.04917338357,
            "unit": "ns/iter",
            "extra": "iterations: 2359\ncpu: 296315.6846121269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1310686.2022471488,
            "unit": "ns/iter",
            "extra": "iterations: 534\ncpu: 1310675.655430728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1107187.5467511707,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1107112.044373994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1090816.9045383637,
            "unit": "ns/iter",
            "extra": "iterations: 639\ncpu: 1090762.597809065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1098907.8238993248,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1098831.9182389902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 700967.0719280412,
            "unit": "ns/iter",
            "extra": "iterations: 1001\ncpu: 700933.2667332676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1089507.9937790867,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1089496.5785381014 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "7f7a954178065768f16bab445a1789e66eddbd11",
          "message": "Add Clang Builds",
          "timestamp": "2023-12-12T14:44:55+03:00",
          "tree_id": "5a4deefbb08f6ba5a30c260d4700f1c6aeccac34",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/7f7a954178065768f16bab445a1789e66eddbd11"
        },
        "date": 1702382259156,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15538.935595734978,
            "unit": "ns/iter",
            "extra": "iterations: 45851\ncpu: 15538.485529214197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 157601.88832219545,
            "unit": "ns/iter",
            "extra": "iterations: 5686\ncpu: 157592.96517762932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 280997.0754533708,
            "unit": "ns/iter",
            "extra": "iterations: 3088\ncpu: 280980.7966321243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 413111.7353361987,
            "unit": "ns/iter",
            "extra": "iterations: 2097\ncpu: 413099.3323795901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 548689.4156739798,
            "unit": "ns/iter",
            "extra": "iterations: 1595\ncpu: 548648.8401253916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 548148.2860000142,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 548127.5999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 655499.0879999992,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 655443.9999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 764143.2298187691,
            "unit": "ns/iter",
            "extra": "iterations: 1214\ncpu: 764083.3607907743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 875437.6457357248,
            "unit": "ns/iter",
            "extra": "iterations: 1067\ncpu: 875390.1593252105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12259.730562227609,
            "unit": "ns/iter",
            "extra": "iterations: 57041\ncpu: 12258.762995038669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10154.33266248721,
            "unit": "ns/iter",
            "extra": "iterations: 69067\ncpu: 10153.254086611565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10105.54079048319,
            "unit": "ns/iter",
            "extra": "iterations: 69097\ncpu: 10104.786025442505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10132.401174844143,
            "unit": "ns/iter",
            "extra": "iterations: 69456\ncpu: 10132.008753743357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16335.718637657303,
            "unit": "ns/iter",
            "extra": "iterations: 42838\ncpu: 16335.148699752568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 62759.79472679192,
            "unit": "ns/iter",
            "extra": "iterations: 13616\ncpu: 62756.2059341951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 326309.1984819682,
            "unit": "ns/iter",
            "extra": "iterations: 2635\ncpu: 326289.56356736197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 260036.96869301825,
            "unit": "ns/iter",
            "extra": "iterations: 3290\ncpu: 260023.25227963526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 260369.11830899896,
            "unit": "ns/iter",
            "extra": "iterations: 3288\ncpu: 260364.6289537713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 256845.36497446173,
            "unit": "ns/iter",
            "extra": "iterations: 3329\ncpu: 256842.80564734133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 588743.761713519,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 588724.4979919678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4625799.417910335,
            "unit": "ns/iter",
            "extra": "iterations: 201\ncpu: 4625679.601990063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3803458.563265385,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3803283.2653061254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3748278.8427418484,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3748122.983870964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3745526.326086875,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 3745431.3043478224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2173916.779859459,
            "unit": "ns/iter",
            "extra": "iterations: 427\ncpu: 2173806.323185007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3667881.557312204,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3667733.992094862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14467575.932432486,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 14466854.054054054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6333736.500000101,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6333267.999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 17888699.866666492,
            "unit": "ns/iter",
            "extra": "iterations: 60\ncpu: 17887461.66666666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 68649.85174488364,
            "unit": "ns/iter",
            "extra": "iterations: 12465\ncpu: 68643.9229843561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 364491.5905245412,
            "unit": "ns/iter",
            "extra": "iterations: 2364\ncpu: 364471.10829103016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 289084.7273032911,
            "unit": "ns/iter",
            "extra": "iterations: 2974\ncpu: 289068.5944855415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 287876.36873677955,
            "unit": "ns/iter",
            "extra": "iterations: 2834\ncpu: 287848.764996472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 286890.1229124862,
            "unit": "ns/iter",
            "extra": "iterations: 2994\ncpu: 286868.6372745482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 599986.2118294478,
            "unit": "ns/iter",
            "extra": "iterations: 1454\ncpu: 599971.320495187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4703678.355329876,
            "unit": "ns/iter",
            "extra": "iterations: 197\ncpu: 4703495.4314720575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3851392.9834709964,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3851107.024793403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3787654.8056681305,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3787440.4858299606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3790836.3821139475,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3790640.650406495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2210808.2476190054,
            "unit": "ns/iter",
            "extra": "iterations: 420\ncpu: 2210464.999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3709192.5258964403,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3708878.486055778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14848345.5972218,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14847131.944444511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6490772.479999691,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6490268.999999954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 60661.22789999895,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60660.56000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 325186.47472445684,
            "unit": "ns/iter",
            "extra": "iterations: 2631\ncpu: 325166.5146332205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 260546.0767123337,
            "unit": "ns/iter",
            "extra": "iterations: 3285\ncpu: 260536.86453576843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 260058.2898726499,
            "unit": "ns/iter",
            "extra": "iterations: 3298\ncpu: 260039.6604002436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 255868.4681614247,
            "unit": "ns/iter",
            "extra": "iterations: 3345\ncpu: 255853.9910313907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 577271.5662891676,
            "unit": "ns/iter",
            "extra": "iterations: 1501\ncpu: 577237.5083277811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4845870.429999763,
            "unit": "ns/iter",
            "extra": "iterations: 200\ncpu: 4845534.499999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3820425.4426229126,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3820143.4426229633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3779932.4939270476,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3779758.704453454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3755844.596774235,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3755578.2258064286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2183731.578454296,
            "unit": "ns/iter",
            "extra": "iterations: 427\ncpu: 2183624.1217798516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3693873.9603174203,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3693627.380952381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5605.818630989582,
            "unit": "ns/iter",
            "extra": "iterations: 124674\ncpu: 5605.586569773994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 38126.077601218254,
            "unit": "ns/iter",
            "extra": "iterations: 18376\ncpu: 38125.16869830199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 31809.374555726077,
            "unit": "ns/iter",
            "extra": "iterations: 21946\ncpu: 31808.657614143736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30501.883479928576,
            "unit": "ns/iter",
            "extra": "iterations: 22966\ncpu: 30500.317861186064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23747.235818064113,
            "unit": "ns/iter",
            "extra": "iterations: 29527\ncpu: 23746.648829884325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 152198.78882122008,
            "unit": "ns/iter",
            "extra": "iterations: 4598\ncpu: 152187.21183122855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 304525.69261038903,
            "unit": "ns/iter",
            "extra": "iterations: 2287\ncpu: 304520.6821163077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 75509.77846320247,
            "unit": "ns/iter",
            "extra": "iterations: 9240\ncpu: 75503.74458874381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 74917.44506140047,
            "unit": "ns/iter",
            "extra": "iterations: 9365\ncpu: 74912.82434596887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 74814.74813392734,
            "unit": "ns/iter",
            "extra": "iterations: 9378\ncpu: 74809.21305182448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 155410.71022853625,
            "unit": "ns/iter",
            "extra": "iterations: 4507\ncpu: 155403.2615930796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 146918.7404067904,
            "unit": "ns/iter",
            "extra": "iterations: 4769\ncpu: 146913.9651918641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 45892.717104846946,
            "unit": "ns/iter",
            "extra": "iterations: 15861\ncpu: 45760.32406531805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 219225.92300470514,
            "unit": "ns/iter",
            "extra": "iterations: 3195\ncpu: 219220.375586855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 175965.75935694194,
            "unit": "ns/iter",
            "extra": "iterations: 3981\ncpu: 175955.68952524703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 176816.69909044707,
            "unit": "ns/iter",
            "extra": "iterations: 3958\ncpu: 176811.47043961604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 174758.58383384455,
            "unit": "ns/iter",
            "extra": "iterations: 3996\ncpu: 174752.82782782725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 297250.18239524675,
            "unit": "ns/iter",
            "extra": "iterations: 2363\ncpu: 297243.8848920855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1306895.3457943883,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1306875.5140187067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1091853.464898597,
            "unit": "ns/iter",
            "extra": "iterations: 641\ncpu: 1091807.02028081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1094031.1357254314,
            "unit": "ns/iter",
            "extra": "iterations: 641\ncpu: 1094021.060842434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1087473.3639191238,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1087448.2115085612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 685141.4011741705,
            "unit": "ns/iter",
            "extra": "iterations: 1022\ncpu: 685135.2250489293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1080210.410575433,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1080137.1695178747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43757.6307971926,
            "unit": "ns/iter",
            "extra": "iterations: 15956\ncpu: 43756.812484332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 214578.2523765663,
            "unit": "ns/iter",
            "extra": "iterations: 3261\ncpu: 214572.46243483858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 177943.664201935,
            "unit": "ns/iter",
            "extra": "iterations: 3922\ncpu: 177936.00203977386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 178083.29235881096,
            "unit": "ns/iter",
            "extra": "iterations: 3913\ncpu: 178064.6818297987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 178857.90586735558,
            "unit": "ns/iter",
            "extra": "iterations: 3920\ncpu: 178838.97959183552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 294888.6747899097,
            "unit": "ns/iter",
            "extra": "iterations: 2380\ncpu: 294863.78151260805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1303196.2360594927,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1303118.0297397708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1100099.338072713,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1100022.432859405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1085666.515527933,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1085624.2236024986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1086001.3732503995,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1085981.804043556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 690490.0735586241,
            "unit": "ns/iter",
            "extra": "iterations: 1006\ncpu: 690452.8827037768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1082776.5193798663,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1082722.0155038878 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "7d92f1613fa4ae9edff977fb9a4ee38db56bedcc",
          "message": "Enable another Clangs : try",
          "timestamp": "2023-12-12T16:01:28+03:00",
          "tree_id": "088c43bf274cde79393a5114d044a347c612360f",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/7d92f1613fa4ae9edff977fb9a4ee38db56bedcc"
        },
        "date": 1702387048411,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16292.102638842842,
            "unit": "ns/iter",
            "extra": "iterations: 45285\ncpu: 16291.811858231205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 152744.23029976492,
            "unit": "ns/iter",
            "extra": "iterations: 5571\ncpu: 152735.1462933046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 289239.7351765448,
            "unit": "ns/iter",
            "extra": "iterations: 3002\ncpu: 289229.04730179894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 424207.8443465393,
            "unit": "ns/iter",
            "extra": "iterations: 2043\ncpu: 424197.25893294177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 565497.9332901421,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 565480.7642487048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 565680.3770000067,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 565635.7000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 675650.166666673,
            "unit": "ns/iter",
            "extra": "iterations: 1368\ncpu: 675643.421052631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 786578.8671742679,
            "unit": "ns/iter",
            "extra": "iterations: 1182\ncpu: 786533.6717428097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 896278.2649325684,
            "unit": "ns/iter",
            "extra": "iterations: 1038\ncpu: 896279.6724470141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12478.48046667882,
            "unit": "ns/iter",
            "extra": "iterations: 56570\ncpu: 12477.69842672795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10168.594934505358,
            "unit": "ns/iter",
            "extra": "iterations: 68937\ncpu: 10168.352263661034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10209.299111124077,
            "unit": "ns/iter",
            "extra": "iterations: 69526\ncpu: 10208.993757730928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10191.849570849847,
            "unit": "ns/iter",
            "extra": "iterations: 68391\ncpu: 10191.362898627014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16346.724473105618,
            "unit": "ns/iter",
            "extra": "iterations: 42798\ncpu: 16345.925043226314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 63964.517593560784,
            "unit": "ns/iter",
            "extra": "iterations: 13414\ncpu: 63963.620098404645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 333388.8693092548,
            "unit": "ns/iter",
            "extra": "iterations: 2548\ncpu: 333379.7880690743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 266113.2168899954,
            "unit": "ns/iter",
            "extra": "iterations: 3209\ncpu: 266109.19289498276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 265955.82482887537,
            "unit": "ns/iter",
            "extra": "iterations: 3214\ncpu: 265949.7199751084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 265975.26468750136,
            "unit": "ns/iter",
            "extra": "iterations: 3200\ncpu: 265975.81250000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 587686.0373582498,
            "unit": "ns/iter",
            "extra": "iterations: 1499\ncpu: 587656.9046030701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4779535.076530565,
            "unit": "ns/iter",
            "extra": "iterations: 196\ncpu: 4779401.530612241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3883959.1493776585,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3883918.6721991734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3857054.901234578,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3856730.45267489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3845281.272727199,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3845031.818181819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2228534.07894733,
            "unit": "ns/iter",
            "extra": "iterations: 418\ncpu: 2228362.2009569313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3758042.1457490316,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3757840.48582996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14815873.833333468,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14814720.8333333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6536427.300000015,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6536335.000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18384188.89655188,
            "unit": "ns/iter",
            "extra": "iterations: 58\ncpu: 18382746.551724155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 72568.70442566856,
            "unit": "ns/iter",
            "extra": "iterations: 11953\ncpu: 72425.12339998352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 367270.9203767294,
            "unit": "ns/iter",
            "extra": "iterations: 2336\ncpu: 367268.19349315204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 297293.99688366376,
            "unit": "ns/iter",
            "extra": "iterations: 2888\ncpu: 297276.2465373949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 297501.17534723424,
            "unit": "ns/iter",
            "extra": "iterations: 2880\ncpu: 297499.37500000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 295205.688105106,
            "unit": "ns/iter",
            "extra": "iterations: 2892\ncpu: 295197.44121715217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 600971.9343469328,
            "unit": "ns/iter",
            "extra": "iterations: 1447\ncpu: 600973.116793366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4801351.273196121,
            "unit": "ns/iter",
            "extra": "iterations: 194\ncpu: 4801311.855670108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3905820.874476964,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3905605.020920501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3950759.3179917014,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3950715.481171573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3870022.359504356,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3869871.0743801594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2246981.6489104796,
            "unit": "ns/iter",
            "extra": "iterations: 413\ncpu: 2246960.5326876496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3783662.101626089,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3783668.2926829197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15078186.11267573,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 15077090.140845034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6502884.289999997,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6502671.000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 62695.19305841164,
            "unit": "ns/iter",
            "extra": "iterations: 13628\ncpu: 62693.689462870374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 332094.1321705448,
            "unit": "ns/iter",
            "extra": "iterations: 2580\ncpu: 332082.6744186048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 267026.4917471308,
            "unit": "ns/iter",
            "extra": "iterations: 3211\ncpu: 267008.5643101846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 265852.1002483015,
            "unit": "ns/iter",
            "extra": "iterations: 3222\ncpu: 265841.6821849793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 265593.70664605417,
            "unit": "ns/iter",
            "extra": "iterations: 3235\ncpu: 265578.7944358571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 573768.0356671287,
            "unit": "ns/iter",
            "extra": "iterations: 1514\ncpu: 573747.6221928654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4765068.53846162,
            "unit": "ns/iter",
            "extra": "iterations: 195\ncpu: 4764845.1282051075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3857704.177685799,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3857485.950413205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3850006.1481480687,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3849813.580246925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3852042.123456714,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3851830.452674881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2227634.5741626946,
            "unit": "ns/iter",
            "extra": "iterations: 418\ncpu: 2227545.2153110043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3752472.18473906,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3752326.506024103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5670.892349065107,
            "unit": "ns/iter",
            "extra": "iterations: 123083\ncpu: 5670.654761421169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 38797.705204236,
            "unit": "ns/iter",
            "extra": "iterations: 18043\ncpu: 38796.48617192249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 31016.159987602106,
            "unit": "ns/iter",
            "extra": "iterations: 22583\ncpu: 31014.82088296504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30781.611181925633,
            "unit": "ns/iter",
            "extra": "iterations: 22751\ncpu: 30780.211858819363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23888.56707150625,
            "unit": "ns/iter",
            "extra": "iterations: 29312\ncpu: 23886.12172489061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 150565.95357833456,
            "unit": "ns/iter",
            "extra": "iterations: 4653\ncpu: 150561.6376531268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 297337.70555792144,
            "unit": "ns/iter",
            "extra": "iterations: 2357\ncpu: 297328.8502333471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 76197.4495921663,
            "unit": "ns/iter",
            "extra": "iterations: 9195\ncpu: 76194.35562805863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 76098.51854680396,
            "unit": "ns/iter",
            "extra": "iterations: 9166\ncpu: 76097.51254636611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 76056.82812499786,
            "unit": "ns/iter",
            "extra": "iterations: 9216\ncpu: 76048.93663194316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 158226.3504852117,
            "unit": "ns/iter",
            "extra": "iterations: 4431\ncpu: 158219.20559693078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 152997.56459535478,
            "unit": "ns/iter",
            "extra": "iterations: 4683\ncpu: 152990.34806747735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 44649.90367294598,
            "unit": "ns/iter",
            "extra": "iterations: 15655\ncpu: 44647.92079207885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 216225.34533702154,
            "unit": "ns/iter",
            "extra": "iterations: 3249\ncpu: 216210.21852877765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 178012.311655194,
            "unit": "ns/iter",
            "extra": "iterations: 3921\ncpu: 178004.51415455094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 180751.21369933197,
            "unit": "ns/iter",
            "extra": "iterations: 3898\ncpu: 180746.17752693573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 177073.1636828687,
            "unit": "ns/iter",
            "extra": "iterations: 3910\ncpu: 177064.6291560116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 294144.0016750314,
            "unit": "ns/iter",
            "extra": "iterations: 2388\ncpu: 294123.3668341729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1325559.7055449097,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1325478.9674952412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1105978.4063492755,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1105961.9047618944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1110768.8095237445,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1110739.365079379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1109880.6167192608,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1109829.8107255409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 698935.5828343055,
            "unit": "ns/iter",
            "extra": "iterations: 1002\ncpu: 698710.3792415148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1098856.813694233,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1098808.7579617838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44827.26252081342,
            "unit": "ns/iter",
            "extra": "iterations: 15614\ncpu: 44825.44511335996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 219531.97357658995,
            "unit": "ns/iter",
            "extra": "iterations: 3179\ncpu: 219525.35388486958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 181548.16954837507,
            "unit": "ns/iter",
            "extra": "iterations: 3875\ncpu: 181536.98064516138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 180601.84542181983,
            "unit": "ns/iter",
            "extra": "iterations: 3888\ncpu: 180588.0915637838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 180761.99793068544,
            "unit": "ns/iter",
            "extra": "iterations: 3866\ncpu: 180753.5437144328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 296159.2201017897,
            "unit": "ns/iter",
            "extra": "iterations: 2358\ncpu: 296139.9491094122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1323787.903591705,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1323791.1153118953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1104619.695102739,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1104556.0821485033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1125122.6982622934,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1124765.2448657148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1101114.3522012292,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1100971.5408805008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 697041.4866203942,
            "unit": "ns/iter",
            "extra": "iterations: 1009\ncpu: 696963.3300297363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1096241.37362634,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1096145.6828885362 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "d1143eedaeca215bd4d59936eed187ebbc5a2705",
          "message": "uncomment",
          "timestamp": "2023-12-12T16:24:18+03:00",
          "tree_id": "24d13ef9110c03a703c985f6237d2ba22581ead7",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d1143eedaeca215bd4d59936eed187ebbc5a2705"
        },
        "date": 1702388111640,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16018.290527582889,
            "unit": "ns/iter",
            "extra": "iterations: 44846\ncpu: 16017.910181510058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 153461.84762247393,
            "unit": "ns/iter",
            "extra": "iterations: 5552\ncpu: 153408.10518731992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 290062.8338903736,
            "unit": "ns/iter",
            "extra": "iterations: 2992\ncpu: 290055.21390374337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 425224.9867387009,
            "unit": "ns/iter",
            "extra": "iterations: 2036\ncpu: 425203.73280943034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 570013.2201420258,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 569879.7288573271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 567822.6129999757,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 567802.9999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 678104.2419355058,
            "unit": "ns/iter",
            "extra": "iterations: 1364\ncpu: 678086.8768328448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 791340.3495310884,
            "unit": "ns/iter",
            "extra": "iterations: 1173\ncpu: 791314.833759591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 898521.5363724624,
            "unit": "ns/iter",
            "extra": "iterations: 1031\ncpu: 898476.8186226954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12454.369380596972,
            "unit": "ns/iter",
            "extra": "iterations: 56167\ncpu: 12454.220449730263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10350.033793530047,
            "unit": "ns/iter",
            "extra": "iterations: 67942\ncpu: 10349.763033175343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10083.033496885208,
            "unit": "ns/iter",
            "extra": "iterations: 69499\ncpu: 10082.678887466012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10140.191323241392,
            "unit": "ns/iter",
            "extra": "iterations: 69035\ncpu: 10139.960889403923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16240.309513319584,
            "unit": "ns/iter",
            "extra": "iterations: 43129\ncpu: 16239.7296482645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 61671.358640063234,
            "unit": "ns/iter",
            "extra": "iterations: 13883\ncpu: 61671.16617445801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 328733.4940499139,
            "unit": "ns/iter",
            "extra": "iterations: 2605\ncpu: 328727.1401151635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 262927.55654579215,
            "unit": "ns/iter",
            "extra": "iterations: 3254\ncpu: 262917.8242163492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 262132.04254668846,
            "unit": "ns/iter",
            "extra": "iterations: 3267\ncpu: 262122.40587695196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 258359.88623298422,
            "unit": "ns/iter",
            "extra": "iterations: 3305\ncpu: 258349.25869894167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 580777.6825712328,
            "unit": "ns/iter",
            "extra": "iterations: 1509\ncpu: 580752.5513585156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4720743.005050407,
            "unit": "ns/iter",
            "extra": "iterations: 198\ncpu: 4720515.151515149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3870211.149377425,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3870166.3900414994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3842293.6900826134,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3842177.2727272687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3821387.036885344,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3821292.2131147524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2223678.5875299205,
            "unit": "ns/iter",
            "extra": "iterations: 417\ncpu: 2223588.489208629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3742935.104838807,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3742921.370967734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14831801.444444181,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14831318.05555556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6502531.200000022,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6502246.000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18294677.620690044,
            "unit": "ns/iter",
            "extra": "iterations: 58\ncpu: 18293965.517241407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 68166.99896620447,
            "unit": "ns/iter",
            "extra": "iterations: 12575\ncpu: 68165.30417495046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 364647.79779568437,
            "unit": "ns/iter",
            "extra": "iterations: 2359\ncpu: 364645.69732937694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 294061.67936835246,
            "unit": "ns/iter",
            "extra": "iterations: 2913\ncpu: 294048.02608994255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 293144.5638841668,
            "unit": "ns/iter",
            "extra": "iterations: 2935\ncpu: 293146.3032367976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 292388.1132404088,
            "unit": "ns/iter",
            "extra": "iterations: 2870\ncpu: 292380.13937282295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 592229.5116279192,
            "unit": "ns/iter",
            "extra": "iterations: 1462\ncpu: 592208.8235294133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4797001.494845571,
            "unit": "ns/iter",
            "extra": "iterations: 194\ncpu: 4796952.577319596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3919194.882352967,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3918926.4705882347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3884922.137500032,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3884879.1666666805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3868001.4647303526,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3867958.9211618323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2249195.683574861,
            "unit": "ns/iter",
            "extra": "iterations: 414\ncpu: 2249226.086956522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3784088.7408906347,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3784105.6680162037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15166059.366197422,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 15165823.943661995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6580469.840000092,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6580566.000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 59427.605100000845,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59427.819999999796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 331612.2443928845,
            "unit": "ns/iter",
            "extra": "iterations: 2586\ncpu: 331613.1090487237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 262730.3339477713,
            "unit": "ns/iter",
            "extra": "iterations: 3255\ncpu: 262726.6359446998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 258263.82813918512,
            "unit": "ns/iter",
            "extra": "iterations: 3305\ncpu: 258265.143721633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 256588.79381751377,
            "unit": "ns/iter",
            "extra": "iterations: 3332\ncpu: 256587.15486194415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 565268.5026007611,
            "unit": "ns/iter",
            "extra": "iterations: 1538\ncpu: 565267.360208062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4762123.668367262,
            "unit": "ns/iter",
            "extra": "iterations: 196\ncpu: 4762073.979591828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3884673.524999963,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3884661.666666656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3849357.6748972023,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3849339.9176954757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3844265.448559615,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3844188.065843625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2222349.0572792334,
            "unit": "ns/iter",
            "extra": "iterations: 419\ncpu: 2222379.47494033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3761314.2886178927,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3761278.861788625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5629.382415510225,
            "unit": "ns/iter",
            "extra": "iterations: 124098\ncpu: 5629.297007204005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36392.967830787034,
            "unit": "ns/iter",
            "extra": "iterations: 19242\ncpu: 36393.18158195612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 32110.784640074013,
            "unit": "ns/iter",
            "extra": "iterations: 21810\ncpu: 32111.256304447266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 31496.77906505122,
            "unit": "ns/iter",
            "extra": "iterations: 22183\ncpu: 31496.93458955074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23997.58529976727,
            "unit": "ns/iter",
            "extra": "iterations: 29156\ncpu: 23997.47564823715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 149438.0435432239,
            "unit": "ns/iter",
            "extra": "iterations: 4685\ncpu: 149439.0181430107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 280267.32986804267,
            "unit": "ns/iter",
            "extra": "iterations: 2501\ncpu: 280274.4502199115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 76329.96709163836,
            "unit": "ns/iter",
            "extra": "iterations: 9177\ncpu: 76328.38618284854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 75928.19343620972,
            "unit": "ns/iter",
            "extra": "iterations: 9202\ncpu: 75927.72223429673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 76018.67816840282,
            "unit": "ns/iter",
            "extra": "iterations: 9216\ncpu: 76016.57986111258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 157637.38135019044,
            "unit": "ns/iter",
            "extra": "iterations: 4429\ncpu: 157637.9543915131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 148781.26274427547,
            "unit": "ns/iter",
            "extra": "iterations: 4708\ncpu: 148783.3474936289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 44819.411116804666,
            "unit": "ns/iter",
            "extra": "iterations: 15616\ncpu: 44820.04994877013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 218935.98305084198,
            "unit": "ns/iter",
            "extra": "iterations: 3186\ncpu: 218933.89830508298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 178313.42129393335,
            "unit": "ns/iter",
            "extra": "iterations: 3926\ncpu: 178314.54406520785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 178239.11998978333,
            "unit": "ns/iter",
            "extra": "iterations: 3917\ncpu: 178241.8177176409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 177855.19349924452,
            "unit": "ns/iter",
            "extra": "iterations: 3938\ncpu: 177849.568308789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 294478.56956705847,
            "unit": "ns/iter",
            "extra": "iterations: 2379\ncpu: 294472.9298024374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1325923.7973485508,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1325894.1287878787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1104811.8446909694,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1104828.526148968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1106967.973101286,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1106941.930379754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1102500.103773555,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1102516.6666666777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 694237.2208955156,
            "unit": "ns/iter",
            "extra": "iterations: 1005\ncpu: 694232.6368159197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1092808.2859375188,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1092786.0937500088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44727.90528944847,
            "unit": "ns/iter",
            "extra": "iterations: 15616\ncpu: 44727.93929303348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 219437.88312499988,
            "unit": "ns/iter",
            "extra": "iterations: 3200\ncpu: 219435.15625000297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 181640.12868979087,
            "unit": "ns/iter",
            "extra": "iterations: 3862\ncpu: 181636.53547384776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 182014.88947787738,
            "unit": "ns/iter",
            "extra": "iterations: 3773\ncpu: 182010.49562682284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 181803.87539021342,
            "unit": "ns/iter",
            "extra": "iterations: 3844\ncpu: 181806.52965660687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 297214.5376435548,
            "unit": "ns/iter",
            "extra": "iterations: 2351\ncpu: 297210.6763079507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1320326.9157087163,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1320317.2413793262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1110258.5294118172,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1110214.3084260873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1097791.821036075,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1097795.918367331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1104679.5869218663,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1104695.6937799102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 697480.6347305324,
            "unit": "ns/iter",
            "extra": "iterations: 1002\ncpu: 697465.4690618772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1092638.5555555592,
            "unit": "ns/iter",
            "extra": "iterations: 639\ncpu: 1092654.3035993632 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}