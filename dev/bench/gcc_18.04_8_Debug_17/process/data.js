window.BENCHMARK_DATA = {
  "lastUpdate": 1702387067706,
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
        "date": 1702382279302,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16002.778320757043,
            "unit": "ns/iter",
            "extra": "iterations: 41745\ncpu: 16002.024194514313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 151854.8814243183,
            "unit": "ns/iter",
            "extra": "iterations: 5701\ncpu: 151851.043676548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 290922.9167771732,
            "unit": "ns/iter",
            "extra": "iterations: 3016\ncpu: 290909.8143236075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 437456.4295399487,
            "unit": "ns/iter",
            "extra": "iterations: 2065\ncpu: 437442.6150121064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 570997.7222582698,
            "unit": "ns/iter",
            "extra": "iterations: 1541\ncpu: 570973.0045425051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 566994.3839999974,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 566954.5999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 673575.6509999646,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 673565.4000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 795294.7086882492,
            "unit": "ns/iter",
            "extra": "iterations: 1174\ncpu: 795271.8057921629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 904060.3333333589,
            "unit": "ns/iter",
            "extra": "iterations: 1026\ncpu: 904029.1423001952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13156.149094401171,
            "unit": "ns/iter",
            "extra": "iterations: 53114\ncpu: 13155.746130963606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10976.110328638368,
            "unit": "ns/iter",
            "extra": "iterations: 63474\ncpu: 10975.604184390431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10852.144688048473,
            "unit": "ns/iter",
            "extra": "iterations: 64449\ncpu: 10851.758754984554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10896.373897597781,
            "unit": "ns/iter",
            "extra": "iterations: 64178\ncpu: 10895.97681448469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18635.9037352914,
            "unit": "ns/iter",
            "extra": "iterations: 37989\ncpu: 18634.744268077597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 70083.1482486417,
            "unit": "ns/iter",
            "extra": "iterations: 12162\ncpu: 70082.5686564709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 359081.62054145953,
            "unit": "ns/iter",
            "extra": "iterations: 2327\ncpu: 359066.136656639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 289881.42373460566,
            "unit": "ns/iter",
            "extra": "iterations: 2924\ncpu: 289873.666210671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 291121.8376156253,
            "unit": "ns/iter",
            "extra": "iterations: 2919\ncpu: 291114.45700582414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 290951.6497326044,
            "unit": "ns/iter",
            "extra": "iterations: 2992\ncpu: 290940.47459893033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 600878.8249999952,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 600849.3000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4840602.362694108,
            "unit": "ns/iter",
            "extra": "iterations: 193\ncpu: 4840168.393782382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3896510.264706016,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3896388.6554621835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3971864.3458331353,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3971682.500000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3887189.8744770233,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3887018.4100418417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2225044.3398058517,
            "unit": "ns/iter",
            "extra": "iterations: 412\ncpu: 2224982.5242718444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3790478.069387685,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3790331.836734691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14955967.788732555,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14955305.63380278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6613108.27999955,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6612678.000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18686191.160714064,
            "unit": "ns/iter",
            "extra": "iterations: 56\ncpu: 18685496.428571455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 75938.93705420605,
            "unit": "ns/iter",
            "extra": "iterations: 11216\ncpu: 75931.83844507838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 396503.2057327653,
            "unit": "ns/iter",
            "extra": "iterations: 2163\ncpu: 396488.67313915835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 318670.1742031172,
            "unit": "ns/iter",
            "extra": "iterations: 2698\ncpu: 318664.7516679024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 313570.79297596787,
            "unit": "ns/iter",
            "extra": "iterations: 2705\ncpu: 313564.87985212647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 307386.14802867087,
            "unit": "ns/iter",
            "extra": "iterations: 2790\ncpu: 307377.5985663097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 586956.2689999839,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 586958.8999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4841662.835051571,
            "unit": "ns/iter",
            "extra": "iterations: 194\ncpu: 4841552.577319573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3976407.089361785,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3976360.851063836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3930203.962184822,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3930146.2184873875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3909733.7983194203,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3909637.3949580113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2257473.1364705474,
            "unit": "ns/iter",
            "extra": "iterations: 425\ncpu: 2257451.5294117667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3720004.802469042,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3719957.201646079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15204464.342465512,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 15204105.479452051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6647879.509999939,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6647713.000000052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 66615.1040480704,
            "unit": "ns/iter",
            "extra": "iterations: 12648\ncpu: 66614.01802656504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 354220.84513458033,
            "unit": "ns/iter",
            "extra": "iterations: 2415\ncpu: 354213.5817805379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 286164.14347680757,
            "unit": "ns/iter",
            "extra": "iterations: 2997\ncpu: 286159.3259926588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 286512.185953177,
            "unit": "ns/iter",
            "extra": "iterations: 2990\ncpu: 286506.086956523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 282911.48391376564,
            "unit": "ns/iter",
            "extra": "iterations: 3015\ncpu: 282908.45771144336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 557087.9979999858,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 557068.6000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4842120.103626788,
            "unit": "ns/iter",
            "extra": "iterations: 193\ncpu: 4841989.119170999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3899742.3263598816,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3899700.4184100423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3840118.7250000155,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3840047.916666656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3881774.5726139895,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3881717.427385881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2242711.3518071827,
            "unit": "ns/iter",
            "extra": "iterations: 415\ncpu: 2242679.759036147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3795142.6938775512,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3794983.6734693977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6311.570784629369,
            "unit": "ns/iter",
            "extra": "iterations: 110702\ncpu: 6311.249119257074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 40883.66977153091,
            "unit": "ns/iter",
            "extra": "iterations: 17070\ncpu: 40881.87463386069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 32099.292299920937,
            "unit": "ns/iter",
            "extra": "iterations: 21779\ncpu: 32097.965930483504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 31300.687262822397,
            "unit": "ns/iter",
            "extra": "iterations: 22399\ncpu: 31299.624983258225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 25044.54201332601,
            "unit": "ns/iter",
            "extra": "iterations: 27765\ncpu: 25044.2031334415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 187884.63027695302,
            "unit": "ns/iter",
            "extra": "iterations: 3719\ncpu: 187874.40172089153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 319121.20604395575,
            "unit": "ns/iter",
            "extra": "iterations: 2184\ncpu: 319108.0128205108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 77665.9567398803,
            "unit": "ns/iter",
            "extra": "iterations: 8969\ncpu: 77662.27004125324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 76385.67612215833,
            "unit": "ns/iter",
            "extra": "iterations: 9201\ncpu: 76383.2518204545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 77450.30653097741,
            "unit": "ns/iter",
            "extra": "iterations: 8942\ncpu: 77449.6533214042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 153553.9573459671,
            "unit": "ns/iter",
            "extra": "iterations: 4431\ncpu: 153548.67975626333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 147938.9950688318,
            "unit": "ns/iter",
            "extra": "iterations: 4867\ncpu: 147935.09348674896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 49131.545114373715,
            "unit": "ns/iter",
            "extra": "iterations: 14164\ncpu: 49130.881107032146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 236874.59260526605,
            "unit": "ns/iter",
            "extra": "iterations: 2921\ncpu: 236872.74905854225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 192591.3126537367,
            "unit": "ns/iter",
            "extra": "iterations: 3659\ncpu: 192586.82700191616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 194785.9413061392,
            "unit": "ns/iter",
            "extra": "iterations: 3629\ncpu: 194787.13144117003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 191705.9531459241,
            "unit": "ns/iter",
            "extra": "iterations: 3735\ncpu: 191697.56358768285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 344237.58483227296,
            "unit": "ns/iter",
            "extra": "iterations: 2057\ncpu: 344239.3777345611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1359019.1828793632,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1358941.2451361935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1138356.9655737998,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1138313.442622961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1135812.1121951058,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1135753.9837398352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1136811.3704917482,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1136756.229508192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 726321.5142856728,
            "unit": "ns/iter",
            "extra": "iterations: 980\ncpu: 726313.9795918389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1118671.3247173324,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1118648.949919222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 49522.48206090871,
            "unit": "ns/iter",
            "extra": "iterations: 14382\ncpu: 49521.65206508183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 237883.3929313777,
            "unit": "ns/iter",
            "extra": "iterations: 2886\ncpu: 237879.90297989934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 191943.0514997179,
            "unit": "ns/iter",
            "extra": "iterations: 3534\ncpu: 191944.05772495724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 189941.079113058,
            "unit": "ns/iter",
            "extra": "iterations: 3653\ncpu: 189937.36654804114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 194302.4119073288,
            "unit": "ns/iter",
            "extra": "iterations: 3712\ncpu: 194300.72737068834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 337785.23743416386,
            "unit": "ns/iter",
            "extra": "iterations: 2089\ncpu: 337784.0114887479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1293421.612903144,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1293405.5028463006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1128995.24019606,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1128950.980392151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1093432.3792048555,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1093394.342507655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1097603.8815384142,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1097562.9230769246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 708675.677189366,
            "unit": "ns/iter",
            "extra": "iterations: 982\ncpu: 708670.7739307422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1099593.4984894746,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1099571.9033232634 ns\nthreads: 1"
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
        "date": 1702387066198,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16726.8280107636,
            "unit": "ns/iter",
            "extra": "iterations: 41991\ncpu: 16725.73170441285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 159153.34270814504,
            "unit": "ns/iter",
            "extra": "iterations: 5369\ncpu: 159146.582231328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 302152.36069566145,
            "unit": "ns/iter",
            "extra": "iterations: 2875\ncpu: 302139.0260869566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 441765.0783410285,
            "unit": "ns/iter",
            "extra": "iterations: 1953\ncpu: 441733.0773169483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 591798.0282448076,
            "unit": "ns/iter",
            "extra": "iterations: 1487\ncpu: 591782.91862811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 588404.128000036,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 588347.0000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 700413.4097116858,
            "unit": "ns/iter",
            "extra": "iterations: 1318\ncpu: 700405.0834597874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 818124.0325704063,
            "unit": "ns/iter",
            "extra": "iterations: 1136\ncpu: 818055.721830986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 930144.5889447344,
            "unit": "ns/iter",
            "extra": "iterations: 995\ncpu: 930125.3266331664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13290.198562993555,
            "unit": "ns/iter",
            "extra": "iterations: 52331\ncpu: 13289.652404884315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11129.679336754476,
            "unit": "ns/iter",
            "extra": "iterations: 63325\ncpu: 11129.389656533775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11029.343677220366,
            "unit": "ns/iter",
            "extra": "iterations: 63548\ncpu: 11028.985963366276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10968.320051815343,
            "unit": "ns/iter",
            "extra": "iterations: 64074\ncpu: 10967.551580984506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18492.33510960996,
            "unit": "ns/iter",
            "extra": "iterations: 37907\ncpu: 18491.919698208774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 70895.19365760911,
            "unit": "ns/iter",
            "extra": "iterations: 12109\ncpu: 70890.84152283425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 365845.4234541537,
            "unit": "ns/iter",
            "extra": "iterations: 2345\ncpu: 365841.5778251596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 305009.58730704157,
            "unit": "ns/iter",
            "extra": "iterations: 2915\ncpu: 304969.4682675818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 290666.8535422426,
            "unit": "ns/iter",
            "extra": "iterations: 2936\ncpu: 290657.97002724843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 287969.0428186092,
            "unit": "ns/iter",
            "extra": "iterations: 2966\ncpu: 287957.88941335026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 594489.6670000049,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 594467.6999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4969385.186170337,
            "unit": "ns/iter",
            "extra": "iterations: 188\ncpu: 4969126.5957446685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3999432.329059789,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3999220.512820513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3998927.6223176187,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 3998891.8454935667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3996197.914529941,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3995476.0683760666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2307657.9205954378,
            "unit": "ns/iter",
            "extra": "iterations: 403\ncpu: 2307578.4119106694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3895639.907562961,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3895442.8571428494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 15319479.811593732,
            "unit": "ns/iter",
            "extra": "iterations: 69\ncpu: 15318398.550724601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6645843.13999967,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6645561.999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 19056755.839286108,
            "unit": "ns/iter",
            "extra": "iterations: 56\ncpu: 19055871.42857141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 75623.72924091022,
            "unit": "ns/iter",
            "extra": "iterations: 11224\ncpu: 75622.95081967209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 394475.1106011998,
            "unit": "ns/iter",
            "extra": "iterations: 2179\ncpu: 394443.78155117045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 316175.93434158195,
            "unit": "ns/iter",
            "extra": "iterations: 2711\ncpu: 316175.6547399489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 314706.41092374246,
            "unit": "ns/iter",
            "extra": "iterations: 2728\ncpu: 314686.4369501458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 305409.6665479181,
            "unit": "ns/iter",
            "extra": "iterations: 2807\ncpu: 305406.8044175259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 580017.8690000166,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 579970.4000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4985670.802139103,
            "unit": "ns/iter",
            "extra": "iterations: 187\ncpu: 4985456.149732632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 4058843.8260870236,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4058629.5652174014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 4034504.926406908,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4034245.454545437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 4029741.526086948,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4029659.565217382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2340582.391959782,
            "unit": "ns/iter",
            "extra": "iterations: 398\ncpu: 2340409.798994978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3923380.033755162,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3923272.573839683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15767125.98529435,
            "unit": "ns/iter",
            "extra": "iterations: 68\ncpu: 15766257.352941167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6721380.739999745,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6721087.9999999665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 67853.0905878592,
            "unit": "ns/iter",
            "extra": "iterations: 12452\ncpu: 67849.11660777385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 358825.32050209667,
            "unit": "ns/iter",
            "extra": "iterations: 2390\ncpu: 358800.5439330544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 286366.6725516339,
            "unit": "ns/iter",
            "extra": "iterations: 3002\ncpu: 286343.87075283175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 282434.32499176206,
            "unit": "ns/iter",
            "extra": "iterations: 3037\ncpu: 282429.3381626617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 279716.7847725781,
            "unit": "ns/iter",
            "extra": "iterations: 3034\ncpu: 279703.9222148963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 548001.1079999941,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 547980.4000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4974198.340425484,
            "unit": "ns/iter",
            "extra": "iterations: 188\ncpu: 4973927.659574474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 4035822.0862066904,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4035540.948275855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 4025473.9310345766,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4025471.1206896394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3992258.641025639,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3992214.1025641197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2298238.6888888534,
            "unit": "ns/iter",
            "extra": "iterations: 405\ncpu: 2298145.432098777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3904067.51464444,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3904034.728033465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6319.997141900991,
            "unit": "ns/iter",
            "extra": "iterations: 110563\ncpu: 6319.920769154211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 41232.237921065724,
            "unit": "ns/iter",
            "extra": "iterations: 16951\ncpu: 41231.296088726536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 33206.97642762295,
            "unit": "ns/iter",
            "extra": "iterations: 21084\ncpu: 33207.01479795113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 33541.027257894726,
            "unit": "ns/iter",
            "extra": "iterations: 20838\ncpu: 33541.05000479891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 25185.92719478513,
            "unit": "ns/iter",
            "extra": "iterations: 27759\ncpu: 25185.590259015164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 189944.44581877007,
            "unit": "ns/iter",
            "extra": "iterations: 3719\ncpu: 189939.98386663193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 326685.382092199,
            "unit": "ns/iter",
            "extra": "iterations: 2256\ncpu: 326685.5053191501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 79843.2861875944,
            "unit": "ns/iter",
            "extra": "iterations: 8753\ncpu: 79843.37941277394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 80325.30734788031,
            "unit": "ns/iter",
            "extra": "iterations: 8710\ncpu: 80323.21469575162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 79468.50421220354,
            "unit": "ns/iter",
            "extra": "iterations: 8784\ncpu: 79467.7709471766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 165454.58733160445,
            "unit": "ns/iter",
            "extra": "iterations: 4231\ncpu: 165453.39163318393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 155006.9406291624,
            "unit": "ns/iter",
            "extra": "iterations: 4514\ncpu: 155007.17766947424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 49407.79761312621,
            "unit": "ns/iter",
            "extra": "iterations: 14077\ncpu: 49407.87809902606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 241849.1990324707,
            "unit": "ns/iter",
            "extra": "iterations: 2894\ncpu: 241849.61990325054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 196395.46638418618,
            "unit": "ns/iter",
            "extra": "iterations: 3540\ncpu: 196393.70056497256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 196382.86999159638,
            "unit": "ns/iter",
            "extra": "iterations: 3569\ncpu: 196382.96441580172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 196434.78503364068,
            "unit": "ns/iter",
            "extra": "iterations: 3568\ncpu: 196434.8094170418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 343034.43872548145,
            "unit": "ns/iter",
            "extra": "iterations: 2040\ncpu: 343025.8333333318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1398011.5099601666,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1397980.0796813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1169192.8216667217,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1169195.3333333298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1160297.049833907,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1160268.4385381958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1157631.3553719083,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1157603.966942157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 736983.1294736766,
            "unit": "ns/iter",
            "extra": "iterations: 950\ncpu: 736968.2105263264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1152939.9655172485,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1152914.4499179001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 49800.18261551796,
            "unit": "ns/iter",
            "extra": "iterations: 14024\ncpu: 49799.69338277287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 245320.4160839055,
            "unit": "ns/iter",
            "extra": "iterations: 2860\ncpu: 245320.5594405632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 198719.79965899023,
            "unit": "ns/iter",
            "extra": "iterations: 3519\ncpu: 198717.7607274775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 198387.57227892295,
            "unit": "ns/iter",
            "extra": "iterations: 3528\ncpu: 198387.6133786845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 198811.26901248636,
            "unit": "ns/iter",
            "extra": "iterations: 3524\ncpu: 198808.91032917437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 348138.31293531985,
            "unit": "ns/iter",
            "extra": "iterations: 2010\ncpu: 348134.27860696544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1386579.0813491053,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1386528.9682539715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1165082.2146422467,
            "unit": "ns/iter",
            "extra": "iterations: 601\ncpu: 1165057.7371048236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1163298.8616667225,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1163299.4999999844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1161721.5223880862,
            "unit": "ns/iter",
            "extra": "iterations: 603\ncpu: 1161723.5489220738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 735811.6281512782,
            "unit": "ns/iter",
            "extra": "iterations: 952\ncpu: 735811.8697478997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1153443.5082508558,
            "unit": "ns/iter",
            "extra": "iterations: 606\ncpu: 1153411.881188124 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}