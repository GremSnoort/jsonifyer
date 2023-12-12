window.BENCHMARK_DATA = {
  "lastUpdate": 1702397911356,
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
          "id": "c1055272ad64f2314a237d4e8aa66cfea2a56aac",
          "message": "rm rdn",
          "timestamp": "2023-12-12T18:46:40+03:00",
          "tree_id": "a8ce2d06ccc561ccf79fea995e3abe4f5e35f6c2",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c1055272ad64f2314a237d4e8aa66cfea2a56aac"
        },
        "date": 1702397909400,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16400.547949386277,
            "unit": "ns/iter",
            "extra": "iterations: 42597\ncpu: 16400.53055379487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 157137.10554628348,
            "unit": "ns/iter",
            "extra": "iterations: 5391\ncpu: 157137.19161565573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 299260.1454670849,
            "unit": "ns/iter",
            "extra": "iterations: 2901\ncpu: 299259.80696311616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 441824.3640506279,
            "unit": "ns/iter",
            "extra": "iterations: 1975\ncpu: 441812.25316455704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 596099.6198402136,
            "unit": "ns/iter",
            "extra": "iterations: 1502\ncpu: 596088.4154460719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 583917.0309999986,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 583886.8000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 699753.3464151137,
            "unit": "ns/iter",
            "extra": "iterations: 1325\ncpu: 699747.0943396221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 811111.5170305464,
            "unit": "ns/iter",
            "extra": "iterations: 1145\ncpu: 811086.8995633193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 923617.8325024883,
            "unit": "ns/iter",
            "extra": "iterations: 1003\ncpu: 923611.1665004988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13138.465542894784,
            "unit": "ns/iter",
            "extra": "iterations: 53095\ncpu: 13138.448064789529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10931.599285914639,
            "unit": "ns/iter",
            "extra": "iterations: 64138\ncpu: 10931.574105834294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10874.712316419249,
            "unit": "ns/iter",
            "extra": "iterations: 64345\ncpu: 10874.650711010967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11067.60184046174,
            "unit": "ns/iter",
            "extra": "iterations: 64223\ncpu: 11067.480497641021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18418.299518813856,
            "unit": "ns/iter",
            "extra": "iterations: 38031\ncpu: 18418.408666614072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 69878.9311697863,
            "unit": "ns/iter",
            "extra": "iterations: 12233\ncpu: 69878.23918907877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 365817.07042253454,
            "unit": "ns/iter",
            "extra": "iterations: 2343\ncpu: 365810.3713188221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 291020.61802721827,
            "unit": "ns/iter",
            "extra": "iterations: 2940\ncpu: 291011.5306122453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 288149.1909616014,
            "unit": "ns/iter",
            "extra": "iterations: 2943\ncpu: 288145.4298335023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 286296.6723732834,
            "unit": "ns/iter",
            "extra": "iterations: 2979\ncpu: 286290.03021148074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 574063.3229999901,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 574040.3 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4830763.1718749935,
            "unit": "ns/iter",
            "extra": "iterations: 192\ncpu: 4830653.645833331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3916909.1428571157,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3916861.344537819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3979119.3433475853,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 3979117.596566523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3938021.2109704725,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3937910.126582285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2274022.269607884,
            "unit": "ns/iter",
            "extra": "iterations: 408\ncpu: 2274005.8823529407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3832796.136363599,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3832638.016528915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 15328062.171428364,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 15327648.571428552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6722920.469999849,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6722763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18930318.26785726,
            "unit": "ns/iter",
            "extra": "iterations: 56\ncpu: 18930212.499999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 75582.81305427555,
            "unit": "ns/iter",
            "extra": "iterations: 11276\ncpu: 75581.75771550195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 393172.60045766475,
            "unit": "ns/iter",
            "extra": "iterations: 2185\ncpu: 393169.1990846669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 313017.88093498675,
            "unit": "ns/iter",
            "extra": "iterations: 2738\ncpu: 313017.45799853816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 315575.836832403,
            "unit": "ns/iter",
            "extra": "iterations: 2715\ncpu: 315570.09208103194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 314289.48190127924,
            "unit": "ns/iter",
            "extra": "iterations: 2735\ncpu: 314285.4113345513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 572738.28000001,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 572727.3000000039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4892096.436841903,
            "unit": "ns/iter",
            "extra": "iterations: 190\ncpu: 4892085.789473704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3960960.7361703734,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3960883.4042552947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3999797.210300402,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 3999735.6223175963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3983651.589743771,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3983615.3846153943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2299417.92326728,
            "unit": "ns/iter",
            "extra": "iterations: 404\ncpu: 2299381.683168306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3868219.477178259,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3868176.7634854643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15453355.144927628,
            "unit": "ns/iter",
            "extra": "iterations: 69\ncpu: 15452895.652173933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6900888.060000056,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6900764.999999965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 67174.39755134289,
            "unit": "ns/iter",
            "extra": "iterations: 12660\ncpu: 67173.01737756723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 353700.3222866532,
            "unit": "ns/iter",
            "extra": "iterations: 2414\ncpu: 353694.7804473888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 281136.07081966946,
            "unit": "ns/iter",
            "extra": "iterations: 3050\ncpu: 281129.1475409835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 282059.52226988046,
            "unit": "ns/iter",
            "extra": "iterations: 3031\ncpu: 282058.7924777309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 277291.4569300539,
            "unit": "ns/iter",
            "extra": "iterations: 3088\ncpu: 277291.83937823866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 541616.7669999936,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 541602.0999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4888273.17801036,
            "unit": "ns/iter",
            "extra": "iterations: 191\ncpu: 4888146.073298423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3930995.9451478603,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3930952.32067511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3964433.4085106165,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3964384.6808510465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3943389.3417720525,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3943316.4556962186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2268027.0097561246,
            "unit": "ns/iter",
            "extra": "iterations: 410\ncpu: 2267993.1707317075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3848230.334710699,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3848001.6528925486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6086.320962294963,
            "unit": "ns/iter",
            "extra": "iterations: 114892\ncpu: 6086.197472408919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 39430.26960784396,
            "unit": "ns/iter",
            "extra": "iterations: 17748\ncpu: 39430.149876042306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 32068.201960964485,
            "unit": "ns/iter",
            "extra": "iterations: 21826\ncpu: 32068.49170713833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 32394.17264625872,
            "unit": "ns/iter",
            "extra": "iterations: 21657\ncpu: 32394.131227778416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24777.34566675078,
            "unit": "ns/iter",
            "extra": "iterations: 28189\ncpu: 24777.210968817526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 187077.82153351844,
            "unit": "ns/iter",
            "extra": "iterations: 3743\ncpu: 187075.554368151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 322469.614463382,
            "unit": "ns/iter",
            "extra": "iterations: 2171\ncpu: 322472.1326577597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 78362.03994165646,
            "unit": "ns/iter",
            "extra": "iterations: 8913\ncpu: 78359.87882867757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 78516.58512676372,
            "unit": "ns/iter",
            "extra": "iterations: 8875\ncpu: 78515.88732394473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 78431.45377210864,
            "unit": "ns/iter",
            "extra": "iterations: 8934\ncpu: 78429.5612267739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 162364.5515882163,
            "unit": "ns/iter",
            "extra": "iterations: 4313\ncpu: 162364.1085091567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 153766.86398594175,
            "unit": "ns/iter",
            "extra": "iterations: 4551\ncpu: 153766.24917600426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 49904.65553503062,
            "unit": "ns/iter",
            "extra": "iterations: 14074\ncpu: 49903.92923120594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 243010.98019458557,
            "unit": "ns/iter",
            "extra": "iterations: 2878\ncpu: 243007.67894370918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 198700.4939076206,
            "unit": "ns/iter",
            "extra": "iterations: 3529\ncpu: 198699.31992065598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 196529.98681626748,
            "unit": "ns/iter",
            "extra": "iterations: 3565\ncpu: 196527.124824682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 198127.19162185257,
            "unit": "ns/iter",
            "extra": "iterations: 3533\ncpu: 198128.41777526017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 347537.98061629396,
            "unit": "ns/iter",
            "extra": "iterations: 2012\ncpu: 347523.06163021736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1372645.1196079075,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1372603.1372548991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1146394.6196721601,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1146375.5737704942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1149464.8998357651,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1149414.449917893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1145885.1639344227,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1145833.7704917989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 729616.1593750127,
            "unit": "ns/iter",
            "extra": "iterations: 960\ncpu: 729591.1458333303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1137627.0569105432,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1137588.6178861845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 50119.11260841587,
            "unit": "ns/iter",
            "extra": "iterations: 13951\ncpu: 50119.410794925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 242644.56624005135,
            "unit": "ns/iter",
            "extra": "iterations: 2891\ncpu: 242643.27222413974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 199710.66809239425,
            "unit": "ns/iter",
            "extra": "iterations: 3507\ncpu: 199709.4382663225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 197701.47718900617,
            "unit": "ns/iter",
            "extra": "iterations: 3529\ncpu: 197698.44148483817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 199211.87617688434,
            "unit": "ns/iter",
            "extra": "iterations: 3505\ncpu: 199206.30527817152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 345018.1176760232,
            "unit": "ns/iter",
            "extra": "iterations: 2031\ncpu: 345014.2294436238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1363446.4093567063,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1363388.888888903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1149755.740131559,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1149693.9144736794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1217760.3306055341,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1217714.7299508995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1151568.3360655995,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1151523.770491793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 728480.42307694,
            "unit": "ns/iter",
            "extra": "iterations: 962\ncpu: 728463.409563411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1135845.6094002964,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1135832.7390599744 ns\nthreads: 1"
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
        "date": 1702397909400,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16400.547949386277,
            "unit": "ns/iter",
            "extra": "iterations: 42597\ncpu: 16400.53055379487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 157137.10554628348,
            "unit": "ns/iter",
            "extra": "iterations: 5391\ncpu: 157137.19161565573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 299260.1454670849,
            "unit": "ns/iter",
            "extra": "iterations: 2901\ncpu: 299259.80696311616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 441824.3640506279,
            "unit": "ns/iter",
            "extra": "iterations: 1975\ncpu: 441812.25316455704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 596099.6198402136,
            "unit": "ns/iter",
            "extra": "iterations: 1502\ncpu: 596088.4154460719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 583917.0309999986,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 583886.8000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 699753.3464151137,
            "unit": "ns/iter",
            "extra": "iterations: 1325\ncpu: 699747.0943396221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 811111.5170305464,
            "unit": "ns/iter",
            "extra": "iterations: 1145\ncpu: 811086.8995633193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 923617.8325024883,
            "unit": "ns/iter",
            "extra": "iterations: 1003\ncpu: 923611.1665004988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13138.465542894784,
            "unit": "ns/iter",
            "extra": "iterations: 53095\ncpu: 13138.448064789529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10931.599285914639,
            "unit": "ns/iter",
            "extra": "iterations: 64138\ncpu: 10931.574105834294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10874.712316419249,
            "unit": "ns/iter",
            "extra": "iterations: 64345\ncpu: 10874.650711010967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11067.60184046174,
            "unit": "ns/iter",
            "extra": "iterations: 64223\ncpu: 11067.480497641021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18418.299518813856,
            "unit": "ns/iter",
            "extra": "iterations: 38031\ncpu: 18418.408666614072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 69878.9311697863,
            "unit": "ns/iter",
            "extra": "iterations: 12233\ncpu: 69878.23918907877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 365817.07042253454,
            "unit": "ns/iter",
            "extra": "iterations: 2343\ncpu: 365810.3713188221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 291020.61802721827,
            "unit": "ns/iter",
            "extra": "iterations: 2940\ncpu: 291011.5306122453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 288149.1909616014,
            "unit": "ns/iter",
            "extra": "iterations: 2943\ncpu: 288145.4298335023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 286296.6723732834,
            "unit": "ns/iter",
            "extra": "iterations: 2979\ncpu: 286290.03021148074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 574063.3229999901,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 574040.3 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4830763.1718749935,
            "unit": "ns/iter",
            "extra": "iterations: 192\ncpu: 4830653.645833331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3916909.1428571157,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3916861.344537819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3979119.3433475853,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 3979117.596566523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3938021.2109704725,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3937910.126582285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2274022.269607884,
            "unit": "ns/iter",
            "extra": "iterations: 408\ncpu: 2274005.8823529407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3832796.136363599,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3832638.016528915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 15328062.171428364,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 15327648.571428552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6722920.469999849,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6722763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18930318.26785726,
            "unit": "ns/iter",
            "extra": "iterations: 56\ncpu: 18930212.499999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 75582.81305427555,
            "unit": "ns/iter",
            "extra": "iterations: 11276\ncpu: 75581.75771550195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 393172.60045766475,
            "unit": "ns/iter",
            "extra": "iterations: 2185\ncpu: 393169.1990846669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 313017.88093498675,
            "unit": "ns/iter",
            "extra": "iterations: 2738\ncpu: 313017.45799853816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 315575.836832403,
            "unit": "ns/iter",
            "extra": "iterations: 2715\ncpu: 315570.09208103194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 314289.48190127924,
            "unit": "ns/iter",
            "extra": "iterations: 2735\ncpu: 314285.4113345513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 572738.28000001,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 572727.3000000039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4892096.436841903,
            "unit": "ns/iter",
            "extra": "iterations: 190\ncpu: 4892085.789473704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3960960.7361703734,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3960883.4042552947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3999797.210300402,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 3999735.6223175963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3983651.589743771,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3983615.3846153943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2299417.92326728,
            "unit": "ns/iter",
            "extra": "iterations: 404\ncpu: 2299381.683168306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3868219.477178259,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3868176.7634854643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15453355.144927628,
            "unit": "ns/iter",
            "extra": "iterations: 69\ncpu: 15452895.652173933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6900888.060000056,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6900764.999999965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 67174.39755134289,
            "unit": "ns/iter",
            "extra": "iterations: 12660\ncpu: 67173.01737756723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 353700.3222866532,
            "unit": "ns/iter",
            "extra": "iterations: 2414\ncpu: 353694.7804473888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 281136.07081966946,
            "unit": "ns/iter",
            "extra": "iterations: 3050\ncpu: 281129.1475409835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 282059.52226988046,
            "unit": "ns/iter",
            "extra": "iterations: 3031\ncpu: 282058.7924777309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 277291.4569300539,
            "unit": "ns/iter",
            "extra": "iterations: 3088\ncpu: 277291.83937823866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 541616.7669999936,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 541602.0999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4888273.17801036,
            "unit": "ns/iter",
            "extra": "iterations: 191\ncpu: 4888146.073298423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3930995.9451478603,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3930952.32067511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3964433.4085106165,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3964384.6808510465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3943389.3417720525,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3943316.4556962186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2268027.0097561246,
            "unit": "ns/iter",
            "extra": "iterations: 410\ncpu: 2267993.1707317075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3848230.334710699,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3848001.6528925486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6086.320962294963,
            "unit": "ns/iter",
            "extra": "iterations: 114892\ncpu: 6086.197472408919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 39430.26960784396,
            "unit": "ns/iter",
            "extra": "iterations: 17748\ncpu: 39430.149876042306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 32068.201960964485,
            "unit": "ns/iter",
            "extra": "iterations: 21826\ncpu: 32068.49170713833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 32394.17264625872,
            "unit": "ns/iter",
            "extra": "iterations: 21657\ncpu: 32394.131227778416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24777.34566675078,
            "unit": "ns/iter",
            "extra": "iterations: 28189\ncpu: 24777.210968817526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 187077.82153351844,
            "unit": "ns/iter",
            "extra": "iterations: 3743\ncpu: 187075.554368151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 322469.614463382,
            "unit": "ns/iter",
            "extra": "iterations: 2171\ncpu: 322472.1326577597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 78362.03994165646,
            "unit": "ns/iter",
            "extra": "iterations: 8913\ncpu: 78359.87882867757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 78516.58512676372,
            "unit": "ns/iter",
            "extra": "iterations: 8875\ncpu: 78515.88732394473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 78431.45377210864,
            "unit": "ns/iter",
            "extra": "iterations: 8934\ncpu: 78429.5612267739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 162364.5515882163,
            "unit": "ns/iter",
            "extra": "iterations: 4313\ncpu: 162364.1085091567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 153766.86398594175,
            "unit": "ns/iter",
            "extra": "iterations: 4551\ncpu: 153766.24917600426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 49904.65553503062,
            "unit": "ns/iter",
            "extra": "iterations: 14074\ncpu: 49903.92923120594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 243010.98019458557,
            "unit": "ns/iter",
            "extra": "iterations: 2878\ncpu: 243007.67894370918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 198700.4939076206,
            "unit": "ns/iter",
            "extra": "iterations: 3529\ncpu: 198699.31992065598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 196529.98681626748,
            "unit": "ns/iter",
            "extra": "iterations: 3565\ncpu: 196527.124824682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 198127.19162185257,
            "unit": "ns/iter",
            "extra": "iterations: 3533\ncpu: 198128.41777526017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 347537.98061629396,
            "unit": "ns/iter",
            "extra": "iterations: 2012\ncpu: 347523.06163021736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1372645.1196079075,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1372603.1372548991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1146394.6196721601,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1146375.5737704942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1149464.8998357651,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1149414.449917893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1145885.1639344227,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1145833.7704917989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 729616.1593750127,
            "unit": "ns/iter",
            "extra": "iterations: 960\ncpu: 729591.1458333303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1137627.0569105432,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1137588.6178861845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 50119.11260841587,
            "unit": "ns/iter",
            "extra": "iterations: 13951\ncpu: 50119.410794925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 242644.56624005135,
            "unit": "ns/iter",
            "extra": "iterations: 2891\ncpu: 242643.27222413974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 199710.66809239425,
            "unit": "ns/iter",
            "extra": "iterations: 3507\ncpu: 199709.4382663225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 197701.47718900617,
            "unit": "ns/iter",
            "extra": "iterations: 3529\ncpu: 197698.44148483817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 199211.87617688434,
            "unit": "ns/iter",
            "extra": "iterations: 3505\ncpu: 199206.30527817152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 345018.1176760232,
            "unit": "ns/iter",
            "extra": "iterations: 2031\ncpu: 345014.2294436238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1363446.4093567063,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1363388.888888903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1149755.740131559,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1149693.9144736794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1217760.3306055341,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1217714.7299508995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1151568.3360655995,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1151523.770491793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 728480.42307694,
            "unit": "ns/iter",
            "extra": "iterations: 962\ncpu: 728463.409563411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1135845.6094002964,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1135832.7390599744 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}