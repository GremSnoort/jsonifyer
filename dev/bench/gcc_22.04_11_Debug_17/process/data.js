window.BENCHMARK_DATA = {
  "lastUpdate": 1702453357334,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-11 22.04 Debug c++-17": [
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
        "date": 1702397896685,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15450.61364489726,
            "unit": "ns/iter",
            "extra": "iterations: 45277\ncpu: 15449.751529474128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 152528.46717035546,
            "unit": "ns/iter",
            "extra": "iterations: 5559\ncpu: 152516.3698506926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 293944.21856287384,
            "unit": "ns/iter",
            "extra": "iterations: 3006\ncpu: 293695.4757152362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 423559.1086105671,
            "unit": "ns/iter",
            "extra": "iterations: 2044\ncpu: 423534.39334637986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 566697.1485788148,
            "unit": "ns/iter",
            "extra": "iterations: 1548\ncpu: 566663.8888888886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 565847.7800000127,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 565832.5000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 675275.5821767895,
            "unit": "ns/iter",
            "extra": "iterations: 1369\ncpu: 675228.0496712929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 787261.4609507729,
            "unit": "ns/iter",
            "extra": "iterations: 1178\ncpu: 787211.2903225806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 896160.3381502852,
            "unit": "ns/iter",
            "extra": "iterations: 1038\ncpu: 896110.5009633915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12552.690804086938,
            "unit": "ns/iter",
            "extra": "iterations: 56275\ncpu: 12551.655264326946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10342.298896072525,
            "unit": "ns/iter",
            "extra": "iterations: 68211\ncpu: 10341.653105804047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10136.781119345009,
            "unit": "ns/iter",
            "extra": "iterations: 69362\ncpu: 10136.022606037868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10210.757760256749,
            "unit": "ns/iter",
            "extra": "iterations: 68490\ncpu: 10210.638049350284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16328.4007412931,
            "unit": "ns/iter",
            "extra": "iterations: 42898\ncpu: 16328.208774301813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 65369.65113349971,
            "unit": "ns/iter",
            "extra": "iterations: 13498\ncpu: 65366.824714772585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 344663.2982737863,
            "unit": "ns/iter",
            "extra": "iterations: 2491\ncpu: 344651.62585307076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 270183.63906447834,
            "unit": "ns/iter",
            "extra": "iterations: 3164\ncpu: 270171.77623261756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 270076.1654585558,
            "unit": "ns/iter",
            "extra": "iterations: 3173\ncpu: 270051.78064922825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 265872.850997506,
            "unit": "ns/iter",
            "extra": "iterations: 3208\ncpu: 265856.88902743167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 593891.0893703433,
            "unit": "ns/iter",
            "extra": "iterations: 1477\ncpu: 593834.3263371689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4808915.675257665,
            "unit": "ns/iter",
            "extra": "iterations: 194\ncpu: 4808738.659793806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3916094.5983262933,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3915905.439330554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3859007.5083334344,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3858745.000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3852175.6008403655,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3851939.4957983233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2213082.4061757545,
            "unit": "ns/iter",
            "extra": "iterations: 421\ncpu: 2212940.1425178153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3768150.753036358,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3767813.3603238817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14756979.397260418,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14756065.75342464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6519445.350000126,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6519030.000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18341845.741379015,
            "unit": "ns/iter",
            "extra": "iterations: 58\ncpu: 18340836.206896584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 69068.02586276483,
            "unit": "ns/iter",
            "extra": "iterations: 12373\ncpu: 69062.66871413568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 376296.2819614712,
            "unit": "ns/iter",
            "extra": "iterations: 2284\ncpu: 376279.4220665488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 301337.80736842676,
            "unit": "ns/iter",
            "extra": "iterations: 2850\ncpu: 301316.7719298263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 299183.7168296074,
            "unit": "ns/iter",
            "extra": "iterations: 2864\ncpu: 299168.43575418805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 296318.81755115994,
            "unit": "ns/iter",
            "extra": "iterations: 2883\ncpu: 296292.7159209142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 608182.5716292049,
            "unit": "ns/iter",
            "extra": "iterations: 1424\ncpu: 608142.2050561793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4856463.505208334,
            "unit": "ns/iter",
            "extra": "iterations: 192\ncpu: 4856252.604166667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3955207.2297873506,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3954888.9361702236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3907721.418410029,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3907546.4435146474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3889382.549999946,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3889216.6666666544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2246271.202898462,
            "unit": "ns/iter",
            "extra": "iterations: 414\ncpu: 2246098.792270526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3805737.5469388342,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3805552.2448979556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15117156.112675961,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 15116114.084507095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6581559.120000406,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6581188.999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 62645.892722849036,
            "unit": "ns/iter",
            "extra": "iterations: 13563\ncpu: 62638.64926638633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 336943.16430817795,
            "unit": "ns/iter",
            "extra": "iterations: 2544\ncpu: 336920.9119496868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 270127.694593746,
            "unit": "ns/iter",
            "extra": "iterations: 3163\ncpu: 270103.95194435684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 268103.5949921799,
            "unit": "ns/iter",
            "extra": "iterations: 3195\ncpu: 268090.17214397644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 264576.8140827524,
            "unit": "ns/iter",
            "extra": "iterations: 3238\ncpu: 264567.5725756636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 579282.4472630033,
            "unit": "ns/iter",
            "extra": "iterations: 1498\ncpu: 579256.5420560755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4794351.082051225,
            "unit": "ns/iter",
            "extra": "iterations: 195\ncpu: 4794246.153846142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3904336.5732217063,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3904214.6443514777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3850935.983539077,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3850770.3703703634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3855423.9462811425,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3855178.9256198397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2214211.0095013035,
            "unit": "ns/iter",
            "extra": "iterations: 421\ncpu: 2214029.6912114094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3766722.9475805964,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3766546.3709677667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5614.166230439724,
            "unit": "ns/iter",
            "extra": "iterations: 124935\ncpu: 5613.723936446935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 39145.94856320406,
            "unit": "ns/iter",
            "extra": "iterations: 18061\ncpu: 39142.74403410686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 32126.710735814362,
            "unit": "ns/iter",
            "extra": "iterations: 21731\ncpu: 32124.140628595287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 31659.005845567455,
            "unit": "ns/iter",
            "extra": "iterations: 22068\ncpu: 31657.182345477762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23522.115643964495,
            "unit": "ns/iter",
            "extra": "iterations: 29660\ncpu: 23520.492245448528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 152235.35180356578,
            "unit": "ns/iter",
            "extra": "iterations: 4602\ncpu: 152226.53194263397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 313230.89610390994,
            "unit": "ns/iter",
            "extra": "iterations: 2233\ncpu: 313205.64263322944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 77434.40939226998,
            "unit": "ns/iter",
            "extra": "iterations: 9050\ncpu: 77430.71823204469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 76100.99284785737,
            "unit": "ns/iter",
            "extra": "iterations: 9228\ncpu: 76096.43476376333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 75810.15580613684,
            "unit": "ns/iter",
            "extra": "iterations: 9223\ncpu: 75808.42459069761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 156597.80474165812,
            "unit": "ns/iter",
            "extra": "iterations: 4471\ncpu: 156596.0635204657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 148955.40183720933,
            "unit": "ns/iter",
            "extra": "iterations: 4681\ncpu: 148943.38816492187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 45852.63441282136,
            "unit": "ns/iter",
            "extra": "iterations: 15285\ncpu: 45852.122996402104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 222409.8192197935,
            "unit": "ns/iter",
            "extra": "iterations: 3153\ncpu: 222404.6622264508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 178597.68054136581,
            "unit": "ns/iter",
            "extra": "iterations: 3916\ncpu: 178589.47906026535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 178183.89994894457,
            "unit": "ns/iter",
            "extra": "iterations: 3918\ncpu: 178167.07503828744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 177418.87718853253,
            "unit": "ns/iter",
            "extra": "iterations: 3941\ncpu: 177412.20502410416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 295401.13124471996,
            "unit": "ns/iter",
            "extra": "iterations: 2362\ncpu: 295383.99661303597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1338509.1647510272,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1338452.681992334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1126252.8009630088,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1126136.1155698188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1111912.5761904488,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1111889.0476190413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1106975.091772171,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1106963.2911392387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 702223.3086172399,
            "unit": "ns/iter",
            "extra": "iterations: 998\ncpu: 702171.042084171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1103041.8977987685,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1103002.2012578715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 45005.12536217657,
            "unit": "ns/iter",
            "extra": "iterations: 15531\ncpu: 45000.656751014016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 217916.24851701318,
            "unit": "ns/iter",
            "extra": "iterations: 3203\ncpu: 217906.8061192607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 181033.00800207545,
            "unit": "ns/iter",
            "extra": "iterations: 3874\ncpu: 181022.76716572238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 180541.50967242804,
            "unit": "ns/iter",
            "extra": "iterations: 3877\ncpu: 180535.2334279057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 181372.33729953927,
            "unit": "ns/iter",
            "extra": "iterations: 3866\ncpu: 181359.38954992197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 298266.6289631431,
            "unit": "ns/iter",
            "extra": "iterations: 2334\ncpu: 298253.51328191994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1342401.4770991723,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1342306.6793893103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1130951.9454253344,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1130938.202247179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1117695.387301594,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1117667.6190476178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1108020.644549762,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1107921.1690363425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 700151.8550000014,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 700120.7999999934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1105163.221169004,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1105091.785150091 ns\nthreads: 1"
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
          "id": "c96a03d62fd108220d1ee9e00340d51e289dfa36",
          "message": "Add compare for BMs, add parse data BMs",
          "timestamp": "2023-12-12T22:17:35+03:00",
          "tree_id": "f2fe56f9afc9ca6399f84dbb8347c53db7125ceb",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c96a03d62fd108220d1ee9e00340d51e289dfa36"
        },
        "date": 1702409086394,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14870.041871008909,
            "unit": "ns/iter",
            "extra": "iterations: 45879\ncpu: 14868.885546764315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 143653.7505496396,
            "unit": "ns/iter",
            "extra": "iterations: 5913\ncpu: 143646.8290208016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 272888.924546021,
            "unit": "ns/iter",
            "extra": "iterations: 3194\ncpu: 272870.4132748904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 400159.42711708636,
            "unit": "ns/iter",
            "extra": "iterations: 2161\ncpu: 400145.44192503457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 532182.4272672052,
            "unit": "ns/iter",
            "extra": "iterations: 1643\ncpu: 532135.2404138772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 533725.5110000002,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 533722.6999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 636327.3790000222,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 636273.8000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 741978.2629482375,
            "unit": "ns/iter",
            "extra": "iterations: 1255\ncpu: 741953.0677290837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 854610.2198905443,
            "unit": "ns/iter",
            "extra": "iterations: 1096\ncpu: 854560.6751824823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11390.32689713469,
            "unit": "ns/iter",
            "extra": "iterations: 61527\ncpu: 11389.754091699604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9517.757176273464,
            "unit": "ns/iter",
            "extra": "iterations: 73959\ncpu: 9517.617869360058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9460.753814700998,
            "unit": "ns/iter",
            "extra": "iterations: 73859\ncpu: 9460.528845502933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9472.908132754277,
            "unit": "ns/iter",
            "extra": "iterations: 73911\ncpu: 9472.492592442268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15647.246757602075,
            "unit": "ns/iter",
            "extra": "iterations: 44720\ncpu: 15646.216457960647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 61453.223300003396,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61450.66000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 319531.32176185935,
            "unit": "ns/iter",
            "extra": "iterations: 2679\ncpu: 319514.63232549484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 249124.8111401192,
            "unit": "ns/iter",
            "extra": "iterations: 3447\ncpu: 249111.69132579077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 249642.0950581366,
            "unit": "ns/iter",
            "extra": "iterations: 3440\ncpu: 249620.87209302312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 246459.5492511629,
            "unit": "ns/iter",
            "extra": "iterations: 3472\ncpu: 246444.32603686702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 562079.4104859486,
            "unit": "ns/iter",
            "extra": "iterations: 1564\ncpu: 562056.2020460342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4465062.023923706,
            "unit": "ns/iter",
            "extra": "iterations: 209\ncpu: 4464842.583732062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3648277.730468719,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3648122.2656249977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3644217.2070312304,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3643940.6250000084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3629956.015624991,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3629860.1562499977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2112007.2118450883,
            "unit": "ns/iter",
            "extra": "iterations: 439\ncpu: 2111962.4145785896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3544279.8778624292,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3544126.7175572547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 13986458.935064932,
            "unit": "ns/iter",
            "extra": "iterations: 77\ncpu: 13985644.155844146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6355175.720000261,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6355034.000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 17312576.919355508,
            "unit": "ns/iter",
            "extra": "iterations: 62\ncpu: 17311988.70967744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 66503.94352081878,
            "unit": "ns/iter",
            "extra": "iterations: 12872\ncpu: 66502.77346177734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 348110.4029067281,
            "unit": "ns/iter",
            "extra": "iterations: 2477\ncpu: 348104.23899878835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 277596.4101159746,
            "unit": "ns/iter",
            "extra": "iterations: 3104\ncpu: 277591.55927835073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 278452.6018041341,
            "unit": "ns/iter",
            "extra": "iterations: 3104\ncpu: 278439.6585051562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 273251.79866624984,
            "unit": "ns/iter",
            "extra": "iterations: 3149\ncpu: 273232.8040647811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 575611.970218414,
            "unit": "ns/iter",
            "extra": "iterations: 1511\ncpu: 575573.5936465897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4515609.9371981155,
            "unit": "ns/iter",
            "extra": "iterations: 207\ncpu: 4515464.251207754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3692631.280632227,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3692399.2094861874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3685324.047430847,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3685228.4584980235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3706021.5240001073,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3705863.20000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2138109.0825688797,
            "unit": "ns/iter",
            "extra": "iterations: 436\ncpu: 2138020.4128440246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3586577.6177605675,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3586483.011583021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14300832.421052465,
            "unit": "ns/iter",
            "extra": "iterations: 76\ncpu: 14300064.473684266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6320769.360000326,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6320385.000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 58785.68900000118,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58782.85000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 311410.6167465805,
            "unit": "ns/iter",
            "extra": "iterations: 2711\ncpu: 311380.56067871716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 250101.40949033614,
            "unit": "ns/iter",
            "extra": "iterations: 3414\ncpu: 250087.4926772111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 247872.5953206244,
            "unit": "ns/iter",
            "extra": "iterations: 3462\ncpu: 247854.5927209705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 243982.91751700075,
            "unit": "ns/iter",
            "extra": "iterations: 3528\ncpu: 243972.39229024964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 544261.9156249862,
            "unit": "ns/iter",
            "extra": "iterations: 1600\ncpu: 544247.4374999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4494079.221153686,
            "unit": "ns/iter",
            "extra": "iterations: 208\ncpu: 4494023.557692325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3658378.3359376285,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3657772.2656249977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3653190.1647059186,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3653066.6666666553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3640520.929961151,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3640317.12062259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2110707.1613636725,
            "unit": "ns/iter",
            "extra": "iterations: 440\ncpu: 2110634.3181818267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3542176.2129278453,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3542074.524714825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5667.371135192051,
            "unit": "ns/iter",
            "extra": "iterations: 123195\ncpu: 5667.405333008669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36561.323681867805,
            "unit": "ns/iter",
            "extra": "iterations: 19099\ncpu: 36560.41677574773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30144.8967121985,
            "unit": "ns/iter",
            "extra": "iterations: 23207\ncpu: 30144.766665230483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27125.79351066823,
            "unit": "ns/iter",
            "extra": "iterations: 25827\ncpu: 27124.57505711079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23018.87629723244,
            "unit": "ns/iter",
            "extra": "iterations: 30064\ncpu: 23019.0061202766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 145227.53469047634,
            "unit": "ns/iter",
            "extra": "iterations: 4814\ncpu: 145216.78437889603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 292442.2899999968,
            "unit": "ns/iter",
            "extra": "iterations: 2400\ncpu: 292436.5833333316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 72491.24259374067,
            "unit": "ns/iter",
            "extra": "iterations: 9654\ncpu: 72487.21773358315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 72481.55018625774,
            "unit": "ns/iter",
            "extra": "iterations: 9664\ncpu: 72478.69412251607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 72873.78844555374,
            "unit": "ns/iter",
            "extra": "iterations: 9624\ncpu: 72871.98669991641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 149221.4796505493,
            "unit": "ns/iter",
            "extra": "iterations: 4693\ncpu: 149216.70573193973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 128616.05584416009,
            "unit": "ns/iter",
            "extra": "iterations: 5390\ncpu: 128612.94990723797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 42288.04453832263,
            "unit": "ns/iter",
            "extra": "iterations: 16570\ncpu: 42286.43331321707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 201469.73840391648,
            "unit": "ns/iter",
            "extra": "iterations: 3471\ncpu: 201465.1109190458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 165898.7458879543,
            "unit": "ns/iter",
            "extra": "iterations: 4195\ncpu: 165898.045292014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 165553.45823501152,
            "unit": "ns/iter",
            "extra": "iterations: 4238\ncpu: 165549.15054270957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 166601.92302210088,
            "unit": "ns/iter",
            "extra": "iterations: 4209\ncpu: 166594.46424328582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 281819.4090908983,
            "unit": "ns/iter",
            "extra": "iterations: 2486\ncpu: 281807.2003218001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1237410.0493826754,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1237395.061728405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1033223.2544378806,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1033170.7100591654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1038485.043154783,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1038465.6249999952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1038103.7762962714,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1038077.1851851864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 655334.5402621514,
            "unit": "ns/iter",
            "extra": "iterations: 1068\ncpu: 655316.3857677942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1026829.3406754708,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1026777.5330396481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 41923.09239325376,
            "unit": "ns/iter",
            "extra": "iterations: 16722\ncpu: 41920.81688793202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 207084.73026507758,
            "unit": "ns/iter",
            "extra": "iterations: 3433\ncpu: 207069.73492572227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 168475.261933319,
            "unit": "ns/iter",
            "extra": "iterations: 4169\ncpu: 168474.81410410124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 167911.84154844066,
            "unit": "ns/iter",
            "extra": "iterations: 4159\ncpu: 167910.6035104568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 168997.7874186583,
            "unit": "ns/iter",
            "extra": "iterations: 4149\ncpu: 168996.38467100522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 282210.51168412174,
            "unit": "ns/iter",
            "extra": "iterations: 2482\ncpu: 282206.0435132971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1232413.5202109043,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1232367.135325117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1035318.1481481342,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1035303.8518518445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1037196.7952522287,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1037203.2640949668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1035352.2407681347,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1035343.8700147534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 651189.7495344671,
            "unit": "ns/iter",
            "extra": "iterations: 1074\ncpu: 651187.5232774618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1027222.6275659754,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1027207.0381231622 ns\nthreads: 1"
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
          "id": "a2fdd4a8b08935139af31fad37c86ca12b1dc63b",
          "message": "Add BMs; Setters Improve",
          "timestamp": "2023-12-12T23:14:54+03:00",
          "tree_id": "e41c2c9b1f31589e76e0363e3cfb6528364c4fdc",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/a2fdd4a8b08935139af31fad37c86ca12b1dc63b"
        },
        "date": 1702412521108,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14101.980875641031,
            "unit": "ns/iter",
            "extra": "iterations: 49518\ncpu: 14101.488347671553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 116321.78649206931,
            "unit": "ns/iter",
            "extra": "iterations: 7255\ncpu: 116318.71812543074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 219005.39732929753,
            "unit": "ns/iter",
            "extra": "iterations: 3969\ncpu: 218996.09473418997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 319374.8835489929,
            "unit": "ns/iter",
            "extra": "iterations: 2705\ncpu: 319366.9870609982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 421591.32852883934,
            "unit": "ns/iter",
            "extra": "iterations: 2012\ncpu: 421566.9483101393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 523107.99699341407,
            "unit": "ns/iter",
            "extra": "iterations: 1663\ncpu: 523091.94227300026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 502573.969000025,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 502566.70000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 593664.2099999858,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 593634.9999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 668935.0079652334,
            "unit": "ns/iter",
            "extra": "iterations: 1381\ncpu: 668867.4873280226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11334.221265516151,
            "unit": "ns/iter",
            "extra": "iterations: 62599\ncpu: 11334.05325963673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9437.699000832838,
            "unit": "ns/iter",
            "extra": "iterations: 74462\ncpu: 9437.817947409414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9411.294782140892,
            "unit": "ns/iter",
            "extra": "iterations: 74360\ncpu: 9411.304464765997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9349.531676836225,
            "unit": "ns/iter",
            "extra": "iterations: 74897\ncpu: 9349.37447427801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15326.376346905752,
            "unit": "ns/iter",
            "extra": "iterations: 45753\ncpu: 15326.076978558789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 54770.39514066284,
            "unit": "ns/iter",
            "extra": "iterations: 14858\ncpu: 54770.54785300848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 249412.9020467878,
            "unit": "ns/iter",
            "extra": "iterations: 3420\ncpu: 249415.61403508775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 198036.91764976957,
            "unit": "ns/iter",
            "extra": "iterations: 4323\ncpu: 198029.95604904013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 204168.5506678908,
            "unit": "ns/iter",
            "extra": "iterations: 4342\ncpu: 204135.8129894061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 195896.0254762355,
            "unit": "ns/iter",
            "extra": "iterations: 4357\ncpu: 195890.1308239615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 478521.84894422727,
            "unit": "ns/iter",
            "extra": "iterations: 1847\ncpu: 478490.47103410895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3613839.206225815,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3613751.3618677035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2917566.367924514,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2917500.943396229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2930125.400630796,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2930011.9873817046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2922670.3993709944,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2922583.64779874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1684604.519195572,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1684561.0603290685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2846677.760000008,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2846619.0769230723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 10776687.679999668,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 10776119.00000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6211857.078947359,
            "unit": "ns/iter",
            "extra": "iterations: 152\ncpu: 6211409.21052632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 13860379.467532707,
            "unit": "ns/iter",
            "extra": "iterations: 77\ncpu: 13859923.376623344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 52240.787400000954,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52241.46999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 277699.43622860895,
            "unit": "ns/iter",
            "extra": "iterations: 3097\ncpu: 277692.1214078128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 224043.9315569404,
            "unit": "ns/iter",
            "extra": "iterations: 3828\ncpu: 224039.942528735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 224030.98665969245,
            "unit": "ns/iter",
            "extra": "iterations: 3823\ncpu: 224031.2320167399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 221373.62287042677,
            "unit": "ns/iter",
            "extra": "iterations: 3874\ncpu: 221364.1713990704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 483897.7826086709,
            "unit": "ns/iter",
            "extra": "iterations: 1794\ncpu: 483872.742474915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3691138.944223311,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3691052.191235063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 2979989.682692245,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2979832.692307701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 2975225.939297135,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2975043.7699680505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2964827.7038217373,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2964742.6751592397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1724676.6906077391,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1724620.9944751337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2883705.704968997,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2883646.583850936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11085270.515463397,
            "unit": "ns/iter",
            "extra": "iterations: 97\ncpu: 11066920.618556708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6554908.170212843,
            "unit": "ns/iter",
            "extra": "iterations: 141\ncpu: 6554780.141843938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52515.30374400318,
            "unit": "ns/iter",
            "extra": "iterations: 15625\ncpu: 52510.41279999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 243594.13100313104,
            "unit": "ns/iter",
            "extra": "iterations: 3519\ncpu: 243588.06479113275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 193632.25508360483,
            "unit": "ns/iter",
            "extra": "iterations: 4426\ncpu: 193630.09489380944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 194204.52662588144,
            "unit": "ns/iter",
            "extra": "iterations: 4413\ncpu: 194203.0591434409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 190013.8366533869,
            "unit": "ns/iter",
            "extra": "iterations: 4518\ncpu: 190008.43293492697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 456510.9412073694,
            "unit": "ns/iter",
            "extra": "iterations: 1905\ncpu: 456504.72440944886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3630404.4941633404,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3630334.6303502056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2929828.5830720966,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2929836.050156752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2915742.2749999994,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2915650.937500014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2929222.9213837297,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2929180.1886792434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1677794.290090124,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1677784.504504503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2881951.6727828397,
            "unit": "ns/iter",
            "extra": "iterations: 327\ncpu: 2881887.461773687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5845.695728408232,
            "unit": "ns/iter",
            "extra": "iterations: 119768\ncpu: 5845.525515997609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 31543.058382964682,
            "unit": "ns/iter",
            "extra": "iterations: 22164\ncpu: 31542.672802743058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 25944.968556136177,
            "unit": "ns/iter",
            "extra": "iterations: 28209\ncpu: 25944.666595767358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 25627.076319341075,
            "unit": "ns/iter",
            "extra": "iterations: 28158\ncpu: 25626.401022799895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 19799.043212324428,
            "unit": "ns/iter",
            "extra": "iterations: 35314\ncpu: 19798.068754601332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 127554.64470121019,
            "unit": "ns/iter",
            "extra": "iterations: 5539\ncpu: 127545.08033941279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 251318.907867506,
            "unit": "ns/iter",
            "extra": "iterations: 2898\ncpu: 251309.59282263808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 60972.70267911662,
            "unit": "ns/iter",
            "extra": "iterations: 11459\ncpu: 60973.46190767141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 60681.992710234896,
            "unit": "ns/iter",
            "extra": "iterations: 11523\ncpu: 60682.773583268834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 60950.46427950844,
            "unit": "ns/iter",
            "extra": "iterations: 11506\ncpu: 60950.3737180603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 121334.10446459752,
            "unit": "ns/iter",
            "extra": "iterations: 5734\ncpu: 121335.78653645063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 113889.04448773665,
            "unit": "ns/iter",
            "extra": "iterations: 6159\ncpu: 113888.79688261027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 37895.89942652887,
            "unit": "ns/iter",
            "extra": "iterations: 18484\ncpu: 37896.40770396066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 188909.04403867395,
            "unit": "ns/iter",
            "extra": "iterations: 3724\ncpu: 188908.96885069783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 151844.9487735993,
            "unit": "ns/iter",
            "extra": "iterations: 4607\ncpu: 151846.95029303225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 151418.08506493334,
            "unit": "ns/iter",
            "extra": "iterations: 4620\ncpu: 151420.10822510705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 152080.4233369733,
            "unit": "ns/iter",
            "extra": "iterations: 4585\ncpu: 152082.4645583419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 261552.87910447567,
            "unit": "ns/iter",
            "extra": "iterations: 2680\ncpu: 261551.04477611944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1043726.371428567,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1043727.2180451088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 875102.7425000046,
            "unit": "ns/iter",
            "extra": "iterations: 800\ncpu: 875114.2500000064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 872713.1608478734,
            "unit": "ns/iter",
            "extra": "iterations: 802\ncpu: 872724.4389027525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 875766.7268170159,
            "unit": "ns/iter",
            "extra": "iterations: 798\ncpu: 875768.045112793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 560711.5674381529,
            "unit": "ns/iter",
            "extra": "iterations: 1253\ncpu: 560700.0000000056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 860286.3111930753,
            "unit": "ns/iter",
            "extra": "iterations: 813\ncpu: 860285.7318573258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 38861.565896210624,
            "unit": "ns/iter",
            "extra": "iterations: 17998\ncpu: 38861.623513723905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 188875.12826731868,
            "unit": "ns/iter",
            "extra": "iterations: 3711\ncpu: 188877.95742387214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 153413.55318681523,
            "unit": "ns/iter",
            "extra": "iterations: 4550\ncpu: 153411.8021978007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 152303.8548034899,
            "unit": "ns/iter",
            "extra": "iterations: 4580\ncpu: 152303.93013100474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 152723.94659982514,
            "unit": "ns/iter",
            "extra": "iterations: 4588\ncpu: 152725.85004359178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 261981.95822454718,
            "unit": "ns/iter",
            "extra": "iterations: 2681\ncpu: 261982.39462887027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1041576.826151499,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1041589.4502228734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 875809.8062499897,
            "unit": "ns/iter",
            "extra": "iterations: 800\ncpu: 875788.2499999958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 869010.3717471854,
            "unit": "ns/iter",
            "extra": "iterations: 807\ncpu: 869000.1239157345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 870743.8901373383,
            "unit": "ns/iter",
            "extra": "iterations: 801\ncpu: 870735.5805243412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 559367.8492382056,
            "unit": "ns/iter",
            "extra": "iterations: 1247\ncpu: 559374.9799518817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 861798.9298029958,
            "unit": "ns/iter",
            "extra": "iterations: 812\ncpu: 861798.5221674984 ns\nthreads: 1"
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
          "id": "3da6f92518ebbffed2e11d1053cee2ce52bff1f0",
          "message": "Upd README",
          "timestamp": "2023-12-13T00:12:53+03:00",
          "tree_id": "2f3e289da6746982a8c43b0c572e183f11742827",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/3da6f92518ebbffed2e11d1053cee2ce52bff1f0"
        },
        "date": 1702418338428,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14457.596997071147,
            "unit": "ns/iter",
            "extra": "iterations: 48486\ncpu: 14456.85146227777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 118460.59577762203,
            "unit": "ns/iter",
            "extra": "iterations: 7105\ncpu: 118458.49401829697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 225136.2097311162,
            "unit": "ns/iter",
            "extra": "iterations: 3905\ncpu: 225133.41869398206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 325612.07331821555,
            "unit": "ns/iter",
            "extra": "iterations: 2646\ncpu: 325609.0325018898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 429527.949604737,
            "unit": "ns/iter",
            "extra": "iterations: 2024\ncpu: 429519.91106719384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 533655.6548286707,
            "unit": "ns/iter",
            "extra": "iterations: 1605\ncpu: 533653.894080997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 511904.1909999851,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511894.1000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 594893.720999977,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 594897.5000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 678878.4959765958,
            "unit": "ns/iter",
            "extra": "iterations: 1367\ncpu: 678850.4023408922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11447.12634329571,
            "unit": "ns/iter",
            "extra": "iterations: 61230\ncpu: 11446.35472807448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9606.274997942337,
            "unit": "ns/iter",
            "extra": "iterations: 72906\ncpu: 9605.84451211149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9569.247670903052,
            "unit": "ns/iter",
            "extra": "iterations: 73097\ncpu: 9568.993255537163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9531.830299975403,
            "unit": "ns/iter",
            "extra": "iterations: 73406\ncpu: 9532.031441571524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15594.709489475077,
            "unit": "ns/iter",
            "extra": "iterations: 44797\ncpu: 15594.74518382927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55232.12213120378,
            "unit": "ns/iter",
            "extra": "iterations: 14771\ncpu: 55232.536727371255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 245380.59930915228,
            "unit": "ns/iter",
            "extra": "iterations: 3474\ncpu: 245378.81404720744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 193922.47033514295,
            "unit": "ns/iter",
            "extra": "iterations: 4416\ncpu: 193923.2336956518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 191357.7912457893,
            "unit": "ns/iter",
            "extra": "iterations: 4455\ncpu: 191358.40628507323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 191432.68523927266,
            "unit": "ns/iter",
            "extra": "iterations: 4451\ncpu: 191432.1950123567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 487208.38137472584,
            "unit": "ns/iter",
            "extra": "iterations: 1804\ncpu: 487200.5543237244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3697182.399209487,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3697136.363636361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2972600.173076938,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2972639.7435897416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2965665.5463258647,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2965598.402555914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2958195.4472843455,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2958216.613418534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1688246.6605839427,
            "unit": "ns/iter",
            "extra": "iterations: 548\ncpu: 1688222.0802919674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2891844.7999999765,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2891705.6249999963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 10744951.979798103,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 10744458.58585858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6509853.506944355,
            "unit": "ns/iter",
            "extra": "iterations: 144\ncpu: 6509554.861111106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 13942372.558441453,
            "unit": "ns/iter",
            "extra": "iterations: 77\ncpu: 13941738.961038938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 52622.74789999992,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52621.08000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 274383.3714561912,
            "unit": "ns/iter",
            "extra": "iterations: 3104\ncpu: 274370.29639175336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 219150.06312038386,
            "unit": "ns/iter",
            "extra": "iterations: 3929\ncpu: 219137.94858742697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 220695.6612529002,
            "unit": "ns/iter",
            "extra": "iterations: 3879\ncpu: 220687.88347512184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 219344.24749422446,
            "unit": "ns/iter",
            "extra": "iterations: 3891\ncpu: 219329.63248522076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 493153.44974445936,
            "unit": "ns/iter",
            "extra": "iterations: 1761\ncpu: 493136.0590573533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3748676.1044175797,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3748528.1124497913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3028144.4560259413,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3028114.983713345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3138327.543689438,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3138331.391585748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3002795.451612883,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 3002790.967741934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1722701.2578849972,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1722710.9461966567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2932231.937106864,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2932180.188679244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11060553.364583114,
            "unit": "ns/iter",
            "extra": "iterations: 96\ncpu: 11060471.874999959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6493879.347221959,
            "unit": "ns/iter",
            "extra": "iterations: 144\ncpu: 6493959.027777792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52463.1309728852,
            "unit": "ns/iter",
            "extra": "iterations: 15675\ncpu: 52462.75598086129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 239193.88323601923,
            "unit": "ns/iter",
            "extra": "iterations: 3597\ncpu: 239198.27634139473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 189430.3688506406,
            "unit": "ns/iter",
            "extra": "iterations: 4533\ncpu: 189431.17140966226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 190679.88817108795,
            "unit": "ns/iter",
            "extra": "iterations: 4489\ncpu: 190675.4511026955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 188029.56204540783,
            "unit": "ns/iter",
            "extra": "iterations: 4537\ncpu: 188030.5708618029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 466724.80827065685,
            "unit": "ns/iter",
            "extra": "iterations: 1862\ncpu: 466722.5563909793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3698643.5992063317,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3698665.476190478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2982184.137255069,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 2982132.3529411685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2970555.7307691374,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2970609.9358974323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2959343.4171974906,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2959307.643312088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1676877.064864875,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1676896.7567567509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2880667.7120743166,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 2880603.4055727604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5705.92800598798,
            "unit": "ns/iter",
            "extra": "iterations: 122913\ncpu: 5705.720306232883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 32081.089743589444,
            "unit": "ns/iter",
            "extra": "iterations: 21840\ncpu: 32081.730769230802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 25990.780697649097,
            "unit": "ns/iter",
            "extra": "iterations: 27779\ncpu: 25989.88084524297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 26170.62305971093,
            "unit": "ns/iter",
            "extra": "iterations: 28604\ncpu: 26169.948258984812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20030.77486716545,
            "unit": "ns/iter",
            "extra": "iterations: 35006\ncpu: 20030.20339370387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 127458.50136537533,
            "unit": "ns/iter",
            "extra": "iterations: 5493\ncpu: 127455.59803386028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 245215.89188244587,
            "unit": "ns/iter",
            "extra": "iterations: 2858\ncpu: 245206.68299509722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 61821.94703445705,
            "unit": "ns/iter",
            "extra": "iterations: 11347\ncpu: 61819.70564907093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 61460.3901262731,
            "unit": "ns/iter",
            "extra": "iterations: 11404\ncpu: 61459.575587513114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 61535.78536928368,
            "unit": "ns/iter",
            "extra": "iterations: 11387\ncpu: 61534.84675507172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 121688.38580353853,
            "unit": "ns/iter",
            "extra": "iterations: 5762\ncpu: 121684.9357861847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 115704.12446423057,
            "unit": "ns/iter",
            "extra": "iterations: 6066\ncpu: 115700.24727992066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 38461.62720624538,
            "unit": "ns/iter",
            "extra": "iterations: 18187\ncpu: 38461.79688788726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 190713.53326064354,
            "unit": "ns/iter",
            "extra": "iterations: 3668\ncpu: 190713.65866957678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 154935.08644704695,
            "unit": "ns/iter",
            "extra": "iterations: 4523\ncpu: 154931.59407472776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 153393.2358038696,
            "unit": "ns/iter",
            "extra": "iterations: 4385\ncpu: 153395.37058152963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 153563.9727771688,
            "unit": "ns/iter",
            "extra": "iterations: 4555\ncpu: 153563.0296377615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 264628.4928193305,
            "unit": "ns/iter",
            "extra": "iterations: 2646\ncpu: 264633.18216175155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1062826.487841939,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1062822.1884498477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 888568.0903307662,
            "unit": "ns/iter",
            "extra": "iterations: 786\ncpu: 888567.0483460601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 878682.0275344291,
            "unit": "ns/iter",
            "extra": "iterations: 799\ncpu: 878680.6007509384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 882407.3337531541,
            "unit": "ns/iter",
            "extra": "iterations: 794\ncpu: 882392.9471032755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 566435.414378048,
            "unit": "ns/iter",
            "extra": "iterations: 1238\ncpu: 566443.7802907939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 873677.2796504945,
            "unit": "ns/iter",
            "extra": "iterations: 801\ncpu: 873647.0661672922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 39271.04738589796,
            "unit": "ns/iter",
            "extra": "iterations: 17769\ncpu: 39271.19140075342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 192522.60709374945,
            "unit": "ns/iter",
            "extra": "iterations: 3637\ncpu: 192516.68957932302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 157429.29867207218,
            "unit": "ns/iter",
            "extra": "iterations: 4443\ncpu: 157429.79968489642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 154661.87155760935,
            "unit": "ns/iter",
            "extra": "iterations: 4539\ncpu: 154662.81119189342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 157456.4121470267,
            "unit": "ns/iter",
            "extra": "iterations: 4462\ncpu: 157456.25280143254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 263248.9002259063,
            "unit": "ns/iter",
            "extra": "iterations: 2656\ncpu: 263243.222891566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1060443.60638295,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1060413.6778115449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 887292.9657360776,
            "unit": "ns/iter",
            "extra": "iterations: 788\ncpu: 887303.9340101547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 878774.336260952,
            "unit": "ns/iter",
            "extra": "iterations: 797\ncpu: 878758.0928481919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 881554.6595207936,
            "unit": "ns/iter",
            "extra": "iterations: 793\ncpu: 881560.0252206768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 564691.1033091076,
            "unit": "ns/iter",
            "extra": "iterations: 1239\ncpu: 564687.4899112253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 915766.0237203343,
            "unit": "ns/iter",
            "extra": "iterations: 801\ncpu: 915736.5792759153 ns\nthreads: 1"
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
          "id": "93a417e35b7cddb2aff5c69874155ac65b18afac",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:35:38+03:00",
          "tree_id": "ac2b7d38c5e0b561e002516e4bf347cf5169f70d",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/93a417e35b7cddb2aff5c69874155ac65b18afac"
        },
        "date": 1702420960566,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15006.634295801778,
            "unit": "ns/iter",
            "extra": "iterations: 49283\ncpu: 15005.939167664308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 117272.26043125159,
            "unit": "ns/iter",
            "extra": "iterations: 7142\ncpu: 117271.56258751052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 221914.09311844403,
            "unit": "ns/iter",
            "extra": "iterations: 3909\ncpu: 221905.55129189047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 325232.7597133119,
            "unit": "ns/iter",
            "extra": "iterations: 2651\ncpu: 325206.86533383635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 427476.3200393983,
            "unit": "ns/iter",
            "extra": "iterations: 2031\ncpu: 427439.7833579519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 529747.19804996,
            "unit": "ns/iter",
            "extra": "iterations: 1641\ncpu: 529709.4454600854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 508925.2029999898,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508910.40000000043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 592161.6219999919,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 592119.6999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 678739.4676833609,
            "unit": "ns/iter",
            "extra": "iterations: 1377\ncpu: 678686.928104575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11189.658513956361,
            "unit": "ns/iter",
            "extra": "iterations: 62515\ncpu: 11188.945053187243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9428.48831480056,
            "unit": "ns/iter",
            "extra": "iterations: 74282\ncpu: 9428.03370937779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9361.875952616503,
            "unit": "ns/iter",
            "extra": "iterations: 74794\ncpu: 9361.775008690527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9410.585983415194,
            "unit": "ns/iter",
            "extra": "iterations: 74526\ncpu: 9409.96833319916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15451.113254127271,
            "unit": "ns/iter",
            "extra": "iterations: 45367\ncpu: 15450.521304031587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55242.106682850674,
            "unit": "ns/iter",
            "extra": "iterations: 14829\ncpu: 55239.03837076006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 247469.0011553898,
            "unit": "ns/iter",
            "extra": "iterations: 3462\ncpu: 247455.25707683412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 197566.81813985814,
            "unit": "ns/iter",
            "extra": "iterations: 4333\ncpu: 197559.93537964454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 195400.8416227323,
            "unit": "ns/iter",
            "extra": "iterations: 4363\ncpu: 195400.2979601195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 195897.16990624805,
            "unit": "ns/iter",
            "extra": "iterations: 4373\ncpu: 195889.52664075003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 491356.7304250681,
            "unit": "ns/iter",
            "extra": "iterations: 1788\ncpu: 491331.9910514541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3651687.653543169,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3651527.1653543417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2949784.442675137,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2949586.942675156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2947352.465189886,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2947206.9620253197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2936354.2082018363,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2936249.211356465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1705262.127071757,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1705196.685082875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2867530.839009394,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 2867213.312693499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 10831959.080808293,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 10831567.676767657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6422631.903448181,
            "unit": "ns/iter",
            "extra": "iterations: 145\ncpu: 6422378.620689651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 13963961.013158005,
            "unit": "ns/iter",
            "extra": "iterations: 76\ncpu: 13963053.947368415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 53349.12129999907,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53348.42999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 280511.5052151192,
            "unit": "ns/iter",
            "extra": "iterations: 3068\ncpu: 280493.12255541014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 222213.04076863485,
            "unit": "ns/iter",
            "extra": "iterations: 3851\ncpu: 222205.32329265072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 224714.41259472817,
            "unit": "ns/iter",
            "extra": "iterations: 3827\ncpu: 224701.3848967849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 221321.97061097706,
            "unit": "ns/iter",
            "extra": "iterations: 3879\ncpu: 221311.4462490329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 513926.8480138277,
            "unit": "ns/iter",
            "extra": "iterations: 1737\ncpu: 513900.11514104536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3714615.4480001316,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3714463.5999999875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3006113.740259745,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3005894.480519477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 2986572.0320513807,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2986390.7051281948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2986967.884984066,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2986822.3642172613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1729564.6821561381,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1729462.6394052117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2905086.3125000605,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2904957.499999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11276218.708333137,
            "unit": "ns/iter",
            "extra": "iterations: 96\ncpu: 11275319.791666627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6599788.886524603,
            "unit": "ns/iter",
            "extra": "iterations: 141\ncpu: 6599548.936170221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52638.493813708854,
            "unit": "ns/iter",
            "extra": "iterations: 15599\ncpu: 52634.373998333416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 243203.41597952685,
            "unit": "ns/iter",
            "extra": "iterations: 3517\ncpu: 243144.12851862455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 194405.59501134465,
            "unit": "ns/iter",
            "extra": "iterations: 4410\ncpu: 194395.14739228974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 190965.65900981563,
            "unit": "ns/iter",
            "extra": "iterations: 4484\ncpu: 190955.75379125806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 189145.43405009792,
            "unit": "ns/iter",
            "extra": "iterations: 4511\ncpu: 189137.66348924875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 473658.08505996905,
            "unit": "ns/iter",
            "extra": "iterations: 1834\ncpu: 473642.14830970665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3667873.3346455493,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3667652.755905506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2973638.188498367,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2973525.87859424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2981719.2310126023,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2981631.3291139365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2934515.8296530047,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2934418.296529976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1695797.8506375533,
            "unit": "ns/iter",
            "extra": "iterations: 549\ncpu: 1695669.5810564707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2860545.9197531203,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2860558.641975321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5658.678012500486,
            "unit": "ns/iter",
            "extra": "iterations: 123834\ncpu: 5658.541272994448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 31954.52161593859,
            "unit": "ns/iter",
            "extra": "iterations: 21882\ncpu: 31953.596563385367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 24569.867437689925,
            "unit": "ns/iter",
            "extra": "iterations: 28447\ncpu: 24567.884135409622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 25492.568794429033,
            "unit": "ns/iter",
            "extra": "iterations: 27713\ncpu: 25490.509869014728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 19896.432414734947,
            "unit": "ns/iter",
            "extra": "iterations: 35126\ncpu: 19894.71616466448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 130044.32440476607,
            "unit": "ns/iter",
            "extra": "iterations: 5376\ncpu: 130037.33258928498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 233247.06969796243,
            "unit": "ns/iter",
            "extra": "iterations: 3013\ncpu: 233229.50547626885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 61623.60515399826,
            "unit": "ns/iter",
            "extra": "iterations: 11331\ncpu: 61621.3926396615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 61620.82727511618,
            "unit": "ns/iter",
            "extra": "iterations: 11417\ncpu: 61615.02145922861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 61115.8954912447,
            "unit": "ns/iter",
            "extra": "iterations: 11023\ncpu: 61107.72929329611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 123397.61502848548,
            "unit": "ns/iter",
            "extra": "iterations: 5616\ncpu: 123390.3668091186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 115270.99573839853,
            "unit": "ns/iter",
            "extra": "iterations: 6101\ncpu: 115257.56433371693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 38519.083897603996,
            "unit": "ns/iter",
            "extra": "iterations: 18165\ncpu: 38517.56674924316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 187046.3468842061,
            "unit": "ns/iter",
            "extra": "iterations: 3739\ncpu: 187033.24418293772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 151920.61251086707,
            "unit": "ns/iter",
            "extra": "iterations: 4604\ncpu: 151909.77410946914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 149010.95983676985,
            "unit": "ns/iter",
            "extra": "iterations: 4656\ncpu: 149006.46477663508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 149610.89447879448,
            "unit": "ns/iter",
            "extra": "iterations: 4691\ncpu: 149552.4195267538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 260476.8457822412,
            "unit": "ns/iter",
            "extra": "iterations: 2691\ncpu: 260450.27870680325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1059375.6303030727,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1059315.1515151423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 885810.4715550176,
            "unit": "ns/iter",
            "extra": "iterations: 791\ncpu: 885750.063211132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 880061.1120906959,
            "unit": "ns/iter",
            "extra": "iterations: 794\ncpu: 879991.9395465878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 874447.1987500191,
            "unit": "ns/iter",
            "extra": "iterations: 800\ncpu: 874442.8750000033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 567055.5602263582,
            "unit": "ns/iter",
            "extra": "iterations: 1237\ncpu: 567005.4971705831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 868541.2206982664,
            "unit": "ns/iter",
            "extra": "iterations: 802\ncpu: 868497.1321695771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 38847.64950396129,
            "unit": "ns/iter",
            "extra": "iterations: 18043\ncpu: 38845.08119492351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 189154.16509051708,
            "unit": "ns/iter",
            "extra": "iterations: 3701\ncpu: 189144.2853282901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 154477.98893069866,
            "unit": "ns/iter",
            "extra": "iterations: 4517\ncpu: 154471.52977640252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 151813.73417172916,
            "unit": "ns/iter",
            "extra": "iterations: 4612\ncpu: 151801.08412836035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 152914.13183209067,
            "unit": "ns/iter",
            "extra": "iterations: 4574\ncpu: 152907.91429820558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 263943.07107936,
            "unit": "ns/iter",
            "extra": "iterations: 2659\ncpu: 263917.78864234337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1054971.3429002909,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1054940.1812688848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 880364.3907035438,
            "unit": "ns/iter",
            "extra": "iterations: 796\ncpu: 880281.1557788937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 873879.0349562985,
            "unit": "ns/iter",
            "extra": "iterations: 801\ncpu: 873832.8339575431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 874660.3787500362,
            "unit": "ns/iter",
            "extra": "iterations: 800\ncpu: 874624.7499999882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 566230.6391585737,
            "unit": "ns/iter",
            "extra": "iterations: 1236\ncpu: 566177.3462783146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 869457.2107231551,
            "unit": "ns/iter",
            "extra": "iterations: 802\ncpu: 869447.6309226832 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702421407373,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14291.602196548702,
            "unit": "ns/iter",
            "extra": "iterations: 49077\ncpu: 14291.52148664344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 117980.81141508112,
            "unit": "ns/iter",
            "extra": "iterations: 7201\ncpu: 117980.75267323983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 220382.1523061346,
            "unit": "ns/iter",
            "extra": "iterations: 3946\ncpu: 220374.50582868722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 321235.23985102057,
            "unit": "ns/iter",
            "extra": "iterations: 2685\ncpu: 321234.30167597777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 423535.4970731672,
            "unit": "ns/iter",
            "extra": "iterations: 2050\ncpu: 423504.04878048785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 528334.8975757635,
            "unit": "ns/iter",
            "extra": "iterations: 1650\ncpu: 528299.2727272728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 506341.3780000019,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 506321.3000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 589046.5789999836,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 589034.2000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 672957.9579100213,
            "unit": "ns/iter",
            "extra": "iterations: 1378\ncpu: 672943.3962264147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11336.114138092846,
            "unit": "ns/iter",
            "extra": "iterations: 61741\ncpu: 11335.433504478362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9522.666892900625,
            "unit": "ns/iter",
            "extra": "iterations: 73670\ncpu: 9522.389032170475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9435.357814192745,
            "unit": "ns/iter",
            "extra": "iterations: 73840\ncpu: 9434.855092091022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9536.932261783722,
            "unit": "ns/iter",
            "extra": "iterations: 73725\ncpu: 9537.034927093937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15629.270438566997,
            "unit": "ns/iter",
            "extra": "iterations: 44805\ncpu: 15628.677602946082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 54689.12232786999,
            "unit": "ns/iter",
            "extra": "iterations: 14829\ncpu: 54688.05044170203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 244687.73562231543,
            "unit": "ns/iter",
            "extra": "iterations: 3495\ncpu: 244673.36194563704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 194319.80174592382,
            "unit": "ns/iter",
            "extra": "iterations: 4353\ncpu: 194314.88628532048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 194461.1509261385,
            "unit": "ns/iter",
            "extra": "iterations: 4373\ncpu: 194446.12394237416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 192142.94874101086,
            "unit": "ns/iter",
            "extra": "iterations: 4448\ncpu: 192132.93615107946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 483875.1850027325,
            "unit": "ns/iter",
            "extra": "iterations: 1827\ncpu: 483858.4564860427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3645577.46875005,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3645291.7968750056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2940410.6993671297,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2940382.911392407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2960663.4458598453,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2960390.764331216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2956978.629392993,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2956882.4281150126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1706363.7255985322,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1706276.7955801138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2872928.6934984275,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 2872716.0990712023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 10837334.535353312,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 10837043.434343422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6269388.608108164,
            "unit": "ns/iter",
            "extra": "iterations: 148\ncpu: 6268993.918918916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14041464.842105187,
            "unit": "ns/iter",
            "extra": "iterations: 76\ncpu: 14040899.999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 53148.47780000207,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53146.18000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 278927.1467056108,
            "unit": "ns/iter",
            "extra": "iterations: 3081\ncpu: 278929.7630639391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 221815.31330582566,
            "unit": "ns/iter",
            "extra": "iterations: 3878\ncpu: 221807.76173285075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 220594.1285274563,
            "unit": "ns/iter",
            "extra": "iterations: 3898\ncpu: 220589.9179066185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 219063.00051414303,
            "unit": "ns/iter",
            "extra": "iterations: 3890\ncpu: 219048.71465295664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 486372.9983164943,
            "unit": "ns/iter",
            "extra": "iterations: 1782\ncpu: 486357.631874301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3731141.581027604,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3725219.7628458627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 2990108.196774137,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 2989809.677419365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 2987168.5352564105,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2987030.448717945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2991365.321543364,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2991291.318327964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1748959.7627118689,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1748892.6553672368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2909745.0687499912,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2909740.3125000196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11214645.489583693,
            "unit": "ns/iter",
            "extra": "iterations: 96\ncpu: 11214256.250000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6488767.034965066,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6488490.2097901935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 51754.94875678151,
            "unit": "ns/iter",
            "extra": "iterations: 15846\ncpu: 51754.815095292055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 244250.08357020872,
            "unit": "ns/iter",
            "extra": "iterations: 3518\ncpu: 244248.32291074487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 190950.70581705504,
            "unit": "ns/iter",
            "extra": "iterations: 4504\ncpu: 190949.2007104793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 190275.1676300487,
            "unit": "ns/iter",
            "extra": "iterations: 4498\ncpu: 190269.38639395198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 187841.22322411454,
            "unit": "ns/iter",
            "extra": "iterations: 4547\ncpu: 187837.93710138535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 463928.42377398594,
            "unit": "ns/iter",
            "extra": "iterations: 1876\ncpu: 463923.9339019192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3649119.5607843166,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3649084.7058823695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2958150.708860749,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2958095.5696202447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2946909.740506306,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2946830.379746834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2961117.76507937,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 2961086.349206349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1698359.6399999936,
            "unit": "ns/iter",
            "extra": "iterations: 550\ncpu: 1698304.000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2872416.2430769587,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2872336.9230769216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5615.25386391309,
            "unit": "ns/iter",
            "extra": "iterations: 124744\ncpu: 5614.983486179676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 32340.49229206915,
            "unit": "ns/iter",
            "extra": "iterations: 21666\ncpu: 32340.095079848477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26077.918250951327,
            "unit": "ns/iter",
            "extra": "iterations: 26826\ncpu: 26076.466860508714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 25323.419690993484,
            "unit": "ns/iter",
            "extra": "iterations: 27637\ncpu: 25321.272207547867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20286.357223689014,
            "unit": "ns/iter",
            "extra": "iterations: 34463\ncpu: 20284.98679743488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 126453.33730158389,
            "unit": "ns/iter",
            "extra": "iterations: 5544\ncpu: 126442.1536796541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 240846.9955265076,
            "unit": "ns/iter",
            "extra": "iterations: 2906\ncpu: 240824.32897453752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 61666.262374496335,
            "unit": "ns/iter",
            "extra": "iterations: 11354\ncpu: 61660.48969526263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 61288.358554934544,
            "unit": "ns/iter",
            "extra": "iterations: 11432\ncpu: 61288.00734779528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 61403.96290110013,
            "unit": "ns/iter",
            "extra": "iterations: 11375\ncpu: 61398.81318681246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 121716.48124999182,
            "unit": "ns/iter",
            "extra": "iterations: 5760\ncpu: 121708.10763888854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 114714.19671593123,
            "unit": "ns/iter",
            "extra": "iterations: 6090\ncpu: 114707.06075533654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 39170.949565705625,
            "unit": "ns/iter",
            "extra": "iterations: 17845\ncpu: 39168.545811151336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 184550.66385668618,
            "unit": "ns/iter",
            "extra": "iterations: 3796\ncpu: 184541.46469968132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 150894.64456404137,
            "unit": "ns/iter",
            "extra": "iterations: 4645\ncpu: 150882.4973089329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 151964.6650612935,
            "unit": "ns/iter",
            "extra": "iterations: 4568\ncpu: 151955.1882661986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 151685.60918544413,
            "unit": "ns/iter",
            "extra": "iterations: 4616\ncpu: 151678.42287695152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 262652.83202098997,
            "unit": "ns/iter",
            "extra": "iterations: 2667\ncpu: 262646.0442444719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1049386.8787425915,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1049255.5389221562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 882226.431818209,
            "unit": "ns/iter",
            "extra": "iterations: 792\ncpu: 882160.8585858523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 880812.9222083098,
            "unit": "ns/iter",
            "extra": "iterations: 797\ncpu: 880746.6750313757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 889849.1034047762,
            "unit": "ns/iter",
            "extra": "iterations: 793\ncpu: 889749.6847414763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 569484.3403395339,
            "unit": "ns/iter",
            "extra": "iterations: 1237\ncpu: 569481.6491511792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 870702.4764267995,
            "unit": "ns/iter",
            "extra": "iterations: 806\ncpu: 870592.8039702297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 39034.29324941491,
            "unit": "ns/iter",
            "extra": "iterations: 17954\ncpu: 39034.17065834959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 190685.5133514964,
            "unit": "ns/iter",
            "extra": "iterations: 3670\ncpu: 190670.89918256382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 154442.6335978848,
            "unit": "ns/iter",
            "extra": "iterations: 4536\ncpu: 154433.2671957657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 153464.48355984184,
            "unit": "ns/iter",
            "extra": "iterations: 4562\ncpu: 153452.56466462018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 154346.68876207084,
            "unit": "ns/iter",
            "extra": "iterations: 4556\ncpu: 154337.2475856036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 263715.6033898316,
            "unit": "ns/iter",
            "extra": "iterations: 2655\ncpu: 263690.9604519748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1049464.0507462083,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1049335.9701492542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 876782.7687500329,
            "unit": "ns/iter",
            "extra": "iterations: 800\ncpu: 876780.6250000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 880531.1835206165,
            "unit": "ns/iter",
            "extra": "iterations: 801\ncpu: 880526.5917603007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 879520.8880502979,
            "unit": "ns/iter",
            "extra": "iterations: 795\ncpu: 879501.50943396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 582462.6575342522,
            "unit": "ns/iter",
            "extra": "iterations: 1241\ncpu: 582411.7647058853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 869427.4968866662,
            "unit": "ns/iter",
            "extra": "iterations: 803\ncpu: 869368.8667496956 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702422452074,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14623.612273390838,
            "unit": "ns/iter",
            "extra": "iterations: 47990\ncpu: 14623.54448843509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 119091.9787234043,
            "unit": "ns/iter",
            "extra": "iterations: 7097\ncpu: 119090.17894885162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 224623.68512289543,
            "unit": "ns/iter",
            "extra": "iterations: 3865\ncpu: 224623.467011643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 327641.2098671676,
            "unit": "ns/iter",
            "extra": "iterations: 2635\ncpu: 327631.84060721064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 432003.7886467298,
            "unit": "ns/iter",
            "extra": "iterations: 1973\ncpu: 431984.2372022301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 536636.4694391807,
            "unit": "ns/iter",
            "extra": "iterations: 1587\ncpu: 536612.6654064272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 514782.5800000021,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514774.6 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 597221.2659999912,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 597179.5000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 681893.8328424282,
            "unit": "ns/iter",
            "extra": "iterations: 1358\ncpu: 681869.5876288663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11180.83388221025,
            "unit": "ns/iter",
            "extra": "iterations: 62552\ncpu: 11180.080572963294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9440.521148993983,
            "unit": "ns/iter",
            "extra": "iterations: 74117\ncpu: 9440.029952642442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9502.637733306397,
            "unit": "ns/iter",
            "extra": "iterations: 74205\ncpu: 9502.594164813694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9439.006159113,
            "unit": "ns/iter",
            "extra": "iterations: 74199\ncpu: 9438.830712004205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15542.139391129684,
            "unit": "ns/iter",
            "extra": "iterations: 45297\ncpu: 15541.506060003992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55015.11765102441,
            "unit": "ns/iter",
            "extra": "iterations: 14832\ncpu: 55012.27750809067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 243905.39225733012,
            "unit": "ns/iter",
            "extra": "iterations: 3513\ncpu: 243901.90720182136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 194739.2517657786,
            "unit": "ns/iter",
            "extra": "iterations: 4389\ncpu: 194735.95352016445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 193822.43442808793,
            "unit": "ns/iter",
            "extra": "iterations: 4415\ncpu: 193815.62853907095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 191047.40493827377,
            "unit": "ns/iter",
            "extra": "iterations: 4455\ncpu: 191045.0056116721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 497373.5346197602,
            "unit": "ns/iter",
            "extra": "iterations: 1762\ncpu: 497362.5425652664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3608903.6395348916,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3608833.7209302387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2924302.709779147,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2924219.2429022067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2929868.9463722403,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2929748.2649842175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2937353.6498421878,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2937320.189274454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1696200.1496350563,
            "unit": "ns/iter",
            "extra": "iterations: 548\ncpu: 1696110.03649635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2852058.8734568227,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2851967.9012345737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 10803820.82828276,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 10803656.565656578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6354359.931506792,
            "unit": "ns/iter",
            "extra": "iterations: 146\ncpu: 6354141.780821916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 13964458.545454782,
            "unit": "ns/iter",
            "extra": "iterations: 77\ncpu: 13964196.103896126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 52658.84180000171,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52655.59999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 275439.8934740848,
            "unit": "ns/iter",
            "extra": "iterations: 3126\ncpu: 275433.33333333256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 220429.1261004627,
            "unit": "ns/iter",
            "extra": "iterations: 3862\ncpu: 220419.54945624026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 220068.006158582,
            "unit": "ns/iter",
            "extra": "iterations: 3897\ncpu: 220064.28021555056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 218291.18100586947,
            "unit": "ns/iter",
            "extra": "iterations: 3917\ncpu: 218281.89941281654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 501539.6080691661,
            "unit": "ns/iter",
            "extra": "iterations: 1735\ncpu: 501527.4351585035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3672200.341269792,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3672037.6984126978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 2994269.0830671056,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2994163.578274749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 2971865.392971257,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2971770.926517553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2969313.0700637056,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2969139.4904458555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1719595.0646950381,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1719572.4584103483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2887759.3074534093,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2887633.8509316943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11042997.597938271,
            "unit": "ns/iter",
            "extra": "iterations: 97\ncpu: 11042609.278350562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6410542.938356277,
            "unit": "ns/iter",
            "extra": "iterations: 146\ncpu: 6410119.863013724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52492.69630007023,
            "unit": "ns/iter",
            "extra": "iterations: 15703\ncpu: 52489.91912373458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 242058.49279457697,
            "unit": "ns/iter",
            "extra": "iterations: 3539\ncpu: 242045.2105114434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 191847.05942622837,
            "unit": "ns/iter",
            "extra": "iterations: 4392\ncpu: 191837.77322404349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 188470.62963780997,
            "unit": "ns/iter",
            "extra": "iterations: 4528\ncpu: 188461.19699646585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 187085.84223194738,
            "unit": "ns/iter",
            "extra": "iterations: 4570\ncpu: 187079.4310722105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 474484.24113476375,
            "unit": "ns/iter",
            "extra": "iterations: 1833\ncpu: 474466.01200218213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3622836.2023345195,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3622580.9338521417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2939656.072100403,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2939526.959247647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2933568.352201176,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2933417.924528308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2937348.094637073,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2937167.8233438446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1681261.3822463576,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1681188.2246376781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2843539.1533743273,
            "unit": "ns/iter",
            "extra": "iterations: 326\ncpu: 2843365.9509202633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5621.185656820143,
            "unit": "ns/iter",
            "extra": "iterations: 124547\ncpu: 5620.862003902173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 32021.78943253975,
            "unit": "ns/iter",
            "extra": "iterations: 21746\ncpu: 32019.88871516585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 25089.21201121389,
            "unit": "ns/iter",
            "extra": "iterations: 27824\ncpu: 25087.69407705574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 25111.57439247644,
            "unit": "ns/iter",
            "extra": "iterations: 27859\ncpu: 25110.35930937924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20091.29160584988,
            "unit": "ns/iter",
            "extra": "iterations: 34941\ncpu: 20089.943046850283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 131404.7594224621,
            "unit": "ns/iter",
            "extra": "iterations: 5333\ncpu: 131397.80611288187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 242923.32755632515,
            "unit": "ns/iter",
            "extra": "iterations: 2885\ncpu: 242903.778162914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 61439.09036777869,
            "unit": "ns/iter",
            "extra": "iterations: 11420\ncpu: 61439.562171628306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 60861.72895651958,
            "unit": "ns/iter",
            "extra": "iterations: 11500\ncpu: 60860.39999999941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 60961.054006972714,
            "unit": "ns/iter",
            "extra": "iterations: 11480\ncpu: 60958.9895470387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 122081.41700263291,
            "unit": "ns/iter",
            "extra": "iterations: 5705\ncpu: 122073.77738825517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 114856.03137319192,
            "unit": "ns/iter",
            "extra": "iterations: 6088\ncpu: 114846.40275952556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 38385.61710180031,
            "unit": "ns/iter",
            "extra": "iterations: 18232\ncpu: 38383.9019306712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 185945.5205843357,
            "unit": "ns/iter",
            "extra": "iterations: 3765\ncpu: 185928.711819389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 152651.10642919323,
            "unit": "ns/iter",
            "extra": "iterations: 4604\ncpu: 152641.7680278037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 152102.44092093475,
            "unit": "ns/iter",
            "extra": "iterations: 4604\ncpu: 152097.32841007604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 152170.55700326353,
            "unit": "ns/iter",
            "extra": "iterations: 4605\ncpu: 152171.682953313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 262823.2061584784,
            "unit": "ns/iter",
            "extra": "iterations: 2663\ncpu: 262810.7397671809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1047071.2140718825,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1047035.6287425167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 876001.6495619502,
            "unit": "ns/iter",
            "extra": "iterations: 799\ncpu: 875952.8160200287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 871169.0889724861,
            "unit": "ns/iter",
            "extra": "iterations: 798\ncpu: 871098.3709273231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 878348.8594730394,
            "unit": "ns/iter",
            "extra": "iterations: 797\ncpu: 878355.457967382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 561598.2534081708,
            "unit": "ns/iter",
            "extra": "iterations: 1247\ncpu: 561575.3809141902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 866213.8909541665,
            "unit": "ns/iter",
            "extra": "iterations: 807\ncpu: 866181.6604708786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 39622.50019766285,
            "unit": "ns/iter",
            "extra": "iterations: 17707\ncpu: 39619.839611453164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 190536.20958082506,
            "unit": "ns/iter",
            "extra": "iterations: 3674\ncpu: 190528.85138813153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 156205.9991065494,
            "unit": "ns/iter",
            "extra": "iterations: 4477\ncpu: 156198.36944382446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 155359.97798532213,
            "unit": "ns/iter",
            "extra": "iterations: 4497\ncpu: 155347.27596175138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 155006.90504649197,
            "unit": "ns/iter",
            "extra": "iterations: 4518\ncpu: 154995.86100044203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 263912.71790987335,
            "unit": "ns/iter",
            "extra": "iterations: 2641\ncpu: 263889.85232866165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1040956.711309501,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1040915.9226190441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 872871.9427860362,
            "unit": "ns/iter",
            "extra": "iterations: 804\ncpu: 872814.800995027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 873793.0303797402,
            "unit": "ns/iter",
            "extra": "iterations: 790\ncpu: 873761.7721519051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 878224.2873275102,
            "unit": "ns/iter",
            "extra": "iterations: 797\ncpu: 878170.2634880779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 562850.3467094975,
            "unit": "ns/iter",
            "extra": "iterations: 1246\ncpu: 562804.9759229561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 865969.2416768976,
            "unit": "ns/iter",
            "extra": "iterations: 811\ncpu: 865975.7090012374 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702453355526,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14089.838946773223,
            "unit": "ns/iter",
            "extra": "iterations: 49524\ncpu: 14089.833212179954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 114173.73231847372,
            "unit": "ns/iter",
            "extra": "iterations: 7423\ncpu: 114172.62562306346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 216037.3412145394,
            "unit": "ns/iter",
            "extra": "iterations: 4018\ncpu: 216032.35440517665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 314523.25829990953,
            "unit": "ns/iter",
            "extra": "iterations: 2741\ncpu: 314519.91973732214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 414965.80316091346,
            "unit": "ns/iter",
            "extra": "iterations: 2088\ncpu: 414939.6551724136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 515557.36471285595,
            "unit": "ns/iter",
            "extra": "iterations: 1689\ncpu: 515532.0899940792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 622166.4445234501,
            "unit": "ns/iter",
            "extra": "iterations: 1406\ncpu: 622123.6130867711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 583932.7660000322,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 583931.8999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 658339.9289999647,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 658288.5999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11217.62118198122,
            "unit": "ns/iter",
            "extra": "iterations: 62336\ncpu: 11217.014245379854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9321.535628364056,
            "unit": "ns/iter",
            "extra": "iterations: 75235\ncpu: 9321.03010566889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9360.754854239705,
            "unit": "ns/iter",
            "extra": "iterations: 74780\ncpu: 9360.093607916537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9329.302301402098,
            "unit": "ns/iter",
            "extra": "iterations: 71174\ncpu: 9329.056959001899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15241.41105244883,
            "unit": "ns/iter",
            "extra": "iterations: 45836\ncpu: 15240.367833144248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 54403.44381686344,
            "unit": "ns/iter",
            "extra": "iterations: 15049\ncpu: 54402.91049239161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 242920.15356230582,
            "unit": "ns/iter",
            "extra": "iterations: 3523\ncpu: 242900.14192449622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 193696.00022738182,
            "unit": "ns/iter",
            "extra": "iterations: 4398\ncpu: 193683.83356070935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 191538.1297795853,
            "unit": "ns/iter",
            "extra": "iterations: 4446\ncpu: 191526.06837606785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 190522.62875584612,
            "unit": "ns/iter",
            "extra": "iterations: 4493\ncpu: 190510.97262408189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 480231.39880303724,
            "unit": "ns/iter",
            "extra": "iterations: 1838\ncpu: 480199.9455930353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3592905.170542723,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3592664.3410852756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2909840.77429464,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2909710.9717868324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2926077.924528329,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2925952.2012578654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2916587.150470176,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2916435.1097178627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1663344.3118279595,
            "unit": "ns/iter",
            "extra": "iterations: 558\ncpu: 1663198.0286738377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2836823.5596330864,
            "unit": "ns/iter",
            "extra": "iterations: 327\ncpu: 2836678.2874617637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 10618688.627451044,
            "unit": "ns/iter",
            "extra": "iterations: 102\ncpu: 10617821.56862742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6458986.2867135145,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6458640.559440553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 13769377.6923078,
            "unit": "ns/iter",
            "extra": "iterations: 78\ncpu: 13768716.66666669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 52361.60279999922,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52358.18000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 273001.8282539688,
            "unit": "ns/iter",
            "extra": "iterations: 3150\ncpu: 272986.4444444455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 220695.4929068841,
            "unit": "ns/iter",
            "extra": "iterations: 3877\ncpu: 220690.12122775344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 221112.67582134655,
            "unit": "ns/iter",
            "extra": "iterations: 3896\ncpu: 221110.13860369544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 217901.85209655782,
            "unit": "ns/iter",
            "extra": "iterations: 3935\ncpu: 217884.9301143588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 493657.6793721872,
            "unit": "ns/iter",
            "extra": "iterations: 1784\ncpu: 493642.65695067414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3655939.334745947,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3655770.3389830557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 2962711.0764330258,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2962532.1656051097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 2958825.5764330137,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2958679.2993630553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2971081.857594982,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2970916.4556961996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1693672.551912555,
            "unit": "ns/iter",
            "extra": "iterations: 549\ncpu: 1693605.4644808818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2864979.8307691733,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2864410.1538461526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 10921836.84693862,
            "unit": "ns/iter",
            "extra": "iterations: 98\ncpu: 10921256.122449027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6322949.068027244,
            "unit": "ns/iter",
            "extra": "iterations: 147\ncpu: 6322405.442176902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 51814.28756640431,
            "unit": "ns/iter",
            "extra": "iterations: 15812\ncpu: 51810.94738173511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 238502.10937935737,
            "unit": "ns/iter",
            "extra": "iterations: 3593\ncpu: 238487.0860005572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 189698.94424700513,
            "unit": "ns/iter",
            "extra": "iterations: 4502\ncpu: 189685.67303420728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 188318.57792063657,
            "unit": "ns/iter",
            "extra": "iterations: 4511\ncpu: 188307.58146752333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 189057.76720157708,
            "unit": "ns/iter",
            "extra": "iterations: 4549\ncpu: 189046.33985491245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 463677.7933795989,
            "unit": "ns/iter",
            "extra": "iterations: 1873\ncpu: 463648.9588894822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3615041.0813954906,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3614861.2403100873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2928841.0283912704,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2928705.9936908553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2936805.944649446,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 2936591.8819188178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2985756.1755485507,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2985544.514106584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1658780.2139037787,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1658690.0178253066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2839168.829268428,
            "unit": "ns/iter",
            "extra": "iterations: 328\ncpu: 2838981.0975609804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5641.193735909735,
            "unit": "ns/iter",
            "extra": "iterations: 124200\ncpu: 5640.948470209382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 31546.441894025353,
            "unit": "ns/iter",
            "extra": "iterations: 22175\ncpu: 31545.03720405846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 25036.757269279657,
            "unit": "ns/iter",
            "extra": "iterations: 27685\ncpu: 25035.929203539712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 26093.287126136845,
            "unit": "ns/iter",
            "extra": "iterations: 26915\ncpu: 26093.078209177107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 19790.272902439934,
            "unit": "ns/iter",
            "extra": "iterations: 35291\ncpu: 19790.105125952723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 125689.14480531924,
            "unit": "ns/iter",
            "extra": "iterations: 5573\ncpu: 125684.80172259151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 239232.26566244214,
            "unit": "ns/iter",
            "extra": "iterations: 2921\ncpu: 239221.4994864745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 60786.68335506461,
            "unit": "ns/iter",
            "extra": "iterations: 11505\ncpu: 60784.0243372449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 60276.117252066404,
            "unit": "ns/iter",
            "extra": "iterations: 11616\ncpu: 60273.880853993855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 60195.15535898278,
            "unit": "ns/iter",
            "extra": "iterations: 11644\ncpu: 60195.12195121972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 110373.29725465247,
            "unit": "ns/iter",
            "extra": "iterations: 6338\ncpu: 110370.10097822582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 113455.82181582939,
            "unit": "ns/iter",
            "extra": "iterations: 6179\ncpu: 113453.34196471858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 37551.9752967084,
            "unit": "ns/iter",
            "extra": "iterations: 18621\ncpu: 37550.93174373046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 184331.67829764858,
            "unit": "ns/iter",
            "extra": "iterations: 3783\ncpu: 184323.8963785362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 148865.9842049012,
            "unit": "ns/iter",
            "extra": "iterations: 4685\ncpu: 148861.40875133566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 148583.12794398778,
            "unit": "ns/iter",
            "extra": "iterations: 4713\ncpu: 148579.52471886162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 148881.32216331264,
            "unit": "ns/iter",
            "extra": "iterations: 4715\ncpu: 148876.0551431609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 258068.6948840619,
            "unit": "ns/iter",
            "extra": "iterations: 2717\ncpu: 258057.89473684144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1038378.9599406321,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1038364.9851631927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 868512.5087064261,
            "unit": "ns/iter",
            "extra": "iterations: 804\ncpu: 868494.900497512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 869412.5199004975,
            "unit": "ns/iter",
            "extra": "iterations: 804\ncpu: 869391.2935323407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 868973.0782828726,
            "unit": "ns/iter",
            "extra": "iterations: 792\ncpu: 868923.1060605976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 558402.8411811973,
            "unit": "ns/iter",
            "extra": "iterations: 1253\ncpu: 558385.0758180392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 858028.4828431422,
            "unit": "ns/iter",
            "extra": "iterations: 816\ncpu: 858019.8529411727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 38523.927694931095,
            "unit": "ns/iter",
            "extra": "iterations: 18173\ncpu: 38523.854069223176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 185769.5006640083,
            "unit": "ns/iter",
            "extra": "iterations: 3765\ncpu: 185766.71978751628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 152097.38680269403,
            "unit": "ns/iter",
            "extra": "iterations: 4607\ncpu: 152094.20447145708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 150895.27492447407,
            "unit": "ns/iter",
            "extra": "iterations: 4634\ncpu: 150883.6210617161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 151519.78767568615,
            "unit": "ns/iter",
            "extra": "iterations: 4625\ncpu: 151515.54594594496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 258414.2826647099,
            "unit": "ns/iter",
            "extra": "iterations: 2717\ncpu: 258405.3367684955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1034316.0620384327,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1034279.7636632149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 865309.9061727915,
            "unit": "ns/iter",
            "extra": "iterations: 810\ncpu: 865281.3580246848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 871038.0722291493,
            "unit": "ns/iter",
            "extra": "iterations: 803\ncpu: 871037.982565381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 865577.8022249251,
            "unit": "ns/iter",
            "extra": "iterations: 809\ncpu: 865568.6032138385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 558071.0261697216,
            "unit": "ns/iter",
            "extra": "iterations: 1261\ncpu: 558057.0975416343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 858332.0784314104,
            "unit": "ns/iter",
            "extra": "iterations: 816\ncpu: 858291.9117646944 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}