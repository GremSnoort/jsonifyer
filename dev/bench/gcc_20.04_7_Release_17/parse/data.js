window.BENCHMARK_DATA = {
  "lastUpdate": 1702382251421,
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
      }
    ]
  }
}