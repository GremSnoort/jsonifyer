window.BENCHMARK_DATA = {
  "lastUpdate": 1702382304331,
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
      }
    ]
  }
}