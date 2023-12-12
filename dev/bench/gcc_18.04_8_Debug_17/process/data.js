window.BENCHMARK_DATA = {
  "lastUpdate": 1702381152570,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-8 18.04 Debug c++-17": [
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
        "date": 1702381151178,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16996.771079073143,
            "unit": "ns/iter",
            "extra": "iterations: 41202\ncpu: 16996.842386291926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 158592.50751314423,
            "unit": "ns/iter",
            "extra": "iterations: 5324\ncpu: 158588.46731780615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 300697.61804355023,
            "unit": "ns/iter",
            "extra": "iterations: 2893\ncpu: 300691.5658486001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 441604.91963376396,
            "unit": "ns/iter",
            "extra": "iterations: 1966\ncpu: 441585.6052899288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 588205.2240107537,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 588171.2944332664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 588757.964000024,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 588724.1000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 700287.7003983884,
            "unit": "ns/iter",
            "extra": "iterations: 1255\ncpu: 700265.4183266929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 813997.9762741901,
            "unit": "ns/iter",
            "extra": "iterations: 1138\ncpu: 813978.9103690675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 931567.3696303609,
            "unit": "ns/iter",
            "extra": "iterations: 1001\ncpu: 931566.1338661346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13463.116915808198,
            "unit": "ns/iter",
            "extra": "iterations: 51644\ncpu: 13462.650065835342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11206.804039676907,
            "unit": "ns/iter",
            "extra": "iterations: 61094\ncpu: 11206.728975022103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11367.963580700076,
            "unit": "ns/iter",
            "extra": "iterations: 62714\ncpu: 11367.693019102606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11467.563690865138,
            "unit": "ns/iter",
            "extra": "iterations: 62717\ncpu: 11467.578168598626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18986.248260357126,
            "unit": "ns/iter",
            "extra": "iterations: 37364\ncpu: 18985.66802269564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 69139.50553893374,
            "unit": "ns/iter",
            "extra": "iterations: 12367\ncpu: 69137.53537640502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 370106.37818023184,
            "unit": "ns/iter",
            "extra": "iterations: 2319\ncpu: 370102.7166882275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 293431.1661527881,
            "unit": "ns/iter",
            "extra": "iterations: 2919\ncpu: 293414.765330593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 292601.8366859745,
            "unit": "ns/iter",
            "extra": "iterations: 2933\ncpu: 292595.6358677124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 287535.438111312,
            "unit": "ns/iter",
            "extra": "iterations: 2965\ncpu: 287525.73355817894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 591274.1590000223,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 591261.4000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4898734.8465605965,
            "unit": "ns/iter",
            "extra": "iterations: 189\ncpu: 4898552.910052907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3992168.1759656477,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 3991939.914163078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3999742.816239307,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3996944.444444446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3949418.2923729154,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3949338.559322034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2285317.1896550627,
            "unit": "ns/iter",
            "extra": "iterations: 406\ncpu: 2285280.5418719207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3867187.42499994,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3866921.6666666744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 15210826.185714105,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 15210431.428571424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6784764.459999906,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6784351.999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18948451.12499967,
            "unit": "ns/iter",
            "extra": "iterations: 56\ncpu: 18947421.42857142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 74701.85884204718,
            "unit": "ns/iter",
            "extra": "iterations: 11434\ncpu: 74699.16914465616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 408543.33333332266,
            "unit": "ns/iter",
            "extra": "iterations: 2115\ncpu: 408522.4586288423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 324794.0167910383,
            "unit": "ns/iter",
            "extra": "iterations: 2680\ncpu: 324776.45522388053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 314246.40759679995,
            "unit": "ns/iter",
            "extra": "iterations: 2738\ncpu: 314229.03579254803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 306472.2545649966,
            "unit": "ns/iter",
            "extra": "iterations: 2793\ncpu: 306462.1911922668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 589396.9119999838,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 589359.5000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4968162.4545454485,
            "unit": "ns/iter",
            "extra": "iterations: 187\ncpu: 4967988.770053482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 4061171.417391338,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4060920.434782605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3991204.6995708253,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 3991002.5751072783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3996335.5427351757,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3996184.1880341717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2311917.241293563,
            "unit": "ns/iter",
            "extra": "iterations: 402\ncpu: 2311772.139303482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3905585.9205021015,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3905495.815899583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15477312.391304668,
            "unit": "ns/iter",
            "extra": "iterations: 69\ncpu: 15476692.753623163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6788378.389999821,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6788401.000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 66709.42974559517,
            "unit": "ns/iter",
            "extra": "iterations: 12775\ncpu: 66703.85909980418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 360139.95763422863,
            "unit": "ns/iter",
            "extra": "iterations: 2384\ncpu: 360130.7885906043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 282252.54404487036,
            "unit": "ns/iter",
            "extra": "iterations: 3031\ncpu: 282227.6806334548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 284027.1450331076,
            "unit": "ns/iter",
            "extra": "iterations: 3020\ncpu: 284015.72847681976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 279006.5815415198,
            "unit": "ns/iter",
            "extra": "iterations: 3023\ncpu: 278988.0913000334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 555618.4779999853,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 555603.8000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4938029.603174732,
            "unit": "ns/iter",
            "extra": "iterations: 189\ncpu: 4937798.412698417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3985022.636752148,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3984965.811965813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3989557.632478574,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3989445.726495731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3954575.3872340224,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3954426.8085106304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2268559.52696084,
            "unit": "ns/iter",
            "extra": "iterations: 408\ncpu: 2268483.57843137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3860740.054166693,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3860555.8333333493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6277.3478488269875,
            "unit": "ns/iter",
            "extra": "iterations: 110893\ncpu: 6277.214972991975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 38633.13346207084,
            "unit": "ns/iter",
            "extra": "iterations: 18125\ncpu: 38631.85655172385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 33472.665003835944,
            "unit": "ns/iter",
            "extra": "iterations: 20848\ncpu: 33471.74788948558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 32889.59158369317,
            "unit": "ns/iter",
            "extra": "iterations: 21292\ncpu: 32888.54029682497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 25460.51505004693,
            "unit": "ns/iter",
            "extra": "iterations: 27475\ncpu: 25460.302092811624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 188748.00000000262,
            "unit": "ns/iter",
            "extra": "iterations: 3703\ncpu: 188742.50607615538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 326228.88977114874,
            "unit": "ns/iter",
            "extra": "iterations: 2141\ncpu: 326222.41943017393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 79813.20439459737,
            "unit": "ns/iter",
            "extra": "iterations: 8738\ncpu: 79807.42732890742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 79730.93159945053,
            "unit": "ns/iter",
            "extra": "iterations: 8728\ncpu: 79729.13611365769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 79442.07993659802,
            "unit": "ns/iter",
            "extra": "iterations: 8832\ncpu: 79441.21376811486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 164600.4027712599,
            "unit": "ns/iter",
            "extra": "iterations: 4258\ncpu: 164593.33020197158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 155014.63644404936,
            "unit": "ns/iter",
            "extra": "iterations: 4522\ncpu: 155003.25077399416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 49985.98110786004,
            "unit": "ns/iter",
            "extra": "iterations: 14027\ncpu: 49983.74563342112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 244808.77941176327,
            "unit": "ns/iter",
            "extra": "iterations: 2856\ncpu: 244798.07422969287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 199070.57228060847,
            "unit": "ns/iter",
            "extra": "iterations: 3521\ncpu: 199060.6645839259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 198944.27651731035,
            "unit": "ns/iter",
            "extra": "iterations: 3526\ncpu: 198931.026659103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 199241.44643364078,
            "unit": "ns/iter",
            "extra": "iterations: 3519\ncpu: 199229.01392441234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 348254.7553455841,
            "unit": "ns/iter",
            "extra": "iterations: 2011\ncpu: 348232.02386871824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1402125.127999966,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1402037.1999999953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1175990.2785234847,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1175922.1476510032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1165017.9081803253,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1165009.8497495872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1158322.861156964,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1158327.60330577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 737262.4679285211,
            "unit": "ns/iter",
            "extra": "iterations: 951\ncpu: 737225.7623554104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1157554.7008263597,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1157479.3388429834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 50329.85247082652,
            "unit": "ns/iter",
            "extra": "iterations: 13882\ncpu: 50327.30154156439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 249127.1580071234,
            "unit": "ns/iter",
            "extra": "iterations: 2810\ncpu: 249114.83985765197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 203283.1989961688,
            "unit": "ns/iter",
            "extra": "iterations: 3387\ncpu: 203272.8963684708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 201974.13795093336,
            "unit": "ns/iter",
            "extra": "iterations: 3465\ncpu: 201971.1976911959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 201734.34836657843,
            "unit": "ns/iter",
            "extra": "iterations: 3459\ncpu: 201731.13616652292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 351039.5718592749,
            "unit": "ns/iter",
            "extra": "iterations: 1990\ncpu: 351016.3316582893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1396932.3540000005,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1396855.6000000094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1172892.7654941084,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1172809.7152428776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1168087.1583333404,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1168024.3333333351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1164413.7508417796,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1164332.3232323136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 738304.5179325278,
            "unit": "ns/iter",
            "extra": "iterations: 948\ncpu: 738278.3755274189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1154683.871287052,
            "unit": "ns/iter",
            "extra": "iterations: 606\ncpu: 1154666.0066006647 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}