window.BENCHMARK_DATA = {
  "lastUpdate": 1702381146276,
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
      }
    ]
  }
}