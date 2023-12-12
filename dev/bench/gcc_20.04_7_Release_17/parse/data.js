window.BENCHMARK_DATA = {
  "lastUpdate": 1702391790571,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse gcc-7 20.04 Release c++-17": [
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
        "date": 1702381105382,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 677.1862964630346,
            "unit": "ns/iter",
            "extra": "iterations: 1032945\ncpu: 677.1837803561662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6084.201665104226,
            "unit": "ns/iter",
            "extra": "iterations: 135487\ncpu: 6084.0530825835685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11668.529170887656,
            "unit": "ns/iter",
            "extra": "iterations: 71064\ncpu: 11668.165315771694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17594.06711546692,
            "unit": "ns/iter",
            "extra": "iterations: 48871\ncpu: 17592.564097317423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 23211.69223922132,
            "unit": "ns/iter",
            "extra": "iterations: 35950\ncpu: 23211.88038942976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 28931.794726154123,
            "unit": "ns/iter",
            "extra": "iterations: 29049\ncpu: 28930.79279837517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 34611.32040883948,
            "unit": "ns/iter",
            "extra": "iterations: 24166\ncpu: 34610.17545311595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 39959.85416266092,
            "unit": "ns/iter",
            "extra": "iterations: 20804\ncpu: 39956.49394347238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 45229.62161427154,
            "unit": "ns/iter",
            "extra": "iterations: 18386\ncpu: 45226.75405199602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 625.5576427479704,
            "unit": "ns/iter",
            "extra": "iterations: 1119473\ncpu: 625.5194185121036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 484.74114579034074,
            "unit": "ns/iter",
            "extra": "iterations: 1441433\ncpu: 484.7077873199794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 494.64636248048373,
            "unit": "ns/iter",
            "extra": "iterations: 1425092\ncpu: 494.6434335467461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 498.81600377182446,
            "unit": "ns/iter",
            "extra": "iterations: 1404094\ncpu: 498.7661794723149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 943.5887476383751,
            "unit": "ns/iter",
            "extra": "iterations: 741000\ncpu: 943.5955465587043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2806.0201628701534,
            "unit": "ns/iter",
            "extra": "iterations: 285872\ncpu: 2805.90334135557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 13892.874930507842,
            "unit": "ns/iter",
            "extra": "iterations: 59359\ncpu: 13892.974949038899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 11338.877501583256,
            "unit": "ns/iter",
            "extra": "iterations: 72654\ncpu: 11338.357144823407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 11141.347897427728,
            "unit": "ns/iter",
            "extra": "iterations: 73743\ncpu: 11140.863539590187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10763.372926944294,
            "unit": "ns/iter",
            "extra": "iterations: 76216\ncpu: 10762.667943738836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 33880.17844522969,
            "unit": "ns/iter",
            "extra": "iterations: 24338\ncpu: 33878.74928095982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 275761.8241206045,
            "unit": "ns/iter",
            "extra": "iterations: 3184\ncpu: 275747.5188442217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 218558.21743486388,
            "unit": "ns/iter",
            "extra": "iterations: 3992\ncpu: 218557.91583166365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 217914.4165627436,
            "unit": "ns/iter",
            "extra": "iterations: 4009\ncpu: 217894.18807682744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 216929.26217693766,
            "unit": "ns/iter",
            "extra": "iterations: 4024\ncpu: 216921.64512922498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 113669.10917598613,
            "unit": "ns/iter",
            "extra": "iterations: 7694\ncpu: 113662.8801663631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 210762.84660052974,
            "unit": "ns/iter",
            "extra": "iterations: 4133\ncpu: 210754.51246068216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5794.945890000349,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5794.734999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 30865.859359340353,
            "unit": "ns/iter",
            "extra": "iterations: 26941\ncpu: 30866.055454511683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 23520.482528598714,
            "unit": "ns/iter",
            "extra": "iterations: 35229\ncpu: 23519.781997785853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 24196.630925120284,
            "unit": "ns/iter",
            "extra": "iterations: 34936\ncpu: 24196.170139683967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 23025.02238191335,
            "unit": "ns/iter",
            "extra": "iterations: 35207\ncpu: 23024.248018859947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50103.62425339559,
            "unit": "ns/iter",
            "extra": "iterations: 16575\ncpu: 50103.59577677224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 292174.928595371,
            "unit": "ns/iter",
            "extra": "iterations: 2983\ncpu: 292172.4103251745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 231394.2682277806,
            "unit": "ns/iter",
            "extra": "iterations: 3758\ncpu: 231394.19904204344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 229582.8504772021,
            "unit": "ns/iter",
            "extra": "iterations: 3772\ncpu: 229581.12407211037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 227540.71654372665,
            "unit": "ns/iter",
            "extra": "iterations: 3796\ncpu: 227536.7228661741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 122514.27221675926,
            "unit": "ns/iter",
            "extra": "iterations: 7123\ncpu: 122514.13730169868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 220280.99444584758,
            "unit": "ns/iter",
            "extra": "iterations: 3961\ncpu: 220275.6627114381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 877959.6374538738,
            "unit": "ns/iter",
            "extra": "iterations: 1084\ncpu: 877959.5018450163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 488846.5530261023,
            "unit": "ns/iter",
            "extra": "iterations: 1801\ncpu: 488836.31315935473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2873.593857517474,
            "unit": "ns/iter",
            "extra": "iterations: 281059\ncpu: 2873.6126578405265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 13339.950531969362,
            "unit": "ns/iter",
            "extra": "iterations: 58462\ncpu: 13339.89600082103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 10382.924937008791,
            "unit": "ns/iter",
            "extra": "iterations: 79773\ncpu: 10382.8613691349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 10443.098884362253,
            "unit": "ns/iter",
            "extra": "iterations: 78789\ncpu: 10443.069464011516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 10297.478638117671,
            "unit": "ns/iter",
            "extra": "iterations: 80330\ncpu: 10297.553840408296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 31383.38419909267,
            "unit": "ns/iter",
            "extra": "iterations: 26239\ncpu: 31382.365943824032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 283306.56581035274,
            "unit": "ns/iter",
            "extra": "iterations: 3153\ncpu: 283296.6381224241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 215228.68604365765,
            "unit": "ns/iter",
            "extra": "iterations: 4077\ncpu: 215218.46946283925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 215974.0634455786,
            "unit": "ns/iter",
            "extra": "iterations: 4098\ncpu: 215965.27574426547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 210871.73237754914,
            "unit": "ns/iter",
            "extra": "iterations: 4185\ncpu: 210857.96893667922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 108487.04384881446,
            "unit": "ns/iter",
            "extra": "iterations: 8096\ncpu: 108483.60918972327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 203229.20711152442,
            "unit": "ns/iter",
            "extra": "iterations: 4331\ncpu: 203216.5319787586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 250.05418572027423,
            "unit": "ns/iter",
            "extra": "iterations: 2798025\ncpu: 250.04011758293782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1672.646785598194,
            "unit": "ns/iter",
            "extra": "iterations: 415085\ncpu: 1672.563932688481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1364.8713353810456,
            "unit": "ns/iter",
            "extra": "iterations: 512775\ncpu: 1364.8489103407899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1244.5355382811172,
            "unit": "ns/iter",
            "extra": "iterations: 555992\ncpu: 1244.5448855379252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 988.3849168756815,
            "unit": "ns/iter",
            "extra": "iterations: 707254\ncpu: 988.3524165292846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 10189.812243536691,
            "unit": "ns/iter",
            "extra": "iterations: 68967\ncpu: 10189.336929256027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13152.847453163908,
            "unit": "ns/iter",
            "extra": "iterations: 53164\ncpu: 13152.112331652965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3056.179000195429,
            "unit": "ns/iter",
            "extra": "iterations: 230145\ncpu: 3055.9981750635516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3033.7737421335164,
            "unit": "ns/iter",
            "extra": "iterations: 230887\ncpu: 3033.604317263418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3029.594584425422,
            "unit": "ns/iter",
            "extra": "iterations: 231222\ncpu: 3029.4500523306738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5491.701592676273,
            "unit": "ns/iter",
            "extra": "iterations: 127584\ncpu: 5491.437014045663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5193.943939889522,
            "unit": "ns/iter",
            "extra": "iterations: 134552\ncpu: 5190.42972233791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1994.4396703541888,
            "unit": "ns/iter",
            "extra": "iterations: 350922\ncpu: 1994.3776679717644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10331.790347914302,
            "unit": "ns/iter",
            "extra": "iterations: 67488\ncpu: 10331.845661450887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8254.83150200577,
            "unit": "ns/iter",
            "extra": "iterations: 84274\ncpu: 8254.53639319365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8136.8837659139235,
            "unit": "ns/iter",
            "extra": "iterations: 85302\ncpu: 8136.758809875577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8043.7245469519,
            "unit": "ns/iter",
            "extra": "iterations: 88015\ncpu: 8043.690280065968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18256.5160538428,
            "unit": "ns/iter",
            "extra": "iterations: 38184\ncpu: 18256.122983448447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 58780.15752567547,
            "unit": "ns/iter",
            "extra": "iterations: 11979\ncpu: 58780.54929459919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 49022.97799972106,
            "unit": "ns/iter",
            "extra": "iterations: 14318\ncpu: 49021.97932672203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 48739.4226646279,
            "unit": "ns/iter",
            "extra": "iterations: 14366\ncpu: 48737.40776834201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 48044.16818963026,
            "unit": "ns/iter",
            "extra": "iterations: 14555\ncpu: 48044.48643077959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27996.642206234763,
            "unit": "ns/iter",
            "extra": "iterations: 25020\ncpu: 27995.59552358118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 47512.66925256381,
            "unit": "ns/iter",
            "extra": "iterations: 14824\ncpu: 47512.96546141366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2013.713192430403,
            "unit": "ns/iter",
            "extra": "iterations: 345486\ncpu: 2013.6980948576931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10164.421200094497,
            "unit": "ns/iter",
            "extra": "iterations: 68528\ncpu: 10164.48604949785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9368.847565344982,
            "unit": "ns/iter",
            "extra": "iterations: 75370\ncpu: 9368.64800318425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9831.590552178071,
            "unit": "ns/iter",
            "extra": "iterations: 71064\ncpu: 9831.430822920169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9457.096177310712,
            "unit": "ns/iter",
            "extra": "iterations: 74581\ncpu: 9457.174079189079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19393.72408355204,
            "unit": "ns/iter",
            "extra": "iterations: 36145\ncpu: 19393.06681422035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 59396.15758656024,
            "unit": "ns/iter",
            "extra": "iterations: 11784\ncpu: 59396.63102511886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 49131.51547770085,
            "unit": "ns/iter",
            "extra": "iterations: 14214\ncpu: 49129.54129731269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 49782.2385897978,
            "unit": "ns/iter",
            "extra": "iterations: 14154\ncpu: 49781.93443549481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 50030.73498106901,
            "unit": "ns/iter",
            "extra": "iterations: 13999\ncpu: 50029.30923637402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 29425.974487010888,
            "unit": "ns/iter",
            "extra": "iterations: 23831\ncpu: 29426.184381688054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 48705.522967698875,
            "unit": "ns/iter",
            "extra": "iterations: 14368\ncpu: 48705.09465478788 ns\nthreads: 1"
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
        "date": 1702382251059,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 688.5411519345149,
            "unit": "ns/iter",
            "extra": "iterations: 1019867\ncpu: 688.5178165388234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6104.452839214683,
            "unit": "ns/iter",
            "extra": "iterations: 133787\ncpu: 6104.075881812134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11862.714419197991,
            "unit": "ns/iter",
            "extra": "iterations: 70635\ncpu: 11862.299143484111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17610.865285082196,
            "unit": "ns/iter",
            "extra": "iterations: 47723\ncpu: 17609.691343796494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 23089.50594133493,
            "unit": "ns/iter",
            "extra": "iterations: 36103\ncpu: 23089.19480375592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 28753.764049970403,
            "unit": "ns/iter",
            "extra": "iterations: 29057\ncpu: 28752.53811474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 34397.4529270516,
            "unit": "ns/iter",
            "extra": "iterations: 24154\ncpu: 34397.15989070132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 39860.707446048196,
            "unit": "ns/iter",
            "extra": "iterations: 20991\ncpu: 39857.37697108283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 45484.98407194566,
            "unit": "ns/iter",
            "extra": "iterations: 18458\ncpu: 45482.13240871167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 637.5818308476389,
            "unit": "ns/iter",
            "extra": "iterations: 1093854\ncpu: 637.5548290722523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 479.10494557809034,
            "unit": "ns/iter",
            "extra": "iterations: 1425253\ncpu: 479.08932659675133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 478.94217496272705,
            "unit": "ns/iter",
            "extra": "iterations: 1460025\ncpu: 478.9367990274144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 488.43589518246,
            "unit": "ns/iter",
            "extra": "iterations: 1433691\ncpu: 488.4136121381796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 978.4632676526874,
            "unit": "ns/iter",
            "extra": "iterations: 750551\ncpu: 978.4315789333453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2808.438462238981,
            "unit": "ns/iter",
            "extra": "iterations: 285532\ncpu: 2808.3171063138266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 13638.301213681452,
            "unit": "ns/iter",
            "extra": "iterations: 59818\ncpu: 13637.60740914104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10974.703216413342,
            "unit": "ns/iter",
            "extra": "iterations: 74866\ncpu: 10973.941442043124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10623.457912413553,
            "unit": "ns/iter",
            "extra": "iterations: 77113\ncpu: 10623.357929272639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10390.723293183026,
            "unit": "ns/iter",
            "extra": "iterations: 78538\ncpu: 10390.309149710962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 32833.68771846273,
            "unit": "ns/iter",
            "extra": "iterations: 25176\ncpu: 32833.94899904674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 275549.505679978,
            "unit": "ns/iter",
            "extra": "iterations: 3081\ncpu: 275524.05063291127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 218549.57421777264,
            "unit": "ns/iter",
            "extra": "iterations: 3995\ncpu: 218545.3566958699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 219754.85158211715,
            "unit": "ns/iter",
            "extra": "iterations: 3982\ncpu: 219746.45906579608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 217732.15197186547,
            "unit": "ns/iter",
            "extra": "iterations: 3981\ncpu: 217724.56669178663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 113608.76208370905,
            "unit": "ns/iter",
            "extra": "iterations: 7717\ncpu: 113601.93080212535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 210768.24830917234,
            "unit": "ns/iter",
            "extra": "iterations: 4140\ncpu: 210762.97101449338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5778.81385000012,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5778.588999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 30298.945075344553,
            "unit": "ns/iter",
            "extra": "iterations: 27474\ncpu: 30297.615927786283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 23834.991523239485,
            "unit": "ns/iter",
            "extra": "iterations: 34919\ncpu: 23833.557662017793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 23494.226301247472,
            "unit": "ns/iter",
            "extra": "iterations: 35466\ncpu: 23493.782777871736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 23901.29276099479,
            "unit": "ns/iter",
            "extra": "iterations: 34991\ncpu: 23900.611585836366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 49878.574618866936,
            "unit": "ns/iter",
            "extra": "iterations: 16792\ncpu: 49876.7567889471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 301335.4886247911,
            "unit": "ns/iter",
            "extra": "iterations: 2945\ncpu: 301327.47028862336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 236094.06090265483,
            "unit": "ns/iter",
            "extra": "iterations: 3678\ncpu: 236078.98314301102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 234329.16922249898,
            "unit": "ns/iter",
            "extra": "iterations: 3717\ncpu: 234317.21818670924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 231289.14103246687,
            "unit": "ns/iter",
            "extra": "iterations: 3758\ncpu: 231278.1000532204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 124063.79290193603,
            "unit": "ns/iter",
            "extra": "iterations: 7016\ncpu: 124055.97206385423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 223036.4562034504,
            "unit": "ns/iter",
            "extra": "iterations: 3893\ncpu: 223024.7623940414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 882337.192737435,
            "unit": "ns/iter",
            "extra": "iterations: 1074\ncpu: 882326.9087523317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 495477.26157279755,
            "unit": "ns/iter",
            "extra": "iterations: 1793\ncpu: 495446.6257668712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2860.2222442107095,
            "unit": "ns/iter",
            "extra": "iterations: 282977\ncpu: 2860.123614286673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 14118.412336940579,
            "unit": "ns/iter",
            "extra": "iterations: 58491\ncpu: 14117.831803183442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 10918.735723092159,
            "unit": "ns/iter",
            "extra": "iterations: 76242\ncpu: 10918.206500354188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 10451.524329894632,
            "unit": "ns/iter",
            "extra": "iterations: 78607\ncpu: 10450.816085081486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 10167.642756350217,
            "unit": "ns/iter",
            "extra": "iterations: 80788\ncpu: 10167.425855325087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 31338.477562306663,
            "unit": "ns/iter",
            "extra": "iterations: 26763\ncpu: 31335.967567163658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 285136.67447080725,
            "unit": "ns/iter",
            "extra": "iterations: 3118\ncpu: 285116.5811417592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 215777.24597472712,
            "unit": "ns/iter",
            "extra": "iterations: 4037\ncpu: 215760.86202625724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 216999.57269591623,
            "unit": "ns/iter",
            "extra": "iterations: 4058\ncpu: 216990.8575653033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 217206.51294061387,
            "unit": "ns/iter",
            "extra": "iterations: 4057\ncpu: 217198.91545477038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 108793.7657657685,
            "unit": "ns/iter",
            "extra": "iterations: 8103\ncpu: 108792.17573738043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 206454.10369681218,
            "unit": "ns/iter",
            "extra": "iterations: 4301\ncpu: 206447.2913275987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 247.86536202107814,
            "unit": "ns/iter",
            "extra": "iterations: 2824062\ncpu: 247.85511082971885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1723.108800923028,
            "unit": "ns/iter",
            "extra": "iterations: 417763\ncpu: 1723.0317189411219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1371.3653697114942,
            "unit": "ns/iter",
            "extra": "iterations: 509681\ncpu: 1371.3261824553038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1382.358577903224,
            "unit": "ns/iter",
            "extra": "iterations: 506604\ncpu: 1382.311035838643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 999.1125018000214,
            "unit": "ns/iter",
            "extra": "iterations: 701411\ncpu: 999.1029510515253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9953.158443783417,
            "unit": "ns/iter",
            "extra": "iterations: 71224\ncpu: 9953.121138941908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13328.734504328933,
            "unit": "ns/iter",
            "extra": "iterations: 52434\ncpu: 13328.361368577684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3120.9924068531814,
            "unit": "ns/iter",
            "extra": "iterations: 223491\ncpu: 3120.941335445259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3068.323852293459,
            "unit": "ns/iter",
            "extra": "iterations: 226909\ncpu: 3068.2855241528596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3060.9968318100914,
            "unit": "ns/iter",
            "extra": "iterations: 228206\ncpu: 3060.990508575593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5892.8451334131,
            "unit": "ns/iter",
            "extra": "iterations: 118954\ncpu: 5892.655984666405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5929.515054972207,
            "unit": "ns/iter",
            "extra": "iterations: 118333\ncpu: 5929.32994177449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2031.1990244979572,
            "unit": "ns/iter",
            "extra": "iterations: 344028\ncpu: 2031.1230481239954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10705.105116973536,
            "unit": "ns/iter",
            "extra": "iterations: 65527\ncpu: 10705.18259648684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8539.86417218665,
            "unit": "ns/iter",
            "extra": "iterations: 81353\ncpu: 8539.842415153747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8417.913855971943,
            "unit": "ns/iter",
            "extra": "iterations: 83372\ncpu: 8417.704984886952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8428.487753690048,
            "unit": "ns/iter",
            "extra": "iterations: 83862\ncpu: 8428.186783048319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18809.627323195557,
            "unit": "ns/iter",
            "extra": "iterations: 37287\ncpu: 18807.866012283335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 60750.51516990819,
            "unit": "ns/iter",
            "extra": "iterations: 11536\ncpu: 60748.92510402187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 50318.74306350114,
            "unit": "ns/iter",
            "extra": "iterations: 13984\ncpu: 50317.97053775779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 49777.06888495106,
            "unit": "ns/iter",
            "extra": "iterations: 14125\ncpu: 49774.20884955815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 49346.85246705842,
            "unit": "ns/iter",
            "extra": "iterations: 14268\ncpu: 49343.29268292663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 28672.312933495938,
            "unit": "ns/iter",
            "extra": "iterations: 24510\ncpu: 28670.877192982796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 48550.53899527861,
            "unit": "ns/iter",
            "extra": "iterations: 14412\ncpu: 48546.551484873984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2103.881940746786,
            "unit": "ns/iter",
            "extra": "iterations: 328657\ncpu: 2103.7750603212417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 12249.486542770048,
            "unit": "ns/iter",
            "extra": "iterations: 57144\ncpu: 12248.787274254571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9886.488376697129,
            "unit": "ns/iter",
            "extra": "iterations: 70720\ncpu: 9886.275452488748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9963.804108458007,
            "unit": "ns/iter",
            "extra": "iterations: 70294\ncpu: 9963.551654479648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9936.398912703182,
            "unit": "ns/iter",
            "extra": "iterations: 70266\ncpu: 9936.23374035808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19452.19898186366,
            "unit": "ns/iter",
            "extra": "iterations: 35948\ncpu: 19452.033492822797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 60419.12344613271,
            "unit": "ns/iter",
            "extra": "iterations: 11584\ncpu: 60415.09841160113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 52225.10686801929,
            "unit": "ns/iter",
            "extra": "iterations: 13774\ncpu: 52223.8420211993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 50505.5498176094,
            "unit": "ns/iter",
            "extra": "iterations: 13981\ncpu: 50502.88248336995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 49576.27608786976,
            "unit": "ns/iter",
            "extra": "iterations: 14202\ncpu: 49573.70088719961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 28548.116769735778,
            "unit": "ns/iter",
            "extra": "iterations: 24741\ncpu: 28546.073319590792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 49741.79072584002,
            "unit": "ns/iter",
            "extra": "iterations: 14039\ncpu: 49739.29054775923 ns\nthreads: 1"
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
        "date": 1702387026752,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 676.0362990487802,
            "unit": "ns/iter",
            "extra": "iterations: 1027217\ncpu: 676.0321334245831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6051.3436857593515,
            "unit": "ns/iter",
            "extra": "iterations: 135234\ncpu: 6050.966472928406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11606.15503286743,
            "unit": "ns/iter",
            "extra": "iterations: 71043\ncpu: 11605.644468842818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17352.32820120732,
            "unit": "ns/iter",
            "extra": "iterations: 48388\ncpu: 17351.09531288749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 23164.960474950578,
            "unit": "ns/iter",
            "extra": "iterations: 36888\ncpu: 23163.459661678586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 28256.362120853522,
            "unit": "ns/iter",
            "extra": "iterations: 29573\ncpu: 28254.21161194332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 33896.031307028636,
            "unit": "ns/iter",
            "extra": "iterations: 24659\ncpu: 33895.53915406139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 39232.72006411631,
            "unit": "ns/iter",
            "extra": "iterations: 21212\ncpu: 39229.47859702056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 44619.036689373825,
            "unit": "ns/iter",
            "extra": "iterations: 18643\ncpu: 44614.8044842568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 624.3101922114593,
            "unit": "ns/iter",
            "extra": "iterations: 1069395\ncpu: 624.2569864269046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 494.1546643951402,
            "unit": "ns/iter",
            "extra": "iterations: 1411094\ncpu: 494.1177554436485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 487.90363192794086,
            "unit": "ns/iter",
            "extra": "iterations: 1424808\ncpu: 487.8714184648037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 507.3027900639352,
            "unit": "ns/iter",
            "extra": "iterations: 1395201\ncpu: 507.25221670569226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 945.7384477628876,
            "unit": "ns/iter",
            "extra": "iterations: 740441\ncpu: 945.6537387853986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2800.959615196912,
            "unit": "ns/iter",
            "extra": "iterations: 286692\ncpu: 2800.918407210528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 13955.030715166538,
            "unit": "ns/iter",
            "extra": "iterations: 59189\ncpu: 13954.471269999502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 11145.966097748396,
            "unit": "ns/iter",
            "extra": "iterations: 73004\ncpu: 11145.637225357495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10925.481120665472,
            "unit": "ns/iter",
            "extra": "iterations: 75241\ncpu: 10925.087385866724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10458.023303860999,
            "unit": "ns/iter",
            "extra": "iterations: 77927\ncpu: 10457.819497735076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 32952.31902701115,
            "unit": "ns/iter",
            "extra": "iterations: 24954\ncpu: 32950.82952632838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 275522.42355970654,
            "unit": "ns/iter",
            "extra": "iterations: 3107\ncpu: 275513.48567750305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 216085.42064483813,
            "unit": "ns/iter",
            "extra": "iterations: 4001\ncpu: 216076.55586103495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 214071.5819815243,
            "unit": "ns/iter",
            "extra": "iterations: 4007\ncpu: 214065.61018218088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 214942.9115088365,
            "unit": "ns/iter",
            "extra": "iterations: 4023\ncpu: 214935.64504101418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 112133.96387246618,
            "unit": "ns/iter",
            "extra": "iterations: 7778\ncpu: 112129.35201851392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 209992.18175287504,
            "unit": "ns/iter",
            "extra": "iterations: 4176\ncpu: 209988.72126436714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 6103.5839367239105,
            "unit": "ns/iter",
            "extra": "iterations: 137556\ncpu: 6103.4444153653885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 32320.076374269713,
            "unit": "ns/iter",
            "extra": "iterations: 25650\ncpu: 32319.539961013597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 25367.78383931482,
            "unit": "ns/iter",
            "extra": "iterations: 32610\ncpu: 25366.55933762648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 24797.581489964643,
            "unit": "ns/iter",
            "extra": "iterations: 33182\ncpu: 24797.447411247093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 25140.16391826413,
            "unit": "ns/iter",
            "extra": "iterations: 33474\ncpu: 25139.657644739185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 49420.97210416078,
            "unit": "ns/iter",
            "extra": "iterations: 16705\ncpu: 49419.57497755144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 297790.12127372186,
            "unit": "ns/iter",
            "extra": "iterations: 2952\ncpu: 297776.558265584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 233247.0112691174,
            "unit": "ns/iter",
            "extra": "iterations: 3727\ncpu: 233242.5543332442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 233200.71329970533,
            "unit": "ns/iter",
            "extra": "iterations: 3767\ncpu: 233190.52296256984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 229872.76521739367,
            "unit": "ns/iter",
            "extra": "iterations: 3795\ncpu: 229854.36100131742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 142221.10717868299,
            "unit": "ns/iter",
            "extra": "iterations: 6979\ncpu: 142204.87175813163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 220500.98006731205,
            "unit": "ns/iter",
            "extra": "iterations: 3863\ncpu: 220496.06523427504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 897799.5865657546,
            "unit": "ns/iter",
            "extra": "iterations: 1057\ncpu: 897781.740775782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 488032.2115171646,
            "unit": "ns/iter",
            "extra": "iterations: 1806\ncpu: 488020.8194905882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2853.5654909464115,
            "unit": "ns/iter",
            "extra": "iterations: 281161\ncpu: 2853.5497455194886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 13646.897404938129,
            "unit": "ns/iter",
            "extra": "iterations: 58804\ncpu: 13646.821644786076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 10547.182385104985,
            "unit": "ns/iter",
            "extra": "iterations: 78093\ncpu: 10546.762193794524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 10529.185676831265,
            "unit": "ns/iter",
            "extra": "iterations: 78572\ncpu: 10528.47706562136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 10062.956807031587,
            "unit": "ns/iter",
            "extra": "iterations: 82143\ncpu: 10062.564065105906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 31470.226402987788,
            "unit": "ns/iter",
            "extra": "iterations: 26497\ncpu: 31468.192625580363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 285827.170818502,
            "unit": "ns/iter",
            "extra": "iterations: 3091\ncpu: 285805.75865415804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 216369.80207817355,
            "unit": "ns/iter",
            "extra": "iterations: 4042\ncpu: 216363.236021771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 216611.96822661028,
            "unit": "ns/iter",
            "extra": "iterations: 4060\ncpu: 216611.1083743845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 215947.37332029603,
            "unit": "ns/iter",
            "extra": "iterations: 4093\ncpu: 215942.31614952438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 109237.4597672707,
            "unit": "ns/iter",
            "extra": "iterations: 8078\ncpu: 109234.40207972284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 206315.8171128331,
            "unit": "ns/iter",
            "extra": "iterations: 3997\ncpu: 206307.70577933468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 241.68299560667853,
            "unit": "ns/iter",
            "extra": "iterations: 2871405\ncpu: 241.67294408137968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1693.5097838004751,
            "unit": "ns/iter",
            "extra": "iterations: 413183\ncpu: 1693.4852111534242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1252.8803515047975,
            "unit": "ns/iter",
            "extra": "iterations: 556806\ncpu: 1252.8236046306947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1349.6075325637084,
            "unit": "ns/iter",
            "extra": "iterations: 518522\ncpu: 1349.530203154343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 995.5971382685526,
            "unit": "ns/iter",
            "extra": "iterations: 701114\ncpu: 994.696440236538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9968.262995896264,
            "unit": "ns/iter",
            "extra": "iterations: 70176\ncpu: 9968.212779297792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13276.072218071788,
            "unit": "ns/iter",
            "extra": "iterations: 52203\ncpu: 13275.738942206472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3037.1068065420104,
            "unit": "ns/iter",
            "extra": "iterations: 230014\ncpu: 3037.0238333318775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3045.491086876521,
            "unit": "ns/iter",
            "extra": "iterations: 228876\ncpu: 3045.401003163284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3049.1034971499184,
            "unit": "ns/iter",
            "extra": "iterations: 229301\ncpu: 3049.0556081307946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5889.447660850989,
            "unit": "ns/iter",
            "extra": "iterations: 118697\ncpu: 5889.250781401419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5823.471399213158,
            "unit": "ns/iter",
            "extra": "iterations: 120189\ncpu: 5823.371523184287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2019.2070701032237,
            "unit": "ns/iter",
            "extra": "iterations: 351282\ncpu: 2019.161813016322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10778.2662362741,
            "unit": "ns/iter",
            "extra": "iterations: 64747\ncpu: 10778.210573463033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8479.129982690618,
            "unit": "ns/iter",
            "extra": "iterations: 82034\ncpu: 8479.086720140438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8343.175862689981,
            "unit": "ns/iter",
            "extra": "iterations: 83315\ncpu: 8342.933445358023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8276.102369960614,
            "unit": "ns/iter",
            "extra": "iterations: 84263\ncpu: 8275.96453959614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18372.0520249395,
            "unit": "ns/iter",
            "extra": "iterations: 38174\ncpu: 18371.4124796983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 59066.17633568454,
            "unit": "ns/iter",
            "extra": "iterations: 11773\ncpu: 59066.057929160386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 48695.28591275401,
            "unit": "ns/iter",
            "extra": "iterations: 14396\ncpu: 48694.11642122757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 49092.80819055521,
            "unit": "ns/iter",
            "extra": "iterations: 14358\ncpu: 49091.133862655406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 48540.847909010445,
            "unit": "ns/iter",
            "extra": "iterations: 14419\ncpu: 48539.35779180241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 28212.7128366146,
            "unit": "ns/iter",
            "extra": "iterations: 24843\ncpu: 28212.180493499123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 47304.638027691784,
            "unit": "ns/iter",
            "extra": "iterations: 14805\ncpu: 47303.870314083746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2055.6284316311994,
            "unit": "ns/iter",
            "extra": "iterations: 314537\ncpu: 2055.580424560538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11479.442286877873,
            "unit": "ns/iter",
            "extra": "iterations: 61901\ncpu: 11479.200659116881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9865.29687763475,
            "unit": "ns/iter",
            "extra": "iterations: 71164\ncpu: 9865.254904164989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 10070.122873510974,
            "unit": "ns/iter",
            "extra": "iterations: 68599\ncpu: 10069.87419641675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 10088.178555957344,
            "unit": "ns/iter",
            "extra": "iterations: 69250\ncpu: 10088.147292418646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18554.040054076817,
            "unit": "ns/iter",
            "extra": "iterations: 37724\ncpu: 18553.63429116731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 59497.23949580102,
            "unit": "ns/iter",
            "extra": "iterations: 11662\ncpu: 59495.67827130909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 50384.30983045889,
            "unit": "ns/iter",
            "extra": "iterations: 13743\ncpu: 50383.37335370664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 50088.448614318615,
            "unit": "ns/iter",
            "extra": "iterations: 13856\ncpu: 50086.828810623796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 50424.85849808254,
            "unit": "ns/iter",
            "extra": "iterations: 13809\ncpu: 50424.614381925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 30077.751962528047,
            "unit": "ns/iter",
            "extra": "iterations: 23057\ncpu: 30077.451533157306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 49531.6306516653,
            "unit": "ns/iter",
            "extra": "iterations: 14133\ncpu: 49531.054977711356 ns\nthreads: 1"
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
        "date": 1702388107574,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 667.4117171066164,
            "unit": "ns/iter",
            "extra": "iterations: 1055380\ncpu: 667.4119274574088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5955.515867405888,
            "unit": "ns/iter",
            "extra": "iterations: 137231\ncpu: 5955.112183107316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11536.586786562442,
            "unit": "ns/iter",
            "extra": "iterations: 72396\ncpu: 11536.264434499142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17316.225174739848,
            "unit": "ns/iter",
            "extra": "iterations: 49073\ncpu: 17315.063273082957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 22940.726183981933,
            "unit": "ns/iter",
            "extra": "iterations: 36656\ncpu: 22939.412374508953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 28217.065354860515,
            "unit": "ns/iter",
            "extra": "iterations: 29730\ncpu: 28215.79885637403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 33599.04572692424,
            "unit": "ns/iter",
            "extra": "iterations: 24865\ncpu: 33597.6834908506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 39222.60427254028,
            "unit": "ns/iter",
            "extra": "iterations: 21252\ncpu: 39218.55825334082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 44106.83840687253,
            "unit": "ns/iter",
            "extra": "iterations: 18856\ncpu: 44105.298048366625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 614.762655486848,
            "unit": "ns/iter",
            "extra": "iterations: 1141817\ncpu: 614.7171569524712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 481.7477984416746,
            "unit": "ns/iter",
            "extra": "iterations: 1450677\ncpu: 481.7226026193293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 489.2544053455847,
            "unit": "ns/iter",
            "extra": "iterations: 1431613\ncpu: 489.25407914010174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 495.52473773177894,
            "unit": "ns/iter",
            "extra": "iterations: 1415631\ncpu: 495.50695061071656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 933.4063172527655,
            "unit": "ns/iter",
            "extra": "iterations: 746717\ncpu: 933.3822586066741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2802.726491788449,
            "unit": "ns/iter",
            "extra": "iterations: 286485\ncpu: 2802.58826814667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 13434.838904082417,
            "unit": "ns/iter",
            "extra": "iterations: 61063\ncpu: 13434.84597874325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 11036.473838205064,
            "unit": "ns/iter",
            "extra": "iterations: 75874\ncpu: 11036.345783799437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10874.99134284979,
            "unit": "ns/iter",
            "extra": "iterations: 75660\ncpu: 10874.822891884767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10680.299179902817,
            "unit": "ns/iter",
            "extra": "iterations: 77064\ncpu: 10679.930966469417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 32577.687353677076,
            "unit": "ns/iter",
            "extra": "iterations: 25201\ncpu: 32577.42549898811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 280606.3219221125,
            "unit": "ns/iter",
            "extra": "iterations: 3184\ncpu: 280593.7185929638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 216864.59529703236,
            "unit": "ns/iter",
            "extra": "iterations: 4040\ncpu: 216864.65346534696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 216785.34946901255,
            "unit": "ns/iter",
            "extra": "iterations: 4049\ncpu: 216775.08026673217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 215606.6940390794,
            "unit": "ns/iter",
            "extra": "iterations: 4043\ncpu: 215599.33217907517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 112706.93470436518,
            "unit": "ns/iter",
            "extra": "iterations: 7780\ncpu: 112702.17223650392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 208551.87326968904,
            "unit": "ns/iter",
            "extra": "iterations: 4190\ncpu: 208549.23627685037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5758.2311300001265,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5758.056000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 31125.91621041708,
            "unit": "ns/iter",
            "extra": "iterations: 27032\ncpu: 31125.906333234714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 24049.919286272172,
            "unit": "ns/iter",
            "extra": "iterations: 34579\ncpu: 24049.003730587952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 23852.666419316665,
            "unit": "ns/iter",
            "extra": "iterations: 35038\ncpu: 23852.679947485576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 23357.71830633703,
            "unit": "ns/iter",
            "extra": "iterations: 35993\ncpu: 23356.713805462154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 48081.6942730276,
            "unit": "ns/iter",
            "extra": "iterations: 17339\ncpu: 48080.98506257565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 294615.34024472174,
            "unit": "ns/iter",
            "extra": "iterations: 2942\ncpu: 294595.68320870167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 231438.36547143964,
            "unit": "ns/iter",
            "extra": "iterations: 3765\ncpu: 231423.47941567097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 229545.75830258834,
            "unit": "ns/iter",
            "extra": "iterations: 3794\ncpu: 229533.13125988306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 228538.7190039344,
            "unit": "ns/iter",
            "extra": "iterations: 3815\ncpu: 228530.6946264752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 124977.3486015938,
            "unit": "ns/iter",
            "extra": "iterations: 7008\ncpu: 124971.86073059295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 221139.25069992815,
            "unit": "ns/iter",
            "extra": "iterations: 3929\ncpu: 221125.0954441331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 882432.3622920618,
            "unit": "ns/iter",
            "extra": "iterations: 1082\ncpu: 882398.4288354897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 501435.98864281847,
            "unit": "ns/iter",
            "extra": "iterations: 1761\ncpu: 501413.174332764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2858.235618966522,
            "unit": "ns/iter",
            "extra": "iterations: 281760\ncpu: 2858.1274843838787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 13397.206519188996,
            "unit": "ns/iter",
            "extra": "iterations: 59670\ncpu: 13396.490698843658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 10877.384207910758,
            "unit": "ns/iter",
            "extra": "iterations: 76456\ncpu: 10877.380454117463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 10277.504057184407,
            "unit": "ns/iter",
            "extra": "iterations: 80721\ncpu: 10277.289676787908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 10089.91404987034,
            "unit": "ns/iter",
            "extra": "iterations: 81652\ncpu: 10089.845931514237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 31189.927369287772,
            "unit": "ns/iter",
            "extra": "iterations: 26738\ncpu: 31188.394793926287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 281611.93525640183,
            "unit": "ns/iter",
            "extra": "iterations: 3120\ncpu: 281611.7948717953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 215080.05076393133,
            "unit": "ns/iter",
            "extra": "iterations: 4058\ncpu: 215070.30556924455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 213911.7971331313,
            "unit": "ns/iter",
            "extra": "iterations: 4116\ncpu: 213911.7589893104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 212235.1371026427,
            "unit": "ns/iter",
            "extra": "iterations: 4121\ncpu: 212226.83814608178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 108442.5794633019,
            "unit": "ns/iter",
            "extra": "iterations: 8161\ncpu: 108442.47028550429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 204137.32915797437,
            "unit": "ns/iter",
            "extra": "iterations: 4311\ncpu: 204131.68638366903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 242.9578713338751,
            "unit": "ns/iter",
            "extra": "iterations: 2885375\ncpu: 242.9580903695373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1705.9370868279857,
            "unit": "ns/iter",
            "extra": "iterations: 409787\ncpu: 1705.8945256926256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1279.4963476593998,
            "unit": "ns/iter",
            "extra": "iterations: 571962\ncpu: 1279.497589000661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1166.2597285294642,
            "unit": "ns/iter",
            "extra": "iterations: 597855\ncpu: 1166.245828838094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 972.4622937641757,
            "unit": "ns/iter",
            "extra": "iterations: 719019\ncpu: 972.46261920756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9841.523009660634,
            "unit": "ns/iter",
            "extra": "iterations: 70905\ncpu: 9841.393413722557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12948.091405613935,
            "unit": "ns/iter",
            "extra": "iterations: 54012\ncpu: 12947.906020884207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3121.3761976425476,
            "unit": "ns/iter",
            "extra": "iterations: 226591\ncpu: 3121.3786072703533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3096.9403993721103,
            "unit": "ns/iter",
            "extra": "iterations: 226105\ncpu: 3096.9014395966565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3108.9542413402496,
            "unit": "ns/iter",
            "extra": "iterations: 224198\ncpu: 3108.8725144738232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5886.922273918563,
            "unit": "ns/iter",
            "extra": "iterations: 119072\ncpu: 5886.652613544745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5911.179988796941,
            "unit": "ns/iter",
            "extra": "iterations: 117824\ncpu: 5911.103849809979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2043.2029518691959,
            "unit": "ns/iter",
            "extra": "iterations: 344934\ncpu: 2043.1233221428195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10587.393401781907,
            "unit": "ns/iter",
            "extra": "iterations: 66230\ncpu: 10587.393930243103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8422.488362032955,
            "unit": "ns/iter",
            "extra": "iterations: 83219\ncpu: 8422.381907977764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8508.54145280101,
            "unit": "ns/iter",
            "extra": "iterations: 83191\ncpu: 8508.199204240847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8398.448076603256,
            "unit": "ns/iter",
            "extra": "iterations: 84278\ncpu: 8398.447993545178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18432.90661407472,
            "unit": "ns/iter",
            "extra": "iterations: 38282\ncpu: 18432.396426519037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 59184.42732656601,
            "unit": "ns/iter",
            "extra": "iterations: 11820\ncpu: 59184.441624365434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 48804.32015948644,
            "unit": "ns/iter",
            "extra": "iterations: 14296\ncpu: 48801.7907106878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 48602.43666294467,
            "unit": "ns/iter",
            "extra": "iterations: 14336\ncpu: 48601.646205357385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 48071.662081300805,
            "unit": "ns/iter",
            "extra": "iterations: 14539\ncpu: 48070.81642478845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27919.376709325865,
            "unit": "ns/iter",
            "extra": "iterations: 25083\ncpu: 27919.024837539124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 47405.0088620345,
            "unit": "ns/iter",
            "extra": "iterations: 14895\ncpu: 47405.01510574024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2054.6138750155096,
            "unit": "ns/iter",
            "extra": "iterations: 339978\ncpu: 2054.587061515726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10588.588079409763,
            "unit": "ns/iter",
            "extra": "iterations: 66037\ncpu: 10588.418613807382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 10265.918837939964,
            "unit": "ns/iter",
            "extra": "iterations: 68086\ncpu: 10265.926915959086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9902.4084105286,
            "unit": "ns/iter",
            "extra": "iterations: 70816\ncpu: 9902.105456394058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9851.269838596285,
            "unit": "ns/iter",
            "extra": "iterations: 71250\ncpu: 9851.275789473772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18468.56276475413,
            "unit": "ns/iter",
            "extra": "iterations: 38007\ncpu: 18468.326887152467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 60479.10927066018,
            "unit": "ns/iter",
            "extra": "iterations: 11531\ncpu: 60478.19790130869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 49509.54888120137,
            "unit": "ns/iter",
            "extra": "iterations: 14167\ncpu: 49507.50335286239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 48289.756717449,
            "unit": "ns/iter",
            "extra": "iterations: 14440\ncpu: 48289.78531855965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 48265.45188342009,
            "unit": "ns/iter",
            "extra": "iterations: 14548\ncpu: 48263.79571075052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 28253.087356506272,
            "unit": "ns/iter",
            "extra": "iterations: 25001\ncpu: 28252.68589256444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 48346.68253638061,
            "unit": "ns/iter",
            "extra": "iterations: 14430\ncpu: 48345.294525294696 ns\nthreads: 1"
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
        "date": 1702390805569,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 674.7413322363401,
            "unit": "ns/iter",
            "extra": "iterations: 1045310\ncpu: 674.7217571820801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5976.553566396854,
            "unit": "ns/iter",
            "extra": "iterations: 138417\ncpu: 5967.858716776118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11337.843252815137,
            "unit": "ns/iter",
            "extra": "iterations: 72282\ncpu: 11336.809994189422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17106.681375820976,
            "unit": "ns/iter",
            "extra": "iterations: 49425\ncpu: 17105.224076884166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 22485.676712924163,
            "unit": "ns/iter",
            "extra": "iterations: 36896\ncpu: 22484.356027753693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 27952.901869316833,
            "unit": "ns/iter",
            "extra": "iterations: 29797\ncpu: 27951.414571936784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 33299.180782804106,
            "unit": "ns/iter",
            "extra": "iterations: 24936\ncpu: 33296.79178697465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 39096.49015858187,
            "unit": "ns/iter",
            "extra": "iterations: 21440\ncpu: 39094.34701492534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 44498.524118639834,
            "unit": "ns/iter",
            "extra": "iterations: 18948\ncpu: 44495.65125606929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 610.6199786050264,
            "unit": "ns/iter",
            "extra": "iterations: 1141391\ncpu: 610.5773569267674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 488.12333229202176,
            "unit": "ns/iter",
            "extra": "iterations: 1446896\ncpu: 488.1174597206705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 486.00822137486796,
            "unit": "ns/iter",
            "extra": "iterations: 1442946\ncpu: 486.00176305974003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 491.3021242628297,
            "unit": "ns/iter",
            "extra": "iterations: 1420634\ncpu: 491.270798812362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 935.4850059160939,
            "unit": "ns/iter",
            "extra": "iterations: 750496\ncpu: 935.4213746642229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2801.537753389923,
            "unit": "ns/iter",
            "extra": "iterations: 286663\ncpu: 2801.4183902352233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 13545.798679867457,
            "unit": "ns/iter",
            "extra": "iterations: 59994\ncpu: 13545.074507450729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10995.92036298417,
            "unit": "ns/iter",
            "extra": "iterations: 74714\ncpu: 10995.845490804912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10938.34417805906,
            "unit": "ns/iter",
            "extra": "iterations: 75705\ncpu: 10938.257710851312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10690.483779081158,
            "unit": "ns/iter",
            "extra": "iterations: 77585\ncpu: 10689.719662305839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 32932.272333555025,
            "unit": "ns/iter",
            "extra": "iterations: 25399\ncpu: 32931.53273750927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 276081.9448123658,
            "unit": "ns/iter",
            "extra": "iterations: 3171\ncpu: 276063.0715862499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 219417.78111587802,
            "unit": "ns/iter",
            "extra": "iterations: 3961\ncpu: 219396.3898005551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 217816.46848423328,
            "unit": "ns/iter",
            "extra": "iterations: 3998\ncpu: 217803.92696348202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 232567.6925558343,
            "unit": "ns/iter",
            "extra": "iterations: 4030\ncpu: 232548.13895781658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 112022.39252814082,
            "unit": "ns/iter",
            "extra": "iterations: 7816\ncpu: 112018.79477993888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 207907.4083333342,
            "unit": "ns/iter",
            "extra": "iterations: 4200\ncpu: 207891.9761904758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5765.031769999496,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5764.631999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 30687.09705621962,
            "unit": "ns/iter",
            "extra": "iterations: 27108\ncpu: 30686.280802714948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 24523.482436914932,
            "unit": "ns/iter",
            "extra": "iterations: 33764\ncpu: 24522.070844686627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 24093.08938131686,
            "unit": "ns/iter",
            "extra": "iterations: 34929\ncpu: 24091.99232729253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 23878.653142150713,
            "unit": "ns/iter",
            "extra": "iterations: 34801\ncpu: 23876.97767305541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 49272.47047198337,
            "unit": "ns/iter",
            "extra": "iterations: 17204\ncpu: 49270.65217391304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 297488.7908783791,
            "unit": "ns/iter",
            "extra": "iterations: 2960\ncpu: 297469.69594594504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 233267.46707874018,
            "unit": "ns/iter",
            "extra": "iterations: 3721\ncpu: 233260.19887127017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 230718.74814422193,
            "unit": "ns/iter",
            "extra": "iterations: 3772\ncpu: 230712.9374337212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 229381.6736347009,
            "unit": "ns/iter",
            "extra": "iterations: 3827\ncpu: 229373.45178991405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 124495.64700854706,
            "unit": "ns/iter",
            "extra": "iterations: 7020\ncpu: 124492.99145299142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 219345.33400402588,
            "unit": "ns/iter",
            "extra": "iterations: 3976\ncpu: 219331.76559356094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 889450.6632270206,
            "unit": "ns/iter",
            "extra": "iterations: 1066\ncpu: 889405.5347091992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 489386.30684325285,
            "unit": "ns/iter",
            "extra": "iterations: 1812\ncpu: 489358.16777041793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2855.8223204515707,
            "unit": "ns/iter",
            "extra": "iterations: 281428\ncpu: 2855.615290589418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 14506.737779421383,
            "unit": "ns/iter",
            "extra": "iterations: 56769\ncpu: 14506.123060120874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 10783.644613567589,
            "unit": "ns/iter",
            "extra": "iterations: 72794\ncpu: 10782.7994065445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 10122.68263308482,
            "unit": "ns/iter",
            "extra": "iterations: 80043\ncpu: 10122.03565583491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 9775.178843435076,
            "unit": "ns/iter",
            "extra": "iterations: 84163\ncpu: 9774.720482872519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 30995.80554424677,
            "unit": "ns/iter",
            "extra": "iterations: 27019\ncpu: 30993.637810429558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 281932.5850253837,
            "unit": "ns/iter",
            "extra": "iterations: 3152\ncpu: 281913.6421319798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 215906.4276637338,
            "unit": "ns/iter",
            "extra": "iterations: 4092\ncpu: 215891.27565982373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 215234.18376384105,
            "unit": "ns/iter",
            "extra": "iterations: 4065\ncpu: 215221.10701106914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 214380.66070991565,
            "unit": "ns/iter",
            "extra": "iterations: 4085\ncpu: 214363.81884944768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 109354.71827316357,
            "unit": "ns/iter",
            "extra": "iterations: 8061\ncpu: 109347.93449944195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 204040.06290471755,
            "unit": "ns/iter",
            "extra": "iterations: 4324\ncpu: 204028.97779833598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 244.42575642573937,
            "unit": "ns/iter",
            "extra": "iterations: 2890634\ncpu: 244.41437414767668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1611.3198465071991,
            "unit": "ns/iter",
            "extra": "iterations: 438848\ncpu: 1611.252187545574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1230.3134021416536,
            "unit": "ns/iter",
            "extra": "iterations: 568439\ncpu: 1230.2498597035078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1341.3991213525994,
            "unit": "ns/iter",
            "extra": "iterations: 521711\ncpu: 1341.343962461982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 980.7570590756895,
            "unit": "ns/iter",
            "extra": "iterations: 704554\ncpu: 980.737459442423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9824.38068286042,
            "unit": "ns/iter",
            "extra": "iterations: 70849\ncpu: 9824.29956668412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13331.238554769952,
            "unit": "ns/iter",
            "extra": "iterations: 52227\ncpu: 13330.777184214956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3173.1666969530743,
            "unit": "ns/iter",
            "extra": "iterations: 225625\ncpu: 3171.2186149584495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3027.2922915180607,
            "unit": "ns/iter",
            "extra": "iterations: 230188\ncpu: 3027.187342520026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3006.591189722703,
            "unit": "ns/iter",
            "extra": "iterations: 232592\ncpu: 3006.3639334112986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5833.2220416124865,
            "unit": "ns/iter",
            "extra": "iterations: 119964\ncpu: 5832.970724550668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5859.572349953155,
            "unit": "ns/iter",
            "extra": "iterations: 119696\ncpu: 5859.1289600320215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2015.7102662211446,
            "unit": "ns/iter",
            "extra": "iterations: 346028\ncpu: 2015.610586426535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10521.622762605184,
            "unit": "ns/iter",
            "extra": "iterations: 67154\ncpu: 10521.146916043805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8282.089297635272,
            "unit": "ns/iter",
            "extra": "iterations: 83888\ncpu: 8281.786429524958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8286.534617901205,
            "unit": "ns/iter",
            "extra": "iterations: 84075\ncpu: 8286.276538804681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8167.868527149949,
            "unit": "ns/iter",
            "extra": "iterations: 85820\ncpu: 8167.232579818156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18485.79928144894,
            "unit": "ns/iter",
            "extra": "iterations: 37854\ncpu: 18484.4877687956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 58899.407295345656,
            "unit": "ns/iter",
            "extra": "iterations: 11898\ncpu: 58896.76416204463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 48751.281852471766,
            "unit": "ns/iter",
            "extra": "iterations: 14316\ncpu: 48749.13383626732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 47862.36978881178,
            "unit": "ns/iter",
            "extra": "iterations: 14584\ncpu: 47858.351618211476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 48371.10142127765,
            "unit": "ns/iter",
            "extra": "iterations: 14494\ncpu: 48371.257071891836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27911.16392460465,
            "unit": "ns/iter",
            "extra": "iterations: 25042\ncpu: 27910.366584138905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 47153.62129498422,
            "unit": "ns/iter",
            "extra": "iterations: 14811\ncpu: 47150.90135709944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2070.6028916340124,
            "unit": "ns/iter",
            "extra": "iterations: 341952\ncpu: 2070.5809587310378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10508.358581331591,
            "unit": "ns/iter",
            "extra": "iterations: 66936\ncpu: 10508.387116051244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8886.173521851273,
            "unit": "ns/iter",
            "extra": "iterations: 79356\ncpu: 8885.760370986385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9414.261964837066,
            "unit": "ns/iter",
            "extra": "iterations: 74113\ncpu: 9413.770863411217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9291.78533271188,
            "unit": "ns/iter",
            "extra": "iterations: 75065\ncpu: 9291.371478052322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19453.724806632203,
            "unit": "ns/iter",
            "extra": "iterations: 35942\ncpu: 19452.74887318447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 58309.961281706856,
            "unit": "ns/iter",
            "extra": "iterations: 11984\ncpu: 58310.05507343098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 48181.869376507486,
            "unit": "ns/iter",
            "extra": "iterations: 14515\ncpu: 48179.28349982816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 48579.60961859857,
            "unit": "ns/iter",
            "extra": "iterations: 14368\ncpu: 48574.387527838764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 49138.27614974941,
            "unit": "ns/iter",
            "extra": "iterations: 14264\ncpu: 49135.761357263225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 30950.890938593333,
            "unit": "ns/iter",
            "extra": "iterations: 23418\ncpu: 30947.647109060927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 48609.288375972385,
            "unit": "ns/iter",
            "extra": "iterations: 14384\ncpu: 48609.42714126777 ns\nthreads: 1"
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
        "date": 1702391787582,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 669.7519902079439,
            "unit": "ns/iter",
            "extra": "iterations: 1052277\ncpu: 669.7565374896535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6077.0475143705125,
            "unit": "ns/iter",
            "extra": "iterations: 134654\ncpu: 6076.747070268986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11571.39694559738,
            "unit": "ns/iter",
            "extra": "iterations: 71045\ncpu: 11571.37307340418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17500.018440888063,
            "unit": "ns/iter",
            "extra": "iterations: 48425\ncpu: 17499.63861641714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 22746.47256072813,
            "unit": "ns/iter",
            "extra": "iterations: 37009\ncpu: 22746.62919830311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 28276.822399075743,
            "unit": "ns/iter",
            "extra": "iterations: 29403\ncpu: 28275.4616875829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 33677.898240492075,
            "unit": "ns/iter",
            "extra": "iterations: 24666\ncpu: 33677.766966674775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 39186.64632539663,
            "unit": "ns/iter",
            "extra": "iterations: 21254\ncpu: 39184.83579561493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 44329.85883678367,
            "unit": "ns/iter",
            "extra": "iterations: 18638\ncpu: 44328.76918124256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 619.4648362264627,
            "unit": "ns/iter",
            "extra": "iterations: 1137577\ncpu: 619.4456287354615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 479.38963204625117,
            "unit": "ns/iter",
            "extra": "iterations: 1459015\ncpu: 479.38691514480604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 472.4809637720531,
            "unit": "ns/iter",
            "extra": "iterations: 1468148\ncpu: 472.4788645286446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 479.57262552394616,
            "unit": "ns/iter",
            "extra": "iterations: 1457869\ncpu: 479.5618124810949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 934.7336196985485,
            "unit": "ns/iter",
            "extra": "iterations: 725414\ncpu: 934.7281690179686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2810.7149390244026,
            "unit": "ns/iter",
            "extra": "iterations: 285360\ncpu: 2810.644098682369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 13416.9124942433,
            "unit": "ns/iter",
            "extra": "iterations: 60796\ncpu: 13416.680373708812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10934.979396243534,
            "unit": "ns/iter",
            "extra": "iterations: 75229\ncpu: 10934.670140504351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10759.530148531469,
            "unit": "ns/iter",
            "extra": "iterations: 76886\ncpu: 10759.152511510507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10364.110442097088,
            "unit": "ns/iter",
            "extra": "iterations: 79055\ncpu: 10363.73790399089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 32999.72780922686,
            "unit": "ns/iter",
            "extra": "iterations: 24909\ncpu: 32998.72736761822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 273052.9649394867,
            "unit": "ns/iter",
            "extra": "iterations: 3223\ncpu: 273046.1991932976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 218005.49962584465,
            "unit": "ns/iter",
            "extra": "iterations: 4009\ncpu: 218004.81416812184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 217062.8234564746,
            "unit": "ns/iter",
            "extra": "iterations: 4033\ncpu: 217058.91395983152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 216666.28251677862,
            "unit": "ns/iter",
            "extra": "iterations: 4021\ncpu: 216666.00348172055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 111990.54089575658,
            "unit": "ns/iter",
            "extra": "iterations: 7837\ncpu: 111988.72017353587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 208475.86998088125,
            "unit": "ns/iter",
            "extra": "iterations: 4184\ncpu: 208475.501912046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5880.00070000021,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5879.900999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 30885.901001768027,
            "unit": "ns/iter",
            "extra": "iterations: 27152\ncpu: 30885.253388332356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 24626.27074132292,
            "unit": "ns/iter",
            "extra": "iterations: 33737\ncpu: 24625.755105670334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 24497.809300141253,
            "unit": "ns/iter",
            "extra": "iterations: 34064\ncpu: 24497.98320807894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 25372.21617123878,
            "unit": "ns/iter",
            "extra": "iterations: 34852\ncpu: 25372.139332032653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 49761.934098970756,
            "unit": "ns/iter",
            "extra": "iterations: 16631\ncpu: 49761.782213937884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 293840.74398394965,
            "unit": "ns/iter",
            "extra": "iterations: 2992\ncpu: 293838.43582887796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 231136.43202337148,
            "unit": "ns/iter",
            "extra": "iterations: 3766\ncpu: 231133.8024429113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 231998.259533896,
            "unit": "ns/iter",
            "extra": "iterations: 3776\ncpu: 231994.41207627044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 229468.15265369383,
            "unit": "ns/iter",
            "extra": "iterations: 3806\ncpu: 229460.53599579635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 123879.3001416393,
            "unit": "ns/iter",
            "extra": "iterations: 7060\ncpu: 123877.81869688381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 218396.34047378958,
            "unit": "ns/iter",
            "extra": "iterations: 3968\ncpu: 218390.952620968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 881460.0435588595,
            "unit": "ns/iter",
            "extra": "iterations: 1079\ncpu: 881436.8860055663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 493209.75318914,
            "unit": "ns/iter",
            "extra": "iterations: 1803\ncpu: 493192.9561841399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2819.8345854404793,
            "unit": "ns/iter",
            "extra": "iterations: 285918\ncpu: 2819.750767702612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 13852.33911735166,
            "unit": "ns/iter",
            "extra": "iterations: 59820\ncpu: 13851.990972918775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 10454.48303892249,
            "unit": "ns/iter",
            "extra": "iterations: 79594\ncpu: 10454.17996331374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 10501.364463704751,
            "unit": "ns/iter",
            "extra": "iterations: 78455\ncpu: 10501.337072207027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 10418.125287828383,
            "unit": "ns/iter",
            "extra": "iterations: 80343\ncpu: 10418.0998966929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 31042.16446440532,
            "unit": "ns/iter",
            "extra": "iterations: 26942\ncpu: 31041.310964293632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 280881.4431459334,
            "unit": "ns/iter",
            "extra": "iterations: 3166\ncpu: 280870.9096651942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 214475.1241766296,
            "unit": "ns/iter",
            "extra": "iterations: 4099\ncpu: 214469.7487191999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 214336.20859641314,
            "unit": "ns/iter",
            "extra": "iterations: 4118\ncpu: 214327.44050509986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 213808.7962154254,
            "unit": "ns/iter",
            "extra": "iterations: 4122\ncpu: 213801.47986414446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 108738.81730531117,
            "unit": "ns/iter",
            "extra": "iterations: 8090\ncpu: 108734.48702101312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 203574.20380246342,
            "unit": "ns/iter",
            "extra": "iterations: 4313\ncpu: 203568.62972409002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 243.0433853550781,
            "unit": "ns/iter",
            "extra": "iterations: 2878091\ncpu: 243.03512293391836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1689.9086962829565,
            "unit": "ns/iter",
            "extra": "iterations: 413510\ncpu: 1689.8539333994327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1302.471350369807,
            "unit": "ns/iter",
            "extra": "iterations: 536342\ncpu: 1302.4275555522413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1226.5944987205196,
            "unit": "ns/iter",
            "extra": "iterations: 568595\ncpu: 1226.581134199212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 1008.1426440908073,
            "unit": "ns/iter",
            "extra": "iterations: 694666\ncpu: 1008.1364281539676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9764.661609092593,
            "unit": "ns/iter",
            "extra": "iterations: 71444\ncpu: 9764.299311348765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13180.383501354427,
            "unit": "ns/iter",
            "extra": "iterations: 53168\ncpu: 13179.78107132106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3038.5978633726822,
            "unit": "ns/iter",
            "extra": "iterations: 229427\ncpu: 3038.49634088401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3303.80160701614,
            "unit": "ns/iter",
            "extra": "iterations: 229867\ncpu: 3303.6090434903545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3043.446690206266,
            "unit": "ns/iter",
            "extra": "iterations: 233081\ncpu: 3043.3853467249523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5756.136578752693,
            "unit": "ns/iter",
            "extra": "iterations: 121710\ncpu: 5755.932955385726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5821.588010745173,
            "unit": "ns/iter",
            "extra": "iterations: 120241\ncpu: 5821.395364309994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1993.0372304283637,
            "unit": "ns/iter",
            "extra": "iterations: 350278\ncpu: 1992.9778632971613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10496.033215547497,
            "unit": "ns/iter",
            "extra": "iterations: 66505\ncpu: 10495.964213217067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8332.500005975502,
            "unit": "ns/iter",
            "extra": "iterations: 83671\ncpu: 8332.296733635192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8299.927164750155,
            "unit": "ns/iter",
            "extra": "iterations: 84698\ncpu: 8299.618645068482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8106.980884344767,
            "unit": "ns/iter",
            "extra": "iterations: 86369\ncpu: 8106.633166992664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18329.077125511947,
            "unit": "ns/iter",
            "extra": "iterations: 38379\ncpu: 18328.41658198504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 58231.06520109774,
            "unit": "ns/iter",
            "extra": "iterations: 12009\ncpu: 58230.69364643222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 48695.0297029692,
            "unit": "ns/iter",
            "extra": "iterations: 14443\ncpu: 48693.26317247093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 48153.13823428291,
            "unit": "ns/iter",
            "extra": "iterations: 14555\ncpu: 48150.90346959807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 48564.57554202969,
            "unit": "ns/iter",
            "extra": "iterations: 14621\ncpu: 48563.34040079264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27757.375699377353,
            "unit": "ns/iter",
            "extra": "iterations: 25201\ncpu: 27757.259632553887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 47255.08278881456,
            "unit": "ns/iter",
            "extra": "iterations: 14845\ncpu: 47255.33849781141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2049.285099052535,
            "unit": "ns/iter",
            "extra": "iterations: 347139\ncpu: 2049.2295593407666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10372.82963830714,
            "unit": "ns/iter",
            "extra": "iterations: 67433\ncpu: 10372.64247475268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9609.90466832498,
            "unit": "ns/iter",
            "extra": "iterations: 72767\ncpu: 9609.9413195543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9644.205772202613,
            "unit": "ns/iter",
            "extra": "iterations: 71827\ncpu: 9643.821961101037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9186.172308583213,
            "unit": "ns/iter",
            "extra": "iterations: 76038\ncpu: 9186.067492569437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 20314.812538413968,
            "unit": "ns/iter",
            "extra": "iterations: 34167\ncpu: 20314.52571194437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 59614.291333219495,
            "unit": "ns/iter",
            "extra": "iterations: 11746\ncpu: 59614.75395879432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 49433.6071048709,
            "unit": "ns/iter",
            "extra": "iterations: 14103\ncpu: 49433.46096575131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 48280.70123422501,
            "unit": "ns/iter",
            "extra": "iterations: 14503\ncpu: 48280.34199820798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 48342.14758620717,
            "unit": "ns/iter",
            "extra": "iterations: 14500\ncpu: 48341.06206896516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 29433.558876847903,
            "unit": "ns/iter",
            "extra": "iterations: 23719\ncpu: 29433.724018719124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 48419.920945337595,
            "unit": "ns/iter",
            "extra": "iterations: 14471\ncpu: 48419.53562296924 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}