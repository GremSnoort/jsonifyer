window.BENCHMARK_DATA = {
  "lastUpdate": 1702382275159,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse gcc-11 22.04 Release c++-17": [
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
        "date": 1702381096837,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 569.1739711656506,
            "unit": "ns/iter",
            "extra": "iterations: 1237274\ncpu: 569.16762172324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5306.576530000484,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5306.3870000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10318.999975124025,
            "unit": "ns/iter",
            "extra": "iterations: 80399\ncpu: 10318.771377753454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15597.554902102549,
            "unit": "ns/iter",
            "extra": "iterations: 55262\ncpu: 15597.269371358258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20516.039083623575,
            "unit": "ns/iter",
            "extra": "iterations: 40682\ncpu: 20515.385182636048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25398.501033373203,
            "unit": "ns/iter",
            "extra": "iterations: 32902\ncpu: 25397.301075922434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30458.621428831615,
            "unit": "ns/iter",
            "extra": "iterations: 27477\ncpu: 30457.968482731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34894.19061386923,
            "unit": "ns/iter",
            "extra": "iterations: 23865\ncpu: 34893.027446050735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39783.89036052531,
            "unit": "ns/iter",
            "extra": "iterations: 20914\ncpu: 39783.06875776991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 583.5906433063501,
            "unit": "ns/iter",
            "extra": "iterations: 1299412\ncpu: 583.5127734698461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 409.6413950050998,
            "unit": "ns/iter",
            "extra": "iterations: 1707578\ncpu: 409.63382053411414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 414.7447017941629,
            "unit": "ns/iter",
            "extra": "iterations: 1693545\ncpu: 414.72821802786484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 419.42537616291764,
            "unit": "ns/iter",
            "extra": "iterations: 1682981\ncpu: 419.4107360689165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 893.4082253672444,
            "unit": "ns/iter",
            "extra": "iterations: 787053\ncpu: 893.396505699108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1519.8753207465984,
            "unit": "ns/iter",
            "extra": "iterations: 524947\ncpu: 1519.8029515360618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8405.520498194679,
            "unit": "ns/iter",
            "extra": "iterations: 97472\ncpu: 8405.357435981607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7259.997353592693,
            "unit": "ns/iter",
            "extra": "iterations: 111094\ncpu: 7259.850216933417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8766.752722298545,
            "unit": "ns/iter",
            "extra": "iterations: 93579\ncpu: 8766.521334914876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7733.020294871186,
            "unit": "ns/iter",
            "extra": "iterations: 105741\ncpu: 7732.987204584794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 26361.720904351634,
            "unit": "ns/iter",
            "extra": "iterations: 31448\ncpu: 26361.282116509767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 259706.63436652956,
            "unit": "ns/iter",
            "extra": "iterations: 3323\ncpu: 259702.22690340015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 205236.07990600224,
            "unit": "ns/iter",
            "extra": "iterations: 4255\ncpu: 205235.4406580492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 202776.75464596844,
            "unit": "ns/iter",
            "extra": "iterations: 4251\ncpu: 202770.6892495882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 203098.14756011884,
            "unit": "ns/iter",
            "extra": "iterations: 4283\ncpu: 203095.283679664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 103268.36594375747,
            "unit": "ns/iter",
            "extra": "iterations: 8392\ncpu: 103265.41944709234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 195197.87353471114,
            "unit": "ns/iter",
            "extra": "iterations: 4436\ncpu: 195193.84580703324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5639.684039999793,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5639.593000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26800.77633170054,
            "unit": "ns/iter",
            "extra": "iterations: 31426\ncpu: 26799.83134983775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21312.923767731027,
            "unit": "ns/iter",
            "extra": "iterations: 39196\ncpu: 21312.65435248494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22719.877105936408,
            "unit": "ns/iter",
            "extra": "iterations: 36682\ncpu: 22719.344637696933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21367.41496895244,
            "unit": "ns/iter",
            "extra": "iterations: 38974\ncpu: 21367.324370092912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 43186.57631061787,
            "unit": "ns/iter",
            "extra": "iterations: 19342\ncpu: 43185.57543170301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 283742.8524164775,
            "unit": "ns/iter",
            "extra": "iterations: 3083\ncpu: 283737.2688939358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 217536.3347436537,
            "unit": "ns/iter",
            "extra": "iterations: 4018\ncpu: 217533.92234942704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 216882.56035768005,
            "unit": "ns/iter",
            "extra": "iterations: 4026\ncpu: 216876.80079483494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 215845.71280277858,
            "unit": "ns/iter",
            "extra": "iterations: 4046\ncpu: 215838.7048937235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 111811.95572616844,
            "unit": "ns/iter",
            "extra": "iterations: 7815\ncpu: 111808.56046065252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 208989.1896345865,
            "unit": "ns/iter",
            "extra": "iterations: 4187\ncpu: 208983.4487700033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 849739.7758928469,
            "unit": "ns/iter",
            "extra": "iterations: 1120\ncpu: 849717.8571428574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 441536.82831770554,
            "unit": "ns/iter",
            "extra": "iterations: 2027\ncpu: 441530.19240256306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2323.7876171251,
            "unit": "ns/iter",
            "extra": "iterations: 342796\ncpu: 2323.7085613601225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8628.935739470262,
            "unit": "ns/iter",
            "extra": "iterations: 104372\ncpu: 8628.760587130597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8245.449314216177,
            "unit": "ns/iter",
            "extra": "iterations: 99594\ncpu: 8245.146293953418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7577.957574993095,
            "unit": "ns/iter",
            "extra": "iterations: 111043\ncpu: 7577.783381212644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7144.439351859875,
            "unit": "ns/iter",
            "extra": "iterations: 115222\ncpu: 7144.231136414916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 25457.30071807963,
            "unit": "ns/iter",
            "extra": "iterations: 33144\ncpu: 25456.164011585846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 270036.5399390171,
            "unit": "ns/iter",
            "extra": "iterations: 3280\ncpu: 270024.5121951214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 201256.61862477253,
            "unit": "ns/iter",
            "extra": "iterations: 4392\ncpu: 201251.09289617493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 199494.69187359736,
            "unit": "ns/iter",
            "extra": "iterations: 4430\ncpu: 199488.75846501216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 199145.60825667717,
            "unit": "ns/iter",
            "extra": "iterations: 4457\ncpu: 199141.79941664755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 98868.56640054494,
            "unit": "ns/iter",
            "extra": "iterations: 8893\ncpu: 98864.72506465776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 191782.5212305024,
            "unit": "ns/iter",
            "extra": "iterations: 4616\ncpu: 191778.35788561538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 180.43947124967096,
            "unit": "ns/iter",
            "extra": "iterations: 3883799\ncpu: 180.43462084417817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1453.5963185428964,
            "unit": "ns/iter",
            "extra": "iterations: 490295\ncpu: 1453.5673421103704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1157.516450578293,
            "unit": "ns/iter",
            "extra": "iterations: 672256\ncpu: 1155.2398193545323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1241.8433965601919,
            "unit": "ns/iter",
            "extra": "iterations: 565160\ncpu: 1241.79382829641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 871.9509519585797,
            "unit": "ns/iter",
            "extra": "iterations: 785801\ncpu: 871.9533316959412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8662.535821993226,
            "unit": "ns/iter",
            "extra": "iterations: 81570\ncpu: 8662.416329532936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12590.570687979298,
            "unit": "ns/iter",
            "extra": "iterations: 55554\ncpu: 12590.297728336482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2818.692026966873,
            "unit": "ns/iter",
            "extra": "iterations: 247710\ncpu: 2818.609260829201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2826.6202193951954,
            "unit": "ns/iter",
            "extra": "iterations: 247772\ncpu: 2826.5373004213357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2826.46345350339,
            "unit": "ns/iter",
            "extra": "iterations: 247233\ncpu: 2826.4313420943163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5105.3111594201355,
            "unit": "ns/iter",
            "extra": "iterations: 138000\ncpu: 5105.172463768122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5297.582105351414,
            "unit": "ns/iter",
            "extra": "iterations: 131313\ncpu: 5297.435897435863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1797.2987893976635,
            "unit": "ns/iter",
            "extra": "iterations: 386667\ncpu: 1797.271554076257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9736.888603089214,
            "unit": "ns/iter",
            "extra": "iterations: 71923\ncpu: 9736.917258734982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7762.769087357735,
            "unit": "ns/iter",
            "extra": "iterations: 90112\ncpu: 7762.667569247214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7901.159846303358,
            "unit": "ns/iter",
            "extra": "iterations: 89267\ncpu: 7900.986926859781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7748.084610627587,
            "unit": "ns/iter",
            "extra": "iterations: 90556\ncpu: 7747.806881929334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18002.267827294818,
            "unit": "ns/iter",
            "extra": "iterations: 38887\ncpu: 18001.7640856844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56181.96572984318,
            "unit": "ns/iter",
            "extra": "iterations: 12489\ncpu: 56182.11225878769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 45165.1055034088,
            "unit": "ns/iter",
            "extra": "iterations: 15554\ncpu: 45164.85148514823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 45057.55865814524,
            "unit": "ns/iter",
            "extra": "iterations: 15650\ncpu: 45055.62939297129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44504.34424142169,
            "unit": "ns/iter",
            "extra": "iterations: 15707\ncpu: 44502.654867256184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26288.8158181057,
            "unit": "ns/iter",
            "extra": "iterations: 26653\ncpu: 26288.076389149563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43821.55201658523,
            "unit": "ns/iter",
            "extra": "iterations: 15918\ncpu: 43820.115592411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1837.587486925551,
            "unit": "ns/iter",
            "extra": "iterations: 380514\ncpu: 1837.528711164364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9529.140683533054,
            "unit": "ns/iter",
            "extra": "iterations: 73676\ncpu: 9528.85742982788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7797.653647719645,
            "unit": "ns/iter",
            "extra": "iterations: 89741\ncpu: 7797.286635985757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7824.451155082832,
            "unit": "ns/iter",
            "extra": "iterations: 89907\ncpu: 7824.4719543529345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7646.904270234323,
            "unit": "ns/iter",
            "extra": "iterations: 92009\ncpu: 7646.691084567866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17548.540684468648,
            "unit": "ns/iter",
            "extra": "iterations: 39622\ncpu: 17547.925394982758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 55517.00395537938,
            "unit": "ns/iter",
            "extra": "iterations: 12641\ncpu: 55515.600031643575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 44507.25068292963,
            "unit": "ns/iter",
            "extra": "iterations: 15741\ncpu: 44505.61590750233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 44366.37844022032,
            "unit": "ns/iter",
            "extra": "iterations: 15733\ncpu: 44365.486556918884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 44002.884591237584,
            "unit": "ns/iter",
            "extra": "iterations: 15926\ncpu: 44002.25417556201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25713.739809957544,
            "unit": "ns/iter",
            "extra": "iterations: 27257\ncpu: 25713.20027882786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 43401.247128222545,
            "unit": "ns/iter",
            "extra": "iterations: 16105\ncpu: 43400.68301769597 ns\nthreads: 1"
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
          "id": "d50bb7d9db5207dc297814766d8c83b14fcc339b",
          "message": "More tests; More BMs; Separate BMs",
          "timestamp": "2023-12-12T14:29:05+03:00",
          "tree_id": "f44cff78a7d652bd003cb40812243c64e409e254",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d50bb7d9db5207dc297814766d8c83b14fcc339b"
        },
        "date": 1702381096837,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 569.1739711656506,
            "unit": "ns/iter",
            "extra": "iterations: 1237274\ncpu: 569.16762172324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5306.576530000484,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5306.3870000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10318.999975124025,
            "unit": "ns/iter",
            "extra": "iterations: 80399\ncpu: 10318.771377753454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15597.554902102549,
            "unit": "ns/iter",
            "extra": "iterations: 55262\ncpu: 15597.269371358258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20516.039083623575,
            "unit": "ns/iter",
            "extra": "iterations: 40682\ncpu: 20515.385182636048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25398.501033373203,
            "unit": "ns/iter",
            "extra": "iterations: 32902\ncpu: 25397.301075922434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30458.621428831615,
            "unit": "ns/iter",
            "extra": "iterations: 27477\ncpu: 30457.968482731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34894.19061386923,
            "unit": "ns/iter",
            "extra": "iterations: 23865\ncpu: 34893.027446050735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39783.89036052531,
            "unit": "ns/iter",
            "extra": "iterations: 20914\ncpu: 39783.06875776991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 583.5906433063501,
            "unit": "ns/iter",
            "extra": "iterations: 1299412\ncpu: 583.5127734698461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 409.6413950050998,
            "unit": "ns/iter",
            "extra": "iterations: 1707578\ncpu: 409.63382053411414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 414.7447017941629,
            "unit": "ns/iter",
            "extra": "iterations: 1693545\ncpu: 414.72821802786484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 419.42537616291764,
            "unit": "ns/iter",
            "extra": "iterations: 1682981\ncpu: 419.4107360689165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 893.4082253672444,
            "unit": "ns/iter",
            "extra": "iterations: 787053\ncpu: 893.396505699108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1519.8753207465984,
            "unit": "ns/iter",
            "extra": "iterations: 524947\ncpu: 1519.8029515360618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8405.520498194679,
            "unit": "ns/iter",
            "extra": "iterations: 97472\ncpu: 8405.357435981607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7259.997353592693,
            "unit": "ns/iter",
            "extra": "iterations: 111094\ncpu: 7259.850216933417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8766.752722298545,
            "unit": "ns/iter",
            "extra": "iterations: 93579\ncpu: 8766.521334914876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7733.020294871186,
            "unit": "ns/iter",
            "extra": "iterations: 105741\ncpu: 7732.987204584794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 26361.720904351634,
            "unit": "ns/iter",
            "extra": "iterations: 31448\ncpu: 26361.282116509767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 259706.63436652956,
            "unit": "ns/iter",
            "extra": "iterations: 3323\ncpu: 259702.22690340015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 205236.07990600224,
            "unit": "ns/iter",
            "extra": "iterations: 4255\ncpu: 205235.4406580492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 202776.75464596844,
            "unit": "ns/iter",
            "extra": "iterations: 4251\ncpu: 202770.6892495882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 203098.14756011884,
            "unit": "ns/iter",
            "extra": "iterations: 4283\ncpu: 203095.283679664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 103268.36594375747,
            "unit": "ns/iter",
            "extra": "iterations: 8392\ncpu: 103265.41944709234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 195197.87353471114,
            "unit": "ns/iter",
            "extra": "iterations: 4436\ncpu: 195193.84580703324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5639.684039999793,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5639.593000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26800.77633170054,
            "unit": "ns/iter",
            "extra": "iterations: 31426\ncpu: 26799.83134983775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21312.923767731027,
            "unit": "ns/iter",
            "extra": "iterations: 39196\ncpu: 21312.65435248494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22719.877105936408,
            "unit": "ns/iter",
            "extra": "iterations: 36682\ncpu: 22719.344637696933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21367.41496895244,
            "unit": "ns/iter",
            "extra": "iterations: 38974\ncpu: 21367.324370092912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 43186.57631061787,
            "unit": "ns/iter",
            "extra": "iterations: 19342\ncpu: 43185.57543170301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 283742.8524164775,
            "unit": "ns/iter",
            "extra": "iterations: 3083\ncpu: 283737.2688939358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 217536.3347436537,
            "unit": "ns/iter",
            "extra": "iterations: 4018\ncpu: 217533.92234942704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 216882.56035768005,
            "unit": "ns/iter",
            "extra": "iterations: 4026\ncpu: 216876.80079483494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 215845.71280277858,
            "unit": "ns/iter",
            "extra": "iterations: 4046\ncpu: 215838.7048937235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 111811.95572616844,
            "unit": "ns/iter",
            "extra": "iterations: 7815\ncpu: 111808.56046065252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 208989.1896345865,
            "unit": "ns/iter",
            "extra": "iterations: 4187\ncpu: 208983.4487700033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 849739.7758928469,
            "unit": "ns/iter",
            "extra": "iterations: 1120\ncpu: 849717.8571428574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 441536.82831770554,
            "unit": "ns/iter",
            "extra": "iterations: 2027\ncpu: 441530.19240256306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2323.7876171251,
            "unit": "ns/iter",
            "extra": "iterations: 342796\ncpu: 2323.7085613601225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8628.935739470262,
            "unit": "ns/iter",
            "extra": "iterations: 104372\ncpu: 8628.760587130597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8245.449314216177,
            "unit": "ns/iter",
            "extra": "iterations: 99594\ncpu: 8245.146293953418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7577.957574993095,
            "unit": "ns/iter",
            "extra": "iterations: 111043\ncpu: 7577.783381212644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7144.439351859875,
            "unit": "ns/iter",
            "extra": "iterations: 115222\ncpu: 7144.231136414916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 25457.30071807963,
            "unit": "ns/iter",
            "extra": "iterations: 33144\ncpu: 25456.164011585846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 270036.5399390171,
            "unit": "ns/iter",
            "extra": "iterations: 3280\ncpu: 270024.5121951214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 201256.61862477253,
            "unit": "ns/iter",
            "extra": "iterations: 4392\ncpu: 201251.09289617493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 199494.69187359736,
            "unit": "ns/iter",
            "extra": "iterations: 4430\ncpu: 199488.75846501216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 199145.60825667717,
            "unit": "ns/iter",
            "extra": "iterations: 4457\ncpu: 199141.79941664755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 98868.56640054494,
            "unit": "ns/iter",
            "extra": "iterations: 8893\ncpu: 98864.72506465776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 191782.5212305024,
            "unit": "ns/iter",
            "extra": "iterations: 4616\ncpu: 191778.35788561538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 180.43947124967096,
            "unit": "ns/iter",
            "extra": "iterations: 3883799\ncpu: 180.43462084417817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1453.5963185428964,
            "unit": "ns/iter",
            "extra": "iterations: 490295\ncpu: 1453.5673421103704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1157.516450578293,
            "unit": "ns/iter",
            "extra": "iterations: 672256\ncpu: 1155.2398193545323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1241.8433965601919,
            "unit": "ns/iter",
            "extra": "iterations: 565160\ncpu: 1241.79382829641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 871.9509519585797,
            "unit": "ns/iter",
            "extra": "iterations: 785801\ncpu: 871.9533316959412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8662.535821993226,
            "unit": "ns/iter",
            "extra": "iterations: 81570\ncpu: 8662.416329532936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12590.570687979298,
            "unit": "ns/iter",
            "extra": "iterations: 55554\ncpu: 12590.297728336482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2818.692026966873,
            "unit": "ns/iter",
            "extra": "iterations: 247710\ncpu: 2818.609260829201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2826.6202193951954,
            "unit": "ns/iter",
            "extra": "iterations: 247772\ncpu: 2826.5373004213357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2826.46345350339,
            "unit": "ns/iter",
            "extra": "iterations: 247233\ncpu: 2826.4313420943163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5105.3111594201355,
            "unit": "ns/iter",
            "extra": "iterations: 138000\ncpu: 5105.172463768122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5297.582105351414,
            "unit": "ns/iter",
            "extra": "iterations: 131313\ncpu: 5297.435897435863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1797.2987893976635,
            "unit": "ns/iter",
            "extra": "iterations: 386667\ncpu: 1797.271554076257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9736.888603089214,
            "unit": "ns/iter",
            "extra": "iterations: 71923\ncpu: 9736.917258734982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7762.769087357735,
            "unit": "ns/iter",
            "extra": "iterations: 90112\ncpu: 7762.667569247214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7901.159846303358,
            "unit": "ns/iter",
            "extra": "iterations: 89267\ncpu: 7900.986926859781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7748.084610627587,
            "unit": "ns/iter",
            "extra": "iterations: 90556\ncpu: 7747.806881929334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18002.267827294818,
            "unit": "ns/iter",
            "extra": "iterations: 38887\ncpu: 18001.7640856844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56181.96572984318,
            "unit": "ns/iter",
            "extra": "iterations: 12489\ncpu: 56182.11225878769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 45165.1055034088,
            "unit": "ns/iter",
            "extra": "iterations: 15554\ncpu: 45164.85148514823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 45057.55865814524,
            "unit": "ns/iter",
            "extra": "iterations: 15650\ncpu: 45055.62939297129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44504.34424142169,
            "unit": "ns/iter",
            "extra": "iterations: 15707\ncpu: 44502.654867256184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26288.8158181057,
            "unit": "ns/iter",
            "extra": "iterations: 26653\ncpu: 26288.076389149563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43821.55201658523,
            "unit": "ns/iter",
            "extra": "iterations: 15918\ncpu: 43820.115592411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1837.587486925551,
            "unit": "ns/iter",
            "extra": "iterations: 380514\ncpu: 1837.528711164364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9529.140683533054,
            "unit": "ns/iter",
            "extra": "iterations: 73676\ncpu: 9528.85742982788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7797.653647719645,
            "unit": "ns/iter",
            "extra": "iterations: 89741\ncpu: 7797.286635985757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7824.451155082832,
            "unit": "ns/iter",
            "extra": "iterations: 89907\ncpu: 7824.4719543529345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7646.904270234323,
            "unit": "ns/iter",
            "extra": "iterations: 92009\ncpu: 7646.691084567866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17548.540684468648,
            "unit": "ns/iter",
            "extra": "iterations: 39622\ncpu: 17547.925394982758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 55517.00395537938,
            "unit": "ns/iter",
            "extra": "iterations: 12641\ncpu: 55515.600031643575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 44507.25068292963,
            "unit": "ns/iter",
            "extra": "iterations: 15741\ncpu: 44505.61590750233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 44366.37844022032,
            "unit": "ns/iter",
            "extra": "iterations: 15733\ncpu: 44365.486556918884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 44002.884591237584,
            "unit": "ns/iter",
            "extra": "iterations: 15926\ncpu: 44002.25417556201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25713.739809957544,
            "unit": "ns/iter",
            "extra": "iterations: 27257\ncpu: 25713.20027882786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 43401.247128222545,
            "unit": "ns/iter",
            "extra": "iterations: 16105\ncpu: 43400.68301769597 ns\nthreads: 1"
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
        "date": 1702382273244,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 578.8083797260658,
            "unit": "ns/iter",
            "extra": "iterations: 1198464\ncpu: 578.7971937413222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5264.07034999977,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5264.036999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10384.876251994734,
            "unit": "ns/iter",
            "extra": "iterations: 79573\ncpu: 10384.844105412638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15495.555119704708,
            "unit": "ns/iter",
            "extra": "iterations: 54300\ncpu: 15494.972375690608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20162.045393986213,
            "unit": "ns/iter",
            "extra": "iterations: 42032\ncpu: 20161.553102398182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24958.749322657906,
            "unit": "ns/iter",
            "extra": "iterations: 33218\ncpu: 24957.769883797933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30153.07124370967,
            "unit": "ns/iter",
            "extra": "iterations: 27820\ncpu: 30152.559309849046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34847.98422462335,
            "unit": "ns/iter",
            "extra": "iterations: 23898\ncpu: 34847.17549585738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39969.18212745438,
            "unit": "ns/iter",
            "extra": "iterations: 20870\ncpu: 39967.57546717776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 533.3455942398255,
            "unit": "ns/iter",
            "extra": "iterations: 1306619\ncpu: 533.3475175242365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 398.88326972780277,
            "unit": "ns/iter",
            "extra": "iterations: 1734126\ncpu: 398.87857053063044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 405.88891292964394,
            "unit": "ns/iter",
            "extra": "iterations: 1737790\ncpu: 405.8820110600242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 400.7153111157708,
            "unit": "ns/iter",
            "extra": "iterations: 1745797\ncpu: 400.70242989305166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 878.0146523361868,
            "unit": "ns/iter",
            "extra": "iterations: 820347\ncpu: 877.9984567506194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1496.2340332634863,
            "unit": "ns/iter",
            "extra": "iterations: 522195\ncpu: 1496.197972021948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8194.837320197757,
            "unit": "ns/iter",
            "extra": "iterations: 101709\ncpu: 8194.795937429324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 6934.405540821934,
            "unit": "ns/iter",
            "extra": "iterations: 115759\ncpu: 6934.243557736332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8578.222285449328,
            "unit": "ns/iter",
            "extra": "iterations: 94896\ncpu: 8578.04754678809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7426.601020799183,
            "unit": "ns/iter",
            "extra": "iterations: 109522\ncpu: 7426.352696261959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 25778.69984781058,
            "unit": "ns/iter",
            "extra": "iterations: 32197\ncpu: 25777.671832779462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 255725.65904991745,
            "unit": "ns/iter",
            "extra": "iterations: 3326\ncpu: 255717.97955502133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 199935.90647481818,
            "unit": "ns/iter",
            "extra": "iterations: 4309\ncpu: 199931.67788349988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 202561.22391452745,
            "unit": "ns/iter",
            "extra": "iterations: 4399\ncpu: 202556.8765628547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 200624.92409997233,
            "unit": "ns/iter",
            "extra": "iterations: 4361\ncpu: 200619.94955285476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 103286.66382878127,
            "unit": "ns/iter",
            "extra": "iterations: 8457\ncpu: 103282.21591580931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 193706.39618032338,
            "unit": "ns/iter",
            "extra": "iterations: 4503\ncpu: 193704.39706862113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5648.548040000491,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5648.346999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26174.245806349038,
            "unit": "ns/iter",
            "extra": "iterations: 31655\ncpu: 26173.214342126113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 20718.77214439261,
            "unit": "ns/iter",
            "extra": "iterations: 40473\ncpu: 20717.53267610508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22682.433670638864,
            "unit": "ns/iter",
            "extra": "iterations: 37849\ncpu: 22681.94139871595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21444.658552227214,
            "unit": "ns/iter",
            "extra": "iterations: 38984\ncpu: 21444.41052739586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 44066.67411497594,
            "unit": "ns/iter",
            "extra": "iterations: 19378\ncpu: 44066.29167096697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 281781.8939197951,
            "unit": "ns/iter",
            "extra": "iterations: 3092\ncpu: 281773.2535575674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 217793.9639034069,
            "unit": "ns/iter",
            "extra": "iterations: 4017\ncpu: 217790.4157331333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 214024.8567876705,
            "unit": "ns/iter",
            "extra": "iterations: 4022\ncpu: 214020.63649925383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 212607.16176816454,
            "unit": "ns/iter",
            "extra": "iterations: 4253\ncpu: 212603.2212555841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 110429.3141537681,
            "unit": "ns/iter",
            "extra": "iterations: 8012\ncpu: 110426.17324013985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 206944.742441997,
            "unit": "ns/iter",
            "extra": "iterations: 4267\ncpu: 206939.84063744952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 832897.9155555519,
            "unit": "ns/iter",
            "extra": "iterations: 1125\ncpu: 832867.288888887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 446859.1606323091,
            "unit": "ns/iter",
            "extra": "iterations: 1961\ncpu: 446846.6598674133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2340.210734705557,
            "unit": "ns/iter",
            "extra": "iterations: 345254\ncpu: 2340.1347993071927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 7719.605842021483,
            "unit": "ns/iter",
            "extra": "iterations: 106470\ncpu: 7719.397013243162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8294.058572395825,
            "unit": "ns/iter",
            "extra": "iterations: 96035\ncpu: 8293.884521268252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7282.947009364462,
            "unit": "ns/iter",
            "extra": "iterations: 112869\ncpu: 7282.9005307037305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6982.885991878013,
            "unit": "ns/iter",
            "extra": "iterations: 115483\ncpu: 6982.742048613263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 25688.745474847183,
            "unit": "ns/iter",
            "extra": "iterations: 34032\ncpu: 25688.631288199478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 268196.13020991994,
            "unit": "ns/iter",
            "extra": "iterations: 3287\ncpu: 268188.22634621116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 200077.54404381948,
            "unit": "ns/iter",
            "extra": "iterations: 4382\ncpu: 200069.4203560016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 204811.8813483209,
            "unit": "ns/iter",
            "extra": "iterations: 4450\ncpu: 204804.60674157302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 197584.41506880167,
            "unit": "ns/iter",
            "extra": "iterations: 4433\ncpu: 197578.84051432429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 99084.31584304004,
            "unit": "ns/iter",
            "extra": "iterations: 8843\ncpu: 99081.37509894841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 193113.06373625624,
            "unit": "ns/iter",
            "extra": "iterations: 4550\ncpu: 193107.62637362655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 177.22179156752043,
            "unit": "ns/iter",
            "extra": "iterations: 3941286\ncpu: 177.21535559713374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1451.4824422671713,
            "unit": "ns/iter",
            "extra": "iterations: 476115\ncpu: 1451.3936758976324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1095.045845938727,
            "unit": "ns/iter",
            "extra": "iterations: 640602\ncpu: 1095.016250339518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1208.8977330587932,
            "unit": "ns/iter",
            "extra": "iterations: 583297\ncpu: 1208.8803816923446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 871.4057654395896,
            "unit": "ns/iter",
            "extra": "iterations: 806530\ncpu: 871.4076351778558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8620.404278311174,
            "unit": "ns/iter",
            "extra": "iterations: 81434\ncpu: 8620.130412358492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12820.945496935457,
            "unit": "ns/iter",
            "extra": "iterations: 54474\ncpu: 12820.591474831986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2896.204263406794,
            "unit": "ns/iter",
            "extra": "iterations: 241497\ncpu: 2896.072000894409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2923.4893955153907,
            "unit": "ns/iter",
            "extra": "iterations: 242256\ncpu: 2923.3975629086335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2882.263166591523,
            "unit": "ns/iter",
            "extra": "iterations: 242071\ncpu: 2882.111033539757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5123.275766171743,
            "unit": "ns/iter",
            "extra": "iterations: 143832\ncpu: 5123.2861950053075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5377.430986046345,
            "unit": "ns/iter",
            "extra": "iterations: 129213\ncpu: 5377.198114740805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1810.468271188384,
            "unit": "ns/iter",
            "extra": "iterations: 388070\ncpu: 1808.1397685984732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9751.490868889314,
            "unit": "ns/iter",
            "extra": "iterations: 71459\ncpu: 9750.973285380516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7812.330571424814,
            "unit": "ns/iter",
            "extra": "iterations: 89793\ncpu: 7812.04659605985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7905.65410605247,
            "unit": "ns/iter",
            "extra": "iterations: 89088\ncpu: 7905.66967492816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7769.073065248458,
            "unit": "ns/iter",
            "extra": "iterations: 89947\ncpu: 7768.778280542994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17694.653653348854,
            "unit": "ns/iter",
            "extra": "iterations: 39498\ncpu: 17694.111094232558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 57104.07973610946,
            "unit": "ns/iter",
            "extra": "iterations: 12278\ncpu: 57101.65336374051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 45336.49545925693,
            "unit": "ns/iter",
            "extra": "iterations: 15416\ncpu: 45334.710690191634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 45293.66002329097,
            "unit": "ns/iter",
            "extra": "iterations: 15454\ncpu: 45291.81441697952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 45294.61018482945,
            "unit": "ns/iter",
            "extra": "iterations: 15474\ncpu: 45294.035155745376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26480.096912294848,
            "unit": "ns/iter",
            "extra": "iterations: 26395\ncpu: 26479.70448948653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 44853.95176418165,
            "unit": "ns/iter",
            "extra": "iterations: 15673\ncpu: 44852.472404772394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1844.4893349136314,
            "unit": "ns/iter",
            "extra": "iterations: 379650\ncpu: 1844.465955485335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9465.801995073476,
            "unit": "ns/iter",
            "extra": "iterations: 73882\ncpu: 9465.668227714466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7849.544662382074,
            "unit": "ns/iter",
            "extra": "iterations: 89628\ncpu: 7849.428749944196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7953.9660257127725,
            "unit": "ns/iter",
            "extra": "iterations: 87890\ncpu: 7953.8320628057145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7846.738592238303,
            "unit": "ns/iter",
            "extra": "iterations: 89106\ncpu: 7846.655668529736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17562.216991876758,
            "unit": "ns/iter",
            "extra": "iterations: 39513\ncpu: 17561.54683268786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 55960.97101913325,
            "unit": "ns/iter",
            "extra": "iterations: 12491\ncpu: 55960.03522536139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 45294.830627357514,
            "unit": "ns/iter",
            "extra": "iterations: 15398\ncpu: 45294.51227432092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 44904.408904023854,
            "unit": "ns/iter",
            "extra": "iterations: 15566\ncpu: 44903.88667608882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 44961.51239828425,
            "unit": "ns/iter",
            "extra": "iterations: 15607\ncpu: 44960.395976164655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25645.35004611707,
            "unit": "ns/iter",
            "extra": "iterations: 27105\ncpu: 25644.844124699783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 43217.558617700146,
            "unit": "ns/iter",
            "extra": "iterations: 16147\ncpu: 43217.278751471065 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}