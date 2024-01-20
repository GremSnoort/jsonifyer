window.BENCHMARK_DATA = {
  "lastUpdate": 1705771611577,
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
          "id": "c1055272ad64f2314a237d4e8aa66cfea2a56aac",
          "message": "rm rdn",
          "timestamp": "2023-12-12T18:46:40+03:00",
          "tree_id": "a8ce2d06ccc561ccf79fea995e3abe4f5e35f6c2",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c1055272ad64f2314a237d4e8aa66cfea2a56aac"
        },
        "date": 1702397886639,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1822.504362490872,
            "unit": "ns/iter",
            "extra": "iterations: 386018\ncpu: 1822.415535026864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 27272.23114809769,
            "unit": "ns/iter",
            "extra": "iterations: 29440\ncpu: 27270.580842391308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 57002.16768999782,
            "unit": "ns/iter",
            "extra": "iterations: 14658\ncpu: 56998.096602537866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 70643.02202893955,
            "unit": "ns/iter",
            "extra": "iterations: 12302\ncpu: 70641.03397821495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 98288.77842088186,
            "unit": "ns/iter",
            "extra": "iterations: 9157\ncpu: 98283.41159768483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 121607.97715988154,
            "unit": "ns/iter",
            "extra": "iterations: 7049\ncpu: 121604.39778692003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 147574.8344414901,
            "unit": "ns/iter",
            "extra": "iterations: 6016\ncpu: 147566.30651595737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 172797.42056444043,
            "unit": "ns/iter",
            "extra": "iterations: 5067\ncpu: 172793.62541938026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 198199.76212052556,
            "unit": "ns/iter",
            "extra": "iterations: 4414\ncpu: 198184.3679202541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1521.3379058288601,
            "unit": "ns/iter",
            "extra": "iterations: 461309\ncpu: 1521.227420232426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1251.539781378874,
            "unit": "ns/iter",
            "extra": "iterations: 558226\ncpu: 1251.4180636516396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1256.6903357025894,
            "unit": "ns/iter",
            "extra": "iterations: 556564\ncpu: 1256.6425424569306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1238.883593183011,
            "unit": "ns/iter",
            "extra": "iterations: 559426\ncpu: 1238.878958074883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2378.0638695712732,
            "unit": "ns/iter",
            "extra": "iterations: 295211\ncpu: 2377.914440857557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 8485.37901654027,
            "unit": "ns/iter",
            "extra": "iterations: 93893\ncpu: 8484.659133268711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 48580.72029411761,
            "unit": "ns/iter",
            "extra": "iterations: 17000\ncpu: 48578.85882352938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 37602.24863375395,
            "unit": "ns/iter",
            "extra": "iterations: 21775\ncpu: 37601.73134328351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 40735.87702106722,
            "unit": "ns/iter",
            "extra": "iterations: 20410\ncpu: 40733.37089661924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 40490.99745621676,
            "unit": "ns/iter",
            "extra": "iterations: 20442\ncpu: 40488.53341160359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 91840.50537856726,
            "unit": "ns/iter",
            "extra": "iterations: 9668\ncpu: 91838.3947041789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 879672.4158325585,
            "unit": "ns/iter",
            "extra": "iterations: 1099\ncpu: 879616.8334849871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 719273.2608695567,
            "unit": "ns/iter",
            "extra": "iterations: 1334\ncpu: 719253.1484257897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 716485.0863914283,
            "unit": "ns/iter",
            "extra": "iterations: 1308\ncpu: 716450.3822629983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 713849.5388093366,
            "unit": "ns/iter",
            "extra": "iterations: 1327\ncpu: 713829.7663903541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 506399.5061011058,
            "unit": "ns/iter",
            "extra": "iterations: 1721\ncpu: 506382.16153399117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 702417.4025973979,
            "unit": "ns/iter",
            "extra": "iterations: 1309\ncpu: 702385.9434682969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3824910.915322526,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3824757.2580645117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1674166.3592920383,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1674015.9292035403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 5036636.443850254,
            "unit": "ns/iter",
            "extra": "iterations: 187\ncpu: 5036418.716577541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 13086.050354958668,
            "unit": "ns/iter",
            "extra": "iterations: 65078\ncpu: 13085.156274009649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 58304.711100001325,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58302.63999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 53630.32489262139,
            "unit": "ns/iter",
            "extra": "iterations: 15599\ncpu: 53627.15558689635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 53784.62132281687,
            "unit": "ns/iter",
            "extra": "iterations: 15467\ncpu: 53781.476692312586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 54456.43639312471,
            "unit": "ns/iter",
            "extra": "iterations: 15415\ncpu: 54453.84365877417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 101435.6831019062,
            "unit": "ns/iter",
            "extra": "iterations: 8498\ncpu: 101427.61826312095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 901442.2955195482,
            "unit": "ns/iter",
            "extra": "iterations: 1049\ncpu: 901404.9571020002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 733831.1332813769,
            "unit": "ns/iter",
            "extra": "iterations: 1283\ncpu: 733813.1722525308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 728983.7291828777,
            "unit": "ns/iter",
            "extra": "iterations: 1285\ncpu: 728944.1245136191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 727507.4634146371,
            "unit": "ns/iter",
            "extra": "iterations: 1312\ncpu: 727496.1128048789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 520248.56253704574,
            "unit": "ns/iter",
            "extra": "iterations: 1687\ncpu: 520235.862477769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 716115.2048192697,
            "unit": "ns/iter",
            "extra": "iterations: 1328\ncpu: 716076.7319277092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 4008961.7016807017,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 4008864.285714271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1765258.1887850552,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1765160.186915896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 9102.576252245692,
            "unit": "ns/iter",
            "extra": "iterations: 91276\ncpu: 9102.304001051718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 51612.472875896456,
            "unit": "ns/iter",
            "extra": "iterations: 16148\ncpu: 51610.992073321846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 38658.5204024318,
            "unit": "ns/iter",
            "extra": "iterations: 21370\ncpu: 38657.313991576884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 38362.14095159519,
            "unit": "ns/iter",
            "extra": "iterations: 21816\ncpu: 38362.014118078594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 40838.88733783819,
            "unit": "ns/iter",
            "extra": "iterations: 20273\ncpu: 40835.36230454314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 88253.18498740731,
            "unit": "ns/iter",
            "extra": "iterations: 9925\ncpu: 88248.69521410584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 890218.4433961922,
            "unit": "ns/iter",
            "extra": "iterations: 1060\ncpu: 890158.7735849014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 722720.2303075676,
            "unit": "ns/iter",
            "extra": "iterations: 1333\ncpu: 722691.6729182322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 716598.7740458208,
            "unit": "ns/iter",
            "extra": "iterations: 1310\ncpu: 716535.5725190864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 710405.2636295964,
            "unit": "ns/iter",
            "extra": "iterations: 1339\ncpu: 710387.378640773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 507846.1871720237,
            "unit": "ns/iter",
            "extra": "iterations: 1715\ncpu: 507808.3965014565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 705653.4073795426,
            "unit": "ns/iter",
            "extra": "iterations: 1328\ncpu: 705616.7168674683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 678.1401706359575,
            "unit": "ns/iter",
            "extra": "iterations: 1039640\ncpu: 678.099823015655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4978.1812486206045,
            "unit": "ns/iter",
            "extra": "iterations: 140459\ncpu: 4977.924518898718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3919.1501343669975,
            "unit": "ns/iter",
            "extra": "iterations: 176755\ncpu: 3919.1400526151892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3893.9903974363265,
            "unit": "ns/iter",
            "extra": "iterations: 178494\ncpu: 3893.9286474615633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2828.8951186459344,
            "unit": "ns/iter",
            "extra": "iterations: 248681\ncpu: 2828.8896216437674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 23711.662451130967,
            "unit": "ns/iter",
            "extra": "iterations: 29415\ncpu: 23711.392146863935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 48790.33837897373,
            "unit": "ns/iter",
            "extra": "iterations: 14534\ncpu: 48790.216045135974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 11670.91732411415,
            "unit": "ns/iter",
            "extra": "iterations: 58433\ncpu: 11670.579980490373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 11626.549206139794,
            "unit": "ns/iter",
            "extra": "iterations: 60653\ncpu: 11626.514764315125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 11579.105843331095,
            "unit": "ns/iter",
            "extra": "iterations: 60599\ncpu: 11578.760375583954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 23448.549606089367,
            "unit": "ns/iter",
            "extra": "iterations: 29956\ncpu: 23447.90359193448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 22558.016824257604,
            "unit": "ns/iter",
            "extra": "iterations: 30670\ncpu: 22557.486142810507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 6943.268033827761,
            "unit": "ns/iter",
            "extra": "iterations: 101573\ncpu: 6942.860799621984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 35085.088474913246,
            "unit": "ns/iter",
            "extra": "iterations: 20130\ncpu: 35084.33681073054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 27913.854562775152,
            "unit": "ns/iter",
            "extra": "iterations: 25193\ncpu: 27912.38439249024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 27210.838512699152,
            "unit": "ns/iter",
            "extra": "iterations: 25711\ncpu: 27209.980164131983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 28720.04587231288,
            "unit": "ns/iter",
            "extra": "iterations: 24372\ncpu: 28718.41867717068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 60745.64709932918,
            "unit": "ns/iter",
            "extra": "iterations: 11618\ncpu: 60744.74952659757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 228056.49657423233,
            "unit": "ns/iter",
            "extra": "iterations: 3065\ncpu: 228043.23001631463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 194201.34518477137,
            "unit": "ns/iter",
            "extra": "iterations: 3572\ncpu: 194200.67189249714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 194874.9494475121,
            "unit": "ns/iter",
            "extra": "iterations: 3620\ncpu: 194866.4917127074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 192545.16067948387,
            "unit": "ns/iter",
            "extra": "iterations: 3591\ncpu: 192545.08493455974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 113159.5661358465,
            "unit": "ns/iter",
            "extra": "iterations: 6154\ncpu: 113155.29736756698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 195231.814313347,
            "unit": "ns/iter",
            "extra": "iterations: 3619\ncpu: 195226.05692180505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 6744.98758507134,
            "unit": "ns/iter",
            "extra": "iterations: 104471\ncpu: 6744.813393190414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 34186.05104590431,
            "unit": "ns/iter",
            "extra": "iterations: 20413\ncpu: 34183.95630235646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 27673.79478476151,
            "unit": "ns/iter",
            "extra": "iterations: 25042\ncpu: 27673.049277214217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 28912.944548286392,
            "unit": "ns/iter",
            "extra": "iterations: 24075\ncpu: 28911.871235721814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 29759.868640109442,
            "unit": "ns/iter",
            "extra": "iterations: 23546\ncpu: 29759.10982757181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 61707.02859147614,
            "unit": "ns/iter",
            "extra": "iterations: 11402\ncpu: 61704.06946149839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 225036.44003900414,
            "unit": "ns/iter",
            "extra": "iterations: 3077\ncpu: 225032.72668183333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 189491.53873431231,
            "unit": "ns/iter",
            "extra": "iterations: 3666\ncpu: 189483.19694489875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 190230.59913908358,
            "unit": "ns/iter",
            "extra": "iterations: 3717\ncpu: 190229.9973096578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 193995.93905817345,
            "unit": "ns/iter",
            "extra": "iterations: 3610\ncpu: 193987.2853185617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 113120.03698854383,
            "unit": "ns/iter",
            "extra": "iterations: 6110\ncpu: 113119.65630114601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 191477.37441283205,
            "unit": "ns/iter",
            "extra": "iterations: 3619\ncpu: 191471.40093948366 ns\nthreads: 1"
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
        "date": 1702409078899,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1782.6565327330493,
            "unit": "ns/iter",
            "extra": "iterations: 410502\ncpu: 1782.5647621692465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 26543.62415248778,
            "unit": "ns/iter",
            "extra": "iterations: 31268\ncpu: 26543.427785595504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 53867.49430273125,
            "unit": "ns/iter",
            "extra": "iterations: 15446\ncpu: 53866.19189434159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 66834.21988322098,
            "unit": "ns/iter",
            "extra": "iterations: 13016\ncpu: 66834.2655193608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 93709.6983274198,
            "unit": "ns/iter",
            "extra": "iterations: 9865\ncpu: 93707.44044602127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 118489.6527179739,
            "unit": "ns/iter",
            "extra": "iterations: 7432\ncpu: 118489.78740581272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 142068.1051244087,
            "unit": "ns/iter",
            "extra": "iterations: 6069\ncpu: 142064.50815620372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 165226.20821970643,
            "unit": "ns/iter",
            "extra": "iterations: 5134\ncpu: 165221.77639267623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 184083.79536268738,
            "unit": "ns/iter",
            "extra": "iterations: 4701\ncpu: 184081.17421825154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1488.1099368067953,
            "unit": "ns/iter",
            "extra": "iterations: 465240\ncpu: 1488.1110824520686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1254.9057469006946,
            "unit": "ns/iter",
            "extra": "iterations: 560215\ncpu: 1254.8584025775822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1234.1595060439959,
            "unit": "ns/iter",
            "extra": "iterations: 567176\ncpu: 1234.119567823745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1216.0416986548316,
            "unit": "ns/iter",
            "extra": "iterations: 574431\ncpu: 1216.0336054286759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2284.8360077818093,
            "unit": "ns/iter",
            "extra": "iterations: 306356\ncpu: 2284.821580122468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 9050.088968049979,
            "unit": "ns/iter",
            "extra": "iterations: 90673\ncpu: 9050.105323525187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 51253.32970680379,
            "unit": "ns/iter",
            "extra": "iterations: 16269\ncpu: 51252.56008359463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 38484.07312665203,
            "unit": "ns/iter",
            "extra": "iterations: 21579\ncpu: 38483.70174706877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 37915.51376613927,
            "unit": "ns/iter",
            "extra": "iterations: 21611\ncpu: 37915.13118319383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 39071.950156948,
            "unit": "ns/iter",
            "extra": "iterations: 21026\ncpu: 39070.717207267204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 89538.74994882283,
            "unit": "ns/iter",
            "extra": "iterations: 9770\ncpu: 89537.19549641763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 854050.6064814803,
            "unit": "ns/iter",
            "extra": "iterations: 1080\ncpu: 854033.8888888893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 687448.3181478691,
            "unit": "ns/iter",
            "extra": "iterations: 1339\ncpu: 687449.0664675115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 679277.3379970473,
            "unit": "ns/iter",
            "extra": "iterations: 1358\ncpu: 679258.3946980832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 677009.3153618966,
            "unit": "ns/iter",
            "extra": "iterations: 1354\ncpu: 676997.2673559805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 487173.4063901307,
            "unit": "ns/iter",
            "extra": "iterations: 1784\ncpu: 487152.29820627824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 672277.1264620065,
            "unit": "ns/iter",
            "extra": "iterations: 1368\ncpu: 672248.7573099419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3721182.175298732,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3721063.3466135487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1648890.9413854242,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1648807.1047957372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4867366.685863882,
            "unit": "ns/iter",
            "extra": "iterations: 191\ncpu: 4867275.91623036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 12609.897649997503,
            "unit": "ns/iter",
            "extra": "iterations: 66468\ncpu: 12609.5775410724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 56493.83200000103,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56492.390000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 52652.53854925653,
            "unit": "ns/iter",
            "extra": "iterations: 15785\ncpu: 52651.523598352855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 53237.43577423261,
            "unit": "ns/iter",
            "extra": "iterations: 15609\ncpu: 53237.46556473805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 52958.515230191966,
            "unit": "ns/iter",
            "extra": "iterations: 15791\ncpu: 52957.74175163083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 100952.95563770998,
            "unit": "ns/iter",
            "extra": "iterations: 8656\ncpu: 100951.7675600737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 883693.1695401997,
            "unit": "ns/iter",
            "extra": "iterations: 1044\ncpu: 883673.2758620705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 709828.7328767513,
            "unit": "ns/iter",
            "extra": "iterations: 1314\ncpu: 709820.0152206966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 705942.0313216201,
            "unit": "ns/iter",
            "extra": "iterations: 1309\ncpu: 705901.7570664613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 707224.6150341743,
            "unit": "ns/iter",
            "extra": "iterations: 1317\ncpu: 707204.6317388035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 505228.60947427514,
            "unit": "ns/iter",
            "extra": "iterations: 1731\ncpu: 505225.64991334756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 697283.0554307054,
            "unit": "ns/iter",
            "extra": "iterations: 1335\ncpu: 697267.6404494421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 4010480.9033612357,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 4010358.403361325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1703868.1974405267,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1703804.7531992737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 8989.879219176997,
            "unit": "ns/iter",
            "extra": "iterations: 93235\ncpu: 8989.881482275921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 50825.2925790746,
            "unit": "ns/iter",
            "extra": "iterations: 16440\ncpu: 50823.85644768863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 39771.70839491007,
            "unit": "ns/iter",
            "extra": "iterations: 20977\ncpu: 39770.41521666575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 37146.08197231849,
            "unit": "ns/iter",
            "extra": "iterations: 22471\ncpu: 37144.69761025302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 36737.81750449221,
            "unit": "ns/iter",
            "extra": "iterations: 22817\ncpu: 36735.83731428343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 86233.63478348365,
            "unit": "ns/iter",
            "extra": "iterations: 9953\ncpu: 86230.3827991556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 874955.4340149082,
            "unit": "ns/iter",
            "extra": "iterations: 1076\ncpu: 874909.6654275082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 705902.031602692,
            "unit": "ns/iter",
            "extra": "iterations: 1329\ncpu: 705886.0045146717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 699657.4230769136,
            "unit": "ns/iter",
            "extra": "iterations: 1352\ncpu: 699626.5532544388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 698115.1696165289,
            "unit": "ns/iter",
            "extra": "iterations: 1356\ncpu: 698093.1415929205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 497777.2628313616,
            "unit": "ns/iter",
            "extra": "iterations: 1773\ncpu: 497751.94585448556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 685376.4234104168,
            "unit": "ns/iter",
            "extra": "iterations: 1384\ncpu: 685357.0086705226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 707.0114560010412,
            "unit": "ns/iter",
            "extra": "iterations: 996421\ncpu: 706.9696443571526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4690.06527676891,
            "unit": "ns/iter",
            "extra": "iterations: 148644\ncpu: 4689.99690535779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3518.6987562083546,
            "unit": "ns/iter",
            "extra": "iterations: 209601\ncpu: 3518.571953378097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3169.151187378481,
            "unit": "ns/iter",
            "extra": "iterations: 213285\ncpu: 3169.0615842652073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2792.0209020682314,
            "unit": "ns/iter",
            "extra": "iterations: 250358\ncpu: 2791.9407408590773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 22959.01660009327,
            "unit": "ns/iter",
            "extra": "iterations: 30542\ncpu: 22958.732237574302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 46641.2037419267,
            "unit": "ns/iter",
            "extra": "iterations: 15019\ncpu: 46640.282309075614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 11105.321058888605,
            "unit": "ns/iter",
            "extra": "iterations: 63085\ncpu: 11105.337243401831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 10981.207538287666,
            "unit": "ns/iter",
            "extra": "iterations: 63728\ncpu: 10979.86128546316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 11136.275474874239,
            "unit": "ns/iter",
            "extra": "iterations: 62964\ncpu: 11135.95070198853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 22325.895361828523,
            "unit": "ns/iter",
            "extra": "iterations: 31327\ncpu: 22325.409391259716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 21864.84195769261,
            "unit": "ns/iter",
            "extra": "iterations: 32099\ncpu: 21864.547182155497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 6368.10475135511,
            "unit": "ns/iter",
            "extra": "iterations: 110137\ncpu: 6367.85094927225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 31334.920338148495,
            "unit": "ns/iter",
            "extra": "iterations: 22357\ncpu: 31334.454533255728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 25247.943005556514,
            "unit": "ns/iter",
            "extra": "iterations: 27722\ncpu: 25247.593968689293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 25167.353702371987,
            "unit": "ns/iter",
            "extra": "iterations: 27820\ncpu: 25167.18547807331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 26290.614242092368,
            "unit": "ns/iter",
            "extra": "iterations: 26527\ncpu: 26289.614355184996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 56373.267141938784,
            "unit": "ns/iter",
            "extra": "iterations: 12484\ncpu: 56372.06023710346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 214109.16004849604,
            "unit": "ns/iter",
            "extra": "iterations: 3299\ncpu: 214105.94119430394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 179490.85132016477,
            "unit": "ns/iter",
            "extra": "iterations: 3901\ncpu: 179485.02947962208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 178674.71604304976,
            "unit": "ns/iter",
            "extra": "iterations: 3902\ncpu: 178674.80779087718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 179737.30271934796,
            "unit": "ns/iter",
            "extra": "iterations: 3898\ncpu: 179730.5284761418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 108278.65611421548,
            "unit": "ns/iter",
            "extra": "iterations: 6444\ncpu: 108276.101800123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 180824.16283871885,
            "unit": "ns/iter",
            "extra": "iterations: 3875\ncpu: 180817.49677419118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 6269.903809720466,
            "unit": "ns/iter",
            "extra": "iterations: 111373\ncpu: 6269.765562569014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 31691.18469240393,
            "unit": "ns/iter",
            "extra": "iterations: 22172\ncpu: 31690.93902219023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 26711.249674902647,
            "unit": "ns/iter",
            "extra": "iterations: 26146\ncpu: 26710.77028991042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 26210.097376876904,
            "unit": "ns/iter",
            "extra": "iterations: 26762\ncpu: 26209.928256483458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 27075.01653242971,
            "unit": "ns/iter",
            "extra": "iterations: 25949\ncpu: 27074.592469844272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 56998.63002528004,
            "unit": "ns/iter",
            "extra": "iterations: 12263\ncpu: 56998.662643724994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 209700.9030810634,
            "unit": "ns/iter",
            "extra": "iterations: 3343\ncpu: 209693.56865091296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 179563.05161291192,
            "unit": "ns/iter",
            "extra": "iterations: 3875\ncpu: 179560.3354838704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 179200.6797335455,
            "unit": "ns/iter",
            "extra": "iterations: 3903\ncpu: 179196.003074556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 181753.04492338662,
            "unit": "ns/iter",
            "extra": "iterations: 3851\ncpu: 181753.2329265109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 106429.84564885465,
            "unit": "ns/iter",
            "extra": "iterations: 6550\ncpu: 106425.16030534335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 187765.73552868803,
            "unit": "ns/iter",
            "extra": "iterations: 3887\ncpu: 187762.07872395334 ns\nthreads: 1"
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
        "date": 1702412526725,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1606.668944164433,
            "unit": "ns/iter",
            "extra": "iterations: 438932\ncpu: 1606.5698103578686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 19739.721942807442,
            "unit": "ns/iter",
            "extra": "iterations: 41754\ncpu: 19738.671744024534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 41286.54578499262,
            "unit": "ns/iter",
            "extra": "iterations: 20083\ncpu: 41284.285216352124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50454.444200002516,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50453.640000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 68521.51619604569,
            "unit": "ns/iter",
            "extra": "iterations: 12997\ncpu: 68520.11233361544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 85991.88799765184,
            "unit": "ns/iter",
            "extra": "iterations: 10223\ncpu: 85990.5898464248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 101904.47940516906,
            "unit": "ns/iter",
            "extra": "iterations: 8473\ncpu: 101901.39265903464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 126225.1159459861,
            "unit": "ns/iter",
            "extra": "iterations: 7331\ncpu: 126221.9615332151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 138083.5285645724,
            "unit": "ns/iter",
            "extra": "iterations: 6249\ncpu: 138078.09249479903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1405.9717175451754,
            "unit": "ns/iter",
            "extra": "iterations: 492284\ncpu: 1405.8224520805045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1208.042986300167,
            "unit": "ns/iter",
            "extra": "iterations: 578254\ncpu: 1208.040930110298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1224.376129008737,
            "unit": "ns/iter",
            "extra": "iterations: 575837\ncpu: 1224.2667629902212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1178.09981922558,
            "unit": "ns/iter",
            "extra": "iterations: 592451\ncpu: 1178.0094893923722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2208.4822587099475,
            "unit": "ns/iter",
            "extra": "iterations: 317367\ncpu: 2208.2229721426615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6886.76702277086,
            "unit": "ns/iter",
            "extra": "iterations: 117475\ncpu: 6886.479676526914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 38984.52697582077,
            "unit": "ns/iter",
            "extra": "iterations: 22168\ncpu: 38980.259833994955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 29145.05362395894,
            "unit": "ns/iter",
            "extra": "iterations: 28215\ncpu: 29143.25004430271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 28762.573301632652,
            "unit": "ns/iter",
            "extra": "iterations: 28601\ncpu: 28759.539876228126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 27973.27630456379,
            "unit": "ns/iter",
            "extra": "iterations: 29301\ncpu: 27972.007781304394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 69302.16623294727,
            "unit": "ns/iter",
            "extra": "iterations: 12681\ncpu: 69294.65341850024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 657448.0710000045,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 657393.7000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 534986.2019999989,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 534918.4000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 533831.2639999571,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 533763.3000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 526452.2240000247,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 526398.1999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 385641.9270879401,
            "unit": "ns/iter",
            "extra": "iterations: 2263\ncpu: 385599.7348652243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 529887.9929999885,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 529872.1000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2785093.095808352,
            "unit": "ns/iter",
            "extra": "iterations: 334\ncpu: 2784698.2035928178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1257548.7420689694,
            "unit": "ns/iter",
            "extra": "iterations: 725\ncpu: 1257466.2068965528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3788556.9588478175,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3788148.1481481474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10175.402246807833,
            "unit": "ns/iter",
            "extra": "iterations: 82161\ncpu: 10174.811650296402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 53580.26711886253,
            "unit": "ns/iter",
            "extra": "iterations: 15480\ncpu: 53573.45607235147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 42089.630696168104,
            "unit": "ns/iter",
            "extra": "iterations: 19794\ncpu: 42089.52207739724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 42712.151385076926,
            "unit": "ns/iter",
            "extra": "iterations: 20035\ncpu: 42709.298727227266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 40899.93128804572,
            "unit": "ns/iter",
            "extra": "iterations: 20535\ncpu: 40895.4614073534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 80251.64838709692,
            "unit": "ns/iter",
            "extra": "iterations: 10850\ncpu: 80247.14285714252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 700734.7460197327,
            "unit": "ns/iter",
            "extra": "iterations: 1319\ncpu: 700646.4746019716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 562491.9840000188,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 562478.0000000058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 560568.6040000251,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 560498.0000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 554766.2550000041,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 554717.7999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 402821.9921982402,
            "unit": "ns/iter",
            "extra": "iterations: 2179\ncpu: 402798.85268471605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 542670.1029999775,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 542669.6000000036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2914127.02531661,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2913973.417721533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1279084.859097096,
            "unit": "ns/iter",
            "extra": "iterations: 731\ncpu: 1278963.474692198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7197.214556636623,
            "unit": "ns/iter",
            "extra": "iterations: 112842\ncpu: 7196.854008259292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 37824.41877106479,
            "unit": "ns/iter",
            "extra": "iterations: 21661\ncpu: 37822.155025160544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 30112.892960392554,
            "unit": "ns/iter",
            "extra": "iterations: 27672\ncpu: 30110.978606533856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 29715.49207378708,
            "unit": "ns/iter",
            "extra": "iterations: 27756\ncpu: 29711.536244415685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 29036.270210334922,
            "unit": "ns/iter",
            "extra": "iterations: 28859\ncpu: 29034.945770816663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 67058.76718835345,
            "unit": "ns/iter",
            "extra": "iterations: 12843\ncpu: 67052.3709413684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 663012.1389999886,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 662957.2000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 534143.8410000023,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 534117.2999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 533386.5139999717,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 533294.3999999955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 534045.3660000435,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 534024.7999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 387882.52252651716,
            "unit": "ns/iter",
            "extra": "iterations: 2264\ncpu: 387881.3162544188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 523737.4699999577,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 523672.3000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 739.802252165746,
            "unit": "ns/iter",
            "extra": "iterations: 952683\ncpu: 739.7423907007903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4089.0045999988556,
            "unit": "ns/iter",
            "extra": "iterations: 171087\ncpu: 4088.5274743259292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3101.31170728036,
            "unit": "ns/iter",
            "extra": "iterations: 225253\ncpu: 3101.142715080375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2943.255151889067,
            "unit": "ns/iter",
            "extra": "iterations: 226810\ncpu: 2942.86583483975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2459.01250368598,
            "unit": "ns/iter",
            "extra": "iterations: 284876\ncpu: 2458.8449009393726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 19313.843279466208,
            "unit": "ns/iter",
            "extra": "iterations: 36262\ncpu: 19311.717500413728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 38162.844624123645,
            "unit": "ns/iter",
            "extra": "iterations: 18304\ncpu: 38160.587849650445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 9207.25113380908,
            "unit": "ns/iter",
            "extra": "iterations: 76071\ncpu: 9206.27965979157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 9120.755175881684,
            "unit": "ns/iter",
            "extra": "iterations: 76557\ncpu: 9119.917185887667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 9067.997007772,
            "unit": "ns/iter",
            "extra": "iterations: 77200\ncpu: 9067.769430051878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 18023.314328273987,
            "unit": "ns/iter",
            "extra": "iterations: 38937\ncpu: 18022.089529239405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 17305.739855558008,
            "unit": "ns/iter",
            "extra": "iterations: 40293\ncpu: 17305.708187526365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5814.081723971499,
            "unit": "ns/iter",
            "extra": "iterations: 120234\ncpu: 5813.527787481074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 29798.989581561727,
            "unit": "ns/iter",
            "extra": "iterations: 23516\ncpu: 29796.049498214037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 23825.31262756814,
            "unit": "ns/iter",
            "extra": "iterations: 29396\ncpu: 23821.710436793866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 22823.53735082681,
            "unit": "ns/iter",
            "extra": "iterations: 30334\ncpu: 22822.196215467444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 24219.091296956285,
            "unit": "ns/iter",
            "extra": "iterations: 28829\ncpu: 24215.515626625842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 55134.433700784284,
            "unit": "ns/iter",
            "extra": "iterations: 12700\ncpu: 55129.803149606094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 189454.97939262155,
            "unit": "ns/iter",
            "extra": "iterations: 3688\ncpu: 189439.80477223557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 158811.90106648544,
            "unit": "ns/iter",
            "extra": "iterations: 4407\ncpu: 158805.6274109375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 158554.06521739345,
            "unit": "ns/iter",
            "extra": "iterations: 4416\ncpu: 158553.84963768156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 158800.7930878752,
            "unit": "ns/iter",
            "extra": "iterations: 4427\ncpu: 158787.30517280404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 100079.32010885079,
            "unit": "ns/iter",
            "extra": "iterations: 6982\ncpu: 100069.73646519803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 157922.05734929524,
            "unit": "ns/iter",
            "extra": "iterations: 4429\ncpu: 157900.4289907437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5888.113553798849,
            "unit": "ns/iter",
            "extra": "iterations: 117539\ncpu: 5887.656012047128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 31681.566307931676,
            "unit": "ns/iter",
            "extra": "iterations: 23044\ncpu: 31677.825030376644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 25375.180268896285,
            "unit": "ns/iter",
            "extra": "iterations: 27520\ncpu: 25374.146075581317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 23962.570258785563,
            "unit": "ns/iter",
            "extra": "iterations: 28943\ncpu: 23961.617662301698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 25009.30986267363,
            "unit": "ns/iter",
            "extra": "iterations: 28035\ncpu: 25008.446584626094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 52037.16244534937,
            "unit": "ns/iter",
            "extra": "iterations: 13266\ncpu: 52035.73797678282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 178724.97052845574,
            "unit": "ns/iter",
            "extra": "iterations: 3936\ncpu: 178715.26930894237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 150567.67964136988,
            "unit": "ns/iter",
            "extra": "iterations: 4573\ncpu: 150557.88322763838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 149497.0021308336,
            "unit": "ns/iter",
            "extra": "iterations: 4693\ncpu: 149446.47347112946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 150790.4440846343,
            "unit": "ns/iter",
            "extra": "iterations: 4632\ncpu: 150785.83765112064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 94909.52762656985,
            "unit": "ns/iter",
            "extra": "iterations: 7348\ncpu: 94905.19869352209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 150796.79517033146,
            "unit": "ns/iter",
            "extra": "iterations: 4638\ncpu: 150782.72962483825 ns\nthreads: 1"
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
        "date": 1702418351515,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1608.5048357845865,
            "unit": "ns/iter",
            "extra": "iterations: 437261\ncpu: 1608.4306626934485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 19317.978704525958,
            "unit": "ns/iter",
            "extra": "iterations: 42826\ncpu: 19317.78592443843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 40273.43357798895,
            "unit": "ns/iter",
            "extra": "iterations: 20573\ncpu: 40270.76265007533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 59810.67842441376,
            "unit": "ns/iter",
            "extra": "iterations: 14090\ncpu: 59808.2540809084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 66081.39084268153,
            "unit": "ns/iter",
            "extra": "iterations: 13279\ncpu: 66078.00286166127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 83225.43066806233,
            "unit": "ns/iter",
            "extra": "iterations: 10493\ncpu: 83221.86219384352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 98924.83158614222,
            "unit": "ns/iter",
            "extra": "iterations: 8776\ncpu: 98919.83819507746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 114482.62701347242,
            "unit": "ns/iter",
            "extra": "iterations: 7574\ncpu: 114474.92738315283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 132962.34421995393,
            "unit": "ns/iter",
            "extra": "iterations: 6583\ncpu: 132954.77745708628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1417.7763179507006,
            "unit": "ns/iter",
            "extra": "iterations: 493133\ncpu: 1417.6998902932874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1208.2733148787984,
            "unit": "ns/iter",
            "extra": "iterations: 582332\ncpu: 1208.1491314233112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1212.7818780304033,
            "unit": "ns/iter",
            "extra": "iterations: 579341\ncpu: 1212.7655387759535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1219.8947972972396,
            "unit": "ns/iter",
            "extra": "iterations: 571107\ncpu: 1219.893119853197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2118.155750326114,
            "unit": "ns/iter",
            "extra": "iterations: 331216\ncpu: 2118.123218685082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7218.574138023054,
            "unit": "ns/iter",
            "extra": "iterations: 112358\ncpu: 7218.569216255184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 38975.242353161615,
            "unit": "ns/iter",
            "extra": "iterations: 21316\ncpu: 38974.86864327266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 30501.46656568621,
            "unit": "ns/iter",
            "extra": "iterations: 27068\ncpu: 30500.901433426876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30331.1223909284,
            "unit": "ns/iter",
            "extra": "iterations: 27069\ncpu: 30331.06505596813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 29829.711491171853,
            "unit": "ns/iter",
            "extra": "iterations: 27247\ncpu: 29829.445443535038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 69576.2660009466,
            "unit": "ns/iter",
            "extra": "iterations: 12718\ncpu: 69575.2083660955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 660846.4561150972,
            "unit": "ns/iter",
            "extra": "iterations: 1390\ncpu: 660809.2805755405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 533264.6920000457,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 533263.9000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 537127.9770000115,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 537116.7999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 540363.0580000253,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 540362.6000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 387737.9115555565,
            "unit": "ns/iter",
            "extra": "iterations: 2250\ncpu: 387734.3999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 530377.3200000137,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 530362.199999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2745585.4117647503,
            "unit": "ns/iter",
            "extra": "iterations: 340\ncpu: 2745525.2941176496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1284093.8525034015,
            "unit": "ns/iter",
            "extra": "iterations: 739\ncpu: 1284071.989174563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3703384.177419415,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3703227.8225806477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 9861.758925950202,
            "unit": "ns/iter",
            "extra": "iterations: 85173\ncpu: 9861.376257734244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 53299.77303096482,
            "unit": "ns/iter",
            "extra": "iterations: 15566\ncpu: 53296.485930875184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 42349.21357590736,
            "unit": "ns/iter",
            "extra": "iterations: 19623\ncpu: 42346.53213066301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 42127.90316545383,
            "unit": "ns/iter",
            "extra": "iterations: 19776\ncpu: 42127.12884304217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 42944.898063867564,
            "unit": "ns/iter",
            "extra": "iterations: 19885\ncpu: 42944.82273070135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 81355.73312078344,
            "unit": "ns/iter",
            "extra": "iterations: 10664\ncpu: 81355.57951987983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 694626.5065134327,
            "unit": "ns/iter",
            "extra": "iterations: 1305\ncpu: 694625.6704980842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 555925.302999981,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 555908.3999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 549031.7489999938,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 549031.4000000041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 554476.9510000264,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 554476.000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 399876.5518028085,
            "unit": "ns/iter",
            "extra": "iterations: 2191\ncpu: 399875.7644911027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 538448.3820000128,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 538447.8000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2871438.435185166,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2871364.1975308545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1304934.3602150753,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 1304886.6935483897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 6840.278841674916,
            "unit": "ns/iter",
            "extra": "iterations: 118067\ncpu: 6840.272048921388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 36313.326247115314,
            "unit": "ns/iter",
            "extra": "iterations: 22532\ncpu: 36313.24782531487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 28353.16377936324,
            "unit": "ns/iter",
            "extra": "iterations: 28862\ncpu: 28352.671332548096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 28470.498351439397,
            "unit": "ns/iter",
            "extra": "iterations: 28813\ncpu: 28470.45083816329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 27704.49961168412,
            "unit": "ns/iter",
            "extra": "iterations: 29615\ncpu: 27704.443694074012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 66771.7970933936,
            "unit": "ns/iter",
            "extra": "iterations: 12592\ncpu: 66771.10864040678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 663991.2359999585,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 663975.7000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 535955.8130000437,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 535941.600000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 534521.4239999905,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 534520.7000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 531759.9570000198,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 531758.7000000046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 386632.26290462806,
            "unit": "ns/iter",
            "extra": "iterations: 2286\ncpu: 386628.56517935323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 525979.6820000133,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 525979.2000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 709.1928708997408,
            "unit": "ns/iter",
            "extra": "iterations: 986520\ncpu: 709.1786279041523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4030.226958717505,
            "unit": "ns/iter",
            "extra": "iterations: 173851\ncpu: 4030.2212814421787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3211.908189973346,
            "unit": "ns/iter",
            "extra": "iterations: 218157\ncpu: 3211.9042707774574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3093.752827980073,
            "unit": "ns/iter",
            "extra": "iterations: 228962\ncpu: 3093.748307579446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2456.204154581938,
            "unit": "ns/iter",
            "extra": "iterations: 284794\ncpu: 2456.1616466639102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 18937.361468337785,
            "unit": "ns/iter",
            "extra": "iterations: 36858\ncpu: 18937.332465136515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 35587.95439042997,
            "unit": "ns/iter",
            "extra": "iterations: 19645\ncpu: 35587.90022906598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 9655.573208483687,
            "unit": "ns/iter",
            "extra": "iterations: 78174\ncpu: 9655.417402205308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8958.007813299688,
            "unit": "ns/iter",
            "extra": "iterations: 78200\ncpu: 8957.750639386128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8994.78433812141,
            "unit": "ns/iter",
            "extra": "iterations: 77960\ncpu: 8994.621600820938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 17689.127646056357,
            "unit": "ns/iter",
            "extra": "iterations: 39351\ncpu: 17689.10319941038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 17050.466436171333,
            "unit": "ns/iter",
            "extra": "iterations: 41071\ncpu: 17050.444352462797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5728.372343639185,
            "unit": "ns/iter",
            "extra": "iterations: 122489\ncpu: 5728.364996040481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 28940.957332451588,
            "unit": "ns/iter",
            "extra": "iterations: 24187\ncpu: 28939.99669243775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 22785.18738649565,
            "unit": "ns/iter",
            "extra": "iterations: 30285\ncpu: 22785.16097077752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 22686.30213097345,
            "unit": "ns/iter",
            "extra": "iterations: 30831\ncpu: 22685.874606726993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 23351.138627096654,
            "unit": "ns/iter",
            "extra": "iterations: 29922\ncpu: 23350.878951941846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 52309.35803944863,
            "unit": "ns/iter",
            "extra": "iterations: 13384\ncpu: 52308.30842797458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 181970.63341968818,
            "unit": "ns/iter",
            "extra": "iterations: 3860\ncpu: 181968.75647668142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 151284.5131749445,
            "unit": "ns/iter",
            "extra": "iterations: 4630\ncpu: 151284.38444924416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 149640.15651985773,
            "unit": "ns/iter",
            "extra": "iterations: 4632\ncpu: 149638.2340241783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 150945.24219590024,
            "unit": "ns/iter",
            "extra": "iterations: 4645\ncpu: 150943.31539289356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 94857.41319961609,
            "unit": "ns/iter",
            "extra": "iterations: 7379\ncpu: 94855.4411166824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 150949.55986219188,
            "unit": "ns/iter",
            "extra": "iterations: 4644\ncpu: 150947.32988802769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5786.140282682504,
            "unit": "ns/iter",
            "extra": "iterations: 120913\ncpu: 5786.13135064054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 28040.482393941664,
            "unit": "ns/iter",
            "extra": "iterations: 24963\ncpu: 28040.147418178567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 23202.73473503243,
            "unit": "ns/iter",
            "extra": "iterations: 30249\ncpu: 23202.241396409838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 22867.727138981318,
            "unit": "ns/iter",
            "extra": "iterations: 30587\ncpu: 22867.51888057014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 23440.580217938666,
            "unit": "ns/iter",
            "extra": "iterations: 29825\ncpu: 23440.553227158198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 51593.496031166505,
            "unit": "ns/iter",
            "extra": "iterations: 13606\ncpu: 51593.429369396465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 179341.93270456253,
            "unit": "ns/iter",
            "extra": "iterations: 3923\ncpu: 179341.70277848642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 149301.45613288393,
            "unit": "ns/iter",
            "extra": "iterations: 4696\ncpu: 149295.54940374973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 150618.47920239237,
            "unit": "ns/iter",
            "extra": "iterations: 4664\ncpu: 150618.31046312093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 151640.0640827947,
            "unit": "ns/iter",
            "extra": "iterations: 4541\ncpu: 151639.88108345977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 93314.97608550607,
            "unit": "ns/iter",
            "extra": "iterations: 7485\ncpu: 93314.90981963935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 148919.3671724664,
            "unit": "ns/iter",
            "extra": "iterations: 4679\ncpu: 148916.30690318378 ns\nthreads: 1"
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
        "date": 1702421404798,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1611.874141147346,
            "unit": "ns/iter",
            "extra": "iterations: 433136\ncpu: 1611.8500886557572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 19376.289551538346,
            "unit": "ns/iter",
            "extra": "iterations: 42590\ncpu: 19375.696172810523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 40374.269095352865,
            "unit": "ns/iter",
            "extra": "iterations: 20450\ncpu: 40373.863080684605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 59639.19378414485,
            "unit": "ns/iter",
            "extra": "iterations: 14093\ncpu: 59638.7994039594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 66466.54219233917,
            "unit": "ns/iter",
            "extra": "iterations: 13237\ncpu: 66467.05446853513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 83702.52188391854,
            "unit": "ns/iter",
            "extra": "iterations: 10510\ncpu: 83701.67459562315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 99130.98983553596,
            "unit": "ns/iter",
            "extra": "iterations: 8756\ncpu: 99129.81955230703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 115251.41938477344,
            "unit": "ns/iter",
            "extra": "iterations: 7542\ncpu: 115248.35587377353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 133335.39385686244,
            "unit": "ns/iter",
            "extra": "iterations: 6609\ncpu: 133330.62490543202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1463.2297839519658,
            "unit": "ns/iter",
            "extra": "iterations: 474524\ncpu: 1463.2077618834874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1207.7800288313024,
            "unit": "ns/iter",
            "extra": "iterations: 579926\ncpu: 1207.7653010901374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1206.9970179528173,
            "unit": "ns/iter",
            "extra": "iterations: 578797\ncpu: 1206.964445219998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1234.5456297883102,
            "unit": "ns/iter",
            "extra": "iterations: 567524\ncpu: 1234.5432087453578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2128.37098968535,
            "unit": "ns/iter",
            "extra": "iterations: 328559\ncpu: 2128.35137676947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6998.178956880879,
            "unit": "ns/iter",
            "extra": "iterations: 117302\ncpu: 6998.006001602686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 38955.04016633528,
            "unit": "ns/iter",
            "extra": "iterations: 21162\ncpu: 38954.65456951137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 30488.453889726527,
            "unit": "ns/iter",
            "extra": "iterations: 26480\ncpu: 30485.056646525707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30639.99944446485,
            "unit": "ns/iter",
            "extra": "iterations: 27001\ncpu: 30638.768934483902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 30192.851034585216,
            "unit": "ns/iter",
            "extra": "iterations: 26919\ncpu: 30190.5159924217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 69916.38646270976,
            "unit": "ns/iter",
            "extra": "iterations: 12617\ncpu: 69911.88079575165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 664568.7094203121,
            "unit": "ns/iter",
            "extra": "iterations: 1380\ncpu: 664536.6666666662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 542635.5640000224,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 542593.3999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 541808.8349999834,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 541801.4000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 545580.3049999872,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 545542.4999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 391788.8976555427,
            "unit": "ns/iter",
            "extra": "iterations: 2218\ncpu: 391766.05049594236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 535463.1939999877,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 535439.0000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2757219.4569733622,
            "unit": "ns/iter",
            "extra": "iterations: 337\ncpu: 2757033.2344213645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1229707.2297476723,
            "unit": "ns/iter",
            "extra": "iterations: 753\ncpu: 1229654.0504648057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3746352.0122951213,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3746131.967213104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 9987.559670930066,
            "unit": "ns/iter",
            "extra": "iterations: 83508\ncpu: 9987.219188580764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 53052.76933358704,
            "unit": "ns/iter",
            "extra": "iterations: 15711\ncpu: 53050.588759467704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 42038.27147231365,
            "unit": "ns/iter",
            "extra": "iterations: 19269\ncpu: 42035.52856920449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 41879.10431582104,
            "unit": "ns/iter",
            "extra": "iterations: 19834\ncpu: 41877.689825551905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 41268.27227476317,
            "unit": "ns/iter",
            "extra": "iterations: 20090\ncpu: 41266.71976107541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 79641.79187911225,
            "unit": "ns/iter",
            "extra": "iterations: 10787\ncpu: 79637.5637341245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 704253.6770516845,
            "unit": "ns/iter",
            "extra": "iterations: 1316\ncpu: 704208.9665653532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 566296.4069999816,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 566293.7999999969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 561979.4010000306,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 561970.0999999964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 557307.0259999895,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 557275.3000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 402301.49240680784,
            "unit": "ns/iter",
            "extra": "iterations: 2173\ncpu: 402286.0101242516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 544894.6330000126,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 544868.8999999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2894818.0623054374,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2894631.4641744527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1287929.0841379017,
            "unit": "ns/iter",
            "extra": "iterations: 725\ncpu: 1287848.275862067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7239.717307011231,
            "unit": "ns/iter",
            "extra": "iterations: 112960\ncpu: 7239.403328611893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 39437.33566016028,
            "unit": "ns/iter",
            "extra": "iterations: 21775\ncpu: 39435.18254879437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 32050.180735974158,
            "unit": "ns/iter",
            "extra": "iterations: 25789\ncpu: 32048.819264027275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 31445.143712119607,
            "unit": "ns/iter",
            "extra": "iterations: 26233\ncpu: 31443.88746998069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 31493.37620420147,
            "unit": "ns/iter",
            "extra": "iterations: 26366\ncpu: 31484.923765455518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 67321.76352597869,
            "unit": "ns/iter",
            "extra": "iterations: 13012\ncpu: 67316.52320934489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 671208.3230438009,
            "unit": "ns/iter",
            "extra": "iterations: 1393\ncpu: 671169.7056712114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 544539.6080000364,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 544509.099999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 569166.2810000366,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 569157.4000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 543146.9029999789,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 543135.4000000042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 388310.20658949635,
            "unit": "ns/iter",
            "extra": "iterations: 2246\ncpu: 388288.6464826338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 526907.4699999692,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 526911.6999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 723.5431683628627,
            "unit": "ns/iter",
            "extra": "iterations: 971568\ncpu: 723.534533866908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4157.399698349679,
            "unit": "ns/iter",
            "extra": "iterations: 168407\ncpu: 4157.357473264179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3299.3428909293993,
            "unit": "ns/iter",
            "extra": "iterations: 212257\ncpu: 3299.3738722398116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3259.6874769666515,
            "unit": "ns/iter",
            "extra": "iterations: 214365\ncpu: 3259.644065029255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2488.631156958671,
            "unit": "ns/iter",
            "extra": "iterations: 281125\ncpu: 2488.648821698526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 19143.732170162126,
            "unit": "ns/iter",
            "extra": "iterations: 36624\ncpu: 19143.558868501543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 37048.874249907436,
            "unit": "ns/iter",
            "extra": "iterations: 18831\ncpu: 37048.62726355489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 9015.635262155001,
            "unit": "ns/iter",
            "extra": "iterations: 77664\ncpu: 9015.447311495707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8909.810873712551,
            "unit": "ns/iter",
            "extra": "iterations: 78630\ncpu: 8909.788884649613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 9303.934573329268,
            "unit": "ns/iter",
            "extra": "iterations: 78011\ncpu: 9303.914832523673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 17757.69409866221,
            "unit": "ns/iter",
            "extra": "iterations: 39042\ncpu: 17752.353875313845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 17027.28092209101,
            "unit": "ns/iter",
            "extra": "iterations: 43076\ncpu: 17026.546104559355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5780.574555856256,
            "unit": "ns/iter",
            "extra": "iterations: 120963\ncpu: 5780.284880500628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 28686.667950819632,
            "unit": "ns/iter",
            "extra": "iterations: 24400\ncpu: 28684.95901639324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 22756.10973044738,
            "unit": "ns/iter",
            "extra": "iterations: 30903\ncpu: 22754.988188848765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 22908.731528798693,
            "unit": "ns/iter",
            "extra": "iterations: 30331\ncpu: 22907.40496521722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 23628.68563943852,
            "unit": "ns/iter",
            "extra": "iterations: 29393\ncpu: 23627.319429796255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 52629.616674185774,
            "unit": "ns/iter",
            "extra": "iterations: 13302\ncpu: 52628.41677943078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 182442.6076642287,
            "unit": "ns/iter",
            "extra": "iterations: 3836\ncpu: 182435.7142857142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 152653.51115485563,
            "unit": "ns/iter",
            "extra": "iterations: 4572\ncpu: 152650.4593175838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 151108.6746753233,
            "unit": "ns/iter",
            "extra": "iterations: 4620\ncpu: 151107.01298701178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 151445.93303088975,
            "unit": "ns/iter",
            "extra": "iterations: 4629\ncpu: 151445.66861093132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 96092.99986254335,
            "unit": "ns/iter",
            "extra": "iterations: 7275\ncpu: 96093.64948453651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 152993.8234395409,
            "unit": "ns/iter",
            "extra": "iterations: 4582\ncpu: 152993.2998690516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5611.3611072977765,
            "unit": "ns/iter",
            "extra": "iterations: 123833\ncpu: 5611.275669651846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 29827.80424919394,
            "unit": "ns/iter",
            "extra": "iterations: 22922\ncpu: 29827.16167873636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 23576.257087888844,
            "unit": "ns/iter",
            "extra": "iterations: 29628\ncpu: 23576.191440528924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 22958.881744930568,
            "unit": "ns/iter",
            "extra": "iterations: 30282\ncpu: 22958.810514497207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 23669.178026448277,
            "unit": "ns/iter",
            "extra": "iterations: 29490\ncpu: 23668.802984062284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 50955.71758888767,
            "unit": "ns/iter",
            "extra": "iterations: 13753\ncpu: 50954.940740201964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 179868.85387775567,
            "unit": "ns/iter",
            "extra": "iterations: 3894\ncpu: 179866.89779147418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 149793.8207993075,
            "unit": "ns/iter",
            "extra": "iterations: 4654\ncpu: 149788.28964331764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 148120.32625318877,
            "unit": "ns/iter",
            "extra": "iterations: 4708\ncpu: 148117.3534409528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 150473.02592352574,
            "unit": "ns/iter",
            "extra": "iterations: 4629\ncpu: 150470.46878375424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 94969.82421768468,
            "unit": "ns/iter",
            "extra": "iterations: 7350\ncpu: 94967.40136054438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 150752.39840552636,
            "unit": "ns/iter",
            "extra": "iterations: 4641\ncpu: 150751.58371040755 ns\nthreads: 1"
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
        "date": 1702421912663,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1642.6163106257557,
            "unit": "ns/iter",
            "extra": "iterations: 425232\ncpu: 1642.5400722429167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 19422.127551140307,
            "unit": "ns/iter",
            "extra": "iterations: 42579\ncpu: 19421.3814321614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 40539.511295143806,
            "unit": "ns/iter",
            "extra": "iterations: 20407\ncpu: 40538.20257754692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 59829.482731555705,
            "unit": "ns/iter",
            "extra": "iterations: 14014\ncpu: 59828.77836449264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 66783.73848135595,
            "unit": "ns/iter",
            "extra": "iterations: 13196\ncpu: 66780.94877235529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 83833.66949881092,
            "unit": "ns/iter",
            "extra": "iterations: 10475\ncpu: 83830.16706443916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 98921.20486628941,
            "unit": "ns/iter",
            "extra": "iterations: 8713\ncpu: 98917.75507861814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 115276.10366256526,
            "unit": "ns/iter",
            "extra": "iterations: 7563\ncpu: 115270.59367975667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 133022.4493248437,
            "unit": "ns/iter",
            "extra": "iterations: 6443\ncpu: 133019.07496507818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1424.9352761265804,
            "unit": "ns/iter",
            "extra": "iterations: 492075\ncpu: 1424.8779149519892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1179.7097937281433,
            "unit": "ns/iter",
            "extra": "iterations: 591307\ncpu: 1179.644922180865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1181.6279509894885,
            "unit": "ns/iter",
            "extra": "iterations: 592852\ncpu: 1181.5830932509282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1191.4712254317587,
            "unit": "ns/iter",
            "extra": "iterations: 588054\ncpu: 1191.4132035493353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2134.837125176715,
            "unit": "ns/iter",
            "extra": "iterations: 326754\ncpu: 2134.6796060645024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7264.091705809829,
            "unit": "ns/iter",
            "extra": "iterations: 112621\ncpu: 7263.843332948563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 38477.01070863291,
            "unit": "ns/iter",
            "extra": "iterations: 21478\ncpu: 38476.01266412147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 30191.81784318629,
            "unit": "ns/iter",
            "extra": "iterations: 27383\ncpu: 30187.53241061968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30301.129115607673,
            "unit": "ns/iter",
            "extra": "iterations: 27092\ncpu: 30300.158718440845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 30256.420722659866,
            "unit": "ns/iter",
            "extra": "iterations: 26956\ncpu: 30255.2196171538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 69676.91120626903,
            "unit": "ns/iter",
            "extra": "iterations: 12377\ncpu: 69674.92122485257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 678620.2474600661,
            "unit": "ns/iter",
            "extra": "iterations: 1378\ncpu: 678591.2191581985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 535260.0130000269,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 535240.7000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 534416.8999999965,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 534394.2999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 534455.9629999708,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 534449.9999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 389047.1093819464,
            "unit": "ns/iter",
            "extra": "iterations: 2249\ncpu: 389036.2827923525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 532256.0350000458,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 532239.1000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2729419.78466076,
            "unit": "ns/iter",
            "extra": "iterations: 339\ncpu: 2729318.5840707896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1239176.0430107731,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 1239149.327956991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3738069.5443547457,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3737892.3387096776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10011.589523232293,
            "unit": "ns/iter",
            "extra": "iterations: 84129\ncpu: 10011.359935337434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 53271.94899277032,
            "unit": "ns/iter",
            "extra": "iterations: 15488\ncpu: 53269.07283057854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 42132.89728327131,
            "unit": "ns/iter",
            "extra": "iterations: 19656\ncpu: 42131.87830687834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 42305.0214659946,
            "unit": "ns/iter",
            "extra": "iterations: 19659\ncpu: 42304.55262220865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 41124.79728327869,
            "unit": "ns/iter",
            "extra": "iterations: 20245\ncpu: 41123.166213880235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 79612.9328461741,
            "unit": "ns/iter",
            "extra": "iterations: 10811\ncpu: 79611.43279992598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 696284.708489862,
            "unit": "ns/iter",
            "extra": "iterations: 1331\ncpu: 696092.7873779102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 554406.063999977,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 554400.600000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 546802.0389999993,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 546759.1000000028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 546809.4739999856,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 546763.900000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 398824.2775751948,
            "unit": "ns/iter",
            "extra": "iterations: 2194\ncpu: 398805.10483135656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 540778.4160000233,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 540761.7999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2873600.6492307265,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2873506.153846152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1236855.582887716,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 1236761.363636363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7308.850404644551,
            "unit": "ns/iter",
            "extra": "iterations: 113680\ncpu: 7308.644440534854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 37366.32393000418,
            "unit": "ns/iter",
            "extra": "iterations: 21659\ncpu: 37364.71212890713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 28463.075394935408,
            "unit": "ns/iter",
            "extra": "iterations: 27283\ncpu: 28462.797346333104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 28340.049694557027,
            "unit": "ns/iter",
            "extra": "iterations: 29138\ncpu: 28337.312101036325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 27501.230559797168,
            "unit": "ns/iter",
            "extra": "iterations: 30118\ncpu: 27500.733780463677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 65919.80856903177,
            "unit": "ns/iter",
            "extra": "iterations: 13117\ncpu: 65916.29945871772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 669766.5039999947,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 669759.9000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 538206.8650000064,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 538186.7000000043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 537278.2620000293,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 537266.5000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 534025.0689999948,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 533994.3999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 387081.9118554513,
            "unit": "ns/iter",
            "extra": "iterations: 2269\ncpu: 387073.1599823693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 524939.9180000295,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 524911.7000000041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 702.3268587262107,
            "unit": "ns/iter",
            "extra": "iterations: 997538\ncpu: 702.2940479460407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4222.247342907903,
            "unit": "ns/iter",
            "extra": "iterations: 166065\ncpu: 4222.059434558767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3256.3731247763853,
            "unit": "ns/iter",
            "extra": "iterations: 212508\ncpu: 3256.1781203531045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3121.2537286074185,
            "unit": "ns/iter",
            "extra": "iterations: 223676\ncpu: 3121.1359287540804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2465.8833679980307,
            "unit": "ns/iter",
            "extra": "iterations: 283670\ncpu: 2465.755279021388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 18964.946976540956,
            "unit": "ns/iter",
            "extra": "iterations: 36531\ncpu: 18963.480331772935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 36979.91722784853,
            "unit": "ns/iter",
            "extra": "iterations: 18859\ncpu: 36970.89983562208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8912.544744951094,
            "unit": "ns/iter",
            "extra": "iterations: 78534\ncpu: 8912.176891537383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8856.560897355092,
            "unit": "ns/iter",
            "extra": "iterations: 79166\ncpu: 8856.236263042269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8809.385807051785,
            "unit": "ns/iter",
            "extra": "iterations: 79462\ncpu: 8809.143993355365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 17724.617721390256,
            "unit": "ns/iter",
            "extra": "iterations: 39568\ncpu: 17724.234229680555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 16884.93680081329,
            "unit": "ns/iter",
            "extra": "iterations: 41298\ncpu: 16884.79587389227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5709.790055474963,
            "unit": "ns/iter",
            "extra": "iterations: 122037\ncpu: 5709.651990789681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 28582.6215176914,
            "unit": "ns/iter",
            "extra": "iterations: 24445\ncpu: 28581.64041726338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 22806.79718475509,
            "unit": "ns/iter",
            "extra": "iterations: 30619\ncpu: 22806.0420000652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 22709.152813361557,
            "unit": "ns/iter",
            "extra": "iterations: 30835\ncpu: 22708.373601427233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 23330.32461363482,
            "unit": "ns/iter",
            "extra": "iterations: 29894\ncpu: 23329.089449388295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 52396.07505222639,
            "unit": "ns/iter",
            "extra": "iterations: 13404\ncpu: 52395.37451506994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 182364.3711018711,
            "unit": "ns/iter",
            "extra": "iterations: 3848\ncpu: 182362.39604989885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 152382.86985853652,
            "unit": "ns/iter",
            "extra": "iterations: 4595\ncpu: 152380.52230685437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 150031.57164274785,
            "unit": "ns/iter",
            "extra": "iterations: 4669\ncpu: 150030.09209680892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 150347.26666666832,
            "unit": "ns/iter",
            "extra": "iterations: 4665\ncpu: 150347.58842443893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 94886.98930407566,
            "unit": "ns/iter",
            "extra": "iterations: 7199\ncpu: 94885.8035838314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 151576.91636207455,
            "unit": "ns/iter",
            "extra": "iterations: 4651\ncpu: 151569.68393893866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5546.67626132214,
            "unit": "ns/iter",
            "extra": "iterations: 126633\ncpu: 5546.388382175202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 27955.86305022588,
            "unit": "ns/iter",
            "extra": "iterations: 25126\ncpu: 27955.201783013486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 22847.952217537724,
            "unit": "ns/iter",
            "extra": "iterations: 30597\ncpu: 22847.393535313968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 22535.35378388817,
            "unit": "ns/iter",
            "extra": "iterations: 31132\ncpu: 22534.72953873819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 24160.221992771483,
            "unit": "ns/iter",
            "extra": "iterations: 29055\ncpu: 24158.69213560487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 51713.73667157869,
            "unit": "ns/iter",
            "extra": "iterations: 13580\ncpu: 51711.8998527251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 177883.2449809442,
            "unit": "ns/iter",
            "extra": "iterations: 3935\ncpu: 177877.02668361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 147766.6439890196,
            "unit": "ns/iter",
            "extra": "iterations: 4733\ncpu: 147759.75068666996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 146277.40574544173,
            "unit": "ns/iter",
            "extra": "iterations: 4769\ncpu: 146274.90039840416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 146527.5615464919,
            "unit": "ns/iter",
            "extra": "iterations: 4785\ncpu: 146525.12016718893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 94223.05584502044,
            "unit": "ns/iter",
            "extra": "iterations: 7485\ncpu: 94222.0574482292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 148420.05656780428,
            "unit": "ns/iter",
            "extra": "iterations: 4720\ncpu: 148416.44067796436 ns\nthreads: 1"
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
        "date": 1702422470904,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1641.7953239027145,
            "unit": "ns/iter",
            "extra": "iterations: 418212\ncpu: 1641.6946429083816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 19419.988077391947,
            "unit": "ns/iter",
            "extra": "iterations: 42692\ncpu: 19418.945001405416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 40767.16297935215,
            "unit": "ns/iter",
            "extra": "iterations: 20340\ncpu: 40764.70993117012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50174.868199997036,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50173.59999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 67462.93929907234,
            "unit": "ns/iter",
            "extra": "iterations: 13097\ncpu: 67462.49522791481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 84525.86393901365,
            "unit": "ns/iter",
            "extra": "iterations: 10363\ncpu: 84521.89520409147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 100758.25545243597,
            "unit": "ns/iter",
            "extra": "iterations: 8620\ncpu: 100757.21577726219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 117664.11366675349,
            "unit": "ns/iter",
            "extra": "iterations: 7478\ncpu: 117661.04573415355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 137616.57042140386,
            "unit": "ns/iter",
            "extra": "iterations: 6241\ncpu: 137609.22929017787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1479.1696799452386,
            "unit": "ns/iter",
            "extra": "iterations: 477387\ncpu: 1479.018071292263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1214.8273825996857,
            "unit": "ns/iter",
            "extra": "iterations: 581749\ncpu: 1214.8156679255142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1197.04264662828,
            "unit": "ns/iter",
            "extra": "iterations: 584079\ncpu: 1197.0099935111523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1192.9650516973456,
            "unit": "ns/iter",
            "extra": "iterations: 586781\ncpu: 1192.9547821078072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2142.8375007991854,
            "unit": "ns/iter",
            "extra": "iterations: 328457\ncpu: 2142.7605439981517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7332.827233852678,
            "unit": "ns/iter",
            "extra": "iterations: 112250\ncpu: 7332.580846325167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 38642.711684870905,
            "unit": "ns/iter",
            "extra": "iterations: 21147\ncpu: 38642.58760107817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 30642.319142624714,
            "unit": "ns/iter",
            "extra": "iterations: 26966\ncpu: 30642.553585997157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30422.900055482438,
            "unit": "ns/iter",
            "extra": "iterations: 27035\ncpu: 30422.444978731328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 29869.886714915505,
            "unit": "ns/iter",
            "extra": "iterations: 27497\ncpu: 29869.73851692912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 70508.51254765027,
            "unit": "ns/iter",
            "extra": "iterations: 12592\ncpu: 70507.13945362129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 673679.7031363696,
            "unit": "ns/iter",
            "extra": "iterations: 1371\ncpu: 673670.6783369812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 534544.7409999906,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 534528.9000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 533334.1010000368,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 533339.0000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 534505.9080000283,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 534503.1999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 379773.1283399205,
            "unit": "ns/iter",
            "extra": "iterations: 2283\ncpu: 379748.5326325012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 524332.2260000127,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 524329.599999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2746912.203539755,
            "unit": "ns/iter",
            "extra": "iterations: 339\ncpu: 2746256.0471976413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1222075.6335078145,
            "unit": "ns/iter",
            "extra": "iterations: 764\ncpu: 1222038.7434554985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3774401.975409755,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3774159.016393454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10360.57219131783,
            "unit": "ns/iter",
            "extra": "iterations: 80536\ncpu: 10360.20785735576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 55605.19373998793,
            "unit": "ns/iter",
            "extra": "iterations: 14984\ncpu: 55602.72957821658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 43879.95258529348,
            "unit": "ns/iter",
            "extra": "iterations: 18876\ncpu: 43880.371900826496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 43707.07166500317,
            "unit": "ns/iter",
            "extra": "iterations: 19033\ncpu: 43706.9195607629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 42129.017187985744,
            "unit": "ns/iter",
            "extra": "iterations: 19374\ncpu: 42126.12780014441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 81211.35718299504,
            "unit": "ns/iter",
            "extra": "iterations: 10678\ncpu: 81207.92283199096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 693817.9474868795,
            "unit": "ns/iter",
            "extra": "iterations: 1333\ncpu: 693781.7704426103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 559383.2389999988,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 559369.8000000061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 556276.7270000109,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 556261.2000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 554753.9689999894,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 554707.8999999968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 400126.5320018348,
            "unit": "ns/iter",
            "extra": "iterations: 2203\ncpu: 400115.9782115271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 541149.439000037,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 541139.0000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2871210.4674921003,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 2871059.7523219897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1276265.595141647,
            "unit": "ns/iter",
            "extra": "iterations: 741\ncpu: 1276229.0148448024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7216.9914727585765,
            "unit": "ns/iter",
            "extra": "iterations: 113284\ncpu: 7216.971505243472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 38085.4257115185,
            "unit": "ns/iter",
            "extra": "iterations: 21679\ncpu: 38083.55090179439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 30427.762460464448,
            "unit": "ns/iter",
            "extra": "iterations: 27507\ncpu: 30426.756825535384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 29749.141252295565,
            "unit": "ns/iter",
            "extra": "iterations: 27773\ncpu: 29748.331112951342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 29376.147480599888,
            "unit": "ns/iter",
            "extra": "iterations: 27963\ncpu: 29375.531952937716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 67786.2448491395,
            "unit": "ns/iter",
            "extra": "iterations: 12959\ncpu: 67781.36430280106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 670885.568767895,
            "unit": "ns/iter",
            "extra": "iterations: 1396\ncpu: 670857.6647564459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 534956.9840000186,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 534955.5000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 530471.6800000052,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 530451.5000000052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 532799.9049999902,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 532738.099999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 383663.4114560414,
            "unit": "ns/iter",
            "extra": "iterations: 2287\ncpu: 383636.248360297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 520026.0710000179,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520008.3000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 704.0834855027534,
            "unit": "ns/iter",
            "extra": "iterations: 968767\ncpu: 704.0680576444036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4130.244342770781,
            "unit": "ns/iter",
            "extra": "iterations: 169606\ncpu: 4130.214143367557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3021.3639525326075,
            "unit": "ns/iter",
            "extra": "iterations: 232327\ncpu: 3021.3238237484234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3083.0616107891287,
            "unit": "ns/iter",
            "extra": "iterations: 226746\ncpu: 3083.0259409206674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2476.721294927022,
            "unit": "ns/iter",
            "extra": "iterations: 283321\ncpu: 2476.74510537518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 19358.590305077814,
            "unit": "ns/iter",
            "extra": "iterations: 36122\ncpu: 19358.440839377574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 36877.73057920614,
            "unit": "ns/iter",
            "extra": "iterations: 19026\ncpu: 36877.20487753606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8818.380659445971,
            "unit": "ns/iter",
            "extra": "iterations: 79491\ncpu: 8817.952975808617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8795.20393555378,
            "unit": "ns/iter",
            "extra": "iterations: 79633\ncpu: 8794.902866901903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8820.83472073572,
            "unit": "ns/iter",
            "extra": "iterations: 79405\ncpu: 8820.423147156958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 17668.598402651707,
            "unit": "ns/iter",
            "extra": "iterations: 39816\ncpu: 17668.030440024093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 16566.3808600226,
            "unit": "ns/iter",
            "extra": "iterations: 42278\ncpu: 16565.277449264355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5659.366255044352,
            "unit": "ns/iter",
            "extra": "iterations: 124143\ncpu: 5659.283245934148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 28516.67888001175,
            "unit": "ns/iter",
            "extra": "iterations: 24536\ncpu: 28516.958754482923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 22487.035967058757,
            "unit": "ns/iter",
            "extra": "iterations: 31084\ncpu: 22486.832453995394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 22832.10055902389,
            "unit": "ns/iter",
            "extra": "iterations: 30768\ncpu: 22832.072282891197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 23224.442312781794,
            "unit": "ns/iter",
            "extra": "iterations: 30232\ncpu: 23223.425509393728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 52930.59768899494,
            "unit": "ns/iter",
            "extra": "iterations: 13241\ncpu: 52929.6050147272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 181599.21277145264,
            "unit": "ns/iter",
            "extra": "iterations: 3868\ncpu: 181592.14064115635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 152170.74065164718,
            "unit": "ns/iter",
            "extra": "iterations: 4573\ncpu: 152162.58473649799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 151712.5795847786,
            "unit": "ns/iter",
            "extra": "iterations: 4624\ncpu: 151702.48702422276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 152657.09795385375,
            "unit": "ns/iter",
            "extra": "iterations: 4594\ncpu: 152655.2024379613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 97139.01345914001,
            "unit": "ns/iter",
            "extra": "iterations: 7207\ncpu: 97139.86402109209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 152819.51935623653,
            "unit": "ns/iter",
            "extra": "iterations: 4598\ncpu: 152812.70117442132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 6118.019063090129,
            "unit": "ns/iter",
            "extra": "iterations: 113885\ncpu: 6117.894367124659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 29879.329039912936,
            "unit": "ns/iter",
            "extra": "iterations: 23602\ncpu: 29877.84933480179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 25023.094384109303,
            "unit": "ns/iter",
            "extra": "iterations: 27992\ncpu: 25022.542154901214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 23565.631773812933,
            "unit": "ns/iter",
            "extra": "iterations: 29710\ncpu: 23564.91417031284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 24920.289117469474,
            "unit": "ns/iter",
            "extra": "iterations: 27999\ncpu: 24919.775706274977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 53419.43801022159,
            "unit": "ns/iter",
            "extra": "iterations: 13107\ncpu: 53416.47974364837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 180744.7429677444,
            "unit": "ns/iter",
            "extra": "iterations: 3875\ncpu: 180737.0838709645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 149137.4557258452,
            "unit": "ns/iter",
            "extra": "iterations: 4698\ncpu: 149138.7398893141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 150196.5969191252,
            "unit": "ns/iter",
            "extra": "iterations: 4674\ncpu: 150194.6512623019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 149996.45153007357,
            "unit": "ns/iter",
            "extra": "iterations: 4673\ncpu: 149991.63278408107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 96633.3270873536,
            "unit": "ns/iter",
            "extra": "iterations: 7258\ncpu: 96628.69936621524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 147820.63749735837,
            "unit": "ns/iter",
            "extra": "iterations: 4731\ncpu: 147815.81061086516 ns\nthreads: 1"
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
        "date": 1702453339389,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1601.90257548588,
            "unit": "ns/iter",
            "extra": "iterations: 438791\ncpu: 1601.8658085512236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 19281.70538036026,
            "unit": "ns/iter",
            "extra": "iterations: 42302\ncpu: 19280.570658597702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 40428.220079851744,
            "unit": "ns/iter",
            "extra": "iterations: 20538\ncpu: 40427.78264680106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 59509.499220520214,
            "unit": "ns/iter",
            "extra": "iterations: 14112\ncpu: 59507.38378684807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 66158.66586029732,
            "unit": "ns/iter",
            "extra": "iterations: 13228\ncpu: 66155.6017538555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 83795.89002267542,
            "unit": "ns/iter",
            "extra": "iterations: 10584\ncpu: 83793.77362055938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 99909.96064708587,
            "unit": "ns/iter",
            "extra": "iterations: 8716\ncpu: 99905.09407985315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 117831.19145253484,
            "unit": "ns/iter",
            "extra": "iterations: 7511\ncpu: 117826.97377180144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 135077.87226733164,
            "unit": "ns/iter",
            "extra": "iterations: 6404\ncpu: 135071.72079950018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1452.5652558932445,
            "unit": "ns/iter",
            "extra": "iterations: 481060\ncpu: 1452.563089843262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1175.2552534790332,
            "unit": "ns/iter",
            "extra": "iterations: 596795\ncpu: 1175.2392362536543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1185.3064888046683,
            "unit": "ns/iter",
            "extra": "iterations: 591095\ncpu: 1185.245349732277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1195.780762589965,
            "unit": "ns/iter",
            "extra": "iterations: 590173\ncpu: 1195.7553124253384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2136.212955677943,
            "unit": "ns/iter",
            "extra": "iterations: 327918\ncpu: 2136.163614074251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6820.573399770223,
            "unit": "ns/iter",
            "extra": "iterations: 117405\ncpu: 6820.537455815331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 37139.49982004624,
            "unit": "ns/iter",
            "extra": "iterations: 22228\ncpu: 37138.3750224942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 29315.17255769237,
            "unit": "ns/iter",
            "extra": "iterations: 28037\ncpu: 29313.674786888747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 28056.920613720136,
            "unit": "ns/iter",
            "extra": "iterations: 29199\ncpu: 28056.269050309933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 28227.779514787373,
            "unit": "ns/iter",
            "extra": "iterations: 28977\ncpu: 28227.4113952446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 69804.8797299425,
            "unit": "ns/iter",
            "extra": "iterations: 12738\ncpu: 69803.52488616743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 663538.8081896524,
            "unit": "ns/iter",
            "extra": "iterations: 1392\ncpu: 663528.7356321823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 536739.3930000048,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 536705.8999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 536108.4280000057,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 536099.5000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 543570.4719999989,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 543553.5000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 387945.44025157305,
            "unit": "ns/iter",
            "extra": "iterations: 2226\ncpu: 387938.4546271344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 533928.4899999938,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 533919.9000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2759506.324404761,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2759374.1071428605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1263905.9082191626,
            "unit": "ns/iter",
            "extra": "iterations: 730\ncpu: 1263883.5616438352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3733934.8008130146,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3733834.5528455297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10509.553199106334,
            "unit": "ns/iter",
            "extra": "iterations: 81007\ncpu: 10509.399187724532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 55893.96662869343,
            "unit": "ns/iter",
            "extra": "iterations: 14923\ncpu: 55893.573678214874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 43896.2303687178,
            "unit": "ns/iter",
            "extra": "iterations: 18822\ncpu: 43895.0377218149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 43564.55087811358,
            "unit": "ns/iter",
            "extra": "iterations: 19075\ncpu: 43563.958060288394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 43395.97273203939,
            "unit": "ns/iter",
            "extra": "iterations: 19070\ncpu: 43395.076035657956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 79647.71385459688,
            "unit": "ns/iter",
            "extra": "iterations: 10935\ncpu: 79644.63648834021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 696520.5181818178,
            "unit": "ns/iter",
            "extra": "iterations: 1320\ncpu: 696495.075757575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 555402.4140000138,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 555377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 554717.4100000233,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 554710.2000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 556395.2749999999,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 556355.1999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 401254.72723112005,
            "unit": "ns/iter",
            "extra": "iterations: 2185\ncpu: 401243.79862700246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 538802.0240000059,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 538730.4999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2887398.3850931656,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2887368.94409939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1247532.1819407006,
            "unit": "ns/iter",
            "extra": "iterations: 742\ncpu: 1247443.6657681908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7205.840692617832,
            "unit": "ns/iter",
            "extra": "iterations: 113598\ncpu: 7205.387418792583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 37681.33353497855,
            "unit": "ns/iter",
            "extra": "iterations: 23143\ncpu: 37680.13654236721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 28094.720830030026,
            "unit": "ns/iter",
            "extra": "iterations: 29011\ncpu: 28094.240115818324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 28140.10543859034,
            "unit": "ns/iter",
            "extra": "iterations: 29401\ncpu: 28138.825210026855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 27828.7856807043,
            "unit": "ns/iter",
            "extra": "iterations: 29778\ncpu: 27828.403519376545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 66445.03857295269,
            "unit": "ns/iter",
            "extra": "iterations: 13118\ncpu: 66443.05534380247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 673497.6298701343,
            "unit": "ns/iter",
            "extra": "iterations: 1386\ncpu: 673487.518037519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 538124.8469999776,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 538093.0000000035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 541820.4640000113,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 541817.800000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 541948.7769999875,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 541940.4999999955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 390719.40335391887,
            "unit": "ns/iter",
            "extra": "iterations: 2266\ncpu: 390706.7519858794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 526051.912999975,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 526048.1999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 720.4751651250783,
            "unit": "ns/iter",
            "extra": "iterations: 971839\ncpu: 720.4618254669738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4105.382893249695,
            "unit": "ns/iter",
            "extra": "iterations: 170763\ncpu: 4105.333708121757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3254.668115896332,
            "unit": "ns/iter",
            "extra": "iterations: 221957\ncpu: 3254.562820726558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3277.9982284535677,
            "unit": "ns/iter",
            "extra": "iterations: 224098\ncpu: 3275.5812189309863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2502.960193761985,
            "unit": "ns/iter",
            "extra": "iterations: 279931\ncpu: 2502.8839249672096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 19564.626968668428,
            "unit": "ns/iter",
            "extra": "iterations: 35938\ncpu: 19564.394234515083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 37460.3662251652,
            "unit": "ns/iter",
            "extra": "iterations: 19630\ncpu: 37458.76719307182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8957.226878631063,
            "unit": "ns/iter",
            "extra": "iterations: 78315\ncpu: 8957.124433378018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8982.73504974846,
            "unit": "ns/iter",
            "extra": "iterations: 77992\ncpu: 8982.594368653257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 9117.42291606727,
            "unit": "ns/iter",
            "extra": "iterations: 76514\ncpu: 9117.32101314798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 17738.953565001873,
            "unit": "ns/iter",
            "extra": "iterations: 39453\ncpu: 17738.71695435065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 16874.146781884927,
            "unit": "ns/iter",
            "extra": "iterations: 41313\ncpu: 16873.330428678615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5734.130503029267,
            "unit": "ns/iter",
            "extra": "iterations: 122319\ncpu: 5734.0813773820755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 28849.48245470174,
            "unit": "ns/iter",
            "extra": "iterations: 24394\ncpu: 28848.114290399586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 22848.38076709273,
            "unit": "ns/iter",
            "extra": "iterations: 30583\ncpu: 22848.27845535116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 22844.69969745347,
            "unit": "ns/iter",
            "extra": "iterations: 30739\ncpu: 22843.986466703493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 23886.739352241606,
            "unit": "ns/iter",
            "extra": "iterations: 29795\ncpu: 23874.921966772912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 52635.41502629854,
            "unit": "ns/iter",
            "extra": "iterations: 13310\ncpu: 52635.19158527482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 180707.55925639026,
            "unit": "ns/iter",
            "extra": "iterations: 3873\ncpu: 180704.67337980762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 152817.0620525091,
            "unit": "ns/iter",
            "extra": "iterations: 4609\ncpu: 152811.5643306597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 152063.7836193809,
            "unit": "ns/iter",
            "extra": "iterations: 4603\ncpu: 152057.54942428746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 153762.96257154577,
            "unit": "ns/iter",
            "extra": "iterations: 4542\ncpu: 153757.59577278834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 95683.00163979414,
            "unit": "ns/iter",
            "extra": "iterations: 7318\ncpu: 95677.64416507276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 151841.00325026934,
            "unit": "ns/iter",
            "extra": "iterations: 4615\ncpu: 151840.06500541954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5972.408652991007,
            "unit": "ns/iter",
            "extra": "iterations: 118017\ncpu: 5972.390418329595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 29606.341247672077,
            "unit": "ns/iter",
            "extra": "iterations: 23628\ncpu: 29606.28491620124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 23706.297438844096,
            "unit": "ns/iter",
            "extra": "iterations: 29596\ncpu: 23706.173131504223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 22411.6115892868,
            "unit": "ns/iter",
            "extra": "iterations: 31253\ncpu: 22411.25331968139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 24699.447626438305,
            "unit": "ns/iter",
            "extra": "iterations: 28354\ncpu: 24699.319320025166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 51873.27066330498,
            "unit": "ns/iter",
            "extra": "iterations: 13478\ncpu: 51868.96423801782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 178737.87084399353,
            "unit": "ns/iter",
            "extra": "iterations: 3910\ncpu: 178729.84654731315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 148129.79514997406,
            "unit": "ns/iter",
            "extra": "iterations: 4701\ncpu: 148121.42097426084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 147341.1287878822,
            "unit": "ns/iter",
            "extra": "iterations: 4752\ncpu: 147334.51178450897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 148722.68339686567,
            "unit": "ns/iter",
            "extra": "iterations: 4722\ncpu: 148721.70690385546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 94764.28445708114,
            "unit": "ns/iter",
            "extra": "iterations: 7386\ncpu: 94764.12131058726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 149166.6798124048,
            "unit": "ns/iter",
            "extra": "iterations: 4691\ncpu: 149158.75079940323 ns\nthreads: 1"
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
          "id": "6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d",
          "message": "fail-fast: false",
          "timestamp": "2023-12-13T17:51:42+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d"
        },
        "date": 1702479538932,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1620.0114417918219,
            "unit": "ns/iter",
            "extra": "iterations: 428342\ncpu: 1620.0027081164117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 19392.797907683645,
            "unit": "ns/iter",
            "extra": "iterations: 42441\ncpu: 19393.00911854104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 40410.583942316254,
            "unit": "ns/iter",
            "extra": "iterations: 20526\ncpu: 40410.250414108916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 59685.35267002371,
            "unit": "ns/iter",
            "extra": "iterations: 14101\ncpu: 59685.33437344871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 65868.44833559231,
            "unit": "ns/iter",
            "extra": "iterations: 13278\ncpu: 65868.72269920165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 82507.0809221139,
            "unit": "ns/iter",
            "extra": "iterations: 10541\ncpu: 82507.38070391807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 98872.20678624403,
            "unit": "ns/iter",
            "extra": "iterations: 8753\ncpu: 98871.74682965843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 114595.77560142084,
            "unit": "ns/iter",
            "extra": "iterations: 7607\ncpu: 114593.79518864217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 131889.99582431078,
            "unit": "ns/iter",
            "extra": "iterations: 6466\ncpu: 131888.66377977116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1462.5513198936421,
            "unit": "ns/iter",
            "extra": "iterations: 477690\ncpu: 1462.522347128891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1208.2452943463254,
            "unit": "ns/iter",
            "extra": "iterations: 581322\ncpu: 1208.2257337585718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1213.4800039453673,
            "unit": "ns/iter",
            "extra": "iterations: 577889\ncpu: 1213.485807828145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1206.8454337027201,
            "unit": "ns/iter",
            "extra": "iterations: 580974\ncpu: 1206.8390323835495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2137.681997431951,
            "unit": "ns/iter",
            "extra": "iterations: 327881\ncpu: 2137.692333499042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7360.603967471429,
            "unit": "ns/iter",
            "extra": "iterations: 110549\ncpu: 7360.484491040176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 38620.659680218145,
            "unit": "ns/iter",
            "extra": "iterations: 21327\ncpu: 38620.54672480899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 30897.2844837266,
            "unit": "ns/iter",
            "extra": "iterations: 26701\ncpu: 30896.940189506062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30390.014462809646,
            "unit": "ns/iter",
            "extra": "iterations: 27104\ncpu: 30389.935064935038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 30492.673935618717,
            "unit": "ns/iter",
            "extra": "iterations: 26964\ncpu: 30492.493695297344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 70166.20042694644,
            "unit": "ns/iter",
            "extra": "iterations: 12648\ncpu: 70165.53605313078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 658143.6230000008,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 658146.6999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 530553.8659999911,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 530556.1999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 529238.0310000055,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 529232.8000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 533611.9830000143,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 533608.6000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 383655.9294957572,
            "unit": "ns/iter",
            "extra": "iterations: 2241\ncpu: 383653.14591700205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 526394.2260000078,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 526379.200000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2748145.059171614,
            "unit": "ns/iter",
            "extra": "iterations: 338\ncpu: 2748136.98224852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1269205.5212620113,
            "unit": "ns/iter",
            "extra": "iterations: 729\ncpu: 1269186.5569272966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3755860.645161227,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3755840.322580648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10367.192251804412,
            "unit": "ns/iter",
            "extra": "iterations: 83271\ncpu: 10367.012525369017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 53878.61834376779,
            "unit": "ns/iter",
            "extra": "iterations: 15493\ncpu: 53878.2353320855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 42609.86986582005,
            "unit": "ns/iter",
            "extra": "iterations: 19526\ncpu: 42609.16214278394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 42539.83955033276,
            "unit": "ns/iter",
            "extra": "iterations: 19570\ncpu: 42539.61676034763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 42069.71091192981,
            "unit": "ns/iter",
            "extra": "iterations: 19859\ncpu: 42069.862530842634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 79794.42703703785,
            "unit": "ns/iter",
            "extra": "iterations: 10800\ncpu: 79793.91666666672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 701992.6268199093,
            "unit": "ns/iter",
            "extra": "iterations: 1305\ncpu: 701988.3524904186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 563479.8490000037,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 563472.0999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 563932.0029999908,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 563932.5 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 557236.9260000017,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 557238.4000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 402996.4660194092,
            "unit": "ns/iter",
            "extra": "iterations: 2163\ncpu: 402993.29634766735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 541887.349999996,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 541881.7999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2878465.2546584373,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2878416.459627338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1274058.9349593672,
            "unit": "ns/iter",
            "extra": "iterations: 738\ncpu: 1274024.9322493284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7635.035469671537,
            "unit": "ns/iter",
            "extra": "iterations: 113590\ncpu: 7634.99779910205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 38791.58082178914,
            "unit": "ns/iter",
            "extra": "iterations: 21368\ncpu: 38791.342193934775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 30561.379902231485,
            "unit": "ns/iter",
            "extra": "iterations: 27207\ncpu: 30560.888741867795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 30432.93000110204,
            "unit": "ns/iter",
            "extra": "iterations: 27229\ncpu: 30433.06034007856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 29399.407103922877,
            "unit": "ns/iter",
            "extra": "iterations: 28069\ncpu: 29399.19484128403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 66859.1758833149,
            "unit": "ns/iter",
            "extra": "iterations: 12821\ncpu: 66858.71616878537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 675799.2084527212,
            "unit": "ns/iter",
            "extra": "iterations: 1396\ncpu: 675796.0601719206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 543134.1540000004,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 543136.7999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 547487.407999995,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 547489.6000000058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 541561.540999993,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 541555.0000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 390561.9484902339,
            "unit": "ns/iter",
            "extra": "iterations: 2252\ncpu: 390559.41385435325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 528943.8399999824,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 528938.5999999965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 738.0116081575937,
            "unit": "ns/iter",
            "extra": "iterations: 950280\ncpu: 738.0020625499824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4214.761350014523,
            "unit": "ns/iter",
            "extra": "iterations: 171850\ncpu: 4214.724469013658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3226.4369201773593,
            "unit": "ns/iter",
            "extra": "iterations: 224961\ncpu: 3226.3774609821544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3307.0631023590236,
            "unit": "ns/iter",
            "extra": "iterations: 211149\ncpu: 3307.0395786861222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2553.4612996983647,
            "unit": "ns/iter",
            "extra": "iterations: 273525\ncpu: 2553.47226030528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 19140.23438144766,
            "unit": "ns/iter",
            "extra": "iterations: 36351\ncpu: 19140.081428296293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 36917.46216444661,
            "unit": "ns/iter",
            "extra": "iterations: 18924\ncpu: 36917.09469456747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 9166.144503329899,
            "unit": "ns/iter",
            "extra": "iterations: 77929\ncpu: 9165.997253910546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8954.470895284318,
            "unit": "ns/iter",
            "extra": "iterations: 78355\ncpu: 8954.50832748389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8944.79777420005,
            "unit": "ns/iter",
            "extra": "iterations: 78264\ncpu: 8944.841817438377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 17897.94909239384,
            "unit": "ns/iter",
            "extra": "iterations: 39169\ncpu: 17897.819704357924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 16925.084782188886,
            "unit": "ns/iter",
            "extra": "iterations: 41412\ncpu: 16924.9034096397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5708.119117851337,
            "unit": "ns/iter",
            "extra": "iterations: 122383\ncpu: 5708.077102211917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 28539.06725193931,
            "unit": "ns/iter",
            "extra": "iterations: 24490\ncpu: 28539.175173540625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 22564.374113761034,
            "unit": "ns/iter",
            "extra": "iterations: 30889\ncpu: 22564.207322995477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 22963.953239768292,
            "unit": "ns/iter",
            "extra": "iterations: 30496\ncpu: 22963.85099685228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 23152.29241649605,
            "unit": "ns/iter",
            "extra": "iterations: 30118\ncpu: 23152.154857560312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 52244.115384615245,
            "unit": "ns/iter",
            "extra": "iterations: 13442\ncpu: 52244.405594405405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 180597.5609504197,
            "unit": "ns/iter",
            "extra": "iterations: 3872\ncpu: 180595.0413223139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 148140.06202370411,
            "unit": "ns/iter",
            "extra": "iterations: 4724\ncpu: 148137.70110076293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 150001.89997866788,
            "unit": "ns/iter",
            "extra": "iterations: 4689\ncpu: 149999.18959266337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 150415.0090167435,
            "unit": "ns/iter",
            "extra": "iterations: 4658\ncpu: 150413.78273937048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 95308.75616401141,
            "unit": "ns/iter",
            "extra": "iterations: 7341\ncpu: 95306.87917177606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 149954.6378053935,
            "unit": "ns/iter",
            "extra": "iterations: 4666\ncpu: 149955.31504500646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5817.650724264257,
            "unit": "ns/iter",
            "extra": "iterations: 120329\ncpu: 5817.624180372083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 27962.348997843466,
            "unit": "ns/iter",
            "extra": "iterations: 25046\ncpu: 27962.4650642816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 23454.964026127993,
            "unit": "ns/iter",
            "extra": "iterations: 29855\ncpu: 23454.82498743914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 22996.177267817046,
            "unit": "ns/iter",
            "extra": "iterations: 30547\ncpu: 22996.28114053764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 24190.20782142249,
            "unit": "ns/iter",
            "extra": "iterations: 28895\ncpu: 24189.337255580544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 51899.23035330469,
            "unit": "ns/iter",
            "extra": "iterations: 13501\ncpu: 51898.08903044186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 178455.9781170448,
            "unit": "ns/iter",
            "extra": "iterations: 3930\ncpu: 178450.91603053323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 148828.42275729807,
            "unit": "ns/iter",
            "extra": "iterations: 4693\ncpu: 148819.1135734091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 147623.06812907962,
            "unit": "ns/iter",
            "extra": "iterations: 4741\ncpu: 147620.1856148479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 148826.4101123622,
            "unit": "ns/iter",
            "extra": "iterations: 4628\ncpu: 148814.54191875717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 95222.91923024642,
            "unit": "ns/iter",
            "extra": "iterations: 7379\ncpu: 95218.26805800264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 149174.42729020954,
            "unit": "ns/iter",
            "extra": "iterations: 4683\ncpu: 149170.2968182796 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T20:22:18+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702488560593,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1607.5751203811164,
            "unit": "ns/iter",
            "extra": "iterations: 429677\ncpu: 1607.4693316142125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 19273.467594627095,
            "unit": "ns/iter",
            "extra": "iterations: 43249\ncpu: 19272.318435108326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 39753.96304827948,
            "unit": "ns/iter",
            "extra": "iterations: 20838\ncpu: 39751.38688933679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 59367.09975291205,
            "unit": "ns/iter",
            "extra": "iterations: 14165\ncpu: 59367.49735262976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 65563.1759550556,
            "unit": "ns/iter",
            "extra": "iterations: 13350\ncpu: 65558.4794007491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 82415.65874587066,
            "unit": "ns/iter",
            "extra": "iterations: 10605\ncpu: 82411.78689297501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 98827.7548986339,
            "unit": "ns/iter",
            "extra": "iterations: 8829\ncpu: 98822.23354853327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 113818.04971143922,
            "unit": "ns/iter",
            "extra": "iterations: 7624\ncpu: 113815.01836306394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 132044.50515305644,
            "unit": "ns/iter",
            "extra": "iterations: 6501\ncpu: 132037.88647900324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1482.5093408137054,
            "unit": "ns/iter",
            "extra": "iterations: 484112\ncpu: 1482.4150196648698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1180.274254770032,
            "unit": "ns/iter",
            "extra": "iterations: 592770\ncpu: 1180.2382036877727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1218.9062474725667,
            "unit": "ns/iter",
            "extra": "iterations: 568774\ncpu: 1218.8719948520854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1189.4154849148551,
            "unit": "ns/iter",
            "extra": "iterations: 588392\ncpu: 1189.349617261961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2145.4687384364547,
            "unit": "ns/iter",
            "extra": "iterations: 326999\ncpu: 2145.4839311435226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7230.593586736432,
            "unit": "ns/iter",
            "extra": "iterations: 112548\ncpu: 7230.640260155658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 38814.46931340481,
            "unit": "ns/iter",
            "extra": "iterations: 21410\ncpu: 38813.47501167684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 30513.895954829808,
            "unit": "ns/iter",
            "extra": "iterations: 26921\ncpu: 30513.63619479212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30257.431012167777,
            "unit": "ns/iter",
            "extra": "iterations: 27041\ncpu: 30256.998631707385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 28003.394682604903,
            "unit": "ns/iter",
            "extra": "iterations: 29112\ncpu: 28002.638087386687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 69054.01524917672,
            "unit": "ns/iter",
            "extra": "iterations: 12722\ncpu: 69053.23848451508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 666364.384120171,
            "unit": "ns/iter",
            "extra": "iterations: 1398\ncpu: 666342.9184549353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 537907.6450000185,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 537890.6999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 535870.6160000111,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 535867.7999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 533363.5569999728,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 533321.1999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 390105.661909003,
            "unit": "ns/iter",
            "extra": "iterations: 2242\ncpu: 390087.0651204277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 531526.0969999826,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 531530.0000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2746346.988200622,
            "unit": "ns/iter",
            "extra": "iterations: 339\ncpu: 2746256.0471976413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1276448.5529573353,
            "unit": "ns/iter",
            "extra": "iterations: 727\ncpu: 1276383.218707015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3748664.016194356,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3748606.4777327892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 9991.911264273622,
            "unit": "ns/iter",
            "extra": "iterations: 83281\ncpu: 9991.36657821114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 53040.94233746286,
            "unit": "ns/iter",
            "extra": "iterations: 15504\ncpu: 53039.957430340604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 41898.22555746311,
            "unit": "ns/iter",
            "extra": "iterations: 19822\ncpu: 41897.00837453346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 41625.06756080273,
            "unit": "ns/iter",
            "extra": "iterations: 19982\ncpu: 41624.69722750483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 40941.519584734524,
            "unit": "ns/iter",
            "extra": "iterations: 19939\ncpu: 40940.774361803335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 81734.28994360544,
            "unit": "ns/iter",
            "extra": "iterations: 10640\ncpu: 81732.96052631606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 695490.7678437161,
            "unit": "ns/iter",
            "extra": "iterations: 1331\ncpu: 695467.3929376449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 559548.2080000238,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 559553.1000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 556532.3030000399,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 556527.8000000049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 555695.2949999641,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 555690.9000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 402436.621149415,
            "unit": "ns/iter",
            "extra": "iterations: 2175\ncpu: 402431.7701149441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 542910.3480000208,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 542887.8000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2886336.5820434103,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 2886321.362229097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1240480.0666666536,
            "unit": "ns/iter",
            "extra": "iterations: 750\ncpu: 1240452.4 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7306.947785386035,
            "unit": "ns/iter",
            "extra": "iterations: 112593\ncpu: 7306.658495643567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 38505.60340734553,
            "unit": "ns/iter",
            "extra": "iterations: 21483\ncpu: 38503.34217753569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 30351.04400960035,
            "unit": "ns/iter",
            "extra": "iterations: 27085\ncpu: 30350.950710725407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 30205.324474502864,
            "unit": "ns/iter",
            "extra": "iterations: 27355\ncpu: 30204.975324437924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 29747.977475700827,
            "unit": "ns/iter",
            "extra": "iterations: 27881\ncpu: 29747.354829453732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 67424.38573631819,
            "unit": "ns/iter",
            "extra": "iterations: 12970\ncpu: 67423.63145720903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 674455.6465949776,
            "unit": "ns/iter",
            "extra": "iterations: 1395\ncpu: 674453.6200716831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 536399.2789999656,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 536396.5000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 536932.8019999671,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 536925.3999999942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 536856.8989999858,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 536850.600000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 393702.3559842202,
            "unit": "ns/iter",
            "extra": "iterations: 2281\ncpu: 393697.23805348517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 522914.59599996416,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522909.49999999726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 677.1838292877665,
            "unit": "ns/iter",
            "extra": "iterations: 1034302\ncpu: 677.1756218203195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3967.2493715918276,
            "unit": "ns/iter",
            "extra": "iterations: 176239\ncpu: 3967.1417790613586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3106.4738303741588,
            "unit": "ns/iter",
            "extra": "iterations: 225414\ncpu: 3106.3997799604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3022.346670577181,
            "unit": "ns/iter",
            "extra": "iterations: 231857\ncpu: 3022.368528877711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2468.833136925641,
            "unit": "ns/iter",
            "extra": "iterations: 283424\ncpu: 2468.792692220838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 18975.58290027914,
            "unit": "ns/iter",
            "extra": "iterations: 36562\ncpu: 18975.080684864068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 34763.966054589124,
            "unit": "ns/iter",
            "extra": "iterations: 20150\ncpu: 34762.704714640175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8866.507002481558,
            "unit": "ns/iter",
            "extra": "iterations: 78972\ncpu: 8866.414678620258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8780.978444377492,
            "unit": "ns/iter",
            "extra": "iterations: 79608\ncpu: 8780.921515425649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8889.278323186305,
            "unit": "ns/iter",
            "extra": "iterations: 78840\ncpu: 8889.131151699605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 17701.285506894805,
            "unit": "ns/iter",
            "extra": "iterations: 41330\ncpu: 17700.85652068719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 16740.46098168984,
            "unit": "ns/iter",
            "extra": "iterations: 41724\ncpu: 16740.00814878723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5631.373068308441,
            "unit": "ns/iter",
            "extra": "iterations: 124567\ncpu: 5631.343774836024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 28615.492653979356,
            "unit": "ns/iter",
            "extra": "iterations: 24435\ncpu: 28615.039901780132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 22587.966392829727,
            "unit": "ns/iter",
            "extra": "iterations: 30797\ncpu: 22587.203299022312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 22862.297483061757,
            "unit": "ns/iter",
            "extra": "iterations: 30553\ncpu: 22861.594606093964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 23268.54088656705,
            "unit": "ns/iter",
            "extra": "iterations: 30071\ncpu: 23268.434704532698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 52122.07821937335,
            "unit": "ns/iter",
            "extra": "iterations: 13411\ncpu: 52121.78062784296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 179479.4464331382,
            "unit": "ns/iter",
            "extra": "iterations: 3911\ncpu: 179476.68115571293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 149900.05255255522,
            "unit": "ns/iter",
            "extra": "iterations: 4662\ncpu: 149897.81209781152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 150437.72754491385,
            "unit": "ns/iter",
            "extra": "iterations: 4676\ncpu: 150437.04020530367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 151636.2497833634,
            "unit": "ns/iter",
            "extra": "iterations: 4616\ncpu: 151635.52859618643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 95563.17645433676,
            "unit": "ns/iter",
            "extra": "iterations: 7237\ncpu: 95561.76592510717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 150716.08433734172,
            "unit": "ns/iter",
            "extra": "iterations: 4648\ncpu: 150713.16695353005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5710.327971909053,
            "unit": "ns/iter",
            "extra": "iterations: 123599\ncpu: 5710.196684439178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 27866.714538009863,
            "unit": "ns/iter",
            "extra": "iterations: 24914\ncpu: 27864.461748414633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 24073.235273996754,
            "unit": "ns/iter",
            "extra": "iterations: 29234\ncpu: 24072.959567627004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 23563.093942643332,
            "unit": "ns/iter",
            "extra": "iterations: 29848\ncpu: 23562.68091664457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 24660.66522800418,
            "unit": "ns/iter",
            "extra": "iterations: 28267\ncpu: 24660.827112887935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 51442.52362435871,
            "unit": "ns/iter",
            "extra": "iterations: 13630\ncpu: 51440.78503301482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 178492.3284690228,
            "unit": "ns/iter",
            "extra": "iterations: 3906\ncpu: 178493.67639528972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 148405.36259299447,
            "unit": "ns/iter",
            "extra": "iterations: 4705\ncpu: 148401.29649309127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 148099.5918798811,
            "unit": "ns/iter",
            "extra": "iterations: 4729\ncpu: 148097.22985831948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 149777.37021917052,
            "unit": "ns/iter",
            "extra": "iterations: 4654\ncpu: 149771.83068328327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 95559.74124062629,
            "unit": "ns/iter",
            "extra": "iterations: 7335\ncpu: 95554.71029311366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 149369.57276995375,
            "unit": "ns/iter",
            "extra": "iterations: 4686\ncpu: 149370.72129748206 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T20:22:18+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702490826844,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1603.4239460539184,
            "unit": "ns/iter",
            "extra": "iterations: 403365\ncpu: 1603.2866014651743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 19278.969873754126,
            "unit": "ns/iter",
            "extra": "iterations: 42853\ncpu: 19277.784519170185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 41090.12230145618,
            "unit": "ns/iter",
            "extra": "iterations: 20474\ncpu: 41086.60740451304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 59585.82983699506,
            "unit": "ns/iter",
            "extra": "iterations: 14110\ncpu: 59581.126860382676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 66550.09681577081,
            "unit": "ns/iter",
            "extra": "iterations: 13190\ncpu: 66546.27748294157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 83560.72043319537,
            "unit": "ns/iter",
            "extra": "iterations: 10434\ncpu: 83561.10791642699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 98566.5056668533,
            "unit": "ns/iter",
            "extra": "iterations: 8735\ncpu: 98563.8351459645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 115378.95059104201,
            "unit": "ns/iter",
            "extra": "iterations: 7529\ncpu: 115380.11688139205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 133697.97822705662,
            "unit": "ns/iter",
            "extra": "iterations: 6430\ncpu: 133694.99222395022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1467.3531571280478,
            "unit": "ns/iter",
            "extra": "iterations: 476414\ncpu: 1467.3609507697088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1192.102617325591,
            "unit": "ns/iter",
            "extra": "iterations: 585827\ncpu: 1192.0358740720387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1168.8247615014761,
            "unit": "ns/iter",
            "extra": "iterations: 599794\ncpu: 1168.7792808864365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1168.4305373688978,
            "unit": "ns/iter",
            "extra": "iterations: 601021\ncpu: 1168.3849649180308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2138.0996745726866,
            "unit": "ns/iter",
            "extra": "iterations: 330335\ncpu: 2138.0144398867806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7355.700192957177,
            "unit": "ns/iter",
            "extra": "iterations: 111942\ncpu: 7355.2580800771775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 39229.77526912359,
            "unit": "ns/iter",
            "extra": "iterations: 20994\ncpu: 39228.07945127178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 30740.9865699395,
            "unit": "ns/iter",
            "extra": "iterations: 26880\ncpu: 30739.196428571424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30465.37542218888,
            "unit": "ns/iter",
            "extra": "iterations: 26943\ncpu: 30464.02405077384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 29772.003274104263,
            "unit": "ns/iter",
            "extra": "iterations: 27183\ncpu: 29770.213000772528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 69800.25322391419,
            "unit": "ns/iter",
            "extra": "iterations: 12795\ncpu: 69799.79679562328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 676259.4331896753,
            "unit": "ns/iter",
            "extra": "iterations: 1392\ncpu: 676192.528735632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 536193.5760000165,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 536184.5000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 533227.2580000107,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 533230.1000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 533888.2660000195,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 533880.100000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 391827.86109830375,
            "unit": "ns/iter",
            "extra": "iterations: 2167\ncpu: 391824.59621596686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 524687.3300000061,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 524655.5999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2735894.9735293984,
            "unit": "ns/iter",
            "extra": "iterations: 340\ncpu: 2735759.9999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1249247.7506738075,
            "unit": "ns/iter",
            "extra": "iterations: 742\ncpu: 1249237.8706199483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3723571.586345244,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3723479.9196787113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10414.613748200647,
            "unit": "ns/iter",
            "extra": "iterations: 79865\ncpu: 10414.326676266182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 56354.095293082006,
            "unit": "ns/iter",
            "extra": "iterations: 14723\ncpu: 56354.370712490534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 43893.58762614197,
            "unit": "ns/iter",
            "extra": "iterations: 18927\ncpu: 43892.14349870561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 44027.642227966324,
            "unit": "ns/iter",
            "extra": "iterations: 18959\ncpu: 44026.87378026277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 41518.67006667457,
            "unit": "ns/iter",
            "extra": "iterations: 20098\ncpu: 41518.8675490096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 79609.52066887956,
            "unit": "ns/iter",
            "extra": "iterations: 9628\ncpu: 79608.77648525148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 696457.7972972925,
            "unit": "ns/iter",
            "extra": "iterations: 1332\ncpu: 696419.7447447442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 557976.0169999872,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 557958.400000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 555466.5299999898,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 555285.5000000037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 549584.1759999961,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 549578.6999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 401920.58910433855,
            "unit": "ns/iter",
            "extra": "iterations: 2166\ncpu: 401922.6685133889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 539600.552999957,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 539570.3000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2882621.4520124295,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 2882578.6377708875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1251147.2500000126,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 1251091.129032259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7267.9833480417765,
            "unit": "ns/iter",
            "extra": "iterations: 112179\ncpu: 7268.013621087695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 38530.749729143776,
            "unit": "ns/iter",
            "extra": "iterations: 21229\ncpu: 38529.25243770311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 30520.438695619057,
            "unit": "ns/iter",
            "extra": "iterations: 27078\ncpu: 30519.53246177707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 30312.53008638196,
            "unit": "ns/iter",
            "extra": "iterations: 27205\ncpu: 30311.9242786254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 29677.07048601083,
            "unit": "ns/iter",
            "extra": "iterations: 27736\ncpu: 29676.85679261609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 67134.35235961809,
            "unit": "ns/iter",
            "extra": "iterations: 12947\ncpu: 67133.79161195643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 679679.1154400875,
            "unit": "ns/iter",
            "extra": "iterations: 1386\ncpu: 679666.9552669516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 542630.7509999902,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 542609.9999999963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 538880.1899999862,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 538883.3999999961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 538255.0939999647,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 538258.2999999955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 391234.0699020489,
            "unit": "ns/iter",
            "extra": "iterations: 2246\ncpu: 391224.04274265526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 526710.4160000144,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 526692.4000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 708.5416666666728,
            "unit": "ns/iter",
            "extra": "iterations: 988512\ncpu: 708.5245297983274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4109.247321743302,
            "unit": "ns/iter",
            "extra": "iterations: 170260\ncpu: 4109.268178080579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3282.771309035377,
            "unit": "ns/iter",
            "extra": "iterations: 220376\ncpu: 3282.5956546992234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3232.796436554496,
            "unit": "ns/iter",
            "extra": "iterations: 216532\ncpu: 3232.7425045720584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2511.921154860317,
            "unit": "ns/iter",
            "extra": "iterations: 278787\ncpu: 2511.8581569441917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 19151.551697783594,
            "unit": "ns/iter",
            "extra": "iterations: 36636\ncpu: 19151.689594933905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 37704.901188274955,
            "unit": "ns/iter",
            "extra": "iterations: 20534\ncpu: 37702.94633291106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 9028.816862045183,
            "unit": "ns/iter",
            "extra": "iterations: 77286\ncpu: 9028.605439536279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8961.275817832182,
            "unit": "ns/iter",
            "extra": "iterations: 77950\ncpu: 8961.07119948684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 9015.928759894541,
            "unit": "ns/iter",
            "extra": "iterations: 77695\ncpu: 9015.972713816862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 17973.212401357952,
            "unit": "ns/iter",
            "extra": "iterations: 39157\ncpu: 17973.32022371486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 18114.669481716366,
            "unit": "ns/iter",
            "extra": "iterations: 38010\ncpu: 18114.33570113133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5703.706425220493,
            "unit": "ns/iter",
            "extra": "iterations: 123202\ncpu: 5703.512929984905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 28626.624744627396,
            "unit": "ns/iter",
            "extra": "iterations: 24474\ncpu: 28624.148075508903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 22670.381812287047,
            "unit": "ns/iter",
            "extra": "iterations: 30845\ncpu: 22670.504133570983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 22871.693227872613,
            "unit": "ns/iter",
            "extra": "iterations: 30596\ncpu: 22870.460190874706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 23426.545860998314,
            "unit": "ns/iter",
            "extra": "iterations: 29971\ncpu: 23425.94841680332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 52290.827960207054,
            "unit": "ns/iter",
            "extra": "iterations: 13369\ncpu: 52288.98197322177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 183052.19368310872,
            "unit": "ns/iter",
            "extra": "iterations: 3831\ncpu: 183053.19759853883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 152603.48781018748,
            "unit": "ns/iter",
            "extra": "iterations: 4594\ncpu: 152601.8720069629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 152211.22862736703,
            "unit": "ns/iter",
            "extra": "iterations: 4597\ncpu: 152209.854252774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 152672.38232092996,
            "unit": "ns/iter",
            "extra": "iterations: 4593\ncpu: 152668.01654692064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 96555.85179558085,
            "unit": "ns/iter",
            "extra": "iterations: 7240\ncpu: 96552.16850828801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 151851.2189464541,
            "unit": "ns/iter",
            "extra": "iterations: 4613\ncpu: 151852.0702362891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5614.095198521893,
            "unit": "ns/iter",
            "extra": "iterations: 123941\ncpu: 5613.921139897241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 28857.914041534117,
            "unit": "ns/iter",
            "extra": "iterations: 24221\ncpu: 28858.052929276502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 23440.32640304858,
            "unit": "ns/iter",
            "extra": "iterations: 29917\ncpu: 23439.806798809826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 23200.782240173306,
            "unit": "ns/iter",
            "extra": "iterations: 30203\ncpu: 23200.897261861646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 24667.25732430545,
            "unit": "ns/iter",
            "extra": "iterations: 28501\ncpu: 24667.060804884153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 51331.5292316665,
            "unit": "ns/iter",
            "extra": "iterations: 13718\ncpu: 51330.325120280344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 178444.28797146404,
            "unit": "ns/iter",
            "extra": "iterations: 3924\ncpu: 178437.51274209793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 148241.12016079016,
            "unit": "ns/iter",
            "extra": "iterations: 4727\ncpu: 148232.2614766246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 149026.5158077091,
            "unit": "ns/iter",
            "extra": "iterations: 4618\ncpu: 149027.15461238546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 148652.11713620566,
            "unit": "ns/iter",
            "extra": "iterations: 4721\ncpu: 148644.73628468474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 94787.28120769511,
            "unit": "ns/iter",
            "extra": "iterations: 7386\ncpu: 94787.86894124032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 148889.09516713506,
            "unit": "ns/iter",
            "extra": "iterations: 4697\ncpu: 148885.13945071373 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "380c708d79f348a900173c4fb482ef4fb63a6372",
          "message": "Update parser.hpp",
          "timestamp": "2024-01-18T13:25:10+03:00",
          "tree_id": "728a97bf0015154eea5578165c8b4ccc440a3077",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/380c708d79f348a900173c4fb482ef4fb63a6372"
        },
        "date": 1705573943569,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1645.4538475068462,
            "unit": "ns/iter",
            "extra": "iterations: 420714\ncpu: 1645.3315078652008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 19249.322538526896,
            "unit": "ns/iter",
            "extra": "iterations: 42891\ncpu: 19247.84919913268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 40216.83991875266,
            "unit": "ns/iter",
            "extra": "iterations: 20677\ncpu: 40215.00701262273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 60124.222198747695,
            "unit": "ns/iter",
            "extra": "iterations: 14199\ncpu: 60119.825339812654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 67146.57649112311,
            "unit": "ns/iter",
            "extra": "iterations: 13178\ncpu: 67145.15100925784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 83382.66487832916,
            "unit": "ns/iter",
            "extra": "iterations: 10438\ncpu: 83377.37114389722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 99325.02080713748,
            "unit": "ns/iter",
            "extra": "iterations: 8747\ncpu: 99322.80781982387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 113876.77259665713,
            "unit": "ns/iter",
            "extra": "iterations: 7656\ncpu: 113867.5940438871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 133599.49871542805,
            "unit": "ns/iter",
            "extra": "iterations: 6617\ncpu: 133590.47906906452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1445.642093881596,
            "unit": "ns/iter",
            "extra": "iterations: 480925\ncpu: 1445.6116858137946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1197.7054328994793,
            "unit": "ns/iter",
            "extra": "iterations: 585286\ncpu: 1197.683525660957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1209.2214857154681,
            "unit": "ns/iter",
            "extra": "iterations: 579613\ncpu: 1209.2152867516788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1249.2503644941246,
            "unit": "ns/iter",
            "extra": "iterations: 564481\ncpu: 1249.2494875823968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2199.0747819817107,
            "unit": "ns/iter",
            "extra": "iterations: 321762\ncpu: 2199.0284744624937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7351.618922066811,
            "unit": "ns/iter",
            "extra": "iterations: 110749\ncpu: 7351.499336337112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 38657.91571441978,
            "unit": "ns/iter",
            "extra": "iterations: 21178\ncpu: 38657.394465955214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 30430.640360722547,
            "unit": "ns/iter",
            "extra": "iterations: 26724\ncpu: 30428.35653345305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30365.195970425484,
            "unit": "ns/iter",
            "extra": "iterations: 27050\ncpu: 30363.534195933426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 30235.934821657975,
            "unit": "ns/iter",
            "extra": "iterations: 27279\ncpu: 30234.583379156207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 70511.80078616408,
            "unit": "ns/iter",
            "extra": "iterations: 12720\ncpu: 70507.32704402535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 667743.8580644968,
            "unit": "ns/iter",
            "extra": "iterations: 1395\ncpu: 667714.6953405016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 529242.0479999578,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 529239.3000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 533788.6069999627,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 533768.600000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 526000.2040000131,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 525964.3999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 383894.56573703646,
            "unit": "ns/iter",
            "extra": "iterations: 2259\ncpu: 383870.11952191254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 527955.9649999896,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 527938.2999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2723057.2827380546,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2722896.428571423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1237041.5153129632,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 1236946.3382157136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3741331.7630522437,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3741153.8152610376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10179.18099695262,
            "unit": "ns/iter",
            "extra": "iterations: 82692\ncpu: 10178.901223818502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 55311.26190475927,
            "unit": "ns/iter",
            "extra": "iterations: 15078\ncpu: 55310.206923995305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 42422.084244906,
            "unit": "ns/iter",
            "extra": "iterations: 19289\ncpu: 42421.758515215995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 42404.54127694378,
            "unit": "ns/iter",
            "extra": "iterations: 19672\ncpu: 42403.11102074004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 41760.39487877376,
            "unit": "ns/iter",
            "extra": "iterations: 19839\ncpu: 41760.20464741167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 81091.17040359142,
            "unit": "ns/iter",
            "extra": "iterations: 10704\ncpu: 81088.20067264563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 700941.8291761389,
            "unit": "ns/iter",
            "extra": "iterations: 1323\ncpu: 700923.1292517027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 559462.3239999806,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 559398.0000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 557374.9570000359,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 557358.5999999935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 550024.9709999707,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 550020.6000000035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 399678.9732061858,
            "unit": "ns/iter",
            "extra": "iterations: 2202\ncpu: 399665.1680290628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 536882.6910000165,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 536877.3000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2872684.2438270818,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2872530.864197536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1297968.415041783,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 1297927.4373259093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7365.442784211113,
            "unit": "ns/iter",
            "extra": "iterations: 112434\ncpu: 7365.207143746578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 38342.19688926178,
            "unit": "ns/iter",
            "extra": "iterations: 21474\ncpu: 38341.501350470375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 30327.22149098652,
            "unit": "ns/iter",
            "extra": "iterations: 27351\ncpu: 30326.152608679804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 30270.861999782974,
            "unit": "ns/iter",
            "extra": "iterations: 27413\ncpu: 30270.368073541867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 29588.792985856653,
            "unit": "ns/iter",
            "extra": "iterations: 27858\ncpu: 29587.762940627366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 67352.0402409827,
            "unit": "ns/iter",
            "extra": "iterations: 12947\ncpu: 67348.32007414849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 669702.0171550855,
            "unit": "ns/iter",
            "extra": "iterations: 1399\ncpu: 669655.1107934231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 538786.5150000266,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 538782.5999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 543871.7079999833,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 543827.3000000038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 545949.004000022,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 545914.7000000044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 387379.13935144205,
            "unit": "ns/iter",
            "extra": "iterations: 2282\ncpu: 387362.62050832825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 531221.6430000376,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 531190.3999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 701.5859189128681,
            "unit": "ns/iter",
            "extra": "iterations: 999937\ncpu: 701.5690988532302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4095.7065103863224,
            "unit": "ns/iter",
            "extra": "iterations: 172340\ncpu: 4095.521063014964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3252.9115962343903,
            "unit": "ns/iter",
            "extra": "iterations: 221891\ncpu: 3252.8894817725723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3217.6415415548922,
            "unit": "ns/iter",
            "extra": "iterations: 217339\ncpu: 3217.509512788783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2408.1571636096924,
            "unit": "ns/iter",
            "extra": "iterations: 291187\ncpu: 2408.0539309790647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 19312.922356797793,
            "unit": "ns/iter",
            "extra": "iterations: 35998\ncpu: 19312.036779820955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 37312.11286609107,
            "unit": "ns/iter",
            "extra": "iterations: 18677\ncpu: 37311.388338598284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8916.491587137041,
            "unit": "ns/iter",
            "extra": "iterations: 78273\ncpu: 8916.200988846726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8942.612647066268,
            "unit": "ns/iter",
            "extra": "iterations: 78706\ncpu: 8942.402104032748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 9027.666722578597,
            "unit": "ns/iter",
            "extra": "iterations: 77503\ncpu: 9027.717636736663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 17667.62674745998,
            "unit": "ns/iter",
            "extra": "iterations: 39772\ncpu: 17666.871165644086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 16944.11612497604,
            "unit": "ns/iter",
            "extra": "iterations: 41352\ncpu: 16943.966434513484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5700.694921327917,
            "unit": "ns/iter",
            "extra": "iterations: 122788\ncpu: 5700.406391504066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 28726.71192856872,
            "unit": "ns/iter",
            "extra": "iterations: 24303\ncpu: 28725.844545940636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 23061.974359824533,
            "unit": "ns/iter",
            "extra": "iterations: 30148\ncpu: 23060.770200345047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 22726.94491111594,
            "unit": "ns/iter",
            "extra": "iterations: 30714\ncpu: 22726.802109787077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 23260.88946442353,
            "unit": "ns/iter",
            "extra": "iterations: 30117\ncpu: 23259.720423681007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 52559.83773274807,
            "unit": "ns/iter",
            "extra": "iterations: 13373\ncpu: 52558.38630075556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 181660.4388470469,
            "unit": "ns/iter",
            "extra": "iterations: 3851\ncpu: 181658.11477538603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 151016.69952442675,
            "unit": "ns/iter",
            "extra": "iterations: 4626\ncpu: 151011.8893212257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 149742.11807643616,
            "unit": "ns/iter",
            "extra": "iterations: 4658\ncpu: 149740.940317734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 151161.46985087372,
            "unit": "ns/iter",
            "extra": "iterations: 4627\ncpu: 151152.30170737056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 94099.45138038513,
            "unit": "ns/iter",
            "extra": "iterations: 7353\ncpu: 94096.19203046372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 150277.95956354542,
            "unit": "ns/iter",
            "extra": "iterations: 4674\ncpu: 150275.26743688426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5993.407506955647,
            "unit": "ns/iter",
            "extra": "iterations: 116452\ncpu: 5993.326005564513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 29487.840993265505,
            "unit": "ns/iter",
            "extra": "iterations: 23760\ncpu: 29486.72138047126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 23272.204766812883,
            "unit": "ns/iter",
            "extra": "iterations: 30083\ncpu: 23271.38250839355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 22838.04378822033,
            "unit": "ns/iter",
            "extra": "iterations: 30579\ncpu: 22838.176526374606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 23840.819757307654,
            "unit": "ns/iter",
            "extra": "iterations: 29255\ncpu: 23839.85985301633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 52645.21526477186,
            "unit": "ns/iter",
            "extra": "iterations: 13351\ncpu: 52644.85057299104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 176396.17589329928,
            "unit": "ns/iter",
            "extra": "iterations: 3974\ncpu: 176385.20382486293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 146308.04430912374,
            "unit": "ns/iter",
            "extra": "iterations: 4762\ncpu: 146305.1448971026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 146924.45708915207,
            "unit": "ns/iter",
            "extra": "iterations: 4789\ncpu: 146918.25015660925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 146619.54904831637,
            "unit": "ns/iter",
            "extra": "iterations: 4781\ncpu: 146618.2597782895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 93765.22122710668,
            "unit": "ns/iter",
            "extra": "iterations: 7481\ncpu: 93764.61702980817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 148162.55776555307,
            "unit": "ns/iter",
            "extra": "iterations: 4726\ncpu: 148156.64409648915 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T20:20:02+03:00",
          "tree_id": "728a97bf0015154eea5578165c8b4ccc440a3077",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705771602800,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1630.427784598965,
            "unit": "ns/iter",
            "extra": "iterations: 432477\ncpu: 1630.394679948298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 19174.79739707493,
            "unit": "ns/iter",
            "extra": "iterations: 42798\ncpu: 19173.959063507642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 40795.48351539876,
            "unit": "ns/iter",
            "extra": "iterations: 20231\ncpu: 40794.36508328802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 59544.2867459638,
            "unit": "ns/iter",
            "extra": "iterations: 14124\ncpu: 59543.24553950721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 66886.32776379118,
            "unit": "ns/iter",
            "extra": "iterations: 13107\ncpu: 66885.67177843903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 83931.73447782519,
            "unit": "ns/iter",
            "extra": "iterations: 10485\ncpu: 83930.92036242255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 103101.648992055,
            "unit": "ns/iter",
            "extra": "iterations: 8185\ncpu: 103093.97678680516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 114873.01039747862,
            "unit": "ns/iter",
            "extra": "iterations: 7598\ncpu: 114867.00447486168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 133997.38426650112,
            "unit": "ns/iter",
            "extra": "iterations: 6394\ncpu: 133990.56928370343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1423.4210314922857,
            "unit": "ns/iter",
            "extra": "iterations: 487992\ncpu: 1423.4022279053765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1190.7968802736586,
            "unit": "ns/iter",
            "extra": "iterations: 589603\ncpu: 1190.735291374026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1174.8367091671653,
            "unit": "ns/iter",
            "extra": "iterations: 594816\ncpu: 1174.8007787282127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1186.7540959484427,
            "unit": "ns/iter",
            "extra": "iterations: 591255\ncpu: 1186.705566971951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2136.364956628652,
            "unit": "ns/iter",
            "extra": "iterations: 329135\ncpu: 2136.248347942335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7350.369122243477,
            "unit": "ns/iter",
            "extra": "iterations: 113266\ncpu: 7349.781046386384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 38492.473846298235,
            "unit": "ns/iter",
            "extra": "iterations: 21431\ncpu: 38491.35831272459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 30530.995163105737,
            "unit": "ns/iter",
            "extra": "iterations: 26670\ncpu: 30530.232470941097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30484.393242190446,
            "unit": "ns/iter",
            "extra": "iterations: 26991\ncpu: 30483.853877218247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 29944.72274381462,
            "unit": "ns/iter",
            "extra": "iterations: 27480\ncpu: 29943.875545851533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 68891.38340807342,
            "unit": "ns/iter",
            "extra": "iterations: 12488\ncpu: 68890.21460602176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 657491.7406876782,
            "unit": "ns/iter",
            "extra": "iterations: 1396\ncpu: 657452.0057306585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 531405.9350000093,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 531383.2999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 528388.3210000227,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 528382.4000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 535510.2609999563,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 535455.9999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 386668.80931066204,
            "unit": "ns/iter",
            "extra": "iterations: 2234\ncpu: 386655.46105640085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 529435.594000006,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 529397.5000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2722246.73887237,
            "unit": "ns/iter",
            "extra": "iterations: 337\ncpu: 2722156.9732937613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1225008.8687002715,
            "unit": "ns/iter",
            "extra": "iterations: 754\ncpu: 1224934.748010609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3736421.3012049543,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3736261.4457831243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 9913.449025327294,
            "unit": "ns/iter",
            "extra": "iterations: 84336\ncpu: 9913.101166761548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 53289.70925365334,
            "unit": "ns/iter",
            "extra": "iterations: 15529\ncpu: 53289.36183913956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 42131.966512528335,
            "unit": "ns/iter",
            "extra": "iterations: 19679\ncpu: 42130.438538543705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 42585.83380927938,
            "unit": "ns/iter",
            "extra": "iterations: 19610\ncpu: 42584.34982151971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 41177.91235358934,
            "unit": "ns/iter",
            "extra": "iterations: 19978\ncpu: 41175.162678946814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 80937.01722523737,
            "unit": "ns/iter",
            "extra": "iterations: 10682\ncpu: 80935.20876240406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 698136.5749811648,
            "unit": "ns/iter",
            "extra": "iterations: 1327\ncpu: 698124.5666917845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 560618.780000027,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 560619.299999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 558975.6149999516,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 558964.2999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 560889.297000017,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 560890.0999999946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 401982.91153310344,
            "unit": "ns/iter",
            "extra": "iterations: 2159\ncpu: 401968.1333950913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 545119.8790000263,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 545121.2999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2887714.610062952,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2887691.823899355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1263892.7404890936,
            "unit": "ns/iter",
            "extra": "iterations: 736\ncpu: 1263881.3858695687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7196.81322569241,
            "unit": "ns/iter",
            "extra": "iterations: 113340\ncpu: 7196.676371978103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 36467.895778365324,
            "unit": "ns/iter",
            "extra": "iterations: 21982\ncpu: 36466.44982258215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 28294.907182015028,
            "unit": "ns/iter",
            "extra": "iterations: 29003\ncpu: 28294.604006481975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 28145.013379446245,
            "unit": "ns/iter",
            "extra": "iterations: 28626\ncpu: 28144.662195207253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 27653.800228810338,
            "unit": "ns/iter",
            "extra": "iterations: 29719\ncpu: 27653.501127225016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 66996.58962588798,
            "unit": "ns/iter",
            "extra": "iterations: 13071\ncpu: 66995.9375717235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 673002.6470165454,
            "unit": "ns/iter",
            "extra": "iterations: 1391\ncpu: 673002.3005032373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 541824.8119999588,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 541825.4999999945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 536172.0980000086,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 536157.7000000039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 538742.2229999857,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 538724.7000000031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 383256.7984258998,
            "unit": "ns/iter",
            "extra": "iterations: 2287\ncpu: 383236.1609094885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 526550.46000001,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 526543.5999999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 717.5596658161592,
            "unit": "ns/iter",
            "extra": "iterations: 977067\ncpu: 717.5401482191055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4121.677017676959,
            "unit": "ns/iter",
            "extra": "iterations: 175313\ncpu: 4121.5534501149505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3245.4192854471144,
            "unit": "ns/iter",
            "extra": "iterations: 224532\ncpu: 3245.322270322253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3244.503621504101,
            "unit": "ns/iter",
            "extra": "iterations: 215104\ncpu: 3244.349245016376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2501.8782464198125,
            "unit": "ns/iter",
            "extra": "iterations: 272608\ncpu: 2501.800754196508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 19307.97307130427,
            "unit": "ns/iter",
            "extra": "iterations: 36281\ncpu: 19307.268267137137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 36779.69167960755,
            "unit": "ns/iter",
            "extra": "iterations: 19963\ncpu: 36778.6755497671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8838.740027336042,
            "unit": "ns/iter",
            "extra": "iterations: 79016\ncpu: 8838.584590462766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8848.165310383847,
            "unit": "ns/iter",
            "extra": "iterations: 79015\ncpu: 8847.61247864325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 9000.372594669798,
            "unit": "ns/iter",
            "extra": "iterations: 77744\ncpu: 8999.83792961512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 17836.485476227528,
            "unit": "ns/iter",
            "extra": "iterations: 39246\ncpu: 17835.440554451514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 17139.18672759875,
            "unit": "ns/iter",
            "extra": "iterations: 40701\ncpu: 17138.429031227723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5685.615160733515,
            "unit": "ns/iter",
            "extra": "iterations: 121630\ncpu: 5685.265148400871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 28477.30268199335,
            "unit": "ns/iter",
            "extra": "iterations: 24534\ncpu: 28476.396021847373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 22734.848937206774,
            "unit": "ns/iter",
            "extra": "iterations: 30815\ncpu: 22734.398831738075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 24448.268308658404,
            "unit": "ns/iter",
            "extra": "iterations: 30532\ncpu: 24447.966068386962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 23009.904700641902,
            "unit": "ns/iter",
            "extra": "iterations: 30315\ncpu: 23009.315520369404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 52586.09385088999,
            "unit": "ns/iter",
            "extra": "iterations: 13319\ncpu: 52585.689616337484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 179727.75114621187,
            "unit": "ns/iter",
            "extra": "iterations: 3926\ncpu: 179717.06571574102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 151650.5623775278,
            "unit": "ns/iter",
            "extra": "iterations: 4593\ncpu: 151637.97082516868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 150520.41282051086,
            "unit": "ns/iter",
            "extra": "iterations: 4680\ncpu: 150515.47008547216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 151833.81315330288,
            "unit": "ns/iter",
            "extra": "iterations: 4592\ncpu: 151826.11062717534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 96537.9588738621,
            "unit": "ns/iter",
            "extra": "iterations: 7246\ncpu: 96533.30113165951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 151502.47609692256,
            "unit": "ns/iter",
            "extra": "iterations: 4581\ncpu: 151498.55926653548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 6124.75458822064,
            "unit": "ns/iter",
            "extra": "iterations: 114151\ncpu: 6124.4220374766655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 29005.175737380985,
            "unit": "ns/iter",
            "extra": "iterations: 24309\ncpu: 29003.706446172437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 23547.07858592803,
            "unit": "ns/iter",
            "extra": "iterations: 29560\ncpu: 23546.268606224694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 22777.65682284472,
            "unit": "ns/iter",
            "extra": "iterations: 30713\ncpu: 22776.423664246453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 23976.058122359027,
            "unit": "ns/iter",
            "extra": "iterations: 29111\ncpu: 23974.79646868916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 53371.68833308264,
            "unit": "ns/iter",
            "extra": "iterations: 13354\ncpu: 53369.986520892795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 176983.33105196388,
            "unit": "ns/iter",
            "extra": "iterations: 3945\ncpu: 176977.997465146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 148344.58222221606,
            "unit": "ns/iter",
            "extra": "iterations: 4725\ncpu: 148340.40211640275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 146910.06704378704,
            "unit": "ns/iter",
            "extra": "iterations: 4773\ncpu: 146907.35386549577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 148322.23832871375,
            "unit": "ns/iter",
            "extra": "iterations: 4691\ncpu: 148317.45896397415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 95699.44061984973,
            "unit": "ns/iter",
            "extra": "iterations: 7292\ncpu: 95696.16017553395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 148561.91824166445,
            "unit": "ns/iter",
            "extra": "iterations: 4709\ncpu: 148557.33701422805 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}