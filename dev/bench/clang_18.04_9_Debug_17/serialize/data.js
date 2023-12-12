window.BENCHMARK_DATA = {
  "lastUpdate": 1702392447053,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-9 18.04 Debug c++-17": [
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
        "date": 1702392446561,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 9558.771894232372,
            "unit": "ns/iter",
            "extra": "iterations: 73444\ncpu: 9558.583410489626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 110798.24335089866,
            "unit": "ns/iter",
            "extra": "iterations: 7783\ncpu: 110794.79635102148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 212133.17545566204,
            "unit": "ns/iter",
            "extra": "iterations: 4115\ncpu: 212127.16889428915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 319590.78465529514,
            "unit": "ns/iter",
            "extra": "iterations: 2698\ncpu: 319581.8754633061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 414372.4673807117,
            "unit": "ns/iter",
            "extra": "iterations: 2054\ncpu: 414351.5579357354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 515046.9384615511,
            "unit": "ns/iter",
            "extra": "iterations: 1690\ncpu: 515029.88165680453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 615106.5211863985,
            "unit": "ns/iter",
            "extra": "iterations: 1416\ncpu: 615084.4632768362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 573630.8850000568,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 573630.1999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 654921.5259999528,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 654885.0000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 7327.553612590603,
            "unit": "ns/iter",
            "extra": "iterations: 95444\ncpu: 7327.345878211295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 6330.790020195549,
            "unit": "ns/iter",
            "extra": "iterations: 115373\ncpu: 6330.641484576125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 6145.045947653581,
            "unit": "ns/iter",
            "extra": "iterations: 113934\ncpu: 6144.769778994851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 6093.203271393431,
            "unit": "ns/iter",
            "extra": "iterations: 115058\ncpu: 6093.046115871988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 10504.762916515048,
            "unit": "ns/iter",
            "extra": "iterations: 66504\ncpu: 10504.440334415971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 57863.93659901968,
            "unit": "ns/iter",
            "extra": "iterations: 14290\ncpu: 57861.287613715875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 224515.85428194742,
            "unit": "ns/iter",
            "extra": "iterations: 3795\ncpu: 224501.76548089602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 180128.38604650885,
            "unit": "ns/iter",
            "extra": "iterations: 4730\ncpu: 180119.61945031682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 181893.18701798923,
            "unit": "ns/iter",
            "extra": "iterations: 4668\ncpu: 181884.76863753167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 184229.46510621064,
            "unit": "ns/iter",
            "extra": "iterations: 4614\ncpu: 184219.15908105788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 413959.3693479302,
            "unit": "ns/iter",
            "extra": "iterations: 2101\ncpu: 413938.17229890387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3387508.285198726,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3387187.364620938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2786209.2844309937,
            "unit": "ns/iter",
            "extra": "iterations: 334\ncpu: 2786029.3413173626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2746400.3617647933,
            "unit": "ns/iter",
            "extra": "iterations: 340\ncpu: 2746113.2352941153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2777721.997041527,
            "unit": "ns/iter",
            "extra": "iterations: 338\ncpu: 2777612.130177519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1692243.0036362873,
            "unit": "ns/iter",
            "extra": "iterations: 550\ncpu: 1692145.6363636365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2689831.7623188607,
            "unit": "ns/iter",
            "extra": "iterations: 345\ncpu: 2689695.362318841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 11422556.247312449,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 11421330.107526865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6625923.583333323,
            "unit": "ns/iter",
            "extra": "iterations: 144\ncpu: 6625331.944444454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 13407403.75949396,
            "unit": "ns/iter",
            "extra": "iterations: 79\ncpu: 13406817.721518997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 53741.08370244759,
            "unit": "ns/iter",
            "extra": "iterations: 15352\ncpu: 53738.74413757179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 238560.67075549063,
            "unit": "ns/iter",
            "extra": "iterations: 3587\ncpu: 238549.79091162494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 186419.5990390895,
            "unit": "ns/iter",
            "extra": "iterations: 4579\ncpu: 186414.3699497705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 184437.71928691972,
            "unit": "ns/iter",
            "extra": "iterations: 4656\ncpu: 184433.29037800696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 189049.19052888447,
            "unit": "ns/iter",
            "extra": "iterations: 4519\ncpu: 189044.10267758407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 417570.29267115454,
            "unit": "ns/iter",
            "extra": "iterations: 2074\ncpu: 417564.1755062686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3365975.1992754242,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3365821.3768115817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2823518.21148024,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2823379.154078556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2776632.044510221,
            "unit": "ns/iter",
            "extra": "iterations: 337\ncpu: 2776587.8338278974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2796673.149253623,
            "unit": "ns/iter",
            "extra": "iterations: 335\ncpu: 2796615.2238805853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1695609.779197219,
            "unit": "ns/iter",
            "extra": "iterations: 548\ncpu: 1695587.7737226249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2707227.724637459,
            "unit": "ns/iter",
            "extra": "iterations: 345\ncpu: 2707135.0724637783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 11652490.20879061,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11652080.219780248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 6680125.595745002,
            "unit": "ns/iter",
            "extra": "iterations: 141\ncpu: 6679958.865248183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 53654.897029187894,
            "unit": "ns/iter",
            "extra": "iterations: 15383\ncpu: 53653.175583436154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 227092.83537235865,
            "unit": "ns/iter",
            "extra": "iterations: 3760\ncpu: 227086.99468084995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 183089.5584946306,
            "unit": "ns/iter",
            "extra": "iterations: 4650\ncpu: 183083.11827957036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 186184.55308965215,
            "unit": "ns/iter",
            "extra": "iterations: 4596\ncpu: 186174.67362924138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 184938.4832462934,
            "unit": "ns/iter",
            "extra": "iterations: 4596\ncpu: 184931.72323759747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 401087.4642857387,
            "unit": "ns/iter",
            "extra": "iterations: 2156\ncpu: 401078.66419294983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3386864.3927272307,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3386782.1818181584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2822275.239394099,
            "unit": "ns/iter",
            "extra": "iterations: 330\ncpu: 2822146.0606060717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2780182.534534502,
            "unit": "ns/iter",
            "extra": "iterations: 333\ncpu: 2780081.9819819727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2779380.259701258,
            "unit": "ns/iter",
            "extra": "iterations: 335\ncpu: 2779284.4776119576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1696458.2937955467,
            "unit": "ns/iter",
            "extra": "iterations: 548\ncpu: 1696411.8613138623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2721918.0847953404,
            "unit": "ns/iter",
            "extra": "iterations: 342\ncpu: 2721803.8011695966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3495.89221293853,
            "unit": "ns/iter",
            "extra": "iterations: 200358\ncpu: 3495.693708262216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 23359.217552288992,
            "unit": "ns/iter",
            "extra": "iterations: 29979\ncpu: 23358.374195270062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 18383.799921176542,
            "unit": "ns/iter",
            "extra": "iterations: 38060\ncpu: 18382.892800840877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 18492.61974574508,
            "unit": "ns/iter",
            "extra": "iterations: 39016\ncpu: 18491.985339347848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 14178.887266318505,
            "unit": "ns/iter",
            "extra": "iterations: 49373\ncpu: 14178.674579223645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 96085.63563976278,
            "unit": "ns/iter",
            "extra": "iterations: 7284\ncpu: 96082.38605161988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 217625.0687188865,
            "unit": "ns/iter",
            "extra": "iterations: 3216\ncpu: 217624.31592039956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 54475.74662715753,
            "unit": "ns/iter",
            "extra": "iterations: 12823\ncpu: 54472.57272089234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 55001.227733757216,
            "unit": "ns/iter",
            "extra": "iterations: 12620\ncpu: 54998.83518225021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 54552.28080430196,
            "unit": "ns/iter",
            "extra": "iterations: 12831\ncpu: 54551.11059153692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 118236.0999661062,
            "unit": "ns/iter",
            "extra": "iterations: 5902\ncpu: 118231.87055235576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 102582.35655857739,
            "unit": "ns/iter",
            "extra": "iterations: 6846\ncpu: 102580.44113350834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 31120.937150462785,
            "unit": "ns/iter",
            "extra": "iterations: 22530\ncpu: 31119.245450510694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 144604.3101239642,
            "unit": "ns/iter",
            "extra": "iterations: 4840\ncpu: 144601.85950413154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 116652.22721135076,
            "unit": "ns/iter",
            "extra": "iterations: 5924\ncpu: 116645.32410533268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 116749.07369124581,
            "unit": "ns/iter",
            "extra": "iterations: 5998\ncpu: 116742.49749916603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 119175.52891155433,
            "unit": "ns/iter",
            "extra": "iterations: 5880\ncpu: 119171.61564625915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 210309.95346742848,
            "unit": "ns/iter",
            "extra": "iterations: 3331\ncpu: 210304.98348843836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 959185.5386740264,
            "unit": "ns/iter",
            "extra": "iterations: 724\ncpu: 959161.7403314885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 787654.5824915508,
            "unit": "ns/iter",
            "extra": "iterations: 891\ncpu: 787619.8653198598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 779138.9464883005,
            "unit": "ns/iter",
            "extra": "iterations: 897\ncpu: 779091.6387959956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 781814.5613839787,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 781767.9687500055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 505107.2462093882,
            "unit": "ns/iter",
            "extra": "iterations: 1385\ncpu: 505100.0722021695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 762444.7751092253,
            "unit": "ns/iter",
            "extra": "iterations: 916\ncpu: 762434.4978165821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 30779.39228125692,
            "unit": "ns/iter",
            "extra": "iterations: 22698\ncpu: 30778.08176931899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 142681.99531855347,
            "unit": "ns/iter",
            "extra": "iterations: 4913\ncpu: 142678.93344188714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 116614.28057075433,
            "unit": "ns/iter",
            "extra": "iterations: 6027\ncpu: 116607.98075327503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 116006.56784588355,
            "unit": "ns/iter",
            "extra": "iterations: 6021\ncpu: 116002.39162929724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 117431.19306435889,
            "unit": "ns/iter",
            "extra": "iterations: 5998\ncpu: 117427.79259753245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 212024.226100163,
            "unit": "ns/iter",
            "extra": "iterations: 3295\ncpu: 212021.42640364036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 903448.2914508109,
            "unit": "ns/iter",
            "extra": "iterations: 772\ncpu: 903445.3367875703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 785450.070786533,
            "unit": "ns/iter",
            "extra": "iterations: 890\ncpu: 785406.6292134696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 779981.4075724751,
            "unit": "ns/iter",
            "extra": "iterations: 898\ncpu: 779945.3229398688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 785179.9629629777,
            "unit": "ns/iter",
            "extra": "iterations: 891\ncpu: 785107.8563411915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 504049.65492449235,
            "unit": "ns/iter",
            "extra": "iterations: 1391\ncpu: 504021.9985621888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 762996.1608315044,
            "unit": "ns/iter",
            "extra": "iterations: 914\ncpu: 762994.0919037181 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}