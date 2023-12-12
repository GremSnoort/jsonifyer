window.BENCHMARK_DATA = {
  "lastUpdate": 1702409133982,
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
        "date": 1702409130830,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16273.609807902503,
            "unit": "ns/iter",
            "extra": "iterations: 42843\ncpu: 16273.101790257451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 151524.78773247622,
            "unit": "ns/iter",
            "extra": "iterations: 5592\ncpu: 151522.96137339057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 287514.55559231795,
            "unit": "ns/iter",
            "extra": "iterations: 3022\ncpu: 287494.93712772994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 421410.16755707917,
            "unit": "ns/iter",
            "extra": "iterations: 2059\ncpu: 421402.62263234565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 572481.1390134587,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 572451.6976297245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 563200.7319999844,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 563185.4 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 671250.1228197742,
            "unit": "ns/iter",
            "extra": "iterations: 1376\ncpu: 671245.1308139532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 780040.0942760794,
            "unit": "ns/iter",
            "extra": "iterations: 1188\ncpu: 780031.3973063971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 888955.3473683948,
            "unit": "ns/iter",
            "extra": "iterations: 1045\ncpu: 888928.0382775125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13093.273309315635,
            "unit": "ns/iter",
            "extra": "iterations: 53573\ncpu: 13093.050603848937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10963.382490688078,
            "unit": "ns/iter",
            "extra": "iterations: 64697\ncpu: 10963.146668315394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10909.152153572833,
            "unit": "ns/iter",
            "extra": "iterations: 64126\ncpu: 10908.919938870347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10893.39232027444,
            "unit": "ns/iter",
            "extra": "iterations: 64195\ncpu: 10893.376431186243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18638.11088720279,
            "unit": "ns/iter",
            "extra": "iterations: 37714\ncpu: 18593.713209948553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 66626.02773677341,
            "unit": "ns/iter",
            "extra": "iterations: 12871\ncpu: 66623.80545412163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 365721.1170710943,
            "unit": "ns/iter",
            "extra": "iterations: 2349\ncpu: 365689.35717326467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 287373.8155957245,
            "unit": "ns/iter",
            "extra": "iterations: 2988\ncpu: 287377.0749665326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 282638.796833782,
            "unit": "ns/iter",
            "extra": "iterations: 3032\ncpu: 282625.95646437985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 281501.7347140002,
            "unit": "ns/iter",
            "extra": "iterations: 3042\ncpu: 281493.62261669966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 551231.5280000166,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 551212.7000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4643027.8349998845,
            "unit": "ns/iter",
            "extra": "iterations: 200\ncpu: 4642854.500000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3825452.698347015,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3825280.578512391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3795467.6938773687,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3795286.122448971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3857027.7717843475,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3856846.473029049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2195425.7156397635,
            "unit": "ns/iter",
            "extra": "iterations: 422\ncpu: 2195278.6729857842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3705424.043999983,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3705272.3999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14573519.000000238,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14573009.589041088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6392120.250000062,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6392075.999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 17949056.00000016,
            "unit": "ns/iter",
            "extra": "iterations: 59\ncpu: 17948032.203389883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 73327.71709906426,
            "unit": "ns/iter",
            "extra": "iterations: 11679\ncpu: 73324.73670690993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 386166.0786416369,
            "unit": "ns/iter",
            "extra": "iterations: 2238\ncpu: 386156.6130473636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 309911.5905172353,
            "unit": "ns/iter",
            "extra": "iterations: 2784\ncpu: 309890.91235632246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 307134.0154011597,
            "unit": "ns/iter",
            "extra": "iterations: 2792\ncpu: 307131.3753581662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 308733.4318756865,
            "unit": "ns/iter",
            "extra": "iterations: 2767\ncpu: 308729.8156848571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 568725.6659999776,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 568720.2000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4731228.362244883,
            "unit": "ns/iter",
            "extra": "iterations: 196\ncpu: 4730807.6530612195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3848213.533057913,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3848188.0165289175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3838211.6378599037,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3838118.9300411684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3887054.2250000043,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3886613.333333333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2238540.489156686,
            "unit": "ns/iter",
            "extra": "iterations: 415\ncpu: 2238522.6506024054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3732367.0846775267,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3732312.0967741776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14903829.541666703,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14903077.777777737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6513856.550000127,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6513224.999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 65997.8489119486,
            "unit": "ns/iter",
            "extra": "iterations: 12913\ncpu: 65993.87439014934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 347925.90905416524,
            "unit": "ns/iter",
            "extra": "iterations: 2474\ncpu: 347905.012126112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 279452.70506165945,
            "unit": "ns/iter",
            "extra": "iterations: 3082\ncpu: 279443.67293965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 276140.33621241077,
            "unit": "ns/iter",
            "extra": "iterations: 3126\ncpu: 276130.1343570071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 274308.2637958437,
            "unit": "ns/iter",
            "extra": "iterations: 3135\ncpu: 274299.0111642755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 519764.7830000278,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 519740.4999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4674102.201004954,
            "unit": "ns/iter",
            "extra": "iterations: 199\ncpu: 4673964.824120591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3837454.51028808,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3837227.5720164413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3813982.6530612353,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3813728.1632653154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3853127.161157077,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3853014.8760330533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2202170.732860489,
            "unit": "ns/iter",
            "extra": "iterations: 423\ncpu: 2202040.6619385416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3695648.34661347,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3695487.6494023944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6225.862006944871,
            "unit": "ns/iter",
            "extra": "iterations: 112310\ncpu: 6225.710088148891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 39152.83887210562,
            "unit": "ns/iter",
            "extra": "iterations: 17874\ncpu: 39153.22255790537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30445.991872393854,
            "unit": "ns/iter",
            "extra": "iterations: 23008\ncpu: 30445.875347705332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 32306.707194312537,
            "unit": "ns/iter",
            "extra": "iterations: 21656\ncpu: 32305.10712966401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24565.268587066916,
            "unit": "ns/iter",
            "extra": "iterations: 28501\ncpu: 24565.26788533734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 181304.1773398999,
            "unit": "ns/iter",
            "extra": "iterations: 3857\ncpu: 181303.60383717986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 306697.5188266195,
            "unit": "ns/iter",
            "extra": "iterations: 2284\ncpu: 306686.42732049146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 77149.12102191574,
            "unit": "ns/iter",
            "extra": "iterations: 9081\ncpu: 77149.97246999259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 76509.21663019387,
            "unit": "ns/iter",
            "extra": "iterations: 9140\ncpu: 76503.5557986883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 77031.35916034588,
            "unit": "ns/iter",
            "extra": "iterations: 9099\ncpu: 77027.81624354348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 157066.99708192845,
            "unit": "ns/iter",
            "extra": "iterations: 4455\ncpu: 157056.20650953823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 133056.53300361306,
            "unit": "ns/iter",
            "extra": "iterations: 5257\ncpu: 133050.42800076146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46726.23110522964,
            "unit": "ns/iter",
            "extra": "iterations: 15110\ncpu: 46723.82528127138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 225454.01126488965,
            "unit": "ns/iter",
            "extra": "iterations: 3107\ncpu: 225442.38815577884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 184843.97205379469,
            "unit": "ns/iter",
            "extra": "iterations: 3793\ncpu: 184835.77643026836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 186640.35772144026,
            "unit": "ns/iter",
            "extra": "iterations: 3827\ncpu: 186624.48392996998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 183385.69297326903,
            "unit": "ns/iter",
            "extra": "iterations: 3814\ncpu: 183378.8148925028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 334451.6782816307,
            "unit": "ns/iter",
            "extra": "iterations: 2095\ncpu: 334443.6754176613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1306582.4216418033,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1306562.3134328413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1099822.2511773738,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1099794.0345369128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1102066.0332804972,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1102040.0950871748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1108031.9510268085,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1107989.5734597254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 694320.1188118906,
            "unit": "ns/iter",
            "extra": "iterations: 1010\ncpu: 694279.9009901014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1084114.2468944232,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1084126.086956527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46705.79107667827,
            "unit": "ns/iter",
            "extra": "iterations: 14972\ncpu: 46702.91878172638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 224635.50882824868,
            "unit": "ns/iter",
            "extra": "iterations: 3115\ncpu: 224630.27287319495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 184914.3216266187,
            "unit": "ns/iter",
            "extra": "iterations: 3787\ncpu: 184906.97121732344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 184122.41304920032,
            "unit": "ns/iter",
            "extra": "iterations: 3801\ncpu: 184118.1531175986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 185293.3885367175,
            "unit": "ns/iter",
            "extra": "iterations: 3786\ncpu: 185285.15583729587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 332564.83198861737,
            "unit": "ns/iter",
            "extra": "iterations: 2107\ncpu: 332568.2012339838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1301612.6431226705,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1301576.7657992535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1097766.0830721545,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1097740.2821316468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1098321.818181808,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1098268.6520376187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1101397.1167191844,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1101321.6088328224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 696474.9631474166,
            "unit": "ns/iter",
            "extra": "iterations: 1004\ncpu: 696471.812749008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1086587.055727517,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1086529.2569659534 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}