window.BENCHMARK_DATA = {
  "lastUpdate": 1702381093181,
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
      }
    ]
  }
}