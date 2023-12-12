window.BENCHMARK_DATA = {
  "lastUpdate": 1702398776105,
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
      }
    ]
  }
}