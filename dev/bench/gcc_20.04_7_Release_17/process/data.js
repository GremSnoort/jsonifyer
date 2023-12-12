window.BENCHMARK_DATA = {
  "lastUpdate": 1702397887458,
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
      }
    ]
  }
}