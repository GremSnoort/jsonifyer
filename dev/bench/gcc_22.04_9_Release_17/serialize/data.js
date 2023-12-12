window.BENCHMARK_DATA = {
  "lastUpdate": 1702397909321,
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
      }
    ]
  }
}