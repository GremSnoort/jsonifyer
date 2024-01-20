window.BENCHMARK_DATA = {
  "lastUpdate": 1705771612550,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize gcc-9 22.04 Release c++-17": [
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
        "date": 1702397908477,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 968.4375706471807,
            "unit": "ns/iter",
            "extra": "iterations: 723666\ncpu: 968.3775388093404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 19728.627034058867,
            "unit": "ns/iter",
            "extra": "iterations: 42280\ncpu: 19727.523651844847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 46085.48739366831,
            "unit": "ns/iter",
            "extra": "iterations: 19514\ncpu: 46083.57076970381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 57176.830399998835,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57175.46000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 69247.59405074234,
            "unit": "ns/iter",
            "extra": "iterations: 11430\ncpu: 69246.20297462816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 85300.97412018487,
            "unit": "ns/iter",
            "extra": "iterations: 10201\ncpu: 85293.79472600725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 102150.68251927795,
            "unit": "ns/iter",
            "extra": "iterations: 8558\ncpu: 102147.6863753213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 118820.21076479601,
            "unit": "ns/iter",
            "extra": "iterations: 7283\ncpu: 118816.90237539473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 149744.9273329065,
            "unit": "ns/iter",
            "extra": "iterations: 6344\ncpu: 149738.35119798235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 813.4264645141365,
            "unit": "ns/iter",
            "extra": "iterations: 859483\ncpu: 813.4188808853703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 661.4811031915208,
            "unit": "ns/iter",
            "extra": "iterations: 1061502\ncpu: 661.4609298899104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 664.937104639912,
            "unit": "ns/iter",
            "extra": "iterations: 1057264\ncpu: 664.910939935532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 676.4144017082132,
            "unit": "ns/iter",
            "extra": "iterations: 1041557\ncpu: 676.4067641041236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1207.5697901991925,
            "unit": "ns/iter",
            "extra": "iterations: 579931\ncpu: 1207.55365724543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5384.517420000066,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5384.238000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 30454.15273252324,
            "unit": "ns/iter",
            "extra": "iterations: 27008\ncpu: 30453.676688388638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 22217.194097061165,
            "unit": "ns/iter",
            "extra": "iterations: 36863\ncpu: 22216.631853077626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 22262.516093616447,
            "unit": "ns/iter",
            "extra": "iterations: 37344\ncpu: 22261.040595544113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 22239.690655614806,
            "unit": "ns/iter",
            "extra": "iterations: 37156\ncpu: 22238.475616320404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 53936.00649999826,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53932.34000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 625799.6510000225,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 625765.6000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 509352.07800000627,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509330.8000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 511740.1900000118,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511724.9999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 509305.3599999848,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509266.00000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 374133.2327070891,
            "unit": "ns/iter",
            "extra": "iterations: 2342\ncpu: 374111.7847993166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 526051.2680000033,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 525987.3000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2878168.9049078883,
            "unit": "ns/iter",
            "extra": "iterations: 326\ncpu: 2878051.53374233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1234647.9316129116,
            "unit": "ns/iter",
            "extra": "iterations: 775\ncpu: 1234578.193548383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3740014.1785714445,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3739802.777777784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5420.3031600002305,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5419.7260000000115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 30787.423556478523,
            "unit": "ns/iter",
            "extra": "iterations: 26948\ncpu: 30786.147394982843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 22641.740816270078,
            "unit": "ns/iter",
            "extra": "iterations: 36287\ncpu: 22640.176922864954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 22249.86701508278,
            "unit": "ns/iter",
            "extra": "iterations: 36929\ncpu: 22248.842373202682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 22489.441798081414,
            "unit": "ns/iter",
            "extra": "iterations: 36906\ncpu: 22487.614480030286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 53756.73080000069,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53753.719999999914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 630730.3169999727,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 630729.0999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 523535.1729999707,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 523503.6000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 520643.82900005055,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520626.4000000047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 517398.19299996266,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517367.7000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 370209.1975568829,
            "unit": "ns/iter",
            "extra": "iterations: 2374\ncpu: 370180.8761583801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 512298.5279999739,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512263.3000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 3018803.435483894,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 3018558.7096774215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1261314.313907276,
            "unit": "ns/iter",
            "extra": "iterations: 755\ncpu: 1261252.4503311228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5476.777339999899,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5476.525000000052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 31358.791495600733,
            "unit": "ns/iter",
            "extra": "iterations: 27280\ncpu: 31357.316715542474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 22638.586636620603,
            "unit": "ns/iter",
            "extra": "iterations: 36832\ncpu: 22637.66833188533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 22346.790947120677,
            "unit": "ns/iter",
            "extra": "iterations: 37292\ncpu: 22345.728306339155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 22429.722198124575,
            "unit": "ns/iter",
            "extra": "iterations: 36886\ncpu: 22427.688011711765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 52586.783300000665,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52585.05999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 629415.9610000065,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 629387.0000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 510801.18300001236,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510787.1000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 512455.4420000322,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512440.5000000039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 508192.50100005325,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508171.6000000043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 378588.8284734123,
            "unit": "ns/iter",
            "extra": "iterations: 2332\ncpu: 378580.06003430387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 509162.86399996124,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509136.0999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 317.08684746727744,
            "unit": "ns/iter",
            "extra": "iterations: 2209506\ncpu: 317.0866247930536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2685.5418339538437,
            "unit": "ns/iter",
            "extra": "iterations: 260530\ncpu: 2685.482286109075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1799.6341326435522,
            "unit": "ns/iter",
            "extra": "iterations: 388168\ncpu: 1799.5945054718466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1915.0643278117086,
            "unit": "ns/iter",
            "extra": "iterations: 394153\ncpu: 1915.0091461945033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1493.6056056805899,
            "unit": "ns/iter",
            "extra": "iterations: 467276\ncpu: 1493.5860176854699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 11710.793856265407,
            "unit": "ns/iter",
            "extra": "iterations: 59638\ncpu: 11710.380965156457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 33104.63669863572,
            "unit": "ns/iter",
            "extra": "iterations: 21167\ncpu: 33103.651910993496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7703.30725300461,
            "unit": "ns/iter",
            "extra": "iterations: 90528\ncpu: 7702.979188759345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7665.72289090902,
            "unit": "ns/iter",
            "extra": "iterations: 91639\ncpu: 7665.293161208661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7668.5536349934555,
            "unit": "ns/iter",
            "extra": "iterations: 91582\ncpu: 7668.443580616278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 16515.008700778697,
            "unit": "ns/iter",
            "extra": "iterations: 42410\ncpu: 16513.89294977599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 15219.124519032739,
            "unit": "ns/iter",
            "extra": "iterations: 46001\ncpu: 15218.171344101283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 4202.798786223182,
            "unit": "ns/iter",
            "extra": "iterations: 166917\ncpu: 4202.627653264795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 21659.720792143067,
            "unit": "ns/iter",
            "extra": "iterations: 30651\ncpu: 21658.62451469784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 17019.417059653533,
            "unit": "ns/iter",
            "extra": "iterations: 41138\ncpu: 17018.581360299475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 17122.716185450015,
            "unit": "ns/iter",
            "extra": "iterations: 38652\ncpu: 17121.781537824743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 17811.197600492542,
            "unit": "ns/iter",
            "extra": "iterations: 39008\ncpu: 17810.059474979465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 37627.97164361313,
            "unit": "ns/iter",
            "extra": "iterations: 18867\ncpu: 37626.48539778481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 154361.22275606805,
            "unit": "ns/iter",
            "extra": "iterations: 4579\ncpu: 154352.9591613888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 133267.47305275244,
            "unit": "ns/iter",
            "extra": "iterations: 5251\ncpu: 133259.0173300336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 131698.64972811076,
            "unit": "ns/iter",
            "extra": "iterations: 5333\ncpu: 131688.67429214204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 134570.5881795778,
            "unit": "ns/iter",
            "extra": "iterations: 5279\ncpu: 134561.9814358783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 78853.70478334537,
            "unit": "ns/iter",
            "extra": "iterations: 8885\ncpu: 78853.7084974678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 131268.05506649535,
            "unit": "ns/iter",
            "extra": "iterations: 5339\ncpu: 131260.29218954727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 4126.443256579113,
            "unit": "ns/iter",
            "extra": "iterations: 169024\ncpu: 4126.363711662202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 21474.697682292604,
            "unit": "ns/iter",
            "extra": "iterations: 32489\ncpu: 21473.400227769678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 16898.268448966664,
            "unit": "ns/iter",
            "extra": "iterations: 41669\ncpu: 16897.57133600529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 16842.274564824405,
            "unit": "ns/iter",
            "extra": "iterations: 42052\ncpu: 16841.498620755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 17638.817552950703,
            "unit": "ns/iter",
            "extra": "iterations: 39754\ncpu: 17637.70186647873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 36481.56395046123,
            "unit": "ns/iter",
            "extra": "iterations: 19218\ncpu: 36479.13934852755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 150063.90759358485,
            "unit": "ns/iter",
            "extra": "iterations: 4675\ncpu: 150055.78609625544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 131598.460843368,
            "unit": "ns/iter",
            "extra": "iterations: 5312\ncpu: 131588.46009036317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 130246.4601769914,
            "unit": "ns/iter",
            "extra": "iterations: 5311\ncpu: 130238.29787234095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 131641.36833176657,
            "unit": "ns/iter",
            "extra": "iterations: 5305\ncpu: 131638.26578699326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 77763.65826299129,
            "unit": "ns/iter",
            "extra": "iterations: 9004\ncpu: 77758.31852510067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 129575.89829881086,
            "unit": "ns/iter",
            "extra": "iterations: 5408\ncpu: 129567.76997041523 ns\nthreads: 1"
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
        "date": 1702398775801,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 962.6010070283238,
            "unit": "ns/iter",
            "extra": "iterations: 726494\ncpu: 962.5757404741126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 19652.348039447388,
            "unit": "ns/iter",
            "extra": "iterations: 42386\ncpu: 19652.441844005098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 44719.262409215386,
            "unit": "ns/iter",
            "extra": "iterations: 19965\ncpu: 44717.75106436263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 55875.38380000297,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55875.629999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 68428.74453365068,
            "unit": "ns/iter",
            "extra": "iterations: 11708\ncpu: 68425.16228220018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 85074.48957724599,
            "unit": "ns/iter",
            "extra": "iterations: 10266\ncpu: 85070.84550944869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 102328.43867481317,
            "unit": "ns/iter",
            "extra": "iterations: 8512\ncpu: 102322.27443609023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 132539.83964334245,
            "unit": "ns/iter",
            "extra": "iterations: 7290\ncpu: 132536.66666666672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 151227.3439024338,
            "unit": "ns/iter",
            "extra": "iterations: 5740\ncpu: 151219.47735191634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 812.0252010010047,
            "unit": "ns/iter",
            "extra": "iterations: 856712\ncpu: 811.9992482888065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 639.5659665665579,
            "unit": "ns/iter",
            "extra": "iterations: 1094653\ncpu: 639.5504328769026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 607.1726637264841,
            "unit": "ns/iter",
            "extra": "iterations: 899274\ncpu: 607.1666700026894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 624.7422029348476,
            "unit": "ns/iter",
            "extra": "iterations: 1120133\ncpu: 624.7265280105134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1227.1102561899295,
            "unit": "ns/iter",
            "extra": "iterations: 570163\ncpu: 1227.089095574422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5393.888389999688,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5393.661000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 28942.093539728154,
            "unit": "ns/iter",
            "extra": "iterations: 28683\ncpu: 28941.927273995025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 22330.611521455387,
            "unit": "ns/iter",
            "extra": "iterations: 39127\ncpu: 22329.976742402927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 22536.204010201887,
            "unit": "ns/iter",
            "extra": "iterations: 36856\ncpu: 22535.977859778603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 22616.101259967796,
            "unit": "ns/iter",
            "extra": "iterations: 36747\ncpu: 22615.865240699954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 53059.7709999995,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53060.14999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 630831.440999998,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 630765.3000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 507165.8980000393,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507142.20000000054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 510423.7400000216,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510426.1000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 502038.12000000884,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 502031.0999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 374077.89507495286,
            "unit": "ns/iter",
            "extra": "iterations: 2335\ncpu: 374069.50749464676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 501236.45700000454,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501239.30000000173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2884863.5775074465,
            "unit": "ns/iter",
            "extra": "iterations: 329\ncpu: 2884799.088145894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1252537.3942180977,
            "unit": "ns/iter",
            "extra": "iterations: 761\ncpu: 1252523.5216819942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3697020.549019521,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3696927.8431372577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5548.4695500001635,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5548.359999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 30748.239868726814,
            "unit": "ns/iter",
            "extra": "iterations: 27119\ncpu: 30746.469265090822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 22690.886005989494,
            "unit": "ns/iter",
            "extra": "iterations: 36730\ncpu: 22690.269534440515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 22447.100437392295,
            "unit": "ns/iter",
            "extra": "iterations: 36809\ncpu: 22446.333777065407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 22656.85767535524,
            "unit": "ns/iter",
            "extra": "iterations: 36754\ncpu: 22656.540784676556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 54107.07130000105,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54106.61000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 636287.85100002,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 636279.3000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 523437.1039999815,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 523425.4000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 520644.22099999775,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520625.20000000135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 522280.8299999997,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522260.59999999567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 375037.1276955496,
            "unit": "ns/iter",
            "extra": "iterations: 2365\ncpu: 375035.5602536992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 510579.8669999899,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510565.69999999367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 3029940.2483871244,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 3029914.1935484023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1235018.2486979093,
            "unit": "ns/iter",
            "extra": "iterations: 768\ncpu: 1234916.6666666688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5438.9004200004365,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5438.801000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 31003.61649615258,
            "unit": "ns/iter",
            "extra": "iterations: 26782\ncpu: 31002.12829512373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 22987.960029978054,
            "unit": "ns/iter",
            "extra": "iterations: 36027\ncpu: 22987.40389152588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 22613.815166644312,
            "unit": "ns/iter",
            "extra": "iterations: 37055\ncpu: 22613.05896640128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 22822.615605827832,
            "unit": "ns/iter",
            "extra": "iterations: 36512\ncpu: 22822.33238387381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 52778.34180000127,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52776.83999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 622160.9839999473,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 622131.5000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 508765.6860000038,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508755.39999999834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 510775.43200000265,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510744.5000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 510966.9290000056,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510834.200000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 377297.64827586536,
            "unit": "ns/iter",
            "extra": "iterations: 2320\ncpu: 377276.5086206896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 509127.30400000326,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509113.7999999944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 324.50762660158944,
            "unit": "ns/iter",
            "extra": "iterations: 2130700\ncpu: 324.50354343642806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2745.07183379564,
            "unit": "ns/iter",
            "extra": "iterations: 256648\ncpu: 2745.06054985817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1930.968004255729,
            "unit": "ns/iter",
            "extra": "iterations: 360923\ncpu: 1930.9481523759862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1918.0461290746139,
            "unit": "ns/iter",
            "extra": "iterations: 364564\ncpu: 1918.0152181784326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1490.7956875455009,
            "unit": "ns/iter",
            "extra": "iterations: 468689\ncpu: 1490.7593308142416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 11643.436803618175,
            "unit": "ns/iter",
            "extra": "iterations: 60581\ncpu: 11633.457684752613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 32470.7481927714,
            "unit": "ns/iter",
            "extra": "iterations: 21580\ncpu: 32469.13809082463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7570.604276919485,
            "unit": "ns/iter",
            "extra": "iterations: 92590\ncpu: 7570.213845987651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7501.669326629785,
            "unit": "ns/iter",
            "extra": "iterations: 93485\ncpu: 7501.525378403008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7601.777329690794,
            "unit": "ns/iter",
            "extra": "iterations: 92244\ncpu: 7601.365942500307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 16352.664831319587,
            "unit": "ns/iter",
            "extra": "iterations: 42862\ncpu: 16352.001773132359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 13416.615766664181,
            "unit": "ns/iter",
            "extra": "iterations: 52148\ncpu: 13415.676536012843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 4129.969685743414,
            "unit": "ns/iter",
            "extra": "iterations: 170052\ncpu: 4129.8349916496245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 22004.388244877744,
            "unit": "ns/iter",
            "extra": "iterations: 31918\ncpu: 22003.17062472598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 16996.032040718157,
            "unit": "ns/iter",
            "extra": "iterations: 41260\ncpu: 16995.317498788012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 16513.583305309734,
            "unit": "ns/iter",
            "extra": "iterations: 41630\ncpu: 16512.96901273119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 17534.838437117436,
            "unit": "ns/iter",
            "extra": "iterations: 40003\ncpu: 17534.47741419395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 37234.014957830885,
            "unit": "ns/iter",
            "extra": "iterations: 18853\ncpu: 37233.22017716032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 151600.76934717133,
            "unit": "ns/iter",
            "extra": "iterations: 4626\ncpu: 151599.80544747025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 131219.83074039355,
            "unit": "ns/iter",
            "extra": "iterations: 5335\ncpu: 131215.8200562328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 129601.28163265596,
            "unit": "ns/iter",
            "extra": "iterations: 5390\ncpu: 129601.81818181803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 132533.31647481432,
            "unit": "ns/iter",
            "extra": "iterations: 5299\ncpu: 132533.8931873957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 77472.79228717613,
            "unit": "ns/iter",
            "extra": "iterations: 8998\ncpu: 77470.62680595696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 129210.617418648,
            "unit": "ns/iter",
            "extra": "iterations: 5408\ncpu: 129206.80473372678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 4074.683764919709,
            "unit": "ns/iter",
            "extra": "iterations: 171499\ncpu: 4074.3806086332943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 21251.822365827073,
            "unit": "ns/iter",
            "extra": "iterations: 32961\ncpu: 21251.721731743695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 16712.586751090155,
            "unit": "ns/iter",
            "extra": "iterations: 41694\ncpu: 16711.301386290477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 16492.16774451567,
            "unit": "ns/iter",
            "extra": "iterations: 42523\ncpu: 16492.037250429265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 17615.703379881572,
            "unit": "ns/iter",
            "extra": "iterations: 40031\ncpu: 17615.45302390644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 36463.56380099862,
            "unit": "ns/iter",
            "extra": "iterations: 19216\ncpu: 36462.859075770124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 149435.14123445805,
            "unit": "ns/iter",
            "extra": "iterations: 4666\ncpu: 149431.89027003894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 128614.91257238979,
            "unit": "ns/iter",
            "extra": "iterations: 5353\ncpu: 128613.22622828287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 129432.84506002424,
            "unit": "ns/iter",
            "extra": "iterations: 5415\ncpu: 129432.13296398823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 131881.89374528365,
            "unit": "ns/iter",
            "extra": "iterations: 5308\ncpu: 131878.56066314882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 76862.22007042347,
            "unit": "ns/iter",
            "extra": "iterations: 9088\ncpu: 76858.26364436658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 129515.8456140378,
            "unit": "ns/iter",
            "extra": "iterations: 5415\ncpu: 129512.29916897565 ns\nthreads: 1"
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
        "date": 1702409111140,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 890.1502729311534,
            "unit": "ns/iter",
            "extra": "iterations: 783714\ncpu: 890.1250966551573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 18476.0980005758,
            "unit": "ns/iter",
            "extra": "iterations: 45163\ncpu: 18475.488785067424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 43470.6829268294,
            "unit": "ns/iter",
            "extra": "iterations: 21033\ncpu: 43469.4670280036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 54197.77299999851,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54195.290000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 64866.809256663044,
            "unit": "ns/iter",
            "extra": "iterations: 12121\ncpu: 64863.8726177708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 82174.6374453813,
            "unit": "ns/iter",
            "extra": "iterations: 10757\ncpu: 82171.98103560475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 98300.82917272563,
            "unit": "ns/iter",
            "extra": "iterations: 8933\ncpu: 98296.31702675471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 125867.69752045034,
            "unit": "ns/iter",
            "extra": "iterations: 7703\ncpu: 125863.33895884719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 144849.57223984782,
            "unit": "ns/iter",
            "extra": "iterations: 5987\ncpu: 144846.30031735427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 716.6919117915587,
            "unit": "ns/iter",
            "extra": "iterations: 957505\ncpu: 716.6835682320207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 583.6318534921561,
            "unit": "ns/iter",
            "extra": "iterations: 1199881\ncpu: 583.6111247698726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 587.4518734605002,
            "unit": "ns/iter",
            "extra": "iterations: 1185053\ncpu: 587.4328827487054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 579.2175375891649,
            "unit": "ns/iter",
            "extra": "iterations: 1206996\ncpu: 579.2039907340212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1167.2365191688043,
            "unit": "ns/iter",
            "extra": "iterations: 600167\ncpu: 1167.1999626770548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5432.8791141039765,
            "unit": "ns/iter",
            "extra": "iterations: 147602\ncpu: 5432.474492215554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 29001.891276245213,
            "unit": "ns/iter",
            "extra": "iterations: 28623\ncpu: 29000.793068511346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 20964.9749710605,
            "unit": "ns/iter",
            "extra": "iterations: 38875\ncpu: 20963.657877813508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 21246.87024585564,
            "unit": "ns/iter",
            "extra": "iterations: 38966\ncpu: 21246.194117949024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 20658.00884470584,
            "unit": "ns/iter",
            "extra": "iterations: 40137\ncpu: 20656.98980990106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 52168.92590000271,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52166.860000000175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 592483.4769999734,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 592461.7000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 601686.344205409,
            "unit": "ns/iter",
            "extra": "iterations: 1441\ncpu: 601655.9333795971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 613635.8603666798,
            "unit": "ns/iter",
            "extra": "iterations: 1418\ncpu: 613588.6459802545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 612869.9683766968,
            "unit": "ns/iter",
            "extra": "iterations: 1423\ncpu: 612834.85593816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 372727.4326758201,
            "unit": "ns/iter",
            "extra": "iterations: 2332\ncpu: 372711.4922813032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 606102.3713286616,
            "unit": "ns/iter",
            "extra": "iterations: 1430\ncpu: 606062.2377622364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2874266.4610593175,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2874124.6105919005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1234757.2796833527,
            "unit": "ns/iter",
            "extra": "iterations: 758\ncpu: 1234704.8812664896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3670373.9645668156,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3670324.803149607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5071.152940000161,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5070.963999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 28820.521548117482,
            "unit": "ns/iter",
            "extra": "iterations: 28680\ncpu: 28819.76290097628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 21306.127132819594,
            "unit": "ns/iter",
            "extra": "iterations: 38857\ncpu: 21305.504799649963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 21162.308767797676,
            "unit": "ns/iter",
            "extra": "iterations: 39052\ncpu: 21162.048038512814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 21223.438998045505,
            "unit": "ns/iter",
            "extra": "iterations: 38884\ncpu: 21222.448822137616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 51567.421999999395,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51564.86999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 610890.4430000166,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 610872.4999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 507394.176000048,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507373.00000000116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 500445.33599998435,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500427.1999999972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 503424.1289999955,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503424.1000000037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 366716.64345285663,
            "unit": "ns/iter",
            "extra": "iterations: 2398\ncpu: 366698.54045037524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 626144.9026297015,
            "unit": "ns/iter",
            "extra": "iterations: 1407\ncpu: 626119.9004975122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 3042373.4031746644,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 3042263.809523826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1260431.4122340463,
            "unit": "ns/iter",
            "extra": "iterations: 752\ncpu: 1260367.8191489412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5057.606959999816,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5057.331999999946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 28844.845320745095,
            "unit": "ns/iter",
            "extra": "iterations: 28808\ncpu: 28843.043599000295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 21282.7844001629,
            "unit": "ns/iter",
            "extra": "iterations: 39244\ncpu: 21281.823973091352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 21211.881834170777,
            "unit": "ns/iter",
            "extra": "iterations: 39233\ncpu: 21211.031529579628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 21372.233884213885,
            "unit": "ns/iter",
            "extra": "iterations: 38968\ncpu: 21371.625436255476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 50815.59839999841,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50814.21999999946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 631462.4149999872,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 631423.3000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 504851.34499996324,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504851.00000000215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 503111.56199995824,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503111.5000000028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 503708.5769999976,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503672.4999999933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 369049.71830394975,
            "unit": "ns/iter",
            "extra": "iterations: 2382\ncpu: 369036.8597816961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 625420.4669978458,
            "unit": "ns/iter",
            "extra": "iterations: 1409\ncpu: 625383.1795599728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 321.93793032770884,
            "unit": "ns/iter",
            "extra": "iterations: 2175958\ncpu: 321.93709621233586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2260.6407142533917,
            "unit": "ns/iter",
            "extra": "iterations: 309862\ncpu: 2260.5792255907572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1767.1124694931987,
            "unit": "ns/iter",
            "extra": "iterations: 396632\ncpu: 1767.0286310736396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1800.2251983974932,
            "unit": "ns/iter",
            "extra": "iterations: 391890\ncpu: 1800.1079384521072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1379.9361119040957,
            "unit": "ns/iter",
            "extra": "iterations: 507935\ncpu: 1379.8917184285374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 10914.148873377828,
            "unit": "ns/iter",
            "extra": "iterations: 64041\ncpu: 10913.622523071157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 31003.809703313356,
            "unit": "ns/iter",
            "extra": "iterations: 22549\ncpu: 31002.82939376466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7268.136980742865,
            "unit": "ns/iter",
            "extra": "iterations: 96123\ncpu: 7267.729887748011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7293.622520207432,
            "unit": "ns/iter",
            "extra": "iterations: 96127\ncpu: 7293.462814817927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7231.27581658609,
            "unit": "ns/iter",
            "extra": "iterations: 96285\ncpu: 7231.045334164157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 15619.158942160175,
            "unit": "ns/iter",
            "extra": "iterations: 45073\ncpu: 15618.112839171918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 14310.05595394269,
            "unit": "ns/iter",
            "extra": "iterations: 48808\ncpu: 14309.4718079004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3940.6977673379474,
            "unit": "ns/iter",
            "extra": "iterations: 177949\ncpu: 3940.4750799386316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 19706.239251781742,
            "unit": "ns/iter",
            "extra": "iterations: 33680\ncpu: 19705.590855106675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 15846.14763557758,
            "unit": "ns/iter",
            "extra": "iterations: 44366\ncpu: 15845.309471216522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 15986.7444284441,
            "unit": "ns/iter",
            "extra": "iterations: 43749\ncpu: 15986.095682187124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 16535.79519445446,
            "unit": "ns/iter",
            "extra": "iterations: 42118\ncpu: 16535.255710147518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 34547.52535587079,
            "unit": "ns/iter",
            "extra": "iterations: 20232\ncpu: 34546.21886121017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 142406.41407528787,
            "unit": "ns/iter",
            "extra": "iterations: 4888\ncpu: 142403.60065466282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 124086.63208215301,
            "unit": "ns/iter",
            "extra": "iterations: 5648\ncpu: 124083.10906515748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 122692.72038495338,
            "unit": "ns/iter",
            "extra": "iterations: 5715\ncpu: 122687.48906386773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 124674.07663584298,
            "unit": "ns/iter",
            "extra": "iterations: 5624\ncpu: 124666.9096728313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 73423.01816845303,
            "unit": "ns/iter",
            "extra": "iterations: 9522\ncpu: 73419.94328922564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 122514.34939335434,
            "unit": "ns/iter",
            "extra": "iterations: 5687\ncpu: 122507.45560049212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3875.9176488825865,
            "unit": "ns/iter",
            "extra": "iterations: 180629\ncpu: 3875.681645804341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 19168.497880603292,
            "unit": "ns/iter",
            "extra": "iterations: 36567\ncpu: 19167.147974949916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 15619.055943584885,
            "unit": "ns/iter",
            "extra": "iterations: 44527\ncpu: 15618.81105845885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 15374.309227425061,
            "unit": "ns/iter",
            "extra": "iterations: 45549\ncpu: 15374.265077169464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 16399.209071961664,
            "unit": "ns/iter",
            "extra": "iterations: 42703\ncpu: 16398.79399573769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 34482.18194807219,
            "unit": "ns/iter",
            "extra": "iterations: 20297\ncpu: 34481.386411785505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 142162.5298174437,
            "unit": "ns/iter",
            "extra": "iterations: 4930\ncpu: 142155.8823529412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 123386.22186892899,
            "unit": "ns/iter",
            "extra": "iterations: 5661\ncpu: 123382.44126479265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 121943.36487192506,
            "unit": "ns/iter",
            "extra": "iterations: 5739\ncpu: 121936.17354939737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 122409.73469748483,
            "unit": "ns/iter",
            "extra": "iterations: 5669\ncpu: 122403.06932439438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 73282.08781305795,
            "unit": "ns/iter",
            "extra": "iterations: 9543\ncpu: 73279.90149847962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 121502.47475273642,
            "unit": "ns/iter",
            "extra": "iterations: 5763\ncpu: 121500.03470414723 ns\nthreads: 1"
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
        "date": 1702412540573,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 825.2163098277374,
            "unit": "ns/iter",
            "extra": "iterations: 844779\ncpu: 825.189664989305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12042.607270020442,
            "unit": "ns/iter",
            "extra": "iterations: 68528\ncpu: 12042.102498248889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 26467.96906601397,
            "unit": "ns/iter",
            "extra": "iterations: 31842\ncpu: 26466.239557816712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 41742.80912048794,
            "unit": "ns/iter",
            "extra": "iterations: 20898\ncpu: 41741.630778064864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 53510.26355128395,
            "unit": "ns/iter",
            "extra": "iterations: 15921\ncpu: 53508.988128886376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 52417.09019999803,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52415.35000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 63722.73080298315,
            "unit": "ns/iter",
            "extra": "iterations: 13674\ncpu: 63720.4695041685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 73779.06981084227,
            "unit": "ns/iter",
            "extra": "iterations: 11789\ncpu: 73776.08787853085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 83881.2527281479,
            "unit": "ns/iter",
            "extra": "iterations: 10355\ncpu: 83879.28536938678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 643.8773268484681,
            "unit": "ns/iter",
            "extra": "iterations: 1093002\ncpu: 643.8560039231401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 541.4963066019161,
            "unit": "ns/iter",
            "extra": "iterations: 1272947\ncpu: 541.4654341461185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 542.6332405419311,
            "unit": "ns/iter",
            "extra": "iterations: 1288553\ncpu: 542.6147003654479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 542.3151991026252,
            "unit": "ns/iter",
            "extra": "iterations: 1287326\ncpu: 542.3057562730806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1044.3599231132011,
            "unit": "ns/iter",
            "extra": "iterations: 670596\ncpu: 1044.2736013933877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4111.057917199581,
            "unit": "ns/iter",
            "extra": "iterations: 194709\ncpu: 4110.992814918674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 18907.815637043077,
            "unit": "ns/iter",
            "extra": "iterations: 43333\ncpu: 18907.384672189793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15038.817747741206,
            "unit": "ns/iter",
            "extra": "iterations: 54452\ncpu: 15038.128994343657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15371.794490607173,
            "unit": "ns/iter",
            "extra": "iterations: 53073\ncpu: 15370.981478341155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15168.368098838582,
            "unit": "ns/iter",
            "extra": "iterations: 54230\ncpu: 15167.75216669738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 42411.36971323656,
            "unit": "ns/iter",
            "extra": "iterations: 20121\ncpu: 42410.30266885348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 511188.0868804735,
            "unit": "ns/iter",
            "extra": "iterations: 1715\ncpu: 511153.35276967945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 420154.82688587916,
            "unit": "ns/iter",
            "extra": "iterations: 2068\ncpu: 420138.78143133404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 413971.6293975817,
            "unit": "ns/iter",
            "extra": "iterations: 2075\ncpu: 413946.74698795093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 421778.9802789957,
            "unit": "ns/iter",
            "extra": "iterations: 2079\ncpu: 421770.08177008206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 258165.52604942032,
            "unit": "ns/iter",
            "extra": "iterations: 3359\ncpu: 258155.84995534367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 413718.62286526343,
            "unit": "ns/iter",
            "extra": "iterations: 2108\ncpu: 413702.5616698285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2071336.200445478,
            "unit": "ns/iter",
            "extra": "iterations: 449\ncpu: 2071109.3541202703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 839096.6538804224,
            "unit": "ns/iter",
            "extra": "iterations: 1121\ncpu: 839061.9982158791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2765609.949253656,
            "unit": "ns/iter",
            "extra": "iterations: 335\ncpu: 2765486.2686567158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4180.302210168366,
            "unit": "ns/iter",
            "extra": "iterations: 195053\ncpu: 4180.153599278137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19487.567193395356,
            "unit": "ns/iter",
            "extra": "iterations: 42400\ncpu: 19487.124999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15499.087544110169,
            "unit": "ns/iter",
            "extra": "iterations: 53276\ncpu: 15498.305052931893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15148.350192979067,
            "unit": "ns/iter",
            "extra": "iterations: 54410\ncpu: 15148.241132144913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15263.848207488392,
            "unit": "ns/iter",
            "extra": "iterations: 53863\ncpu: 15263.485138221025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41246.615545175206,
            "unit": "ns/iter",
            "extra": "iterations: 20122\ncpu: 41245.482556406176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 528902.4770922421,
            "unit": "ns/iter",
            "extra": "iterations: 1637\ncpu: 528885.8888210155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 431607.1959224094,
            "unit": "ns/iter",
            "extra": "iterations: 2011\ncpu: 431585.8279462962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 427629.51923077775,
            "unit": "ns/iter",
            "extra": "iterations: 2028\ncpu: 427616.32149901474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 426108.82647060894,
            "unit": "ns/iter",
            "extra": "iterations: 2040\ncpu: 426094.4607843161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 254888.34899913368,
            "unit": "ns/iter",
            "extra": "iterations: 3447\ncpu: 254878.47403539324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 421658.60163776664,
            "unit": "ns/iter",
            "extra": "iterations: 2076\ncpu: 421644.9903660885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2068856.920993228,
            "unit": "ns/iter",
            "extra": "iterations: 443\ncpu: 2068636.1173814894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 823431.7124010794,
            "unit": "ns/iter",
            "extra": "iterations: 1137\ncpu: 823395.3386103766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4344.553536915071,
            "unit": "ns/iter",
            "extra": "iterations: 183677\ncpu: 4344.344692040928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19515.331165272954,
            "unit": "ns/iter",
            "extra": "iterations: 41973\ncpu: 19514.45453029333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15716.711792018401,
            "unit": "ns/iter",
            "extra": "iterations: 51043\ncpu: 15715.75534353386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15407.619725126522,
            "unit": "ns/iter",
            "extra": "iterations: 51660\ncpu: 15407.133178474629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15559.78617037535,
            "unit": "ns/iter",
            "extra": "iterations: 52308\ncpu: 15558.891565343694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 40977.97581937603,
            "unit": "ns/iter",
            "extra": "iterations: 20595\ncpu: 40975.83394027686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 508036.60640191345,
            "unit": "ns/iter",
            "extra": "iterations: 1687\ncpu: 508013.2780082995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 418469.6600675993,
            "unit": "ns/iter",
            "extra": "iterations: 2071\ncpu: 418466.972477064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 414641.73054754874,
            "unit": "ns/iter",
            "extra": "iterations: 2082\ncpu: 414631.7002881872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 415452.85563040985,
            "unit": "ns/iter",
            "extra": "iterations: 2078\ncpu: 415434.2637151105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 255609.59523809172,
            "unit": "ns/iter",
            "extra": "iterations: 3486\ncpu: 255607.94606999392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 412628.26524824044,
            "unit": "ns/iter",
            "extra": "iterations: 2115\ncpu: 412614.84633569745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 324.8466128733654,
            "unit": "ns/iter",
            "extra": "iterations: 2165449\ncpu: 324.8358192688894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1857.0775730357275,
            "unit": "ns/iter",
            "extra": "iterations: 377657\ncpu: 1857.0229070294054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1461.2745621548834,
            "unit": "ns/iter",
            "extra": "iterations: 479793\ncpu: 1461.2476630547014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1404.778857009703,
            "unit": "ns/iter",
            "extra": "iterations: 497782\ncpu: 1404.6739335693117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1158.178210105082,
            "unit": "ns/iter",
            "extra": "iterations: 603041\ncpu: 1158.1142907364406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7383.490794395718,
            "unit": "ns/iter",
            "extra": "iterations: 95431\ncpu: 7383.10402280182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 20991.199424132108,
            "unit": "ns/iter",
            "extra": "iterations: 33341\ncpu: 20990.501184727796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5086.467110668463,
            "unit": "ns/iter",
            "extra": "iterations: 137537\ncpu: 5086.426925118296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5037.0771195427815,
            "unit": "ns/iter",
            "extra": "iterations: 138603\ncpu: 5036.850573219951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5087.0916767101935,
            "unit": "ns/iter",
            "extra": "iterations: 137734\ncpu: 5086.868166175344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10628.05363235204,
            "unit": "ns/iter",
            "extra": "iterations: 65949\ncpu: 10627.484874675945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9825.574151392992,
            "unit": "ns/iter",
            "extra": "iterations: 73768\ncpu: 9825.043379243145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3200.0401601462413,
            "unit": "ns/iter",
            "extra": "iterations: 218550\ncpu: 3199.8956760466817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16124.08933207677,
            "unit": "ns/iter",
            "extra": "iterations: 43523\ncpu: 16123.155572915399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12938.596935867165,
            "unit": "ns/iter",
            "extra": "iterations: 54371\ncpu: 12938.213385812145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12848.776928307741,
            "unit": "ns/iter",
            "extra": "iterations: 54413\ncpu: 12848.10431330743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13391.617584603988,
            "unit": "ns/iter",
            "extra": "iterations: 52273\ncpu: 13391.16561130992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28888.12871654991,
            "unit": "ns/iter",
            "extra": "iterations: 24216\ncpu: 28886.07119259977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 109135.7709278673,
            "unit": "ns/iter",
            "extra": "iterations: 6391\ncpu: 109130.79330308418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 94190.86194833329,
            "unit": "ns/iter",
            "extra": "iterations: 7432\ncpu: 94184.74165769755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 94102.8766957672,
            "unit": "ns/iter",
            "extra": "iterations: 7445\ncpu: 94097.34049697754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 93624.66613161974,
            "unit": "ns/iter",
            "extra": "iterations: 7476\ncpu: 93623.9566613169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 60612.767407667634,
            "unit": "ns/iter",
            "extra": "iterations: 11561\ncpu: 60608.54597353176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 94558.11017638458,
            "unit": "ns/iter",
            "extra": "iterations: 7370\ncpu: 94553.58208955318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3164.4810985048875,
            "unit": "ns/iter",
            "extra": "iterations: 220882\ncpu: 3164.263724522589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16084.27799709677,
            "unit": "ns/iter",
            "extra": "iterations: 44076\ncpu: 16083.746256466075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12816.449227231915,
            "unit": "ns/iter",
            "extra": "iterations: 54803\ncpu: 12815.74183895065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12707.844704259727,
            "unit": "ns/iter",
            "extra": "iterations: 55082\ncpu: 12707.17657310935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13350.738030317489,
            "unit": "ns/iter",
            "extra": "iterations: 52445\ncpu: 13350.075316998948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27948.166699938258,
            "unit": "ns/iter",
            "extra": "iterations: 25045\ncpu: 27947.039329207197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 106920.75827865324,
            "unit": "ns/iter",
            "extra": "iterations: 6553\ncpu: 106919.92980314398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 91948.80102442595,
            "unit": "ns/iter",
            "extra": "iterations: 7614\ncpu: 91942.15918045769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 91504.64925761835,
            "unit": "ns/iter",
            "extra": "iterations: 7678\ncpu: 91501.40661630697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 91058.23209652147,
            "unit": "ns/iter",
            "extra": "iterations: 7708\ncpu: 91054.1385573433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 60195.0116898726,
            "unit": "ns/iter",
            "extra": "iterations: 11634\ncpu: 60193.35568162376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 92288.4437409323,
            "unit": "ns/iter",
            "extra": "iterations: 7581\ncpu: 92287.70610737367 ns\nthreads: 1"
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
        "date": 1702415984887,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 797.6473918803931,
            "unit": "ns/iter",
            "extra": "iterations: 882379\ncpu: 797.6019374894462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11962.233020184296,
            "unit": "ns/iter",
            "extra": "iterations: 69509\ncpu: 11961.922916456862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 26656.53140249685,
            "unit": "ns/iter",
            "extra": "iterations: 31558\ncpu: 26655.526332467194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 42304.80324180693,
            "unit": "ns/iter",
            "extra": "iterations: 19557\ncpu: 42303.56394129976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 50950.26926158343,
            "unit": "ns/iter",
            "extra": "iterations: 14978\ncpu: 50947.28268126585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 52586.44030000141,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52584.579999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 63780.809826251825,
            "unit": "ns/iter",
            "extra": "iterations: 13698\ncpu: 63778.033289531326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 73156.55366802005,
            "unit": "ns/iter",
            "extra": "iterations: 11832\ncpu: 73154.29344151457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 84946.45263563494,
            "unit": "ns/iter",
            "extra": "iterations: 10377\ncpu: 84939.33699527803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 652.3600692570411,
            "unit": "ns/iter",
            "extra": "iterations: 1069061\ncpu: 652.3257325821447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 547.1137717707148,
            "unit": "ns/iter",
            "extra": "iterations: 1277461\ncpu: 547.1017901916379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 557.5681505434223,
            "unit": "ns/iter",
            "extra": "iterations: 1258640\ncpu: 557.5553772325684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 547.4646521795343,
            "unit": "ns/iter",
            "extra": "iterations: 1270828\ncpu: 547.4489860154168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1066.7891414581682,
            "unit": "ns/iter",
            "extra": "iterations: 659665\ncpu: 1066.7023413399208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3915.5914350120306,
            "unit": "ns/iter",
            "extra": "iterations: 200514\ncpu: 3915.43333632564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19867.04114740194,
            "unit": "ns/iter",
            "extra": "iterations: 41485\ncpu: 19865.734602868513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15660.997684042186,
            "unit": "ns/iter",
            "extra": "iterations: 52678\ncpu: 15660.845134591298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15229.165277141741,
            "unit": "ns/iter",
            "extra": "iterations: 54575\ncpu: 15227.92487402656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15391.37883401362,
            "unit": "ns/iter",
            "extra": "iterations: 53860\ncpu: 15391.024879316785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 43009.60320915084,
            "unit": "ns/iter",
            "extra": "iterations: 19756\ncpu: 43007.481271512486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 511354.4680851196,
            "unit": "ns/iter",
            "extra": "iterations: 1692\ncpu: 511332.9196217498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 421930.78692493844,
            "unit": "ns/iter",
            "extra": "iterations: 2065\ncpu: 421913.9951573848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 417718.50834525836,
            "unit": "ns/iter",
            "extra": "iterations: 2097\ncpu: 417706.00858369004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 417593.2365125172,
            "unit": "ns/iter",
            "extra": "iterations: 2076\ncpu: 417573.4585741807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 259828.18954248336,
            "unit": "ns/iter",
            "extra": "iterations: 3366\ncpu: 259808.61556743836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 412292.76069198037,
            "unit": "ns/iter",
            "extra": "iterations: 2081\ncpu: 412277.79913503124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2093684.1300448936,
            "unit": "ns/iter",
            "extra": "iterations: 446\ncpu: 2093254.4843049296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 858513.8498201391,
            "unit": "ns/iter",
            "extra": "iterations: 1112\ncpu: 858471.0431654673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2757658.2477612607,
            "unit": "ns/iter",
            "extra": "iterations: 335\ncpu: 2757369.2537313495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4093.892332124939,
            "unit": "ns/iter",
            "extra": "iterations: 193939\ncpu: 4093.536627496281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19604.59591972556,
            "unit": "ns/iter",
            "extra": "iterations: 42056\ncpu: 19603.873406886072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15560.10165986972,
            "unit": "ns/iter",
            "extra": "iterations: 52715\ncpu: 15559.00787252207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15287.059062234759,
            "unit": "ns/iter",
            "extra": "iterations: 54214\ncpu: 15286.442616298393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15314.977239340771,
            "unit": "ns/iter",
            "extra": "iterations: 53777\ncpu: 15313.877680049087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41214.20969965451,
            "unit": "ns/iter",
            "extra": "iterations: 20310\ncpu: 41212.4126046283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 529949.1459201821,
            "unit": "ns/iter",
            "extra": "iterations: 1679\ncpu: 529928.6480047657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 429020.6079685127,
            "unit": "ns/iter",
            "extra": "iterations: 2033\ncpu: 428997.1962616816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 425377.33220339735,
            "unit": "ns/iter",
            "extra": "iterations: 2065\ncpu: 425358.740920099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 422420.85604236525,
            "unit": "ns/iter",
            "extra": "iterations: 2077\ncpu: 422396.29272990185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 250814.7011461261,
            "unit": "ns/iter",
            "extra": "iterations: 3490\ncpu: 250805.50143266437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 414651.0518482922,
            "unit": "ns/iter",
            "extra": "iterations: 2083\ncpu: 414620.3552568407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2066299.6126126011,
            "unit": "ns/iter",
            "extra": "iterations: 444\ncpu: 2066153.153153154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 836835.4770889608,
            "unit": "ns/iter",
            "extra": "iterations: 1113\ncpu: 836804.4025157242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4379.864765862274,
            "unit": "ns/iter",
            "extra": "iterations: 182905\ncpu: 4379.706404964315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19507.69560506916,
            "unit": "ns/iter",
            "extra": "iterations: 42458\ncpu: 19507.05167459613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15704.990250379384,
            "unit": "ns/iter",
            "extra": "iterations: 52720\ncpu: 15704.226100151749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15441.11781867154,
            "unit": "ns/iter",
            "extra": "iterations: 53472\ncpu: 15440.668013165847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15578.11910655929,
            "unit": "ns/iter",
            "extra": "iterations: 52919\ncpu: 15577.484457378256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41471.290782608,
            "unit": "ns/iter",
            "extra": "iterations: 20125\ncpu: 41470.10683229816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 510853.9291569181,
            "unit": "ns/iter",
            "extra": "iterations: 1708\ncpu: 510835.5386416862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 421490.4498553496,
            "unit": "ns/iter",
            "extra": "iterations: 2074\ncpu: 421470.2507232401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 414791.8029509742,
            "unit": "ns/iter",
            "extra": "iterations: 2101\ncpu: 414774.20276059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 414354.8975961518,
            "unit": "ns/iter",
            "extra": "iterations: 2080\ncpu: 414303.5576923091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 253463.81012295798,
            "unit": "ns/iter",
            "extra": "iterations: 3497\ncpu: 253453.474406634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 410674.63012392254,
            "unit": "ns/iter",
            "extra": "iterations: 2098\ncpu: 410657.0066730219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 321.15877378976745,
            "unit": "ns/iter",
            "extra": "iterations: 2181714\ncpu: 321.1503432622238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1866.844373749213,
            "unit": "ns/iter",
            "extra": "iterations: 373748\ncpu: 1866.7995547802145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1462.963410200931,
            "unit": "ns/iter",
            "extra": "iterations: 478658\ncpu: 1462.9313622670104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1426.4960049232404,
            "unit": "ns/iter",
            "extra": "iterations: 490729\ncpu: 1426.4424967752054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1151.542809450591,
            "unit": "ns/iter",
            "extra": "iterations: 606268\ncpu: 1151.5107180322914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7546.790739034124,
            "unit": "ns/iter",
            "extra": "iterations: 93338\ncpu: 7546.273757740643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 21198.153689644347,
            "unit": "ns/iter",
            "extra": "iterations: 32930\ncpu: 21197.579714545955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5024.356370855441,
            "unit": "ns/iter",
            "extra": "iterations: 139526\ncpu: 5024.220575376659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4979.87130311596,
            "unit": "ns/iter",
            "extra": "iterations: 141200\ncpu: 4979.6848441926195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5031.107355265126,
            "unit": "ns/iter",
            "extra": "iterations: 139220\ncpu: 5030.989800316044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10163.219169931655,
            "unit": "ns/iter",
            "extra": "iterations: 68910\ncpu: 10162.819619793885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9468.034966653135,
            "unit": "ns/iter",
            "extra": "iterations: 73470\ncpu: 9467.852184565123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3217.7723836875143,
            "unit": "ns/iter",
            "extra": "iterations: 217625\ncpu: 3217.666168868489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16021.71091856798,
            "unit": "ns/iter",
            "extra": "iterations: 43742\ncpu: 16021.222166338928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12769.585653163882,
            "unit": "ns/iter",
            "extra": "iterations: 54925\ncpu: 12738.816568047374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12736.0617549102,
            "unit": "ns/iter",
            "extra": "iterations: 54943\ncpu: 12735.629652549189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13260.146382044666,
            "unit": "ns/iter",
            "extra": "iterations: 52889\ncpu: 13259.80260545667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28948.8540609677,
            "unit": "ns/iter",
            "extra": "iterations: 24243\ncpu: 28948.240729282676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 108561.6128322122,
            "unit": "ns/iter",
            "extra": "iterations: 6359\ncpu: 108560.44975625224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 93985.98612963362,
            "unit": "ns/iter",
            "extra": "iterations: 7498\ncpu: 93980.39477193993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 92640.64965351947,
            "unit": "ns/iter",
            "extra": "iterations: 7504\ncpu: 92637.84648187725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 92856.95310015952,
            "unit": "ns/iter",
            "extra": "iterations: 7548\ncpu: 92850.56968733486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 59463.75814824389,
            "unit": "ns/iter",
            "extra": "iterations: 11751\ncpu: 59462.08833290691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 93066.62061636696,
            "unit": "ns/iter",
            "extra": "iterations: 7528\ncpu: 93064.38629117924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3137.7661713599355,
            "unit": "ns/iter",
            "extra": "iterations: 223296\ncpu: 3137.698391372905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15709.331563673655,
            "unit": "ns/iter",
            "extra": "iterations: 44453\ncpu: 15708.759813735845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12715.127454182526,
            "unit": "ns/iter",
            "extra": "iterations: 55110\ncpu: 12714.628923970362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12687.045701218067,
            "unit": "ns/iter",
            "extra": "iterations: 55097\ncpu: 12686.507432346565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13443.852456498118,
            "unit": "ns/iter",
            "extra": "iterations: 52066\ncpu: 13443.241270694725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28029.941230966328,
            "unit": "ns/iter",
            "extra": "iterations: 24826\ncpu: 28029.00990896642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 107030.37277744185,
            "unit": "ns/iter",
            "extra": "iterations: 6524\ncpu: 107024.17228693972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 90940.82486388473,
            "unit": "ns/iter",
            "extra": "iterations: 7714\ncpu: 90936.9717396953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 90477.73145878916,
            "unit": "ns/iter",
            "extra": "iterations: 7753\ncpu: 90475.17090158626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 90270.27460072158,
            "unit": "ns/iter",
            "extra": "iterations: 7764\ncpu: 90262.5965996892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 59876.48553825054,
            "unit": "ns/iter",
            "extra": "iterations: 11686\ncpu: 59874.131439329154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 92356.10591198095,
            "unit": "ns/iter",
            "extra": "iterations: 7544\ncpu: 92353.72481442124 ns\nthreads: 1"
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
        "date": 1702418353987,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 789.8203632080497,
            "unit": "ns/iter",
            "extra": "iterations: 882965\ncpu: 789.8203213037889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11892.300949640401,
            "unit": "ns/iter",
            "extra": "iterations: 69500\ncpu: 11892.307913669061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 26189.135005336408,
            "unit": "ns/iter",
            "extra": "iterations: 31858\ncpu: 26189.111055307938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 43015.697428286556,
            "unit": "ns/iter",
            "extra": "iterations: 20220\ncpu: 43014.32739861523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 51744.0763785132,
            "unit": "ns/iter",
            "extra": "iterations: 15397\ncpu: 51742.5342599208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 52863.95319999997,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52862.09999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 64196.19008325194,
            "unit": "ns/iter",
            "extra": "iterations: 13573\ncpu: 64194.29013482652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 74439.75178997639,
            "unit": "ns/iter",
            "extra": "iterations: 11732\ncpu: 74439.5584725537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 84604.49203211963,
            "unit": "ns/iter",
            "extra": "iterations: 8095\ncpu: 84604.06423718341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 659.2425922689131,
            "unit": "ns/iter",
            "extra": "iterations: 1064226\ncpu: 659.2103556951243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 560.7528906838223,
            "unit": "ns/iter",
            "extra": "iterations: 1240018\ncpu: 560.7211346932062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 553.807614826261,
            "unit": "ns/iter",
            "extra": "iterations: 1249431\ncpu: 553.7936868862704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 556.8645342580431,
            "unit": "ns/iter",
            "extra": "iterations: 1266549\ncpu: 556.8684669918028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1055.498689106262,
            "unit": "ns/iter",
            "extra": "iterations: 660618\ncpu: 1055.4844100524053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4020.3332408135957,
            "unit": "ns/iter",
            "extra": "iterations: 194553\ncpu: 4020.2916428942267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19728.620676394585,
            "unit": "ns/iter",
            "extra": "iterations: 41603\ncpu: 19728.137393937945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15741.72505585517,
            "unit": "ns/iter",
            "extra": "iterations: 52367\ncpu: 15741.424943189406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15442.644037248087,
            "unit": "ns/iter",
            "extra": "iterations: 53264\ncpu: 15440.66911985582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14871.56160567069,
            "unit": "ns/iter",
            "extra": "iterations: 52763\ncpu: 14871.552034569679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 40958.62852112512,
            "unit": "ns/iter",
            "extra": "iterations: 19880\ncpu: 40958.91851106642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 521672.8762522247,
            "unit": "ns/iter",
            "extra": "iterations: 1697\ncpu: 521591.63229228096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 422942.95182483015,
            "unit": "ns/iter",
            "extra": "iterations: 2055\ncpu: 422929.09975669166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 416662.5214664836,
            "unit": "ns/iter",
            "extra": "iterations: 2073\ncpu: 416647.5156777622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 418378.69937167666,
            "unit": "ns/iter",
            "extra": "iterations: 2069\ncpu: 418381.29531174444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 259806.285335684,
            "unit": "ns/iter",
            "extra": "iterations: 3396\ncpu: 259800.44169611306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 418458.4018330934,
            "unit": "ns/iter",
            "extra": "iterations: 2073\ncpu: 418446.2614568252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2075560.558558599,
            "unit": "ns/iter",
            "extra": "iterations: 444\ncpu: 2075423.8738738715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 850252.6499999745,
            "unit": "ns/iter",
            "extra": "iterations: 1100\ncpu: 850212.3636363638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2786397.8438438526,
            "unit": "ns/iter",
            "extra": "iterations: 333\ncpu: 2786298.4984985027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4184.244946979442,
            "unit": "ns/iter",
            "extra": "iterations: 192756\ncpu: 4184.137977546746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19550.401388427603,
            "unit": "ns/iter",
            "extra": "iterations: 42206\ncpu: 19550.045017296103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15591.908794788664,
            "unit": "ns/iter",
            "extra": "iterations: 52804\ncpu: 15591.40406029847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15223.398677722464,
            "unit": "ns/iter",
            "extra": "iterations: 54149\ncpu: 15223.112153502365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15363.598272420577,
            "unit": "ns/iter",
            "extra": "iterations: 53601\ncpu: 15363.27680453723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41474.21438728984,
            "unit": "ns/iter",
            "extra": "iterations: 20393\ncpu: 41473.50071102856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 531265.4137086702,
            "unit": "ns/iter",
            "extra": "iterations: 1634\ncpu: 531255.6915544693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 433494.4940298433,
            "unit": "ns/iter",
            "extra": "iterations: 2010\ncpu: 433487.76119403273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 426680.69883040775,
            "unit": "ns/iter",
            "extra": "iterations: 2052\ncpu: 426672.1734892781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 423650.8767588387,
            "unit": "ns/iter",
            "extra": "iterations: 2061\ncpu: 423613.731198445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 254007.62071941447,
            "unit": "ns/iter",
            "extra": "iterations: 3475\ncpu: 254011.51079136596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 419059.50168186676,
            "unit": "ns/iter",
            "extra": "iterations: 2081\ncpu: 419047.9577126409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2078763.6173120162,
            "unit": "ns/iter",
            "extra": "iterations: 439\ncpu: 2078604.555808662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 821151.756161973,
            "unit": "ns/iter",
            "extra": "iterations: 1136\ncpu: 821151.0563380246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4342.939247851446,
            "unit": "ns/iter",
            "extra": "iterations: 183368\ncpu: 4342.868439422372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19580.21676183233,
            "unit": "ns/iter",
            "extra": "iterations: 41857\ncpu: 19580.524165611583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15751.666749750899,
            "unit": "ns/iter",
            "extra": "iterations: 52156\ncpu: 15751.50126543448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15506.496367582124,
            "unit": "ns/iter",
            "extra": "iterations: 52995\ncpu: 15506.527030851898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15678.195146168466,
            "unit": "ns/iter",
            "extra": "iterations: 52371\ncpu: 15678.018368944724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 40935.509439616275,
            "unit": "ns/iter",
            "extra": "iterations: 20022\ncpu: 40936.160223753985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 507408.4731934922,
            "unit": "ns/iter",
            "extra": "iterations: 1716\ncpu: 507401.57342657226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 418303.0949612363,
            "unit": "ns/iter",
            "extra": "iterations: 2064\ncpu: 418291.4244186058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 413437.9852451291,
            "unit": "ns/iter",
            "extra": "iterations: 2101\ncpu: 413426.5587815334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 417978.9947292712,
            "unit": "ns/iter",
            "extra": "iterations: 2087\ncpu: 417960.517489217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 253709.75910931244,
            "unit": "ns/iter",
            "extra": "iterations: 3458\ncpu: 253704.10641989633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 411657.27849308203,
            "unit": "ns/iter",
            "extra": "iterations: 2097\ncpu: 411657.98760133475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 323.16418115145956,
            "unit": "ns/iter",
            "extra": "iterations: 2165547\ncpu: 323.1695733225846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1859.3273175181146,
            "unit": "ns/iter",
            "extra": "iterations: 384819\ncpu: 1859.3039844706104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1525.048794109837,
            "unit": "ns/iter",
            "extra": "iterations: 488809\ncpu: 1525.074824727028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1443.3244946612178,
            "unit": "ns/iter",
            "extra": "iterations: 486159\ncpu: 1443.2708229200744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1194.2681811597595,
            "unit": "ns/iter",
            "extra": "iterations: 586775\ncpu: 1194.2400409015409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7402.790277850678,
            "unit": "ns/iter",
            "extra": "iterations: 94835\ncpu: 7402.441081878979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 21399.86133463825,
            "unit": "ns/iter",
            "extra": "iterations: 32683\ncpu: 21399.054554355567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5090.24895073366,
            "unit": "ns/iter",
            "extra": "iterations: 137477\ncpu: 5090.331473628224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5001.273880000099,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5001.289000000071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5119.361615806753,
            "unit": "ns/iter",
            "extra": "iterations: 136551\ncpu: 5119.190632071536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10953.19000046856,
            "unit": "ns/iter",
            "extra": "iterations: 64063\ncpu: 10952.787100198284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9760.373481357905,
            "unit": "ns/iter",
            "extra": "iterations: 71610\ncpu: 9760.442675604043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3196.3837190241766,
            "unit": "ns/iter",
            "extra": "iterations: 219606\ncpu: 3196.3990054916812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15983.881672171949,
            "unit": "ns/iter",
            "extra": "iterations: 43895\ncpu: 15983.622280441752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12831.763571781326,
            "unit": "ns/iter",
            "extra": "iterations: 54617\ncpu: 12831.867367303194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12700.501816992248,
            "unit": "ns/iter",
            "extra": "iterations: 55036\ncpu: 12699.912784359258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13457.486370986226,
            "unit": "ns/iter",
            "extra": "iterations: 51948\ncpu: 13457.049357049302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 29184.947361857874,
            "unit": "ns/iter",
            "extra": "iterations: 24051\ncpu: 29183.713774895063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 107971.72001237782,
            "unit": "ns/iter",
            "extra": "iterations: 6461\ncpu: 107967.32703915825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 93404.71531579527,
            "unit": "ns/iter",
            "extra": "iterations: 7489\ncpu: 93402.41687808764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 93940.07245796455,
            "unit": "ns/iter",
            "extra": "iterations: 7494\ncpu: 93939.35148118652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 93272.70823341185,
            "unit": "ns/iter",
            "extra": "iterations: 7506\ncpu: 93269.33120170655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 59934.769599450934,
            "unit": "ns/iter",
            "extra": "iterations: 11684\ncpu: 59932.57446080182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 93698.67094016723,
            "unit": "ns/iter",
            "extra": "iterations: 7488\ncpu: 93694.53792735016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3127.8083416843224,
            "unit": "ns/iter",
            "extra": "iterations: 223528\ncpu: 3127.6148849361416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15681.764922275865,
            "unit": "ns/iter",
            "extra": "iterations: 44581\ncpu: 15681.113030214636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12773.758961997437,
            "unit": "ns/iter",
            "extra": "iterations: 54759\ncpu: 12773.95679249088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12680.209223195256,
            "unit": "ns/iter",
            "extra": "iterations: 55252\ncpu: 12680.330123796368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13310.512084736169,
            "unit": "ns/iter",
            "extra": "iterations: 52587\ncpu: 13310.110863901691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28217.09415414411,
            "unit": "ns/iter",
            "extra": "iterations: 24821\ncpu: 28216.62704967612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 106598.57703466612,
            "unit": "ns/iter",
            "extra": "iterations: 6549\ncpu: 106595.08321881099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 91214.50293313042,
            "unit": "ns/iter",
            "extra": "iterations: 7671\ncpu: 91210.91122409007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 90738.75966277612,
            "unit": "ns/iter",
            "extra": "iterations: 7710\ncpu: 90734.69520103866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 90822.46803267738,
            "unit": "ns/iter",
            "extra": "iterations: 7711\ncpu: 90823.93982622336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 60365.33210007382,
            "unit": "ns/iter",
            "extra": "iterations: 11352\ncpu: 60361.95384073277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 94243.43932431919,
            "unit": "ns/iter",
            "extra": "iterations: 7400\ncpu: 94240.4594594579 ns\nthreads: 1"
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
        "date": 1702420970195,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 799.7812684042468,
            "unit": "ns/iter",
            "extra": "iterations: 871063\ncpu: 799.7694770642308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12211.97578366321,
            "unit": "ns/iter",
            "extra": "iterations: 68301\ncpu: 12211.73482086646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 26184.603661050787,
            "unit": "ns/iter",
            "extra": "iterations: 31521\ncpu: 26184.445290441286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 41104.40169752996,
            "unit": "ns/iter",
            "extra": "iterations: 19440\ncpu: 41103.32304526748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 52003.899695063556,
            "unit": "ns/iter",
            "extra": "iterations: 15413\ncpu: 52002.523843508716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 53231.8298000007,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53231.21000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 64688.00022251732,
            "unit": "ns/iter",
            "extra": "iterations: 13482\ncpu: 64687.09390298179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 74788.35512630058,
            "unit": "ns/iter",
            "extra": "iterations: 11441\ncpu: 74785.57818372519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 85173.04466305686,
            "unit": "ns/iter",
            "extra": "iterations: 10165\ncpu: 85169.78848991639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 649.4881677243129,
            "unit": "ns/iter",
            "extra": "iterations: 1074096\ncpu: 649.452656000955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 548.1165653722448,
            "unit": "ns/iter",
            "extra": "iterations: 1278287\ncpu: 548.1039078078712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 551.8353725957528,
            "unit": "ns/iter",
            "extra": "iterations: 1263447\ncpu: 551.8350987417768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 554.4032612156058,
            "unit": "ns/iter",
            "extra": "iterations: 1259469\ncpu: 554.3921287463211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1065.6321080010584,
            "unit": "ns/iter",
            "extra": "iterations: 653401\ncpu: 1065.6231012808357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4003.305180661792,
            "unit": "ns/iter",
            "extra": "iterations: 201094\ncpu: 4003.2671288054335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19902.699931813855,
            "unit": "ns/iter",
            "extra": "iterations: 41064\ncpu: 19902.539937658305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15702.850522506847,
            "unit": "ns/iter",
            "extra": "iterations: 51961\ncpu: 15702.598102422966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14668.4751576031,
            "unit": "ns/iter",
            "extra": "iterations: 56154\ncpu: 14668.262278733491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15093.213918047995,
            "unit": "ns/iter",
            "extra": "iterations: 54203\ncpu: 15093.01699167942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 40920.36140782867,
            "unit": "ns/iter",
            "extra": "iterations: 20315\ncpu: 40919.438838296934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 511725.76173706504,
            "unit": "ns/iter",
            "extra": "iterations: 1704\ncpu: 511701.7018779335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 425225.0869990059,
            "unit": "ns/iter",
            "extra": "iterations: 2046\ncpu: 425217.6441837729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 420748.6223404308,
            "unit": "ns/iter",
            "extra": "iterations: 2068\ncpu: 420745.5512572536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 424340.97535732755,
            "unit": "ns/iter",
            "extra": "iterations: 2029\ncpu: 424333.11976342986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 261318.05264714992,
            "unit": "ns/iter",
            "extra": "iterations: 3381\ncpu: 261314.670215913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 417895.10961537465,
            "unit": "ns/iter",
            "extra": "iterations: 2080\ncpu: 417883.1249999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2062844.075892935,
            "unit": "ns/iter",
            "extra": "iterations: 448\ncpu: 2062784.3749999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 824969.0661375594,
            "unit": "ns/iter",
            "extra": "iterations: 1134\ncpu: 824924.8677248663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2770216.8053892506,
            "unit": "ns/iter",
            "extra": "iterations: 334\ncpu: 2770046.1077844305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4065.9225412703327,
            "unit": "ns/iter",
            "extra": "iterations: 198751\ncpu: 4065.821052472689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19611.00508229048,
            "unit": "ns/iter",
            "extra": "iterations: 42107\ncpu: 19610.202579143566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15544.590930420505,
            "unit": "ns/iter",
            "extra": "iterations: 53277\ncpu: 15544.274264692134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15128.691925123292,
            "unit": "ns/iter",
            "extra": "iterations: 54490\ncpu: 15128.188658469404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15268.409993155328,
            "unit": "ns/iter",
            "extra": "iterations: 54057\ncpu: 15268.094788833978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 40688.97010228247,
            "unit": "ns/iter",
            "extra": "iterations: 20336\ncpu: 40687.15578284837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 531652.0760736192,
            "unit": "ns/iter",
            "extra": "iterations: 1630\ncpu: 531641.165644171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 432605.30291069136,
            "unit": "ns/iter",
            "extra": "iterations: 2027\ncpu: 432589.7385298474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 428185.16666669014,
            "unit": "ns/iter",
            "extra": "iterations: 2034\ncpu: 428169.0757128814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 422261.04406780226,
            "unit": "ns/iter",
            "extra": "iterations: 2065\ncpu: 422249.2978208205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 251179.0384064323,
            "unit": "ns/iter",
            "extra": "iterations: 3489\ncpu: 251169.56147893256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 422436.33899129456,
            "unit": "ns/iter",
            "extra": "iterations: 2062\ncpu: 422430.06789524684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2068521.6968326187,
            "unit": "ns/iter",
            "extra": "iterations: 442\ncpu: 2068330.0904977256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 818777.8932039193,
            "unit": "ns/iter",
            "extra": "iterations: 1133\ncpu: 818752.3389232132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4368.553532410697,
            "unit": "ns/iter",
            "extra": "iterations: 179863\ncpu: 4368.410401249845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 20167.192810295506,
            "unit": "ns/iter",
            "extra": "iterations: 40252\ncpu: 20166.61532346217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 16150.029767851333,
            "unit": "ns/iter",
            "extra": "iterations: 50054\ncpu: 16149.552483318033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15930.368737121502,
            "unit": "ns/iter",
            "extra": "iterations: 50955\ncpu: 15929.938180747678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 16137.40310959417,
            "unit": "ns/iter",
            "extra": "iterations: 50103\ncpu: 16136.804183382246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 42117.5716016367,
            "unit": "ns/iter",
            "extra": "iterations: 19811\ncpu: 42115.875018928724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 516069.6506729278,
            "unit": "ns/iter",
            "extra": "iterations: 1709\ncpu: 516056.5242832066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 422692.73381641915,
            "unit": "ns/iter",
            "extra": "iterations: 2070\ncpu: 422682.41545893735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 417391.37981913675,
            "unit": "ns/iter",
            "extra": "iterations: 2101\ncpu: 417391.0042836751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 442576.1277724224,
            "unit": "ns/iter",
            "extra": "iterations: 2074\ncpu: 442569.2864030853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 252543.39809744115,
            "unit": "ns/iter",
            "extra": "iterations: 3469\ncpu: 252538.65667339446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 412053.1202290155,
            "unit": "ns/iter",
            "extra": "iterations: 2096\ncpu: 412052.76717557147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 330.79401508120765,
            "unit": "ns/iter",
            "extra": "iterations: 2123170\ncpu: 330.7867010178181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1824.6856497193412,
            "unit": "ns/iter",
            "extra": "iterations: 383658\ncpu: 1824.6459085956799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1431.6641723697335,
            "unit": "ns/iter",
            "extra": "iterations: 486443\ncpu: 1431.6497513583283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1409.9252117966607,
            "unit": "ns/iter",
            "extra": "iterations: 497057\ncpu: 1409.9167701088597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1169.3651044436092,
            "unit": "ns/iter",
            "extra": "iterations: 598122\ncpu: 1169.3509016555086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7365.689440078969,
            "unit": "ns/iter",
            "extra": "iterations: 95067\ncpu: 7365.5527154533775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 21111.555347544137,
            "unit": "ns/iter",
            "extra": "iterations: 33118\ncpu: 21111.56772752001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5042.106025346388,
            "unit": "ns/iter",
            "extra": "iterations: 138797\ncpu: 5042.045577353961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5036.274113306784,
            "unit": "ns/iter",
            "extra": "iterations: 136885\ncpu: 5036.196076998863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5087.441561458638,
            "unit": "ns/iter",
            "extra": "iterations: 137743\ncpu: 5087.38810683656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10652.307773969264,
            "unit": "ns/iter",
            "extra": "iterations: 65938\ncpu: 10652.057993872942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9590.786310289575,
            "unit": "ns/iter",
            "extra": "iterations: 73106\ncpu: 9590.608158017176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3234.2762417679633,
            "unit": "ns/iter",
            "extra": "iterations: 216687\ncpu: 3234.199098238466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16139.512849470688,
            "unit": "ns/iter",
            "extra": "iterations: 43387\ncpu: 16139.493396639551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12749.85937301251,
            "unit": "ns/iter",
            "extra": "iterations: 55025\ncpu: 12749.508405270459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12684.117987476173,
            "unit": "ns/iter",
            "extra": "iterations: 54777\ncpu: 12683.84723515361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13256.51272004561,
            "unit": "ns/iter",
            "extra": "iterations: 52830\ncpu: 13256.39030853689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 29090.477462506846,
            "unit": "ns/iter",
            "extra": "iterations: 24071\ncpu: 29090.19982551589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 107231.72025180211,
            "unit": "ns/iter",
            "extra": "iterations: 6513\ncpu: 107231.67511131558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 92546.93322692049,
            "unit": "ns/iter",
            "extra": "iterations: 7518\ncpu: 92545.0385740893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 92640.38471707696,
            "unit": "ns/iter",
            "extra": "iterations: 7564\ncpu: 92638.86832363944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 92479.8858200067,
            "unit": "ns/iter",
            "extra": "iterations: 7567\ncpu: 92479.15950839047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 59683.39241585127,
            "unit": "ns/iter",
            "extra": "iterations: 11735\ncpu: 59682.83766510393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 92948.1610203295,
            "unit": "ns/iter",
            "extra": "iterations: 7527\ncpu: 92947.20340109027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3188.994991591969,
            "unit": "ns/iter",
            "extra": "iterations: 219431\ncpu: 3188.9454999521486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15637.753191395785,
            "unit": "ns/iter",
            "extra": "iterations: 44808\ncpu: 15637.522317443285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12741.456115684034,
            "unit": "ns/iter",
            "extra": "iterations: 54769\ncpu: 12741.183881392906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12646.676218489154,
            "unit": "ns/iter",
            "extra": "iterations: 55417\ncpu: 12646.669794467369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13351.072384265488,
            "unit": "ns/iter",
            "extra": "iterations: 52318\ncpu: 13350.76455522003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28174.10675152821,
            "unit": "ns/iter",
            "extra": "iterations: 24824\ncpu: 28173.872059297508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 106795.63165928624,
            "unit": "ns/iter",
            "extra": "iterations: 6551\ncpu: 106788.47504197869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 92243.32539786438,
            "unit": "ns/iter",
            "extra": "iterations: 7603\ncpu: 92240.06313297237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 90661.6397459143,
            "unit": "ns/iter",
            "extra": "iterations: 7714\ncpu: 90659.229971481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 91874.52924973994,
            "unit": "ns/iter",
            "extra": "iterations: 7624\ncpu: 91870.40923399899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 60265.45835488314,
            "unit": "ns/iter",
            "extra": "iterations: 11598\ncpu: 60264.06276944259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 93157.22070338616,
            "unit": "ns/iter",
            "extra": "iterations: 7535\ncpu: 93153.4970139353 ns\nthreads: 1"
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
        "date": 1702421409229,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 796.0614452165041,
            "unit": "ns/iter",
            "extra": "iterations: 878083\ncpu: 796.0109693502778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11883.851339834266,
            "unit": "ns/iter",
            "extra": "iterations: 69225\ncpu: 11883.143373058867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 26107.428697154963,
            "unit": "ns/iter",
            "extra": "iterations: 31815\ncpu: 26106.55979883703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 41852.686318828666,
            "unit": "ns/iter",
            "extra": "iterations: 20795\ncpu: 41850.694878576585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 51844.228504122264,
            "unit": "ns/iter",
            "extra": "iterations: 15282\ncpu: 51843.6199450334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 53471.679399996225,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53468.26 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 64765.46647466984,
            "unit": "ns/iter",
            "extra": "iterations: 13542\ncpu: 64762.90798995715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 75087.71869862423,
            "unit": "ns/iter",
            "extra": "iterations: 11557\ncpu: 75084.85766202302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 85476.62928133257,
            "unit": "ns/iter",
            "extra": "iterations: 10102\ncpu: 85472.75786972877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 658.2295411752356,
            "unit": "ns/iter",
            "extra": "iterations: 1055828\ncpu: 658.1999151376933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 567.7398198505352,
            "unit": "ns/iter",
            "extra": "iterations: 1243523\ncpu: 567.7436605515136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 553.6324758477964,
            "unit": "ns/iter",
            "extra": "iterations: 1261479\ncpu: 553.6364854270264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 557.0125411042856,
            "unit": "ns/iter",
            "extra": "iterations: 1264163\ncpu: 556.9548388934019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1067.534116582434,
            "unit": "ns/iter",
            "extra": "iterations: 665263\ncpu: 1067.5009732992805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4109.299757706737,
            "unit": "ns/iter",
            "extra": "iterations: 193980\ncpu: 4109.099907206925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19746.474030793943,
            "unit": "ns/iter",
            "extra": "iterations: 41761\ncpu: 19745.985488853268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15743.005488201627,
            "unit": "ns/iter",
            "extra": "iterations: 52294\ncpu: 15742.276360576738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15487.495059118977,
            "unit": "ns/iter",
            "extra": "iterations: 52521\ncpu: 15486.801469888249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15317.009473197717,
            "unit": "ns/iter",
            "extra": "iterations: 51936\ncpu: 15316.616605052432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 41962.21145153101,
            "unit": "ns/iter",
            "extra": "iterations: 19910\ncpu: 41961.988950276216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 511242.42219613196,
            "unit": "ns/iter",
            "extra": "iterations: 1703\ncpu: 511233.23546682374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 423765.4343582247,
            "unit": "ns/iter",
            "extra": "iterations: 2049\ncpu: 423745.53440702794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 420427.99421688507,
            "unit": "ns/iter",
            "extra": "iterations: 2075\ncpu: 420430.69879518065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 446274.57531583344,
            "unit": "ns/iter",
            "extra": "iterations: 2058\ncpu: 446263.26530612377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 262325.2539587586,
            "unit": "ns/iter",
            "extra": "iterations: 3347\ncpu: 262321.4221691072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 419585.0934624838,
            "unit": "ns/iter",
            "extra": "iterations: 2065\ncpu: 419587.6029055687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2067280.803132089,
            "unit": "ns/iter",
            "extra": "iterations: 447\ncpu: 2067189.2617449693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 839821.6805309468,
            "unit": "ns/iter",
            "extra": "iterations: 1130\ncpu: 839794.6902654874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2760625.961077855,
            "unit": "ns/iter",
            "extra": "iterations: 334\ncpu: 2760399.7005988024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4058.844142847565,
            "unit": "ns/iter",
            "extra": "iterations: 193857\ncpu: 4058.641163331747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19513.001585236194,
            "unit": "ns/iter",
            "extra": "iterations: 42265\ncpu: 19511.354548680938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15538.639618138028,
            "unit": "ns/iter",
            "extra": "iterations: 52794\ncpu: 15537.89824601284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15152.192045623144,
            "unit": "ns/iter",
            "extra": "iterations: 54008\ncpu: 15151.255369574877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15322.600194316969,
            "unit": "ns/iter",
            "extra": "iterations: 53521\ncpu: 15322.1726051457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41286.259667686674,
            "unit": "ns/iter",
            "extra": "iterations: 20222\ncpu: 41284.363564434905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 530599.3048259055,
            "unit": "ns/iter",
            "extra": "iterations: 1637\ncpu: 530578.3750763594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 431872.9073243517,
            "unit": "ns/iter",
            "extra": "iterations: 2007\ncpu: 431879.12306925794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 427245.0961914087,
            "unit": "ns/iter",
            "extra": "iterations: 2048\ncpu: 427225.92773437523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 428239.73225648387,
            "unit": "ns/iter",
            "extra": "iterations: 2043\ncpu: 428216.78903573245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 252454.73533660217,
            "unit": "ns/iter",
            "extra": "iterations: 3461\ncpu: 252445.01589136085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 423731.6592556818,
            "unit": "ns/iter",
            "extra": "iterations: 2069\ncpu: 423714.451425812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2072533.2108842493,
            "unit": "ns/iter",
            "extra": "iterations: 441\ncpu: 2072302.2675737054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 836065.8586858641,
            "unit": "ns/iter",
            "extra": "iterations: 1111\ncpu: 836022.5922592263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4382.400094684077,
            "unit": "ns/iter",
            "extra": "iterations: 183769\ncpu: 4382.429027746758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19590.027799466516,
            "unit": "ns/iter",
            "extra": "iterations: 42267\ncpu: 19589.589987460706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15718.236926178119,
            "unit": "ns/iter",
            "extra": "iterations: 52586\ncpu: 15718.018103677767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15464.46495397056,
            "unit": "ns/iter",
            "extra": "iterations: 53444\ncpu: 15463.878077988127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15521.451670294631,
            "unit": "ns/iter",
            "extra": "iterations: 52835\ncpu: 15521.387337938904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41259.21713870761,
            "unit": "ns/iter",
            "extra": "iterations: 20655\ncpu: 41258.160251755224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 536599.2264482115,
            "unit": "ns/iter",
            "extra": "iterations: 1709\ncpu: 536580.6319485081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 421828.47733847477,
            "unit": "ns/iter",
            "extra": "iterations: 2074\ncpu: 421831.53326904646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 416556.47131340613,
            "unit": "ns/iter",
            "extra": "iterations: 2109\ncpu: 416545.23470839026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 419304.0320114754,
            "unit": "ns/iter",
            "extra": "iterations: 2093\ncpu: 419296.9421882439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 255969.86880973555,
            "unit": "ns/iter",
            "extra": "iterations: 3453\ncpu: 255962.75702287848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 413743.0896882421,
            "unit": "ns/iter",
            "extra": "iterations: 2085\ncpu: 413741.39088728884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 331.20997151428674,
            "unit": "ns/iter",
            "extra": "iterations: 2114744\ncpu: 331.2051955224828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1875.74236578287,
            "unit": "ns/iter",
            "extra": "iterations: 372959\ncpu: 1875.713684345997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1384.5216204617182,
            "unit": "ns/iter",
            "extra": "iterations: 505609\ncpu: 1384.5127361261334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1381.5815524120035,
            "unit": "ns/iter",
            "extra": "iterations: 509053\ncpu: 1381.591111338111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1157.4033965173403,
            "unit": "ns/iter",
            "extra": "iterations: 599202\ncpu: 1157.3194014706294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7363.579644669721,
            "unit": "ns/iter",
            "extra": "iterations: 95179\ncpu: 7363.627480851887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 21491.889399642067,
            "unit": "ns/iter",
            "extra": "iterations: 32414\ncpu: 21491.441969519197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5089.0658685264425,
            "unit": "ns/iter",
            "extra": "iterations: 136651\ncpu: 5088.802130975953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5004.508430000101,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5004.291000000052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5105.201296716611,
            "unit": "ns/iter",
            "extra": "iterations: 137424\ncpu: 5105.046425660747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10480.39152697415,
            "unit": "ns/iter",
            "extra": "iterations: 65620\ncpu: 10480.455653764222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9572.173032169432,
            "unit": "ns/iter",
            "extra": "iterations: 73050\ncpu: 9572.017796029992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3203.060757241664,
            "unit": "ns/iter",
            "extra": "iterations: 218081\ncpu: 3203.0484086188444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16220.663092460056,
            "unit": "ns/iter",
            "extra": "iterations: 43273\ncpu: 16220.567097266194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12824.059394381396,
            "unit": "ns/iter",
            "extra": "iterations: 54820\ncpu: 12823.721269609698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12751.718841948423,
            "unit": "ns/iter",
            "extra": "iterations: 55058\ncpu: 12751.552907842522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13210.822922798985,
            "unit": "ns/iter",
            "extra": "iterations: 52655\ncpu: 13210.327604216269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 29451.785966089952,
            "unit": "ns/iter",
            "extra": "iterations: 23828\ncpu: 29451.712271277593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 109016.81545667136,
            "unit": "ns/iter",
            "extra": "iterations: 6405\ncpu: 109014.0202966424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 94599.92860046297,
            "unit": "ns/iter",
            "extra": "iterations: 7381\ncpu: 94594.52648692552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 93496.73162209305,
            "unit": "ns/iter",
            "extra": "iterations: 7441\ncpu: 93492.59508130702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 93280.31032162519,
            "unit": "ns/iter",
            "extra": "iterations: 7431\ncpu: 93271.78037949174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 60579.19909933031,
            "unit": "ns/iter",
            "extra": "iterations: 11547\ncpu: 60579.55313068388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 93236.84501745629,
            "unit": "ns/iter",
            "extra": "iterations: 7446\ncpu: 93233.57507386478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3149.0199710510387,
            "unit": "ns/iter",
            "extra": "iterations: 221771\ncpu: 3149.0086620883435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15729.745530878534,
            "unit": "ns/iter",
            "extra": "iterations: 44304\ncpu: 15728.913867822308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12740.276830910669,
            "unit": "ns/iter",
            "extra": "iterations: 54918\ncpu: 12740.16897920546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12639.983534121464,
            "unit": "ns/iter",
            "extra": "iterations: 55448\ncpu: 12639.640744481385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13279.512233518613,
            "unit": "ns/iter",
            "extra": "iterations: 52724\ncpu: 13278.692815415914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28434.95486675308,
            "unit": "ns/iter",
            "extra": "iterations: 24616\ncpu: 28430.79704257359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 108101.50309213907,
            "unit": "ns/iter",
            "extra": "iterations: 6468\ncpu: 108096.2275819412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 91957.9049925993,
            "unit": "ns/iter",
            "extra": "iterations: 7431\ncpu: 91958.64621181431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 90533.07576747284,
            "unit": "ns/iter",
            "extra": "iterations: 7655\ncpu: 90532.540822991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 91052.81709067481,
            "unit": "ns/iter",
            "extra": "iterations: 7665\ncpu: 91052.53750815273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 59419.59945735064,
            "unit": "ns/iter",
            "extra": "iterations: 11794\ncpu: 59419.45056808584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 92830.70076862306,
            "unit": "ns/iter",
            "extra": "iterations: 7546\ncpu: 92827.92207792209 ns\nthreads: 1"
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
        "date": 1702421897967,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 788.4713585797143,
            "unit": "ns/iter",
            "extra": "iterations: 889289\ncpu: 788.4718016302913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11854.957508663756,
            "unit": "ns/iter",
            "extra": "iterations: 69826\ncpu: 11854.53126342623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25905.733036603346,
            "unit": "ns/iter",
            "extra": "iterations: 32128\ncpu: 25905.51232569722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 41896.19051496106,
            "unit": "ns/iter",
            "extra": "iterations: 19652\ncpu: 41895.07429269289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 50975.28602466657,
            "unit": "ns/iter",
            "extra": "iterations: 15649\ncpu: 50973.14844399002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 52473.446599998395,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52470.81999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 63484.29944036612,
            "unit": "ns/iter",
            "extra": "iterations: 13759\ncpu: 63483.036557889405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 74132.37926088412,
            "unit": "ns/iter",
            "extra": "iterations: 11852\ncpu: 74129.71650354374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 82922.80627078754,
            "unit": "ns/iter",
            "extra": "iterations: 10525\ncpu: 82920.9691211401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 645.726414226349,
            "unit": "ns/iter",
            "extra": "iterations: 1086884\ncpu: 645.6702831212904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 550.2699006442533,
            "unit": "ns/iter",
            "extra": "iterations: 1271190\ncpu: 550.2442593160725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 552.976939035606,
            "unit": "ns/iter",
            "extra": "iterations: 1274925\ncpu: 552.9482910759455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 552.0861025704257,
            "unit": "ns/iter",
            "extra": "iterations: 1270717\ncpu: 552.0797313642609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1060.5213959284927,
            "unit": "ns/iter",
            "extra": "iterations: 664332\ncpu: 1060.5213959285409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4113.602647646397,
            "unit": "ns/iter",
            "extra": "iterations: 194739\ncpu: 4113.508850307332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 18970.59967137503,
            "unit": "ns/iter",
            "extra": "iterations: 43819\ncpu: 18970.58810105203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 14955.250127327767,
            "unit": "ns/iter",
            "extra": "iterations: 54976\ncpu: 14954.521973224688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15520.793954556484,
            "unit": "ns/iter",
            "extra": "iterations: 53561\ncpu: 15520.613879501867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15218.682275826915,
            "unit": "ns/iter",
            "extra": "iterations: 52939\ncpu: 15218.243638905122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 41810.81055276424,
            "unit": "ns/iter",
            "extra": "iterations: 19900\ncpu: 41808.98492462316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 518511.5238642908,
            "unit": "ns/iter",
            "extra": "iterations: 1739\ncpu: 518459.63197239756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 419632.40067501203,
            "unit": "ns/iter",
            "extra": "iterations: 2074\ncpu: 419604.4358727101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 418077.22910661605,
            "unit": "ns/iter",
            "extra": "iterations: 2082\ncpu: 418064.2170989432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 420769.5186983946,
            "unit": "ns/iter",
            "extra": "iterations: 2059\ncpu: 420749.5871782413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 257035.6538804669,
            "unit": "ns/iter",
            "extra": "iterations: 3363\ncpu: 257018.0493606889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 417902.1442307811,
            "unit": "ns/iter",
            "extra": "iterations: 2080\ncpu: 417877.2596153837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2065867.0850112103,
            "unit": "ns/iter",
            "extra": "iterations: 447\ncpu: 2065635.1230425078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 817453.9513888924,
            "unit": "ns/iter",
            "extra": "iterations: 1152\ncpu: 817439.4097222222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2783539.6936937673,
            "unit": "ns/iter",
            "extra": "iterations: 333\ncpu: 2783378.978978974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4052.773745404108,
            "unit": "ns/iter",
            "extra": "iterations: 197733\ncpu: 4052.6887267173374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19597.23084427896,
            "unit": "ns/iter",
            "extra": "iterations: 42024\ncpu: 19596.799447934503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15643.038490064338,
            "unit": "ns/iter",
            "extra": "iterations: 52585\ncpu: 15642.822097556294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15286.495960568607,
            "unit": "ns/iter",
            "extra": "iterations: 53968\ncpu: 15285.976875185306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15494.730590353392,
            "unit": "ns/iter",
            "extra": "iterations: 53324\ncpu: 15494.419023328968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 40332.45582047669,
            "unit": "ns/iter",
            "extra": "iterations: 20677\ncpu: 40330.97161096858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 525899.7978468859,
            "unit": "ns/iter",
            "extra": "iterations: 1672\ncpu: 525894.1985645934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 430946.26194143255,
            "unit": "ns/iter",
            "extra": "iterations: 1947\ncpu: 430939.54802259686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 423836.3720019468,
            "unit": "ns/iter",
            "extra": "iterations: 2043\ncpu: 423830.543318646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 426943.23503647087,
            "unit": "ns/iter",
            "extra": "iterations: 2055\ncpu: 426935.5717761566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 251195.2757237023,
            "unit": "ns/iter",
            "extra": "iterations: 3489\ncpu: 251192.2613929486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 423610.6637596732,
            "unit": "ns/iter",
            "extra": "iterations: 2064\ncpu: 423607.3158914717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2075239.4311512858,
            "unit": "ns/iter",
            "extra": "iterations: 443\ncpu: 2075016.9300225726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 812333.3025862139,
            "unit": "ns/iter",
            "extra": "iterations: 1160\ncpu: 812298.5344827586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4392.653027492027,
            "unit": "ns/iter",
            "extra": "iterations: 182709\ncpu: 4392.609012144999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19479.89851724434,
            "unit": "ns/iter",
            "extra": "iterations: 42421\ncpu: 19479.585582612388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15696.977812482659,
            "unit": "ns/iter",
            "extra": "iterations: 52507\ncpu: 15696.68044260765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15518.211799076702,
            "unit": "ns/iter",
            "extra": "iterations: 53055\ncpu: 15517.798510979199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15636.292821660569,
            "unit": "ns/iter",
            "extra": "iterations: 52742\ncpu: 15636.1116377839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41547.84322797375,
            "unit": "ns/iter",
            "extra": "iterations: 20533\ncpu: 41547.24589684917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 507155.4582115846,
            "unit": "ns/iter",
            "extra": "iterations: 1711\ncpu: 507149.91233196954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 419330.07311208424,
            "unit": "ns/iter",
            "extra": "iterations: 2079\ncpu: 419330.39923039975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 414228.7665071684,
            "unit": "ns/iter",
            "extra": "iterations: 2090\ncpu: 414213.971291864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 417955.82522870647,
            "unit": "ns/iter",
            "extra": "iterations: 2077\ncpu: 417951.3721714014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 253960.23260493495,
            "unit": "ns/iter",
            "extra": "iterations: 3478\ncpu: 253955.72167912533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 413280.8041825191,
            "unit": "ns/iter",
            "extra": "iterations: 2104\ncpu: 413273.33650190406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 330.5020507114902,
            "unit": "ns/iter",
            "extra": "iterations: 2123897\ncpu: 330.4991720408296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1858.8077233742447,
            "unit": "ns/iter",
            "extra": "iterations: 376364\ncpu: 1858.809556705732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1453.9076741474385,
            "unit": "ns/iter",
            "extra": "iterations: 481187\ncpu: 1453.891730242079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1450.65942099539,
            "unit": "ns/iter",
            "extra": "iterations: 482725\ncpu: 1450.6385623284507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1173.6305453460886,
            "unit": "ns/iter",
            "extra": "iterations: 596942\ncpu: 1173.6180399435843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7295.270948820358,
            "unit": "ns/iter",
            "extra": "iterations: 96151\ncpu: 7295.168016973224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 20931.29025093145,
            "unit": "ns/iter",
            "extra": "iterations: 33316\ncpu: 20929.10313362928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4994.967536677754,
            "unit": "ns/iter",
            "extra": "iterations: 140343\ncpu: 4994.6908645248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4983.216644283742,
            "unit": "ns/iter",
            "extra": "iterations: 140733\ncpu: 4983.071489984674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5052.895936144729,
            "unit": "ns/iter",
            "extra": "iterations: 137185\ncpu: 5052.711302256004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10712.267880840389,
            "unit": "ns/iter",
            "extra": "iterations: 65559\ncpu: 10711.552952302434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9517.892345181648,
            "unit": "ns/iter",
            "extra": "iterations: 73457\ncpu: 9517.33395047448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3213.1480171308663,
            "unit": "ns/iter",
            "extra": "iterations: 217387\ncpu: 3212.9579965683606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16146.378508014053,
            "unit": "ns/iter",
            "extra": "iterations: 43365\ncpu: 16145.492909028175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12816.180122861,
            "unit": "ns/iter",
            "extra": "iterations: 54696\ncpu: 12815.796401930715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12776.063869181884,
            "unit": "ns/iter",
            "extra": "iterations: 54549\ncpu: 12775.442262919516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13498.21102147927,
            "unit": "ns/iter",
            "extra": "iterations: 52189\ncpu: 13498.064726283454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28725.07019199205,
            "unit": "ns/iter",
            "extra": "iterations: 24376\ncpu: 28724.146701673813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 108440.91186021776,
            "unit": "ns/iter",
            "extra": "iterations: 6467\ncpu: 108436.36925931586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 92933.12940860365,
            "unit": "ns/iter",
            "extra": "iterations: 7457\ncpu: 92926.36448974078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 93129.15247472494,
            "unit": "ns/iter",
            "extra": "iterations: 7516\ncpu: 93123.13730707741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 93071.8708133901,
            "unit": "ns/iter",
            "extra": "iterations: 7524\ncpu: 93071.91653375915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 59669.215866532046,
            "unit": "ns/iter",
            "extra": "iterations: 11748\ncpu: 59667.01566224015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 92047.54741151133,
            "unit": "ns/iter",
            "extra": "iterations: 7572\ncpu: 92043.59482303212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3162.9959958068116,
            "unit": "ns/iter",
            "extra": "iterations: 222267\ncpu: 3162.917572109171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15622.77830462974,
            "unit": "ns/iter",
            "extra": "iterations: 44710\ncpu: 15622.5587116973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12536.590869986028,
            "unit": "ns/iter",
            "extra": "iterations: 55794\ncpu: 12536.604294368732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12566.24368227809,
            "unit": "ns/iter",
            "extra": "iterations: 55835\ncpu: 12565.940718187341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13228.893250260195,
            "unit": "ns/iter",
            "extra": "iterations: 52965\ncpu: 13228.57547436972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28129.86642816961,
            "unit": "ns/iter",
            "extra": "iterations: 24878\ncpu: 28129.560254040087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 105648.49765471386,
            "unit": "ns/iter",
            "extra": "iterations: 6609\ncpu: 105647.23861401244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 90151.14123857155,
            "unit": "ns/iter",
            "extra": "iterations: 7767\ncpu: 90145.8993176266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 90132.93069306799,
            "unit": "ns/iter",
            "extra": "iterations: 7777\ncpu: 90127.04127555632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 90519.71607812174,
            "unit": "ns/iter",
            "extra": "iterations: 7731\ncpu: 90512.63743370891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 59976.62487161993,
            "unit": "ns/iter",
            "extra": "iterations: 11684\ncpu: 59972.32968161596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 90234.91048626638,
            "unit": "ns/iter",
            "extra": "iterations: 7753\ncpu: 90235.05739713662 ns\nthreads: 1"
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
        "date": 1702453354318,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 795.0173828563957,
            "unit": "ns/iter",
            "extra": "iterations: 881098\ncpu: 794.9979457449683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12265.073940097594,
            "unit": "ns/iter",
            "extra": "iterations: 67176\ncpu: 12264.518578063595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 26775.320650585756,
            "unit": "ns/iter",
            "extra": "iterations: 30803\ncpu: 26774.21355062818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 42755.46157163523,
            "unit": "ns/iter",
            "extra": "iterations: 20870\ncpu: 42752.47244849066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 54781.625865899194,
            "unit": "ns/iter",
            "extra": "iterations: 15302\ncpu: 54779.081165860654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 54036.475700002025,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54034.98999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 66246.7572771392,
            "unit": "ns/iter",
            "extra": "iterations: 13192\ncpu: 66243.85991510007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 76585.67712452632,
            "unit": "ns/iter",
            "extra": "iterations: 11379\ncpu: 76581.50979875207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 87020.9707896813,
            "unit": "ns/iter",
            "extra": "iterations: 9928\ncpu: 87017.09307010467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 654.7839446280972,
            "unit": "ns/iter",
            "extra": "iterations: 1079103\ncpu: 654.713590824973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 552.9359414966286,
            "unit": "ns/iter",
            "extra": "iterations: 1281157\ncpu: 552.9107673766767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 545.586115306785,
            "unit": "ns/iter",
            "extra": "iterations: 1285718\ncpu: 545.5750794497708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 547.399000536498,
            "unit": "ns/iter",
            "extra": "iterations: 1280487\ncpu: 547.3860335950301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1043.2923782520372,
            "unit": "ns/iter",
            "extra": "iterations: 672208\ncpu: 1043.2782710113534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4104.684506823266,
            "unit": "ns/iter",
            "extra": "iterations: 193085\ncpu: 4104.553435015671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19756.393505528853,
            "unit": "ns/iter",
            "extra": "iterations: 41697\ncpu: 19756.183898122148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15733.809480156888,
            "unit": "ns/iter",
            "extra": "iterations: 52362\ncpu: 15733.493755013174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15406.181220781285,
            "unit": "ns/iter",
            "extra": "iterations: 53261\ncpu: 15405.89174067332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15217.156417260296,
            "unit": "ns/iter",
            "extra": "iterations: 54182\ncpu: 15216.939204901943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 41668.551861116095,
            "unit": "ns/iter",
            "extra": "iterations: 20391\ncpu: 41667.35324407826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 507956.53038348415,
            "unit": "ns/iter",
            "extra": "iterations: 1695\ncpu: 507927.66961651976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 423780.4230578852,
            "unit": "ns/iter",
            "extra": "iterations: 2021\ncpu: 423766.79861454683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 419744.35884934117,
            "unit": "ns/iter",
            "extra": "iterations: 2051\ncpu: 419739.20039005403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 419786.8161978745,
            "unit": "ns/iter",
            "extra": "iterations: 2062\ncpu: 419769.64112512127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 265109.25180505647,
            "unit": "ns/iter",
            "extra": "iterations: 3324\ncpu: 265100.2707581226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 418591.85818004905,
            "unit": "ns/iter",
            "extra": "iterations: 2066\ncpu: 418574.2981606984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2071649.148984206,
            "unit": "ns/iter",
            "extra": "iterations: 443\ncpu: 2071546.0496614012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 821737.8085291277,
            "unit": "ns/iter",
            "extra": "iterations: 1149\ncpu: 821690.4264577895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2776582.4024024094,
            "unit": "ns/iter",
            "extra": "iterations: 333\ncpu: 2776227.0270270226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4070.4384475093884,
            "unit": "ns/iter",
            "extra": "iterations: 193006\ncpu: 4070.2967783385034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19733.333854130677,
            "unit": "ns/iter",
            "extra": "iterations: 42243\ncpu: 19725.208910351965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15466.087838092248,
            "unit": "ns/iter",
            "extra": "iterations: 53166\ncpu: 15465.919948839459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15111.765642131531,
            "unit": "ns/iter",
            "extra": "iterations: 54724\ncpu: 15111.547036035381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15049.577067563914,
            "unit": "ns/iter",
            "extra": "iterations: 54037\ncpu: 15049.214427151759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 40495.73731503707,
            "unit": "ns/iter",
            "extra": "iterations: 20477\ncpu: 40494.960199248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 523918.57901085605,
            "unit": "ns/iter",
            "extra": "iterations: 1658\ncpu: 523897.64776839473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 435734.21878120844,
            "unit": "ns/iter",
            "extra": "iterations: 2002\ncpu: 435713.83616383583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 428895.13728394173,
            "unit": "ns/iter",
            "extra": "iterations: 2025\ncpu: 428873.0864197531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 425439.12821757636,
            "unit": "ns/iter",
            "extra": "iterations: 2059\ncpu: 425434.579893152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 252548.5750362734,
            "unit": "ns/iter",
            "extra": "iterations: 3445\ncpu: 252538.69375907056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 425248.76385543,
            "unit": "ns/iter",
            "extra": "iterations: 2075\ncpu: 425241.7349397593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2075239.1636362819,
            "unit": "ns/iter",
            "extra": "iterations: 440\ncpu: 2075014.9999999902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 824679.3670775127,
            "unit": "ns/iter",
            "extra": "iterations: 1136\ncpu: 824644.630281688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4328.499997289073,
            "unit": "ns/iter",
            "extra": "iterations: 184437\ncpu: 4328.370120962703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 20191.50894651208,
            "unit": "ns/iter",
            "extra": "iterations: 41804\ncpu: 20191.675437757287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15700.382567237895,
            "unit": "ns/iter",
            "extra": "iterations: 52017\ncpu: 15699.934636753449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15371.02643296469,
            "unit": "ns/iter",
            "extra": "iterations: 53002\ncpu: 15370.478472510542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15218.353612384408,
            "unit": "ns/iter",
            "extra": "iterations: 52583\ncpu: 15217.62927181786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 40822.74690994791,
            "unit": "ns/iter",
            "extra": "iterations: 20388\ncpu: 40822.704532077514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 526015.679122156,
            "unit": "ns/iter",
            "extra": "iterations: 1686\ncpu: 526008.8374851714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 428180.21619003004,
            "unit": "ns/iter",
            "extra": "iterations: 2063\ncpu: 428167.0867668447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 419453.1971428649,
            "unit": "ns/iter",
            "extra": "iterations: 2100\ncpu: 419453.0000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 424901.8045476561,
            "unit": "ns/iter",
            "extra": "iterations: 2067\ncpu: 424890.75955491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 256020.21723937755,
            "unit": "ns/iter",
            "extra": "iterations: 3434\ncpu: 256010.7454863142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 416995.99138755444,
            "unit": "ns/iter",
            "extra": "iterations: 2090\ncpu: 416989.66507177195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 325.0843057100295,
            "unit": "ns/iter",
            "extra": "iterations: 2150744\ncpu: 325.06904587435616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1812.3150196824224,
            "unit": "ns/iter",
            "extra": "iterations: 383084\ncpu: 1812.2839899343235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1454.4929543216492,
            "unit": "ns/iter",
            "extra": "iterations: 481146\ncpu: 1454.4620551765936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1390.1262793894505,
            "unit": "ns/iter",
            "extra": "iterations: 504049\ncpu: 1390.1039383075936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1157.3628175676336,
            "unit": "ns/iter",
            "extra": "iterations: 603769\ncpu: 1157.3628324740039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7393.757371551492,
            "unit": "ns/iter",
            "extra": "iterations: 94824\ncpu: 7393.354003206008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 21159.919289798723,
            "unit": "ns/iter",
            "extra": "iterations: 33230\ncpu: 21159.43725549205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5088.06028554026,
            "unit": "ns/iter",
            "extra": "iterations: 137844\ncpu: 5087.906619076636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4995.383507657305,
            "unit": "ns/iter",
            "extra": "iterations: 140065\ncpu: 4995.394995180814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5094.65998461332,
            "unit": "ns/iter",
            "extra": "iterations: 137782\ncpu: 5094.463718047301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10620.839697663085,
            "unit": "ns/iter",
            "extra": "iterations: 66019\ncpu: 10620.647086444878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9526.887514427342,
            "unit": "ns/iter",
            "extra": "iterations: 73645\ncpu: 9526.358883834553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3183.879690984298,
            "unit": "ns/iter",
            "extra": "iterations: 220183\ncpu: 3183.829360123149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15988.28207347334,
            "unit": "ns/iter",
            "extra": "iterations: 43907\ncpu: 15988.259275286238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12788.196005039012,
            "unit": "ns/iter",
            "extra": "iterations: 54769\ncpu: 12787.783235041808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12592.333387273098,
            "unit": "ns/iter",
            "extra": "iterations: 55617\ncpu: 12592.002445295522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13279.022600367447,
            "unit": "ns/iter",
            "extra": "iterations: 52831\ncpu: 13278.58454316578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 29020.448273001908,
            "unit": "ns/iter",
            "extra": "iterations: 24117\ncpu: 29020.4544512171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 107957.90654494675,
            "unit": "ns/iter",
            "extra": "iterations: 6463\ncpu: 107952.82376605201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 93667.00361687425,
            "unit": "ns/iter",
            "extra": "iterations: 7465\ncpu: 93665.88077695786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 93214.05775401118,
            "unit": "ns/iter",
            "extra": "iterations: 7480\ncpu: 93210.97593582896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 93578.4374167814,
            "unit": "ns/iter",
            "extra": "iterations: 7510\ncpu: 93573.96804260855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 59261.37498942407,
            "unit": "ns/iter",
            "extra": "iterations: 11819\ncpu: 59260.41120230156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 93422.30571467237,
            "unit": "ns/iter",
            "extra": "iterations: 7507\ncpu: 93418.39616358081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3096.2238322643193,
            "unit": "ns/iter",
            "extra": "iterations: 225736\ncpu: 3096.1725201119957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15685.479456964875,
            "unit": "ns/iter",
            "extra": "iterations: 44638\ncpu: 15685.135982795118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12603.03687182968,
            "unit": "ns/iter",
            "extra": "iterations: 55598\ncpu: 12602.798661822353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12492.378552577318,
            "unit": "ns/iter",
            "extra": "iterations: 55699\ncpu: 12492.109373597305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13184.951671037725,
            "unit": "ns/iter",
            "extra": "iterations: 52991\ncpu: 13184.584174671252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28501.381388037833,
            "unit": "ns/iter",
            "extra": "iterations: 24812\ncpu: 28500.48363694997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 107224.17360048629,
            "unit": "ns/iter",
            "extra": "iterations: 6538\ncpu: 107220.67910675998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 91572.36819428025,
            "unit": "ns/iter",
            "extra": "iterations: 7659\ncpu: 91570.63585324495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 90508.91939678128,
            "unit": "ns/iter",
            "extra": "iterations: 7692\ncpu: 90506.7732709305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 91534.16819251943,
            "unit": "ns/iter",
            "extra": "iterations: 7646\ncpu: 91530.44729270227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 59342.83015667525,
            "unit": "ns/iter",
            "extra": "iterations: 10021\ncpu: 59340.01596646979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 92735.20050324588,
            "unit": "ns/iter",
            "extra": "iterations: 7551\ncpu: 92730.552244735 ns\nthreads: 1"
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
        "date": 1702479522865,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 835.3809736131387,
            "unit": "ns/iter",
            "extra": "iterations: 836554\ncpu: 835.1753742137388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11873.556652799023,
            "unit": "ns/iter",
            "extra": "iterations: 69467\ncpu: 11873.275080253934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 26369.50135535492,
            "unit": "ns/iter",
            "extra": "iterations: 31726\ncpu: 26368.770093929277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 41391.725995316854,
            "unit": "ns/iter",
            "extra": "iterations: 20496\ncpu: 41388.93930523026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 52020.66320031203,
            "unit": "ns/iter",
            "extra": "iterations: 15386\ncpu: 52018.73131418173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 54022.8055,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54020.40999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 65075.49830380583,
            "unit": "ns/iter",
            "extra": "iterations: 13265\ncpu: 65073.06445533363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 74865.43154530587,
            "unit": "ns/iter",
            "extra": "iterations: 11577\ncpu: 74862.6155307938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 85770.83067788581,
            "unit": "ns/iter",
            "extra": "iterations: 10105\ncpu: 85764.4730331519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 725.7420139337769,
            "unit": "ns/iter",
            "extra": "iterations: 966715\ncpu: 725.7197829763684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 615.2382541544233,
            "unit": "ns/iter",
            "extra": "iterations: 1137466\ncpu: 615.2083666676631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 607.7620792058545,
            "unit": "ns/iter",
            "extra": "iterations: 1147592\ncpu: 607.7535395854978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 612.6103578860492,
            "unit": "ns/iter",
            "extra": "iterations: 1136004\ncpu: 612.5875437058328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1137.845771289311,
            "unit": "ns/iter",
            "extra": "iterations: 617304\ncpu: 1137.7977463291993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4117.375088281957,
            "unit": "ns/iter",
            "extra": "iterations: 193981\ncpu: 4117.117140338485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19814.401495417314,
            "unit": "ns/iter",
            "extra": "iterations: 41460\ncpu: 19813.30921369994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15766.207217383173,
            "unit": "ns/iter",
            "extra": "iterations: 52235\ncpu: 15765.925145974932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15508.275668737322,
            "unit": "ns/iter",
            "extra": "iterations: 52973\ncpu: 15507.45285334039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15562.684148698498,
            "unit": "ns/iter",
            "extra": "iterations: 52778\ncpu: 15562.275948311788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 42234.12108776296,
            "unit": "ns/iter",
            "extra": "iterations: 20225\ncpu: 42231.81211372065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 518413.34284014895,
            "unit": "ns/iter",
            "extra": "iterations: 1683\ncpu: 518383.89780154615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 422835.59119806386,
            "unit": "ns/iter",
            "extra": "iterations: 2045\ncpu: 422818.3863080685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 425917.28844220954,
            "unit": "ns/iter",
            "extra": "iterations: 1990\ncpu: 425885.4271356793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 424798.8891050497,
            "unit": "ns/iter",
            "extra": "iterations: 2056\ncpu: 424780.8852140077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 261245.52815013143,
            "unit": "ns/iter",
            "extra": "iterations: 3357\ncpu: 261233.89931486378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 418362.5498314666,
            "unit": "ns/iter",
            "extra": "iterations: 2077\ncpu: 418352.2869523355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2066714.9107143704,
            "unit": "ns/iter",
            "extra": "iterations: 448\ncpu: 2066546.2053571462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 824976.0656167701,
            "unit": "ns/iter",
            "extra": "iterations: 1143\ncpu: 824933.4208223966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2787459.8545453767,
            "unit": "ns/iter",
            "extra": "iterations: 330\ncpu: 2787220.3030303107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4154.782271297187,
            "unit": "ns/iter",
            "extra": "iterations: 191362\ncpu: 4154.714102068339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19572.525423326253,
            "unit": "ns/iter",
            "extra": "iterations: 42107\ncpu: 19572.17802265656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15544.059203586492,
            "unit": "ns/iter",
            "extra": "iterations: 53088\ncpu: 15543.267781796223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15179.524912475143,
            "unit": "ns/iter",
            "extra": "iterations: 54270\ncpu: 15179.274000368605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15322.121780686917,
            "unit": "ns/iter",
            "extra": "iterations: 53777\ncpu: 15321.083362775946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41940.60225459132,
            "unit": "ns/iter",
            "extra": "iterations: 20048\ncpu: 41939.824421388665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 530071.9950950476,
            "unit": "ns/iter",
            "extra": "iterations: 1631\ncpu: 530050.6437768226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 441531.5037859784,
            "unit": "ns/iter",
            "extra": "iterations: 1981\ncpu: 441511.8626956072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 437888.3741903478,
            "unit": "ns/iter",
            "extra": "iterations: 2007\ncpu: 437878.8241155963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 431978.38191700855,
            "unit": "ns/iter",
            "extra": "iterations: 2024\ncpu: 431959.9308300402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 259172.6668632191,
            "unit": "ns/iter",
            "extra": "iterations: 3392\ncpu: 259168.7205188693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 430176.1850937788,
            "unit": "ns/iter",
            "extra": "iterations: 2026\ncpu: 430163.07996051246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2078615.397291204,
            "unit": "ns/iter",
            "extra": "iterations: 443\ncpu: 2078272.2347629915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 828556.1896243695,
            "unit": "ns/iter",
            "extra": "iterations: 1118\ncpu: 828533.5420393592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4364.828466414864,
            "unit": "ns/iter",
            "extra": "iterations: 177936\ncpu: 4364.598507328472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19728.263840504693,
            "unit": "ns/iter",
            "extra": "iterations: 42484\ncpu: 19727.30675077663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 16157.842342085749,
            "unit": "ns/iter",
            "extra": "iterations: 52671\ncpu: 16156.816844183679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15454.595074039402,
            "unit": "ns/iter",
            "extra": "iterations: 53553\ncpu: 15453.914813362504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15788.295884378373,
            "unit": "ns/iter",
            "extra": "iterations: 53139\ncpu: 15787.502587553416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 42290.14029158165,
            "unit": "ns/iter",
            "extra": "iterations: 19823\ncpu: 42288.15517328338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 525202.7028502229,
            "unit": "ns/iter",
            "extra": "iterations: 1649\ncpu: 525177.2589448125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 431112.5926111028,
            "unit": "ns/iter",
            "extra": "iterations: 2003\ncpu: 431083.92411382677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 427389.72964972653,
            "unit": "ns/iter",
            "extra": "iterations: 2027\ncpu: 427382.78243710066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 428919.4466501256,
            "unit": "ns/iter",
            "extra": "iterations: 2015\ncpu: 428894.1935483885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 260906.6236912967,
            "unit": "ns/iter",
            "extra": "iterations: 3343\ncpu: 260899.0427759499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 427208.65922620177,
            "unit": "ns/iter",
            "extra": "iterations: 2016\ncpu: 427191.76587301627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 332.2256050194265,
            "unit": "ns/iter",
            "extra": "iterations: 2107329\ncpu: 332.2105376047149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1918.530432974121,
            "unit": "ns/iter",
            "extra": "iterations: 365426\ncpu: 1918.499231034471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1477.2308687798654,
            "unit": "ns/iter",
            "extra": "iterations: 474447\ncpu: 1477.1818559291032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1458.1683267368453,
            "unit": "ns/iter",
            "extra": "iterations: 479799\ncpu: 1458.102455403202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1187.8591757298625,
            "unit": "ns/iter",
            "extra": "iterations: 589103\ncpu: 1187.805528065556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7738.915115626415,
            "unit": "ns/iter",
            "extra": "iterations: 90853\ncpu: 7738.2078742584345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 20995.509785175313,
            "unit": "ns/iter",
            "extra": "iterations: 33469\ncpu: 20994.11694403803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5363.398675324147,
            "unit": "ns/iter",
            "extra": "iterations: 130447\ncpu: 5363.181981954391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5327.553666514819,
            "unit": "ns/iter",
            "extra": "iterations: 131460\ncpu: 5327.291951924552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5355.395403405462,
            "unit": "ns/iter",
            "extra": "iterations: 130836\ncpu: 5355.139258308068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10604.914899735115,
            "unit": "ns/iter",
            "extra": "iterations: 66075\ncpu: 10603.980325387665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 10068.082214837912,
            "unit": "ns/iter",
            "extra": "iterations: 69513\ncpu: 10067.498165810675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3263.470028415675,
            "unit": "ns/iter",
            "extra": "iterations: 214670\ncpu: 3263.2216891042303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 17580.48124327454,
            "unit": "ns/iter",
            "extra": "iterations: 39959\ncpu: 17580.124627743455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12983.520891002829,
            "unit": "ns/iter",
            "extra": "iterations: 53827\ncpu: 12982.07962546683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13740.189770432411,
            "unit": "ns/iter",
            "extra": "iterations: 51009\ncpu: 13739.577329490929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13416.111748792331,
            "unit": "ns/iter",
            "extra": "iterations: 51750\ncpu: 13416.063768115944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 31026.501872825593,
            "unit": "ns/iter",
            "extra": "iterations: 22426\ncpu: 31025.956479086206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 116658.8475619947,
            "unit": "ns/iter",
            "extra": "iterations: 6009\ncpu: 116652.55450158076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 100596.21906809484,
            "unit": "ns/iter",
            "extra": "iterations: 6975\ncpu: 100588.96057347776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 99377.9081705373,
            "unit": "ns/iter",
            "extra": "iterations: 7013\ncpu: 99374.06245543975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 100519.94328186176,
            "unit": "ns/iter",
            "extra": "iterations: 6929\ncpu: 100514.63414634245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 65391.80130536143,
            "unit": "ns/iter",
            "extra": "iterations: 10725\ncpu: 65389.24941724874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 100476.75609057206,
            "unit": "ns/iter",
            "extra": "iterations: 6978\ncpu: 100474.14732014871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3199.175551626007,
            "unit": "ns/iter",
            "extra": "iterations: 218853\ncpu: 3198.765381329023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 17129.441118840426,
            "unit": "ns/iter",
            "extra": "iterations: 40828\ncpu: 17129.13931615556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12931.816437351117,
            "unit": "ns/iter",
            "extra": "iterations: 54510\ncpu: 12901.03650706302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 13752.441269405606,
            "unit": "ns/iter",
            "extra": "iterations: 50953\ncpu: 13751.977312425186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13669.054966680611,
            "unit": "ns/iter",
            "extra": "iterations: 51322\ncpu: 13667.5246482989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 30156.077022375892,
            "unit": "ns/iter",
            "extra": "iterations: 23240\ncpu: 30155.090361445844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 115571.10966573474,
            "unit": "ns/iter",
            "extra": "iterations: 6073\ncpu: 115566.86975135688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 98486.27891922418,
            "unit": "ns/iter",
            "extra": "iterations: 7106\ncpu: 98484.3793976929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 98081.4626907475,
            "unit": "ns/iter",
            "extra": "iterations: 7143\ncpu: 98078.21643567059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 98627.35460295144,
            "unit": "ns/iter",
            "extra": "iterations: 7115\ncpu: 98619.18482080217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 65458.6355376566,
            "unit": "ns/iter",
            "extra": "iterations: 10676\ncpu: 65455.58261521105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 98619.44240956103,
            "unit": "ns/iter",
            "extra": "iterations: 6607\ncpu: 98617.43605267072 ns\nthreads: 1"
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
        "date": 1702488567941,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 796.3199149535599,
            "unit": "ns/iter",
            "extra": "iterations: 873876\ncpu: 796.3077141379326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11884.471010222034,
            "unit": "ns/iter",
            "extra": "iterations: 69559\ncpu: 11884.54118086804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25836.051000000636,
            "unit": "ns/iter",
            "extra": "iterations: 32000\ncpu: 25834.49375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 40411.138278434046,
            "unit": "ns/iter",
            "extra": "iterations: 20249\ncpu: 40409.58072003557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 51585.384590688074,
            "unit": "ns/iter",
            "extra": "iterations: 15575\ncpu: 51584.32102728734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 53809.95790000043,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53808.209999999955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 64589.01094727221,
            "unit": "ns/iter",
            "extra": "iterations: 13428\ncpu: 64584.89722966939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 74336.15160928704,
            "unit": "ns/iter",
            "extra": "iterations: 11589\ncpu: 74333.40236431097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 85098.67645337335,
            "unit": "ns/iter",
            "extra": "iterations: 10252\ncpu: 85093.72805306286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 646.3084004294839,
            "unit": "ns/iter",
            "extra": "iterations: 1084016\ncpu: 646.268689761036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 553.2508152516837,
            "unit": "ns/iter",
            "extra": "iterations: 1275373\ncpu: 553.2469324660319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 545.1792471923221,
            "unit": "ns/iter",
            "extra": "iterations: 1284684\ncpu: 545.1548396337158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 544.3106656164216,
            "unit": "ns/iter",
            "extra": "iterations: 1284764\ncpu: 544.2889122048879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1046.5273806744506,
            "unit": "ns/iter",
            "extra": "iterations: 668172\ncpu: 1046.4787509802852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3781.5884660613874,
            "unit": "ns/iter",
            "extra": "iterations: 210041\ncpu: 3781.4598102275295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19661.303488372178,
            "unit": "ns/iter",
            "extra": "iterations: 41280\ncpu: 19660.152616279072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15492.985927796915,
            "unit": "ns/iter",
            "extra": "iterations: 52657\ncpu: 15492.382779117681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15117.234123205717,
            "unit": "ns/iter",
            "extra": "iterations: 54608\ncpu: 15116.755786697899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15417.143110540988,
            "unit": "ns/iter",
            "extra": "iterations: 52994\ncpu: 15416.545269275817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 41909.07443104453,
            "unit": "ns/iter",
            "extra": "iterations: 19817\ncpu: 41907.16051874641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 516823.19238096406,
            "unit": "ns/iter",
            "extra": "iterations: 1575\ncpu: 516818.47619047656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 420963.6493190655,
            "unit": "ns/iter",
            "extra": "iterations: 2056\ncpu: 420962.0136186776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 420174.73330107867,
            "unit": "ns/iter",
            "extra": "iterations: 2066\ncpu: 420166.94094869326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 421554.45338565647,
            "unit": "ns/iter",
            "extra": "iterations: 2038\ncpu: 421550.68694798683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 258371.58944885095,
            "unit": "ns/iter",
            "extra": "iterations: 3393\ncpu: 258370.35072207422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 417658.90531398903,
            "unit": "ns/iter",
            "extra": "iterations: 2070\ncpu: 417639.61352657166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2063930.3466666406,
            "unit": "ns/iter",
            "extra": "iterations: 450\ncpu: 2063747.5555555557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 836252.0518453422,
            "unit": "ns/iter",
            "extra": "iterations: 1138\ncpu: 836236.9068541314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2771130.186186195,
            "unit": "ns/iter",
            "extra": "iterations: 333\ncpu: 2770924.624624631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3898.839101426913,
            "unit": "ns/iter",
            "extra": "iterations: 200095\ncpu: 3898.6701316874614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19939.997652121867,
            "unit": "ns/iter",
            "extra": "iterations: 40888\ncpu: 19938.512522011366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15514.239860950975,
            "unit": "ns/iter",
            "extra": "iterations: 52643\ncpu: 15513.694128374062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15153.405946861665,
            "unit": "ns/iter",
            "extra": "iterations: 53709\ncpu: 15152.771416336207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15323.830433388872,
            "unit": "ns/iter",
            "extra": "iterations: 53047\ncpu: 15322.843893151254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41253.562534407436,
            "unit": "ns/iter",
            "extra": "iterations: 19981\ncpu: 41251.849256794005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 528017.586626132,
            "unit": "ns/iter",
            "extra": "iterations: 1645\ncpu: 527992.7051671714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 436153.2980961719,
            "unit": "ns/iter",
            "extra": "iterations: 1996\ncpu: 436136.0220440854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 429035.9365234364,
            "unit": "ns/iter",
            "extra": "iterations: 2048\ncpu: 429015.77148437774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 423965.53414044355,
            "unit": "ns/iter",
            "extra": "iterations: 2065\ncpu: 423950.12106537743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 254504.7764227648,
            "unit": "ns/iter",
            "extra": "iterations: 3444\ncpu: 254491.69570267067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 423479.58843372425,
            "unit": "ns/iter",
            "extra": "iterations: 2075\ncpu: 423458.1686746999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2073317.6004566178,
            "unit": "ns/iter",
            "extra": "iterations: 438\ncpu: 2073189.269406389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 847295.9161406492,
            "unit": "ns/iter",
            "extra": "iterations: 1109\ncpu: 847248.7826871055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4258.364011900508,
            "unit": "ns/iter",
            "extra": "iterations: 186884\ncpu: 4258.2104407011775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19946.281864162043,
            "unit": "ns/iter",
            "extra": "iterations: 41520\ncpu: 19945.847784200516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15730.3138519916,
            "unit": "ns/iter",
            "extra": "iterations: 52700\ncpu: 15730.178368121422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15490.529295232438,
            "unit": "ns/iter",
            "extra": "iterations: 53507\ncpu: 15490.092885043061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15662.053680807376,
            "unit": "ns/iter",
            "extra": "iterations: 52570\ncpu: 15661.812821000532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41282.464217301,
            "unit": "ns/iter",
            "extra": "iterations: 20359\ncpu: 41280.043224126886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 514755.5856453545,
            "unit": "ns/iter",
            "extra": "iterations: 1658\ncpu: 514569.1194209854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 420055.2788691961,
            "unit": "ns/iter",
            "extra": "iterations: 2087\ncpu: 420056.87589841883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 415105.1576704573,
            "unit": "ns/iter",
            "extra": "iterations: 2112\ncpu: 415098.53219697095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 413389.25680190395,
            "unit": "ns/iter",
            "extra": "iterations: 2095\ncpu: 413381.09785202827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 254202.85710178514,
            "unit": "ns/iter",
            "extra": "iterations: 3478\ncpu: 254203.68027602084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 415732.85332059313,
            "unit": "ns/iter",
            "extra": "iterations: 2093\ncpu: 415722.1691352119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 325.18063710969057,
            "unit": "ns/iter",
            "extra": "iterations: 2143430\ncpu: 325.17502321046095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1858.665416288376,
            "unit": "ns/iter",
            "extra": "iterations: 376686\ncpu: 1858.5437207647778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1392.3298770505332,
            "unit": "ns/iter",
            "extra": "iterations: 498416\ncpu: 1392.2532583223642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1411.1425577406837,
            "unit": "ns/iter",
            "extra": "iterations: 496227\ncpu: 1411.0350706430722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1155.3394759706368,
            "unit": "ns/iter",
            "extra": "iterations: 605386\ncpu: 1155.3172686517341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7337.477623221936,
            "unit": "ns/iter",
            "extra": "iterations: 95255\ncpu: 7337.520340139674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 21018.842295092378,
            "unit": "ns/iter",
            "extra": "iterations: 33271\ncpu: 21017.70911604713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5055.380736130721,
            "unit": "ns/iter",
            "extra": "iterations: 138508\ncpu: 5055.087070782915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5021.092092307835,
            "unit": "ns/iter",
            "extra": "iterations: 139143\ncpu: 5020.557268421665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5046.223395607399,
            "unit": "ns/iter",
            "extra": "iterations: 137778\ncpu: 5046.137990099962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10662.562250464283,
            "unit": "ns/iter",
            "extra": "iterations: 65622\ncpu: 10662.613148029655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9514.435819228784,
            "unit": "ns/iter",
            "extra": "iterations: 73441\ncpu: 9513.860105390575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3222.4818787240106,
            "unit": "ns/iter",
            "extra": "iterations: 216679\ncpu: 3222.3127298908034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15979.002029832192,
            "unit": "ns/iter",
            "extra": "iterations: 43846\ncpu: 15977.79044838738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12739.081246695165,
            "unit": "ns/iter",
            "extra": "iterations: 54833\ncpu: 12738.243393577002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12791.367126487072,
            "unit": "ns/iter",
            "extra": "iterations: 54804\ncpu: 12790.621122545745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13386.485447263154,
            "unit": "ns/iter",
            "extra": "iterations: 52430\ncpu: 13385.624642380244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28963.620889424263,
            "unit": "ns/iter",
            "extra": "iterations: 23993\ncpu: 28961.2511982661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 107635.3009230808,
            "unit": "ns/iter",
            "extra": "iterations: 6500\ncpu: 107633.26153846065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 94086.43638077188,
            "unit": "ns/iter",
            "extra": "iterations: 7427\ncpu: 94082.7521206417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 93545.12501678453,
            "unit": "ns/iter",
            "extra": "iterations: 7447\ncpu: 93538.25701624877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 93476.91445070905,
            "unit": "ns/iter",
            "extra": "iterations: 7446\ncpu: 93470.76282567749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 59941.61382496428,
            "unit": "ns/iter",
            "extra": "iterations: 11689\ncpu: 59936.94071349191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 92671.4937115326,
            "unit": "ns/iter",
            "extra": "iterations: 7474\ncpu: 92669.50762643681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3150.43078545602,
            "unit": "ns/iter",
            "extra": "iterations: 220929\ncpu: 3150.4044285720925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15672.147111390044,
            "unit": "ns/iter",
            "extra": "iterations: 44762\ncpu: 15672.06559134993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12517.231555724069,
            "unit": "ns/iter",
            "extra": "iterations: 55749\ncpu: 12516.638863477225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12621.360140807474,
            "unit": "ns/iter",
            "extra": "iterations: 55395\ncpu: 12620.2960556006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13259.913764040723,
            "unit": "ns/iter",
            "extra": "iterations: 52797\ncpu: 13259.130253613026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27941.266410503347,
            "unit": "ns/iter",
            "extra": "iterations: 24984\ncpu: 27939.745437079644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 105849.07832146327,
            "unit": "ns/iter",
            "extra": "iterations: 6601\ncpu: 105842.4178154826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 91286.74820143366,
            "unit": "ns/iter",
            "extra": "iterations: 7645\ncpu: 91283.62328319091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 90077.80832575962,
            "unit": "ns/iter",
            "extra": "iterations: 7711\ncpu: 90074.85410452713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 91463.52205785965,
            "unit": "ns/iter",
            "extra": "iterations: 7639\ncpu: 91457.35043853824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 59681.4696366775,
            "unit": "ns/iter",
            "extra": "iterations: 11560\ncpu: 59678.13148788866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 92601.58024038823,
            "unit": "ns/iter",
            "extra": "iterations: 7571\ncpu: 92595.45634658677 ns\nthreads: 1"
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
        "date": 1702491203527,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 800.7006725878829,
            "unit": "ns/iter",
            "extra": "iterations: 872005\ncpu: 800.6894455880415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11834.73117385632,
            "unit": "ns/iter",
            "extra": "iterations: 69770\ncpu: 11834.481868998137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 26382.523853065984,
            "unit": "ns/iter",
            "extra": "iterations: 31715\ncpu: 26380.84502601293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 41688.26211780395,
            "unit": "ns/iter",
            "extra": "iterations: 20899\ncpu: 41686.56395042826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 51824.53937347076,
            "unit": "ns/iter",
            "extra": "iterations: 15099\ncpu: 51820.07417709787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 53500.2497999983,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53499.52 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 64824.22421357991,
            "unit": "ns/iter",
            "extra": "iterations: 13447\ncpu: 64820.249869859486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 76168.9696839579,
            "unit": "ns/iter",
            "extra": "iterations: 11644\ncpu: 76167.83751288221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 86522.91221675191,
            "unit": "ns/iter",
            "extra": "iterations: 10150\ncpu: 86521.19211822664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 677.1698127069783,
            "unit": "ns/iter",
            "extra": "iterations: 1034475\ncpu: 677.1691921022741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 570.7565058583677,
            "unit": "ns/iter",
            "extra": "iterations: 1225434\ncpu: 570.7630113086474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 570.9890886157921,
            "unit": "ns/iter",
            "extra": "iterations: 1230458\ncpu: 570.987632247505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 574.122348892906,
            "unit": "ns/iter",
            "extra": "iterations: 1220575\ncpu: 574.1215410769512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1073.226210515863,
            "unit": "ns/iter",
            "extra": "iterations: 651685\ncpu: 1073.2220321167438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4136.412384161916,
            "unit": "ns/iter",
            "extra": "iterations: 192294\ncpu: 4136.3947913091415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19819.35589141178,
            "unit": "ns/iter",
            "extra": "iterations: 41552\ncpu: 19819.27705044281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15763.302763001298,
            "unit": "ns/iter",
            "extra": "iterations: 52262\ncpu: 15763.306034977622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15562.967977477283,
            "unit": "ns/iter",
            "extra": "iterations: 53275\ncpu: 15562.48709526045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15359.45802394357,
            "unit": "ns/iter",
            "extra": "iterations: 52792\ncpu: 15353.443703591427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 41256.40299985078,
            "unit": "ns/iter",
            "extra": "iterations: 20201\ncpu: 41256.12098410975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 507680.88249122055,
            "unit": "ns/iter",
            "extra": "iterations: 1702\ncpu: 507671.44535840204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 428244.4867646861,
            "unit": "ns/iter",
            "extra": "iterations: 2040\ncpu: 428237.99019607843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 422638.92839866545,
            "unit": "ns/iter",
            "extra": "iterations: 2067\ncpu: 422632.12385099195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 421253.7388132191,
            "unit": "ns/iter",
            "extra": "iterations: 2056\ncpu: 421242.07198443636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 259906.11789473036,
            "unit": "ns/iter",
            "extra": "iterations: 3325\ncpu: 259897.05263157887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 417520.8922558882,
            "unit": "ns/iter",
            "extra": "iterations: 2079\ncpu: 417513.08321308234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2076029.4288937212,
            "unit": "ns/iter",
            "extra": "iterations: 443\ncpu: 2075780.8126410837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 822113.8062554746,
            "unit": "ns/iter",
            "extra": "iterations: 1151\ncpu: 822101.9113814093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2763638.7703926265,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2763482.1752265906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4066.763386654149,
            "unit": "ns/iter",
            "extra": "iterations: 193607\ncpu: 4066.71762901134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19583.965060183404,
            "unit": "ns/iter",
            "extra": "iterations: 41872\ncpu: 19583.817348108503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15679.959613250912,
            "unit": "ns/iter",
            "extra": "iterations: 53161\ncpu: 15679.844246722228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15143.857095431227,
            "unit": "ns/iter",
            "extra": "iterations: 54218\ncpu: 15143.863661514735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15294.004259929572,
            "unit": "ns/iter",
            "extra": "iterations: 53522\ncpu: 15294.049176039764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 40375.22981305178,
            "unit": "ns/iter",
            "extra": "iterations: 20273\ncpu: 40374.86311843348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 539158.5350985185,
            "unit": "ns/iter",
            "extra": "iterations: 1624\ncpu: 539143.2881773413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 441494.7368684528,
            "unit": "ns/iter",
            "extra": "iterations: 1999\ncpu: 441490.29514757503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 445666.93041750276,
            "unit": "ns/iter",
            "extra": "iterations: 2012\ncpu: 445660.8846918473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 430023.601574006,
            "unit": "ns/iter",
            "extra": "iterations: 2033\ncpu: 430013.82193802274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 252555.9971165066,
            "unit": "ns/iter",
            "extra": "iterations: 3468\ncpu: 252553.1718569785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 429162.17133043206,
            "unit": "ns/iter",
            "extra": "iterations: 2037\ncpu: 429153.70643102744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2080583.1068181326,
            "unit": "ns/iter",
            "extra": "iterations: 440\ncpu: 2080414.3181818123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 817239.5152838744,
            "unit": "ns/iter",
            "extra": "iterations: 1145\ncpu: 817209.3449781679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4384.980529910166,
            "unit": "ns/iter",
            "extra": "iterations: 183050\ncpu: 4384.824911226447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19612.779534464426,
            "unit": "ns/iter",
            "extra": "iterations: 42188\ncpu: 19611.58386270978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15750.04798729059,
            "unit": "ns/iter",
            "extra": "iterations: 52243\ncpu: 15749.235304251319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15503.304924491158,
            "unit": "ns/iter",
            "extra": "iterations: 53305\ncpu: 15502.553231404192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15684.9967922578,
            "unit": "ns/iter",
            "extra": "iterations: 52685\ncpu: 15684.5363955585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 40453.481295555684,
            "unit": "ns/iter",
            "extra": "iterations: 20717\ncpu: 40452.34831297951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 523064.5311750474,
            "unit": "ns/iter",
            "extra": "iterations: 1668\ncpu: 523023.50119904126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 429335.2459499562,
            "unit": "ns/iter",
            "extra": "iterations: 2037\ncpu: 429320.86401570734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 421740.55771093204,
            "unit": "ns/iter",
            "extra": "iterations: 2062\ncpu: 421720.4170708058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 421288.805314021,
            "unit": "ns/iter",
            "extra": "iterations: 2070\ncpu: 421264.9758454086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 253513.52246544408,
            "unit": "ns/iter",
            "extra": "iterations: 3472\ncpu: 253509.93663594488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 421402.8433268942,
            "unit": "ns/iter",
            "extra": "iterations: 2068\ncpu: 421382.88201160455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 327.9996077899401,
            "unit": "ns/iter",
            "extra": "iterations: 2144259\ncpu: 327.98901625223436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1895.6496632968942,
            "unit": "ns/iter",
            "extra": "iterations: 368574\ncpu: 1895.489915186646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1423.9943167868971,
            "unit": "ns/iter",
            "extra": "iterations: 492855\ncpu: 1423.9814955717168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1400.9224867945616,
            "unit": "ns/iter",
            "extra": "iterations: 500934\ncpu: 1400.9210794236342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1181.8829863253734,
            "unit": "ns/iter",
            "extra": "iterations: 591965\ncpu: 1181.85179867053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7403.513843450398,
            "unit": "ns/iter",
            "extra": "iterations: 94449\ncpu: 7403.2705481265375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 21128.15019452976,
            "unit": "ns/iter",
            "extra": "iterations: 33157\ncpu: 21126.742467653836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5055.99643038198,
            "unit": "ns/iter",
            "extra": "iterations: 138110\ncpu: 5055.840272246817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4989.260227183484,
            "unit": "ns/iter",
            "extra": "iterations: 140239\ncpu: 4988.960988027616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5017.478410360714,
            "unit": "ns/iter",
            "extra": "iterations: 139604\ncpu: 5017.344058909547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10655.028828335659,
            "unit": "ns/iter",
            "extra": "iterations: 65838\ncpu: 10654.570308940049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8667.848322264012,
            "unit": "ns/iter",
            "extra": "iterations: 80704\ncpu: 8667.935913957184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3320.186487691208,
            "unit": "ns/iter",
            "extra": "iterations: 210904\ncpu: 3320.2072981071738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16082.932773111346,
            "unit": "ns/iter",
            "extra": "iterations: 43554\ncpu: 16082.382789181076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12719.367974120461,
            "unit": "ns/iter",
            "extra": "iterations: 54406\ncpu: 12718.689115171203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12741.579026381556,
            "unit": "ns/iter",
            "extra": "iterations: 54621\ncpu: 12740.744402336008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13309.120676226652,
            "unit": "ns/iter",
            "extra": "iterations: 52645\ncpu: 13308.673188336965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28780.755913272373,
            "unit": "ns/iter",
            "extra": "iterations: 24352\ncpu: 28779.15160972414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 109131.34444966546,
            "unit": "ns/iter",
            "extra": "iterations: 6387\ncpu: 109127.44637544952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 94811.46882591386,
            "unit": "ns/iter",
            "extra": "iterations: 7410\ncpu: 94811.3900134936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 93427.46349542825,
            "unit": "ns/iter",
            "extra": "iterations: 7547\ncpu: 93390.14177819015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 93660.14542787957,
            "unit": "ns/iter",
            "extra": "iterations: 7502\ncpu: 93657.65129298849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 60037.80409181188,
            "unit": "ns/iter",
            "extra": "iterations: 11633\ncpu: 60035.39929510841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 93198.2080501024,
            "unit": "ns/iter",
            "extra": "iterations: 7503\ncpu: 93195.94828735133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3122.8259695393867,
            "unit": "ns/iter",
            "extra": "iterations: 224024\ncpu: 3122.5716887476037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15427.678928585681,
            "unit": "ns/iter",
            "extra": "iterations: 45398\ncpu: 15427.446143001813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12659.851884026353,
            "unit": "ns/iter",
            "extra": "iterations: 55254\ncpu: 12659.73866145438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12430.075681974999,
            "unit": "ns/iter",
            "extra": "iterations: 54914\ncpu: 12429.706450085638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13187.226374206815,
            "unit": "ns/iter",
            "extra": "iterations: 53067\ncpu: 13186.843047468397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27982.434598140615,
            "unit": "ns/iter",
            "extra": "iterations: 24984\ncpu: 27981.828370157156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 106484.06721411312,
            "unit": "ns/iter",
            "extra": "iterations: 6576\ncpu: 106481.91909975627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 91323.64544385619,
            "unit": "ns/iter",
            "extra": "iterations: 7649\ncpu: 91320.2510132039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 90924.83432952124,
            "unit": "ns/iter",
            "extra": "iterations: 7696\ncpu: 90921.0369022874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 91196.18121242855,
            "unit": "ns/iter",
            "extra": "iterations: 7654\ncpu: 91192.68356415005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 60001.52480506464,
            "unit": "ns/iter",
            "extra": "iterations: 11671\ncpu: 59997.77225601996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 92512.00410977796,
            "unit": "ns/iter",
            "extra": "iterations: 7543\ncpu: 92508.96195147731 ns\nthreads: 1"
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
        "date": 1705573904391,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 805.3556101221039,
            "unit": "ns/iter",
            "extra": "iterations: 870293\ncpu: 805.3063738304228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11967.712200071895,
            "unit": "ns/iter",
            "extra": "iterations: 68975\ncpu: 11967.335991301194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 26250.498707277115,
            "unit": "ns/iter",
            "extra": "iterations: 31716\ncpu: 26248.798713583048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 41073.82061750554,
            "unit": "ns/iter",
            "extra": "iterations: 19595\ncpu: 41072.88594029091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 52512.83401075201,
            "unit": "ns/iter",
            "extra": "iterations: 15254\ncpu: 52509.64337223021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 53405.818099997756,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53403.810000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 64695.55689286199,
            "unit": "ns/iter",
            "extra": "iterations: 13543\ncpu: 64690.90304954591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 75126.72825243467,
            "unit": "ns/iter",
            "extra": "iterations: 11599\ncpu: 75123.79515475473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 84808.34274586172,
            "unit": "ns/iter",
            "extra": "iterations: 10270\ncpu: 84806.43622200582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 639.284147229089,
            "unit": "ns/iter",
            "extra": "iterations: 1093588\ncpu: 639.2678046942722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 544.0955096847716,
            "unit": "ns/iter",
            "extra": "iterations: 1287482\ncpu: 544.0789851819297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 541.1304205497001,
            "unit": "ns/iter",
            "extra": "iterations: 1292166\ncpu: 541.0939461338561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 539.4817759239663,
            "unit": "ns/iter",
            "extra": "iterations: 1292713\ncpu: 539.4646762274372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1040.9215752721962,
            "unit": "ns/iter",
            "extra": "iterations: 672798\ncpu: 1040.8944438003684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4037.2873278594116,
            "unit": "ns/iter",
            "extra": "iterations: 200708\ncpu: 4037.215756222968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19863.604494607123,
            "unit": "ns/iter",
            "extra": "iterations: 39959\ncpu: 19862.386446107274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15727.250709311875,
            "unit": "ns/iter",
            "extra": "iterations: 50401\ncpu: 15726.949862105923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15317.490204010572,
            "unit": "ns/iter",
            "extra": "iterations: 51909\ncpu: 15317.174285769313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15269.03433283094,
            "unit": "ns/iter",
            "extra": "iterations: 51059\ncpu: 15267.982138310583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 41817.079899072436,
            "unit": "ns/iter",
            "extra": "iterations: 20213\ncpu: 41814.80235492012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 507729.7682428581,
            "unit": "ns/iter",
            "extra": "iterations: 1713\ncpu: 507722.8254524217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 421962.6301502655,
            "unit": "ns/iter",
            "extra": "iterations: 2063\ncpu: 421941.153659718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 417148.2239307936,
            "unit": "ns/iter",
            "extra": "iterations: 2081\ncpu: 417132.1480057658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 418692.4525862282,
            "unit": "ns/iter",
            "extra": "iterations: 2088\ncpu: 418678.2088122603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 259139.8890865973,
            "unit": "ns/iter",
            "extra": "iterations: 3372\ncpu: 259125.80071174412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 415660.5901951446,
            "unit": "ns/iter",
            "extra": "iterations: 2101\ncpu: 415635.2689195615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2065636.0647321697,
            "unit": "ns/iter",
            "extra": "iterations: 448\ncpu: 2065524.3303571397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 805081.7923076873,
            "unit": "ns/iter",
            "extra": "iterations: 1170\ncpu: 805026.6666666674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2770741.102102084,
            "unit": "ns/iter",
            "extra": "iterations: 333\ncpu: 2770482.282282283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4006.4922494174702,
            "unit": "ns/iter",
            "extra": "iterations: 203017\ncpu: 4006.409315476046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19610.076941281633,
            "unit": "ns/iter",
            "extra": "iterations: 42253\ncpu: 19609.31058149719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15451.295633768304,
            "unit": "ns/iter",
            "extra": "iterations: 53387\ncpu: 15451.33459456423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15136.07109635751,
            "unit": "ns/iter",
            "extra": "iterations: 54827\ncpu: 15135.362139091978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14911.52779283656,
            "unit": "ns/iter",
            "extra": "iterations: 55338\ncpu: 14911.35928295197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 40120.16306862084,
            "unit": "ns/iter",
            "extra": "iterations: 20752\ncpu: 40118.15728604474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 518620.71496158553,
            "unit": "ns/iter",
            "extra": "iterations: 1691\ncpu: 518574.4529864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 429591.74278727686,
            "unit": "ns/iter",
            "extra": "iterations: 2045\ncpu: 429555.99022004876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 424170.44309338205,
            "unit": "ns/iter",
            "extra": "iterations: 2056\ncpu: 424145.5252918289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 422027.3396317832,
            "unit": "ns/iter",
            "extra": "iterations: 2064\ncpu: 422004.79651162704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 252298.83056669656,
            "unit": "ns/iter",
            "extra": "iterations: 3494\ncpu: 252285.2318259875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 414525.0629539877,
            "unit": "ns/iter",
            "extra": "iterations: 2065\ncpu: 414493.1234866838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2065012.3573033668,
            "unit": "ns/iter",
            "extra": "iterations: 445\ncpu: 2064827.865168543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 832524.6001764925,
            "unit": "ns/iter",
            "extra": "iterations: 1133\ncpu: 832460.6354810257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4290.334511650036,
            "unit": "ns/iter",
            "extra": "iterations: 184161\ncpu: 4290.097251861132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19917.75864858405,
            "unit": "ns/iter",
            "extra": "iterations: 42030\ncpu: 19916.861765405713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15711.703857827431,
            "unit": "ns/iter",
            "extra": "iterations: 52387\ncpu: 15711.058086929943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15503.635228979489,
            "unit": "ns/iter",
            "extra": "iterations: 53280\ncpu: 15502.882882882823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15658.622118059744,
            "unit": "ns/iter",
            "extra": "iterations: 52482\ncpu: 15657.800769787691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 40251.37130334262,
            "unit": "ns/iter",
            "extra": "iterations: 20762\ncpu: 40249.34977362512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 508990.7059164482,
            "unit": "ns/iter",
            "extra": "iterations: 1724\ncpu: 508965.83526682184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 416971.4215827167,
            "unit": "ns/iter",
            "extra": "iterations: 2085\ncpu: 416937.5059952023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 414174.67440757644,
            "unit": "ns/iter",
            "extra": "iterations: 2110\ncpu: 414153.08056872035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 418439.26053639717,
            "unit": "ns/iter",
            "extra": "iterations: 2088\ncpu: 418434.62643678143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 253978.1872842349,
            "unit": "ns/iter",
            "extra": "iterations: 3476\ncpu: 253962.85960874602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 413459.96489564836,
            "unit": "ns/iter",
            "extra": "iterations: 2108\ncpu: 413425.99620493676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 320.1290958382139,
            "unit": "ns/iter",
            "extra": "iterations: 2187739\ncpu: 320.12639533326404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1873.4012007708257,
            "unit": "ns/iter",
            "extra": "iterations: 372594\ncpu: 1873.3463233438908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1466.7157959099636,
            "unit": "ns/iter",
            "extra": "iterations: 492273\ncpu: 1466.6894182699475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1354.337477296902,
            "unit": "ns/iter",
            "extra": "iterations: 518103\ncpu: 1354.313717542645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1169.7318330902842,
            "unit": "ns/iter",
            "extra": "iterations: 597281\ncpu: 1169.688304165035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7368.5818555535325,
            "unit": "ns/iter",
            "extra": "iterations: 95357\ncpu: 7368.486844175052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19856.467022363493,
            "unit": "ns/iter",
            "extra": "iterations: 35236\ncpu: 19855.204904075403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5039.6344070519835,
            "unit": "ns/iter",
            "extra": "iterations: 138739\ncpu: 5039.534665811331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5094.057650502796,
            "unit": "ns/iter",
            "extra": "iterations: 138004\ncpu: 5093.756702704303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5137.865970625561,
            "unit": "ns/iter",
            "extra": "iterations: 136582\ncpu: 5137.456619466756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10678.467732620455,
            "unit": "ns/iter",
            "extra": "iterations: 65794\ncpu: 10678.370368118743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9530.110985754918,
            "unit": "ns/iter",
            "extra": "iterations: 73568\ncpu: 9529.450304480211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3155.730233165724,
            "unit": "ns/iter",
            "extra": "iterations: 221988\ncpu: 3155.681838657894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15777.017121744773,
            "unit": "ns/iter",
            "extra": "iterations: 44388\ncpu: 15775.98224745428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12560.183136557216,
            "unit": "ns/iter",
            "extra": "iterations: 55647\ncpu: 12559.899006235775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12655.849689979366,
            "unit": "ns/iter",
            "extra": "iterations: 55319\ncpu: 12655.658996005019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13168.696703585858,
            "unit": "ns/iter",
            "extra": "iterations: 53179\ncpu: 13167.949754602298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 29093.423690773965,
            "unit": "ns/iter",
            "extra": "iterations: 24060\ncpu: 29092.788861180434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 107160.8561205848,
            "unit": "ns/iter",
            "extra": "iterations: 6568\ncpu: 107155.25274056038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 93021.66710892944,
            "unit": "ns/iter",
            "extra": "iterations: 7537\ncpu: 93019.26495953376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 92699.76104789149,
            "unit": "ns/iter",
            "extra": "iterations: 7558\ncpu: 92694.33712622439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 92926.44922134865,
            "unit": "ns/iter",
            "extra": "iterations: 7513\ncpu: 92923.05337415086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 59112.36004399791,
            "unit": "ns/iter",
            "extra": "iterations: 11818\ncpu: 59110.39939075991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 93151.76314743517,
            "unit": "ns/iter",
            "extra": "iterations: 7549\ncpu: 93143.33024241717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3100.346551449153,
            "unit": "ns/iter",
            "extra": "iterations: 225776\ncpu: 3100.354333498649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15456.51128466463,
            "unit": "ns/iter",
            "extra": "iterations: 45327\ncpu: 15455.734992388621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12527.084884906524,
            "unit": "ns/iter",
            "extra": "iterations: 55911\ncpu: 12526.910625816063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12378.141162115842,
            "unit": "ns/iter",
            "extra": "iterations: 56552\ncpu: 12377.549865610363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13271.5093130008,
            "unit": "ns/iter",
            "extra": "iterations: 52722\ncpu: 13270.881226053556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28129.883116359997,
            "unit": "ns/iter",
            "extra": "iterations: 24811\ncpu: 28129.696505582255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 106421.23677810989,
            "unit": "ns/iter",
            "extra": "iterations: 6580\ncpu: 106414.25531914987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 90048.98894459572,
            "unit": "ns/iter",
            "extra": "iterations: 7779\ncpu: 90047.82105669212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 89950.15738716409,
            "unit": "ns/iter",
            "extra": "iterations: 7777\ncpu: 89944.0401182971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 90134.25003217641,
            "unit": "ns/iter",
            "extra": "iterations: 7771\ncpu: 90133.53493758923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 59766.989868373224,
            "unit": "ns/iter",
            "extra": "iterations: 11548\ncpu: 59765.509179079694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 91954.68113083579,
            "unit": "ns/iter",
            "extra": "iterations: 7605\ncpu: 91949.1650230106 ns\nthreads: 1"
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
        "date": 1705771604363,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 786.0400856080726,
            "unit": "ns/iter",
            "extra": "iterations: 885430\ncpu: 786.0058954406334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11755.571042410364,
            "unit": "ns/iter",
            "extra": "iterations: 70289\ncpu: 11755.30879654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25648.280326354696,
            "unit": "ns/iter",
            "extra": "iterations: 32480\ncpu: 25647.161330049268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 40610.38186388279,
            "unit": "ns/iter",
            "extra": "iterations: 20688\ncpu: 40607.81612529003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 51080.184693031755,
            "unit": "ns/iter",
            "extra": "iterations: 15653\ncpu: 51079.76745671756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 52758.41860000128,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52753.9 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 63976.74303723448,
            "unit": "ns/iter",
            "extra": "iterations: 13644\ncpu: 63974.091175608264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 73705.36310432639,
            "unit": "ns/iter",
            "extra": "iterations: 11790\ncpu: 73700.76335877863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 84599.75220809299,
            "unit": "ns/iter",
            "extra": "iterations: 10303\ncpu: 84596.36998932346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 652.5933526895502,
            "unit": "ns/iter",
            "extra": "iterations: 1072524\ncpu: 652.5936948730285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 543.2220379330337,
            "unit": "ns/iter",
            "extra": "iterations: 1289640\ncpu: 543.1989547470605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 538.1112597370732,
            "unit": "ns/iter",
            "extra": "iterations: 1300057\ncpu: 538.0903298855353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 546.8146711764623,
            "unit": "ns/iter",
            "extra": "iterations: 1282542\ncpu: 546.7842768501922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1078.7183534725073,
            "unit": "ns/iter",
            "extra": "iterations: 647496\ncpu: 1078.6923780224126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3997.3070733694267,
            "unit": "ns/iter",
            "extra": "iterations: 200343\ncpu: 3997.137908486946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19807.92007938788,
            "unit": "ns/iter",
            "extra": "iterations: 41316\ncpu: 19807.2078613612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15708.745457678806,
            "unit": "ns/iter",
            "extra": "iterations: 52231\ncpu: 15708.129271888347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15313.069589794228,
            "unit": "ns/iter",
            "extra": "iterations: 52364\ncpu: 15312.74921701933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15375.366968237928,
            "unit": "ns/iter",
            "extra": "iterations: 51950\ncpu: 15374.85659287779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 40764.69642857063,
            "unit": "ns/iter",
            "extra": "iterations: 20328\ncpu: 40763.64128295944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 520932.07176195184,
            "unit": "ns/iter",
            "extra": "iterations: 1714\ncpu: 520884.94749124814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 422264.8166922709,
            "unit": "ns/iter",
            "extra": "iterations: 1953\ncpu: 422196.5693804408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 416630.18614718085,
            "unit": "ns/iter",
            "extra": "iterations: 2079\ncpu: 416622.0298220298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 419717.7784200313,
            "unit": "ns/iter",
            "extra": "iterations: 2076\ncpu: 419697.4470134888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 257433.52260560496,
            "unit": "ns/iter",
            "extra": "iterations: 3362\ncpu: 257424.9851278999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 414385.51633045415,
            "unit": "ns/iter",
            "extra": "iterations: 2082\ncpu: 414358.3093179641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2066051.8816963958,
            "unit": "ns/iter",
            "extra": "iterations: 448\ncpu: 2065740.1785714258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 819084.6221837237,
            "unit": "ns/iter",
            "extra": "iterations: 1154\ncpu: 819032.3223570198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2776591.7469878676,
            "unit": "ns/iter",
            "extra": "iterations: 332\ncpu: 2776469.8795180707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3943.9018245433795,
            "unit": "ns/iter",
            "extra": "iterations: 202352\ncpu: 3943.713924250811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19529.930272027945,
            "unit": "ns/iter",
            "extra": "iterations: 41834\ncpu: 19529.179614667446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15480.525270182019,
            "unit": "ns/iter",
            "extra": "iterations: 53205\ncpu: 15479.958650502744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15092.335212250053,
            "unit": "ns/iter",
            "extra": "iterations: 54464\ncpu: 15091.86435076381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15225.895492146052,
            "unit": "ns/iter",
            "extra": "iterations: 53795\ncpu: 15225.147318524014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 40061.67383459943,
            "unit": "ns/iter",
            "extra": "iterations: 20508\ncpu: 40060.38131460891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 529725.1304607801,
            "unit": "ns/iter",
            "extra": "iterations: 1671\ncpu: 529703.7103530802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 431130.835066863,
            "unit": "ns/iter",
            "extra": "iterations: 2019\ncpu: 431107.42942050594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 426953.6900927279,
            "unit": "ns/iter",
            "extra": "iterations: 2049\ncpu: 426927.62323084247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 421470.0448192819,
            "unit": "ns/iter",
            "extra": "iterations: 2075\ncpu: 421455.08433734736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 254830.90164406653,
            "unit": "ns/iter",
            "extra": "iterations: 3467\ncpu: 254820.7960773003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 423681.202722422,
            "unit": "ns/iter",
            "extra": "iterations: 2057\ncpu: 423666.7476908149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2079824.1685648726,
            "unit": "ns/iter",
            "extra": "iterations: 439\ncpu: 2079639.179954432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 835411.9734748156,
            "unit": "ns/iter",
            "extra": "iterations: 1131\ncpu: 835373.386383732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4354.624168761284,
            "unit": "ns/iter",
            "extra": "iterations: 184213\ncpu: 4354.379441190368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19609.01988994936,
            "unit": "ns/iter",
            "extra": "iterations: 41981\ncpu: 19607.427169433846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15695.021874110884,
            "unit": "ns/iter",
            "extra": "iterations: 52665\ncpu: 15694.136523307638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15465.596586877195,
            "unit": "ns/iter",
            "extra": "iterations: 53558\ncpu: 15465.01736435271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15692.612607830235,
            "unit": "ns/iter",
            "extra": "iterations: 52745\ncpu: 15691.74329320313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41740.87123613255,
            "unit": "ns/iter",
            "extra": "iterations: 20192\ncpu: 41738.663827258446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 517286.15520284505,
            "unit": "ns/iter",
            "extra": "iterations: 1701\ncpu: 517268.37154614646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 419961.68770923506,
            "unit": "ns/iter",
            "extra": "iterations: 2091\ncpu: 419941.65471066546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 415685.5987712632,
            "unit": "ns/iter",
            "extra": "iterations: 2116\ncpu: 415669.89603024774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 414863.0463576153,
            "unit": "ns/iter",
            "extra": "iterations: 2114\ncpu: 414846.07379375596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 252941.54313555456,
            "unit": "ns/iter",
            "extra": "iterations: 3489\ncpu: 252939.58154198757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 412753.8899430766,
            "unit": "ns/iter",
            "extra": "iterations: 2108\ncpu: 412738.9943074008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 323.51587010922486,
            "unit": "ns/iter",
            "extra": "iterations: 2159815\ncpu: 323.4992348881761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1868.5871589691546,
            "unit": "ns/iter",
            "extra": "iterations: 375406\ncpu: 1868.503699994141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1395.5120823715008,
            "unit": "ns/iter",
            "extra": "iterations: 503378\ncpu: 1395.4539133613268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1516.5379927761182,
            "unit": "ns/iter",
            "extra": "iterations: 477854\ncpu: 1516.5215735350002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1186.4361412722112,
            "unit": "ns/iter",
            "extra": "iterations: 591822\ncpu: 1186.4158480083481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7438.114387241681,
            "unit": "ns/iter",
            "extra": "iterations: 94556\ncpu: 7437.596768052831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 21251.26079961086,
            "unit": "ns/iter",
            "extra": "iterations: 32941\ncpu: 21250.66634285505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5077.463487018836,
            "unit": "ns/iter",
            "extra": "iterations: 137814\ncpu: 5077.177935478212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5031.2747461700055,
            "unit": "ns/iter",
            "extra": "iterations: 139365\ncpu: 5031.278297994417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5107.850966743606,
            "unit": "ns/iter",
            "extra": "iterations: 137627\ncpu: 5107.726681537751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10617.88500546578,
            "unit": "ns/iter",
            "extra": "iterations: 65864\ncpu: 10617.288655411297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9512.61325467756,
            "unit": "ns/iter",
            "extra": "iterations: 73061\ncpu: 9512.258249955428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3146.2798457130475,
            "unit": "ns/iter",
            "extra": "iterations: 221665\ncpu: 3146.0925270114512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15728.987288611204,
            "unit": "ns/iter",
            "extra": "iterations: 44527\ncpu: 15728.3760415028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12550.539785450323,
            "unit": "ns/iter",
            "extra": "iterations: 55372\ncpu: 12549.568373907243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12521.776558085343,
            "unit": "ns/iter",
            "extra": "iterations: 55934\ncpu: 12521.806057138587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13064.234702633714,
            "unit": "ns/iter",
            "extra": "iterations: 53604\ncpu: 13064.248936646416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28748.612062240838,
            "unit": "ns/iter",
            "extra": "iterations: 24357\ncpu: 28748.08473950007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 108609.65948877337,
            "unit": "ns/iter",
            "extra": "iterations: 6455\ncpu: 108603.87296669201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 93732.9934448184,
            "unit": "ns/iter",
            "extra": "iterations: 7475\ncpu: 93728.3879598649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 93821.23705686005,
            "unit": "ns/iter",
            "extra": "iterations: 7475\ncpu: 93816.2541806009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 93561.18104838293,
            "unit": "ns/iter",
            "extra": "iterations: 7440\ncpu: 93557.13709677398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 59371.334407596856,
            "unit": "ns/iter",
            "extra": "iterations: 11791\ncpu: 59370.6471037232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 92801.51823849353,
            "unit": "ns/iter",
            "extra": "iterations: 7539\ncpu: 92795.2646239558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3066.935924208904,
            "unit": "ns/iter",
            "extra": "iterations: 228417\ncpu: 3066.780493570926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15480.998924400148,
            "unit": "ns/iter",
            "extra": "iterations: 45556\ncpu: 15480.39994731774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12382.674198791845,
            "unit": "ns/iter",
            "extra": "iterations: 56602\ncpu: 12381.956467969416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12475.208915299681,
            "unit": "ns/iter",
            "extra": "iterations: 55702\ncpu: 12474.697497396863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13290.703988948975,
            "unit": "ns/iter",
            "extra": "iterations: 52846\ncpu: 13290.144949475853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 29031.563600308167,
            "unit": "ns/iter",
            "extra": "iterations: 24709\ncpu: 29022.02031648378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 106822.37179486967,
            "unit": "ns/iter",
            "extra": "iterations: 6552\ncpu: 106822.49694749649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 89913.35502882856,
            "unit": "ns/iter",
            "extra": "iterations: 7805\ncpu: 89910.22421524701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 90522.64333852075,
            "unit": "ns/iter",
            "extra": "iterations: 7716\ncpu: 90519.38828408613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 90640.23944027565,
            "unit": "ns/iter",
            "extra": "iterations: 7718\ncpu: 90633.03964757672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 60000.1725644739,
            "unit": "ns/iter",
            "extra": "iterations: 11671\ncpu: 59997.81509724903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 91921.77287066507,
            "unit": "ns/iter",
            "extra": "iterations: 7608\ncpu: 91916.98212408026 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}