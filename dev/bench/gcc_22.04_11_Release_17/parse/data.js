window.BENCHMARK_DATA = {
  "lastUpdate": 1702381097843,
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
      }
    ]
  }
}