window.BENCHMARK_DATA = {
  "lastUpdate": 1702394272084,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-16 20.04 Debug c++-17": [
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
        "date": 1702394268798,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8284.834856599866,
            "unit": "ns/iter",
            "extra": "iterations: 84030\ncpu: 8284.134237772225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 97187.96773094077,
            "unit": "ns/iter",
            "extra": "iterations: 8801\ncpu: 97181.93387115102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 188546.31486255565,
            "unit": "ns/iter",
            "extra": "iterations: 4656\ncpu: 188534.19243986256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 282698.4001299029,
            "unit": "ns/iter",
            "extra": "iterations: 3079\ncpu: 282673.4329327704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 366802.66951323365,
            "unit": "ns/iter",
            "extra": "iterations: 2342\ncpu: 366773.5269000855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 456146.1448058586,
            "unit": "ns/iter",
            "extra": "iterations: 1906\ncpu: 456120.9338929695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 546358.9887217968,
            "unit": "ns/iter",
            "extra": "iterations: 1596\ncpu: 546311.8421052634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 511153.1749998903,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511126.59999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 581436.5010000983,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 581379.6 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6212.7663375651355,
            "unit": "ns/iter",
            "extra": "iterations: 112731\ncpu: 6212.216692835157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5054.829732220779,
            "unit": "ns/iter",
            "extra": "iterations: 117186\ncpu: 5054.684006621955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5032.391409037659,
            "unit": "ns/iter",
            "extra": "iterations: 139542\ncpu: 5032.092129968039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5117.679869166696,
            "unit": "ns/iter",
            "extra": "iterations: 136969\ncpu: 5117.278362257144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9036.038239239875,
            "unit": "ns/iter",
            "extra": "iterations: 77512\ncpu: 9035.422902260307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 40335.816222069014,
            "unit": "ns/iter",
            "extra": "iterations: 20318\ncpu: 40332.803425534075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 168163.07998407265,
            "unit": "ns/iter",
            "extra": "iterations: 5026\ncpu: 168151.09430958994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 138361.22242138287,
            "unit": "ns/iter",
            "extra": "iterations: 6137\ncpu: 138348.24832980294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 133104.55159919112,
            "unit": "ns/iter",
            "extra": "iterations: 6347\ncpu: 133098.53474082254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 138408.17518723165,
            "unit": "ns/iter",
            "extra": "iterations: 6142\ncpu: 138406.77303809827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 359712.4091476414,
            "unit": "ns/iter",
            "extra": "iterations: 2405\ncpu: 359695.0103950108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3019532.7476038933,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 3019344.089456869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2515754.2242744593,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2515606.5963060646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2433435.01822905,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2433384.635416665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2456744.372703567,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 2456631.2335958066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1432741.737654434,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1432672.5308641987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2379213.9669212797,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2379112.4681933904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10066404.311321292,
            "unit": "ns/iter",
            "extra": "iterations: 106\ncpu: 10066019.811320748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5626876.221557434,
            "unit": "ns/iter",
            "extra": "iterations: 167\ncpu: 5626661.0778443115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12161908.758621028,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 12161310.344827577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 37585.016956090294,
            "unit": "ns/iter",
            "extra": "iterations: 21998\ncpu: 37582.980270933636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 164863.551670853,
            "unit": "ns/iter",
            "extra": "iterations: 5177\ncpu: 164856.77033030716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 136235.9708193047,
            "unit": "ns/iter",
            "extra": "iterations: 6237\ncpu: 136231.72999839662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 137853.19750485723,
            "unit": "ns/iter",
            "extra": "iterations: 6172\ncpu: 137846.45171743323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 142868.40093239612,
            "unit": "ns/iter",
            "extra": "iterations: 6006\ncpu: 142750.78255078252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 373707.69257489353,
            "unit": "ns/iter",
            "extra": "iterations: 2303\ncpu: 373685.6708640891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2999607.790996969,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2999333.118971058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2488555.6498674154,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2488394.694960223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2450076.1723238467,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2449893.7336814627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2492412.106951762,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2492095.7219251213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1414477.2636362205,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1414331.5151515212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2384890.295165363,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2384721.1195928575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10181379.373831019,
            "unit": "ns/iter",
            "extra": "iterations: 107\ncpu: 10180221.495327063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5885148.798742016,
            "unit": "ns/iter",
            "extra": "iterations: 159\ncpu: 5884459.1194968475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 38779.10408469585,
            "unit": "ns/iter",
            "extra": "iterations: 21348\ncpu: 38776.250702641904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 182061.66183677566,
            "unit": "ns/iter",
            "extra": "iterations: 4693\ncpu: 182043.7673130208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 136160.98845784384,
            "unit": "ns/iter",
            "extra": "iterations: 6238\ncpu: 136138.10516191085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 132856.3035939458,
            "unit": "ns/iter",
            "extra": "iterations: 6344\ncpu: 132845.4760403531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 138803.19355364336,
            "unit": "ns/iter",
            "extra": "iterations: 6143\ncpu: 138799.3814097343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 358774.0857975711,
            "unit": "ns/iter",
            "extra": "iterations: 2401\ncpu: 358751.6034985421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2992938.8910254138,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2992812.82051282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2474135.2301589358,
            "unit": "ns/iter",
            "extra": "iterations: 378\ncpu: 2474035.4497354357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2444801.5182292336,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2444748.697916684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2468529.4300791495,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2468424.2744063437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1430574.4907693013,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1430514.3076923124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2379966.160305364,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2379939.18575064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2655.9387275860213,
            "unit": "ns/iter",
            "extra": "iterations: 263169\ncpu: 2655.788485725906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 19617.56120737913,
            "unit": "ns/iter",
            "extra": "iterations: 35780\ncpu: 19616.66294019011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 15009.785691279925,
            "unit": "ns/iter",
            "extra": "iterations: 46573\ncpu: 15008.930066776835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 15009.076959294916,
            "unit": "ns/iter",
            "extra": "iterations: 46726\ncpu: 15008.76171724529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11616.47994561616,
            "unit": "ns/iter",
            "extra": "iterations: 60311\ncpu: 11616.1728374592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 83046.68484487405,
            "unit": "ns/iter",
            "extra": "iterations: 8380\ncpu: 83041.8615751791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 188851.86661253835,
            "unit": "ns/iter",
            "extra": "iterations: 3696\ncpu: 188845.69805194766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 46645.00615673081,
            "unit": "ns/iter",
            "extra": "iterations: 14943\ncpu: 46643.27109683492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 46765.17091514274,
            "unit": "ns/iter",
            "extra": "iterations: 15025\ncpu: 46764.59234609034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 47092.551724131896,
            "unit": "ns/iter",
            "extra": "iterations: 14877\ncpu: 47090.213080593356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 97909.95175993626,
            "unit": "ns/iter",
            "extra": "iterations: 7131\ncpu: 97906.00196325888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 83697.3061566011,
            "unit": "ns/iter",
            "extra": "iterations: 8365\ncpu: 83694.10639569706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 24849.71180962596,
            "unit": "ns/iter",
            "extra": "iterations: 28155\ncpu: 24849.02859172455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 117821.79341772167,
            "unit": "ns/iter",
            "extra": "iterations: 5925\ncpu: 117817.805907173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 95235.56382687936,
            "unit": "ns/iter",
            "extra": "iterations: 7348\ncpu: 95231.15133369646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 97548.4742323853,
            "unit": "ns/iter",
            "extra": "iterations: 7393\ncpu: 97543.73055593137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 97040.36008287332,
            "unit": "ns/iter",
            "extra": "iterations: 7240\ncpu: 97037.65193370223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 181063.0165033588,
            "unit": "ns/iter",
            "extra": "iterations: 3878\ncpu: 181054.84785972096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 802319.201603706,
            "unit": "ns/iter",
            "extra": "iterations: 873\ncpu: 802277.0904925492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 683396.1779743476,
            "unit": "ns/iter",
            "extra": "iterations: 1017\ncpu: 683360.4719764026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 690101.3287536151,
            "unit": "ns/iter",
            "extra": "iterations: 1019\ncpu: 690055.15210991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 694443.3336624218,
            "unit": "ns/iter",
            "extra": "iterations: 1013\ncpu: 694435.7354392931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 437077.6414618357,
            "unit": "ns/iter",
            "extra": "iterations: 1587\ncpu: 437054.8834278581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 676207.3652174183,
            "unit": "ns/iter",
            "extra": "iterations: 1035\ncpu: 676190.8212560458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 23940.89715394388,
            "unit": "ns/iter",
            "extra": "iterations: 29374\ncpu: 23939.807312589208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 119588.98534175302,
            "unit": "ns/iter",
            "extra": "iterations: 5867\ncpu: 119583.27935912588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 94534.72230528716,
            "unit": "ns/iter",
            "extra": "iterations: 7357\ncpu: 94533.7093924143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 95694.75624744174,
            "unit": "ns/iter",
            "extra": "iterations: 7323\ncpu: 95686.45363921912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 98120.18262087784,
            "unit": "ns/iter",
            "extra": "iterations: 7135\ncpu: 98113.53889278341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 180069.68756423748,
            "unit": "ns/iter",
            "extra": "iterations: 3892\ncpu: 180060.0205549875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 798921.4846066999,
            "unit": "ns/iter",
            "extra": "iterations: 877\ncpu: 798912.0866590625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 695384.7485265492,
            "unit": "ns/iter",
            "extra": "iterations: 1018\ncpu: 695377.0137524635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 692847.7908820166,
            "unit": "ns/iter",
            "extra": "iterations: 1009\ncpu: 692822.9930624365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 694497.7078763292,
            "unit": "ns/iter",
            "extra": "iterations: 1003\ncpu: 694464.2073778688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 432657.57524876785,
            "unit": "ns/iter",
            "extra": "iterations: 1608\ncpu: 432629.4154228893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 665196.6201330126,
            "unit": "ns/iter",
            "extra": "iterations: 1053\ncpu: 665189.6486229738 ns\nthreads: 1"
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
        "date": 1702394268798,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8284.834856599866,
            "unit": "ns/iter",
            "extra": "iterations: 84030\ncpu: 8284.134237772225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 97187.96773094077,
            "unit": "ns/iter",
            "extra": "iterations: 8801\ncpu: 97181.93387115102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 188546.31486255565,
            "unit": "ns/iter",
            "extra": "iterations: 4656\ncpu: 188534.19243986256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 282698.4001299029,
            "unit": "ns/iter",
            "extra": "iterations: 3079\ncpu: 282673.4329327704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 366802.66951323365,
            "unit": "ns/iter",
            "extra": "iterations: 2342\ncpu: 366773.5269000855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 456146.1448058586,
            "unit": "ns/iter",
            "extra": "iterations: 1906\ncpu: 456120.9338929695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 546358.9887217968,
            "unit": "ns/iter",
            "extra": "iterations: 1596\ncpu: 546311.8421052634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 511153.1749998903,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511126.59999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 581436.5010000983,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 581379.6 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6212.7663375651355,
            "unit": "ns/iter",
            "extra": "iterations: 112731\ncpu: 6212.216692835157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5054.829732220779,
            "unit": "ns/iter",
            "extra": "iterations: 117186\ncpu: 5054.684006621955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5032.391409037659,
            "unit": "ns/iter",
            "extra": "iterations: 139542\ncpu: 5032.092129968039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5117.679869166696,
            "unit": "ns/iter",
            "extra": "iterations: 136969\ncpu: 5117.278362257144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9036.038239239875,
            "unit": "ns/iter",
            "extra": "iterations: 77512\ncpu: 9035.422902260307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 40335.816222069014,
            "unit": "ns/iter",
            "extra": "iterations: 20318\ncpu: 40332.803425534075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 168163.07998407265,
            "unit": "ns/iter",
            "extra": "iterations: 5026\ncpu: 168151.09430958994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 138361.22242138287,
            "unit": "ns/iter",
            "extra": "iterations: 6137\ncpu: 138348.24832980294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 133104.55159919112,
            "unit": "ns/iter",
            "extra": "iterations: 6347\ncpu: 133098.53474082254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 138408.17518723165,
            "unit": "ns/iter",
            "extra": "iterations: 6142\ncpu: 138406.77303809827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 359712.4091476414,
            "unit": "ns/iter",
            "extra": "iterations: 2405\ncpu: 359695.0103950108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3019532.7476038933,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 3019344.089456869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2515754.2242744593,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2515606.5963060646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2433435.01822905,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2433384.635416665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2456744.372703567,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 2456631.2335958066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1432741.737654434,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1432672.5308641987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2379213.9669212797,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2379112.4681933904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10066404.311321292,
            "unit": "ns/iter",
            "extra": "iterations: 106\ncpu: 10066019.811320748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5626876.221557434,
            "unit": "ns/iter",
            "extra": "iterations: 167\ncpu: 5626661.0778443115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12161908.758621028,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 12161310.344827577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 37585.016956090294,
            "unit": "ns/iter",
            "extra": "iterations: 21998\ncpu: 37582.980270933636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 164863.551670853,
            "unit": "ns/iter",
            "extra": "iterations: 5177\ncpu: 164856.77033030716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 136235.9708193047,
            "unit": "ns/iter",
            "extra": "iterations: 6237\ncpu: 136231.72999839662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 137853.19750485723,
            "unit": "ns/iter",
            "extra": "iterations: 6172\ncpu: 137846.45171743323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 142868.40093239612,
            "unit": "ns/iter",
            "extra": "iterations: 6006\ncpu: 142750.78255078252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 373707.69257489353,
            "unit": "ns/iter",
            "extra": "iterations: 2303\ncpu: 373685.6708640891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2999607.790996969,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2999333.118971058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2488555.6498674154,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2488394.694960223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2450076.1723238467,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2449893.7336814627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2492412.106951762,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2492095.7219251213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1414477.2636362205,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1414331.5151515212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2384890.295165363,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2384721.1195928575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10181379.373831019,
            "unit": "ns/iter",
            "extra": "iterations: 107\ncpu: 10180221.495327063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5885148.798742016,
            "unit": "ns/iter",
            "extra": "iterations: 159\ncpu: 5884459.1194968475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 38779.10408469585,
            "unit": "ns/iter",
            "extra": "iterations: 21348\ncpu: 38776.250702641904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 182061.66183677566,
            "unit": "ns/iter",
            "extra": "iterations: 4693\ncpu: 182043.7673130208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 136160.98845784384,
            "unit": "ns/iter",
            "extra": "iterations: 6238\ncpu: 136138.10516191085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 132856.3035939458,
            "unit": "ns/iter",
            "extra": "iterations: 6344\ncpu: 132845.4760403531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 138803.19355364336,
            "unit": "ns/iter",
            "extra": "iterations: 6143\ncpu: 138799.3814097343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 358774.0857975711,
            "unit": "ns/iter",
            "extra": "iterations: 2401\ncpu: 358751.6034985421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2992938.8910254138,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2992812.82051282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2474135.2301589358,
            "unit": "ns/iter",
            "extra": "iterations: 378\ncpu: 2474035.4497354357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2444801.5182292336,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2444748.697916684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2468529.4300791495,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2468424.2744063437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1430574.4907693013,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1430514.3076923124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2379966.160305364,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2379939.18575064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2655.9387275860213,
            "unit": "ns/iter",
            "extra": "iterations: 263169\ncpu: 2655.788485725906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 19617.56120737913,
            "unit": "ns/iter",
            "extra": "iterations: 35780\ncpu: 19616.66294019011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 15009.785691279925,
            "unit": "ns/iter",
            "extra": "iterations: 46573\ncpu: 15008.930066776835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 15009.076959294916,
            "unit": "ns/iter",
            "extra": "iterations: 46726\ncpu: 15008.76171724529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11616.47994561616,
            "unit": "ns/iter",
            "extra": "iterations: 60311\ncpu: 11616.1728374592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 83046.68484487405,
            "unit": "ns/iter",
            "extra": "iterations: 8380\ncpu: 83041.8615751791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 188851.86661253835,
            "unit": "ns/iter",
            "extra": "iterations: 3696\ncpu: 188845.69805194766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 46645.00615673081,
            "unit": "ns/iter",
            "extra": "iterations: 14943\ncpu: 46643.27109683492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 46765.17091514274,
            "unit": "ns/iter",
            "extra": "iterations: 15025\ncpu: 46764.59234609034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 47092.551724131896,
            "unit": "ns/iter",
            "extra": "iterations: 14877\ncpu: 47090.213080593356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 97909.95175993626,
            "unit": "ns/iter",
            "extra": "iterations: 7131\ncpu: 97906.00196325888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 83697.3061566011,
            "unit": "ns/iter",
            "extra": "iterations: 8365\ncpu: 83694.10639569706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 24849.71180962596,
            "unit": "ns/iter",
            "extra": "iterations: 28155\ncpu: 24849.02859172455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 117821.79341772167,
            "unit": "ns/iter",
            "extra": "iterations: 5925\ncpu: 117817.805907173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 95235.56382687936,
            "unit": "ns/iter",
            "extra": "iterations: 7348\ncpu: 95231.15133369646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 97548.4742323853,
            "unit": "ns/iter",
            "extra": "iterations: 7393\ncpu: 97543.73055593137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 97040.36008287332,
            "unit": "ns/iter",
            "extra": "iterations: 7240\ncpu: 97037.65193370223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 181063.0165033588,
            "unit": "ns/iter",
            "extra": "iterations: 3878\ncpu: 181054.84785972096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 802319.201603706,
            "unit": "ns/iter",
            "extra": "iterations: 873\ncpu: 802277.0904925492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 683396.1779743476,
            "unit": "ns/iter",
            "extra": "iterations: 1017\ncpu: 683360.4719764026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 690101.3287536151,
            "unit": "ns/iter",
            "extra": "iterations: 1019\ncpu: 690055.15210991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 694443.3336624218,
            "unit": "ns/iter",
            "extra": "iterations: 1013\ncpu: 694435.7354392931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 437077.6414618357,
            "unit": "ns/iter",
            "extra": "iterations: 1587\ncpu: 437054.8834278581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 676207.3652174183,
            "unit": "ns/iter",
            "extra": "iterations: 1035\ncpu: 676190.8212560458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 23940.89715394388,
            "unit": "ns/iter",
            "extra": "iterations: 29374\ncpu: 23939.807312589208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 119588.98534175302,
            "unit": "ns/iter",
            "extra": "iterations: 5867\ncpu: 119583.27935912588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 94534.72230528716,
            "unit": "ns/iter",
            "extra": "iterations: 7357\ncpu: 94533.7093924143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 95694.75624744174,
            "unit": "ns/iter",
            "extra": "iterations: 7323\ncpu: 95686.45363921912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 98120.18262087784,
            "unit": "ns/iter",
            "extra": "iterations: 7135\ncpu: 98113.53889278341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 180069.68756423748,
            "unit": "ns/iter",
            "extra": "iterations: 3892\ncpu: 180060.0205549875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 798921.4846066999,
            "unit": "ns/iter",
            "extra": "iterations: 877\ncpu: 798912.0866590625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 695384.7485265492,
            "unit": "ns/iter",
            "extra": "iterations: 1018\ncpu: 695377.0137524635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 692847.7908820166,
            "unit": "ns/iter",
            "extra": "iterations: 1009\ncpu: 692822.9930624365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 694497.7078763292,
            "unit": "ns/iter",
            "extra": "iterations: 1003\ncpu: 694464.2073778688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 432657.57524876785,
            "unit": "ns/iter",
            "extra": "iterations: 1608\ncpu: 432629.4154228893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 665196.6201330126,
            "unit": "ns/iter",
            "extra": "iterations: 1053\ncpu: 665189.6486229738 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}