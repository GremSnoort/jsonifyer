window.BENCHMARK_DATA = {
  "lastUpdate": 1702381396477,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize gcc-12 22.04 Debug c++-17": [
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
        "date": 1702381396132,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7929.8057042208675,
            "unit": "ns/iter",
            "extra": "iterations: 88005\ncpu: 7929.3926481449935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 98651.55499134344,
            "unit": "ns/iter",
            "extra": "iterations: 8665\ncpu: 98646.9474899019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 190491.70574163122,
            "unit": "ns/iter",
            "extra": "iterations: 4598\ncpu: 190485.81992170503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 284580.0950345506,
            "unit": "ns/iter",
            "extra": "iterations: 3041\ncpu: 284570.5688918118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 370309.464935045,
            "unit": "ns/iter",
            "extra": "iterations: 2310\ncpu: 370284.0692640693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 461174.25066106155,
            "unit": "ns/iter",
            "extra": "iterations: 1891\ncpu: 461153.7810682178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 552445.9044907913,
            "unit": "ns/iter",
            "extra": "iterations: 1581\ncpu: 552410.8159392793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 515661.82399994886,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515641.8999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 587525.8659999645,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 587496.8000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6152.460910448497,
            "unit": "ns/iter",
            "extra": "iterations: 113790\ncpu: 6152.233060901652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5056.820986271089,
            "unit": "ns/iter",
            "extra": "iterations: 138319\ncpu: 5056.763712866626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4992.570419174287,
            "unit": "ns/iter",
            "extra": "iterations: 140395\ncpu: 4992.365112717687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5067.19753899122,
            "unit": "ns/iter",
            "extra": "iterations: 138236\ncpu: 5067.098295668271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8863.288178583129,
            "unit": "ns/iter",
            "extra": "iterations: 79246\ncpu: 8862.714837341944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 48917.45127293896,
            "unit": "ns/iter",
            "extra": "iterations: 16890\ncpu: 48916.57193605683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 207218.94915253954,
            "unit": "ns/iter",
            "extra": "iterations: 4130\ncpu: 207214.1646489104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 166899.0835443106,
            "unit": "ns/iter",
            "extra": "iterations: 5135\ncpu: 166894.64459591074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 165342.32530120327,
            "unit": "ns/iter",
            "extra": "iterations: 5146\ncpu: 165340.16712009333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 168032.91080549624,
            "unit": "ns/iter",
            "extra": "iterations: 5090\ncpu: 168028.82121807494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 372668.4283870899,
            "unit": "ns/iter",
            "extra": "iterations: 2325\ncpu: 372658.1505376344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3083487.5490196203,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3083382.6797385705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2516975.619945908,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2516905.660377362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2528248.9351353263,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2528224.594594596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2513309.569892389,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2513259.677419354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1479282.0142628963,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1479255.784469096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2436700.1256543603,
            "unit": "ns/iter",
            "extra": "iterations: 382\ncpu: 2436642.1465968634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10384753.815533832,
            "unit": "ns/iter",
            "extra": "iterations: 103\ncpu: 10384644.66019417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5857904.262499858,
            "unit": "ns/iter",
            "extra": "iterations: 160\ncpu: 5857724.375000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12108000.448276585,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 12107479.310344819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 48272.89798758783,
            "unit": "ns/iter",
            "extra": "iterations: 17243\ncpu: 48272.05242707184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 206871.93100944743,
            "unit": "ns/iter",
            "extra": "iterations: 4131\ncpu: 206867.85282014153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 169387.6273501001,
            "unit": "ns/iter",
            "extra": "iterations: 5053\ncpu: 169382.03047694443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 168473.2425255638,
            "unit": "ns/iter",
            "extra": "iterations: 5084\ncpu: 168471.47915027448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 170565.4493822173,
            "unit": "ns/iter",
            "extra": "iterations: 5018\ncpu: 170556.9549621369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 372641.6175710717,
            "unit": "ns/iter",
            "extra": "iterations: 2322\ncpu: 372626.7872523687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3059288.2385618915,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3059193.790849681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2512827.2245987644,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2512702.673796807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2529915.070652415,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2529808.1521739187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2529824.222825994,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2529699.7282608827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1478370.6263911617,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1478324.801271861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2442463.395287925,
            "unit": "ns/iter",
            "extra": "iterations: 382\ncpu: 2442370.157068062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10463204.310679749,
            "unit": "ns/iter",
            "extra": "iterations: 103\ncpu: 10462557.281553393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5929816.9240500545,
            "unit": "ns/iter",
            "extra": "iterations: 158\ncpu: 5929608.227848064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 47440.49303652917,
            "unit": "ns/iter",
            "extra": "iterations: 17520\ncpu: 47438.105022830874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 205530.11828214856,
            "unit": "ns/iter",
            "extra": "iterations: 4168\ncpu: 205520.92130518143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 166787.23834602535,
            "unit": "ns/iter",
            "extra": "iterations: 5127\ncpu: 166773.92237175684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 165145.42986687535,
            "unit": "ns/iter",
            "extra": "iterations: 5183\ncpu: 165140.49778120907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 167603.86613091975,
            "unit": "ns/iter",
            "extra": "iterations: 5102\ncpu: 167595.8839670712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 374040.7358653224,
            "unit": "ns/iter",
            "extra": "iterations: 2317\ncpu: 374034.3979283549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3062639.5081966263,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3062546.5573770446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2501631.6631014408,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2501621.390374344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2525390.83783791,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2525339.7297297404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2517840.889784869,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2517760.2150537632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1473080.3438485775,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1473052.208201893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2439579.856396822,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2439527.154046998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2720.6271247738778,
            "unit": "ns/iter",
            "extra": "iterations: 257145\ncpu: 2720.542495479221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 21343.48890379464,
            "unit": "ns/iter",
            "extra": "iterations: 32804\ncpu: 21342.72954517744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 15855.72900011211,
            "unit": "ns/iter",
            "extra": "iterations: 44155\ncpu: 15855.336881440278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 16251.05736503908,
            "unit": "ns/iter",
            "extra": "iterations: 44365\ncpu: 16250.321199143451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12376.622814158953,
            "unit": "ns/iter",
            "extra": "iterations: 56500\ncpu: 12376.253097345076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 84219.40582499956,
            "unit": "ns/iter",
            "extra": "iterations: 8309\ncpu: 84219.08773619024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 196498.50589224003,
            "unit": "ns/iter",
            "extra": "iterations: 3564\ncpu: 196496.24017957057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 47883.43009649063,
            "unit": "ns/iter",
            "extra": "iterations: 14613\ncpu: 47883.23410661696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 48567.833264035784,
            "unit": "ns/iter",
            "extra": "iterations: 14430\ncpu: 48566.327096326626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 48385.32231519637,
            "unit": "ns/iter",
            "extra": "iterations: 14461\ncpu: 48382.6291404473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 101348.67327448541,
            "unit": "ns/iter",
            "extra": "iterations: 6911\ncpu: 101345.50716249489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 90930.88284519165,
            "unit": "ns/iter",
            "extra": "iterations: 7648\ncpu: 90929.00104602514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 23014.738511603806,
            "unit": "ns/iter",
            "extra": "iterations: 30422\ncpu: 23013.99644993735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 111607.7297858728,
            "unit": "ns/iter",
            "extra": "iterations: 6258\ncpu: 111606.35985938061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 89248.89253882614,
            "unit": "ns/iter",
            "extra": "iterations: 7854\ncpu: 89246.06569900695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 89713.23432893441,
            "unit": "ns/iter",
            "extra": "iterations: 7801\ncpu: 89711.16523522623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 89942.19330426531,
            "unit": "ns/iter",
            "extra": "iterations: 7796\ncpu: 89941.82914315107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 169160.8707104924,
            "unit": "ns/iter",
            "extra": "iterations: 4138\ncpu: 169156.76655389284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 804747.1121387857,
            "unit": "ns/iter",
            "extra": "iterations: 865\ncpu: 804737.2254335211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 678083.354651074,
            "unit": "ns/iter",
            "extra": "iterations: 1032\ncpu: 678063.3720930232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 680684.4854086211,
            "unit": "ns/iter",
            "extra": "iterations: 1028\ncpu: 680664.2023346338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 685268.0822722557,
            "unit": "ns/iter",
            "extra": "iterations: 1021\ncpu: 685265.5239960809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 428942.5499081447,
            "unit": "ns/iter",
            "extra": "iterations: 1633\ncpu: 428933.00673607097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 663914.4293838451,
            "unit": "ns/iter",
            "extra": "iterations: 1055\ncpu: 663899.6208530837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 22551.249491527364,
            "unit": "ns/iter",
            "extra": "iterations: 30975\ncpu: 22550.682808716607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 112828.88368336436,
            "unit": "ns/iter",
            "extra": "iterations: 6190\ncpu: 112828.51373182541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 90369.57133626696,
            "unit": "ns/iter",
            "extra": "iterations: 7738\ncpu: 90368.46730421275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 90386.10983480536,
            "unit": "ns/iter",
            "extra": "iterations: 7748\ncpu: 90383.50542075526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 90799.09421229991,
            "unit": "ns/iter",
            "extra": "iterations: 7706\ncpu: 90796.43135219371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 171616.82957330832,
            "unit": "ns/iter",
            "extra": "iterations: 4078\ncpu: 171612.72682687387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 804246.4057471915,
            "unit": "ns/iter",
            "extra": "iterations: 870\ncpu: 804243.3333333199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 678585.4747571984,
            "unit": "ns/iter",
            "extra": "iterations: 1030\ncpu: 678577.9611650507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 675173.0653218081,
            "unit": "ns/iter",
            "extra": "iterations: 1041\ncpu: 675157.732949087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 681356.2692683795,
            "unit": "ns/iter",
            "extra": "iterations: 1025\ncpu: 681336.5853658507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 426741.3145998472,
            "unit": "ns/iter",
            "extra": "iterations: 1637\ncpu: 426731.45998778724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 664760.1994301991,
            "unit": "ns/iter",
            "extra": "iterations: 1053\ncpu: 664746.0588793893 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}