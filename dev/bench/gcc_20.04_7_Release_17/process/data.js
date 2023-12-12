window.BENCHMARK_DATA = {
  "lastUpdate": 1702382248851,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-7 20.04 Release c++-17": [
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
        "date": 1702381102430,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1915.7784352089996,
            "unit": "ns/iter",
            "extra": "iterations: 359818\ncpu: 1915.7726961964104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 28266.753352506872,
            "unit": "ns/iter",
            "extra": "iterations: 28859\ncpu: 28265.28985758342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 57530.56924566189,
            "unit": "ns/iter",
            "extra": "iterations: 14463\ncpu: 57530.4639424739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 71768.12654903923,
            "unit": "ns/iter",
            "extra": "iterations: 12185\ncpu: 71765.73656134594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 100712.74158405392,
            "unit": "ns/iter",
            "extra": "iterations: 9179\ncpu: 100711.17768820137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 124807.47545480898,
            "unit": "ns/iter",
            "extra": "iterations: 6926\ncpu: 124805.51544903267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 151237.3747213125,
            "unit": "ns/iter",
            "extra": "iterations: 5831\ncpu: 151235.56851311962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 175297.556632349,
            "unit": "ns/iter",
            "extra": "iterations: 4953\ncpu: 175292.50959014738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 200833.18338238163,
            "unit": "ns/iter",
            "extra": "iterations: 4417\ncpu: 200831.08444645675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1634.0590572767592,
            "unit": "ns/iter",
            "extra": "iterations: 375720\ncpu: 1633.980623868838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1342.7238758088977,
            "unit": "ns/iter",
            "extra": "iterations: 522131\ncpu: 1342.6678362326707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1327.0135008789812,
            "unit": "ns/iter",
            "extra": "iterations: 527299\ncpu: 1326.9319683898493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1303.9032050064507,
            "unit": "ns/iter",
            "extra": "iterations: 536598\ncpu: 1303.8324779443833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2441.157380919958,
            "unit": "ns/iter",
            "extra": "iterations: 286299\ncpu: 2441.011320332939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 8140.27555078687,
            "unit": "ns/iter",
            "extra": "iterations: 101582\ncpu: 8139.884034573062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 48167.008010760364,
            "unit": "ns/iter",
            "extra": "iterations: 17102\ncpu: 48164.384282540086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 36826.343064711255,
            "unit": "ns/iter",
            "extra": "iterations: 22299\ncpu: 36824.89797748769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 37870.769405230116,
            "unit": "ns/iter",
            "extra": "iterations: 21605\ncpu: 37867.35477898634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 37456.096761060355,
            "unit": "ns/iter",
            "extra": "iterations: 22106\ncpu: 37454.532706052625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 88511.2877565607,
            "unit": "ns/iter",
            "extra": "iterations: 9793\ncpu: 88503.78842030033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 862408.4540441397,
            "unit": "ns/iter",
            "extra": "iterations: 1088\ncpu: 862398.5294117656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 719891.219568545,
            "unit": "ns/iter",
            "extra": "iterations: 1298\ncpu: 719870.8012326648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 716601.6761319741,
            "unit": "ns/iter",
            "extra": "iterations: 1303\ncpu: 716595.3184957776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 708178.5692425611,
            "unit": "ns/iter",
            "extra": "iterations: 1307\ncpu: 708153.0221882175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 511386.82155476906,
            "unit": "ns/iter",
            "extra": "iterations: 1698\ncpu: 511385.92461719655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 712533.725670466,
            "unit": "ns/iter",
            "extra": "iterations: 1305\ncpu: 712530.268199234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3860811.881632771,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3860704.4897959237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1697822.3931777158,
            "unit": "ns/iter",
            "extra": "iterations: 557\ncpu: 1697821.72351885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 5097793.602150462,
            "unit": "ns/iter",
            "extra": "iterations: 186\ncpu: 5097688.172042998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 12944.617183051398,
            "unit": "ns/iter",
            "extra": "iterations: 64971\ncpu: 12944.46291422325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 54247.30930000124,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54246.45000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 49815.545438176574,
            "unit": "ns/iter",
            "extra": "iterations: 16660\ncpu: 49812.76110444194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 50503.24118364809,
            "unit": "ns/iter",
            "extra": "iterations: 16390\ncpu: 50498.163514338135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 51277.14705882329,
            "unit": "ns/iter",
            "extra": "iterations: 15844\ncpu: 51274.1100732139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 100155.41481139563,
            "unit": "ns/iter",
            "extra": "iterations: 8669\ncpu: 100147.49106009923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 916360.545365822,
            "unit": "ns/iter",
            "extra": "iterations: 1025\ncpu: 916330.1463414641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 734770.7529320046,
            "unit": "ns/iter",
            "extra": "iterations: 1279\ncpu: 734723.1430805328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 737677.648394679,
            "unit": "ns/iter",
            "extra": "iterations: 1277\ncpu: 737657.5567736907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 726319.6924254029,
            "unit": "ns/iter",
            "extra": "iterations: 1307\ncpu: 726219.9693955651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 524023.48984467366,
            "unit": "ns/iter",
            "extra": "iterations: 1674\ncpu: 524010.15531660593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 727576.0579598206,
            "unit": "ns/iter",
            "extra": "iterations: 1294\ncpu: 727557.1097372493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 4048616.211206955,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4048442.2413793234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1759815.9669724829,
            "unit": "ns/iter",
            "extra": "iterations: 545\ncpu: 1759769.5412844012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 8952.905042772747,
            "unit": "ns/iter",
            "extra": "iterations: 92231\ncpu: 8952.74040181717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 49884.995167605586,
            "unit": "ns/iter",
            "extra": "iterations: 16348\ncpu: 49883.637142158164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 35892.884391065694,
            "unit": "ns/iter",
            "extra": "iterations: 23147\ncpu: 35892.58219207664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 35505.99508168643,
            "unit": "ns/iter",
            "extra": "iterations: 23382\ncpu: 35505.08510820278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 37405.001531324735,
            "unit": "ns/iter",
            "extra": "iterations: 22203\ncpu: 37404.693059496516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 86377.4004567594,
            "unit": "ns/iter",
            "extra": "iterations: 10071\ncpu: 86374.4712540958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 887714.9971830767,
            "unit": "ns/iter",
            "extra": "iterations: 1065\ncpu: 887713.8028169009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 710071.4743589638,
            "unit": "ns/iter",
            "extra": "iterations: 1326\ncpu: 710041.0256410276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 704494.5683345932,
            "unit": "ns/iter",
            "extra": "iterations: 1339\ncpu: 704491.4861837154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 704323.4858630972,
            "unit": "ns/iter",
            "extra": "iterations: 1344\ncpu: 704293.2291666685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 512272.19560184627,
            "unit": "ns/iter",
            "extra": "iterations: 1728\ncpu: 512269.09722222347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 712321.6280991738,
            "unit": "ns/iter",
            "extra": "iterations: 1331\ncpu: 712267.993989483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 704.6597431913885,
            "unit": "ns/iter",
            "extra": "iterations: 990543\ncpu: 704.6324086889757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4976.787826000495,
            "unit": "ns/iter",
            "extra": "iterations: 140644\ncpu: 4976.540058587672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3917.769965970288,
            "unit": "ns/iter",
            "extra": "iterations: 184251\ncpu: 3917.7974610721167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3927.732396816841,
            "unit": "ns/iter",
            "extra": "iterations: 178178\ncpu: 3927.5056404269653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2971.5872145345234,
            "unit": "ns/iter",
            "extra": "iterations: 235580\ncpu: 2971.3621699635155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 23305.13862718762,
            "unit": "ns/iter",
            "extra": "iterations: 29720\ncpu: 23303.179676985266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 50469.946072767,
            "unit": "ns/iter",
            "extra": "iterations: 13852\ncpu: 50470.95726248926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 11812.05229034698,
            "unit": "ns/iter",
            "extra": "iterations: 59074\ncpu: 11810.811863087001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 11766.046257217375,
            "unit": "ns/iter",
            "extra": "iterations: 59234\ncpu: 11765.249687679436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 11748.38089648417,
            "unit": "ns/iter",
            "extra": "iterations: 59633\ncpu: 11747.852699008929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 24139.06784610121,
            "unit": "ns/iter",
            "extra": "iterations: 29110\ncpu: 24138.5606320853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 23383.649059623418,
            "unit": "ns/iter",
            "extra": "iterations: 29988\ncpu: 23382.673069227538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 6885.201298508804,
            "unit": "ns/iter",
            "extra": "iterations: 101347\ncpu: 6884.789880312229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 34865.27196382463,
            "unit": "ns/iter",
            "extra": "iterations: 20124\ncpu: 34864.25163983281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 27924.47308372075,
            "unit": "ns/iter",
            "extra": "iterations: 24892\ncpu: 27923.16406877692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 27423.797567673973,
            "unit": "ns/iter",
            "extra": "iterations: 25490\ncpu: 27421.40839544925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 28758.843152539135,
            "unit": "ns/iter",
            "extra": "iterations: 24374\ncpu: 28756.99515877529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 59486.239086123605,
            "unit": "ns/iter",
            "extra": "iterations: 11774\ncpu: 59486.71649397017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 236686.5166173221,
            "unit": "ns/iter",
            "extra": "iterations: 3039\ncpu: 236672.22770648295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 196381.30875316818,
            "unit": "ns/iter",
            "extra": "iterations: 3553\ncpu: 196382.66253869954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 192766.02653399727,
            "unit": "ns/iter",
            "extra": "iterations: 3618\ncpu: 192750.773908236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 192137.93413830263,
            "unit": "ns/iter",
            "extra": "iterations: 3644\ncpu: 192131.4489571885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 116650.28407005662,
            "unit": "ns/iter",
            "extra": "iterations: 5995\ncpu: 116641.26772310329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 194514.26048070347,
            "unit": "ns/iter",
            "extra": "iterations: 3578\ncpu: 194507.6858580213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 7118.138341890413,
            "unit": "ns/iter",
            "extra": "iterations: 98365\ncpu: 7117.907792405837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 34003.68375359691,
            "unit": "ns/iter",
            "extra": "iterations: 20503\ncpu: 34002.028971369546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 27979.567601071805,
            "unit": "ns/iter",
            "extra": "iterations: 25007\ncpu: 27978.022153796606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 29303.05414452569,
            "unit": "ns/iter",
            "extra": "iterations: 23899\ncpu: 29300.47282313093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 29763.789373088446,
            "unit": "ns/iter",
            "extra": "iterations: 23544\ncpu: 29762.287631668063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 59705.490792842545,
            "unit": "ns/iter",
            "extra": "iterations: 11730\ncpu: 59703.299232736084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 222814.67896912852,
            "unit": "ns/iter",
            "extra": "iterations: 3143\ncpu: 222813.90391346198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 190836.51673469343,
            "unit": "ns/iter",
            "extra": "iterations: 3675\ncpu: 190829.74149659925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 188902.5859353922,
            "unit": "ns/iter",
            "extra": "iterations: 3683\ncpu: 188904.04561498694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 189449.50027472887,
            "unit": "ns/iter",
            "extra": "iterations: 3640\ncpu: 189448.2692307715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 115143.61858552785,
            "unit": "ns/iter",
            "extra": "iterations: 6080\ncpu: 115137.23684210407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 197415.57146813493,
            "unit": "ns/iter",
            "extra": "iterations: 3610\ncpu: 197402.71468144123 ns\nthreads: 1"
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
        "date": 1702382248221,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1811.9030660261553,
            "unit": "ns/iter",
            "extra": "iterations: 383591\ncpu: 1811.8722806322362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 27597.125427633357,
            "unit": "ns/iter",
            "extra": "iterations: 29523\ncpu: 27597.30718422925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 56215.497049847196,
            "unit": "ns/iter",
            "extra": "iterations: 14745\ncpu: 56213.55713801287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 70314.77207113811,
            "unit": "ns/iter",
            "extra": "iterations: 12539\ncpu: 70312.64056144832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 97829.4698718574,
            "unit": "ns/iter",
            "extra": "iterations: 9443\ncpu: 97823.27650111192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 122244.78100747315,
            "unit": "ns/iter",
            "extra": "iterations: 7087\ncpu: 122240.69422886967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 148066.77938214422,
            "unit": "ns/iter",
            "extra": "iterations: 5956\ncpu: 148056.31296171926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 171645.44253554672,
            "unit": "ns/iter",
            "extra": "iterations: 5064\ncpu: 171638.6255924172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 195580.68573367022,
            "unit": "ns/iter",
            "extra": "iterations: 4423\ncpu: 195566.99073027345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1606.201026360083,
            "unit": "ns/iter",
            "extra": "iterations: 437858\ncpu: 1606.098552498755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1306.73774090612,
            "unit": "ns/iter",
            "extra": "iterations: 536153\ncpu: 1306.7040564913364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1336.2751098902509,
            "unit": "ns/iter",
            "extra": "iterations: 521657\ncpu: 1336.2354957376203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1303.3876934607326,
            "unit": "ns/iter",
            "extra": "iterations: 536349\ncpu: 1303.309971678887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2467.6094387413164,
            "unit": "ns/iter",
            "extra": "iterations: 290971\ncpu: 2467.539376776375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 8736.098408088796,
            "unit": "ns/iter",
            "extra": "iterations: 94352\ncpu: 8735.53183822282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 51138.7514833137,
            "unit": "ns/iter",
            "extra": "iterations: 16180\ncpu: 51137.28059332502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 38624.6999716827,
            "unit": "ns/iter",
            "extra": "iterations: 21188\ncpu: 38623.40003775725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 37493.36062970825,
            "unit": "ns/iter",
            "extra": "iterations: 22042\ncpu: 37493.22656746218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 37363.32402863511,
            "unit": "ns/iter",
            "extra": "iterations: 22211\ncpu: 37361.492053487076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 91594.33524744363,
            "unit": "ns/iter",
            "extra": "iterations: 9578\ncpu: 91593.2866986846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 853510.4681614295,
            "unit": "ns/iter",
            "extra": "iterations: 1115\ncpu: 853478.8340807201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 696431.3197893061,
            "unit": "ns/iter",
            "extra": "iterations: 1329\ncpu: 696423.100075245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 695335.9249628636,
            "unit": "ns/iter",
            "extra": "iterations: 1346\ncpu: 695314.6359583944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 704498.5684051518,
            "unit": "ns/iter",
            "extra": "iterations: 1323\ncpu: 704492.5170068028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 495246.73234623333,
            "unit": "ns/iter",
            "extra": "iterations: 1756\ncpu: 495225.39863325644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 697088.0784753411,
            "unit": "ns/iter",
            "extra": "iterations: 1338\ncpu: 697048.0568011949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3753352.8840001505,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3753147.999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1635689.590673616,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1635553.8860103672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4940250.40104192,
            "unit": "ns/iter",
            "extra": "iterations: 192\ncpu: 4939947.395833329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 12962.746622860503,
            "unit": "ns/iter",
            "extra": "iterations: 65440\ncpu: 12962.10268948656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 55316.395500000224,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55316.91000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 50295.08785498799,
            "unit": "ns/iter",
            "extra": "iterations: 16550\ncpu: 50291.34743202432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 51586.05402183363,
            "unit": "ns/iter",
            "extra": "iterations: 15938\ncpu: 51583.66796335822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 51374.192116697384,
            "unit": "ns/iter",
            "extra": "iterations: 16110\ncpu: 51372.51396648043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 101823.74450323416,
            "unit": "ns/iter",
            "extra": "iterations: 8505\ncpu: 101816.16696061137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 893495.2490530459,
            "unit": "ns/iter",
            "extra": "iterations: 1056\ncpu: 893432.6704545475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 725761.5772797919,
            "unit": "ns/iter",
            "extra": "iterations: 1294\ncpu: 725693.8948995351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 728982.4552469028,
            "unit": "ns/iter",
            "extra": "iterations: 1296\ncpu: 728967.6697530858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 730031.9537036791,
            "unit": "ns/iter",
            "extra": "iterations: 1296\ncpu: 730013.7345678988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 519391.50177515554,
            "unit": "ns/iter",
            "extra": "iterations: 1690\ncpu: 519382.66272189294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 710883.7945412861,
            "unit": "ns/iter",
            "extra": "iterations: 1319\ncpu: 710880.5155420774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3973031.717299423,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3973005.4852320654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1712769.635036588,
            "unit": "ns/iter",
            "extra": "iterations: 548\ncpu: 1712730.1094890488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 8965.228507761758,
            "unit": "ns/iter",
            "extra": "iterations: 92894\ncpu: 8965.281934247576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 47701.12030208508,
            "unit": "ns/iter",
            "extra": "iterations: 16949\ncpu: 47700.72570653167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 35728.79753392891,
            "unit": "ns/iter",
            "extra": "iterations: 23357\ncpu: 35727.280900800724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 35193.529951588396,
            "unit": "ns/iter",
            "extra": "iterations: 23755\ncpu: 35192.464744264325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 37193.10870339209,
            "unit": "ns/iter",
            "extra": "iterations: 22474\ncpu: 37192.64483403071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 86832.46176352323,
            "unit": "ns/iter",
            "extra": "iterations: 9912\ncpu: 86832.10250201773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 871770.1761992581,
            "unit": "ns/iter",
            "extra": "iterations: 1084\ncpu: 871753.5977859754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 704756.9970104609,
            "unit": "ns/iter",
            "extra": "iterations: 1338\ncpu: 704738.2660687576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 702515.5830230764,
            "unit": "ns/iter",
            "extra": "iterations: 1343\ncpu: 702512.8816083373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 701099.3487332528,
            "unit": "ns/iter",
            "extra": "iterations: 1342\ncpu: 701087.108792848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 505202.0640507854,
            "unit": "ns/iter",
            "extra": "iterations: 1733\ncpu: 505184.1892671682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 694624.5728011783,
            "unit": "ns/iter",
            "extra": "iterations: 1353\ncpu: 694605.9866962299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 685.9009024579418,
            "unit": "ns/iter",
            "extra": "iterations: 1018330\ncpu: 685.8955348462663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4931.8222546820125,
            "unit": "ns/iter",
            "extra": "iterations: 141714\ncpu: 4931.859237619404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3852.7422557036075,
            "unit": "ns/iter",
            "extra": "iterations: 181327\ncpu: 3852.671141087642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3844.6847079175427,
            "unit": "ns/iter",
            "extra": "iterations: 188457\ncpu: 3844.638299452905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2897.286699918346,
            "unit": "ns/iter",
            "extra": "iterations: 242194\ncpu: 2897.2633508674867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 23740.387289113234,
            "unit": "ns/iter",
            "extra": "iterations: 29518\ncpu: 23739.945118233012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 48211.73108779538,
            "unit": "ns/iter",
            "extra": "iterations: 14488\ncpu: 48210.477636664655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 11487.172521032997,
            "unit": "ns/iter",
            "extra": "iterations: 61094\ncpu: 11487.067469800733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 11532.132383496677,
            "unit": "ns/iter",
            "extra": "iterations: 60642\ncpu: 11532.089970647503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 11574.476625763267,
            "unit": "ns/iter",
            "extra": "iterations: 60387\ncpu: 11574.433238942247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 23337.21500946673,
            "unit": "ns/iter",
            "extra": "iterations: 30101\ncpu: 23337.0685359291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 22456.38890141404,
            "unit": "ns/iter",
            "extra": "iterations: 31049\ncpu: 22456.224032980022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 6809.424574526307,
            "unit": "ns/iter",
            "extra": "iterations: 103473\ncpu: 6809.3927884568675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 34041.01886792508,
            "unit": "ns/iter",
            "extra": "iterations: 20511\ncpu: 34041.27053775978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 26989.666419685433,
            "unit": "ns/iter",
            "extra": "iterations: 25643\ncpu: 26988.920953086752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 26658.55376631132,
            "unit": "ns/iter",
            "extra": "iterations: 26206\ncpu: 26658.7651682821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 27554.126512056802,
            "unit": "ns/iter",
            "extra": "iterations: 25958\ncpu: 27553.675167578236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 59597.35488542494,
            "unit": "ns/iter",
            "extra": "iterations: 11739\ncpu: 59597.103671522054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 222098.9720279617,
            "unit": "ns/iter",
            "extra": "iterations: 3146\ncpu: 222091.13159567973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 190333.95364597504,
            "unit": "ns/iter",
            "extra": "iterations: 3689\ncpu: 190327.86663052178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 187114.67424858437,
            "unit": "ns/iter",
            "extra": "iterations: 3693\ncpu: 187109.9106417513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 189810.77846902297,
            "unit": "ns/iter",
            "extra": "iterations: 3697\ncpu: 189809.84582093346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 112802.98628147271,
            "unit": "ns/iter",
            "extra": "iterations: 6196\ncpu: 112803.77663008418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 189397.70604171854,
            "unit": "ns/iter",
            "extra": "iterations: 3691\ncpu: 189394.66269303777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 6606.513401030919,
            "unit": "ns/iter",
            "extra": "iterations: 105962\ncpu: 6606.449481889736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 33580.7626226373,
            "unit": "ns/iter",
            "extra": "iterations: 20895\ncpu: 33580.16271835349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 27916.748576661234,
            "unit": "ns/iter",
            "extra": "iterations: 25117\ncpu: 27916.960624278676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 28165.163618048664,
            "unit": "ns/iter",
            "extra": "iterations: 24820\ncpu: 28164.734085415224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 29428.129973921456,
            "unit": "ns/iter",
            "extra": "iterations: 23774\ncpu: 29427.90443341459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 59127.13517171212,
            "unit": "ns/iter",
            "extra": "iterations: 11822\ncpu: 59126.222297411376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 219713.55290422708,
            "unit": "ns/iter",
            "extra": "iterations: 3185\ncpu: 219711.77394034507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 187603.57333690353,
            "unit": "ns/iter",
            "extra": "iterations: 3743\ncpu: 187597.0344643329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 187334.8307075963,
            "unit": "ns/iter",
            "extra": "iterations: 3745\ncpu: 187329.26568758252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 188569.45797412464,
            "unit": "ns/iter",
            "extra": "iterations: 3712\ncpu: 188565.59806034525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 111244.83973341993,
            "unit": "ns/iter",
            "extra": "iterations: 6302\ncpu: 111244.36686765998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 190100.9097335442,
            "unit": "ns/iter",
            "extra": "iterations: 3678\ncpu: 190102.39260467852 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}