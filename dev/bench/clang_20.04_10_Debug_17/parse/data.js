window.BENCHMARK_DATA = {
  "lastUpdate": 1702394193077,
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
        "date": 1702394192697,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7554.99298888984,
            "unit": "ns/iter",
            "extra": "iterations: 92710\ncpu: 7554.557221443211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55679.46709999205,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55675.79999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 102440.4395026327,
            "unit": "ns/iter",
            "extra": "iterations: 8364\ncpu: 102435.96365375417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 148560.87668394044,
            "unit": "ns/iter",
            "extra": "iterations: 5790\ncpu: 148554.1968911917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 195356.7685707823,
            "unit": "ns/iter",
            "extra": "iterations: 4429\ncpu: 195348.02438473693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 241513.77793257192,
            "unit": "ns/iter",
            "extra": "iterations: 3589\ncpu: 241511.08943995537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 288285.09493670793,
            "unit": "ns/iter",
            "extra": "iterations: 3002\ncpu: 288278.74750166544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 334217.65676823305,
            "unit": "ns/iter",
            "extra": "iterations: 2593\ncpu: 334208.2915541842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 380598.51662294863,
            "unit": "ns/iter",
            "extra": "iterations: 2286\ncpu: 380591.2510936137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6277.108554906285,
            "unit": "ns/iter",
            "extra": "iterations: 111363\ncpu: 6276.994154252306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5182.472909699362,
            "unit": "ns/iter",
            "extra": "iterations: 134550\ncpu: 5182.344109996277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5166.750156783894,
            "unit": "ns/iter",
            "extra": "iterations: 135537\ncpu: 5166.721264304214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5138.192685994884,
            "unit": "ns/iter",
            "extra": "iterations: 135931\ncpu: 5138.085499260652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8483.087620062484,
            "unit": "ns/iter",
            "extra": "iterations: 82561\ncpu: 8482.95321035356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26117.16043246844,
            "unit": "ns/iter",
            "extra": "iterations: 30985\ncpu: 26116.791996127147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 129724.70083396349,
            "unit": "ns/iter",
            "extra": "iterations: 6595\ncpu: 129717.64973464746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 99226.41229403482,
            "unit": "ns/iter",
            "extra": "iterations: 8557\ncpu: 99221.70153091036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 99183.52026083959,
            "unit": "ns/iter",
            "extra": "iterations: 8588\ncpu: 99179.14531905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 94420.66111481602,
            "unit": "ns/iter",
            "extra": "iterations: 9006\ncpu: 94416.94425938251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 213326.92827916608,
            "unit": "ns/iter",
            "extra": "iterations: 4155\ncpu: 213314.29602888116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1800965.09708756,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1800887.3786407777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1443617.4529780308,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1443565.6739811914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1432438.1468315602,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1432358.887171562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1383116.6805971407,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1383023.2835820862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 799159.3902861709,
            "unit": "ns/iter",
            "extra": "iterations: 1153\ncpu: 799117.4327840406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1376681.5222552584,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1376632.6409495557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 34970.4849589028,
            "unit": "ns/iter",
            "extra": "iterations: 23602\ncpu: 34968.69333107362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 165842.6236290076,
            "unit": "ns/iter",
            "extra": "iterations: 5197\ncpu: 165833.63478930198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 129372.99082707803,
            "unit": "ns/iter",
            "extra": "iterations: 6650\ncpu: 129366.30075187984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 128179.58412745787,
            "unit": "ns/iter",
            "extra": "iterations: 6716\ncpu: 128175.32757593763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 123345.98548224747,
            "unit": "ns/iter",
            "extra": "iterations: 6957\ncpu: 123338.46485554132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 234910.4976883263,
            "unit": "ns/iter",
            "extra": "iterations: 3677\ncpu: 234898.3954310587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1849155.7813120103,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1849038.369781312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1482570.8553260753,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1482539.2686804445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1483730.3019169613,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1483704.9520766796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1419294.3511450735,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1419249.0076335922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 833650.744394544,
            "unit": "ns/iter",
            "extra": "iterations: 1115\ncpu: 833640.1793721915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1418746.4969513544,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1418707.9268292664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5143128.460000526,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5143059.000000036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3164466.290540586,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3164367.5675675585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25067.691040702543,
            "unit": "ns/iter",
            "extra": "iterations: 32603\ncpu: 25066.88955004135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 123094.78284487764,
            "unit": "ns/iter",
            "extra": "iterations: 6995\ncpu: 123093.6669049318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 101528.63892173275,
            "unit": "ns/iter",
            "extra": "iterations: 8458\ncpu: 101525.28966658728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 103689.00810646397,
            "unit": "ns/iter",
            "extra": "iterations: 8265\ncpu: 103685.72292800988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 92132.6288459442,
            "unit": "ns/iter",
            "extra": "iterations: 9263\ncpu: 92128.58685091214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 213979.3475177449,
            "unit": "ns/iter",
            "extra": "iterations: 4089\ncpu: 213974.54145267696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1819955.6920079465,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1819902.7290448397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1447754.778637663,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1447731.5789473702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1436307.9368259492,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1436282.4345146331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1396866.6158445955,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1396838.7144992577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 807414.8895547504,
            "unit": "ns/iter",
            "extra": "iterations: 1168\ncpu: 807403.9383561664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1391734.8807749972,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1391690.0149031316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2864.547424133904,
            "unit": "ns/iter",
            "extra": "iterations: 244675\ncpu: 2864.5268212935407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18429.027844177548,
            "unit": "ns/iter",
            "extra": "iterations: 38069\ncpu: 18428.831857942147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14784.245689655958,
            "unit": "ns/iter",
            "extra": "iterations: 47328\ncpu: 14784.1299019607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14913.833542619137,
            "unit": "ns/iter",
            "extra": "iterations: 46985\ncpu: 14913.495796530822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11330.589084785379,
            "unit": "ns/iter",
            "extra": "iterations: 61767\ncpu: 11330.213544449329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 74345.15863240448,
            "unit": "ns/iter",
            "extra": "iterations: 9418\ncpu: 74344.60607347582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 128570.8363236889,
            "unit": "ns/iter",
            "extra": "iterations: 5462\ncpu: 128564.33540827526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 31223.501092336905,
            "unit": "ns/iter",
            "extra": "iterations: 22429\ncpu: 31223.166436310144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30673.69349533002,
            "unit": "ns/iter",
            "extra": "iterations: 22799\ncpu: 30672.788280187655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30261.05097834829,
            "unit": "ns/iter",
            "extra": "iterations: 23049\ncpu: 30260.76619376127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 63150.79644340121,
            "unit": "ns/iter",
            "extra": "iterations: 11078\ncpu: 63150.25275320466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 57890.35433592651,
            "unit": "ns/iter",
            "extra": "iterations: 12062\ncpu: 57889.89388161207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22682.763323743275,
            "unit": "ns/iter",
            "extra": "iterations: 30941\ncpu: 22682.272712581984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 114862.92296344225,
            "unit": "ns/iter",
            "extra": "iterations: 6101\ncpu: 114857.30208162562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 91572.31172394629,
            "unit": "ns/iter",
            "extra": "iterations: 7651\ncpu: 91570.36988628963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 90770.67236687968,
            "unit": "ns/iter",
            "extra": "iterations: 7719\ncpu: 90767.72898043749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 90558.834784878,
            "unit": "ns/iter",
            "extra": "iterations: 7693\ncpu: 90556.99987001075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 139810.69349041424,
            "unit": "ns/iter",
            "extra": "iterations: 5008\ncpu: 139808.98562300482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 544030.2038759593,
            "unit": "ns/iter",
            "extra": "iterations: 1290\ncpu: 544007.5193798449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 453203.5989683967,
            "unit": "ns/iter",
            "extra": "iterations: 1551\ncpu: 453199.2907801458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 450551.2152956041,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 450531.42673521995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 432692.26934989437,
            "unit": "ns/iter",
            "extra": "iterations: 1615\ncpu: 432669.3498451953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 288492.3655513998,
            "unit": "ns/iter",
            "extra": "iterations: 2421\ncpu: 288477.28211482766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 437995.4671258754,
            "unit": "ns/iter",
            "extra": "iterations: 1597\ncpu: 437968.31559173367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23237.132692435553,
            "unit": "ns/iter",
            "extra": "iterations: 30062\ncpu: 23235.968997405547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 112030.77178622418,
            "unit": "ns/iter",
            "extra": "iterations: 6231\ncpu: 112022.13127908882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 92179.03430078333,
            "unit": "ns/iter",
            "extra": "iterations: 7580\ncpu: 92174.51187335096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 92714.87019868077,
            "unit": "ns/iter",
            "extra": "iterations: 7550\ncpu: 92714.88741721865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 92394.30699208265,
            "unit": "ns/iter",
            "extra": "iterations: 7580\ncpu: 92388.53562005202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 141867.85985145133,
            "unit": "ns/iter",
            "extra": "iterations: 5116\ncpu: 141858.34636434613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 533771.9026401858,
            "unit": "ns/iter",
            "extra": "iterations: 1212\ncpu: 533737.1287128765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 448805.3884244343,
            "unit": "ns/iter",
            "extra": "iterations: 1555\ncpu: 448782.8938906685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 449702.0637886688,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 449677.5128866015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 431891.87515451206,
            "unit": "ns/iter",
            "extra": "iterations: 1618\ncpu: 431886.6501854168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 289956.76645962655,
            "unit": "ns/iter",
            "extra": "iterations: 2415\ncpu: 289957.01863353833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 439047.67671063764,
            "unit": "ns/iter",
            "extra": "iterations: 1593\ncpu: 439028.9391086017 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}