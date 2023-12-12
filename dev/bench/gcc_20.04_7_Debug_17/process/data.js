window.BENCHMARK_DATA = {
  "lastUpdate": 1702396454544,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-7 20.04 Debug c++-17": [
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
        "date": 1702381143287,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16121.82683728598,
            "unit": "ns/iter",
            "extra": "iterations: 42590\ncpu: 16120.929795726697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 152421.2476719269,
            "unit": "ns/iter",
            "extra": "iterations: 5584\ncpu: 152413.77148997138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 289731.5892559202,
            "unit": "ns/iter",
            "extra": "iterations: 2997\ncpu: 289724.82482482493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 425827.099852432,
            "unit": "ns/iter",
            "extra": "iterations: 2033\ncpu: 425815.0516478112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 570514.2576051615,
            "unit": "ns/iter",
            "extra": "iterations: 1545\ncpu: 570476.1165048549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 585676.8876319905,
            "unit": "ns/iter",
            "extra": "iterations: 1326\ncpu: 585649.321266968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 677058.0336011612,
            "unit": "ns/iter",
            "extra": "iterations: 1369\ncpu: 677025.2008765523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 792056.9109274274,
            "unit": "ns/iter",
            "extra": "iterations: 1089\ncpu: 792014.6005509642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 911107.219748297,
            "unit": "ns/iter",
            "extra": "iterations: 1033\ncpu: 911084.7047434648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13216.609267647991,
            "unit": "ns/iter",
            "extra": "iterations: 52980\ncpu: 13216.42129105322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11171.064607097833,
            "unit": "ns/iter",
            "extra": "iterations: 63120\ncpu: 11170.749366286433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11092.759554217935,
            "unit": "ns/iter",
            "extra": "iterations: 60837\ncpu: 11092.788927790645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11066.678614769879,
            "unit": "ns/iter",
            "extra": "iterations: 56857\ncpu: 11066.336598835673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18258.784233996903,
            "unit": "ns/iter",
            "extra": "iterations: 38120\ncpu: 18258.54669464847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 69740.91097898767,
            "unit": "ns/iter",
            "extra": "iterations: 12278\ncpu: 69741.04088613785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 364530.5682203399,
            "unit": "ns/iter",
            "extra": "iterations: 2360\ncpu: 364531.35593220324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 292096.1884602255,
            "unit": "ns/iter",
            "extra": "iterations: 2929\ncpu: 292070.74086718983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 290276.9077340638,
            "unit": "ns/iter",
            "extra": "iterations: 2948\ncpu: 290269.47082767985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 288347.1365638858,
            "unit": "ns/iter",
            "extra": "iterations: 2951\ncpu: 288337.71602846513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 562429.112000018,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 562375.7999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4812504.242268041,
            "unit": "ns/iter",
            "extra": "iterations: 194\ncpu: 4812213.402061854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3918040.252100956,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3917769.747899166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3929860.8059071517,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3929554.852320673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 4105945.0523808515,
            "unit": "ns/iter",
            "extra": "iterations: 210\ncpu: 4105656.66666666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2254173.5170731465,
            "unit": "ns/iter",
            "extra": "iterations: 410\ncpu: 2254075.3658536584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3798275.270491873,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3798116.3934426224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 15006783.1408454,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 15006049.295774655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6645700.149999811,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6645347.000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18693327.10526307,
            "unit": "ns/iter",
            "extra": "iterations: 57\ncpu: 18692022.80701755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 76897.73745415581,
            "unit": "ns/iter",
            "extra": "iterations: 11179\ncpu: 76896.01037659915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 394884.0896423699,
            "unit": "ns/iter",
            "extra": "iterations: 2153\ncpu: 394871.06363213976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 319477.92947760556,
            "unit": "ns/iter",
            "extra": "iterations: 2680\ncpu: 319454.36567164364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 317960.6766777846,
            "unit": "ns/iter",
            "extra": "iterations: 2697\ncpu: 317939.74786800175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 316421.08133088663,
            "unit": "ns/iter",
            "extra": "iterations: 2705\ncpu: 316406.5804066532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 563244.9990000055,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 563231.2999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4849611.500000073,
            "unit": "ns/iter",
            "extra": "iterations: 192\ncpu: 4849624.999999968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3943859.3644068064,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3943838.135593237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3960837.139830681,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3960797.8813559427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3929512.4599157,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3929354.430379726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2295098.9257425633,
            "unit": "ns/iter",
            "extra": "iterations: 404\ncpu: 2295105.940594066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3830856.9629630125,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3830870.370370389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15372766.657142326,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 15372534.285714323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6593922.23999987,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6593686.000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 68175.56473697048,
            "unit": "ns/iter",
            "extra": "iterations: 12489\ncpu: 68172.17551445245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 356018.2647303033,
            "unit": "ns/iter",
            "extra": "iterations: 2410\ncpu: 356019.2946058099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 282922.6950214329,
            "unit": "ns/iter",
            "extra": "iterations: 3033\ncpu: 282918.59545004956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 285397.23842823197,
            "unit": "ns/iter",
            "extra": "iterations: 3003\ncpu: 285389.0442890425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 280179.4748201577,
            "unit": "ns/iter",
            "extra": "iterations: 3058\ncpu: 280177.10922171286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 529543.2720000121,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 529545.799999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4828446.340206176,
            "unit": "ns/iter",
            "extra": "iterations: 194\ncpu: 4828363.9175257925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3905938.8319327915,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3905884.033613438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3905667.347280199,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3905627.1966527402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3910904.3875001245,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3910838.7499999786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2261477.4077669387,
            "unit": "ns/iter",
            "extra": "iterations: 412\ncpu: 2261427.42718447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3789800.6122448496,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3789774.2857142636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6226.178654106962,
            "unit": "ns/iter",
            "extra": "iterations: 112743\ncpu: 6226.213600844414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 41068.72596293167,
            "unit": "ns/iter",
            "extra": "iterations: 13812\ncpu: 41068.4187662906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 33042.23204672127,
            "unit": "ns/iter",
            "extra": "iterations: 21918\ncpu: 33041.988320102195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 33177.224099473286,
            "unit": "ns/iter",
            "extra": "iterations: 21071\ncpu: 33177.29580940641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24791.970785321915,
            "unit": "ns/iter",
            "extra": "iterations: 28205\ncpu: 24792.02623648286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 182050.8633637542,
            "unit": "ns/iter",
            "extra": "iterations: 3835\ncpu: 182049.6219035215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 317560.60753174464,
            "unit": "ns/iter",
            "extra": "iterations: 2204\ncpu: 317558.0308529929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 77872.05359317853,
            "unit": "ns/iter",
            "extra": "iterations: 9031\ncpu: 77872.22898903758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 77601.47576700835,
            "unit": "ns/iter",
            "extra": "iterations: 8996\ncpu: 77600.85593597162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 77315.2912008884,
            "unit": "ns/iter",
            "extra": "iterations: 9035\ncpu: 77315.46209186476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 153392.20741878616,
            "unit": "ns/iter",
            "extra": "iterations: 4556\ncpu: 153389.72783143187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 151527.2183037585,
            "unit": "ns/iter",
            "extra": "iterations: 4622\ncpu: 151524.7511899607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 48631.19226764631,
            "unit": "ns/iter",
            "extra": "iterations: 14407\ncpu: 48630.866939681684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 241862.37163562267,
            "unit": "ns/iter",
            "extra": "iterations: 2898\ncpu: 241862.97446515007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 194615.63983287738,
            "unit": "ns/iter",
            "extra": "iterations: 3590\ncpu: 194612.2841225635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 193844.15484765288,
            "unit": "ns/iter",
            "extra": "iterations: 3610\ncpu: 193841.10803324138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 195324.9525404784,
            "unit": "ns/iter",
            "extra": "iterations: 3582\ncpu: 195325.4606365165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 346263.25309559307,
            "unit": "ns/iter",
            "extra": "iterations: 2019\ncpu: 346264.04160475085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1344999.5153846517,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1344988.2692307495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1129014.372990277,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1129005.144694516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1129563.5928918193,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1129556.5428109886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1129762.5919355375,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1129753.5483870956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 721196.0598555044,
            "unit": "ns/iter",
            "extra": "iterations: 969\ncpu: 721197.8328173428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1117843.9408945595,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1117834.5047923427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 50422.69600981293,
            "unit": "ns/iter",
            "extra": "iterations: 13859\ncpu: 50422.33205859054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 244279.4053677119,
            "unit": "ns/iter",
            "extra": "iterations: 2869\ncpu: 244279.95817358114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 199554.17360320198,
            "unit": "ns/iter",
            "extra": "iterations: 3508\ncpu: 199552.565564425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 196949.65558996887,
            "unit": "ns/iter",
            "extra": "iterations: 3551\ncpu: 196950.18304702782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 198127.85597056895,
            "unit": "ns/iter",
            "extra": "iterations: 3534\ncpu: 198126.23089983087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 345914.37932739785,
            "unit": "ns/iter",
            "extra": "iterations: 2022\ncpu: 345912.4629080089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1345878.8766858738,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1345868.5934489255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1134342.7637540745,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1134344.822006465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1133566.7795786262,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1133547.3257698594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1132977.7893030848,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1132956.2398703364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 721803.4700413288,
            "unit": "ns/iter",
            "extra": "iterations: 968\ncpu: 721797.3140495868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1121825.185897489,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1121795.833333349 ns\nthreads: 1"
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
        "date": 1702381143287,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16121.82683728598,
            "unit": "ns/iter",
            "extra": "iterations: 42590\ncpu: 16120.929795726697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 152421.2476719269,
            "unit": "ns/iter",
            "extra": "iterations: 5584\ncpu: 152413.77148997138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 289731.5892559202,
            "unit": "ns/iter",
            "extra": "iterations: 2997\ncpu: 289724.82482482493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 425827.099852432,
            "unit": "ns/iter",
            "extra": "iterations: 2033\ncpu: 425815.0516478112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 570514.2576051615,
            "unit": "ns/iter",
            "extra": "iterations: 1545\ncpu: 570476.1165048549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 585676.8876319905,
            "unit": "ns/iter",
            "extra": "iterations: 1326\ncpu: 585649.321266968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 677058.0336011612,
            "unit": "ns/iter",
            "extra": "iterations: 1369\ncpu: 677025.2008765523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 792056.9109274274,
            "unit": "ns/iter",
            "extra": "iterations: 1089\ncpu: 792014.6005509642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 911107.219748297,
            "unit": "ns/iter",
            "extra": "iterations: 1033\ncpu: 911084.7047434648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13216.609267647991,
            "unit": "ns/iter",
            "extra": "iterations: 52980\ncpu: 13216.42129105322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11171.064607097833,
            "unit": "ns/iter",
            "extra": "iterations: 63120\ncpu: 11170.749366286433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11092.759554217935,
            "unit": "ns/iter",
            "extra": "iterations: 60837\ncpu: 11092.788927790645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11066.678614769879,
            "unit": "ns/iter",
            "extra": "iterations: 56857\ncpu: 11066.336598835673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18258.784233996903,
            "unit": "ns/iter",
            "extra": "iterations: 38120\ncpu: 18258.54669464847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 69740.91097898767,
            "unit": "ns/iter",
            "extra": "iterations: 12278\ncpu: 69741.04088613785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 364530.5682203399,
            "unit": "ns/iter",
            "extra": "iterations: 2360\ncpu: 364531.35593220324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 292096.1884602255,
            "unit": "ns/iter",
            "extra": "iterations: 2929\ncpu: 292070.74086718983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 290276.9077340638,
            "unit": "ns/iter",
            "extra": "iterations: 2948\ncpu: 290269.47082767985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 288347.1365638858,
            "unit": "ns/iter",
            "extra": "iterations: 2951\ncpu: 288337.71602846513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 562429.112000018,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 562375.7999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4812504.242268041,
            "unit": "ns/iter",
            "extra": "iterations: 194\ncpu: 4812213.402061854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3918040.252100956,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3917769.747899166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3929860.8059071517,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3929554.852320673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 4105945.0523808515,
            "unit": "ns/iter",
            "extra": "iterations: 210\ncpu: 4105656.66666666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2254173.5170731465,
            "unit": "ns/iter",
            "extra": "iterations: 410\ncpu: 2254075.3658536584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3798275.270491873,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3798116.3934426224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 15006783.1408454,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 15006049.295774655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6645700.149999811,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6645347.000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18693327.10526307,
            "unit": "ns/iter",
            "extra": "iterations: 57\ncpu: 18692022.80701755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 76897.73745415581,
            "unit": "ns/iter",
            "extra": "iterations: 11179\ncpu: 76896.01037659915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 394884.0896423699,
            "unit": "ns/iter",
            "extra": "iterations: 2153\ncpu: 394871.06363213976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 319477.92947760556,
            "unit": "ns/iter",
            "extra": "iterations: 2680\ncpu: 319454.36567164364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 317960.6766777846,
            "unit": "ns/iter",
            "extra": "iterations: 2697\ncpu: 317939.74786800175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 316421.08133088663,
            "unit": "ns/iter",
            "extra": "iterations: 2705\ncpu: 316406.5804066532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 563244.9990000055,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 563231.2999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4849611.500000073,
            "unit": "ns/iter",
            "extra": "iterations: 192\ncpu: 4849624.999999968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3943859.3644068064,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3943838.135593237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3960837.139830681,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3960797.8813559427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3929512.4599157,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3929354.430379726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2295098.9257425633,
            "unit": "ns/iter",
            "extra": "iterations: 404\ncpu: 2295105.940594066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3830856.9629630125,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3830870.370370389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15372766.657142326,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 15372534.285714323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6593922.23999987,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6593686.000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 68175.56473697048,
            "unit": "ns/iter",
            "extra": "iterations: 12489\ncpu: 68172.17551445245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 356018.2647303033,
            "unit": "ns/iter",
            "extra": "iterations: 2410\ncpu: 356019.2946058099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 282922.6950214329,
            "unit": "ns/iter",
            "extra": "iterations: 3033\ncpu: 282918.59545004956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 285397.23842823197,
            "unit": "ns/iter",
            "extra": "iterations: 3003\ncpu: 285389.0442890425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 280179.4748201577,
            "unit": "ns/iter",
            "extra": "iterations: 3058\ncpu: 280177.10922171286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 529543.2720000121,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 529545.799999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4828446.340206176,
            "unit": "ns/iter",
            "extra": "iterations: 194\ncpu: 4828363.9175257925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3905938.8319327915,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3905884.033613438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3905667.347280199,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3905627.1966527402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3910904.3875001245,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3910838.7499999786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2261477.4077669387,
            "unit": "ns/iter",
            "extra": "iterations: 412\ncpu: 2261427.42718447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3789800.6122448496,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3789774.2857142636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6226.178654106962,
            "unit": "ns/iter",
            "extra": "iterations: 112743\ncpu: 6226.213600844414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 41068.72596293167,
            "unit": "ns/iter",
            "extra": "iterations: 13812\ncpu: 41068.4187662906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 33042.23204672127,
            "unit": "ns/iter",
            "extra": "iterations: 21918\ncpu: 33041.988320102195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 33177.224099473286,
            "unit": "ns/iter",
            "extra": "iterations: 21071\ncpu: 33177.29580940641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24791.970785321915,
            "unit": "ns/iter",
            "extra": "iterations: 28205\ncpu: 24792.02623648286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 182050.8633637542,
            "unit": "ns/iter",
            "extra": "iterations: 3835\ncpu: 182049.6219035215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 317560.60753174464,
            "unit": "ns/iter",
            "extra": "iterations: 2204\ncpu: 317558.0308529929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 77872.05359317853,
            "unit": "ns/iter",
            "extra": "iterations: 9031\ncpu: 77872.22898903758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 77601.47576700835,
            "unit": "ns/iter",
            "extra": "iterations: 8996\ncpu: 77600.85593597162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 77315.2912008884,
            "unit": "ns/iter",
            "extra": "iterations: 9035\ncpu: 77315.46209186476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 153392.20741878616,
            "unit": "ns/iter",
            "extra": "iterations: 4556\ncpu: 153389.72783143187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 151527.2183037585,
            "unit": "ns/iter",
            "extra": "iterations: 4622\ncpu: 151524.7511899607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 48631.19226764631,
            "unit": "ns/iter",
            "extra": "iterations: 14407\ncpu: 48630.866939681684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 241862.37163562267,
            "unit": "ns/iter",
            "extra": "iterations: 2898\ncpu: 241862.97446515007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 194615.63983287738,
            "unit": "ns/iter",
            "extra": "iterations: 3590\ncpu: 194612.2841225635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 193844.15484765288,
            "unit": "ns/iter",
            "extra": "iterations: 3610\ncpu: 193841.10803324138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 195324.9525404784,
            "unit": "ns/iter",
            "extra": "iterations: 3582\ncpu: 195325.4606365165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 346263.25309559307,
            "unit": "ns/iter",
            "extra": "iterations: 2019\ncpu: 346264.04160475085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1344999.5153846517,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1344988.2692307495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1129014.372990277,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1129005.144694516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1129563.5928918193,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1129556.5428109886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1129762.5919355375,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1129753.5483870956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 721196.0598555044,
            "unit": "ns/iter",
            "extra": "iterations: 969\ncpu: 721197.8328173428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1117843.9408945595,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1117834.5047923427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 50422.69600981293,
            "unit": "ns/iter",
            "extra": "iterations: 13859\ncpu: 50422.33205859054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 244279.4053677119,
            "unit": "ns/iter",
            "extra": "iterations: 2869\ncpu: 244279.95817358114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 199554.17360320198,
            "unit": "ns/iter",
            "extra": "iterations: 3508\ncpu: 199552.565564425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 196949.65558996887,
            "unit": "ns/iter",
            "extra": "iterations: 3551\ncpu: 196950.18304702782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 198127.85597056895,
            "unit": "ns/iter",
            "extra": "iterations: 3534\ncpu: 198126.23089983087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 345914.37932739785,
            "unit": "ns/iter",
            "extra": "iterations: 2022\ncpu: 345912.4629080089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1345878.8766858738,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1345868.5934489255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1134342.7637540745,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1134344.822006465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1133566.7795786262,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1133547.3257698594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1132977.7893030848,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1132956.2398703364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 721803.4700413288,
            "unit": "ns/iter",
            "extra": "iterations: 968\ncpu: 721797.3140495868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1121825.185897489,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1121795.833333349 ns\nthreads: 1"
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
        "date": 1702382272934,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15995.520397849634,
            "unit": "ns/iter",
            "extra": "iterations: 43534\ncpu: 15994.408967703404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 152939.3072060769,
            "unit": "ns/iter",
            "extra": "iterations: 5537\ncpu: 152935.34404912408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 290377.63527054305,
            "unit": "ns/iter",
            "extra": "iterations: 2994\ncpu: 290362.3914495658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 426476.00541871606,
            "unit": "ns/iter",
            "extra": "iterations: 2030\ncpu: 426469.75369458104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 565582.3501617841,
            "unit": "ns/iter",
            "extra": "iterations: 1545\ncpu: 565558.1877022656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 569018.098000015,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 569001.1999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 677935.442982469,
            "unit": "ns/iter",
            "extra": "iterations: 1368\ncpu: 677904.1666666666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 788916.6904156312,
            "unit": "ns/iter",
            "extra": "iterations: 1179\ncpu: 788914.5038167945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 897378.7808880624,
            "unit": "ns/iter",
            "extra": "iterations: 1036\ncpu: 897348.8416988411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13164.840944473215,
            "unit": "ns/iter",
            "extra": "iterations: 53956\ncpu: 13164.554451775526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10757.257006569025,
            "unit": "ns/iter",
            "extra": "iterations: 63940\ncpu: 10757.167657178608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10815.17834778923,
            "unit": "ns/iter",
            "extra": "iterations: 64677\ncpu: 10815.043987816378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10845.874549587576,
            "unit": "ns/iter",
            "extra": "iterations: 64663\ncpu: 10845.432472975273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18401.65904972024,
            "unit": "ns/iter",
            "extra": "iterations: 38073\ncpu: 18400.990203031026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 68915.04111788898,
            "unit": "ns/iter",
            "extra": "iterations: 12452\ncpu: 68914.1182139416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 357729.8098620951,
            "unit": "ns/iter",
            "extra": "iterations: 2393\ncpu: 357734.559130798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 290312.276689193,
            "unit": "ns/iter",
            "extra": "iterations: 2960\ncpu: 290294.42567567574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 288027.6027535251,
            "unit": "ns/iter",
            "extra": "iterations: 2978\ncpu: 288019.81195433176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 286318.39153796027,
            "unit": "ns/iter",
            "extra": "iterations: 2978\ncpu: 286301.6789791815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 554580.6769999899,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 554561.2999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4828553.979274758,
            "unit": "ns/iter",
            "extra": "iterations: 193\ncpu: 4828179.792746115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3988956.228813665,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3988923.305084747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3932421.0425533275,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3932295.3191489354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3971362.838297922,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3971178.297872345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2287975.401477799,
            "unit": "ns/iter",
            "extra": "iterations: 406\ncpu: 2287910.837438421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3840558.847736558,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3840339.9176954785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 15202908.399999972,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 15202524.285714298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6584836.900000256,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6584175.000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 19036593.928571425,
            "unit": "ns/iter",
            "extra": "iterations: 56\ncpu: 19036255.35714288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 75341.76718874293,
            "unit": "ns/iter",
            "extra": "iterations: 11301\ncpu: 75340.96097690477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 393249.9483782589,
            "unit": "ns/iter",
            "extra": "iterations: 2189\ncpu: 393250.0228414805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 315114.2121879461,
            "unit": "ns/iter",
            "extra": "iterations: 2724\ncpu: 315109.76505139505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 314814.6912357811,
            "unit": "ns/iter",
            "extra": "iterations: 2727\ncpu: 314808.324165752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 313864.9148936143,
            "unit": "ns/iter",
            "extra": "iterations: 2726\ncpu: 313869.6991929589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 552519.4329999863,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 552515.8000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4890825.141361236,
            "unit": "ns/iter",
            "extra": "iterations: 191\ncpu: 4890623.560209427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 4005163.0515022753,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 4005077.2532188827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3991437.3162392844,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3991343.1623931434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3993796.2274679537,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 3993713.7339055594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2325494.052500119,
            "unit": "ns/iter",
            "extra": "iterations: 400\ncpu: 2325466.250000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3862765.767634776,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3862786.307053941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15579352.328571923,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 15578770.000000069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6738771.310000402,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6738794.999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 67562.74804842925,
            "unit": "ns/iter",
            "extra": "iterations: 12554\ncpu: 67557.15309861393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 352455.63401638565,
            "unit": "ns/iter",
            "extra": "iterations: 2440\ncpu: 352445.98360655917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 280790.6741379454,
            "unit": "ns/iter",
            "extra": "iterations: 2900\ncpu: 280776.1034482767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 282942.87673956726,
            "unit": "ns/iter",
            "extra": "iterations: 3018\ncpu: 282929.62226640194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 276645.99870591785,
            "unit": "ns/iter",
            "extra": "iterations: 3091\ncpu: 276634.9725008088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 512851.468000008,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512822.8999999962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4834080.592783519,
            "unit": "ns/iter",
            "extra": "iterations: 194\ncpu: 4833852.577319579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3934813.8227847824,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3934572.1518987077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3914586.2773108175,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3914443.6974789994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3921828.0798319057,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3921630.672268892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2276612.568292704,
            "unit": "ns/iter",
            "extra": "iterations: 410\ncpu: 2276525.1219512234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3824072.5061223665,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3823946.122448968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6139.414005161583,
            "unit": "ns/iter",
            "extra": "iterations: 114315\ncpu: 6139.203079210936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 40301.01077188838,
            "unit": "ns/iter",
            "extra": "iterations: 17360\ncpu: 40298.508064516165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 31838.814296141798,
            "unit": "ns/iter",
            "extra": "iterations: 21922\ncpu: 31838.51382173149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 31585.690742578186,
            "unit": "ns/iter",
            "extra": "iterations: 22166\ncpu: 31585.689795181992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24338.546090406275,
            "unit": "ns/iter",
            "extra": "iterations: 28737\ncpu: 24338.908027977952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 180536.4872323921,
            "unit": "ns/iter",
            "extra": "iterations: 3877\ncpu: 180522.67216920218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 318618.7827081337,
            "unit": "ns/iter",
            "extra": "iterations: 2186\ncpu: 318623.4675205887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 77891.03666330776,
            "unit": "ns/iter",
            "extra": "iterations: 8919\ncpu: 77890.12221101094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 77587.01028305509,
            "unit": "ns/iter",
            "extra": "iterations: 9044\ncpu: 77586.57673595662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 77513.31773535251,
            "unit": "ns/iter",
            "extra": "iterations: 9061\ncpu: 77512.21719457011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 161735.53003696355,
            "unit": "ns/iter",
            "extra": "iterations: 4328\ncpu: 161731.65434380877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 151890.60863902923,
            "unit": "ns/iter",
            "extra": "iterations: 4607\ncpu: 151885.93444758182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 48664.40928122742,
            "unit": "ns/iter",
            "extra": "iterations: 14330\ncpu: 48665.07327285353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 241283.05462041555,
            "unit": "ns/iter",
            "extra": "iterations: 2911\ncpu: 241283.1329440075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 195088.9637882963,
            "unit": "ns/iter",
            "extra": "iterations: 3590\ncpu: 195086.6852367697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 194070.85686547696,
            "unit": "ns/iter",
            "extra": "iterations: 3605\ncpu: 194070.42995839278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 193338.89859075917,
            "unit": "ns/iter",
            "extra": "iterations: 3619\ncpu: 193334.2359767902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 343387.46807464294,
            "unit": "ns/iter",
            "extra": "iterations: 2036\ncpu: 343382.41650294675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1359866.8097087794,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1359849.3203883308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1132254.5358306926,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1132194.4625406975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1131880.4029126544,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1131803.8834951655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1138789.1305057185,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1138754.3230016292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 730036.3914405039,
            "unit": "ns/iter",
            "extra": "iterations: 958\ncpu: 730048.6430062598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1127313.3102893434,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1127314.6302250812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 49670.09028417256,
            "unit": "ns/iter",
            "extra": "iterations: 14111\ncpu: 49667.38005811114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 242896.4627641202,
            "unit": "ns/iter",
            "extra": "iterations: 2887\ncpu: 242888.01524073462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 198504.25127623286,
            "unit": "ns/iter",
            "extra": "iterations: 3526\ncpu: 198507.34543392275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 197509.9585448414,
            "unit": "ns/iter",
            "extra": "iterations: 3546\ncpu: 197510.01128031735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 197620.85823212817,
            "unit": "ns/iter",
            "extra": "iterations: 3541\ncpu: 197618.38463710755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 344664.7748279245,
            "unit": "ns/iter",
            "extra": "iterations: 2034\ncpu: 344660.81612586044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1352651.8333332983,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1352671.8992248203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1138306.458401263,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1138219.4127243243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1131359.4264943232,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1131321.3247172963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1140351.9008130447,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1140291.3821138241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 727567.1710115151,
            "unit": "ns/iter",
            "extra": "iterations: 959\ncpu: 727539.3117831106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1125456.9983897135,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1125473.2689210875 ns\nthreads: 1"
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
        "date": 1702387052726,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17038.45143566963,
            "unit": "ns/iter",
            "extra": "iterations: 41862\ncpu: 17038.478811332472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 154464.11151536938,
            "unit": "ns/iter",
            "extra": "iterations: 5497\ncpu: 154454.53883936693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 293191.15480607434,
            "unit": "ns/iter",
            "extra": "iterations: 2965\ncpu: 293179.39291736914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 429469.68684862915,
            "unit": "ns/iter",
            "extra": "iterations: 2015\ncpu: 429430.96774193534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 571981.3853690423,
            "unit": "ns/iter",
            "extra": "iterations: 1531\ncpu: 571948.9875898104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 570322.1459999952,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 570262.5000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 682077.7304283564,
            "unit": "ns/iter",
            "extra": "iterations: 1354\ncpu: 682050.0000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 792458.2830349372,
            "unit": "ns/iter",
            "extra": "iterations: 1173\ncpu: 792386.7860187548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 901362.281553406,
            "unit": "ns/iter",
            "extra": "iterations: 1030\ncpu: 901314.4660194169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13291.768969530462,
            "unit": "ns/iter",
            "extra": "iterations: 52413\ncpu: 13291.437238852963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11174.95099227252,
            "unit": "ns/iter",
            "extra": "iterations: 63541\ncpu: 11174.584913677782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11054.899988926243,
            "unit": "ns/iter",
            "extra": "iterations: 63213\ncpu: 11054.128106560338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11165.806603473622,
            "unit": "ns/iter",
            "extra": "iterations: 62876\ncpu: 11164.776703352629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18478.01773049649,
            "unit": "ns/iter",
            "extra": "iterations: 37788\ncpu: 18477.199110828828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 69431.30871274146,
            "unit": "ns/iter",
            "extra": "iterations: 12212\ncpu: 69426.49033737315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 371426.91728021693,
            "unit": "ns/iter",
            "extra": "iterations: 2309\ncpu: 371411.0437418792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 300267.90432414616,
            "unit": "ns/iter",
            "extra": "iterations: 2937\ncpu: 300238.1341504932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 289238.3002364008,
            "unit": "ns/iter",
            "extra": "iterations: 2961\ncpu: 289230.0911854104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 288882.62436889065,
            "unit": "ns/iter",
            "extra": "iterations: 2971\ncpu: 288871.08717603434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 558848.5149999656,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 558813.9000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4832261.585492247,
            "unit": "ns/iter",
            "extra": "iterations: 193\ncpu: 4831815.025906732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3922355.8559320886,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3922256.779661014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3934885.749999989,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3934733.898305079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3950701.991525526,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3950453.3898305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2261036.301703124,
            "unit": "ns/iter",
            "extra": "iterations: 411\ncpu: 2261004.8661800534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3816813.176229527,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3816791.393442631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 15030520.943662075,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 15030049.295774655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6636010.0599996485,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6636074.999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 19014286.589286454,
            "unit": "ns/iter",
            "extra": "iterations: 56\ncpu: 19013491.07142858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 75995.24187372174,
            "unit": "ns/iter",
            "extra": "iterations: 11229\ncpu: 75994.9594799181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 397940.20848710055,
            "unit": "ns/iter",
            "extra": "iterations: 2168\ncpu: 397936.1623616224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 318780.3964365176,
            "unit": "ns/iter",
            "extra": "iterations: 2694\ncpu: 318777.2086117297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 315811.81438004435,
            "unit": "ns/iter",
            "extra": "iterations: 2726\ncpu: 315803.2648569325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 317446.7527881141,
            "unit": "ns/iter",
            "extra": "iterations: 2690\ncpu: 317438.513011153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 557497.4769999698,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 557470.6999999961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4876975.915789516,
            "unit": "ns/iter",
            "extra": "iterations: 190\ncpu: 4876864.2105263155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3963069.3008473082,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3962883.474576267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3975462.6936171995,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3975377.446808514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3969360.9017094458,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3969085.042735051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2311018.315136437,
            "unit": "ns/iter",
            "extra": "iterations: 403\ncpu: 2310903.2258064547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3857815.792531176,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3857619.9170124535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15408497.507246794,
            "unit": "ns/iter",
            "extra": "iterations: 69\ncpu: 15407450.724637682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6628288.069999826,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6628260.000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 67349.3581532117,
            "unit": "ns/iter",
            "extra": "iterations: 12584\ncpu: 67348.02129688542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 356480.30295464053,
            "unit": "ns/iter",
            "extra": "iterations: 2403\ncpu: 356476.19642114104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 283644.15745947085,
            "unit": "ns/iter",
            "extra": "iterations: 3023\ncpu: 283637.6116440641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 283188.92571806366,
            "unit": "ns/iter",
            "extra": "iterations: 3029\ncpu: 283188.8081875205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 280248.8302257027,
            "unit": "ns/iter",
            "extra": "iterations: 3057\ncpu: 280249.03500163683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 525455.5180000011,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 525432.2000000045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4849360.583333073,
            "unit": "ns/iter",
            "extra": "iterations: 192\ncpu: 4849358.333333331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3912099.3054395407,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3912005.0209204922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3925732.415966497,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3925687.3949579955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3942673.1645568777,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3942598.7341772085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2264199.8725489997,
            "unit": "ns/iter",
            "extra": "iterations: 408\ncpu: 2264196.568627454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3817770.5040984396,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3817807.3770492086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6206.233827023532,
            "unit": "ns/iter",
            "extra": "iterations: 113229\ncpu: 6206.098261046195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 40556.821397558095,
            "unit": "ns/iter",
            "extra": "iterations: 17273\ncpu: 40557.21646500336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 33026.34272775242,
            "unit": "ns/iter",
            "extra": "iterations: 22744\ncpu: 33025.30777347889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 33226.59562591486,
            "unit": "ns/iter",
            "extra": "iterations: 21856\ncpu: 33226.596815519646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24652.51235962908,
            "unit": "ns/iter",
            "extra": "iterations: 28318\ncpu: 24651.93869623586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 181763.53860149917,
            "unit": "ns/iter",
            "extra": "iterations: 3847\ncpu: 181765.16766311388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 319202.66605757887,
            "unit": "ns/iter",
            "extra": "iterations: 2189\ncpu: 319193.83280036703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 77881.31420309127,
            "unit": "ns/iter",
            "extra": "iterations: 8991\ncpu: 77882.20442664913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 78026.44728043069,
            "unit": "ns/iter",
            "extra": "iterations: 8972\ncpu: 78023.41729825993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 77996.2140307832,
            "unit": "ns/iter",
            "extra": "iterations: 8966\ncpu: 77994.80258755252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 160920.61177552072,
            "unit": "ns/iter",
            "extra": "iterations: 4348\ncpu: 160922.07911683407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 151694.1571521598,
            "unit": "ns/iter",
            "extra": "iterations: 4607\ncpu: 151691.46950293164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 50238.98192857959,
            "unit": "ns/iter",
            "extra": "iterations: 13834\ncpu: 50239.453520312156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 243930.60975609973,
            "unit": "ns/iter",
            "extra": "iterations: 2870\ncpu: 243924.8083623693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 198403.33942336027,
            "unit": "ns/iter",
            "extra": "iterations: 3503\ncpu: 198405.30973451273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 198494.23357870927,
            "unit": "ns/iter",
            "extra": "iterations: 3532\ncpu: 198492.32729332076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 201446.1783366647,
            "unit": "ns/iter",
            "extra": "iterations: 3499\ncpu: 201376.96484709816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 356985.2346338896,
            "unit": "ns/iter",
            "extra": "iterations: 1871\ncpu: 356974.93319080555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1369910.3183594241,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1369878.7109374944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1143017.4346405417,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1143009.1503267926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1142378.210097684,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1142296.0912052034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1150830.7257799814,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1150813.1362890038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 735871.5787815236,
            "unit": "ns/iter",
            "extra": "iterations: 952\ncpu: 735789.1806722729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1132145.9206611463,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1132106.4462809914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 51073.374142712906,
            "unit": "ns/iter",
            "extra": "iterations: 13706\ncpu: 51071.844447687195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 247820.62575169167,
            "unit": "ns/iter",
            "extra": "iterations: 2827\ncpu: 247810.64732932328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 203393.60279150444,
            "unit": "ns/iter",
            "extra": "iterations: 3439\ncpu: 203393.69002616877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 201072.91513233754,
            "unit": "ns/iter",
            "extra": "iterations: 3476\ncpu: 201062.02531645863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 203572.78106853072,
            "unit": "ns/iter",
            "extra": "iterations: 3444\ncpu: 203570.84785133618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 351225.0251256332,
            "unit": "ns/iter",
            "extra": "iterations: 1990\ncpu: 351214.97487437376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1368279.4062499504,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1368238.085937501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1147248.5581014853,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1147214.0752864298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1141904.429738565,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1141851.6339869339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1153550.3141446928,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1153509.0460526382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 736878.6239495858,
            "unit": "ns/iter",
            "extra": "iterations: 952\ncpu: 736835.0840336219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1132382.6019417294,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1132313.7540452955 ns\nthreads: 1"
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
        "date": 1702388106854,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16257.480394211698,
            "unit": "ns/iter",
            "extra": "iterations: 42921\ncpu: 16256.133361291679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 153401.62547288428,
            "unit": "ns/iter",
            "extra": "iterations: 5551\ncpu: 153396.41506034948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 290381.18432413833,
            "unit": "ns/iter",
            "extra": "iterations: 3011\ncpu: 290370.84025240777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 426457.0427728811,
            "unit": "ns/iter",
            "extra": "iterations: 2034\ncpu: 426432.0550639132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 566076.8708844458,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 566041.1878631377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 564989.3479999832,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 564972.5999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 674465.8188458916,
            "unit": "ns/iter",
            "extra": "iterations: 1369\ncpu: 674428.9992695398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 788328.8169491646,
            "unit": "ns/iter",
            "extra": "iterations: 1180\ncpu: 788267.6271186444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 893016.5775862313,
            "unit": "ns/iter",
            "extra": "iterations: 1044\ncpu: 892927.1072796944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13285.354252432953,
            "unit": "ns/iter",
            "extra": "iterations: 52711\ncpu: 13285.086604314094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11093.533125178465,
            "unit": "ns/iter",
            "extra": "iterations: 63094\ncpu: 11093.042127619126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11100.622918583496,
            "unit": "ns/iter",
            "extra": "iterations: 63058\ncpu: 11100.16017000223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11158.59030415268,
            "unit": "ns/iter",
            "extra": "iterations: 62666\ncpu: 11158.205406440478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18628.458769544177,
            "unit": "ns/iter",
            "extra": "iterations: 36393\ncpu: 18627.63718297476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 69565.00976721317,
            "unit": "ns/iter",
            "extra": "iterations: 12286\ncpu: 69559.38466547293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 361149.72922816686,
            "unit": "ns/iter",
            "extra": "iterations: 2371\ncpu: 361127.836355968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 288989.975016871,
            "unit": "ns/iter",
            "extra": "iterations: 2962\ncpu: 288975.1181634028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 288215.67848699813,
            "unit": "ns/iter",
            "extra": "iterations: 2961\ncpu: 288205.6737588647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 285440.81325300864,
            "unit": "ns/iter",
            "extra": "iterations: 2988\ncpu: 285423.2262382868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 548024.2919999796,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 547980.2999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4780295.448453505,
            "unit": "ns/iter",
            "extra": "iterations: 194\ncpu: 4779923.195876298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3908253.686192436,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3908027.6150627686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3923607.983193112,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3923584.873949577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3967507.6428571693,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3964310.92436976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2277442.418092929,
            "unit": "ns/iter",
            "extra": "iterations: 409\ncpu: 2277341.3202934004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3805327.7131147105,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3805048.7704918017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 15017823.112675838,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 15016902.816901403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6499453.449999919,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6498869.0000000205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18922715.98214279,
            "unit": "ns/iter",
            "extra": "iterations: 56\ncpu: 18922123.214285705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 75369.0056238996,
            "unit": "ns/iter",
            "extra": "iterations: 11380\ncpu: 75365.72056239017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 407558.1302083321,
            "unit": "ns/iter",
            "extra": "iterations: 2112\ncpu: 407463.21022727515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 321273.2796261755,
            "unit": "ns/iter",
            "extra": "iterations: 2675\ncpu: 321262.2429906555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 315978.31530536956,
            "unit": "ns/iter",
            "extra": "iterations: 2718\ncpu: 315957.06401766033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 316922.84700664086,
            "unit": "ns/iter",
            "extra": "iterations: 2706\ncpu: 316907.8344419801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 544184.90300003,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 544178.5000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4852525.296874966,
            "unit": "ns/iter",
            "extra": "iterations: 192\ncpu: 4852131.249999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3940715.4576271186,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3940473.305084761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3968523.451063941,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3968340.4255319247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3946240.033755364,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3946036.286919852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2290996.1305418597,
            "unit": "ns/iter",
            "extra": "iterations: 406\ncpu: 2290890.3940886683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3868419.7603306663,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3868185.1239669356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15347893.871428043,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 15346762.857142895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6829716.559999497,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6829139.9999999665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 67429.47958697415,
            "unit": "ns/iter",
            "extra": "iterations: 12590\ncpu: 67426.84670373292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 356437.5727272835,
            "unit": "ns/iter",
            "extra": "iterations: 2420\ncpu: 356119.7520661141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 282351.32585752016,
            "unit": "ns/iter",
            "extra": "iterations: 3032\ncpu: 282354.7493403695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 284017.6684297464,
            "unit": "ns/iter",
            "extra": "iterations: 3025\ncpu: 284014.9752066121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 277926.1261378344,
            "unit": "ns/iter",
            "extra": "iterations: 3076\ncpu: 277929.32379713806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 515338.2839999949,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515335.0000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4831852.077720232,
            "unit": "ns/iter",
            "extra": "iterations: 193\ncpu: 4831736.269430049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3909648.4915965544,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3909505.4621848823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3938795.2700423896,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3938595.780590731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3899679.234309759,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3899719.665271954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2264091.866180084,
            "unit": "ns/iter",
            "extra": "iterations: 411\ncpu: 2264071.7761557247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3795730.2357723364,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3795775.2032520347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6295.828658503639,
            "unit": "ns/iter",
            "extra": "iterations: 111234\ncpu: 6295.709944801041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 40628.401554247735,
            "unit": "ns/iter",
            "extra": "iterations: 16857\ncpu: 40627.67396333876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 31929.68859109318,
            "unit": "ns/iter",
            "extra": "iterations: 21939\ncpu: 31929.335885865337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29641.1909617899,
            "unit": "ns/iter",
            "extra": "iterations: 23633\ncpu: 29641.57745525314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24492.56839754285,
            "unit": "ns/iter",
            "extra": "iterations: 28656\ncpu: 24491.830681183485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 180311.31304797227,
            "unit": "ns/iter",
            "extra": "iterations: 3878\ncpu: 180304.87364621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 316924.68840578676,
            "unit": "ns/iter",
            "extra": "iterations: 2208\ncpu: 316920.5615941986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 77536.71857016649,
            "unit": "ns/iter",
            "extra": "iterations: 9036\ncpu: 77537.7268702974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 77645.74631496923,
            "unit": "ns/iter",
            "extra": "iterations: 9023\ncpu: 77646.7028704433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 77646.02908203092,
            "unit": "ns/iter",
            "extra": "iterations: 9009\ncpu: 77645.62104562068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 160626.21400689735,
            "unit": "ns/iter",
            "extra": "iterations: 4355\ncpu: 160622.38805970203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 152056.70039079577,
            "unit": "ns/iter",
            "extra": "iterations: 4606\ncpu: 152050.41250542848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 49295.175237425094,
            "unit": "ns/iter",
            "extra": "iterations: 14215\ncpu: 49294.759057334195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 242787.15259514176,
            "unit": "ns/iter",
            "extra": "iterations: 2890\ncpu: 242784.15224913953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 196743.99550182663,
            "unit": "ns/iter",
            "extra": "iterations: 3557\ncpu: 196739.4152375596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 196203.84354883584,
            "unit": "ns/iter",
            "extra": "iterations: 3573\ncpu: 196196.92135460427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 196685.7220348466,
            "unit": "ns/iter",
            "extra": "iterations: 3558\ncpu: 196679.7920179888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 344732.9330379079,
            "unit": "ns/iter",
            "extra": "iterations: 2031\ncpu: 344725.4062038447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1362318.2923976826,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1362257.5048733007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1137201.0405186908,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1137113.9384116663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1143990.1337683059,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1143915.6606851595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1142303.8137254436,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1142258.6601307096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 728692.7898023032,
            "unit": "ns/iter",
            "extra": "iterations: 961\ncpu: 728673.5691987609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1133101.9596122813,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1133016.9628433087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 50376.98217878583,
            "unit": "ns/iter",
            "extra": "iterations: 13916\ncpu: 50374.34607645903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 244078.72375304135,
            "unit": "ns/iter",
            "extra": "iterations: 2867\ncpu: 244057.79560516353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 200272.16003435326,
            "unit": "ns/iter",
            "extra": "iterations: 3493\ncpu: 200257.42914400384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 199899.4095157277,
            "unit": "ns/iter",
            "extra": "iterations: 3531\ncpu: 199887.28405550995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 200632.0709362425,
            "unit": "ns/iter",
            "extra": "iterations: 3482\ncpu: 200617.54738656175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 346256.59070687584,
            "unit": "ns/iter",
            "extra": "iterations: 2023\ncpu: 346238.5071675725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1354273.0251450771,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1354194.3907156715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1137346.1558442265,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1137306.9805194936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1140670.3224755505,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1140629.8045602562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1138503.6323529452,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1138430.8823529226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 730081.3821391786,
            "unit": "ns/iter",
            "extra": "iterations: 963\ncpu: 730049.2211838001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1130334.7080644611,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1130234.3548387003 ns\nthreads: 1"
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
        "date": 1702390824416,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16218.107306096825,
            "unit": "ns/iter",
            "extra": "iterations: 42663\ncpu: 16217.43899866395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 151613.51216457385,
            "unit": "ns/iter",
            "extra": "iterations: 5590\ncpu: 151611.1627906977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 286857.1984858321,
            "unit": "ns/iter",
            "extra": "iterations: 3038\ncpu: 286834.0684660961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 419989.9296458023,
            "unit": "ns/iter",
            "extra": "iterations: 2061\ncpu: 419975.691411936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 559255.0786948289,
            "unit": "ns/iter",
            "extra": "iterations: 1563\ncpu: 559202.1753039032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 558824.8320000275,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 558775.3000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 668908.5450613089,
            "unit": "ns/iter",
            "extra": "iterations: 1387\ncpu: 668884.7152126891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 779826.4924623087,
            "unit": "ns/iter",
            "extra": "iterations: 1194\ncpu: 779803.3500837514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 885061.009532893,
            "unit": "ns/iter",
            "extra": "iterations: 1049\ncpu: 885009.437559582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13142.276085364912,
            "unit": "ns/iter",
            "extra": "iterations: 53277\ncpu: 13141.513223342165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10933.297781715832,
            "unit": "ns/iter",
            "extra": "iterations: 64329\ncpu: 10932.254504189394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11096.575282239824,
            "unit": "ns/iter",
            "extra": "iterations: 63687\ncpu: 11096.083973181336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10983.573050268333,
            "unit": "ns/iter",
            "extra": "iterations: 63778\ncpu: 10982.346577189634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18243.648705716172,
            "unit": "ns/iter",
            "extra": "iterations: 38361\ncpu: 18242.871666536335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 68891.44934311094,
            "unit": "ns/iter",
            "extra": "iterations: 12407\ncpu: 68886.64463609247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 361215.1737663526,
            "unit": "ns/iter",
            "extra": "iterations: 2371\ncpu: 361202.91016448755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 289775.29888173466,
            "unit": "ns/iter",
            "extra": "iterations: 2951\ncpu: 289754.9983056591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 290374.0440081299,
            "unit": "ns/iter",
            "extra": "iterations: 2954\ncpu: 290356.8043331081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 285037.84468938137,
            "unit": "ns/iter",
            "extra": "iterations: 2994\ncpu: 285020.6746826987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 543820.1140000274,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 543778.1000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4735795.1624364555,
            "unit": "ns/iter",
            "extra": "iterations: 197\ncpu: 4735324.365482248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3856842.028925541,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3856519.83471074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3854348.0826446237,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3854123.140495881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3878383.7142857886,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3878047.4789916007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2229867.2925658966,
            "unit": "ns/iter",
            "extra": "iterations: 417\ncpu: 2229746.5227817763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3751148.7903225957,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3750828.2258064453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14864477.305555588,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14863781.944444425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6565922.350000051,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6565382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18579698.140351746,
            "unit": "ns/iter",
            "extra": "iterations: 57\ncpu: 18578694.7368421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 75748.0311197784,
            "unit": "ns/iter",
            "extra": "iterations: 11279\ncpu: 75745.09265005752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 396643.0597222212,
            "unit": "ns/iter",
            "extra": "iterations: 2160\ncpu: 396630.46296296414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 317383.36044361757,
            "unit": "ns/iter",
            "extra": "iterations: 2705\ncpu: 317369.0942698696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 314500.22107968887,
            "unit": "ns/iter",
            "extra": "iterations: 2723\ncpu: 314489.3499816386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 312929.4478976357,
            "unit": "ns/iter",
            "extra": "iterations: 2735\ncpu: 312919.195612432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 540358.9510000302,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 540351.7999999963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4847621.051281947,
            "unit": "ns/iter",
            "extra": "iterations: 195\ncpu: 4841908.205128184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3892792.962343097,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3892580.3347280417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3897945.4458332914,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3897132.0833333326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3922732.761506359,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3922333.8912133803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2277069.184465919,
            "unit": "ns/iter",
            "extra": "iterations: 412\ncpu: 2276939.0776699027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3791161.326530435,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3790975.1020408194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15150574.535211112,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 15149009.859154914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6478159.430000119,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6477652.0000000205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 66901.6979669352,
            "unit": "ns/iter",
            "extra": "iterations: 12641\ncpu: 66897.75334229846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 354980.5604304647,
            "unit": "ns/iter",
            "extra": "iterations: 2416\ncpu: 354965.9768211923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 282527.001976288,
            "unit": "ns/iter",
            "extra": "iterations: 3036\ncpu: 282463.9657444003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 282877.8765268945,
            "unit": "ns/iter",
            "extra": "iterations: 3029\ncpu: 282861.2083195773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 278548.34687907714,
            "unit": "ns/iter",
            "extra": "iterations: 3076\ncpu: 278538.71911573346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 505328.43999997113,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505292.60000000417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4734588.208121671,
            "unit": "ns/iter",
            "extra": "iterations: 197\ncpu: 4734224.873096471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3858363.8471072563,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3858185.1239669323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3830032.963114755,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3829763.934426234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3867682.850622612,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3867398.7551867273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2225427.4330143407,
            "unit": "ns/iter",
            "extra": "iterations: 418\ncpu: 2225288.277511951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3739442.875502004,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3739179.1164658656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6289.706618818609,
            "unit": "ns/iter",
            "extra": "iterations: 111742\ncpu: 6289.326305238836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 39127.21663778219,
            "unit": "ns/iter",
            "extra": "iterations: 17887\ncpu: 39123.59255325118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 31792.025212290137,
            "unit": "ns/iter",
            "extra": "iterations: 22846\ncpu: 31789.512387288723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 32048.575283277733,
            "unit": "ns/iter",
            "extra": "iterations: 22681\ncpu: 32045.341916141002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24567.901593415376,
            "unit": "ns/iter",
            "extra": "iterations: 28555\ncpu: 24566.373664857434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 178223.6511450335,
            "unit": "ns/iter",
            "extra": "iterations: 3930\ncpu: 178206.84478371465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 312729.12914190313,
            "unit": "ns/iter",
            "extra": "iterations: 2354\ncpu: 312703.27102803683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 77374.62319000937,
            "unit": "ns/iter",
            "extra": "iterations: 9047\ncpu: 77368.26572344292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 77222.61779296736,
            "unit": "ns/iter",
            "extra": "iterations: 9071\ncpu: 77217.28585602372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 77386.25685537355,
            "unit": "ns/iter",
            "extra": "iterations: 9044\ncpu: 77384.40955329634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 159858.1715395042,
            "unit": "ns/iter",
            "extra": "iterations: 4378\ncpu: 159852.37551393313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 150555.0096711871,
            "unit": "ns/iter",
            "extra": "iterations: 4653\ncpu: 150550.01074575522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 49325.071000914715,
            "unit": "ns/iter",
            "extra": "iterations: 14197\ncpu: 49323.3147848133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 240656.49314128465,
            "unit": "ns/iter",
            "extra": "iterations: 2916\ncpu: 240649.65706447413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 194752.42797553135,
            "unit": "ns/iter",
            "extra": "iterations: 3596\ncpu: 194741.82424916571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 194833.0038975501,
            "unit": "ns/iter",
            "extra": "iterations: 3592\ncpu: 194826.00222717176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 195187.60847741595,
            "unit": "ns/iter",
            "extra": "iterations: 3586\ncpu: 195180.28443948703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 343664.69377757964,
            "unit": "ns/iter",
            "extra": "iterations: 2041\ncpu: 343660.1665850075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1327185.1742425025,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1327070.4545454343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1118353.1677316662,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1118275.0798722103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1113068.6359299996,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1112992.6868044457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1119238.609599961,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1119175.2000000179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 718063.3087179371,
            "unit": "ns/iter",
            "extra": "iterations: 975\ncpu: 718054.4615384686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1166356.3368984088,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1166295.3654188977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 50213.184904037014,
            "unit": "ns/iter",
            "extra": "iterations: 13964\ncpu: 50208.29275279273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 242533.86045705588,
            "unit": "ns/iter",
            "extra": "iterations: 2888\ncpu: 242509.8684210513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 199203.9394886256,
            "unit": "ns/iter",
            "extra": "iterations: 3520\ncpu: 199192.18749999892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 197392.350465978,
            "unit": "ns/iter",
            "extra": "iterations: 3541\ncpu: 197379.1019486004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 198258.30284091562,
            "unit": "ns/iter",
            "extra": "iterations: 3520\ncpu: 198247.0738636363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 343556.5063913651,
            "unit": "ns/iter",
            "extra": "iterations: 2034\ncpu: 343537.26647001144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1337840.352941153,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1337757.3055028683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1115206.4848966831,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1115193.481717002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1119656.813990471,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1119602.225755156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1123246.5592948634,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1123160.0961538518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 720082.8006166646,
            "unit": "ns/iter",
            "extra": "iterations: 973\ncpu: 720024.7687564238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1107845.237717981,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1107746.5927099972 ns\nthreads: 1"
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
        "date": 1702391762908,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16079.505450477252,
            "unit": "ns/iter",
            "extra": "iterations: 38437\ncpu: 16078.814683768243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 152015.04012179738,
            "unit": "ns/iter",
            "extra": "iterations: 5583\ncpu: 152011.33799032777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 288194.34015176503,
            "unit": "ns/iter",
            "extra": "iterations: 3031\ncpu: 288172.6822830749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 442161.62828784535,
            "unit": "ns/iter",
            "extra": "iterations: 2015\ncpu: 442141.0421836229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 560946.4949014413,
            "unit": "ns/iter",
            "extra": "iterations: 1471\ncpu: 560922.5696804894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 560968.594000002,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 560914.0999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 667721.4877521538,
            "unit": "ns/iter",
            "extra": "iterations: 1388\ncpu: 667664.5533141207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 779325.5496246902,
            "unit": "ns/iter",
            "extra": "iterations: 1199\ncpu: 779285.9883236024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 889245.1055133174,
            "unit": "ns/iter",
            "extra": "iterations: 1052\ncpu: 889223.7642585549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13180.508407386964,
            "unit": "ns/iter",
            "extra": "iterations: 53227\ncpu: 13180.166081124255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10952.801772613446,
            "unit": "ns/iter",
            "extra": "iterations: 64199\ncpu: 10952.698640165723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10946.037868952228,
            "unit": "ns/iter",
            "extra": "iterations: 63931\ncpu: 10945.550671818046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10997.816573630187,
            "unit": "ns/iter",
            "extra": "iterations: 63595\ncpu: 10997.712084283357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18632.6015612641,
            "unit": "ns/iter",
            "extra": "iterations: 37918\ncpu: 18631.934701197322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 69344.02613057202,
            "unit": "ns/iter",
            "extra": "iterations: 12361\ncpu: 69341.18598818868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 368582.6473118322,
            "unit": "ns/iter",
            "extra": "iterations: 2325\ncpu: 368568.94623655896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 290851.0037326089,
            "unit": "ns/iter",
            "extra": "iterations: 2947\ncpu: 290843.0268069224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 287156.0990597736,
            "unit": "ns/iter",
            "extra": "iterations: 2978\ncpu: 287145.80255204893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 284741.8375583745,
            "unit": "ns/iter",
            "extra": "iterations: 2998\ncpu: 284736.62441627745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 548208.0540000141,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 548186.7000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4717270.258883331,
            "unit": "ns/iter",
            "extra": "iterations: 197\ncpu: 4717142.6395939095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3841693.543209876,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3841596.707818929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3853979.028925689,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3853793.8016528892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3870040.78008289,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3869940.248962657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2254820.0652173995,
            "unit": "ns/iter",
            "extra": "iterations: 414\ncpu: 2254732.367149762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3751726.7177418354,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3751520.1612903224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14914206.183098719,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14913685.91549297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6486405.500000102,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6486072.999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18743435.210526235,
            "unit": "ns/iter",
            "extra": "iterations: 57\ncpu: 18742785.96491227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 76010.79703322111,
            "unit": "ns/iter",
            "extra": "iterations: 11258\ncpu: 76008.20749689109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 395034.9140229823,
            "unit": "ns/iter",
            "extra": "iterations: 2175\ncpu: 395027.67816091905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 315302.09812569316,
            "unit": "ns/iter",
            "extra": "iterations: 2721\ncpu: 315292.7232635061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 314125.5459538623,
            "unit": "ns/iter",
            "extra": "iterations: 2731\ncpu: 314109.33723910723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 312891.0233747222,
            "unit": "ns/iter",
            "extra": "iterations: 2738\ncpu: 312875.7121986835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 541289.3590000181,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 541276.7999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4786216.046153851,
            "unit": "ns/iter",
            "extra": "iterations: 195\ncpu: 4786011.282051269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3878134.7083334103,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3878059.9999999944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3889033.375000039,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3888867.916666664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3922592.7447699076,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3922487.029288729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2295724.40000005,
            "unit": "ns/iter",
            "extra": "iterations: 405\ncpu: 2295662.9629629645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3785897.5243902174,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3785743.0894309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15317219.442856964,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 15316577.142857162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6565986.559999999,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6565847.0000000335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 68189.20414532695,
            "unit": "ns/iter",
            "extra": "iterations: 12496\ncpu: 68187.46798975709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 353099.4928072417,
            "unit": "ns/iter",
            "extra": "iterations: 2433\ncpu: 353083.6004932166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 280456.72313237254,
            "unit": "ns/iter",
            "extra": "iterations: 3052\ncpu: 280451.47444298846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 281813.901283312,
            "unit": "ns/iter",
            "extra": "iterations: 3039\ncpu: 281806.51530108484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 278592.43574690237,
            "unit": "ns/iter",
            "extra": "iterations: 3066\ncpu: 278584.40965427225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 513185.5009999811,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 513164.40000000084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4743979.178571482,
            "unit": "ns/iter",
            "extra": "iterations: 196\ncpu: 4743859.183673473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3844558.5349794654,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3844346.9135802644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3850679.000000039,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3850493.38842976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3853212.10330576,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3853067.7685950384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2243662.8795180996,
            "unit": "ns/iter",
            "extra": "iterations: 415\ncpu: 2243589.8795180777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3752022.3694779514,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3751909.638554203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6252.568215609987,
            "unit": "ns/iter",
            "extra": "iterations: 111646\ncpu: 6252.3243107679855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 40388.37358708163,
            "unit": "ns/iter",
            "extra": "iterations: 17340\ncpu: 40387.50288350616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 32985.13651137584,
            "unit": "ns/iter",
            "extra": "iterations: 21229\ncpu: 32984.01243581902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 32069.54831440159,
            "unit": "ns/iter",
            "extra": "iterations: 21743\ncpu: 32068.477211056448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24738.385080430748,
            "unit": "ns/iter",
            "extra": "iterations: 28285\ncpu: 24737.680749513805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 181219.99844960985,
            "unit": "ns/iter",
            "extra": "iterations: 3870\ncpu: 181215.47803617548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 312864.62136789894,
            "unit": "ns/iter",
            "extra": "iterations: 2237\ncpu: 312856.0125167678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 77147.9094011416,
            "unit": "ns/iter",
            "extra": "iterations: 9084\ncpu: 77144.11052399784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 77290.15292817463,
            "unit": "ns/iter",
            "extra": "iterations: 9050\ncpu: 77284.01104972375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 77068.60216598702,
            "unit": "ns/iter",
            "extra": "iterations: 9049\ncpu: 77065.59840866341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 161531.3916743279,
            "unit": "ns/iter",
            "extra": "iterations: 4348\ncpu: 161525.13799447814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 150725.3238464941,
            "unit": "ns/iter",
            "extra": "iterations: 4638\ncpu: 150717.68003449572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 49993.823949701386,
            "unit": "ns/iter",
            "extra": "iterations: 13996\ncpu: 49993.36953415304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 240210.07403582244,
            "unit": "ns/iter",
            "extra": "iterations: 2904\ncpu: 240199.99999999953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 195389.37608269884,
            "unit": "ns/iter",
            "extra": "iterations: 3579\ncpu: 195381.53115395285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 195497.39776847785,
            "unit": "ns/iter",
            "extra": "iterations: 3585\ncpu: 195487.5313807524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 195173.45459610582,
            "unit": "ns/iter",
            "extra": "iterations: 3590\ncpu: 195167.15877437446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 346569.5024703817,
            "unit": "ns/iter",
            "extra": "iterations: 2024\ncpu: 346544.51581027656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1334413.3645037871,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1334361.4503816732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1119708.4655999788,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1119629.759999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1125778.268057808,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1125734.189406097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1129725.1725806284,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1129713.5483871095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 725165.4496365981,
            "unit": "ns/iter",
            "extra": "iterations: 963\ncpu: 725134.5794392525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1111283.6740858653,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1111236.7249602536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 50599.85527262296,
            "unit": "ns/iter",
            "extra": "iterations: 13902\ncpu: 50597.288159977514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 240955.3986882898,
            "unit": "ns/iter",
            "extra": "iterations: 2897\ncpu: 240945.01208146647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 199641.56988328957,
            "unit": "ns/iter",
            "extra": "iterations: 3513\ncpu: 199630.48676345128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 197863.22165676835,
            "unit": "ns/iter",
            "extra": "iterations: 3537\ncpu: 197856.9409103727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 199018.85320840866,
            "unit": "ns/iter",
            "extra": "iterations: 3522\ncpu: 199012.49290176196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 349380.8663685996,
            "unit": "ns/iter",
            "extra": "iterations: 2013\ncpu: 349366.3189269807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1335898.919694022,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1335869.4072657614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1123479.0143999816,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1123430.559999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1125294.7942122577,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1125247.4276527257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1128744.6806451748,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1128677.0967741963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 725912.0996884955,
            "unit": "ns/iter",
            "extra": "iterations: 963\ncpu: 725882.8660436224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1114171.9984076736,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1114134.0764331194 ns\nthreads: 1"
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
          "id": "c1055272ad64f2314a237d4e8aa66cfea2a56aac",
          "message": "rm rdn",
          "timestamp": "2023-12-12T18:46:40+03:00",
          "tree_id": "a8ce2d06ccc561ccf79fea995e3abe4f5e35f6c2",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c1055272ad64f2314a237d4e8aa66cfea2a56aac"
        },
        "date": 1702396451369,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16401.865117277837,
            "unit": "ns/iter",
            "extra": "iterations: 41866\ncpu: 16401.055749295374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 153817.67724964046,
            "unit": "ns/iter",
            "extra": "iterations: 5512\ncpu: 153814.3505079826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 290067.6273001027,
            "unit": "ns/iter",
            "extra": "iterations: 2989\ncpu: 290058.8825694213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 428084.7315000074,
            "unit": "ns/iter",
            "extra": "iterations: 2000\ncpu: 428082.04999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 568479.8946347778,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 568464.3180349066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 567610.8140000338,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 567601.5999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 677909.072955043,
            "unit": "ns/iter",
            "extra": "iterations: 1357\ncpu: 677891.3780397935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 786889.0957264929,
            "unit": "ns/iter",
            "extra": "iterations: 1170\ncpu: 786873.8461538455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 904499.4552529202,
            "unit": "ns/iter",
            "extra": "iterations: 1028\ncpu: 904473.9299610893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13175.245920790014,
            "unit": "ns/iter",
            "extra": "iterations: 53074\ncpu: 13175.068771903389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10994.220616451741,
            "unit": "ns/iter",
            "extra": "iterations: 64628\ncpu: 10993.78597511914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11056.177001198637,
            "unit": "ns/iter",
            "extra": "iterations: 63412\ncpu: 11055.779663155236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11213.020588606887,
            "unit": "ns/iter",
            "extra": "iterations: 63336\ncpu: 11212.681571302266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18290.954453978484,
            "unit": "ns/iter",
            "extra": "iterations: 37764\ncpu: 18290.663065353245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 69076.27074023141,
            "unit": "ns/iter",
            "extra": "iterations: 12307\ncpu: 69075.89989436908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 364770.69681948173,
            "unit": "ns/iter",
            "extra": "iterations: 2421\ncpu: 364763.81660470855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 293229.5966415275,
            "unit": "ns/iter",
            "extra": "iterations: 2918\ncpu: 293221.72721041844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 281011.51978537836,
            "unit": "ns/iter",
            "extra": "iterations: 2982\ncpu: 281007.4111334677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 280700.86861313635,
            "unit": "ns/iter",
            "extra": "iterations: 3014\ncpu: 280694.2932979435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 540233.5389999849,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 540209.6000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4838592.29533678,
            "unit": "ns/iter",
            "extra": "iterations: 193\ncpu: 4838457.512953363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3937083.8907563933,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3937000.000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3943855.512711919,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3943725.0000000047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3908995.991596738,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3908865.966386554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2272344.325925913,
            "unit": "ns/iter",
            "extra": "iterations: 405\ncpu: 2272300.4938271614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3838743.396694176,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3838621.0743801645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 15118467.774647836,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 15118005.633802807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6570232.710000141,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6570049.000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 19006886.071429513,
            "unit": "ns/iter",
            "extra": "iterations: 56\ncpu: 19006357.142857146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 76331.14555833107,
            "unit": "ns/iter",
            "extra": "iterations: 11212\ncpu: 76329.45950767036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 399807.2940630866,
            "unit": "ns/iter",
            "extra": "iterations: 2156\ncpu: 399799.5361781086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 316379.5838876737,
            "unit": "ns/iter",
            "extra": "iterations: 2706\ncpu: 316372.7272727253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 314377.19202633353,
            "unit": "ns/iter",
            "extra": "iterations: 2734\ncpu: 314372.60424286727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 310160.9275045502,
            "unit": "ns/iter",
            "extra": "iterations: 2745\ncpu: 310154.38979963737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 539009.2469999673,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 539006.4999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4880189.617800977,
            "unit": "ns/iter",
            "extra": "iterations: 191\ncpu: 4880123.560209413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3953525.071129741,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3953438.0753138084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3977980.774468119,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3977899.5744680827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3954391.9491526308,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3954305.0847457396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2318317.461346733,
            "unit": "ns/iter",
            "extra": "iterations: 401\ncpu: 2318286.0349127157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3850695.8264464205,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3850614.8760330766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15327574.942857122,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 15327225.714285728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6638877.809999713,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6638438.999999963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 67502.87756557834,
            "unit": "ns/iter",
            "extra": "iterations: 12619\ncpu: 67499.28678976149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 355710.1965174221,
            "unit": "ns/iter",
            "extra": "iterations: 2412\ncpu: 355691.9983416251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 279434.7487717094,
            "unit": "ns/iter",
            "extra": "iterations: 3053\ncpu: 279421.1922698987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 281264.45700165135,
            "unit": "ns/iter",
            "extra": "iterations: 3035\ncpu: 281250.51070840267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 288351.71600521257,
            "unit": "ns/iter",
            "extra": "iterations: 3074\ncpu: 288340.273259597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 505941.85900001775,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505884.10000000295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4850965.632124312,
            "unit": "ns/iter",
            "extra": "iterations: 193\ncpu: 4850650.259067381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3960261.768907576,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3960002.1008403446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3908800.4895396214,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3908536.401673647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3904984.4122448065,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3904715.918367357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2276718.5318627423,
            "unit": "ns/iter",
            "extra": "iterations: 408\ncpu: 2276626.960784301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3823397.253061288,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3823341.6326530618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6170.663750741361,
            "unit": "ns/iter",
            "extra": "iterations: 112943\ncpu: 6170.053921004361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 40429.23688614288,
            "unit": "ns/iter",
            "extra": "iterations: 17329\ncpu: 40428.270529170666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 32128.644303331614,
            "unit": "ns/iter",
            "extra": "iterations: 21732\ncpu: 32127.39738634299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 32027.738024296963,
            "unit": "ns/iter",
            "extra": "iterations: 21815\ncpu: 32026.527618611177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24859.58397628238,
            "unit": "ns/iter",
            "extra": "iterations: 27996\ncpu: 24858.929847120882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 178654.11019141172,
            "unit": "ns/iter",
            "extra": "iterations: 3866\ncpu: 178643.6109674082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 318750.25273723854,
            "unit": "ns/iter",
            "extra": "iterations: 2192\ncpu: 318742.70072992705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 78643.03461062927,
            "unit": "ns/iter",
            "extra": "iterations: 8899\ncpu: 78640.81357455888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 78547.05628433428,
            "unit": "ns/iter",
            "extra": "iterations: 8919\ncpu: 78545.10595358127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 77822.42213341872,
            "unit": "ns/iter",
            "extra": "iterations: 9009\ncpu: 77821.97802197847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 147373.88303233855,
            "unit": "ns/iter",
            "extra": "iterations: 4762\ncpu: 147370.74758504846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 152978.33151461947,
            "unit": "ns/iter",
            "extra": "iterations: 4582\ncpu: 152977.65168048936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 48738.36692935299,
            "unit": "ns/iter",
            "extra": "iterations: 14466\ncpu: 48738.110051155214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 242969.02045769512,
            "unit": "ns/iter",
            "extra": "iterations: 2884\ncpu: 242965.46463245508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 196123.78917858662,
            "unit": "ns/iter",
            "extra": "iterations: 3567\ncpu: 196121.13821138308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 196086.3740543604,
            "unit": "ns/iter",
            "extra": "iterations: 3569\ncpu: 196085.346035305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 195813.4714486566,
            "unit": "ns/iter",
            "extra": "iterations: 3555\ncpu: 195808.24191279965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 344429.3091358001,
            "unit": "ns/iter",
            "extra": "iterations: 2025\ncpu: 344427.5555555572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1362024.7875244254,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1361967.2514619962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1129429.1831442874,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1129411.669367918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1133128.771986942,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1133095.9283387584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1135192.1167999534,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1135161.2799999884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 733633.1395593102,
            "unit": "ns/iter",
            "extra": "iterations: 953\ncpu: 733625.2885624273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1130063.8774193593,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1129994.1935483788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 50074.838000000454,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50073.86999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 243733.52092051625,
            "unit": "ns/iter",
            "extra": "iterations: 2868\ncpu: 243721.72245467396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 200776.92519347178,
            "unit": "ns/iter",
            "extra": "iterations: 3489\ncpu: 200771.96904557155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 198959.6531890711,
            "unit": "ns/iter",
            "extra": "iterations: 3512\ncpu: 198956.007972666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 199392.92055809655,
            "unit": "ns/iter",
            "extra": "iterations: 3512\ncpu: 199391.82801822276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 343589.89041770913,
            "unit": "ns/iter",
            "extra": "iterations: 2035\ncpu: 343588.0098280074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1364295.235867464,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1364287.719298251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1149449.0407166719,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1149443.9739413843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1134727.1084142502,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1134677.6699029203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1132991.8444083985,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1132975.3646677593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 734679.2631027476,
            "unit": "ns/iter",
            "extra": "iterations: 954\ncpu: 734657.1278826039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1130237.518638583,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1130205.834683962 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}