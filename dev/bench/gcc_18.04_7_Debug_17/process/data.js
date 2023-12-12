window.BENCHMARK_DATA = {
  "lastUpdate": 1702388120470,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-7 18.04 Debug c++-17": [
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
        "date": 1702381132630,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16012.380316280502,
            "unit": "ns/iter",
            "extra": "iterations: 43569\ncpu: 16011.923615414633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 150798.57992895268,
            "unit": "ns/iter",
            "extra": "iterations: 5630\ncpu: 150793.88987566606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 287302.92597488494,
            "unit": "ns/iter",
            "extra": "iterations: 3026\ncpu: 287288.6318572374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 420882.84749877354,
            "unit": "ns/iter",
            "extra": "iterations: 2059\ncpu: 420859.20349684305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 562484.5706973643,
            "unit": "ns/iter",
            "extra": "iterations: 1563\ncpu: 562457.9014715289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 561477.5050000276,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 561455.9999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 674335.107402009,
            "unit": "ns/iter",
            "extra": "iterations: 1378\ncpu: 674303.7735849058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 780513.661045532,
            "unit": "ns/iter",
            "extra": "iterations: 1186\ncpu: 780469.2242833056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 894388.7612656202,
            "unit": "ns/iter",
            "extra": "iterations: 1043\ncpu: 894343.9117929047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13352.07043060384,
            "unit": "ns/iter",
            "extra": "iterations: 54110\ncpu: 13350.859360561813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10719.885564079928,
            "unit": "ns/iter",
            "extra": "iterations: 65434\ncpu: 10719.184216156735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10741.71296537526,
            "unit": "ns/iter",
            "extra": "iterations: 65243\ncpu: 10741.190625814246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10721.188356583623,
            "unit": "ns/iter",
            "extra": "iterations: 65376\ncpu: 10721.076541850238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18369.44558731256,
            "unit": "ns/iter",
            "extra": "iterations: 38208\ncpu: 18369.255129815774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 69917.4176110885,
            "unit": "ns/iter",
            "extra": "iterations: 12265\ncpu: 69913.56706074189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 365484.4788732471,
            "unit": "ns/iter",
            "extra": "iterations: 2343\ncpu: 365480.6658130602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 288962.89327930135,
            "unit": "ns/iter",
            "extra": "iterations: 2961\ncpu: 288949.003714961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 286948.3978458425,
            "unit": "ns/iter",
            "extra": "iterations: 2971\ncpu: 286931.7738135299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 285250.06197655195,
            "unit": "ns/iter",
            "extra": "iterations: 2985\ncpu: 285237.8224455603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 573729.8259999761,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 573706.6999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4677746.356784137,
            "unit": "ns/iter",
            "extra": "iterations: 199\ncpu: 4677486.934673382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3797229.2612243555,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3797052.2448979695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3799228.832652874,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3799064.897959179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3817222.6913580657,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3817144.4444444445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2240501.8623188054,
            "unit": "ns/iter",
            "extra": "iterations: 414\ncpu: 2240385.024154593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3715660.0200000866,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3715458.4000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14993424.57746457,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14992802.816901384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6746241.269999586,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6745881.999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18618065.807017278,
            "unit": "ns/iter",
            "extra": "iterations: 57\ncpu: 18617087.719298266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 78606.99743048669,
            "unit": "ns/iter",
            "extra": "iterations: 10897\ncpu: 78602.6429292468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 388669.2436823288,
            "unit": "ns/iter",
            "extra": "iterations: 2216\ncpu: 388651.759927798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 313212.20944709197,
            "unit": "ns/iter",
            "extra": "iterations: 2731\ncpu: 313194.6905895277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 314559.6518085576,
            "unit": "ns/iter",
            "extra": "iterations: 2737\ncpu: 314541.0668615254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 312592.30710382323,
            "unit": "ns/iter",
            "extra": "iterations: 2745\ncpu: 312586.4845173033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 575140.9699999499,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 575133.8999999972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4853710.030612238,
            "unit": "ns/iter",
            "extra": "iterations: 196\ncpu: 4853487.244897935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3853102.4232365573,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3852916.1825726083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3849379.512396617,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3849247.107438023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3910568.3666666853,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3910349.1666666674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2289346.0392158073,
            "unit": "ns/iter",
            "extra": "iterations: 408\ncpu: 2289223.0392156965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3757661.395161266,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3757468.9516128856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15296809.899999581,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 15296042.857142871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6594554.519999747,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6594380.000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 68451.44725194953,
            "unit": "ns/iter",
            "extra": "iterations: 12427\ncpu: 68448.32220165769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 358167.56088406726,
            "unit": "ns/iter",
            "extra": "iterations: 2398\ncpu: 358149.79149291187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 282501.8043406805,
            "unit": "ns/iter",
            "extra": "iterations: 3041\ncpu: 282489.3456099959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 288749.6047745208,
            "unit": "ns/iter",
            "extra": "iterations: 3016\ncpu: 288730.4708222803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 279338.5879103029,
            "unit": "ns/iter",
            "extra": "iterations: 3077\ncpu: 279331.0042248945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 539166.2349999819,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 539145.0999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4732489.617347128,
            "unit": "ns/iter",
            "extra": "iterations: 196\ncpu: 4732221.9387755385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3848682.808163352,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3848487.3469387856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3816022.1967211873,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3815854.5081967297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3838346.378600769,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3838237.0370370303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2230617.4580334914,
            "unit": "ns/iter",
            "extra": "iterations: 417\ncpu: 2230534.532374093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3733679.2359999437,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3733491.2000000034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6153.889797103637,
            "unit": "ns/iter",
            "extra": "iterations: 113654\ncpu: 6153.635595755565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 40337.44156740717,
            "unit": "ns/iter",
            "extra": "iterations: 17379\ncpu: 40333.8569537947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30557.105444853023,
            "unit": "ns/iter",
            "extra": "iterations: 22884\ncpu: 30555.886208704753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30461.40860028055,
            "unit": "ns/iter",
            "extra": "iterations: 22976\ncpu: 30461.041956824625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24382.166736401563,
            "unit": "ns/iter",
            "extra": "iterations: 28680\ncpu: 24381.485355648532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 186247.28180610272,
            "unit": "ns/iter",
            "extra": "iterations: 3765\ncpu: 186241.9654714469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 311092.25377776456,
            "unit": "ns/iter",
            "extra": "iterations: 2250\ncpu: 311078.88888888306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 75797.01441362673,
            "unit": "ns/iter",
            "extra": "iterations: 9158\ncpu: 75794.34374317637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 75282.66799654887,
            "unit": "ns/iter",
            "extra": "iterations: 9274\ncpu: 75280.2997627776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 76035.77122411542,
            "unit": "ns/iter",
            "extra": "iterations: 9223\ncpu: 76034.50070475898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 152181.09629147037,
            "unit": "ns/iter",
            "extra": "iterations: 4611\ncpu: 152176.3391888974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 148961.57261498657,
            "unit": "ns/iter",
            "extra": "iterations: 4696\ncpu: 148957.41056218155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 48374.438342903224,
            "unit": "ns/iter",
            "extra": "iterations: 14459\ncpu: 48372.98568365759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 232999.50271002858,
            "unit": "ns/iter",
            "extra": "iterations: 2952\ncpu: 232992.31029810148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 190883.38803933348,
            "unit": "ns/iter",
            "extra": "iterations: 3662\ncpu: 190877.36209721668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 191755.47770177713,
            "unit": "ns/iter",
            "extra": "iterations: 3655\ncpu: 191744.54172366697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 192034.25102768803,
            "unit": "ns/iter",
            "extra": "iterations: 3649\ncpu: 192024.7465058918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 341054.8692682746,
            "unit": "ns/iter",
            "extra": "iterations: 2050\ncpu: 341043.0243902475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1324530.0041928606,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1324459.5387840646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1106889.4193037604,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1106856.012658209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1104141.4856688124,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1104125.3184713293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1106021.566455677,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1105986.5506329068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 716509.2709611569,
            "unit": "ns/iter",
            "extra": "iterations: 978\ncpu: 716487.6278118583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1098242.8871473097,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1098176.3322884038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 48586.133370458956,
            "unit": "ns/iter",
            "extra": "iterations: 14366\ncpu: 48584.19184184935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 239729.85640850858,
            "unit": "ns/iter",
            "extra": "iterations: 2918\ncpu: 239722.54969157244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 194501.85765915544,
            "unit": "ns/iter",
            "extra": "iterations: 3597\ncpu: 194495.74645537653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 193042.83829201307,
            "unit": "ns/iter",
            "extra": "iterations: 3630\ncpu: 193033.85674931106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 193421.4109171495,
            "unit": "ns/iter",
            "extra": "iterations: 3609\ncpu: 193412.99528955246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 356230.33512196364,
            "unit": "ns/iter",
            "extra": "iterations: 2050\ncpu: 356217.4146341451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1326249.5939278367,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1326201.328273239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1114021.114649679,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1113973.885350323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1104976.55608219,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1104976.1453396373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1109971.152139475,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1109910.1426307275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 715688.1024590479,
            "unit": "ns/iter",
            "extra": "iterations: 976\ncpu: 715663.8319672021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1100220.7578615956,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1100178.4591194992 ns\nthreads: 1"
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
        "date": 1702381132630,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16012.380316280502,
            "unit": "ns/iter",
            "extra": "iterations: 43569\ncpu: 16011.923615414633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 150798.57992895268,
            "unit": "ns/iter",
            "extra": "iterations: 5630\ncpu: 150793.88987566606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 287302.92597488494,
            "unit": "ns/iter",
            "extra": "iterations: 3026\ncpu: 287288.6318572374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 420882.84749877354,
            "unit": "ns/iter",
            "extra": "iterations: 2059\ncpu: 420859.20349684305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 562484.5706973643,
            "unit": "ns/iter",
            "extra": "iterations: 1563\ncpu: 562457.9014715289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 561477.5050000276,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 561455.9999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 674335.107402009,
            "unit": "ns/iter",
            "extra": "iterations: 1378\ncpu: 674303.7735849058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 780513.661045532,
            "unit": "ns/iter",
            "extra": "iterations: 1186\ncpu: 780469.2242833056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 894388.7612656202,
            "unit": "ns/iter",
            "extra": "iterations: 1043\ncpu: 894343.9117929047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13352.07043060384,
            "unit": "ns/iter",
            "extra": "iterations: 54110\ncpu: 13350.859360561813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10719.885564079928,
            "unit": "ns/iter",
            "extra": "iterations: 65434\ncpu: 10719.184216156735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10741.71296537526,
            "unit": "ns/iter",
            "extra": "iterations: 65243\ncpu: 10741.190625814246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10721.188356583623,
            "unit": "ns/iter",
            "extra": "iterations: 65376\ncpu: 10721.076541850238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18369.44558731256,
            "unit": "ns/iter",
            "extra": "iterations: 38208\ncpu: 18369.255129815774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 69917.4176110885,
            "unit": "ns/iter",
            "extra": "iterations: 12265\ncpu: 69913.56706074189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 365484.4788732471,
            "unit": "ns/iter",
            "extra": "iterations: 2343\ncpu: 365480.6658130602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 288962.89327930135,
            "unit": "ns/iter",
            "extra": "iterations: 2961\ncpu: 288949.003714961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 286948.3978458425,
            "unit": "ns/iter",
            "extra": "iterations: 2971\ncpu: 286931.7738135299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 285250.06197655195,
            "unit": "ns/iter",
            "extra": "iterations: 2985\ncpu: 285237.8224455603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 573729.8259999761,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 573706.6999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4677746.356784137,
            "unit": "ns/iter",
            "extra": "iterations: 199\ncpu: 4677486.934673382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3797229.2612243555,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3797052.2448979695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3799228.832652874,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3799064.897959179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3817222.6913580657,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3817144.4444444445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2240501.8623188054,
            "unit": "ns/iter",
            "extra": "iterations: 414\ncpu: 2240385.024154593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3715660.0200000866,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3715458.4000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14993424.57746457,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14992802.816901384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6746241.269999586,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6745881.999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18618065.807017278,
            "unit": "ns/iter",
            "extra": "iterations: 57\ncpu: 18617087.719298266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 78606.99743048669,
            "unit": "ns/iter",
            "extra": "iterations: 10897\ncpu: 78602.6429292468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 388669.2436823288,
            "unit": "ns/iter",
            "extra": "iterations: 2216\ncpu: 388651.759927798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 313212.20944709197,
            "unit": "ns/iter",
            "extra": "iterations: 2731\ncpu: 313194.6905895277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 314559.6518085576,
            "unit": "ns/iter",
            "extra": "iterations: 2737\ncpu: 314541.0668615254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 312592.30710382323,
            "unit": "ns/iter",
            "extra": "iterations: 2745\ncpu: 312586.4845173033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 575140.9699999499,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 575133.8999999972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4853710.030612238,
            "unit": "ns/iter",
            "extra": "iterations: 196\ncpu: 4853487.244897935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3853102.4232365573,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3852916.1825726083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3849379.512396617,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3849247.107438023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3910568.3666666853,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3910349.1666666674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2289346.0392158073,
            "unit": "ns/iter",
            "extra": "iterations: 408\ncpu: 2289223.0392156965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3757661.395161266,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3757468.9516128856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15296809.899999581,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 15296042.857142871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6594554.519999747,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6594380.000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 68451.44725194953,
            "unit": "ns/iter",
            "extra": "iterations: 12427\ncpu: 68448.32220165769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 358167.56088406726,
            "unit": "ns/iter",
            "extra": "iterations: 2398\ncpu: 358149.79149291187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 282501.8043406805,
            "unit": "ns/iter",
            "extra": "iterations: 3041\ncpu: 282489.3456099959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 288749.6047745208,
            "unit": "ns/iter",
            "extra": "iterations: 3016\ncpu: 288730.4708222803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 279338.5879103029,
            "unit": "ns/iter",
            "extra": "iterations: 3077\ncpu: 279331.0042248945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 539166.2349999819,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 539145.0999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4732489.617347128,
            "unit": "ns/iter",
            "extra": "iterations: 196\ncpu: 4732221.9387755385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3848682.808163352,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3848487.3469387856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3816022.1967211873,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3815854.5081967297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3838346.378600769,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3838237.0370370303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2230617.4580334914,
            "unit": "ns/iter",
            "extra": "iterations: 417\ncpu: 2230534.532374093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3733679.2359999437,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3733491.2000000034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6153.889797103637,
            "unit": "ns/iter",
            "extra": "iterations: 113654\ncpu: 6153.635595755565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 40337.44156740717,
            "unit": "ns/iter",
            "extra": "iterations: 17379\ncpu: 40333.8569537947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30557.105444853023,
            "unit": "ns/iter",
            "extra": "iterations: 22884\ncpu: 30555.886208704753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30461.40860028055,
            "unit": "ns/iter",
            "extra": "iterations: 22976\ncpu: 30461.041956824625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24382.166736401563,
            "unit": "ns/iter",
            "extra": "iterations: 28680\ncpu: 24381.485355648532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 186247.28180610272,
            "unit": "ns/iter",
            "extra": "iterations: 3765\ncpu: 186241.9654714469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 311092.25377776456,
            "unit": "ns/iter",
            "extra": "iterations: 2250\ncpu: 311078.88888888306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 75797.01441362673,
            "unit": "ns/iter",
            "extra": "iterations: 9158\ncpu: 75794.34374317637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 75282.66799654887,
            "unit": "ns/iter",
            "extra": "iterations: 9274\ncpu: 75280.2997627776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 76035.77122411542,
            "unit": "ns/iter",
            "extra": "iterations: 9223\ncpu: 76034.50070475898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 152181.09629147037,
            "unit": "ns/iter",
            "extra": "iterations: 4611\ncpu: 152176.3391888974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 148961.57261498657,
            "unit": "ns/iter",
            "extra": "iterations: 4696\ncpu: 148957.41056218155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 48374.438342903224,
            "unit": "ns/iter",
            "extra": "iterations: 14459\ncpu: 48372.98568365759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 232999.50271002858,
            "unit": "ns/iter",
            "extra": "iterations: 2952\ncpu: 232992.31029810148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 190883.38803933348,
            "unit": "ns/iter",
            "extra": "iterations: 3662\ncpu: 190877.36209721668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 191755.47770177713,
            "unit": "ns/iter",
            "extra": "iterations: 3655\ncpu: 191744.54172366697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 192034.25102768803,
            "unit": "ns/iter",
            "extra": "iterations: 3649\ncpu: 192024.7465058918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 341054.8692682746,
            "unit": "ns/iter",
            "extra": "iterations: 2050\ncpu: 341043.0243902475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1324530.0041928606,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1324459.5387840646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1106889.4193037604,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1106856.012658209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1104141.4856688124,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1104125.3184713293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1106021.566455677,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1105986.5506329068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 716509.2709611569,
            "unit": "ns/iter",
            "extra": "iterations: 978\ncpu: 716487.6278118583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1098242.8871473097,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1098176.3322884038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 48586.133370458956,
            "unit": "ns/iter",
            "extra": "iterations: 14366\ncpu: 48584.19184184935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 239729.85640850858,
            "unit": "ns/iter",
            "extra": "iterations: 2918\ncpu: 239722.54969157244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 194501.85765915544,
            "unit": "ns/iter",
            "extra": "iterations: 3597\ncpu: 194495.74645537653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 193042.83829201307,
            "unit": "ns/iter",
            "extra": "iterations: 3630\ncpu: 193033.85674931106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 193421.4109171495,
            "unit": "ns/iter",
            "extra": "iterations: 3609\ncpu: 193412.99528955246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 356230.33512196364,
            "unit": "ns/iter",
            "extra": "iterations: 2050\ncpu: 356217.4146341451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1326249.5939278367,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1326201.328273239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1114021.114649679,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1113973.885350323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1104976.55608219,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1104976.1453396373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1109971.152139475,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1109910.1426307275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 715688.1024590479,
            "unit": "ns/iter",
            "extra": "iterations: 976\ncpu: 715663.8319672021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1100220.7578615956,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1100178.4591194992 ns\nthreads: 1"
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
        "date": 1702381132630,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16012.380316280502,
            "unit": "ns/iter",
            "extra": "iterations: 43569\ncpu: 16011.923615414633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 150798.57992895268,
            "unit": "ns/iter",
            "extra": "iterations: 5630\ncpu: 150793.88987566606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 287302.92597488494,
            "unit": "ns/iter",
            "extra": "iterations: 3026\ncpu: 287288.6318572374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 420882.84749877354,
            "unit": "ns/iter",
            "extra": "iterations: 2059\ncpu: 420859.20349684305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 562484.5706973643,
            "unit": "ns/iter",
            "extra": "iterations: 1563\ncpu: 562457.9014715289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 561477.5050000276,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 561455.9999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 674335.107402009,
            "unit": "ns/iter",
            "extra": "iterations: 1378\ncpu: 674303.7735849058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 780513.661045532,
            "unit": "ns/iter",
            "extra": "iterations: 1186\ncpu: 780469.2242833056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 894388.7612656202,
            "unit": "ns/iter",
            "extra": "iterations: 1043\ncpu: 894343.9117929047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13352.07043060384,
            "unit": "ns/iter",
            "extra": "iterations: 54110\ncpu: 13350.859360561813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10719.885564079928,
            "unit": "ns/iter",
            "extra": "iterations: 65434\ncpu: 10719.184216156735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10741.71296537526,
            "unit": "ns/iter",
            "extra": "iterations: 65243\ncpu: 10741.190625814246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10721.188356583623,
            "unit": "ns/iter",
            "extra": "iterations: 65376\ncpu: 10721.076541850238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18369.44558731256,
            "unit": "ns/iter",
            "extra": "iterations: 38208\ncpu: 18369.255129815774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 69917.4176110885,
            "unit": "ns/iter",
            "extra": "iterations: 12265\ncpu: 69913.56706074189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 365484.4788732471,
            "unit": "ns/iter",
            "extra": "iterations: 2343\ncpu: 365480.6658130602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 288962.89327930135,
            "unit": "ns/iter",
            "extra": "iterations: 2961\ncpu: 288949.003714961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 286948.3978458425,
            "unit": "ns/iter",
            "extra": "iterations: 2971\ncpu: 286931.7738135299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 285250.06197655195,
            "unit": "ns/iter",
            "extra": "iterations: 2985\ncpu: 285237.8224455603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 573729.8259999761,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 573706.6999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4677746.356784137,
            "unit": "ns/iter",
            "extra": "iterations: 199\ncpu: 4677486.934673382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3797229.2612243555,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3797052.2448979695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3799228.832652874,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3799064.897959179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3817222.6913580657,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3817144.4444444445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2240501.8623188054,
            "unit": "ns/iter",
            "extra": "iterations: 414\ncpu: 2240385.024154593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3715660.0200000866,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3715458.4000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14993424.57746457,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14992802.816901384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6746241.269999586,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6745881.999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18618065.807017278,
            "unit": "ns/iter",
            "extra": "iterations: 57\ncpu: 18617087.719298266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 78606.99743048669,
            "unit": "ns/iter",
            "extra": "iterations: 10897\ncpu: 78602.6429292468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 388669.2436823288,
            "unit": "ns/iter",
            "extra": "iterations: 2216\ncpu: 388651.759927798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 313212.20944709197,
            "unit": "ns/iter",
            "extra": "iterations: 2731\ncpu: 313194.6905895277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 314559.6518085576,
            "unit": "ns/iter",
            "extra": "iterations: 2737\ncpu: 314541.0668615254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 312592.30710382323,
            "unit": "ns/iter",
            "extra": "iterations: 2745\ncpu: 312586.4845173033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 575140.9699999499,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 575133.8999999972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4853710.030612238,
            "unit": "ns/iter",
            "extra": "iterations: 196\ncpu: 4853487.244897935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3853102.4232365573,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3852916.1825726083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3849379.512396617,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3849247.107438023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3910568.3666666853,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3910349.1666666674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2289346.0392158073,
            "unit": "ns/iter",
            "extra": "iterations: 408\ncpu: 2289223.0392156965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3757661.395161266,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3757468.9516128856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15296809.899999581,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 15296042.857142871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6594554.519999747,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6594380.000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 68451.44725194953,
            "unit": "ns/iter",
            "extra": "iterations: 12427\ncpu: 68448.32220165769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 358167.56088406726,
            "unit": "ns/iter",
            "extra": "iterations: 2398\ncpu: 358149.79149291187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 282501.8043406805,
            "unit": "ns/iter",
            "extra": "iterations: 3041\ncpu: 282489.3456099959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 288749.6047745208,
            "unit": "ns/iter",
            "extra": "iterations: 3016\ncpu: 288730.4708222803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 279338.5879103029,
            "unit": "ns/iter",
            "extra": "iterations: 3077\ncpu: 279331.0042248945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 539166.2349999819,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 539145.0999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4732489.617347128,
            "unit": "ns/iter",
            "extra": "iterations: 196\ncpu: 4732221.9387755385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3848682.808163352,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3848487.3469387856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3816022.1967211873,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3815854.5081967297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3838346.378600769,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3838237.0370370303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2230617.4580334914,
            "unit": "ns/iter",
            "extra": "iterations: 417\ncpu: 2230534.532374093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3733679.2359999437,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3733491.2000000034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6153.889797103637,
            "unit": "ns/iter",
            "extra": "iterations: 113654\ncpu: 6153.635595755565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 40337.44156740717,
            "unit": "ns/iter",
            "extra": "iterations: 17379\ncpu: 40333.8569537947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30557.105444853023,
            "unit": "ns/iter",
            "extra": "iterations: 22884\ncpu: 30555.886208704753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30461.40860028055,
            "unit": "ns/iter",
            "extra": "iterations: 22976\ncpu: 30461.041956824625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24382.166736401563,
            "unit": "ns/iter",
            "extra": "iterations: 28680\ncpu: 24381.485355648532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 186247.28180610272,
            "unit": "ns/iter",
            "extra": "iterations: 3765\ncpu: 186241.9654714469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 311092.25377776456,
            "unit": "ns/iter",
            "extra": "iterations: 2250\ncpu: 311078.88888888306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 75797.01441362673,
            "unit": "ns/iter",
            "extra": "iterations: 9158\ncpu: 75794.34374317637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 75282.66799654887,
            "unit": "ns/iter",
            "extra": "iterations: 9274\ncpu: 75280.2997627776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 76035.77122411542,
            "unit": "ns/iter",
            "extra": "iterations: 9223\ncpu: 76034.50070475898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 152181.09629147037,
            "unit": "ns/iter",
            "extra": "iterations: 4611\ncpu: 152176.3391888974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 148961.57261498657,
            "unit": "ns/iter",
            "extra": "iterations: 4696\ncpu: 148957.41056218155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 48374.438342903224,
            "unit": "ns/iter",
            "extra": "iterations: 14459\ncpu: 48372.98568365759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 232999.50271002858,
            "unit": "ns/iter",
            "extra": "iterations: 2952\ncpu: 232992.31029810148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 190883.38803933348,
            "unit": "ns/iter",
            "extra": "iterations: 3662\ncpu: 190877.36209721668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 191755.47770177713,
            "unit": "ns/iter",
            "extra": "iterations: 3655\ncpu: 191744.54172366697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 192034.25102768803,
            "unit": "ns/iter",
            "extra": "iterations: 3649\ncpu: 192024.7465058918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 341054.8692682746,
            "unit": "ns/iter",
            "extra": "iterations: 2050\ncpu: 341043.0243902475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1324530.0041928606,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1324459.5387840646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1106889.4193037604,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1106856.012658209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1104141.4856688124,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1104125.3184713293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1106021.566455677,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1105986.5506329068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 716509.2709611569,
            "unit": "ns/iter",
            "extra": "iterations: 978\ncpu: 716487.6278118583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1098242.8871473097,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1098176.3322884038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 48586.133370458956,
            "unit": "ns/iter",
            "extra": "iterations: 14366\ncpu: 48584.19184184935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 239729.85640850858,
            "unit": "ns/iter",
            "extra": "iterations: 2918\ncpu: 239722.54969157244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 194501.85765915544,
            "unit": "ns/iter",
            "extra": "iterations: 3597\ncpu: 194495.74645537653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 193042.83829201307,
            "unit": "ns/iter",
            "extra": "iterations: 3630\ncpu: 193033.85674931106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 193421.4109171495,
            "unit": "ns/iter",
            "extra": "iterations: 3609\ncpu: 193412.99528955246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 356230.33512196364,
            "unit": "ns/iter",
            "extra": "iterations: 2050\ncpu: 356217.4146341451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1326249.5939278367,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1326201.328273239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1114021.114649679,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1113973.885350323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1104976.55608219,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1104976.1453396373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1109971.152139475,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1109910.1426307275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 715688.1024590479,
            "unit": "ns/iter",
            "extra": "iterations: 976\ncpu: 715663.8319672021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1100220.7578615956,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1100178.4591194992 ns\nthreads: 1"
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
        "date": 1702381132630,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16012.380316280502,
            "unit": "ns/iter",
            "extra": "iterations: 43569\ncpu: 16011.923615414633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 150798.57992895268,
            "unit": "ns/iter",
            "extra": "iterations: 5630\ncpu: 150793.88987566606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 287302.92597488494,
            "unit": "ns/iter",
            "extra": "iterations: 3026\ncpu: 287288.6318572374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 420882.84749877354,
            "unit": "ns/iter",
            "extra": "iterations: 2059\ncpu: 420859.20349684305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 562484.5706973643,
            "unit": "ns/iter",
            "extra": "iterations: 1563\ncpu: 562457.9014715289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 561477.5050000276,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 561455.9999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 674335.107402009,
            "unit": "ns/iter",
            "extra": "iterations: 1378\ncpu: 674303.7735849058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 780513.661045532,
            "unit": "ns/iter",
            "extra": "iterations: 1186\ncpu: 780469.2242833056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 894388.7612656202,
            "unit": "ns/iter",
            "extra": "iterations: 1043\ncpu: 894343.9117929047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13352.07043060384,
            "unit": "ns/iter",
            "extra": "iterations: 54110\ncpu: 13350.859360561813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10719.885564079928,
            "unit": "ns/iter",
            "extra": "iterations: 65434\ncpu: 10719.184216156735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10741.71296537526,
            "unit": "ns/iter",
            "extra": "iterations: 65243\ncpu: 10741.190625814246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10721.188356583623,
            "unit": "ns/iter",
            "extra": "iterations: 65376\ncpu: 10721.076541850238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18369.44558731256,
            "unit": "ns/iter",
            "extra": "iterations: 38208\ncpu: 18369.255129815774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 69917.4176110885,
            "unit": "ns/iter",
            "extra": "iterations: 12265\ncpu: 69913.56706074189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 365484.4788732471,
            "unit": "ns/iter",
            "extra": "iterations: 2343\ncpu: 365480.6658130602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 288962.89327930135,
            "unit": "ns/iter",
            "extra": "iterations: 2961\ncpu: 288949.003714961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 286948.3978458425,
            "unit": "ns/iter",
            "extra": "iterations: 2971\ncpu: 286931.7738135299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 285250.06197655195,
            "unit": "ns/iter",
            "extra": "iterations: 2985\ncpu: 285237.8224455603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 573729.8259999761,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 573706.6999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4677746.356784137,
            "unit": "ns/iter",
            "extra": "iterations: 199\ncpu: 4677486.934673382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3797229.2612243555,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3797052.2448979695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3799228.832652874,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3799064.897959179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3817222.6913580657,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3817144.4444444445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2240501.8623188054,
            "unit": "ns/iter",
            "extra": "iterations: 414\ncpu: 2240385.024154593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3715660.0200000866,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3715458.4000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14993424.57746457,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14992802.816901384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6746241.269999586,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6745881.999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18618065.807017278,
            "unit": "ns/iter",
            "extra": "iterations: 57\ncpu: 18617087.719298266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 78606.99743048669,
            "unit": "ns/iter",
            "extra": "iterations: 10897\ncpu: 78602.6429292468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 388669.2436823288,
            "unit": "ns/iter",
            "extra": "iterations: 2216\ncpu: 388651.759927798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 313212.20944709197,
            "unit": "ns/iter",
            "extra": "iterations: 2731\ncpu: 313194.6905895277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 314559.6518085576,
            "unit": "ns/iter",
            "extra": "iterations: 2737\ncpu: 314541.0668615254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 312592.30710382323,
            "unit": "ns/iter",
            "extra": "iterations: 2745\ncpu: 312586.4845173033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 575140.9699999499,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 575133.8999999972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4853710.030612238,
            "unit": "ns/iter",
            "extra": "iterations: 196\ncpu: 4853487.244897935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3853102.4232365573,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3852916.1825726083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3849379.512396617,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3849247.107438023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3910568.3666666853,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3910349.1666666674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2289346.0392158073,
            "unit": "ns/iter",
            "extra": "iterations: 408\ncpu: 2289223.0392156965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3757661.395161266,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3757468.9516128856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15296809.899999581,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 15296042.857142871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6594554.519999747,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6594380.000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 68451.44725194953,
            "unit": "ns/iter",
            "extra": "iterations: 12427\ncpu: 68448.32220165769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 358167.56088406726,
            "unit": "ns/iter",
            "extra": "iterations: 2398\ncpu: 358149.79149291187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 282501.8043406805,
            "unit": "ns/iter",
            "extra": "iterations: 3041\ncpu: 282489.3456099959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 288749.6047745208,
            "unit": "ns/iter",
            "extra": "iterations: 3016\ncpu: 288730.4708222803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 279338.5879103029,
            "unit": "ns/iter",
            "extra": "iterations: 3077\ncpu: 279331.0042248945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 539166.2349999819,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 539145.0999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4732489.617347128,
            "unit": "ns/iter",
            "extra": "iterations: 196\ncpu: 4732221.9387755385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3848682.808163352,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3848487.3469387856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3816022.1967211873,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3815854.5081967297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3838346.378600769,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3838237.0370370303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2230617.4580334914,
            "unit": "ns/iter",
            "extra": "iterations: 417\ncpu: 2230534.532374093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3733679.2359999437,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3733491.2000000034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6153.889797103637,
            "unit": "ns/iter",
            "extra": "iterations: 113654\ncpu: 6153.635595755565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 40337.44156740717,
            "unit": "ns/iter",
            "extra": "iterations: 17379\ncpu: 40333.8569537947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30557.105444853023,
            "unit": "ns/iter",
            "extra": "iterations: 22884\ncpu: 30555.886208704753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30461.40860028055,
            "unit": "ns/iter",
            "extra": "iterations: 22976\ncpu: 30461.041956824625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24382.166736401563,
            "unit": "ns/iter",
            "extra": "iterations: 28680\ncpu: 24381.485355648532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 186247.28180610272,
            "unit": "ns/iter",
            "extra": "iterations: 3765\ncpu: 186241.9654714469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 311092.25377776456,
            "unit": "ns/iter",
            "extra": "iterations: 2250\ncpu: 311078.88888888306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 75797.01441362673,
            "unit": "ns/iter",
            "extra": "iterations: 9158\ncpu: 75794.34374317637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 75282.66799654887,
            "unit": "ns/iter",
            "extra": "iterations: 9274\ncpu: 75280.2997627776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 76035.77122411542,
            "unit": "ns/iter",
            "extra": "iterations: 9223\ncpu: 76034.50070475898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 152181.09629147037,
            "unit": "ns/iter",
            "extra": "iterations: 4611\ncpu: 152176.3391888974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 148961.57261498657,
            "unit": "ns/iter",
            "extra": "iterations: 4696\ncpu: 148957.41056218155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 48374.438342903224,
            "unit": "ns/iter",
            "extra": "iterations: 14459\ncpu: 48372.98568365759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 232999.50271002858,
            "unit": "ns/iter",
            "extra": "iterations: 2952\ncpu: 232992.31029810148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 190883.38803933348,
            "unit": "ns/iter",
            "extra": "iterations: 3662\ncpu: 190877.36209721668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 191755.47770177713,
            "unit": "ns/iter",
            "extra": "iterations: 3655\ncpu: 191744.54172366697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 192034.25102768803,
            "unit": "ns/iter",
            "extra": "iterations: 3649\ncpu: 192024.7465058918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 341054.8692682746,
            "unit": "ns/iter",
            "extra": "iterations: 2050\ncpu: 341043.0243902475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1324530.0041928606,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1324459.5387840646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1106889.4193037604,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1106856.012658209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1104141.4856688124,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1104125.3184713293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1106021.566455677,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1105986.5506329068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 716509.2709611569,
            "unit": "ns/iter",
            "extra": "iterations: 978\ncpu: 716487.6278118583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1098242.8871473097,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1098176.3322884038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 48586.133370458956,
            "unit": "ns/iter",
            "extra": "iterations: 14366\ncpu: 48584.19184184935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 239729.85640850858,
            "unit": "ns/iter",
            "extra": "iterations: 2918\ncpu: 239722.54969157244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 194501.85765915544,
            "unit": "ns/iter",
            "extra": "iterations: 3597\ncpu: 194495.74645537653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 193042.83829201307,
            "unit": "ns/iter",
            "extra": "iterations: 3630\ncpu: 193033.85674931106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 193421.4109171495,
            "unit": "ns/iter",
            "extra": "iterations: 3609\ncpu: 193412.99528955246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 356230.33512196364,
            "unit": "ns/iter",
            "extra": "iterations: 2050\ncpu: 356217.4146341451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1326249.5939278367,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1326201.328273239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1114021.114649679,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1113973.885350323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1104976.55608219,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1104976.1453396373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1109971.152139475,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1109910.1426307275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 715688.1024590479,
            "unit": "ns/iter",
            "extra": "iterations: 976\ncpu: 715663.8319672021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1100220.7578615956,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1100178.4591194992 ns\nthreads: 1"
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
        "date": 1702382303000,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17042.051424974332,
            "unit": "ns/iter",
            "extra": "iterations: 42878\ncpu: 17041.62041139979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 152515.1595157529,
            "unit": "ns/iter",
            "extra": "iterations: 5617\ncpu: 152509.38223250845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 288716.2435940097,
            "unit": "ns/iter",
            "extra": "iterations: 3005\ncpu: 288708.5191347753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 423335.25662413344,
            "unit": "ns/iter",
            "extra": "iterations: 2038\ncpu: 423330.96172718366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 565314.7580231084,
            "unit": "ns/iter",
            "extra": "iterations: 1558\ncpu: 565290.3080872911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 565219.3149999789,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 565221.9 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 673529.7885881246,
            "unit": "ns/iter",
            "extra": "iterations: 1367\ncpu: 673520.1901975126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 787466.6152542115,
            "unit": "ns/iter",
            "extra": "iterations: 1180\ncpu: 787438.6440677966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 898093.1006776247,
            "unit": "ns/iter",
            "extra": "iterations: 1033\ncpu: 898065.9244917709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13131.702030002396,
            "unit": "ns/iter",
            "extra": "iterations: 53596\ncpu: 13124.309649973886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10830.937534909946,
            "unit": "ns/iter",
            "extra": "iterations: 64452\ncpu: 10830.317135232432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10771.58725706299,
            "unit": "ns/iter",
            "extra": "iterations: 64883\ncpu: 10771.11724180447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10807.484411691688,
            "unit": "ns/iter",
            "extra": "iterations: 64728\ncpu: 10807.278148560119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18316.778320337842,
            "unit": "ns/iter",
            "extra": "iterations: 38091\ncpu: 18316.12716914754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 70124.28893830652,
            "unit": "ns/iter",
            "extra": "iterations: 12141\ncpu: 70122.59286714428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 366004.9297274239,
            "unit": "ns/iter",
            "extra": "iterations: 2348\ncpu: 365988.71379897755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 290410.58773711364,
            "unit": "ns/iter",
            "extra": "iterations: 2952\ncpu: 290405.72493224905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 287574.36189515854,
            "unit": "ns/iter",
            "extra": "iterations: 2976\ncpu: 287562.19758064585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 288903.1314189281,
            "unit": "ns/iter",
            "extra": "iterations: 2960\ncpu: 288886.65540540527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 562994.8260000219,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 562957.0999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4783538.710659849,
            "unit": "ns/iter",
            "extra": "iterations: 197\ncpu: 4783374.619289348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3824365.4564313143,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3824184.2323651426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3855308.7136930376,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3855157.6763485405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3872982.616666576,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3872882.916666661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2258204.4587378846,
            "unit": "ns/iter",
            "extra": "iterations: 412\ncpu: 2258124.9999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3753821.2631579605,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3753691.0931174057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 15051477.112675956,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 15050942.253521157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6608908.729999712,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6608692.000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18742081.859648693,
            "unit": "ns/iter",
            "extra": "iterations: 57\ncpu: 18741110.52631577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 75532.46301370134,
            "unit": "ns/iter",
            "extra": "iterations: 11315\ncpu: 75529.73044631038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 391814.54479308624,
            "unit": "ns/iter",
            "extra": "iterations: 2199\ncpu: 391812.77853569743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 314019.134432241,
            "unit": "ns/iter",
            "extra": "iterations: 2730\ncpu: 314006.4835164831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 314993.05040469987,
            "unit": "ns/iter",
            "extra": "iterations: 2718\ncpu: 314985.2097130261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 310685.0083484546,
            "unit": "ns/iter",
            "extra": "iterations: 2755\ncpu: 310671.2885662426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 556514.1199999744,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 556510.5000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4811458.621761713,
            "unit": "ns/iter",
            "extra": "iterations: 193\ncpu: 4811323.834196875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3890545.245833484,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3890455.833333324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3906300.569037768,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3906102.0920502204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3913479.865546191,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3913492.8571428596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2293477.479012392,
            "unit": "ns/iter",
            "extra": "iterations: 405\ncpu: 2293414.0740740765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3808120.52066113,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3807969.8347107572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15348421.214285476,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 15348077.142857214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6576148.569999987,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6575860.0000000205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 67440.49030823245,
            "unit": "ns/iter",
            "extra": "iterations: 12588\ncpu: 67438.98951382283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 353328.95053586963,
            "unit": "ns/iter",
            "extra": "iterations: 2426\ncpu: 353314.01483924105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 294711.59366486117,
            "unit": "ns/iter",
            "extra": "iterations: 2936\ncpu: 294706.4373296997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 283052.7266977321,
            "unit": "ns/iter",
            "extra": "iterations: 3004\ncpu: 283031.55792277015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 275919.52646869613,
            "unit": "ns/iter",
            "extra": "iterations: 3098\ncpu: 275908.457069077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 527831.357000025,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 527803.0999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4774458.082051052,
            "unit": "ns/iter",
            "extra": "iterations: 195\ncpu: 4774387.179487204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3851809.9423869015,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3851640.3292181203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3878132.688796578,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3877929.460580919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3877001.452282036,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3876930.2904564366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2264695.4939466496,
            "unit": "ns/iter",
            "extra": "iterations: 413\ncpu: 2264590.556900728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3760973.9475806416,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3760858.0645161504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6162.08417860633,
            "unit": "ns/iter",
            "extra": "iterations: 113770\ncpu: 6161.73507954645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 40878.57807502107,
            "unit": "ns/iter",
            "extra": "iterations: 17195\ncpu: 40877.7551613843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 33272.75591417522,
            "unit": "ns/iter",
            "extra": "iterations: 21812\ncpu: 33270.90133871281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 33182.760868605386,
            "unit": "ns/iter",
            "extra": "iterations: 22657\ncpu: 33181.46268261462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24509.552219917703,
            "unit": "ns/iter",
            "extra": "iterations: 28447\ncpu: 24509.19604879246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 183025.9963360415,
            "unit": "ns/iter",
            "extra": "iterations: 3821\ncpu: 183022.21931431565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 315681.1608361741,
            "unit": "ns/iter",
            "extra": "iterations: 2344\ncpu: 315664.1211604074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 77213.62110707855,
            "unit": "ns/iter",
            "extra": "iterations: 9087\ncpu: 77211.34587872702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 76619.47299813399,
            "unit": "ns/iter",
            "extra": "iterations: 9129\ncpu: 76616.37638295651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 77232.76556979121,
            "unit": "ns/iter",
            "extra": "iterations: 9056\ncpu: 77229.15194346332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 161196.23779926723,
            "unit": "ns/iter",
            "extra": "iterations: 4344\ncpu: 161196.91528545143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 150986.15047495638,
            "unit": "ns/iter",
            "extra": "iterations: 4632\ncpu: 150982.42659758258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 48676.379228569225,
            "unit": "ns/iter",
            "extra": "iterations: 14337\ncpu: 48674.36004742972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 238562.82134334385,
            "unit": "ns/iter",
            "extra": "iterations: 2933\ncpu: 238557.483804978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 193713.04826628853,
            "unit": "ns/iter",
            "extra": "iterations: 3605\ncpu: 193713.92510402043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 192924.4882629186,
            "unit": "ns/iter",
            "extra": "iterations: 3621\ncpu: 192919.9944766649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 194088.31578947397,
            "unit": "ns/iter",
            "extra": "iterations: 3610\ncpu: 194083.7950138506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 341877.92563600466,
            "unit": "ns/iter",
            "extra": "iterations: 2044\ncpu: 341869.0313111525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1350540.2553191946,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1350522.0502901315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1126770.628526583,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1126741.8495297811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1120570.5813204034,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1120548.1481481495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1128550.353503128,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1128493.6305732618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 722450.9545454535,
            "unit": "ns/iter",
            "extra": "iterations: 968\ncpu: 722440.1859504167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1115547.219745234,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1115552.2292993474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 48707.44885847867,
            "unit": "ns/iter",
            "extra": "iterations: 14323\ncpu: 48705.976401591855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 238729.41100101397,
            "unit": "ns/iter",
            "extra": "iterations: 2927\ncpu: 238724.66689443306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 196471.73120088663,
            "unit": "ns/iter",
            "extra": "iterations: 3564\ncpu: 196470.45454545532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 193628.31364902732,
            "unit": "ns/iter",
            "extra": "iterations: 3590\ncpu: 193629.08077994472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 195286.27945282066,
            "unit": "ns/iter",
            "extra": "iterations: 3582\ncpu: 195279.56448911206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 337897.9560598803,
            "unit": "ns/iter",
            "extra": "iterations: 2071\ncpu: 337890.342829553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1342598.1992337487,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1342531.8007662669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1123273.2371794714,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1123248.3974358987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1118878.3487999898,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1118804.3200000038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1136075.768488756,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1136017.3633440495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 717957.0819671967,
            "unit": "ns/iter",
            "extra": "iterations: 976\ncpu: 717948.2581967172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1113313.7551669446,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1113306.6772655153 ns\nthreads: 1"
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
          "id": "7d92f1613fa4ae9edff977fb9a4ee38db56bedcc",
          "message": "Enable another Clangs : try",
          "timestamp": "2023-12-12T16:01:28+03:00",
          "tree_id": "088c43bf274cde79393a5114d044a347c612360f",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/7d92f1613fa4ae9edff977fb9a4ee38db56bedcc"
        },
        "date": 1702387024388,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16265.555743085064,
            "unit": "ns/iter",
            "extra": "iterations: 42660\ncpu: 16265.661040787623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 153464.55441256223,
            "unit": "ns/iter",
            "extra": "iterations: 5541\ncpu: 153457.89568669916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 291170.5596115211,
            "unit": "ns/iter",
            "extra": "iterations: 2986\ncpu: 291166.51038178167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 426940.5456339311,
            "unit": "ns/iter",
            "extra": "iterations: 2027\ncpu: 426942.67390231875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 566972.1268608316,
            "unit": "ns/iter",
            "extra": "iterations: 1545\ncpu: 566960.9708737866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 569133.9039999548,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 569136.7999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 677525.7830882542,
            "unit": "ns/iter",
            "extra": "iterations: 1360\ncpu: 677516.6911764705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 789307.9957410484,
            "unit": "ns/iter",
            "extra": "iterations: 1174\ncpu: 789303.4923339013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 924223.331074521,
            "unit": "ns/iter",
            "extra": "iterations: 1033\ncpu: 924184.414327203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13255.467544980493,
            "unit": "ns/iter",
            "extra": "iterations: 50855\ncpu: 13255.510765903051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10999.734200483204,
            "unit": "ns/iter",
            "extra": "iterations: 64195\ncpu: 10998.8534932627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10889.350092559183,
            "unit": "ns/iter",
            "extra": "iterations: 64283\ncpu: 10888.979979154667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10965.400844938617,
            "unit": "ns/iter",
            "extra": "iterations: 63910\ncpu: 10964.919417931465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18319.42226758897,
            "unit": "ns/iter",
            "extra": "iterations: 38208\ncpu: 18318.574644053584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 69275.48637723342,
            "unit": "ns/iter",
            "extra": "iterations: 12369\ncpu: 69274.16120947525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 357221.4912426832,
            "unit": "ns/iter",
            "extra": "iterations: 2398\ncpu: 357211.7180984151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 287603.51162790356,
            "unit": "ns/iter",
            "extra": "iterations: 2967\ncpu: 287595.2477249748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 286071.78391959704,
            "unit": "ns/iter",
            "extra": "iterations: 2985\ncpu: 286062.6130653262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 284808.24184963445,
            "unit": "ns/iter",
            "extra": "iterations: 3006\ncpu: 284790.25282767793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 565089.9810000282,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 565043.1000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4744626.948979426,
            "unit": "ns/iter",
            "extra": "iterations: 196\ncpu: 4744286.224489805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3858692.3057851507,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3858616.9421487614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3842993.454545348,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3842836.7768595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3867248.8347106646,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3867071.9008264523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2245665.842615045,
            "unit": "ns/iter",
            "extra": "iterations: 413\ncpu: 2245613.8014527867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3756111.387096714,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3756034.6774193514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14930598.99999954,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14930549.295774627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6341767.019999907,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6341724.999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18580745.157895476,
            "unit": "ns/iter",
            "extra": "iterations: 57\ncpu: 18580149.122806996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 76037.46298597942,
            "unit": "ns/iter",
            "extra": "iterations: 11266\ncpu: 76033.58778625944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 387104.2288668977,
            "unit": "ns/iter",
            "extra": "iterations: 2224\ncpu: 387101.39388489316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 312652.6105839576,
            "unit": "ns/iter",
            "extra": "iterations: 2740\ncpu: 312651.0218978101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 310894.2831216092,
            "unit": "ns/iter",
            "extra": "iterations: 2755\ncpu: 310886.3883847535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 308673.4348452193,
            "unit": "ns/iter",
            "extra": "iterations: 2778\ncpu: 308664.2188624899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 557221.7339999953,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 557225.4000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4823711.567708481,
            "unit": "ns/iter",
            "extra": "iterations: 192\ncpu: 4823507.291666659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3894908.8749999325,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3894689.5833333293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3879815.460580825,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3879683.4024896384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3935173.9916665927,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3935070.833333339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2265953.1893204753,
            "unit": "ns/iter",
            "extra": "iterations: 412\ncpu: 2265963.5922330087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3780641.227642145,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3780549.593495934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15217550.985714266,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 15217314.28571432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6609000.380000225,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6608871.999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 67625.06929121392,
            "unit": "ns/iter",
            "extra": "iterations: 12599\ncpu: 67625.31153266139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 350700.6154786176,
            "unit": "ns/iter",
            "extra": "iterations: 2455\ncpu: 350694.29735234147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 281392.5759659402,
            "unit": "ns/iter",
            "extra": "iterations: 3054\ncpu: 281390.70072036714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 281770.67607482604,
            "unit": "ns/iter",
            "extra": "iterations: 3047\ncpu: 281763.2753528053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 275265.6113074227,
            "unit": "ns/iter",
            "extra": "iterations: 3113\ncpu: 275245.7757789911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 534707.5519999863,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 534690.4000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4767437.530612327,
            "unit": "ns/iter",
            "extra": "iterations: 196\ncpu: 4767235.2040816145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3860578.685950435,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3860528.09917356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3840243.5206611874,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3839985.5371900834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3872759.5435683914,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3872675.933609955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2245744.397590355,
            "unit": "ns/iter",
            "extra": "iterations: 415\ncpu: 2245695.903614471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3758101.625000028,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3757845.564516129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6149.620911929093,
            "unit": "ns/iter",
            "extra": "iterations: 113715\ncpu: 6149.414764982656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 40588.38283291824,
            "unit": "ns/iter",
            "extra": "iterations: 17219\ncpu: 40585.40565654209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 33188.63851718796,
            "unit": "ns/iter",
            "extra": "iterations: 21149\ncpu: 33188.03725944492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 32127.493347404466,
            "unit": "ns/iter",
            "extra": "iterations: 21796\ncpu: 32125.550559735508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24469.48535183529,
            "unit": "ns/iter",
            "extra": "iterations: 28536\ncpu: 24468.818334734922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 183634.73550248594,
            "unit": "ns/iter",
            "extra": "iterations: 3811\ncpu: 183622.04145893556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 315987.3414414288,
            "unit": "ns/iter",
            "extra": "iterations: 2220\ncpu: 315978.7387387409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 76867.770856144,
            "unit": "ns/iter",
            "extra": "iterations: 9134\ncpu: 76862.82023210036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 76326.66384456582,
            "unit": "ns/iter",
            "extra": "iterations: 9213\ncpu: 76323.3474438302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 76743.67584769042,
            "unit": "ns/iter",
            "extra": "iterations: 9113\ncpu: 76745.08943267813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 160196.155978014,
            "unit": "ns/iter",
            "extra": "iterations: 4366\ncpu: 160188.75400824627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 150957.02562446153,
            "unit": "ns/iter",
            "extra": "iterations: 4644\ncpu: 150957.96726959414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 48774.01624372548,
            "unit": "ns/iter",
            "extra": "iterations: 14344\ncpu: 48771.77216954845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 241126.02688547396,
            "unit": "ns/iter",
            "extra": "iterations: 2864\ncpu: 241127.30446927802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 194336.18505039415,
            "unit": "ns/iter",
            "extra": "iterations: 3572\ncpu: 194325.33594625126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 191865.00495731406,
            "unit": "ns/iter",
            "extra": "iterations: 3631\ncpu: 191866.18011567107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 193719.08220315125,
            "unit": "ns/iter",
            "extra": "iterations: 3613\ncpu: 193699.64018820922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 341705.5946210438,
            "unit": "ns/iter",
            "extra": "iterations: 2045\ncpu: 341703.3740831278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1345382.7115385437,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1345289.8076922866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1118462.446400008,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1118434.08000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1118204.755980884,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1118159.8086124498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1120417.6714742996,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1120402.243589757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 717677.8278688231,
            "unit": "ns/iter",
            "extra": "iterations: 976\ncpu: 717667.315573774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1112029.7199367695,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1112003.322784806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 48982.894232116996,
            "unit": "ns/iter",
            "extra": "iterations: 14286\ncpu: 48983.13733725336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 236894.376482551,
            "unit": "ns/iter",
            "extra": "iterations: 2951\ncpu: 236895.56082683674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 196908.37704455035,
            "unit": "ns/iter",
            "extra": "iterations: 3546\ncpu: 196906.37337845325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 195333.6264319595,
            "unit": "ns/iter",
            "extra": "iterations: 3579\ncpu: 195334.84213467405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 196412.57002524848,
            "unit": "ns/iter",
            "extra": "iterations: 3563\ncpu: 196411.0300308749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 336053.6264423239,
            "unit": "ns/iter",
            "extra": "iterations: 2080\ncpu: 336051.2019230787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1338170.4482758786,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1338159.195402296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1119815.159999962,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1119806.7200000195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1107611.8668779852,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1107591.6006339178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1117101.3827751712,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1117092.344497597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 718698.6022494435,
            "unit": "ns/iter",
            "extra": "iterations: 978\ncpu: 718686.9120654408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1106711.7104430026,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1106701.4240506403 ns\nthreads: 1"
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
        "date": 1702388116309,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16168.78339474878,
            "unit": "ns/iter",
            "extra": "iterations: 43420\ncpu: 16168.54214647628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 152181.5801869757,
            "unit": "ns/iter",
            "extra": "iterations: 5562\ncpu: 152173.4448040273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 289792.4685524113,
            "unit": "ns/iter",
            "extra": "iterations: 3005\ncpu: 289786.2895174709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 424567.9894631273,
            "unit": "ns/iter",
            "extra": "iterations: 1993\ncpu: 424527.1951831411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 565873.5711513752,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 565845.9896507114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 565339.6270000144,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 565333.0999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 674084.6980993993,
            "unit": "ns/iter",
            "extra": "iterations: 1368\ncpu: 674080.6286549708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 786738.4966101747,
            "unit": "ns/iter",
            "extra": "iterations: 1180\ncpu: 786715.0847457629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 894187.6512524135,
            "unit": "ns/iter",
            "extra": "iterations: 1038\ncpu: 894181.0211946057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12975.240725626905,
            "unit": "ns/iter",
            "extra": "iterations: 53912\ncpu: 12974.280308651132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10758.663642654168,
            "unit": "ns/iter",
            "extra": "iterations: 65035\ncpu: 10758.591527638973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10770.953962784322,
            "unit": "ns/iter",
            "extra": "iterations: 65295\ncpu: 10770.662378436315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10808.54887962219,
            "unit": "ns/iter",
            "extra": "iterations: 61631\ncpu: 10807.755837159892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18125.68807624568,
            "unit": "ns/iter",
            "extra": "iterations: 38612\ncpu: 18125.595669739967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 69835.84346269605,
            "unit": "ns/iter",
            "extra": "iterations: 12291\ncpu: 69833.52046212682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 368400.972496797,
            "unit": "ns/iter",
            "extra": "iterations: 2327\ncpu: 368402.7503223041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 294241.14089345606,
            "unit": "ns/iter",
            "extra": "iterations: 2910\ncpu: 294232.19931271474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 296465.06646005256,
            "unit": "ns/iter",
            "extra": "iterations: 2904\ncpu: 296459.8140495864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 292885.5395188859,
            "unit": "ns/iter",
            "extra": "iterations: 2910\ncpu: 292883.5395189011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 568211.3459999982,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 568215.0999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4710942.091370377,
            "unit": "ns/iter",
            "extra": "iterations: 197\ncpu: 4710745.177664984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3826593.201646024,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3826437.4485596702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3854060.2603307036,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3854078.5123967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3863028.751037193,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3862914.9377593496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2268728.657701717,
            "unit": "ns/iter",
            "extra": "iterations: 409\ncpu: 2268703.1784841074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3762058.125506071,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3762040.485829951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 15096682.285714483,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 15096222.857142853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6497551.059999865,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6497388.000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18793313.84210465,
            "unit": "ns/iter",
            "extra": "iterations: 57\ncpu: 18792940.350877218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 75825.69542786138,
            "unit": "ns/iter",
            "extra": "iterations: 11242\ncpu: 75822.7450631562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 398978.1970329204,
            "unit": "ns/iter",
            "extra": "iterations: 2157\ncpu: 398955.3546592492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 318132.4918397674,
            "unit": "ns/iter",
            "extra": "iterations: 2696\ncpu: 318134.1617210662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 321863.0093949568,
            "unit": "ns/iter",
            "extra": "iterations: 2661\ncpu: 321854.0398346467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 318556.47704185656,
            "unit": "ns/iter",
            "extra": "iterations: 2461\ncpu: 318558.30963023106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 567761.7089999671,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 567733.3999999946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4792562.335051726,
            "unit": "ns/iter",
            "extra": "iterations: 194\ncpu: 4792584.536082458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3896226.897436065,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3896191.452991451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3889630.116666609,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3889565.833333345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3914504.9285713234,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3914521.848739492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2318035.9081884963,
            "unit": "ns/iter",
            "extra": "iterations: 403\ncpu: 2317896.7741935574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3797075.264227663,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3797092.276422763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15408287.333332941,
            "unit": "ns/iter",
            "extra": "iterations: 69\ncpu: 15407542.028985543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6640469.860000167,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6640505.000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 67183.32487349906,
            "unit": "ns/iter",
            "extra": "iterations: 12648\ncpu: 67180.96932321307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 360211.72554003866,
            "unit": "ns/iter",
            "extra": "iterations: 2361\ncpu: 360213.51122405607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 288633.25529057375,
            "unit": "ns/iter",
            "extra": "iterations: 2977\ncpu: 288592.57641921315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 287664.7762144148,
            "unit": "ns/iter",
            "extra": "iterations: 2985\ncpu: 287658.79396984814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 284972.3311081497,
            "unit": "ns/iter",
            "extra": "iterations: 2996\ncpu: 284970.1602136172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 535124.6130000504,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 535113.1999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4767981.622449019,
            "unit": "ns/iter",
            "extra": "iterations: 196\ncpu: 4767817.857142868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3850341.615702511,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3850221.4876033072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3845967.305785028,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3845983.0578512433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3872128.479166766,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3871970.833333342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2263699.165450097,
            "unit": "ns/iter",
            "extra": "iterations: 411\ncpu: 2263709.7323600915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3752158.935483862,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3752128.6290322635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6062.083678260854,
            "unit": "ns/iter",
            "extra": "iterations: 115000\ncpu: 6062.11739130431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 40639.124702603054,
            "unit": "ns/iter",
            "extra": "iterations: 17233\ncpu: 40638.57134567404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 32155.63002026565,
            "unit": "ns/iter",
            "extra": "iterations: 21712\ncpu: 32153.615512159264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 33328.38702841989,
            "unit": "ns/iter",
            "extra": "iterations: 21709\ncpu: 33327.62448753994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24697.011801177254,
            "unit": "ns/iter",
            "extra": "iterations: 28387\ncpu: 24695.790326557897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 183007.0167714816,
            "unit": "ns/iter",
            "extra": "iterations: 3816\ncpu: 183004.37631027435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 314362.95775280456,
            "unit": "ns/iter",
            "extra": "iterations: 2225\ncpu: 314354.8314606728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 76569.53094249024,
            "unit": "ns/iter",
            "extra": "iterations: 9146\ncpu: 76567.5814563756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 76080.26859009599,
            "unit": "ns/iter",
            "extra": "iterations: 9185\ncpu: 76077.94229722385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 76814.48141593403,
            "unit": "ns/iter",
            "extra": "iterations: 9040\ncpu: 76806.38274336253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 160959.3317241355,
            "unit": "ns/iter",
            "extra": "iterations: 4350\ncpu: 160954.18390804474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 150688.37932515668,
            "unit": "ns/iter",
            "extra": "iterations: 4653\ncpu: 150679.21770900593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 48058.13348011879,
            "unit": "ns/iter",
            "extra": "iterations: 14534\ncpu: 48056.880418328685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 235279.11197042052,
            "unit": "ns/iter",
            "extra": "iterations: 2974\ncpu: 235251.8157363808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 192506.90364440432,
            "unit": "ns/iter",
            "extra": "iterations: 3622\ncpu: 192501.57371617746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 192573.81466226926,
            "unit": "ns/iter",
            "extra": "iterations: 3642\ncpu: 192562.46567819885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 194878.8344846566,
            "unit": "ns/iter",
            "extra": "iterations: 3619\ncpu: 194874.41282122282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 337933.646176192,
            "unit": "ns/iter",
            "extra": "iterations: 2066\ncpu: 337901.98451113113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1338218.6959847524,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1338197.8967495211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1120630.4022435958,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1120636.2179487098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1116194.2312600275,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1116111.0047846902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1120130.0911999168,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1120106.3999999862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 723334.0371516733,
            "unit": "ns/iter",
            "extra": "iterations: 969\ncpu: 723258.2043343603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1107779.0857142652,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1107750.4761904797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 48486.93706633478,
            "unit": "ns/iter",
            "extra": "iterations: 14412\ncpu: 48483.24313072436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 237383.4837398381,
            "unit": "ns/iter",
            "extra": "iterations: 2952\ncpu: 237376.6260162567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 196341.85978168616,
            "unit": "ns/iter",
            "extra": "iterations: 3573\ncpu: 196323.3697173228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 195154.6475501066,
            "unit": "ns/iter",
            "extra": "iterations: 3592\ncpu: 195146.96547884043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 196503.9789798228,
            "unit": "ns/iter",
            "extra": "iterations: 3568\ncpu: 196494.53475336364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 336527.33957734663,
            "unit": "ns/iter",
            "extra": "iterations: 2082\ncpu: 336515.22574447247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1335414.2982792452,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1335348.9483747794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1115238.261146549,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1115171.4968152905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1113204.1528661905,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1113167.993630585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1121778.7038834717,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1121650.9708737775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 719223.6779834942,
            "unit": "ns/iter",
            "extra": "iterations: 972\ncpu: 719202.4691357901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1110811.992076121,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1110715.2139461166 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}