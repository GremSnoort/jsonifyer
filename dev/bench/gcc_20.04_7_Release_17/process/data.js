window.BENCHMARK_DATA = {
  "lastUpdate": 1702412538541,
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
      }
    ]
  }
}