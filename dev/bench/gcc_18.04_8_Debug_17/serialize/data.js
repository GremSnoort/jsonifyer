window.BENCHMARK_DATA = {
  "lastUpdate": 1702388128536,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize gcc-8 18.04 Debug c++-17": [
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
          "id": "d50bb7d9db5207dc297814766d8c83b14fcc339b",
          "message": "More tests; More BMs; Separate BMs",
          "timestamp": "2023-12-12T14:29:05+03:00",
          "tree_id": "f44cff78a7d652bd003cb40812243c64e409e254",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d50bb7d9db5207dc297814766d8c83b14fcc339b"
        },
        "date": 1702381153761,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8592.953170276369,
            "unit": "ns/iter",
            "extra": "iterations: 81444\ncpu: 8592.701733706597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 99188.16809943848,
            "unit": "ns/iter",
            "extra": "iterations: 8608\ncpu: 99185.67611524163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 190057.12165396908,
            "unit": "ns/iter",
            "extra": "iterations: 4595\ncpu: 190053.90642002178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 284720.3466710442,
            "unit": "ns/iter",
            "extra": "iterations: 3049\ncpu: 284715.15250901924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 369579.72239063267,
            "unit": "ns/iter",
            "extra": "iterations: 2309\ncpu: 369554.7423126895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 458551.8846761332,
            "unit": "ns/iter",
            "extra": "iterations: 1899\ncpu: 458520.74776197993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 553236.7215587677,
            "unit": "ns/iter",
            "extra": "iterations: 1591\ncpu: 553210.2451288499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 512453.1030000412,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512412.2 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 584007.3649999908,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 584002.4000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6539.8597034408895,
            "unit": "ns/iter",
            "extra": "iterations: 107230\ncpu: 6539.515993658483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5407.680561460134,
            "unit": "ns/iter",
            "extra": "iterations: 129377\ncpu: 5407.367615573089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5457.402842227751,
            "unit": "ns/iter",
            "extra": "iterations: 127576\ncpu: 5457.15495077445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5383.057747730328,
            "unit": "ns/iter",
            "extra": "iterations: 129425\ncpu: 5383.075912690751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9492.948418715216,
            "unit": "ns/iter",
            "extra": "iterations: 73864\ncpu: 9492.566067367045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 51398.810770477554,
            "unit": "ns/iter",
            "extra": "iterations: 16081\ncpu: 51398.917977737736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 219317.26697411685,
            "unit": "ns/iter",
            "extra": "iterations: 3903\ncpu: 219309.86420702017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 178310.60555439224,
            "unit": "ns/iter",
            "extra": "iterations: 4789\ncpu: 178304.59386093103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 178233.15551386127,
            "unit": "ns/iter",
            "extra": "iterations: 4797\ncpu: 178227.2461955394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 177839.4962390255,
            "unit": "ns/iter",
            "extra": "iterations: 4786\ncpu: 177834.16213957427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 404144.2956238161,
            "unit": "ns/iter",
            "extra": "iterations: 2148\ncpu: 404127.2811918059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2945496.1226413846,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2945397.7987421346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2430254.4587628357,
            "unit": "ns/iter",
            "extra": "iterations: 388\ncpu: 2430163.4020618615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2462324.784210517,
            "unit": "ns/iter",
            "extra": "iterations: 380\ncpu: 2462191.315789472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2433518.2597402404,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2433428.5714285686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1471271.1012657853,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1471244.620253162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2364572.3832486845,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2364464.720812182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10178963.701922985,
            "unit": "ns/iter",
            "extra": "iterations: 104\ncpu: 10178202.884615403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5884355.165605099,
            "unit": "ns/iter",
            "extra": "iterations: 157\ncpu: 5883991.719745228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12226831.18390802,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 12226379.31034486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 52708.316277294805,
            "unit": "ns/iter",
            "extra": "iterations: 15752\ncpu: 52705.19299136629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 218779.8291751515,
            "unit": "ns/iter",
            "extra": "iterations: 3928\ncpu: 218771.5885947054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 177935.95326131742,
            "unit": "ns/iter",
            "extra": "iterations: 4814\ncpu: 177925.28043207413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 179440.60743369834,
            "unit": "ns/iter",
            "extra": "iterations: 4789\ncpu: 179432.74169972888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 178257.7887823263,
            "unit": "ns/iter",
            "extra": "iterations: 4796\ncpu: 178245.62135112617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 412760.75572162407,
            "unit": "ns/iter",
            "extra": "iterations: 2141\ncpu: 412736.2447454477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2967669.6656050733,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2967563.0573248565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2437689.18961028,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2437538.1818181826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2486245.846153847,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2486196.551724131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2443082.8328981823,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2443051.436031332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1477603.670382193,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1477581.847133762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2373544.381679449,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2373477.6081424886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10432185.644230703,
            "unit": "ns/iter",
            "extra": "iterations: 104\ncpu: 10431879.807692317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5938852.101910629,
            "unit": "ns/iter",
            "extra": "iterations: 157\ncpu: 5938612.10191082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 51941.18158551794,
            "unit": "ns/iter",
            "extra": "iterations: 16020\ncpu: 51939.08863920086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 219235.81772280717,
            "unit": "ns/iter",
            "extra": "iterations: 3961\ncpu: 219231.6081797514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 176883.33650267814,
            "unit": "ns/iter",
            "extra": "iterations: 4838\ncpu: 176876.99462587942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 176813.15799334054,
            "unit": "ns/iter",
            "extra": "iterations: 4804\ncpu: 176800.97835137282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 176192.14984520784,
            "unit": "ns/iter",
            "extra": "iterations: 4845\ncpu: 176181.32094943174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 401049.3944529831,
            "unit": "ns/iter",
            "extra": "iterations: 1947\ncpu: 401030.0462249613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2965727.1613924103,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2965601.898734173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2425691.145077735,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2425462.6943005174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2482851.984084916,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2482736.870026535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2444495.4934725733,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2444403.1331592775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1481810.4365079287,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1481734.4444444478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2379539.535714291,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2379475.255102039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2953.660882561733,
            "unit": "ns/iter",
            "extra": "iterations: 236856\ncpu: 2953.5988110919625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 20287.37326640803,
            "unit": "ns/iter",
            "extra": "iterations: 34466\ncpu: 20286.76666860089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 16776.00927657088,
            "unit": "ns/iter",
            "extra": "iterations: 41718\ncpu: 16775.588474998774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 16953.278710396997,
            "unit": "ns/iter",
            "extra": "iterations: 41222\ncpu: 16952.981417689698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12657.102453180434,
            "unit": "ns/iter",
            "extra": "iterations: 55479\ncpu: 12656.951278862203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 91859.95742171949,
            "unit": "ns/iter",
            "extra": "iterations: 7633\ncpu: 91858.7187213418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 189916.47856755805,
            "unit": "ns/iter",
            "extra": "iterations: 3686\ncpu: 189898.8062940821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 46971.11745754513,
            "unit": "ns/iter",
            "extra": "iterations: 14899\ncpu: 46970.05839318066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 47713.1767993453,
            "unit": "ns/iter",
            "extra": "iterations: 14672\ncpu: 47711.98882224608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 46897.867279806786,
            "unit": "ns/iter",
            "extra": "iterations: 14896\ncpu: 46894.8375402789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 97048.5626810071,
            "unit": "ns/iter",
            "extra": "iterations: 7251\ncpu: 97048.93118190659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 89053.28180662126,
            "unit": "ns/iter",
            "extra": "iterations: 7860\ncpu: 89046.7811704849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 26771.559798381237,
            "unit": "ns/iter",
            "extra": "iterations: 26188\ncpu: 26770.616312814866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 129535.9049464703,
            "unit": "ns/iter",
            "extra": "iterations: 5418\ncpu: 129527.72240679202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 103875.88857608197,
            "unit": "ns/iter",
            "extra": "iterations: 6749\ncpu: 103869.21025337082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 103826.93837244243,
            "unit": "ns/iter",
            "extra": "iterations: 6734\ncpu: 103820.5524205541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 104807.26997904293,
            "unit": "ns/iter",
            "extra": "iterations: 6682\ncpu: 104799.79048189175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 191123.69959184062,
            "unit": "ns/iter",
            "extra": "iterations: 3675\ncpu: 191122.28571428478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 810684.9120370054,
            "unit": "ns/iter",
            "extra": "iterations: 864\ncpu: 810679.5138888875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 681902.6923076791,
            "unit": "ns/iter",
            "extra": "iterations: 1027\ncpu: 681890.944498547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 696898.9303482994,
            "unit": "ns/iter",
            "extra": "iterations: 1005\ncpu: 696873.7313432719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 687739.3677932149,
            "unit": "ns/iter",
            "extra": "iterations: 1006\ncpu: 687727.6341948374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 450156.1674178971,
            "unit": "ns/iter",
            "extra": "iterations: 1553\ncpu: 450145.39600772876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 672274.0904716437,
            "unit": "ns/iter",
            "extra": "iterations: 1039\ncpu: 672267.2762271474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 26974.620243383517,
            "unit": "ns/iter",
            "extra": "iterations: 25885\ncpu: 26974.100830596995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 129975.8050139308,
            "unit": "ns/iter",
            "extra": "iterations: 5385\ncpu: 129975.06035283294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 104327.56301146217,
            "unit": "ns/iter",
            "extra": "iterations: 6721\ncpu: 104325.45752120113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 104763.40612397542,
            "unit": "ns/iter",
            "extra": "iterations: 6695\ncpu: 104762.61389096385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 104526.87328153687,
            "unit": "ns/iter",
            "extra": "iterations: 6692\ncpu: 104522.90794979002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 191775.7356164495,
            "unit": "ns/iter",
            "extra": "iterations: 3650\ncpu: 191771.34246575244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 807807.8152424041,
            "unit": "ns/iter",
            "extra": "iterations: 866\ncpu: 807799.8845265509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 681661.7395529811,
            "unit": "ns/iter",
            "extra": "iterations: 1029\ncpu: 681655.3935860019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 694910.7020854286,
            "unit": "ns/iter",
            "extra": "iterations: 1007\ncpu: 694905.2631579051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 686113.6317336094,
            "unit": "ns/iter",
            "extra": "iterations: 1021\ncpu: 686096.4740450479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 451259.71603348106,
            "unit": "ns/iter",
            "extra": "iterations: 1553\ncpu: 451252.80103026814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 672709.2084533398,
            "unit": "ns/iter",
            "extra": "iterations: 1041\ncpu: 672695.6772334338 ns\nthreads: 1"
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
          "id": "d50bb7d9db5207dc297814766d8c83b14fcc339b",
          "message": "More tests; More BMs; Separate BMs",
          "timestamp": "2023-12-12T14:29:05+03:00",
          "tree_id": "f44cff78a7d652bd003cb40812243c64e409e254",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d50bb7d9db5207dc297814766d8c83b14fcc339b"
        },
        "date": 1702381153761,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8592.953170276369,
            "unit": "ns/iter",
            "extra": "iterations: 81444\ncpu: 8592.701733706597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 99188.16809943848,
            "unit": "ns/iter",
            "extra": "iterations: 8608\ncpu: 99185.67611524163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 190057.12165396908,
            "unit": "ns/iter",
            "extra": "iterations: 4595\ncpu: 190053.90642002178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 284720.3466710442,
            "unit": "ns/iter",
            "extra": "iterations: 3049\ncpu: 284715.15250901924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 369579.72239063267,
            "unit": "ns/iter",
            "extra": "iterations: 2309\ncpu: 369554.7423126895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 458551.8846761332,
            "unit": "ns/iter",
            "extra": "iterations: 1899\ncpu: 458520.74776197993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 553236.7215587677,
            "unit": "ns/iter",
            "extra": "iterations: 1591\ncpu: 553210.2451288499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 512453.1030000412,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512412.2 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 584007.3649999908,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 584002.4000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6539.8597034408895,
            "unit": "ns/iter",
            "extra": "iterations: 107230\ncpu: 6539.515993658483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5407.680561460134,
            "unit": "ns/iter",
            "extra": "iterations: 129377\ncpu: 5407.367615573089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5457.402842227751,
            "unit": "ns/iter",
            "extra": "iterations: 127576\ncpu: 5457.15495077445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5383.057747730328,
            "unit": "ns/iter",
            "extra": "iterations: 129425\ncpu: 5383.075912690751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9492.948418715216,
            "unit": "ns/iter",
            "extra": "iterations: 73864\ncpu: 9492.566067367045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 51398.810770477554,
            "unit": "ns/iter",
            "extra": "iterations: 16081\ncpu: 51398.917977737736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 219317.26697411685,
            "unit": "ns/iter",
            "extra": "iterations: 3903\ncpu: 219309.86420702017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 178310.60555439224,
            "unit": "ns/iter",
            "extra": "iterations: 4789\ncpu: 178304.59386093103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 178233.15551386127,
            "unit": "ns/iter",
            "extra": "iterations: 4797\ncpu: 178227.2461955394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 177839.4962390255,
            "unit": "ns/iter",
            "extra": "iterations: 4786\ncpu: 177834.16213957427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 404144.2956238161,
            "unit": "ns/iter",
            "extra": "iterations: 2148\ncpu: 404127.2811918059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2945496.1226413846,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2945397.7987421346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2430254.4587628357,
            "unit": "ns/iter",
            "extra": "iterations: 388\ncpu: 2430163.4020618615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2462324.784210517,
            "unit": "ns/iter",
            "extra": "iterations: 380\ncpu: 2462191.315789472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2433518.2597402404,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2433428.5714285686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1471271.1012657853,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1471244.620253162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2364572.3832486845,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2364464.720812182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10178963.701922985,
            "unit": "ns/iter",
            "extra": "iterations: 104\ncpu: 10178202.884615403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5884355.165605099,
            "unit": "ns/iter",
            "extra": "iterations: 157\ncpu: 5883991.719745228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12226831.18390802,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 12226379.31034486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 52708.316277294805,
            "unit": "ns/iter",
            "extra": "iterations: 15752\ncpu: 52705.19299136629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 218779.8291751515,
            "unit": "ns/iter",
            "extra": "iterations: 3928\ncpu: 218771.5885947054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 177935.95326131742,
            "unit": "ns/iter",
            "extra": "iterations: 4814\ncpu: 177925.28043207413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 179440.60743369834,
            "unit": "ns/iter",
            "extra": "iterations: 4789\ncpu: 179432.74169972888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 178257.7887823263,
            "unit": "ns/iter",
            "extra": "iterations: 4796\ncpu: 178245.62135112617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 412760.75572162407,
            "unit": "ns/iter",
            "extra": "iterations: 2141\ncpu: 412736.2447454477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2967669.6656050733,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2967563.0573248565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2437689.18961028,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2437538.1818181826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2486245.846153847,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2486196.551724131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2443082.8328981823,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2443051.436031332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1477603.670382193,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1477581.847133762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2373544.381679449,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2373477.6081424886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10432185.644230703,
            "unit": "ns/iter",
            "extra": "iterations: 104\ncpu: 10431879.807692317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5938852.101910629,
            "unit": "ns/iter",
            "extra": "iterations: 157\ncpu: 5938612.10191082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 51941.18158551794,
            "unit": "ns/iter",
            "extra": "iterations: 16020\ncpu: 51939.08863920086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 219235.81772280717,
            "unit": "ns/iter",
            "extra": "iterations: 3961\ncpu: 219231.6081797514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 176883.33650267814,
            "unit": "ns/iter",
            "extra": "iterations: 4838\ncpu: 176876.99462587942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 176813.15799334054,
            "unit": "ns/iter",
            "extra": "iterations: 4804\ncpu: 176800.97835137282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 176192.14984520784,
            "unit": "ns/iter",
            "extra": "iterations: 4845\ncpu: 176181.32094943174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 401049.3944529831,
            "unit": "ns/iter",
            "extra": "iterations: 1947\ncpu: 401030.0462249613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2965727.1613924103,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2965601.898734173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2425691.145077735,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2425462.6943005174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2482851.984084916,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2482736.870026535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2444495.4934725733,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2444403.1331592775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1481810.4365079287,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1481734.4444444478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2379539.535714291,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2379475.255102039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2953.660882561733,
            "unit": "ns/iter",
            "extra": "iterations: 236856\ncpu: 2953.5988110919625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 20287.37326640803,
            "unit": "ns/iter",
            "extra": "iterations: 34466\ncpu: 20286.76666860089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 16776.00927657088,
            "unit": "ns/iter",
            "extra": "iterations: 41718\ncpu: 16775.588474998774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 16953.278710396997,
            "unit": "ns/iter",
            "extra": "iterations: 41222\ncpu: 16952.981417689698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12657.102453180434,
            "unit": "ns/iter",
            "extra": "iterations: 55479\ncpu: 12656.951278862203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 91859.95742171949,
            "unit": "ns/iter",
            "extra": "iterations: 7633\ncpu: 91858.7187213418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 189916.47856755805,
            "unit": "ns/iter",
            "extra": "iterations: 3686\ncpu: 189898.8062940821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 46971.11745754513,
            "unit": "ns/iter",
            "extra": "iterations: 14899\ncpu: 46970.05839318066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 47713.1767993453,
            "unit": "ns/iter",
            "extra": "iterations: 14672\ncpu: 47711.98882224608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 46897.867279806786,
            "unit": "ns/iter",
            "extra": "iterations: 14896\ncpu: 46894.8375402789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 97048.5626810071,
            "unit": "ns/iter",
            "extra": "iterations: 7251\ncpu: 97048.93118190659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 89053.28180662126,
            "unit": "ns/iter",
            "extra": "iterations: 7860\ncpu: 89046.7811704849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 26771.559798381237,
            "unit": "ns/iter",
            "extra": "iterations: 26188\ncpu: 26770.616312814866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 129535.9049464703,
            "unit": "ns/iter",
            "extra": "iterations: 5418\ncpu: 129527.72240679202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 103875.88857608197,
            "unit": "ns/iter",
            "extra": "iterations: 6749\ncpu: 103869.21025337082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 103826.93837244243,
            "unit": "ns/iter",
            "extra": "iterations: 6734\ncpu: 103820.5524205541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 104807.26997904293,
            "unit": "ns/iter",
            "extra": "iterations: 6682\ncpu: 104799.79048189175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 191123.69959184062,
            "unit": "ns/iter",
            "extra": "iterations: 3675\ncpu: 191122.28571428478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 810684.9120370054,
            "unit": "ns/iter",
            "extra": "iterations: 864\ncpu: 810679.5138888875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 681902.6923076791,
            "unit": "ns/iter",
            "extra": "iterations: 1027\ncpu: 681890.944498547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 696898.9303482994,
            "unit": "ns/iter",
            "extra": "iterations: 1005\ncpu: 696873.7313432719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 687739.3677932149,
            "unit": "ns/iter",
            "extra": "iterations: 1006\ncpu: 687727.6341948374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 450156.1674178971,
            "unit": "ns/iter",
            "extra": "iterations: 1553\ncpu: 450145.39600772876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 672274.0904716437,
            "unit": "ns/iter",
            "extra": "iterations: 1039\ncpu: 672267.2762271474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 26974.620243383517,
            "unit": "ns/iter",
            "extra": "iterations: 25885\ncpu: 26974.100830596995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 129975.8050139308,
            "unit": "ns/iter",
            "extra": "iterations: 5385\ncpu: 129975.06035283294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 104327.56301146217,
            "unit": "ns/iter",
            "extra": "iterations: 6721\ncpu: 104325.45752120113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 104763.40612397542,
            "unit": "ns/iter",
            "extra": "iterations: 6695\ncpu: 104762.61389096385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 104526.87328153687,
            "unit": "ns/iter",
            "extra": "iterations: 6692\ncpu: 104522.90794979002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 191775.7356164495,
            "unit": "ns/iter",
            "extra": "iterations: 3650\ncpu: 191771.34246575244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 807807.8152424041,
            "unit": "ns/iter",
            "extra": "iterations: 866\ncpu: 807799.8845265509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 681661.7395529811,
            "unit": "ns/iter",
            "extra": "iterations: 1029\ncpu: 681655.3935860019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 694910.7020854286,
            "unit": "ns/iter",
            "extra": "iterations: 1007\ncpu: 694905.2631579051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 686113.6317336094,
            "unit": "ns/iter",
            "extra": "iterations: 1021\ncpu: 686096.4740450479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 451259.71603348106,
            "unit": "ns/iter",
            "extra": "iterations: 1553\ncpu: 451252.80103026814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 672709.2084533398,
            "unit": "ns/iter",
            "extra": "iterations: 1041\ncpu: 672695.6772334338 ns\nthreads: 1"
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
          "id": "7f7a954178065768f16bab445a1789e66eddbd11",
          "message": "Add Clang Builds",
          "timestamp": "2023-12-12T14:44:55+03:00",
          "tree_id": "5a4deefbb08f6ba5a30c260d4700f1c6aeccac34",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/7f7a954178065768f16bab445a1789e66eddbd11"
        },
        "date": 1702382281202,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8504.9598583229,
            "unit": "ns/iter",
            "extra": "iterations: 83006\ncpu: 8504.458713827917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 96962.57721192176,
            "unit": "ns/iter",
            "extra": "iterations: 8522\ncpu: 96958.98850035203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 187278.91286396145,
            "unit": "ns/iter",
            "extra": "iterations: 4602\ncpu: 187272.07735767058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 280706.11727783806,
            "unit": "ns/iter",
            "extra": "iterations: 3027\ncpu: 280699.66963990737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 364148.5790155609,
            "unit": "ns/iter",
            "extra": "iterations: 2316\ncpu: 364134.8445595854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 447425.40618557023,
            "unit": "ns/iter",
            "extra": "iterations: 1940\ncpu: 447417.62886597915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 548898.4833438103,
            "unit": "ns/iter",
            "extra": "iterations: 1591\ncpu: 548880.7668133246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 503774.3919999684,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503769.4000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 579736.3920000293,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 579690.900000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6544.5128241475,
            "unit": "ns/iter",
            "extra": "iterations: 105816\ncpu: 6544.239056475392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5205.7272439824455,
            "unit": "ns/iter",
            "extra": "iterations: 129669\ncpu: 5205.604269331909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5370.005664030908,
            "unit": "ns/iter",
            "extra": "iterations: 130649\ncpu: 5370.02579430382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5338.128133387837,
            "unit": "ns/iter",
            "extra": "iterations: 131886\ncpu: 5337.933518341595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9165.325265698119,
            "unit": "ns/iter",
            "extra": "iterations: 74991\ncpu: 9164.755770692496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 49896.89464253826,
            "unit": "ns/iter",
            "extra": "iterations: 16743\ncpu: 49895.95651914239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 209461.31035335275,
            "unit": "ns/iter",
            "extra": "iterations: 4047\ncpu: 209453.6446750677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 169959.78568456147,
            "unit": "ns/iter",
            "extra": "iterations: 4806\ncpu: 169955.7428214733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 171088.36431381572,
            "unit": "ns/iter",
            "extra": "iterations: 4831\ncpu: 171081.63941212976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 172570.99812029768,
            "unit": "ns/iter",
            "extra": "iterations: 4788\ncpu: 172567.46031746056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 381361.947345344,
            "unit": "ns/iter",
            "extra": "iterations: 2279\ncpu: 381350.7240017556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2944372.671779191,
            "unit": "ns/iter",
            "extra": "iterations: 326\ncpu: 2944300.9202453974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2465396.1217616387,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2465280.569948188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2444109.5093834517,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2444019.0348525452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2416402.393782316,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2416386.7875647703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1502493.9080645128,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1502461.2903225776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2355215.8223351156,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2355227.157360406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10267616.25490178,
            "unit": "ns/iter",
            "extra": "iterations: 102\ncpu: 10267340.19607843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5919881.929936197,
            "unit": "ns/iter",
            "extra": "iterations: 157\ncpu: 5919875.796178338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12220391.546512065,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12220134.883720912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 51983.84375595204,
            "unit": "ns/iter",
            "extra": "iterations: 15751\ncpu: 51982.16621166906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 214755.1025328756,
            "unit": "ns/iter",
            "extra": "iterations: 4106\ncpu: 214753.14174378949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 175663.42698745363,
            "unit": "ns/iter",
            "extra": "iterations: 4780\ncpu: 175658.51464435156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 176069.860055426,
            "unit": "ns/iter",
            "extra": "iterations: 5052\ncpu: 176069.59619952447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 177205.0643821365,
            "unit": "ns/iter",
            "extra": "iterations: 4815\ncpu: 177201.7653167182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 382597.7693333142,
            "unit": "ns/iter",
            "extra": "iterations: 2250\ncpu: 382599.28888888966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2912647.187692283,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2912571.6923076957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2547451.445292656,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2547409.923664121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2460499.1212939085,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2460418.598382745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2478445.000000116,
            "unit": "ns/iter",
            "extra": "iterations: 344\ncpu: 2478296.2209302248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1500256.5705426713,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1500163.8759689922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2365064.16927081,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2364951.8229166833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10120983.018518781,
            "unit": "ns/iter",
            "extra": "iterations: 108\ncpu: 10120624.074074112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5845440.930817455,
            "unit": "ns/iter",
            "extra": "iterations: 159\ncpu: 5845183.018867925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 51743.95493285825,
            "unit": "ns/iter",
            "extra": "iterations: 16309\ncpu: 51741.62732233752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 219490.58764736087,
            "unit": "ns/iter",
            "extra": "iterations: 3902\ncpu: 219485.21271142928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 176384.53126948111,
            "unit": "ns/iter",
            "extra": "iterations: 4813\ncpu: 176372.05485144406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 172559.49259703123,
            "unit": "ns/iter",
            "extra": "iterations: 4998\ncpu: 172554.88195278158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 177109.4793577931,
            "unit": "ns/iter",
            "extra": "iterations: 4796\ncpu: 177100.81317764818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 392709.29401088256,
            "unit": "ns/iter",
            "extra": "iterations: 2204\ncpu: 392694.5553539009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3050238.390163918,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3050069.836065578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2489428.474666662,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2489335.4666666784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2531240.4550408935,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2531050.4087193348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2503109.4235924897,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2503027.8820375362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1524103.496742651,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1524075.895765466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2447250.7591624185,
            "unit": "ns/iter",
            "extra": "iterations: 382\ncpu: 2447140.0523560154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2934.076455980402,
            "unit": "ns/iter",
            "extra": "iterations: 238791\ncpu: 2934.0670293269177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 21825.02302239472,
            "unit": "ns/iter",
            "extra": "iterations: 31882\ncpu: 21823.91004328465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 17000.332732411956,
            "unit": "ns/iter",
            "extra": "iterations: 41048\ncpu: 16999.230169557497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 15775.352479767762,
            "unit": "ns/iter",
            "extra": "iterations: 44238\ncpu: 15774.237081242236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12809.185368246968,
            "unit": "ns/iter",
            "extra": "iterations: 55031\ncpu: 12808.491577474548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 89559.64306746589,
            "unit": "ns/iter",
            "extra": "iterations: 7811\ncpu: 89558.91691204764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 195301.47486033797,
            "unit": "ns/iter",
            "extra": "iterations: 3580\ncpu: 195293.4916201129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 48045.05470999463,
            "unit": "ns/iter",
            "extra": "iterations: 14586\ncpu: 48042.91786644752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 48396.538690064095,
            "unit": "ns/iter",
            "extra": "iterations: 14474\ncpu: 48394.17576343863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 48190.10015810997,
            "unit": "ns/iter",
            "extra": "iterations: 14547\ncpu: 48186.052106963834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 103252.90971612617,
            "unit": "ns/iter",
            "extra": "iterations: 6834\ncpu: 103249.18056775117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 85143.96809033304,
            "unit": "ns/iter",
            "extra": "iterations: 8148\ncpu: 85139.24889543357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 26989.307325879763,
            "unit": "ns/iter",
            "extra": "iterations: 26031\ncpu: 26988.340824401726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 128678.2828004404,
            "unit": "ns/iter",
            "extra": "iterations: 5442\ncpu: 128677.45314222643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 103775.8444840951,
            "unit": "ns/iter",
            "extra": "iterations: 6726\ncpu: 103772.49479631278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 104470.6719402942,
            "unit": "ns/iter",
            "extra": "iterations: 6700\ncpu: 104467.35820895564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 105344.11184605773,
            "unit": "ns/iter",
            "extra": "iterations: 6652\ncpu: 105336.2898376436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 190196.67562431423,
            "unit": "ns/iter",
            "extra": "iterations: 3684\ncpu: 190189.63083604697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 826190.6972909473,
            "unit": "ns/iter",
            "extra": "iterations: 849\ncpu: 826146.7608951761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 692277.5873015606,
            "unit": "ns/iter",
            "extra": "iterations: 1008\ncpu: 692249.4047619005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 706415.7184661672,
            "unit": "ns/iter",
            "extra": "iterations: 991\ncpu: 706413.7235116081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 697122.509509543,
            "unit": "ns/iter",
            "extra": "iterations: 999\ncpu: 697087.4874874861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 455916.9765625167,
            "unit": "ns/iter",
            "extra": "iterations: 1536\ncpu: 455915.03906249517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 686004.4936212425,
            "unit": "ns/iter",
            "extra": "iterations: 1019\ncpu: 685984.1020608371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 26828.669086074828,
            "unit": "ns/iter",
            "extra": "iterations: 26315\ncpu: 26828.57685730533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 128481.17495395923,
            "unit": "ns/iter",
            "extra": "iterations: 5430\ncpu: 128474.65930018654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 103145.006526262,
            "unit": "ns/iter",
            "extra": "iterations: 6742\ncpu: 103143.4885790567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 103821.80008786533,
            "unit": "ns/iter",
            "extra": "iterations: 6828\ncpu: 103822.52489748127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 103852.16528067057,
            "unit": "ns/iter",
            "extra": "iterations: 6734\ncpu: 103848.2922482931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 188057.2252761971,
            "unit": "ns/iter",
            "extra": "iterations: 3711\ncpu: 188055.86095391877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 821340.795294097,
            "unit": "ns/iter",
            "extra": "iterations: 850\ncpu: 821326.1176470609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 700064.0139720193,
            "unit": "ns/iter",
            "extra": "iterations: 1002\ncpu: 700055.1896207648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 697285.0484359397,
            "unit": "ns/iter",
            "extra": "iterations: 991\ncpu: 697288.5973763856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 693847.1978763927,
            "unit": "ns/iter",
            "extra": "iterations: 1036\ncpu: 693816.0231660189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 454742.40283138363,
            "unit": "ns/iter",
            "extra": "iterations: 1554\ncpu: 454745.0450450478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 681974.1219512097,
            "unit": "ns/iter",
            "extra": "iterations: 1025\ncpu: 681949.6585365791 ns\nthreads: 1"
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
          "id": "d1143eedaeca215bd4d59936eed187ebbc5a2705",
          "message": "uncomment",
          "timestamp": "2023-12-12T16:24:18+03:00",
          "tree_id": "24d13ef9110c03a703c985f6237d2ba22581ead7",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d1143eedaeca215bd4d59936eed187ebbc5a2705"
        },
        "date": 1702388126940,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8490.824615794663,
            "unit": "ns/iter",
            "extra": "iterations: 82573\ncpu: 8490.297070470977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 99024.94092435973,
            "unit": "ns/iter",
            "extra": "iterations: 8633\ncpu: 99019.95829954823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 190993.196689179,
            "unit": "ns/iter",
            "extra": "iterations: 4591\ncpu: 190981.59442387274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 285447.73596058955,
            "unit": "ns/iter",
            "extra": "iterations: 3045\ncpu: 285434.64696223324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 371148.4453635182,
            "unit": "ns/iter",
            "extra": "iterations: 2297\ncpu: 371130.43099695246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 461530.50583244726,
            "unit": "ns/iter",
            "extra": "iterations: 1886\ncpu: 461520.5726405094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 550630.5987341731,
            "unit": "ns/iter",
            "extra": "iterations: 1580\ncpu: 550627.0886075951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 514743.37500002317,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514727.5999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 603383.6070000121,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 603377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6592.138185504173,
            "unit": "ns/iter",
            "extra": "iterations: 105561\ncpu: 6592.080408484181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5433.587185914033,
            "unit": "ns/iter",
            "extra": "iterations: 129264\ncpu: 5433.238952840693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5518.3535007459905,
            "unit": "ns/iter",
            "extra": "iterations: 126673\ncpu: 5518.399343190746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5501.186311757295,
            "unit": "ns/iter",
            "extra": "iterations: 127920\ncpu: 5501.020168855538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9454.81184114758,
            "unit": "ns/iter",
            "extra": "iterations: 74182\ncpu: 9454.649375859377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 51692.62085367161,
            "unit": "ns/iter",
            "extra": "iterations: 15978\ncpu: 51692.176743021744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 215562.1975370753,
            "unit": "ns/iter",
            "extra": "iterations: 3979\ncpu: 215559.86428750955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 175161.26763442875,
            "unit": "ns/iter",
            "extra": "iterations: 4891\ncpu: 175158.9041095892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 175866.9404298877,
            "unit": "ns/iter",
            "extra": "iterations: 4885\ncpu: 175866.6325486185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 176305.88424304614,
            "unit": "ns/iter",
            "extra": "iterations: 4855\ncpu: 176303.85169927916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 393444.16980287596,
            "unit": "ns/iter",
            "extra": "iterations: 2232\ncpu: 393441.53225806495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3011463.8945686882,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 3011380.830670919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2476299.6534391167,
            "unit": "ns/iter",
            "extra": "iterations: 378\ncpu: 2476298.9417989403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2493356.821333388,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2493237.599999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2485628.7559681605,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2485602.6525198924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1490668.8835725745,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1490664.5933014383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2406390.0595854544,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2406359.844559579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10256994.00000042,
            "unit": "ns/iter",
            "extra": "iterations: 103\ncpu: 10256779.61165048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5714286.4268295085,
            "unit": "ns/iter",
            "extra": "iterations: 164\ncpu: 5714114.024390257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12354404.7558136,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12354387.209302299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 52688.185290762995,
            "unit": "ns/iter",
            "extra": "iterations: 15786\ncpu: 52687.85632839218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 217662.16298552408,
            "unit": "ns/iter",
            "extra": "iterations: 3939\ncpu: 217657.52729118973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 177674.6698093882,
            "unit": "ns/iter",
            "extra": "iterations: 4879\ncpu: 177670.1578192258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 177313.94285714265,
            "unit": "ns/iter",
            "extra": "iterations: 4830\ncpu: 177310.89026915142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 177582.77874277227,
            "unit": "ns/iter",
            "extra": "iterations: 4836\ncpu: 177581.03804797286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 396862.2711941713,
            "unit": "ns/iter",
            "extra": "iterations: 2194\ncpu: 396854.10209662543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3013736.418300548,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3013761.4379085107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2488769.917333381,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2488689.600000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2519589.54838716,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2519610.2150537795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2494531.6818181765,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2494531.818181814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1498040.227929369,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1498008.8282503986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2415827.3695091396,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2415807.7519379808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10515962.558823798,
            "unit": "ns/iter",
            "extra": "iterations: 102\ncpu: 10515694.117647024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 6078606.155843867,
            "unit": "ns/iter",
            "extra": "iterations: 154\ncpu: 6078604.545454584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 50662.82008291539,
            "unit": "ns/iter",
            "extra": "iterations: 16402\ncpu: 50662.16315083525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 218521.36980362525,
            "unit": "ns/iter",
            "extra": "iterations: 3921\ncpu: 218518.18413669997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 177552.7438392974,
            "unit": "ns/iter",
            "extra": "iterations: 4829\ncpu: 177550.4038103124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 173298.245137762,
            "unit": "ns/iter",
            "extra": "iterations: 4936\ncpu: 173295.29983792652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 181406.56931607836,
            "unit": "ns/iter",
            "extra": "iterations: 4869\ncpu: 181403.49147668993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 389406.99955219415,
            "unit": "ns/iter",
            "extra": "iterations: 2233\ncpu: 389399.91043439525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3012866.096774162,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 3012889.9999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2551553.8823529985,
            "unit": "ns/iter",
            "extra": "iterations: 340\ncpu: 2551460.000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2513490.4339622604,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2513510.2425875985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2496294.580213967,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2496282.6203208505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1496242.9952000093,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1496238.0800000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2420605.668393661,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2420555.958549222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2971.824997117028,
            "unit": "ns/iter",
            "extra": "iterations: 234139\ncpu: 2971.728759412139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 21610.017672640242,
            "unit": "ns/iter",
            "extra": "iterations: 32423\ncpu: 21609.468587114137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 16201.32725587784,
            "unit": "ns/iter",
            "extra": "iterations: 43165\ncpu: 16201.107378663324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 16342.584887143983,
            "unit": "ns/iter",
            "extra": "iterations: 42798\ncpu: 16342.149165848901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12048.582682314247,
            "unit": "ns/iter",
            "extra": "iterations: 58114\ncpu: 12048.490897202088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 89034.04415881702,
            "unit": "ns/iter",
            "extra": "iterations: 7858\ncpu: 89030.8602697896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 195247.03695408592,
            "unit": "ns/iter",
            "extra": "iterations: 3572\ncpu: 195244.17693169156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 48284.725127508456,
            "unit": "ns/iter",
            "extra": "iterations: 14705\ncpu: 48282.407344441286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 48217.721655877256,
            "unit": "ns/iter",
            "extra": "iterations: 14518\ncpu: 48218.12921890021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 47673.23854272949,
            "unit": "ns/iter",
            "extra": "iterations: 14685\ncpu: 47671.41300646888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 102678.42690490047,
            "unit": "ns/iter",
            "extra": "iterations: 6772\ncpu: 102679.23803898456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 90509.71688848388,
            "unit": "ns/iter",
            "extra": "iterations: 7739\ncpu: 90505.94392040242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 26940.116278171718,
            "unit": "ns/iter",
            "extra": "iterations: 25869\ncpu: 26939.947427422932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 130689.82497191872,
            "unit": "ns/iter",
            "extra": "iterations: 5342\ncpu: 130683.73268438665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 105282.73536086737,
            "unit": "ns/iter",
            "extra": "iterations: 6609\ncpu: 105281.29822968735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 105113.55789473878,
            "unit": "ns/iter",
            "extra": "iterations: 6650\ncpu: 105109.44360902172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 106072.73978819513,
            "unit": "ns/iter",
            "extra": "iterations: 6610\ncpu: 106069.96974281558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 189994.81568946547,
            "unit": "ns/iter",
            "extra": "iterations: 3684\ncpu: 189996.389793702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 820156.3587338337,
            "unit": "ns/iter",
            "extra": "iterations: 853\ncpu: 820140.3282532252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 698547.2342342098,
            "unit": "ns/iter",
            "extra": "iterations: 999\ncpu: 698538.638638632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 703973.4924622774,
            "unit": "ns/iter",
            "extra": "iterations: 995\ncpu: 703951.6582914554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 700220.250999962,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 700189.5000000076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 453328.70638022566,
            "unit": "ns/iter",
            "extra": "iterations: 1536\ncpu: 453309.17968749994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 682813.5410156256,
            "unit": "ns/iter",
            "extra": "iterations: 1024\ncpu: 682802.7343750015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 26841.898980606926,
            "unit": "ns/iter",
            "extra": "iterations: 26094\ncpu: 26841.572775350887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 129612.15063925182,
            "unit": "ns/iter",
            "extra": "iterations: 5397\ncpu: 129608.8197146564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 104620.37838647314,
            "unit": "ns/iter",
            "extra": "iterations: 6681\ncpu: 104618.91932345489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 105110.47267800487,
            "unit": "ns/iter",
            "extra": "iterations: 6643\ncpu: 105107.73746801089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 104845.95299594305,
            "unit": "ns/iter",
            "extra": "iterations: 6659\ncpu: 104844.09070431096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 189407.9926967837,
            "unit": "ns/iter",
            "extra": "iterations: 3697\ncpu: 189402.40735731748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 820817.1562867442,
            "unit": "ns/iter",
            "extra": "iterations: 851\ncpu: 820791.1868390244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 696883.0676616711,
            "unit": "ns/iter",
            "extra": "iterations: 1005\ncpu: 696889.1542288618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 703262.9597585648,
            "unit": "ns/iter",
            "extra": "iterations: 994\ncpu: 703238.1287726464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 700838.2954774363,
            "unit": "ns/iter",
            "extra": "iterations: 995\ncpu: 700824.3216080474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 469752.34450400266,
            "unit": "ns/iter",
            "extra": "iterations: 1492\ncpu: 469717.49329758505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 683041.0557730075,
            "unit": "ns/iter",
            "extra": "iterations: 1022\ncpu: 683033.3659491257 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}