window.BENCHMARK_DATA = {
  "lastUpdate": 1702391743554,
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
        "date": 1702387060570,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 566.6072815248826,
            "unit": "ns/iter",
            "extra": "iterations: 1241663\ncpu: 566.5933510139225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5272.63210000001,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5272.394999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10234.533455737655,
            "unit": "ns/iter",
            "extra": "iterations: 81152\ncpu: 10234.402109621451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15432.766762124917,
            "unit": "ns/iter",
            "extra": "iterations: 54125\ncpu: 15432.129330254042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20378.20071301997,
            "unit": "ns/iter",
            "extra": "iterations: 41233\ncpu: 20378.180098464814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25229.23343332376,
            "unit": "ns/iter",
            "extra": "iterations: 33003\ncpu: 25227.81868315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29946.589002629138,
            "unit": "ns/iter",
            "extra": "iterations: 28134\ncpu: 29946.182554915755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34444.73810610187,
            "unit": "ns/iter",
            "extra": "iterations: 24109\ncpu: 34442.97150441746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 40120.33365251007,
            "unit": "ns/iter",
            "extra": "iterations: 20887\ncpu: 40119.361325226266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 535.5239099767621,
            "unit": "ns/iter",
            "extra": "iterations: 1302197\ncpu: 535.5084522541518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 409.2576590258993,
            "unit": "ns/iter",
            "extra": "iterations: 1715884\ncpu: 409.25318960955366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 411.48681914183777,
            "unit": "ns/iter",
            "extra": "iterations: 1701217\ncpu: 411.4848370313723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 412.5249008446294,
            "unit": "ns/iter",
            "extra": "iterations: 1700866\ncpu: 412.5133314440999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 888.2839926099089,
            "unit": "ns/iter",
            "extra": "iterations: 783207\ncpu: 888.2170358538689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1510.963653071696,
            "unit": "ns/iter",
            "extra": "iterations: 523428\ncpu: 1510.8555522440527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8195.048478400066,
            "unit": "ns/iter",
            "extra": "iterations: 96806\ncpu: 8194.441460240068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7148.787539950389,
            "unit": "ns/iter",
            "extra": "iterations: 112953\ncpu: 7148.482112028902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8767.356565894735,
            "unit": "ns/iter",
            "extra": "iterations: 93346\ncpu: 8767.077325220138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7773.773760321184,
            "unit": "ns/iter",
            "extra": "iterations: 104765\ncpu: 7773.546508853124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 26295.80891760137,
            "unit": "ns/iter",
            "extra": "iterations: 31578\ncpu: 26294.876179618786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 267873.84234929853,
            "unit": "ns/iter",
            "extra": "iterations: 3235\ncpu: 267858.91808346234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 203467.12105632148,
            "unit": "ns/iter",
            "extra": "iterations: 4279\ncpu: 203451.46062164078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 203175.2072972368,
            "unit": "ns/iter",
            "extra": "iterations: 4303\ncpu: 203163.5370671627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 203462.2468472574,
            "unit": "ns/iter",
            "extra": "iterations: 4282\ncpu: 203451.02755721612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 103410.58741092685,
            "unit": "ns/iter",
            "extra": "iterations: 8420\ncpu: 103409.41805225646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 195975.35949481436,
            "unit": "ns/iter",
            "extra": "iterations: 4434\ncpu: 195966.03518267936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5688.375510000014,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5688.333999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26354.602315876677,
            "unit": "ns/iter",
            "extra": "iterations: 31867\ncpu: 26353.760943923226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21330.91919607373,
            "unit": "ns/iter",
            "extra": "iterations: 38909\ncpu: 21330.17296769385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 23235.68241261217,
            "unit": "ns/iter",
            "extra": "iterations: 36475\ncpu: 23235.114461960213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21687.223923370006,
            "unit": "ns/iter",
            "extra": "iterations: 38732\ncpu: 21686.014148507737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 43764.66371542384,
            "unit": "ns/iter",
            "extra": "iterations: 19088\ncpu: 43762.20138306776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 282667.6193590589,
            "unit": "ns/iter",
            "extra": "iterations: 3058\ncpu: 282647.0568999336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 218437.61654513542,
            "unit": "ns/iter",
            "extra": "iterations: 3977\ncpu: 218429.11742519558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 218209.0900744502,
            "unit": "ns/iter",
            "extra": "iterations: 4030\ncpu: 218194.5657568251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 215860.7526054555,
            "unit": "ns/iter",
            "extra": "iterations: 4030\ncpu: 215852.40694789053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 112379.81854321716,
            "unit": "ns/iter",
            "extra": "iterations: 7798\ncpu: 112372.81354193333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 207955.98586149854,
            "unit": "ns/iter",
            "extra": "iterations: 4173\ncpu: 207947.6635514015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 837843.4770723182,
            "unit": "ns/iter",
            "extra": "iterations: 1134\ncpu: 837784.1269841272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 452742.4840370798,
            "unit": "ns/iter",
            "extra": "iterations: 1942\ncpu: 452732.33779608953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2347.102394565376,
            "unit": "ns/iter",
            "extra": "iterations: 342108\ncpu: 2347.030762215454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8048.143027218728,
            "unit": "ns/iter",
            "extra": "iterations: 104155\ncpu: 8047.875762085329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8464.81314130724,
            "unit": "ns/iter",
            "extra": "iterations: 98042\ncpu: 8464.398931070311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7658.143983985401,
            "unit": "ns/iter",
            "extra": "iterations: 108901\ncpu: 7657.836934463464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7034.419381425724,
            "unit": "ns/iter",
            "extra": "iterations: 117690\ncpu: 7034.035177160338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 25394.649721831167,
            "unit": "ns/iter",
            "extra": "iterations: 32714\ncpu: 25393.663263434522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 269908.7484737533,
            "unit": "ns/iter",
            "extra": "iterations: 3276\ncpu: 269738.5531135523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 200088.737198287,
            "unit": "ns/iter",
            "extra": "iterations: 4433\ncpu: 200083.75817730636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 200250.29876542892,
            "unit": "ns/iter",
            "extra": "iterations: 4455\ncpu: 200244.8484848481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 198822.61015433405,
            "unit": "ns/iter",
            "extra": "iterations: 4471\ncpu: 198818.07201968177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 99930.97825594997,
            "unit": "ns/iter",
            "extra": "iterations: 8830\ncpu: 99927.46319365795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 193473.13556722735,
            "unit": "ns/iter",
            "extra": "iterations: 4566\ncpu: 193466.64476565886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 178.14084618181712,
            "unit": "ns/iter",
            "extra": "iterations: 3941257\ncpu: 178.13679747349656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1426.605813643082,
            "unit": "ns/iter",
            "extra": "iterations: 490811\ncpu: 1426.5682716972503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1141.8663872639725,
            "unit": "ns/iter",
            "extra": "iterations: 611304\ncpu: 1141.8099668904567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1200.6742958956938,
            "unit": "ns/iter",
            "extra": "iterations: 582016\ncpu: 1200.6374395205592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 862.9232265461733,
            "unit": "ns/iter",
            "extra": "iterations: 818981\ncpu: 862.8756955289547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8403.592872818868,
            "unit": "ns/iter",
            "extra": "iterations: 82473\ncpu: 8403.373225176658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12639.513213244807,
            "unit": "ns/iter",
            "extra": "iterations: 55626\ncpu: 12639.422212634356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2835.721877663615,
            "unit": "ns/iter",
            "extra": "iterations: 246370\ncpu: 2835.654503389214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2872.0760277181853,
            "unit": "ns/iter",
            "extra": "iterations: 243306\ncpu: 2872.038091950073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2889.4381071248163,
            "unit": "ns/iter",
            "extra": "iterations: 243566\ncpu: 2889.3938398627133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5074.632097861173,
            "unit": "ns/iter",
            "extra": "iterations: 136520\ncpu: 5074.441840023418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5295.831278744404,
            "unit": "ns/iter",
            "extra": "iterations: 131981\ncpu: 5295.706200134861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1814.9959735925559,
            "unit": "ns/iter",
            "extra": "iterations: 385952\ncpu: 1814.9575594892729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9654.052310495194,
            "unit": "ns/iter",
            "extra": "iterations: 72452\ncpu: 9654.005410478674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7726.247481760765,
            "unit": "ns/iter",
            "extra": "iterations: 90738\ncpu: 7725.85906676371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7755.837464014839,
            "unit": "ns/iter",
            "extra": "iterations: 90663\ncpu: 7755.80556566619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7805.706343581347,
            "unit": "ns/iter",
            "extra": "iterations: 90296\ncpu: 7805.493045096185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17709.3382509782,
            "unit": "ns/iter",
            "extra": "iterations: 39382\ncpu: 17708.910162003212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56457.432983826955,
            "unit": "ns/iter",
            "extra": "iterations: 12303\ncpu: 56457.7013736491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44675.35621521226,
            "unit": "ns/iter",
            "extra": "iterations: 15631\ncpu: 44674.44181434359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44943.95327942591,
            "unit": "ns/iter",
            "extra": "iterations: 15582\ncpu: 44943.71069182391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44409.15608800314,
            "unit": "ns/iter",
            "extra": "iterations: 15818\ncpu: 44408.958148944585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26160.43365901,
            "unit": "ns/iter",
            "extra": "iterations: 26816\ncpu: 26159.62857995222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 44563.517630731854,
            "unit": "ns/iter",
            "extra": "iterations: 15853\ncpu: 44563.338169432216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1829.5129449375765,
            "unit": "ns/iter",
            "extra": "iterations: 384127\ncpu: 1829.463172336251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9528.469717544407,
            "unit": "ns/iter",
            "extra": "iterations: 73640\ncpu: 9528.352797392774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7638.516895626655,
            "unit": "ns/iter",
            "extra": "iterations: 91355\ncpu: 7638.544140988583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7643.974124743618,
            "unit": "ns/iter",
            "extra": "iterations: 92173\ncpu: 7643.708027296494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7650.905666976167,
            "unit": "ns/iter",
            "extra": "iterations: 91495\ncpu: 7650.870539373688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17602.134490840795,
            "unit": "ns/iter",
            "extra": "iterations: 39683\ncpu: 17601.55986190559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 55827.17425021698,
            "unit": "ns/iter",
            "extra": "iterations: 12637\ncpu: 55826.95259951037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 45295.53732113127,
            "unit": "ns/iter",
            "extra": "iterations: 15514\ncpu: 45294.198788191075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 45088.00313740704,
            "unit": "ns/iter",
            "extra": "iterations: 15618\ncpu: 45087.7705211937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 44976.651928745276,
            "unit": "ns/iter",
            "extra": "iterations: 15606\ncpu: 44975.07368960658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25915.422958825653,
            "unit": "ns/iter",
            "extra": "iterations: 27031\ncpu: 25915.519218674744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 44066.09620125086,
            "unit": "ns/iter",
            "extra": "iterations: 15821\ncpu: 44064.97060868431 ns\nthreads: 1"
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
        "date": 1702388098321,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 575.4671380376511,
            "unit": "ns/iter",
            "extra": "iterations: 1218856\ncpu: 575.451406893021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5286.120439999991,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5285.6539999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10199.059378248594,
            "unit": "ns/iter",
            "extra": "iterations: 80804\ncpu: 10198.683233503294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15517.181433521551,
            "unit": "ns/iter",
            "extra": "iterations: 54830\ncpu: 15516.658763450663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20546.600459410096,
            "unit": "ns/iter",
            "extra": "iterations: 40922\ncpu: 20545.447436586677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25464.123549530766,
            "unit": "ns/iter",
            "extra": "iterations: 32748\ncpu: 25463.267985831186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30610.221230980544,
            "unit": "ns/iter",
            "extra": "iterations: 27799\ncpu: 30607.906759235942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34654.65628613748,
            "unit": "ns/iter",
            "extra": "iterations: 24212\ncpu: 34652.46984966133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39138.04734145109,
            "unit": "ns/iter",
            "extra": "iterations: 21271\ncpu: 39135.72939683136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 542.7231593326713,
            "unit": "ns/iter",
            "extra": "iterations: 1273003\ncpu: 542.6921224851789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 405.047852322751,
            "unit": "ns/iter",
            "extra": "iterations: 1734106\ncpu: 405.0181476795543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 411.2935592319624,
            "unit": "ns/iter",
            "extra": "iterations: 1700822\ncpu: 411.28724816588675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 406.88933578325197,
            "unit": "ns/iter",
            "extra": "iterations: 1728472\ncpu: 406.8758996385253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 892.825987779947,
            "unit": "ns/iter",
            "extra": "iterations: 784284\ncpu: 892.8241555354939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1522.994579053267,
            "unit": "ns/iter",
            "extra": "iterations: 528321\ncpu: 1522.9055820230521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8071.002050416485,
            "unit": "ns/iter",
            "extra": "iterations: 99492\ncpu: 8070.625778957104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7192.892645181167,
            "unit": "ns/iter",
            "extra": "iterations: 115924\ncpu: 7192.437286498048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8894.638892190722,
            "unit": "ns/iter",
            "extra": "iterations: 92543\ncpu: 8894.293463579099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7666.460242335905,
            "unit": "ns/iter",
            "extra": "iterations: 107124\ncpu: 7666.133639520581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 26356.083702530683,
            "unit": "ns/iter",
            "extra": "iterations: 31600\ncpu: 26354.83544303795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 260512.98799880478,
            "unit": "ns/iter",
            "extra": "iterations: 3333\ncpu: 260500.78007800775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 201593.61017341467,
            "unit": "ns/iter",
            "extra": "iterations: 4325\ncpu: 201584.5086705206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 202264.08723897662,
            "unit": "ns/iter",
            "extra": "iterations: 4310\ncpu: 202250.9280742452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 201710.07702951797,
            "unit": "ns/iter",
            "extra": "iterations: 4336\ncpu: 201698.24723247276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 102956.66992463569,
            "unit": "ns/iter",
            "extra": "iterations: 8492\ncpu: 102950.94206311819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 194428.22952989562,
            "unit": "ns/iter",
            "extra": "iterations: 4531\ncpu: 194418.4506731406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5660.129319999783,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5660.036999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26385.927320435338,
            "unit": "ns/iter",
            "extra": "iterations: 31632\ncpu: 26385.868740515914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21631.800467794168,
            "unit": "ns/iter",
            "extra": "iterations: 38906\ncpu: 21631.75345705036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 23374.27231715696,
            "unit": "ns/iter",
            "extra": "iterations: 36575\ncpu: 23374.24470266575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21625.952531726536,
            "unit": "ns/iter",
            "extra": "iterations: 38847\ncpu: 21625.754884547136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 43993.14747592376,
            "unit": "ns/iter",
            "extra": "iterations: 18898\ncpu: 43992.74526404911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 285155.5234374969,
            "unit": "ns/iter",
            "extra": "iterations: 3072\ncpu: 285151.43229166744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 219562.21780925742,
            "unit": "ns/iter",
            "extra": "iterations: 3953\ncpu: 219561.90235264393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 217434.12521868417,
            "unit": "ns/iter",
            "extra": "iterations: 4001\ncpu: 217429.04273931595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 215759.09770113716,
            "unit": "ns/iter",
            "extra": "iterations: 4002\ncpu: 215758.7706146915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 112174.2160327807,
            "unit": "ns/iter",
            "extra": "iterations: 7809\ncpu: 112172.40363682885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 209038.8813035102,
            "unit": "ns/iter",
            "extra": "iterations: 4204\ncpu: 209035.82302568934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 836868.3153710566,
            "unit": "ns/iter",
            "extra": "iterations: 1132\ncpu: 836806.8021201396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 453280.22569088987,
            "unit": "ns/iter",
            "extra": "iterations: 1954\ncpu: 453259.3654042977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2333.4181980343938,
            "unit": "ns/iter",
            "extra": "iterations: 345334\ncpu: 2333.299066990203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8342.74888088143,
            "unit": "ns/iter",
            "extra": "iterations: 98515\ncpu: 8342.551895650395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8390.5951621997,
            "unit": "ns/iter",
            "extra": "iterations: 97565\ncpu: 8390.475067903446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7708.124095313744,
            "unit": "ns/iter",
            "extra": "iterations: 106805\ncpu: 7708.062356631245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7115.5019103581935,
            "unit": "ns/iter",
            "extra": "iterations: 113853\ncpu: 7115.491906229954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 25585.611913466306,
            "unit": "ns/iter",
            "extra": "iterations: 32820\ncpu: 25585.307739183467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 280348.9321338486,
            "unit": "ns/iter",
            "extra": "iterations: 3168\ncpu: 280343.7184343428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 206865.70776043925,
            "unit": "ns/iter",
            "extra": "iterations: 4291\ncpu: 206862.36308552817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 207993.91539005467,
            "unit": "ns/iter",
            "extra": "iterations: 4243\ncpu: 207991.37402781087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 204082.2585684333,
            "unit": "ns/iter",
            "extra": "iterations: 4289\ncpu: 204079.8088132442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 100430.39568181847,
            "unit": "ns/iter",
            "extra": "iterations: 8800\ncpu: 100430.24999999952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 199040.92373646068,
            "unit": "ns/iter",
            "extra": "iterations: 4432\ncpu: 199037.2743682307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 180.02494918022242,
            "unit": "ns/iter",
            "extra": "iterations: 3890709\ncpu: 180.0247975369012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1455.944538689751,
            "unit": "ns/iter",
            "extra": "iterations: 480425\ncpu: 1455.9417182702673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1087.0373124706205,
            "unit": "ns/iter",
            "extra": "iterations: 643699\ncpu: 1087.0220398043148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1231.3403434436698,
            "unit": "ns/iter",
            "extra": "iterations: 567371\ncpu: 1231.32518228813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 891.7054892179821,
            "unit": "ns/iter",
            "extra": "iterations: 769381\ncpu: 891.6955318626286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8785.10275479753,
            "unit": "ns/iter",
            "extra": "iterations: 81349\ncpu: 8785.08770851509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12847.313289641945,
            "unit": "ns/iter",
            "extra": "iterations: 54930\ncpu: 12847.072637902796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2882.098244005573,
            "unit": "ns/iter",
            "extra": "iterations: 242142\ncpu: 2882.067960122565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2870.556347345114,
            "unit": "ns/iter",
            "extra": "iterations: 242629\ncpu: 2870.4973436810924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2882.3112112662293,
            "unit": "ns/iter",
            "extra": "iterations: 243844\ncpu: 2882.2788340086254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5081.516066662031,
            "unit": "ns/iter",
            "extra": "iterations: 138610\ncpu: 5081.353437702903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5325.8777931792765,
            "unit": "ns/iter",
            "extra": "iterations: 131302\ncpu: 5325.684300315289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1805.1788688433414,
            "unit": "ns/iter",
            "extra": "iterations: 386065\ncpu: 1805.088003315507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9715.56703830168,
            "unit": "ns/iter",
            "extra": "iterations: 72921\ncpu: 9715.124586881775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7753.497719371851,
            "unit": "ns/iter",
            "extra": "iterations: 90326\ncpu: 7752.908354183737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7743.537458201427,
            "unit": "ns/iter",
            "extra": "iterations: 90314\ncpu: 7743.152778085422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7677.919523149139,
            "unit": "ns/iter",
            "extra": "iterations: 91517\ncpu: 7677.579029032876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17704.520984265182,
            "unit": "ns/iter",
            "extra": "iterations: 39339\ncpu: 17704.1866849692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56957.94023904358,
            "unit": "ns/iter",
            "extra": "iterations: 12299\ncpu: 56955.05325636266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 45141.52933582775,
            "unit": "ns/iter",
            "extra": "iterations: 15493\ncpu: 45140.45698057124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 45091.78340185009,
            "unit": "ns/iter",
            "extra": "iterations: 15568\ncpu: 45090.12076053392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 45007.96578846272,
            "unit": "ns/iter",
            "extra": "iterations: 15638\ncpu: 45005.76800102337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26451.778554335233,
            "unit": "ns/iter",
            "extra": "iterations: 26327\ncpu: 26450.013294337026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 44514.91245705737,
            "unit": "ns/iter",
            "extra": "iterations: 15718\ncpu: 44512.584298257134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1828.9293798062893,
            "unit": "ns/iter",
            "extra": "iterations: 381010\ncpu: 1828.7916327655546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9585.684208374154,
            "unit": "ns/iter",
            "extra": "iterations: 73368\ncpu: 9585.120215897934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7688.21575630526,
            "unit": "ns/iter",
            "extra": "iterations: 91557\ncpu: 7688.010747403114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7757.1075875292545,
            "unit": "ns/iter",
            "extra": "iterations: 89713\ncpu: 7756.703041922462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7888.293639385485,
            "unit": "ns/iter",
            "extra": "iterations: 89048\ncpu: 7887.924490162691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17725.419601799476,
            "unit": "ns/iter",
            "extra": "iterations: 39578\ncpu: 17724.22810652403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 55790.49058991052,
            "unit": "ns/iter",
            "extra": "iterations: 12646\ncpu: 55787.45057725737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 45627.067186992135,
            "unit": "ns/iter",
            "extra": "iterations: 15375\ncpu: 45624.12357723603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 45364.61515754769,
            "unit": "ns/iter",
            "extra": "iterations: 15583\ncpu: 45362.65160752099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 44948.97223116854,
            "unit": "ns/iter",
            "extra": "iterations: 15521\ncpu: 44945.873332903924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25546.217929866507,
            "unit": "ns/iter",
            "extra": "iterations: 27206\ncpu: 25544.879805925237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 44637.28224322365,
            "unit": "ns/iter",
            "extra": "iterations: 15763\ncpu: 44636.48417179484 ns\nthreads: 1"
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
          "id": "89047ca37b911c271e1749e8de13632f782d585c",
          "message": "cmt clang 15 build",
          "timestamp": "2023-12-12T16:57:18+03:00",
          "tree_id": "2f2c9ed08ef5734141953c56ba19061c15b85598",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/89047ca37b911c271e1749e8de13632f782d585c"
        },
        "date": 1702391147387,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 567.9268367663099,
            "unit": "ns/iter",
            "extra": "iterations: 1229593\ncpu: 567.91515566533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5325.834820000068,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5325.907999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10334.276738483699,
            "unit": "ns/iter",
            "extra": "iterations: 80343\ncpu: 10334.297947549883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15408.542228986526,
            "unit": "ns/iter",
            "extra": "iterations: 54536\ncpu: 15408.50630776001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20483.343184574245,
            "unit": "ns/iter",
            "extra": "iterations: 40401\ncpu: 20482.824682557366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25650.78190590225,
            "unit": "ns/iter",
            "extra": "iterations: 32541\ncpu: 25650.55161181278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30299.93937840726,
            "unit": "ns/iter",
            "extra": "iterations: 27317\ncpu: 30298.883479152206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35195.95809266825,
            "unit": "ns/iter",
            "extra": "iterations: 23719\ncpu: 35194.67515493909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 40148.22119948221,
            "unit": "ns/iter",
            "extra": "iterations: 20859\ncpu: 40147.00129440532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 536.9465731576254,
            "unit": "ns/iter",
            "extra": "iterations: 1310390\ncpu: 536.9225192499936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 407.29319592292563,
            "unit": "ns/iter",
            "extra": "iterations: 1716221\ncpu: 407.2822789139632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 408.3902375024678,
            "unit": "ns/iter",
            "extra": "iterations: 1711140\ncpu: 408.37015089355606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 404.6544348366424,
            "unit": "ns/iter",
            "extra": "iterations: 1722555\ncpu: 404.64292867281466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 893.7708130263403,
            "unit": "ns/iter",
            "extra": "iterations: 790983\ncpu: 893.7384242139198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1503.7960012954554,
            "unit": "ns/iter",
            "extra": "iterations: 524920\ncpu: 1503.7548578831058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8320.184898978621,
            "unit": "ns/iter",
            "extra": "iterations: 97702\ncpu: 8319.658758264924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7219.249518722087,
            "unit": "ns/iter",
            "extra": "iterations: 115318\ncpu: 7218.902513050875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8978.673873932183,
            "unit": "ns/iter",
            "extra": "iterations: 92268\ncpu: 8978.63181167904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7595.506527726418,
            "unit": "ns/iter",
            "extra": "iterations: 108920\ncpu: 7595.5132207124225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 26224.02444134137,
            "unit": "ns/iter",
            "extra": "iterations: 31504\ncpu: 26223.733494159445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 263080.91150711355,
            "unit": "ns/iter",
            "extra": "iterations: 3311\ncpu: 263067.13983690727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 209797.37658304494,
            "unit": "ns/iter",
            "extra": "iterations: 4185\ncpu: 209790.56152927194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 208626.13016479497,
            "unit": "ns/iter",
            "extra": "iterations: 4187\ncpu: 208618.7723907337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 208728.27181207793,
            "unit": "ns/iter",
            "extra": "iterations: 4172\ncpu: 208727.34899328885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 105664.50308008032,
            "unit": "ns/iter",
            "extra": "iterations: 8279\ncpu: 105663.17188066196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 199918.2800091252,
            "unit": "ns/iter",
            "extra": "iterations: 4382\ncpu: 199912.36878137835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5577.3029300002,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5577.11300000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25961.88030684178,
            "unit": "ns/iter",
            "extra": "iterations: 32199\ncpu: 25961.616820398147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21002.834947072948,
            "unit": "ns/iter",
            "extra": "iterations: 39866\ncpu: 21002.016756133064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22587.499537917105,
            "unit": "ns/iter",
            "extra": "iterations: 36790\ncpu: 22587.276433813582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21583.673779784604,
            "unit": "ns/iter",
            "extra": "iterations: 38989\ncpu: 21582.964425863713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 43880.388938827164,
            "unit": "ns/iter",
            "extra": "iterations: 18913\ncpu: 43878.660180828054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 285416.4687602274,
            "unit": "ns/iter",
            "extra": "iterations: 3057\ncpu: 285416.8792934243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 220155.81919190756,
            "unit": "ns/iter",
            "extra": "iterations: 3960\ncpu: 220150.63131313006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 219414.78907435577,
            "unit": "ns/iter",
            "extra": "iterations: 3954\ncpu: 219413.55589276613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 218572.61761761573,
            "unit": "ns/iter",
            "extra": "iterations: 3996\ncpu: 218565.64064063935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 114571.52674843944,
            "unit": "ns/iter",
            "extra": "iterations: 7664\ncpu: 114385.84290187966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 210599.53672727605,
            "unit": "ns/iter",
            "extra": "iterations: 4125\ncpu: 210589.96363636464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 841390.3014440062,
            "unit": "ns/iter",
            "extra": "iterations: 1108\ncpu: 841370.1263537899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 449805.27789148985,
            "unit": "ns/iter",
            "extra": "iterations: 1954\ncpu: 449779.4779938602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2302.921317779403,
            "unit": "ns/iter",
            "extra": "iterations: 348465\ncpu: 2302.949507124098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 7987.453868831723,
            "unit": "ns/iter",
            "extra": "iterations: 103455\ncpu: 7987.1142042433785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8286.244181825325,
            "unit": "ns/iter",
            "extra": "iterations: 99172\ncpu: 8285.924454483129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7490.941766640189,
            "unit": "ns/iter",
            "extra": "iterations: 112530\ncpu: 7490.664711632474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7072.109357403869,
            "unit": "ns/iter",
            "extra": "iterations: 116325\ncpu: 7071.910595314848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 25416.666626381735,
            "unit": "ns/iter",
            "extra": "iterations: 33098\ncpu: 25415.251676838525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 271085.94504145335,
            "unit": "ns/iter",
            "extra": "iterations: 3257\ncpu: 271076.5428308255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 203738.61897030965,
            "unit": "ns/iter",
            "extra": "iterations: 4312\ncpu: 203734.0677179971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 204521.0057471242,
            "unit": "ns/iter",
            "extra": "iterations: 4350\ncpu: 204519.26436781595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 202969.8180147023,
            "unit": "ns/iter",
            "extra": "iterations: 4352\ncpu: 202970.3814338241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 101728.98469561066,
            "unit": "ns/iter",
            "extra": "iterations: 8821\ncpu: 101725.7567169254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 192531.02219781195,
            "unit": "ns/iter",
            "extra": "iterations: 4550\ncpu: 192527.2527472528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 179.98071951749404,
            "unit": "ns/iter",
            "extra": "iterations: 3900058\ncpu: 179.98188744885468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1428.47284750638,
            "unit": "ns/iter",
            "extra": "iterations: 489955\ncpu: 1428.4671041218012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1143.440568367158,
            "unit": "ns/iter",
            "extra": "iterations: 608691\ncpu: 1143.436160547805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1272.995721056209,
            "unit": "ns/iter",
            "extra": "iterations: 545228\ncpu: 1272.9304070957435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 879.9830253610239,
            "unit": "ns/iter",
            "extra": "iterations: 797366\ncpu: 879.9840976414847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8695.211012350632,
            "unit": "ns/iter",
            "extra": "iterations: 80891\ncpu: 8695.310974026768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12713.098744678284,
            "unit": "ns/iter",
            "extra": "iterations: 54727\ncpu: 12713.253056078356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2866.009935493038,
            "unit": "ns/iter",
            "extra": "iterations: 244779\ncpu: 2865.9737967717842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2839.535364271522,
            "unit": "ns/iter",
            "extra": "iterations: 247439\ncpu: 2839.5337840841667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2812.101817160684,
            "unit": "ns/iter",
            "extra": "iterations: 249290\ncpu: 2812.137269846366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5114.163977748977,
            "unit": "ns/iter",
            "extra": "iterations: 136982\ncpu: 5114.077762041725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5309.341026343403,
            "unit": "ns/iter",
            "extra": "iterations: 131418\ncpu: 5309.200413946336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1809.813254489886,
            "unit": "ns/iter",
            "extra": "iterations: 387265\ncpu: 1809.7788336152137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9677.005571839436,
            "unit": "ns/iter",
            "extra": "iterations: 72328\ncpu: 9676.943922132405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7798.829837116567,
            "unit": "ns/iter",
            "extra": "iterations: 89573\ncpu: 7798.81772409103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7888.130874399495,
            "unit": "ns/iter",
            "extra": "iterations: 89307\ncpu: 7887.974066982458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7674.423618129174,
            "unit": "ns/iter",
            "extra": "iterations: 90041\ncpu: 7673.920769427253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17918.784910282735,
            "unit": "ns/iter",
            "extra": "iterations: 39179\ncpu: 17917.51703718828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56149.2078036965,
            "unit": "ns/iter",
            "extra": "iterations: 12430\ncpu: 56146.58889782843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 45398.44353116322,
            "unit": "ns/iter",
            "extra": "iterations: 15451\ncpu: 45396.46624813889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 45099.38538783113,
            "unit": "ns/iter",
            "extra": "iterations: 15535\ncpu: 45097.734148696116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44750.07437804321,
            "unit": "ns/iter",
            "extra": "iterations: 15596\ncpu: 44746.41574762768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26464.60007601685,
            "unit": "ns/iter",
            "extra": "iterations: 26310\ncpu: 26463.68301026212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 44480.28037264882,
            "unit": "ns/iter",
            "extra": "iterations: 15779\ncpu: 44479.9987324925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1827.5818277573899,
            "unit": "ns/iter",
            "extra": "iterations: 379755\ncpu: 1827.5638240444302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9472.462707670256,
            "unit": "ns/iter",
            "extra": "iterations: 73554\ncpu: 9471.828860428977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7674.858210343741,
            "unit": "ns/iter",
            "extra": "iterations: 91403\ncpu: 7674.663851295872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7688.300624236458,
            "unit": "ns/iter",
            "extra": "iterations: 90831\ncpu: 7688.083363609361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7759.312437854888,
            "unit": "ns/iter",
            "extra": "iterations: 90514\ncpu: 7759.334467596161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17723.421673929428,
            "unit": "ns/iter",
            "extra": "iterations: 39476\ncpu: 17723.310365792087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 56101.63609945479,
            "unit": "ns/iter",
            "extra": "iterations: 12388\ncpu: 56097.626735550584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 45312.32970168524,
            "unit": "ns/iter",
            "extra": "iterations: 15420\ncpu: 45312.853437094745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 45193.13977235891,
            "unit": "ns/iter",
            "extra": "iterations: 15375\ncpu: 45192.93658536595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 45009.00419679983,
            "unit": "ns/iter",
            "extra": "iterations: 15488\ncpu: 45006.34684917321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26202.24026700355,
            "unit": "ns/iter",
            "extra": "iterations: 26816\ncpu: 26201.137380668126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 44163.44611797397,
            "unit": "ns/iter",
            "extra": "iterations: 15868\ncpu: 44161.091504915974 ns\nthreads: 1"
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
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702391742337,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 564.8755790128715,
            "unit": "ns/iter",
            "extra": "iterations: 1227952\ncpu: 564.8272082296377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5262.473119999527,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5262.128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10288.404605672089,
            "unit": "ns/iter",
            "extra": "iterations: 80466\ncpu: 10287.906693510304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15374.283554774678,
            "unit": "ns/iter",
            "extra": "iterations: 54642\ncpu: 15373.615533838443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20123.02594362581,
            "unit": "ns/iter",
            "extra": "iterations: 41012\ncpu: 20122.57631912612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25256.965701057972,
            "unit": "ns/iter",
            "extra": "iterations: 32829\ncpu: 25256.77906728808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30305.346492634813,
            "unit": "ns/iter",
            "extra": "iterations: 28041\ncpu: 30304.953461003523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34834.57530120592,
            "unit": "ns/iter",
            "extra": "iterations: 23904\ncpu: 34833.65963855424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39272.71364717165,
            "unit": "ns/iter",
            "extra": "iterations: 21030\ncpu: 39271.43128863524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 535.1244474005028,
            "unit": "ns/iter",
            "extra": "iterations: 1302028\ncpu: 535.1140682074416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 405.2309866453675,
            "unit": "ns/iter",
            "extra": "iterations: 1725169\ncpu: 405.22870512975817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 408.0268289459916,
            "unit": "ns/iter",
            "extra": "iterations: 1717697\ncpu: 408.0279001476976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 406.8320341671872,
            "unit": "ns/iter",
            "extra": "iterations: 1715331\ncpu: 406.8265541752584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 886.2225847592479,
            "unit": "ns/iter",
            "extra": "iterations: 786433\ncpu: 886.2078524171781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1516.1821393773548,
            "unit": "ns/iter",
            "extra": "iterations: 524461\ncpu: 1516.1758452964086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8583.219223858052,
            "unit": "ns/iter",
            "extra": "iterations: 95163\ncpu: 8583.079558231668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7273.421678271241,
            "unit": "ns/iter",
            "extra": "iterations: 110876\ncpu: 7273.266531981673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8922.549309504682,
            "unit": "ns/iter",
            "extra": "iterations: 92325\ncpu: 8922.42404549148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7808.324783548745,
            "unit": "ns/iter",
            "extra": "iterations: 107761\ncpu: 7808.168075648879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 26376.75479430043,
            "unit": "ns/iter",
            "extra": "iterations: 31235\ncpu: 26375.19129182011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 261668.16861686023,
            "unit": "ns/iter",
            "extra": "iterations: 3333\ncpu: 261655.1155115516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 211692.53783087363,
            "unit": "ns/iter",
            "extra": "iterations: 4269\ncpu: 211678.5898336848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 200470.02640722404,
            "unit": "ns/iter",
            "extra": "iterations: 4317\ncpu: 200460.2733379658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 200355.04399167054,
            "unit": "ns/iter",
            "extra": "iterations: 4319\ncpu: 200340.79648066676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 102827.94135036563,
            "unit": "ns/iter",
            "extra": "iterations: 8457\ncpu: 102821.33144140946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 193779.13180707052,
            "unit": "ns/iter",
            "extra": "iterations: 4499\ncpu: 193765.41453656336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5622.051170000191,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5621.689999999972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25916.50820591024,
            "unit": "ns/iter",
            "extra": "iterations: 32111\ncpu: 25915.247111581735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 20855.84889855676,
            "unit": "ns/iter",
            "extra": "iterations: 39993\ncpu: 20854.349511164455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22926.765908776237,
            "unit": "ns/iter",
            "extra": "iterations: 36285\ncpu: 22924.897340498897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21236.778724707652,
            "unit": "ns/iter",
            "extra": "iterations: 39191\ncpu: 21235.684213212215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 43344.10846257803,
            "unit": "ns/iter",
            "extra": "iterations: 19214\ncpu: 43341.95378369949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 284202.2003872181,
            "unit": "ns/iter",
            "extra": "iterations: 3099\ncpu: 284183.9948370429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 215895.50136036996,
            "unit": "ns/iter",
            "extra": "iterations: 4043\ncpu: 215881.52362107264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 215310.2054693251,
            "unit": "ns/iter",
            "extra": "iterations: 4059\ncpu: 215296.72333086867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 213712.00267900713,
            "unit": "ns/iter",
            "extra": "iterations: 4106\ncpu: 213708.67023867444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 111388.55655180982,
            "unit": "ns/iter",
            "extra": "iterations: 7807\ncpu: 111378.68579479975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 208194.53557783965,
            "unit": "ns/iter",
            "extra": "iterations: 4188\ncpu: 208189.13562559712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 844530.549107146,
            "unit": "ns/iter",
            "extra": "iterations: 1120\ncpu: 844477.946428571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 454923.5549338862,
            "unit": "ns/iter",
            "extra": "iterations: 1966\ncpu: 454897.40590030415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2337.265916002356,
            "unit": "ns/iter",
            "extra": "iterations: 343962\ncpu: 2337.1448008791613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8260.04074366692,
            "unit": "ns/iter",
            "extra": "iterations: 99991\ncpu: 8259.52135692213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8385.408711656417,
            "unit": "ns/iter",
            "extra": "iterations: 97800\ncpu: 8384.822085889542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7546.44102616045,
            "unit": "ns/iter",
            "extra": "iterations: 108599\ncpu: 7546.286798220996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7055.032511654336,
            "unit": "ns/iter",
            "extra": "iterations: 116266\ncpu: 7054.578294600281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 25509.931548618184,
            "unit": "ns/iter",
            "extra": "iterations: 32797\ncpu: 25509.110589383232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 269029.52138057095,
            "unit": "ns/iter",
            "extra": "iterations: 3274\ncpu: 269022.5412339643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 200317.31402298846,
            "unit": "ns/iter",
            "extra": "iterations: 4350\ncpu: 200305.3793103455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 202515.48634502298,
            "unit": "ns/iter",
            "extra": "iterations: 4394\ncpu: 202502.02548930215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 197874.8412627865,
            "unit": "ns/iter",
            "extra": "iterations: 4498\ncpu: 197862.85015562607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 99772.6536287565,
            "unit": "ns/iter",
            "extra": "iterations: 8846\ncpu: 99767.03594845168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 190888.2967127956,
            "unit": "ns/iter",
            "extra": "iterations: 4624\ncpu: 190876.01643598633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 177.12154949542375,
            "unit": "ns/iter",
            "extra": "iterations: 3952719\ncpu: 177.10947831100506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1441.6049130837227,
            "unit": "ns/iter",
            "extra": "iterations: 483281\ncpu: 1441.559258485231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1126.2998354416982,
            "unit": "ns/iter",
            "extra": "iterations: 645364\ncpu: 1126.2774186350703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1216.3950975912987,
            "unit": "ns/iter",
            "extra": "iterations: 573514\ncpu: 1216.3253207419602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 863.7830216432458,
            "unit": "ns/iter",
            "extra": "iterations: 809030\ncpu: 863.7345957504731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8534.029312812698,
            "unit": "ns/iter",
            "extra": "iterations: 81739\ncpu: 8533.550691836213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12828.591210125205,
            "unit": "ns/iter",
            "extra": "iterations: 54358\ncpu: 12827.245299679847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2896.0472274260073,
            "unit": "ns/iter",
            "extra": "iterations: 242338\ncpu: 2895.8495984946558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2865.6552843527893,
            "unit": "ns/iter",
            "extra": "iterations: 243975\ncpu: 2865.457526385906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2876.717503094591,
            "unit": "ns/iter",
            "extra": "iterations: 240746\ncpu: 2876.470637103016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5116.801642768285,
            "unit": "ns/iter",
            "extra": "iterations: 135503\ncpu: 5116.615868283345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5300.222748851528,
            "unit": "ns/iter",
            "extra": "iterations: 131655\ncpu: 5299.8944210246145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1797.0566833915634,
            "unit": "ns/iter",
            "extra": "iterations: 384857\ncpu: 1796.9549728860325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9747.91898341952,
            "unit": "ns/iter",
            "extra": "iterations: 71652\ncpu: 9747.437615139785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7921.405705841851,
            "unit": "ns/iter",
            "extra": "iterations: 87980\ncpu: 7920.930893384842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7776.018820029909,
            "unit": "ns/iter",
            "extra": "iterations: 89426\ncpu: 7775.78668396216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7693.971739799818,
            "unit": "ns/iter",
            "extra": "iterations: 90976\ncpu: 7693.586220541765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17847.10763888803,
            "unit": "ns/iter",
            "extra": "iterations: 39168\ncpu: 17846.027369281142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 57061.43814348672,
            "unit": "ns/iter",
            "extra": "iterations: 12238\ncpu: 57058.35103775169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 45295.22074467979,
            "unit": "ns/iter",
            "extra": "iterations: 15416\ncpu: 45291.94343539174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44931.390034808464,
            "unit": "ns/iter",
            "extra": "iterations: 15514\ncpu: 44931.049374758535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44901.755836326585,
            "unit": "ns/iter",
            "extra": "iterations: 15592\ncpu: 44900.910723448214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26708.451050019787,
            "unit": "ns/iter",
            "extra": "iterations: 26190\ncpu: 26707.437953417095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 45437.50284055156,
            "unit": "ns/iter",
            "extra": "iterations: 15842\ncpu: 45433.30387577322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1807.124377048351,
            "unit": "ns/iter",
            "extra": "iterations: 384460\ncpu: 1807.0798002392728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9548.299454353002,
            "unit": "ns/iter",
            "extra": "iterations: 73674\ncpu: 9547.916497000191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7674.722757450707,
            "unit": "ns/iter",
            "extra": "iterations: 90823\ncpu: 7674.5504993228315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7664.827498986634,
            "unit": "ns/iter",
            "extra": "iterations: 91327\ncpu: 7664.795734010676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7650.086472816418,
            "unit": "ns/iter",
            "extra": "iterations: 92133\ncpu: 7649.9679810708185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17796.395939601392,
            "unit": "ns/iter",
            "extra": "iterations: 39405\ncpu: 17795.825402867693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 56317.76409544278,
            "unit": "ns/iter",
            "extra": "iterations: 12238\ncpu: 56317.8869096252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 45008.93926996148,
            "unit": "ns/iter",
            "extra": "iterations: 15643\ncpu: 45008.61727290157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 44490.51598289809,
            "unit": "ns/iter",
            "extra": "iterations: 15673\ncpu: 44490.03381611694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 44361.33301581039,
            "unit": "ns/iter",
            "extra": "iterations: 15747\ncpu: 44360.932241061906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25974.526209752123,
            "unit": "ns/iter",
            "extra": "iterations: 26803\ncpu: 25974.237958437247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 44007.58959392332,
            "unit": "ns/iter",
            "extra": "iterations: 15933\ncpu: 44007.23655306562 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}