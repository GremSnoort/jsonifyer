window.BENCHMARK_DATA = {
  "lastUpdate": 1702392470537,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-10 20.04 Debug c++-17": [
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
        "date": 1702392464894,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8203.581304281468,
            "unit": "ns/iter",
            "extra": "iterations: 85549\ncpu: 8202.97490327181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 59795.93439999462,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59790.63 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 110308.03536647778,
            "unit": "ns/iter",
            "extra": "iterations: 7804\ncpu: 110302.60123013839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 160826.34265473703,
            "unit": "ns/iter",
            "extra": "iterations: 5364\ncpu: 160820.2833706189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 210224.20271251947,
            "unit": "ns/iter",
            "extra": "iterations: 4129\ncpu: 210216.63841123748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 261884.73037437926,
            "unit": "ns/iter",
            "extra": "iterations: 3312\ncpu: 261864.46256038666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 310571.93028246606,
            "unit": "ns/iter",
            "extra": "iterations: 2797\ncpu: 310558.09796210215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 362116.75978350814,
            "unit": "ns/iter",
            "extra": "iterations: 2402\ncpu: 362100.7910074936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 411351.7348484793,
            "unit": "ns/iter",
            "extra": "iterations: 2112\ncpu: 411331.8655303036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6762.260730017006,
            "unit": "ns/iter",
            "extra": "iterations: 103751\ncpu: 6761.9704870314545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5493.258892968652,
            "unit": "ns/iter",
            "extra": "iterations: 126898\ncpu: 5492.9723084682055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5511.4890271007325,
            "unit": "ns/iter",
            "extra": "iterations: 126858\ncpu: 5511.167604723387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5546.095400840411,
            "unit": "ns/iter",
            "extra": "iterations: 126110\ncpu: 5546.0177622710335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8870.957431915935,
            "unit": "ns/iter",
            "extra": "iterations: 78580\ncpu: 8870.72410282515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26424.74148752904,
            "unit": "ns/iter",
            "extra": "iterations: 30749\ncpu: 26423.974763406943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 130653.614056536,
            "unit": "ns/iter",
            "extra": "iterations: 6545\ncpu: 130647.47135217702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 103037.19997590808,
            "unit": "ns/iter",
            "extra": "iterations: 8301\ncpu: 103034.09227803873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 101746.72755454919,
            "unit": "ns/iter",
            "extra": "iterations: 8387\ncpu: 101742.4108739716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 97497.14816939984,
            "unit": "ns/iter",
            "extra": "iterations: 8713\ncpu: 97494.02042924362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 227503.78351309034,
            "unit": "ns/iter",
            "extra": "iterations: 3894\ncpu: 227490.96045197715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1981424.3525643102,
            "unit": "ns/iter",
            "extra": "iterations: 468\ncpu: 1981361.5384615362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1550954.2562396305,
            "unit": "ns/iter",
            "extra": "iterations: 601\ncpu: 1550862.2296173042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1536810.054455537,
            "unit": "ns/iter",
            "extra": "iterations: 606\ncpu: 1536793.06930693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1507740.6693811407,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1507671.661237785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 816663.3816725984,
            "unit": "ns/iter",
            "extra": "iterations: 1124\ncpu: 816637.3665480432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1484578.5136437486,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1484482.1829855533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36058.99786594375,
            "unit": "ns/iter",
            "extra": "iterations: 22961\ncpu: 36057.86768868954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 167899.24887935474,
            "unit": "ns/iter",
            "extra": "iterations: 5131\ncpu: 167893.43207951682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 130578.75364520572,
            "unit": "ns/iter",
            "extra": "iterations: 6584\ncpu: 130572.64580801952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 130417.68540687556,
            "unit": "ns/iter",
            "extra": "iterations: 6599\ncpu: 130410.4106682831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 126213.85585983472,
            "unit": "ns/iter",
            "extra": "iterations: 6792\ncpu: 126210.76266195522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 250656.3008900142,
            "unit": "ns/iter",
            "extra": "iterations: 3483\ncpu: 250637.72609819076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2019518.678958803,
            "unit": "ns/iter",
            "extra": "iterations: 461\ncpu: 2019452.7114967539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1586829.0101867134,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1586757.7249575546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1587566.6609880244,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1587500.000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1541809.2135760824,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1541732.2847682112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 852550.5197067155,
            "unit": "ns/iter",
            "extra": "iterations: 1091\ncpu: 852520.9899175074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1522446.1435562759,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1522351.549755306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5249719.659999528,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5249513.999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3149707.545454592,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3149573.7373737297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25043.062228343955,
            "unit": "ns/iter",
            "extra": "iterations: 32670\ncpu: 25041.824303642516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 132218.8000294876,
            "unit": "ns/iter",
            "extra": "iterations: 6786\ncpu: 132210.7721780142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 104809.75772000161,
            "unit": "ns/iter",
            "extra": "iterations: 8193\ncpu: 104805.12632735251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 103413.88772781572,
            "unit": "ns/iter",
            "extra": "iterations: 8230\ncpu: 103409.39246658601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 94225.11487989462,
            "unit": "ns/iter",
            "extra": "iterations: 8992\ncpu: 94220.41814946577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 225332.56379667527,
            "unit": "ns/iter",
            "extra": "iterations: 3856\ncpu: 225322.61410788455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1990700.9850428049,
            "unit": "ns/iter",
            "extra": "iterations: 468\ncpu: 1990593.3760683706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1563075.8566665766,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1563023.6666666756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1552057.242122656,
            "unit": "ns/iter",
            "extra": "iterations: 603\ncpu: 1551324.0464345035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1526678.8756138617,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1526635.1882160443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 821940.0619006823,
            "unit": "ns/iter",
            "extra": "iterations: 1147\ncpu: 821875.850043595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1490920.7568000054,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1490850.5600000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2882.9720902119975,
            "unit": "ns/iter",
            "extra": "iterations: 241564\ncpu: 2882.764401980419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18309.652313556562,
            "unit": "ns/iter",
            "extra": "iterations: 38296\ncpu: 18308.56486317113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15433.978259911051,
            "unit": "ns/iter",
            "extra": "iterations: 45308\ncpu: 15432.810982608033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15087.554548973847,
            "unit": "ns/iter",
            "extra": "iterations: 46472\ncpu: 15086.996470993317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11462.080600379315,
            "unit": "ns/iter",
            "extra": "iterations: 61228\ncpu: 11461.723394525414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 77214.21073559014,
            "unit": "ns/iter",
            "extra": "iterations: 9054\ncpu: 77210.58095869227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 136295.7849756063,
            "unit": "ns/iter",
            "extra": "iterations: 5125\ncpu: 136295.64878048695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 32977.096812219614,
            "unit": "ns/iter",
            "extra": "iterations: 21206\ncpu: 32976.03036876362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 32740.42751382396,
            "unit": "ns/iter",
            "extra": "iterations: 21342\ncpu: 32739.583919032793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32572.13860000786,
            "unit": "ns/iter",
            "extra": "iterations: 21443\ncpu: 32570.489203936257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 64954.5012066019,
            "unit": "ns/iter",
            "extra": "iterations: 10774\ncpu: 64953.68479673259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 61651.05344918742,
            "unit": "ns/iter",
            "extra": "iterations: 11394\ncpu: 61644.72529401421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23132.911293787172,
            "unit": "ns/iter",
            "extra": "iterations: 30291\ncpu: 23132.095341850785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 120457.83938090918,
            "unit": "ns/iter",
            "extra": "iterations: 5815\ncpu: 120453.63714531335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 96701.47146402953,
            "unit": "ns/iter",
            "extra": "iterations: 7254\ncpu: 96696.81555004096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 93328.71311143388,
            "unit": "ns/iter",
            "extra": "iterations: 7421\ncpu: 93325.72429591585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 93056.2481073163,
            "unit": "ns/iter",
            "extra": "iterations: 7529\ncpu: 93053.72559436719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 145923.58492922402,
            "unit": "ns/iter",
            "extra": "iterations: 4804\ncpu: 145915.65362198197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 585364.1003344603,
            "unit": "ns/iter",
            "extra": "iterations: 1196\ncpu: 585346.0702341074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 479337.27136024844,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 479330.07518797735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 482775.0907201992,
            "unit": "ns/iter",
            "extra": "iterations: 1444\ncpu: 482759.2105263105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 473299.3707713114,
            "unit": "ns/iter",
            "extra": "iterations: 1478\ncpu: 473279.3640054147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 293157.2354663415,
            "unit": "ns/iter",
            "extra": "iterations: 2391\ncpu: 293140.5687996658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 464969.5892501468,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 464947.04711346515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23300.72567698224,
            "unit": "ns/iter",
            "extra": "iterations: 30023\ncpu: 23299.963361422742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 117442.73446139177,
            "unit": "ns/iter",
            "extra": "iterations: 5969\ncpu: 117440.05696096449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 95940.77002865588,
            "unit": "ns/iter",
            "extra": "iterations: 7327\ncpu: 95935.70356216861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 96268.6805937301,
            "unit": "ns/iter",
            "extra": "iterations: 7276\ncpu: 96267.27597581108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 94664.33662162893,
            "unit": "ns/iter",
            "extra": "iterations: 7400\ncpu: 94659.28378378446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 147233.82091119076,
            "unit": "ns/iter",
            "extra": "iterations: 4763\ncpu: 147228.4694520274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 581523.0748129499,
            "unit": "ns/iter",
            "extra": "iterations: 1203\ncpu: 581513.8819617665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 478859.9357484385,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 478839.78127135435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 483309.01035197487,
            "unit": "ns/iter",
            "extra": "iterations: 1449\ncpu: 483295.0310558994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 467645.97590360726,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 467640.6291833978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 292401.6281301795,
            "unit": "ns/iter",
            "extra": "iterations: 2396\ncpu: 292379.0901502505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 466275.8179384093,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 466261.57965194096 ns\nthreads: 1"
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
        "date": 1702392464894,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8203.581304281468,
            "unit": "ns/iter",
            "extra": "iterations: 85549\ncpu: 8202.97490327181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 59795.93439999462,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59790.63 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 110308.03536647778,
            "unit": "ns/iter",
            "extra": "iterations: 7804\ncpu: 110302.60123013839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 160826.34265473703,
            "unit": "ns/iter",
            "extra": "iterations: 5364\ncpu: 160820.2833706189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 210224.20271251947,
            "unit": "ns/iter",
            "extra": "iterations: 4129\ncpu: 210216.63841123748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 261884.73037437926,
            "unit": "ns/iter",
            "extra": "iterations: 3312\ncpu: 261864.46256038666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 310571.93028246606,
            "unit": "ns/iter",
            "extra": "iterations: 2797\ncpu: 310558.09796210215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 362116.75978350814,
            "unit": "ns/iter",
            "extra": "iterations: 2402\ncpu: 362100.7910074936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 411351.7348484793,
            "unit": "ns/iter",
            "extra": "iterations: 2112\ncpu: 411331.8655303036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6762.260730017006,
            "unit": "ns/iter",
            "extra": "iterations: 103751\ncpu: 6761.9704870314545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5493.258892968652,
            "unit": "ns/iter",
            "extra": "iterations: 126898\ncpu: 5492.9723084682055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5511.4890271007325,
            "unit": "ns/iter",
            "extra": "iterations: 126858\ncpu: 5511.167604723387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5546.095400840411,
            "unit": "ns/iter",
            "extra": "iterations: 126110\ncpu: 5546.0177622710335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8870.957431915935,
            "unit": "ns/iter",
            "extra": "iterations: 78580\ncpu: 8870.72410282515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26424.74148752904,
            "unit": "ns/iter",
            "extra": "iterations: 30749\ncpu: 26423.974763406943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 130653.614056536,
            "unit": "ns/iter",
            "extra": "iterations: 6545\ncpu: 130647.47135217702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 103037.19997590808,
            "unit": "ns/iter",
            "extra": "iterations: 8301\ncpu: 103034.09227803873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 101746.72755454919,
            "unit": "ns/iter",
            "extra": "iterations: 8387\ncpu: 101742.4108739716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 97497.14816939984,
            "unit": "ns/iter",
            "extra": "iterations: 8713\ncpu: 97494.02042924362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 227503.78351309034,
            "unit": "ns/iter",
            "extra": "iterations: 3894\ncpu: 227490.96045197715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1981424.3525643102,
            "unit": "ns/iter",
            "extra": "iterations: 468\ncpu: 1981361.5384615362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1550954.2562396305,
            "unit": "ns/iter",
            "extra": "iterations: 601\ncpu: 1550862.2296173042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1536810.054455537,
            "unit": "ns/iter",
            "extra": "iterations: 606\ncpu: 1536793.06930693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1507740.6693811407,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1507671.661237785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 816663.3816725984,
            "unit": "ns/iter",
            "extra": "iterations: 1124\ncpu: 816637.3665480432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1484578.5136437486,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1484482.1829855533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36058.99786594375,
            "unit": "ns/iter",
            "extra": "iterations: 22961\ncpu: 36057.86768868954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 167899.24887935474,
            "unit": "ns/iter",
            "extra": "iterations: 5131\ncpu: 167893.43207951682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 130578.75364520572,
            "unit": "ns/iter",
            "extra": "iterations: 6584\ncpu: 130572.64580801952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 130417.68540687556,
            "unit": "ns/iter",
            "extra": "iterations: 6599\ncpu: 130410.4106682831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 126213.85585983472,
            "unit": "ns/iter",
            "extra": "iterations: 6792\ncpu: 126210.76266195522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 250656.3008900142,
            "unit": "ns/iter",
            "extra": "iterations: 3483\ncpu: 250637.72609819076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2019518.678958803,
            "unit": "ns/iter",
            "extra": "iterations: 461\ncpu: 2019452.7114967539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1586829.0101867134,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1586757.7249575546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1587566.6609880244,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1587500.000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1541809.2135760824,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1541732.2847682112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 852550.5197067155,
            "unit": "ns/iter",
            "extra": "iterations: 1091\ncpu: 852520.9899175074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1522446.1435562759,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1522351.549755306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5249719.659999528,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5249513.999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3149707.545454592,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3149573.7373737297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25043.062228343955,
            "unit": "ns/iter",
            "extra": "iterations: 32670\ncpu: 25041.824303642516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 132218.8000294876,
            "unit": "ns/iter",
            "extra": "iterations: 6786\ncpu: 132210.7721780142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 104809.75772000161,
            "unit": "ns/iter",
            "extra": "iterations: 8193\ncpu: 104805.12632735251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 103413.88772781572,
            "unit": "ns/iter",
            "extra": "iterations: 8230\ncpu: 103409.39246658601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 94225.11487989462,
            "unit": "ns/iter",
            "extra": "iterations: 8992\ncpu: 94220.41814946577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 225332.56379667527,
            "unit": "ns/iter",
            "extra": "iterations: 3856\ncpu: 225322.61410788455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1990700.9850428049,
            "unit": "ns/iter",
            "extra": "iterations: 468\ncpu: 1990593.3760683706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1563075.8566665766,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1563023.6666666756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1552057.242122656,
            "unit": "ns/iter",
            "extra": "iterations: 603\ncpu: 1551324.0464345035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1526678.8756138617,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1526635.1882160443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 821940.0619006823,
            "unit": "ns/iter",
            "extra": "iterations: 1147\ncpu: 821875.850043595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1490920.7568000054,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1490850.5600000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2882.9720902119975,
            "unit": "ns/iter",
            "extra": "iterations: 241564\ncpu: 2882.764401980419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18309.652313556562,
            "unit": "ns/iter",
            "extra": "iterations: 38296\ncpu: 18308.56486317113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15433.978259911051,
            "unit": "ns/iter",
            "extra": "iterations: 45308\ncpu: 15432.810982608033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15087.554548973847,
            "unit": "ns/iter",
            "extra": "iterations: 46472\ncpu: 15086.996470993317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11462.080600379315,
            "unit": "ns/iter",
            "extra": "iterations: 61228\ncpu: 11461.723394525414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 77214.21073559014,
            "unit": "ns/iter",
            "extra": "iterations: 9054\ncpu: 77210.58095869227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 136295.7849756063,
            "unit": "ns/iter",
            "extra": "iterations: 5125\ncpu: 136295.64878048695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 32977.096812219614,
            "unit": "ns/iter",
            "extra": "iterations: 21206\ncpu: 32976.03036876362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 32740.42751382396,
            "unit": "ns/iter",
            "extra": "iterations: 21342\ncpu: 32739.583919032793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32572.13860000786,
            "unit": "ns/iter",
            "extra": "iterations: 21443\ncpu: 32570.489203936257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 64954.5012066019,
            "unit": "ns/iter",
            "extra": "iterations: 10774\ncpu: 64953.68479673259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 61651.05344918742,
            "unit": "ns/iter",
            "extra": "iterations: 11394\ncpu: 61644.72529401421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23132.911293787172,
            "unit": "ns/iter",
            "extra": "iterations: 30291\ncpu: 23132.095341850785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 120457.83938090918,
            "unit": "ns/iter",
            "extra": "iterations: 5815\ncpu: 120453.63714531335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 96701.47146402953,
            "unit": "ns/iter",
            "extra": "iterations: 7254\ncpu: 96696.81555004096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 93328.71311143388,
            "unit": "ns/iter",
            "extra": "iterations: 7421\ncpu: 93325.72429591585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 93056.2481073163,
            "unit": "ns/iter",
            "extra": "iterations: 7529\ncpu: 93053.72559436719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 145923.58492922402,
            "unit": "ns/iter",
            "extra": "iterations: 4804\ncpu: 145915.65362198197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 585364.1003344603,
            "unit": "ns/iter",
            "extra": "iterations: 1196\ncpu: 585346.0702341074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 479337.27136024844,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 479330.07518797735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 482775.0907201992,
            "unit": "ns/iter",
            "extra": "iterations: 1444\ncpu: 482759.2105263105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 473299.3707713114,
            "unit": "ns/iter",
            "extra": "iterations: 1478\ncpu: 473279.3640054147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 293157.2354663415,
            "unit": "ns/iter",
            "extra": "iterations: 2391\ncpu: 293140.5687996658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 464969.5892501468,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 464947.04711346515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23300.72567698224,
            "unit": "ns/iter",
            "extra": "iterations: 30023\ncpu: 23299.963361422742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 117442.73446139177,
            "unit": "ns/iter",
            "extra": "iterations: 5969\ncpu: 117440.05696096449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 95940.77002865588,
            "unit": "ns/iter",
            "extra": "iterations: 7327\ncpu: 95935.70356216861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 96268.6805937301,
            "unit": "ns/iter",
            "extra": "iterations: 7276\ncpu: 96267.27597581108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 94664.33662162893,
            "unit": "ns/iter",
            "extra": "iterations: 7400\ncpu: 94659.28378378446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 147233.82091119076,
            "unit": "ns/iter",
            "extra": "iterations: 4763\ncpu: 147228.4694520274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 581523.0748129499,
            "unit": "ns/iter",
            "extra": "iterations: 1203\ncpu: 581513.8819617665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 478859.9357484385,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 478839.78127135435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 483309.01035197487,
            "unit": "ns/iter",
            "extra": "iterations: 1449\ncpu: 483295.0310558994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 467645.97590360726,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 467640.6291833978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 292401.6281301795,
            "unit": "ns/iter",
            "extra": "iterations: 2396\ncpu: 292379.0901502505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 466275.8179384093,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 466261.57965194096 ns\nthreads: 1"
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
        "date": 1702392464894,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8203.581304281468,
            "unit": "ns/iter",
            "extra": "iterations: 85549\ncpu: 8202.97490327181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 59795.93439999462,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59790.63 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 110308.03536647778,
            "unit": "ns/iter",
            "extra": "iterations: 7804\ncpu: 110302.60123013839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 160826.34265473703,
            "unit": "ns/iter",
            "extra": "iterations: 5364\ncpu: 160820.2833706189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 210224.20271251947,
            "unit": "ns/iter",
            "extra": "iterations: 4129\ncpu: 210216.63841123748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 261884.73037437926,
            "unit": "ns/iter",
            "extra": "iterations: 3312\ncpu: 261864.46256038666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 310571.93028246606,
            "unit": "ns/iter",
            "extra": "iterations: 2797\ncpu: 310558.09796210215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 362116.75978350814,
            "unit": "ns/iter",
            "extra": "iterations: 2402\ncpu: 362100.7910074936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 411351.7348484793,
            "unit": "ns/iter",
            "extra": "iterations: 2112\ncpu: 411331.8655303036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6762.260730017006,
            "unit": "ns/iter",
            "extra": "iterations: 103751\ncpu: 6761.9704870314545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5493.258892968652,
            "unit": "ns/iter",
            "extra": "iterations: 126898\ncpu: 5492.9723084682055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5511.4890271007325,
            "unit": "ns/iter",
            "extra": "iterations: 126858\ncpu: 5511.167604723387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5546.095400840411,
            "unit": "ns/iter",
            "extra": "iterations: 126110\ncpu: 5546.0177622710335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8870.957431915935,
            "unit": "ns/iter",
            "extra": "iterations: 78580\ncpu: 8870.72410282515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26424.74148752904,
            "unit": "ns/iter",
            "extra": "iterations: 30749\ncpu: 26423.974763406943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 130653.614056536,
            "unit": "ns/iter",
            "extra": "iterations: 6545\ncpu: 130647.47135217702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 103037.19997590808,
            "unit": "ns/iter",
            "extra": "iterations: 8301\ncpu: 103034.09227803873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 101746.72755454919,
            "unit": "ns/iter",
            "extra": "iterations: 8387\ncpu: 101742.4108739716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 97497.14816939984,
            "unit": "ns/iter",
            "extra": "iterations: 8713\ncpu: 97494.02042924362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 227503.78351309034,
            "unit": "ns/iter",
            "extra": "iterations: 3894\ncpu: 227490.96045197715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1981424.3525643102,
            "unit": "ns/iter",
            "extra": "iterations: 468\ncpu: 1981361.5384615362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1550954.2562396305,
            "unit": "ns/iter",
            "extra": "iterations: 601\ncpu: 1550862.2296173042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1536810.054455537,
            "unit": "ns/iter",
            "extra": "iterations: 606\ncpu: 1536793.06930693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1507740.6693811407,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1507671.661237785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 816663.3816725984,
            "unit": "ns/iter",
            "extra": "iterations: 1124\ncpu: 816637.3665480432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1484578.5136437486,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1484482.1829855533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36058.99786594375,
            "unit": "ns/iter",
            "extra": "iterations: 22961\ncpu: 36057.86768868954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 167899.24887935474,
            "unit": "ns/iter",
            "extra": "iterations: 5131\ncpu: 167893.43207951682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 130578.75364520572,
            "unit": "ns/iter",
            "extra": "iterations: 6584\ncpu: 130572.64580801952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 130417.68540687556,
            "unit": "ns/iter",
            "extra": "iterations: 6599\ncpu: 130410.4106682831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 126213.85585983472,
            "unit": "ns/iter",
            "extra": "iterations: 6792\ncpu: 126210.76266195522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 250656.3008900142,
            "unit": "ns/iter",
            "extra": "iterations: 3483\ncpu: 250637.72609819076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2019518.678958803,
            "unit": "ns/iter",
            "extra": "iterations: 461\ncpu: 2019452.7114967539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1586829.0101867134,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1586757.7249575546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1587566.6609880244,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1587500.000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1541809.2135760824,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1541732.2847682112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 852550.5197067155,
            "unit": "ns/iter",
            "extra": "iterations: 1091\ncpu: 852520.9899175074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1522446.1435562759,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1522351.549755306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5249719.659999528,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5249513.999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3149707.545454592,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3149573.7373737297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25043.062228343955,
            "unit": "ns/iter",
            "extra": "iterations: 32670\ncpu: 25041.824303642516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 132218.8000294876,
            "unit": "ns/iter",
            "extra": "iterations: 6786\ncpu: 132210.7721780142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 104809.75772000161,
            "unit": "ns/iter",
            "extra": "iterations: 8193\ncpu: 104805.12632735251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 103413.88772781572,
            "unit": "ns/iter",
            "extra": "iterations: 8230\ncpu: 103409.39246658601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 94225.11487989462,
            "unit": "ns/iter",
            "extra": "iterations: 8992\ncpu: 94220.41814946577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 225332.56379667527,
            "unit": "ns/iter",
            "extra": "iterations: 3856\ncpu: 225322.61410788455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1990700.9850428049,
            "unit": "ns/iter",
            "extra": "iterations: 468\ncpu: 1990593.3760683706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1563075.8566665766,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1563023.6666666756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1552057.242122656,
            "unit": "ns/iter",
            "extra": "iterations: 603\ncpu: 1551324.0464345035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1526678.8756138617,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1526635.1882160443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 821940.0619006823,
            "unit": "ns/iter",
            "extra": "iterations: 1147\ncpu: 821875.850043595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1490920.7568000054,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1490850.5600000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2882.9720902119975,
            "unit": "ns/iter",
            "extra": "iterations: 241564\ncpu: 2882.764401980419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18309.652313556562,
            "unit": "ns/iter",
            "extra": "iterations: 38296\ncpu: 18308.56486317113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15433.978259911051,
            "unit": "ns/iter",
            "extra": "iterations: 45308\ncpu: 15432.810982608033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15087.554548973847,
            "unit": "ns/iter",
            "extra": "iterations: 46472\ncpu: 15086.996470993317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11462.080600379315,
            "unit": "ns/iter",
            "extra": "iterations: 61228\ncpu: 11461.723394525414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 77214.21073559014,
            "unit": "ns/iter",
            "extra": "iterations: 9054\ncpu: 77210.58095869227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 136295.7849756063,
            "unit": "ns/iter",
            "extra": "iterations: 5125\ncpu: 136295.64878048695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 32977.096812219614,
            "unit": "ns/iter",
            "extra": "iterations: 21206\ncpu: 32976.03036876362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 32740.42751382396,
            "unit": "ns/iter",
            "extra": "iterations: 21342\ncpu: 32739.583919032793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32572.13860000786,
            "unit": "ns/iter",
            "extra": "iterations: 21443\ncpu: 32570.489203936257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 64954.5012066019,
            "unit": "ns/iter",
            "extra": "iterations: 10774\ncpu: 64953.68479673259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 61651.05344918742,
            "unit": "ns/iter",
            "extra": "iterations: 11394\ncpu: 61644.72529401421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23132.911293787172,
            "unit": "ns/iter",
            "extra": "iterations: 30291\ncpu: 23132.095341850785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 120457.83938090918,
            "unit": "ns/iter",
            "extra": "iterations: 5815\ncpu: 120453.63714531335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 96701.47146402953,
            "unit": "ns/iter",
            "extra": "iterations: 7254\ncpu: 96696.81555004096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 93328.71311143388,
            "unit": "ns/iter",
            "extra": "iterations: 7421\ncpu: 93325.72429591585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 93056.2481073163,
            "unit": "ns/iter",
            "extra": "iterations: 7529\ncpu: 93053.72559436719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 145923.58492922402,
            "unit": "ns/iter",
            "extra": "iterations: 4804\ncpu: 145915.65362198197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 585364.1003344603,
            "unit": "ns/iter",
            "extra": "iterations: 1196\ncpu: 585346.0702341074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 479337.27136024844,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 479330.07518797735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 482775.0907201992,
            "unit": "ns/iter",
            "extra": "iterations: 1444\ncpu: 482759.2105263105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 473299.3707713114,
            "unit": "ns/iter",
            "extra": "iterations: 1478\ncpu: 473279.3640054147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 293157.2354663415,
            "unit": "ns/iter",
            "extra": "iterations: 2391\ncpu: 293140.5687996658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 464969.5892501468,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 464947.04711346515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23300.72567698224,
            "unit": "ns/iter",
            "extra": "iterations: 30023\ncpu: 23299.963361422742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 117442.73446139177,
            "unit": "ns/iter",
            "extra": "iterations: 5969\ncpu: 117440.05696096449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 95940.77002865588,
            "unit": "ns/iter",
            "extra": "iterations: 7327\ncpu: 95935.70356216861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 96268.6805937301,
            "unit": "ns/iter",
            "extra": "iterations: 7276\ncpu: 96267.27597581108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 94664.33662162893,
            "unit": "ns/iter",
            "extra": "iterations: 7400\ncpu: 94659.28378378446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 147233.82091119076,
            "unit": "ns/iter",
            "extra": "iterations: 4763\ncpu: 147228.4694520274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 581523.0748129499,
            "unit": "ns/iter",
            "extra": "iterations: 1203\ncpu: 581513.8819617665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 478859.9357484385,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 478839.78127135435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 483309.01035197487,
            "unit": "ns/iter",
            "extra": "iterations: 1449\ncpu: 483295.0310558994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 467645.97590360726,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 467640.6291833978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 292401.6281301795,
            "unit": "ns/iter",
            "extra": "iterations: 2396\ncpu: 292379.0901502505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 466275.8179384093,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 466261.57965194096 ns\nthreads: 1"
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
        "date": 1702392464894,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8203.581304281468,
            "unit": "ns/iter",
            "extra": "iterations: 85549\ncpu: 8202.97490327181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 59795.93439999462,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59790.63 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 110308.03536647778,
            "unit": "ns/iter",
            "extra": "iterations: 7804\ncpu: 110302.60123013839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 160826.34265473703,
            "unit": "ns/iter",
            "extra": "iterations: 5364\ncpu: 160820.2833706189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 210224.20271251947,
            "unit": "ns/iter",
            "extra": "iterations: 4129\ncpu: 210216.63841123748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 261884.73037437926,
            "unit": "ns/iter",
            "extra": "iterations: 3312\ncpu: 261864.46256038666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 310571.93028246606,
            "unit": "ns/iter",
            "extra": "iterations: 2797\ncpu: 310558.09796210215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 362116.75978350814,
            "unit": "ns/iter",
            "extra": "iterations: 2402\ncpu: 362100.7910074936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 411351.7348484793,
            "unit": "ns/iter",
            "extra": "iterations: 2112\ncpu: 411331.8655303036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6762.260730017006,
            "unit": "ns/iter",
            "extra": "iterations: 103751\ncpu: 6761.9704870314545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5493.258892968652,
            "unit": "ns/iter",
            "extra": "iterations: 126898\ncpu: 5492.9723084682055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5511.4890271007325,
            "unit": "ns/iter",
            "extra": "iterations: 126858\ncpu: 5511.167604723387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5546.095400840411,
            "unit": "ns/iter",
            "extra": "iterations: 126110\ncpu: 5546.0177622710335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8870.957431915935,
            "unit": "ns/iter",
            "extra": "iterations: 78580\ncpu: 8870.72410282515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26424.74148752904,
            "unit": "ns/iter",
            "extra": "iterations: 30749\ncpu: 26423.974763406943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 130653.614056536,
            "unit": "ns/iter",
            "extra": "iterations: 6545\ncpu: 130647.47135217702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 103037.19997590808,
            "unit": "ns/iter",
            "extra": "iterations: 8301\ncpu: 103034.09227803873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 101746.72755454919,
            "unit": "ns/iter",
            "extra": "iterations: 8387\ncpu: 101742.4108739716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 97497.14816939984,
            "unit": "ns/iter",
            "extra": "iterations: 8713\ncpu: 97494.02042924362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 227503.78351309034,
            "unit": "ns/iter",
            "extra": "iterations: 3894\ncpu: 227490.96045197715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1981424.3525643102,
            "unit": "ns/iter",
            "extra": "iterations: 468\ncpu: 1981361.5384615362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1550954.2562396305,
            "unit": "ns/iter",
            "extra": "iterations: 601\ncpu: 1550862.2296173042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1536810.054455537,
            "unit": "ns/iter",
            "extra": "iterations: 606\ncpu: 1536793.06930693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1507740.6693811407,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1507671.661237785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 816663.3816725984,
            "unit": "ns/iter",
            "extra": "iterations: 1124\ncpu: 816637.3665480432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1484578.5136437486,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1484482.1829855533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36058.99786594375,
            "unit": "ns/iter",
            "extra": "iterations: 22961\ncpu: 36057.86768868954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 167899.24887935474,
            "unit": "ns/iter",
            "extra": "iterations: 5131\ncpu: 167893.43207951682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 130578.75364520572,
            "unit": "ns/iter",
            "extra": "iterations: 6584\ncpu: 130572.64580801952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 130417.68540687556,
            "unit": "ns/iter",
            "extra": "iterations: 6599\ncpu: 130410.4106682831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 126213.85585983472,
            "unit": "ns/iter",
            "extra": "iterations: 6792\ncpu: 126210.76266195522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 250656.3008900142,
            "unit": "ns/iter",
            "extra": "iterations: 3483\ncpu: 250637.72609819076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2019518.678958803,
            "unit": "ns/iter",
            "extra": "iterations: 461\ncpu: 2019452.7114967539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1586829.0101867134,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1586757.7249575546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1587566.6609880244,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1587500.000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1541809.2135760824,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1541732.2847682112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 852550.5197067155,
            "unit": "ns/iter",
            "extra": "iterations: 1091\ncpu: 852520.9899175074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1522446.1435562759,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1522351.549755306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5249719.659999528,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5249513.999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3149707.545454592,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3149573.7373737297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25043.062228343955,
            "unit": "ns/iter",
            "extra": "iterations: 32670\ncpu: 25041.824303642516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 132218.8000294876,
            "unit": "ns/iter",
            "extra": "iterations: 6786\ncpu: 132210.7721780142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 104809.75772000161,
            "unit": "ns/iter",
            "extra": "iterations: 8193\ncpu: 104805.12632735251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 103413.88772781572,
            "unit": "ns/iter",
            "extra": "iterations: 8230\ncpu: 103409.39246658601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 94225.11487989462,
            "unit": "ns/iter",
            "extra": "iterations: 8992\ncpu: 94220.41814946577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 225332.56379667527,
            "unit": "ns/iter",
            "extra": "iterations: 3856\ncpu: 225322.61410788455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1990700.9850428049,
            "unit": "ns/iter",
            "extra": "iterations: 468\ncpu: 1990593.3760683706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1563075.8566665766,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1563023.6666666756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1552057.242122656,
            "unit": "ns/iter",
            "extra": "iterations: 603\ncpu: 1551324.0464345035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1526678.8756138617,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1526635.1882160443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 821940.0619006823,
            "unit": "ns/iter",
            "extra": "iterations: 1147\ncpu: 821875.850043595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1490920.7568000054,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1490850.5600000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2882.9720902119975,
            "unit": "ns/iter",
            "extra": "iterations: 241564\ncpu: 2882.764401980419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18309.652313556562,
            "unit": "ns/iter",
            "extra": "iterations: 38296\ncpu: 18308.56486317113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15433.978259911051,
            "unit": "ns/iter",
            "extra": "iterations: 45308\ncpu: 15432.810982608033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15087.554548973847,
            "unit": "ns/iter",
            "extra": "iterations: 46472\ncpu: 15086.996470993317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11462.080600379315,
            "unit": "ns/iter",
            "extra": "iterations: 61228\ncpu: 11461.723394525414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 77214.21073559014,
            "unit": "ns/iter",
            "extra": "iterations: 9054\ncpu: 77210.58095869227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 136295.7849756063,
            "unit": "ns/iter",
            "extra": "iterations: 5125\ncpu: 136295.64878048695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 32977.096812219614,
            "unit": "ns/iter",
            "extra": "iterations: 21206\ncpu: 32976.03036876362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 32740.42751382396,
            "unit": "ns/iter",
            "extra": "iterations: 21342\ncpu: 32739.583919032793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32572.13860000786,
            "unit": "ns/iter",
            "extra": "iterations: 21443\ncpu: 32570.489203936257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 64954.5012066019,
            "unit": "ns/iter",
            "extra": "iterations: 10774\ncpu: 64953.68479673259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 61651.05344918742,
            "unit": "ns/iter",
            "extra": "iterations: 11394\ncpu: 61644.72529401421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23132.911293787172,
            "unit": "ns/iter",
            "extra": "iterations: 30291\ncpu: 23132.095341850785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 120457.83938090918,
            "unit": "ns/iter",
            "extra": "iterations: 5815\ncpu: 120453.63714531335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 96701.47146402953,
            "unit": "ns/iter",
            "extra": "iterations: 7254\ncpu: 96696.81555004096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 93328.71311143388,
            "unit": "ns/iter",
            "extra": "iterations: 7421\ncpu: 93325.72429591585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 93056.2481073163,
            "unit": "ns/iter",
            "extra": "iterations: 7529\ncpu: 93053.72559436719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 145923.58492922402,
            "unit": "ns/iter",
            "extra": "iterations: 4804\ncpu: 145915.65362198197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 585364.1003344603,
            "unit": "ns/iter",
            "extra": "iterations: 1196\ncpu: 585346.0702341074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 479337.27136024844,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 479330.07518797735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 482775.0907201992,
            "unit": "ns/iter",
            "extra": "iterations: 1444\ncpu: 482759.2105263105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 473299.3707713114,
            "unit": "ns/iter",
            "extra": "iterations: 1478\ncpu: 473279.3640054147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 293157.2354663415,
            "unit": "ns/iter",
            "extra": "iterations: 2391\ncpu: 293140.5687996658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 464969.5892501468,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 464947.04711346515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23300.72567698224,
            "unit": "ns/iter",
            "extra": "iterations: 30023\ncpu: 23299.963361422742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 117442.73446139177,
            "unit": "ns/iter",
            "extra": "iterations: 5969\ncpu: 117440.05696096449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 95940.77002865588,
            "unit": "ns/iter",
            "extra": "iterations: 7327\ncpu: 95935.70356216861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 96268.6805937301,
            "unit": "ns/iter",
            "extra": "iterations: 7276\ncpu: 96267.27597581108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 94664.33662162893,
            "unit": "ns/iter",
            "extra": "iterations: 7400\ncpu: 94659.28378378446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 147233.82091119076,
            "unit": "ns/iter",
            "extra": "iterations: 4763\ncpu: 147228.4694520274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 581523.0748129499,
            "unit": "ns/iter",
            "extra": "iterations: 1203\ncpu: 581513.8819617665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 478859.9357484385,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 478839.78127135435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 483309.01035197487,
            "unit": "ns/iter",
            "extra": "iterations: 1449\ncpu: 483295.0310558994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 467645.97590360726,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 467640.6291833978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 292401.6281301795,
            "unit": "ns/iter",
            "extra": "iterations: 2396\ncpu: 292379.0901502505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 466275.8179384093,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 466261.57965194096 ns\nthreads: 1"
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
        "date": 1702392464894,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8203.581304281468,
            "unit": "ns/iter",
            "extra": "iterations: 85549\ncpu: 8202.97490327181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 59795.93439999462,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59790.63 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 110308.03536647778,
            "unit": "ns/iter",
            "extra": "iterations: 7804\ncpu: 110302.60123013839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 160826.34265473703,
            "unit": "ns/iter",
            "extra": "iterations: 5364\ncpu: 160820.2833706189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 210224.20271251947,
            "unit": "ns/iter",
            "extra": "iterations: 4129\ncpu: 210216.63841123748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 261884.73037437926,
            "unit": "ns/iter",
            "extra": "iterations: 3312\ncpu: 261864.46256038666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 310571.93028246606,
            "unit": "ns/iter",
            "extra": "iterations: 2797\ncpu: 310558.09796210215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 362116.75978350814,
            "unit": "ns/iter",
            "extra": "iterations: 2402\ncpu: 362100.7910074936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 411351.7348484793,
            "unit": "ns/iter",
            "extra": "iterations: 2112\ncpu: 411331.8655303036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6762.260730017006,
            "unit": "ns/iter",
            "extra": "iterations: 103751\ncpu: 6761.9704870314545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5493.258892968652,
            "unit": "ns/iter",
            "extra": "iterations: 126898\ncpu: 5492.9723084682055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5511.4890271007325,
            "unit": "ns/iter",
            "extra": "iterations: 126858\ncpu: 5511.167604723387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5546.095400840411,
            "unit": "ns/iter",
            "extra": "iterations: 126110\ncpu: 5546.0177622710335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8870.957431915935,
            "unit": "ns/iter",
            "extra": "iterations: 78580\ncpu: 8870.72410282515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26424.74148752904,
            "unit": "ns/iter",
            "extra": "iterations: 30749\ncpu: 26423.974763406943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 130653.614056536,
            "unit": "ns/iter",
            "extra": "iterations: 6545\ncpu: 130647.47135217702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 103037.19997590808,
            "unit": "ns/iter",
            "extra": "iterations: 8301\ncpu: 103034.09227803873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 101746.72755454919,
            "unit": "ns/iter",
            "extra": "iterations: 8387\ncpu: 101742.4108739716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 97497.14816939984,
            "unit": "ns/iter",
            "extra": "iterations: 8713\ncpu: 97494.02042924362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 227503.78351309034,
            "unit": "ns/iter",
            "extra": "iterations: 3894\ncpu: 227490.96045197715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1981424.3525643102,
            "unit": "ns/iter",
            "extra": "iterations: 468\ncpu: 1981361.5384615362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1550954.2562396305,
            "unit": "ns/iter",
            "extra": "iterations: 601\ncpu: 1550862.2296173042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1536810.054455537,
            "unit": "ns/iter",
            "extra": "iterations: 606\ncpu: 1536793.06930693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1507740.6693811407,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1507671.661237785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 816663.3816725984,
            "unit": "ns/iter",
            "extra": "iterations: 1124\ncpu: 816637.3665480432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1484578.5136437486,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1484482.1829855533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36058.99786594375,
            "unit": "ns/iter",
            "extra": "iterations: 22961\ncpu: 36057.86768868954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 167899.24887935474,
            "unit": "ns/iter",
            "extra": "iterations: 5131\ncpu: 167893.43207951682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 130578.75364520572,
            "unit": "ns/iter",
            "extra": "iterations: 6584\ncpu: 130572.64580801952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 130417.68540687556,
            "unit": "ns/iter",
            "extra": "iterations: 6599\ncpu: 130410.4106682831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 126213.85585983472,
            "unit": "ns/iter",
            "extra": "iterations: 6792\ncpu: 126210.76266195522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 250656.3008900142,
            "unit": "ns/iter",
            "extra": "iterations: 3483\ncpu: 250637.72609819076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2019518.678958803,
            "unit": "ns/iter",
            "extra": "iterations: 461\ncpu: 2019452.7114967539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1586829.0101867134,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1586757.7249575546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1587566.6609880244,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1587500.000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1541809.2135760824,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1541732.2847682112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 852550.5197067155,
            "unit": "ns/iter",
            "extra": "iterations: 1091\ncpu: 852520.9899175074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1522446.1435562759,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1522351.549755306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5249719.659999528,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5249513.999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3149707.545454592,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3149573.7373737297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25043.062228343955,
            "unit": "ns/iter",
            "extra": "iterations: 32670\ncpu: 25041.824303642516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 132218.8000294876,
            "unit": "ns/iter",
            "extra": "iterations: 6786\ncpu: 132210.7721780142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 104809.75772000161,
            "unit": "ns/iter",
            "extra": "iterations: 8193\ncpu: 104805.12632735251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 103413.88772781572,
            "unit": "ns/iter",
            "extra": "iterations: 8230\ncpu: 103409.39246658601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 94225.11487989462,
            "unit": "ns/iter",
            "extra": "iterations: 8992\ncpu: 94220.41814946577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 225332.56379667527,
            "unit": "ns/iter",
            "extra": "iterations: 3856\ncpu: 225322.61410788455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1990700.9850428049,
            "unit": "ns/iter",
            "extra": "iterations: 468\ncpu: 1990593.3760683706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1563075.8566665766,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1563023.6666666756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1552057.242122656,
            "unit": "ns/iter",
            "extra": "iterations: 603\ncpu: 1551324.0464345035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1526678.8756138617,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1526635.1882160443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 821940.0619006823,
            "unit": "ns/iter",
            "extra": "iterations: 1147\ncpu: 821875.850043595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1490920.7568000054,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1490850.5600000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2882.9720902119975,
            "unit": "ns/iter",
            "extra": "iterations: 241564\ncpu: 2882.764401980419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18309.652313556562,
            "unit": "ns/iter",
            "extra": "iterations: 38296\ncpu: 18308.56486317113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15433.978259911051,
            "unit": "ns/iter",
            "extra": "iterations: 45308\ncpu: 15432.810982608033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15087.554548973847,
            "unit": "ns/iter",
            "extra": "iterations: 46472\ncpu: 15086.996470993317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11462.080600379315,
            "unit": "ns/iter",
            "extra": "iterations: 61228\ncpu: 11461.723394525414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 77214.21073559014,
            "unit": "ns/iter",
            "extra": "iterations: 9054\ncpu: 77210.58095869227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 136295.7849756063,
            "unit": "ns/iter",
            "extra": "iterations: 5125\ncpu: 136295.64878048695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 32977.096812219614,
            "unit": "ns/iter",
            "extra": "iterations: 21206\ncpu: 32976.03036876362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 32740.42751382396,
            "unit": "ns/iter",
            "extra": "iterations: 21342\ncpu: 32739.583919032793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32572.13860000786,
            "unit": "ns/iter",
            "extra": "iterations: 21443\ncpu: 32570.489203936257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 64954.5012066019,
            "unit": "ns/iter",
            "extra": "iterations: 10774\ncpu: 64953.68479673259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 61651.05344918742,
            "unit": "ns/iter",
            "extra": "iterations: 11394\ncpu: 61644.72529401421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23132.911293787172,
            "unit": "ns/iter",
            "extra": "iterations: 30291\ncpu: 23132.095341850785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 120457.83938090918,
            "unit": "ns/iter",
            "extra": "iterations: 5815\ncpu: 120453.63714531335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 96701.47146402953,
            "unit": "ns/iter",
            "extra": "iterations: 7254\ncpu: 96696.81555004096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 93328.71311143388,
            "unit": "ns/iter",
            "extra": "iterations: 7421\ncpu: 93325.72429591585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 93056.2481073163,
            "unit": "ns/iter",
            "extra": "iterations: 7529\ncpu: 93053.72559436719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 145923.58492922402,
            "unit": "ns/iter",
            "extra": "iterations: 4804\ncpu: 145915.65362198197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 585364.1003344603,
            "unit": "ns/iter",
            "extra": "iterations: 1196\ncpu: 585346.0702341074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 479337.27136024844,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 479330.07518797735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 482775.0907201992,
            "unit": "ns/iter",
            "extra": "iterations: 1444\ncpu: 482759.2105263105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 473299.3707713114,
            "unit": "ns/iter",
            "extra": "iterations: 1478\ncpu: 473279.3640054147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 293157.2354663415,
            "unit": "ns/iter",
            "extra": "iterations: 2391\ncpu: 293140.5687996658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 464969.5892501468,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 464947.04711346515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23300.72567698224,
            "unit": "ns/iter",
            "extra": "iterations: 30023\ncpu: 23299.963361422742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 117442.73446139177,
            "unit": "ns/iter",
            "extra": "iterations: 5969\ncpu: 117440.05696096449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 95940.77002865588,
            "unit": "ns/iter",
            "extra": "iterations: 7327\ncpu: 95935.70356216861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 96268.6805937301,
            "unit": "ns/iter",
            "extra": "iterations: 7276\ncpu: 96267.27597581108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 94664.33662162893,
            "unit": "ns/iter",
            "extra": "iterations: 7400\ncpu: 94659.28378378446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 147233.82091119076,
            "unit": "ns/iter",
            "extra": "iterations: 4763\ncpu: 147228.4694520274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 581523.0748129499,
            "unit": "ns/iter",
            "extra": "iterations: 1203\ncpu: 581513.8819617665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 478859.9357484385,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 478839.78127135435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 483309.01035197487,
            "unit": "ns/iter",
            "extra": "iterations: 1449\ncpu: 483295.0310558994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 467645.97590360726,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 467640.6291833978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 292401.6281301795,
            "unit": "ns/iter",
            "extra": "iterations: 2396\ncpu: 292379.0901502505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 466275.8179384093,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 466261.57965194096 ns\nthreads: 1"
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
        "date": 1702392464894,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8203.581304281468,
            "unit": "ns/iter",
            "extra": "iterations: 85549\ncpu: 8202.97490327181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 59795.93439999462,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59790.63 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 110308.03536647778,
            "unit": "ns/iter",
            "extra": "iterations: 7804\ncpu: 110302.60123013839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 160826.34265473703,
            "unit": "ns/iter",
            "extra": "iterations: 5364\ncpu: 160820.2833706189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 210224.20271251947,
            "unit": "ns/iter",
            "extra": "iterations: 4129\ncpu: 210216.63841123748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 261884.73037437926,
            "unit": "ns/iter",
            "extra": "iterations: 3312\ncpu: 261864.46256038666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 310571.93028246606,
            "unit": "ns/iter",
            "extra": "iterations: 2797\ncpu: 310558.09796210215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 362116.75978350814,
            "unit": "ns/iter",
            "extra": "iterations: 2402\ncpu: 362100.7910074936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 411351.7348484793,
            "unit": "ns/iter",
            "extra": "iterations: 2112\ncpu: 411331.8655303036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6762.260730017006,
            "unit": "ns/iter",
            "extra": "iterations: 103751\ncpu: 6761.9704870314545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5493.258892968652,
            "unit": "ns/iter",
            "extra": "iterations: 126898\ncpu: 5492.9723084682055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5511.4890271007325,
            "unit": "ns/iter",
            "extra": "iterations: 126858\ncpu: 5511.167604723387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5546.095400840411,
            "unit": "ns/iter",
            "extra": "iterations: 126110\ncpu: 5546.0177622710335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8870.957431915935,
            "unit": "ns/iter",
            "extra": "iterations: 78580\ncpu: 8870.72410282515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26424.74148752904,
            "unit": "ns/iter",
            "extra": "iterations: 30749\ncpu: 26423.974763406943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 130653.614056536,
            "unit": "ns/iter",
            "extra": "iterations: 6545\ncpu: 130647.47135217702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 103037.19997590808,
            "unit": "ns/iter",
            "extra": "iterations: 8301\ncpu: 103034.09227803873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 101746.72755454919,
            "unit": "ns/iter",
            "extra": "iterations: 8387\ncpu: 101742.4108739716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 97497.14816939984,
            "unit": "ns/iter",
            "extra": "iterations: 8713\ncpu: 97494.02042924362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 227503.78351309034,
            "unit": "ns/iter",
            "extra": "iterations: 3894\ncpu: 227490.96045197715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1981424.3525643102,
            "unit": "ns/iter",
            "extra": "iterations: 468\ncpu: 1981361.5384615362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1550954.2562396305,
            "unit": "ns/iter",
            "extra": "iterations: 601\ncpu: 1550862.2296173042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1536810.054455537,
            "unit": "ns/iter",
            "extra": "iterations: 606\ncpu: 1536793.06930693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1507740.6693811407,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1507671.661237785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 816663.3816725984,
            "unit": "ns/iter",
            "extra": "iterations: 1124\ncpu: 816637.3665480432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1484578.5136437486,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1484482.1829855533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36058.99786594375,
            "unit": "ns/iter",
            "extra": "iterations: 22961\ncpu: 36057.86768868954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 167899.24887935474,
            "unit": "ns/iter",
            "extra": "iterations: 5131\ncpu: 167893.43207951682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 130578.75364520572,
            "unit": "ns/iter",
            "extra": "iterations: 6584\ncpu: 130572.64580801952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 130417.68540687556,
            "unit": "ns/iter",
            "extra": "iterations: 6599\ncpu: 130410.4106682831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 126213.85585983472,
            "unit": "ns/iter",
            "extra": "iterations: 6792\ncpu: 126210.76266195522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 250656.3008900142,
            "unit": "ns/iter",
            "extra": "iterations: 3483\ncpu: 250637.72609819076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2019518.678958803,
            "unit": "ns/iter",
            "extra": "iterations: 461\ncpu: 2019452.7114967539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1586829.0101867134,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1586757.7249575546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1587566.6609880244,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1587500.000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1541809.2135760824,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1541732.2847682112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 852550.5197067155,
            "unit": "ns/iter",
            "extra": "iterations: 1091\ncpu: 852520.9899175074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1522446.1435562759,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1522351.549755306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5249719.659999528,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5249513.999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3149707.545454592,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3149573.7373737297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25043.062228343955,
            "unit": "ns/iter",
            "extra": "iterations: 32670\ncpu: 25041.824303642516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 132218.8000294876,
            "unit": "ns/iter",
            "extra": "iterations: 6786\ncpu: 132210.7721780142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 104809.75772000161,
            "unit": "ns/iter",
            "extra": "iterations: 8193\ncpu: 104805.12632735251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 103413.88772781572,
            "unit": "ns/iter",
            "extra": "iterations: 8230\ncpu: 103409.39246658601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 94225.11487989462,
            "unit": "ns/iter",
            "extra": "iterations: 8992\ncpu: 94220.41814946577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 225332.56379667527,
            "unit": "ns/iter",
            "extra": "iterations: 3856\ncpu: 225322.61410788455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1990700.9850428049,
            "unit": "ns/iter",
            "extra": "iterations: 468\ncpu: 1990593.3760683706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1563075.8566665766,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1563023.6666666756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1552057.242122656,
            "unit": "ns/iter",
            "extra": "iterations: 603\ncpu: 1551324.0464345035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1526678.8756138617,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1526635.1882160443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 821940.0619006823,
            "unit": "ns/iter",
            "extra": "iterations: 1147\ncpu: 821875.850043595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1490920.7568000054,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1490850.5600000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2882.9720902119975,
            "unit": "ns/iter",
            "extra": "iterations: 241564\ncpu: 2882.764401980419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18309.652313556562,
            "unit": "ns/iter",
            "extra": "iterations: 38296\ncpu: 18308.56486317113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15433.978259911051,
            "unit": "ns/iter",
            "extra": "iterations: 45308\ncpu: 15432.810982608033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15087.554548973847,
            "unit": "ns/iter",
            "extra": "iterations: 46472\ncpu: 15086.996470993317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11462.080600379315,
            "unit": "ns/iter",
            "extra": "iterations: 61228\ncpu: 11461.723394525414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 77214.21073559014,
            "unit": "ns/iter",
            "extra": "iterations: 9054\ncpu: 77210.58095869227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 136295.7849756063,
            "unit": "ns/iter",
            "extra": "iterations: 5125\ncpu: 136295.64878048695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 32977.096812219614,
            "unit": "ns/iter",
            "extra": "iterations: 21206\ncpu: 32976.03036876362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 32740.42751382396,
            "unit": "ns/iter",
            "extra": "iterations: 21342\ncpu: 32739.583919032793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32572.13860000786,
            "unit": "ns/iter",
            "extra": "iterations: 21443\ncpu: 32570.489203936257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 64954.5012066019,
            "unit": "ns/iter",
            "extra": "iterations: 10774\ncpu: 64953.68479673259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 61651.05344918742,
            "unit": "ns/iter",
            "extra": "iterations: 11394\ncpu: 61644.72529401421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23132.911293787172,
            "unit": "ns/iter",
            "extra": "iterations: 30291\ncpu: 23132.095341850785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 120457.83938090918,
            "unit": "ns/iter",
            "extra": "iterations: 5815\ncpu: 120453.63714531335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 96701.47146402953,
            "unit": "ns/iter",
            "extra": "iterations: 7254\ncpu: 96696.81555004096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 93328.71311143388,
            "unit": "ns/iter",
            "extra": "iterations: 7421\ncpu: 93325.72429591585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 93056.2481073163,
            "unit": "ns/iter",
            "extra": "iterations: 7529\ncpu: 93053.72559436719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 145923.58492922402,
            "unit": "ns/iter",
            "extra": "iterations: 4804\ncpu: 145915.65362198197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 585364.1003344603,
            "unit": "ns/iter",
            "extra": "iterations: 1196\ncpu: 585346.0702341074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 479337.27136024844,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 479330.07518797735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 482775.0907201992,
            "unit": "ns/iter",
            "extra": "iterations: 1444\ncpu: 482759.2105263105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 473299.3707713114,
            "unit": "ns/iter",
            "extra": "iterations: 1478\ncpu: 473279.3640054147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 293157.2354663415,
            "unit": "ns/iter",
            "extra": "iterations: 2391\ncpu: 293140.5687996658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 464969.5892501468,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 464947.04711346515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23300.72567698224,
            "unit": "ns/iter",
            "extra": "iterations: 30023\ncpu: 23299.963361422742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 117442.73446139177,
            "unit": "ns/iter",
            "extra": "iterations: 5969\ncpu: 117440.05696096449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 95940.77002865588,
            "unit": "ns/iter",
            "extra": "iterations: 7327\ncpu: 95935.70356216861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 96268.6805937301,
            "unit": "ns/iter",
            "extra": "iterations: 7276\ncpu: 96267.27597581108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 94664.33662162893,
            "unit": "ns/iter",
            "extra": "iterations: 7400\ncpu: 94659.28378378446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 147233.82091119076,
            "unit": "ns/iter",
            "extra": "iterations: 4763\ncpu: 147228.4694520274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 581523.0748129499,
            "unit": "ns/iter",
            "extra": "iterations: 1203\ncpu: 581513.8819617665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 478859.9357484385,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 478839.78127135435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 483309.01035197487,
            "unit": "ns/iter",
            "extra": "iterations: 1449\ncpu: 483295.0310558994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 467645.97590360726,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 467640.6291833978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 292401.6281301795,
            "unit": "ns/iter",
            "extra": "iterations: 2396\ncpu: 292379.0901502505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 466275.8179384093,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 466261.57965194096 ns\nthreads: 1"
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
        "date": 1702392464894,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8203.581304281468,
            "unit": "ns/iter",
            "extra": "iterations: 85549\ncpu: 8202.97490327181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 59795.93439999462,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59790.63 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 110308.03536647778,
            "unit": "ns/iter",
            "extra": "iterations: 7804\ncpu: 110302.60123013839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 160826.34265473703,
            "unit": "ns/iter",
            "extra": "iterations: 5364\ncpu: 160820.2833706189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 210224.20271251947,
            "unit": "ns/iter",
            "extra": "iterations: 4129\ncpu: 210216.63841123748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 261884.73037437926,
            "unit": "ns/iter",
            "extra": "iterations: 3312\ncpu: 261864.46256038666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 310571.93028246606,
            "unit": "ns/iter",
            "extra": "iterations: 2797\ncpu: 310558.09796210215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 362116.75978350814,
            "unit": "ns/iter",
            "extra": "iterations: 2402\ncpu: 362100.7910074936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 411351.7348484793,
            "unit": "ns/iter",
            "extra": "iterations: 2112\ncpu: 411331.8655303036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6762.260730017006,
            "unit": "ns/iter",
            "extra": "iterations: 103751\ncpu: 6761.9704870314545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5493.258892968652,
            "unit": "ns/iter",
            "extra": "iterations: 126898\ncpu: 5492.9723084682055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5511.4890271007325,
            "unit": "ns/iter",
            "extra": "iterations: 126858\ncpu: 5511.167604723387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5546.095400840411,
            "unit": "ns/iter",
            "extra": "iterations: 126110\ncpu: 5546.0177622710335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8870.957431915935,
            "unit": "ns/iter",
            "extra": "iterations: 78580\ncpu: 8870.72410282515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26424.74148752904,
            "unit": "ns/iter",
            "extra": "iterations: 30749\ncpu: 26423.974763406943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 130653.614056536,
            "unit": "ns/iter",
            "extra": "iterations: 6545\ncpu: 130647.47135217702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 103037.19997590808,
            "unit": "ns/iter",
            "extra": "iterations: 8301\ncpu: 103034.09227803873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 101746.72755454919,
            "unit": "ns/iter",
            "extra": "iterations: 8387\ncpu: 101742.4108739716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 97497.14816939984,
            "unit": "ns/iter",
            "extra": "iterations: 8713\ncpu: 97494.02042924362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 227503.78351309034,
            "unit": "ns/iter",
            "extra": "iterations: 3894\ncpu: 227490.96045197715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1981424.3525643102,
            "unit": "ns/iter",
            "extra": "iterations: 468\ncpu: 1981361.5384615362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1550954.2562396305,
            "unit": "ns/iter",
            "extra": "iterations: 601\ncpu: 1550862.2296173042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1536810.054455537,
            "unit": "ns/iter",
            "extra": "iterations: 606\ncpu: 1536793.06930693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1507740.6693811407,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1507671.661237785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 816663.3816725984,
            "unit": "ns/iter",
            "extra": "iterations: 1124\ncpu: 816637.3665480432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1484578.5136437486,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1484482.1829855533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36058.99786594375,
            "unit": "ns/iter",
            "extra": "iterations: 22961\ncpu: 36057.86768868954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 167899.24887935474,
            "unit": "ns/iter",
            "extra": "iterations: 5131\ncpu: 167893.43207951682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 130578.75364520572,
            "unit": "ns/iter",
            "extra": "iterations: 6584\ncpu: 130572.64580801952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 130417.68540687556,
            "unit": "ns/iter",
            "extra": "iterations: 6599\ncpu: 130410.4106682831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 126213.85585983472,
            "unit": "ns/iter",
            "extra": "iterations: 6792\ncpu: 126210.76266195522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 250656.3008900142,
            "unit": "ns/iter",
            "extra": "iterations: 3483\ncpu: 250637.72609819076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2019518.678958803,
            "unit": "ns/iter",
            "extra": "iterations: 461\ncpu: 2019452.7114967539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1586829.0101867134,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1586757.7249575546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1587566.6609880244,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1587500.000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1541809.2135760824,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1541732.2847682112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 852550.5197067155,
            "unit": "ns/iter",
            "extra": "iterations: 1091\ncpu: 852520.9899175074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1522446.1435562759,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1522351.549755306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5249719.659999528,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5249513.999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3149707.545454592,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3149573.7373737297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25043.062228343955,
            "unit": "ns/iter",
            "extra": "iterations: 32670\ncpu: 25041.824303642516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 132218.8000294876,
            "unit": "ns/iter",
            "extra": "iterations: 6786\ncpu: 132210.7721780142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 104809.75772000161,
            "unit": "ns/iter",
            "extra": "iterations: 8193\ncpu: 104805.12632735251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 103413.88772781572,
            "unit": "ns/iter",
            "extra": "iterations: 8230\ncpu: 103409.39246658601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 94225.11487989462,
            "unit": "ns/iter",
            "extra": "iterations: 8992\ncpu: 94220.41814946577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 225332.56379667527,
            "unit": "ns/iter",
            "extra": "iterations: 3856\ncpu: 225322.61410788455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1990700.9850428049,
            "unit": "ns/iter",
            "extra": "iterations: 468\ncpu: 1990593.3760683706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1563075.8566665766,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1563023.6666666756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1552057.242122656,
            "unit": "ns/iter",
            "extra": "iterations: 603\ncpu: 1551324.0464345035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1526678.8756138617,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1526635.1882160443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 821940.0619006823,
            "unit": "ns/iter",
            "extra": "iterations: 1147\ncpu: 821875.850043595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1490920.7568000054,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1490850.5600000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2882.9720902119975,
            "unit": "ns/iter",
            "extra": "iterations: 241564\ncpu: 2882.764401980419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18309.652313556562,
            "unit": "ns/iter",
            "extra": "iterations: 38296\ncpu: 18308.56486317113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15433.978259911051,
            "unit": "ns/iter",
            "extra": "iterations: 45308\ncpu: 15432.810982608033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15087.554548973847,
            "unit": "ns/iter",
            "extra": "iterations: 46472\ncpu: 15086.996470993317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11462.080600379315,
            "unit": "ns/iter",
            "extra": "iterations: 61228\ncpu: 11461.723394525414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 77214.21073559014,
            "unit": "ns/iter",
            "extra": "iterations: 9054\ncpu: 77210.58095869227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 136295.7849756063,
            "unit": "ns/iter",
            "extra": "iterations: 5125\ncpu: 136295.64878048695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 32977.096812219614,
            "unit": "ns/iter",
            "extra": "iterations: 21206\ncpu: 32976.03036876362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 32740.42751382396,
            "unit": "ns/iter",
            "extra": "iterations: 21342\ncpu: 32739.583919032793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32572.13860000786,
            "unit": "ns/iter",
            "extra": "iterations: 21443\ncpu: 32570.489203936257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 64954.5012066019,
            "unit": "ns/iter",
            "extra": "iterations: 10774\ncpu: 64953.68479673259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 61651.05344918742,
            "unit": "ns/iter",
            "extra": "iterations: 11394\ncpu: 61644.72529401421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23132.911293787172,
            "unit": "ns/iter",
            "extra": "iterations: 30291\ncpu: 23132.095341850785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 120457.83938090918,
            "unit": "ns/iter",
            "extra": "iterations: 5815\ncpu: 120453.63714531335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 96701.47146402953,
            "unit": "ns/iter",
            "extra": "iterations: 7254\ncpu: 96696.81555004096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 93328.71311143388,
            "unit": "ns/iter",
            "extra": "iterations: 7421\ncpu: 93325.72429591585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 93056.2481073163,
            "unit": "ns/iter",
            "extra": "iterations: 7529\ncpu: 93053.72559436719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 145923.58492922402,
            "unit": "ns/iter",
            "extra": "iterations: 4804\ncpu: 145915.65362198197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 585364.1003344603,
            "unit": "ns/iter",
            "extra": "iterations: 1196\ncpu: 585346.0702341074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 479337.27136024844,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 479330.07518797735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 482775.0907201992,
            "unit": "ns/iter",
            "extra": "iterations: 1444\ncpu: 482759.2105263105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 473299.3707713114,
            "unit": "ns/iter",
            "extra": "iterations: 1478\ncpu: 473279.3640054147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 293157.2354663415,
            "unit": "ns/iter",
            "extra": "iterations: 2391\ncpu: 293140.5687996658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 464969.5892501468,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 464947.04711346515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23300.72567698224,
            "unit": "ns/iter",
            "extra": "iterations: 30023\ncpu: 23299.963361422742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 117442.73446139177,
            "unit": "ns/iter",
            "extra": "iterations: 5969\ncpu: 117440.05696096449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 95940.77002865588,
            "unit": "ns/iter",
            "extra": "iterations: 7327\ncpu: 95935.70356216861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 96268.6805937301,
            "unit": "ns/iter",
            "extra": "iterations: 7276\ncpu: 96267.27597581108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 94664.33662162893,
            "unit": "ns/iter",
            "extra": "iterations: 7400\ncpu: 94659.28378378446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 147233.82091119076,
            "unit": "ns/iter",
            "extra": "iterations: 4763\ncpu: 147228.4694520274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 581523.0748129499,
            "unit": "ns/iter",
            "extra": "iterations: 1203\ncpu: 581513.8819617665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 478859.9357484385,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 478839.78127135435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 483309.01035197487,
            "unit": "ns/iter",
            "extra": "iterations: 1449\ncpu: 483295.0310558994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 467645.97590360726,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 467640.6291833978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 292401.6281301795,
            "unit": "ns/iter",
            "extra": "iterations: 2396\ncpu: 292379.0901502505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 466275.8179384093,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 466261.57965194096 ns\nthreads: 1"
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
        "date": 1702392464894,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8203.581304281468,
            "unit": "ns/iter",
            "extra": "iterations: 85549\ncpu: 8202.97490327181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 59795.93439999462,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59790.63 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 110308.03536647778,
            "unit": "ns/iter",
            "extra": "iterations: 7804\ncpu: 110302.60123013839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 160826.34265473703,
            "unit": "ns/iter",
            "extra": "iterations: 5364\ncpu: 160820.2833706189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 210224.20271251947,
            "unit": "ns/iter",
            "extra": "iterations: 4129\ncpu: 210216.63841123748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 261884.73037437926,
            "unit": "ns/iter",
            "extra": "iterations: 3312\ncpu: 261864.46256038666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 310571.93028246606,
            "unit": "ns/iter",
            "extra": "iterations: 2797\ncpu: 310558.09796210215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 362116.75978350814,
            "unit": "ns/iter",
            "extra": "iterations: 2402\ncpu: 362100.7910074936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 411351.7348484793,
            "unit": "ns/iter",
            "extra": "iterations: 2112\ncpu: 411331.8655303036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6762.260730017006,
            "unit": "ns/iter",
            "extra": "iterations: 103751\ncpu: 6761.9704870314545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5493.258892968652,
            "unit": "ns/iter",
            "extra": "iterations: 126898\ncpu: 5492.9723084682055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5511.4890271007325,
            "unit": "ns/iter",
            "extra": "iterations: 126858\ncpu: 5511.167604723387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5546.095400840411,
            "unit": "ns/iter",
            "extra": "iterations: 126110\ncpu: 5546.0177622710335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8870.957431915935,
            "unit": "ns/iter",
            "extra": "iterations: 78580\ncpu: 8870.72410282515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26424.74148752904,
            "unit": "ns/iter",
            "extra": "iterations: 30749\ncpu: 26423.974763406943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 130653.614056536,
            "unit": "ns/iter",
            "extra": "iterations: 6545\ncpu: 130647.47135217702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 103037.19997590808,
            "unit": "ns/iter",
            "extra": "iterations: 8301\ncpu: 103034.09227803873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 101746.72755454919,
            "unit": "ns/iter",
            "extra": "iterations: 8387\ncpu: 101742.4108739716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 97497.14816939984,
            "unit": "ns/iter",
            "extra": "iterations: 8713\ncpu: 97494.02042924362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 227503.78351309034,
            "unit": "ns/iter",
            "extra": "iterations: 3894\ncpu: 227490.96045197715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1981424.3525643102,
            "unit": "ns/iter",
            "extra": "iterations: 468\ncpu: 1981361.5384615362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1550954.2562396305,
            "unit": "ns/iter",
            "extra": "iterations: 601\ncpu: 1550862.2296173042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1536810.054455537,
            "unit": "ns/iter",
            "extra": "iterations: 606\ncpu: 1536793.06930693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1507740.6693811407,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1507671.661237785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 816663.3816725984,
            "unit": "ns/iter",
            "extra": "iterations: 1124\ncpu: 816637.3665480432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1484578.5136437486,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1484482.1829855533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36058.99786594375,
            "unit": "ns/iter",
            "extra": "iterations: 22961\ncpu: 36057.86768868954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 167899.24887935474,
            "unit": "ns/iter",
            "extra": "iterations: 5131\ncpu: 167893.43207951682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 130578.75364520572,
            "unit": "ns/iter",
            "extra": "iterations: 6584\ncpu: 130572.64580801952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 130417.68540687556,
            "unit": "ns/iter",
            "extra": "iterations: 6599\ncpu: 130410.4106682831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 126213.85585983472,
            "unit": "ns/iter",
            "extra": "iterations: 6792\ncpu: 126210.76266195522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 250656.3008900142,
            "unit": "ns/iter",
            "extra": "iterations: 3483\ncpu: 250637.72609819076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2019518.678958803,
            "unit": "ns/iter",
            "extra": "iterations: 461\ncpu: 2019452.7114967539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1586829.0101867134,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1586757.7249575546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1587566.6609880244,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1587500.000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1541809.2135760824,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1541732.2847682112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 852550.5197067155,
            "unit": "ns/iter",
            "extra": "iterations: 1091\ncpu: 852520.9899175074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1522446.1435562759,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1522351.549755306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5249719.659999528,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5249513.999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3149707.545454592,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3149573.7373737297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25043.062228343955,
            "unit": "ns/iter",
            "extra": "iterations: 32670\ncpu: 25041.824303642516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 132218.8000294876,
            "unit": "ns/iter",
            "extra": "iterations: 6786\ncpu: 132210.7721780142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 104809.75772000161,
            "unit": "ns/iter",
            "extra": "iterations: 8193\ncpu: 104805.12632735251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 103413.88772781572,
            "unit": "ns/iter",
            "extra": "iterations: 8230\ncpu: 103409.39246658601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 94225.11487989462,
            "unit": "ns/iter",
            "extra": "iterations: 8992\ncpu: 94220.41814946577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 225332.56379667527,
            "unit": "ns/iter",
            "extra": "iterations: 3856\ncpu: 225322.61410788455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1990700.9850428049,
            "unit": "ns/iter",
            "extra": "iterations: 468\ncpu: 1990593.3760683706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1563075.8566665766,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1563023.6666666756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1552057.242122656,
            "unit": "ns/iter",
            "extra": "iterations: 603\ncpu: 1551324.0464345035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1526678.8756138617,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1526635.1882160443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 821940.0619006823,
            "unit": "ns/iter",
            "extra": "iterations: 1147\ncpu: 821875.850043595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1490920.7568000054,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1490850.5600000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2882.9720902119975,
            "unit": "ns/iter",
            "extra": "iterations: 241564\ncpu: 2882.764401980419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18309.652313556562,
            "unit": "ns/iter",
            "extra": "iterations: 38296\ncpu: 18308.56486317113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15433.978259911051,
            "unit": "ns/iter",
            "extra": "iterations: 45308\ncpu: 15432.810982608033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15087.554548973847,
            "unit": "ns/iter",
            "extra": "iterations: 46472\ncpu: 15086.996470993317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11462.080600379315,
            "unit": "ns/iter",
            "extra": "iterations: 61228\ncpu: 11461.723394525414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 77214.21073559014,
            "unit": "ns/iter",
            "extra": "iterations: 9054\ncpu: 77210.58095869227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 136295.7849756063,
            "unit": "ns/iter",
            "extra": "iterations: 5125\ncpu: 136295.64878048695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 32977.096812219614,
            "unit": "ns/iter",
            "extra": "iterations: 21206\ncpu: 32976.03036876362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 32740.42751382396,
            "unit": "ns/iter",
            "extra": "iterations: 21342\ncpu: 32739.583919032793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32572.13860000786,
            "unit": "ns/iter",
            "extra": "iterations: 21443\ncpu: 32570.489203936257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 64954.5012066019,
            "unit": "ns/iter",
            "extra": "iterations: 10774\ncpu: 64953.68479673259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 61651.05344918742,
            "unit": "ns/iter",
            "extra": "iterations: 11394\ncpu: 61644.72529401421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23132.911293787172,
            "unit": "ns/iter",
            "extra": "iterations: 30291\ncpu: 23132.095341850785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 120457.83938090918,
            "unit": "ns/iter",
            "extra": "iterations: 5815\ncpu: 120453.63714531335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 96701.47146402953,
            "unit": "ns/iter",
            "extra": "iterations: 7254\ncpu: 96696.81555004096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 93328.71311143388,
            "unit": "ns/iter",
            "extra": "iterations: 7421\ncpu: 93325.72429591585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 93056.2481073163,
            "unit": "ns/iter",
            "extra": "iterations: 7529\ncpu: 93053.72559436719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 145923.58492922402,
            "unit": "ns/iter",
            "extra": "iterations: 4804\ncpu: 145915.65362198197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 585364.1003344603,
            "unit": "ns/iter",
            "extra": "iterations: 1196\ncpu: 585346.0702341074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 479337.27136024844,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 479330.07518797735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 482775.0907201992,
            "unit": "ns/iter",
            "extra": "iterations: 1444\ncpu: 482759.2105263105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 473299.3707713114,
            "unit": "ns/iter",
            "extra": "iterations: 1478\ncpu: 473279.3640054147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 293157.2354663415,
            "unit": "ns/iter",
            "extra": "iterations: 2391\ncpu: 293140.5687996658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 464969.5892501468,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 464947.04711346515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23300.72567698224,
            "unit": "ns/iter",
            "extra": "iterations: 30023\ncpu: 23299.963361422742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 117442.73446139177,
            "unit": "ns/iter",
            "extra": "iterations: 5969\ncpu: 117440.05696096449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 95940.77002865588,
            "unit": "ns/iter",
            "extra": "iterations: 7327\ncpu: 95935.70356216861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 96268.6805937301,
            "unit": "ns/iter",
            "extra": "iterations: 7276\ncpu: 96267.27597581108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 94664.33662162893,
            "unit": "ns/iter",
            "extra": "iterations: 7400\ncpu: 94659.28378378446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 147233.82091119076,
            "unit": "ns/iter",
            "extra": "iterations: 4763\ncpu: 147228.4694520274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 581523.0748129499,
            "unit": "ns/iter",
            "extra": "iterations: 1203\ncpu: 581513.8819617665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 478859.9357484385,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 478839.78127135435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 483309.01035197487,
            "unit": "ns/iter",
            "extra": "iterations: 1449\ncpu: 483295.0310558994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 467645.97590360726,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 467640.6291833978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 292401.6281301795,
            "unit": "ns/iter",
            "extra": "iterations: 2396\ncpu: 292379.0901502505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 466275.8179384093,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 466261.57965194096 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}