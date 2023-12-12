window.BENCHMARK_DATA = {
  "lastUpdate": 1702397897580,
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
      }
    ]
  }
}