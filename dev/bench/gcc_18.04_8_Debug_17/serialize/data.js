window.BENCHMARK_DATA = {
  "lastUpdate": 1702381155671,
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
      }
    ]
  }
}