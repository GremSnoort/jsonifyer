window.BENCHMARK_DATA = {
  "lastUpdate": 1702490784433,
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
          "id": "a2fdd4a8b08935139af31fad37c86ca12b1dc63b",
          "message": "Add BMs; Setters Improve",
          "timestamp": "2023-12-12T23:14:54+03:00",
          "tree_id": "e41c2c9b1f31589e76e0363e3cfb6528364c4fdc",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/a2fdd4a8b08935139af31fad37c86ca12b1dc63b"
        },
        "date": 1702412534431,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15274.341319187208,
            "unit": "ns/iter",
            "extra": "iterations: 45998\ncpu: 15272.740119135617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 123575.39747726369,
            "unit": "ns/iter",
            "extra": "iterations: 6818\ncpu: 123566.1630976826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 232911.1669788606,
            "unit": "ns/iter",
            "extra": "iterations: 3737\ncpu: 232892.21300508422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 339218.74085726176,
            "unit": "ns/iter",
            "extra": "iterations: 2543\ncpu: 339177.54620526946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 447728.8181349922,
            "unit": "ns/iter",
            "extra": "iterations: 1941\ncpu: 447714.734672849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 558797.5852564161,
            "unit": "ns/iter",
            "extra": "iterations: 1560\ncpu: 558782.8846153845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 534859.9779999859,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 534855.0000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 619326.7799999944,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 619276.4000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 708185.7523148103,
            "unit": "ns/iter",
            "extra": "iterations: 1296\ncpu: 708158.4876543208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12563.136302995257,
            "unit": "ns/iter",
            "extra": "iterations: 57717\ncpu: 12562.3091983298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10187.795297170178,
            "unit": "ns/iter",
            "extra": "iterations: 68597\ncpu: 10186.939662084333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10257.13928195548,
            "unit": "ns/iter",
            "extra": "iterations: 68408\ncpu: 10256.795988773245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10326.380464581314,
            "unit": "ns/iter",
            "extra": "iterations: 67846\ncpu: 10325.849718480105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17256.962047181598,
            "unit": "ns/iter",
            "extra": "iterations: 40524\ncpu: 17255.594215773363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 54075.55630000048,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54068.44 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 291334.2526103022,
            "unit": "ns/iter",
            "extra": "iterations: 2969\ncpu: 291326.1030650049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 228763.61796247374,
            "unit": "ns/iter",
            "extra": "iterations: 3730\ncpu: 228748.63270777467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 227709.60441020504,
            "unit": "ns/iter",
            "extra": "iterations: 3764\ncpu: 227706.88097768385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 225991.6200896422,
            "unit": "ns/iter",
            "extra": "iterations: 3793\ncpu: 225982.70498286327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 603123.0254521148,
            "unit": "ns/iter",
            "extra": "iterations: 1493\ncpu: 603108.1714668443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3852993.399999953,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3852906.1224489757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3093777.6789298817,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3093570.2341137147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3088443.4883722425,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3088376.744186044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3083052.4053156227,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3082799.003322263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1831672.2043650427,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1831613.888888891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3010593.20779221,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3010363.9610389583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11626019.554348016,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11625408.695652178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5265306.260000102,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5264999.999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14873074.732393812,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14871776.056338053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 60217.16980000064,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60209.05999999968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 322119.19662288105,
            "unit": "ns/iter",
            "extra": "iterations: 2665\ncpu: 322095.3095684793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 254403.20522720905,
            "unit": "ns/iter",
            "extra": "iterations: 3367\ncpu: 254376.59637659648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 255433.84009476283,
            "unit": "ns/iter",
            "extra": "iterations: 3377\ncpu: 255406.60349422548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 250425.82322054275,
            "unit": "ns/iter",
            "extra": "iterations: 3428\ncpu: 250399.5040840125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 583729.2578700853,
            "unit": "ns/iter",
            "extra": "iterations: 1493\ncpu: 583673.3422638989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3866460.587500124,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3866115.4166666674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3136095.5337839024,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3135970.945945958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3145580.891525388,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3145539.6610169588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3137906.5925924308,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3137756.2289562337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1872969.0040241454,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1872908.4507042265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3052228.54426239,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3052190.163934421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11897184.199999502,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 11896342.222222166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5252349.659999709,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5251827.999999961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52571.78030000204,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52569.86999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 290466.635050867,
            "unit": "ns/iter",
            "extra": "iterations: 3047\ncpu: 290433.67246471887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 222005.6183836897,
            "unit": "ns/iter",
            "extra": "iterations: 3873\ncpu: 221996.69506842204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 219896.37749871568,
            "unit": "ns/iter",
            "extra": "iterations: 3902\ncpu: 219873.85955919992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 216742.89325557937,
            "unit": "ns/iter",
            "extra": "iterations: 3944\ncpu: 216728.93002028382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 543344.5722256415,
            "unit": "ns/iter",
            "extra": "iterations: 1613\ncpu: 543337.8797272169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3826683.590163992,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3826472.950819657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3094932.176079616,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3094777.7408637917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3091949.295681213,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3091738.205980054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3090996.2715231692,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3090885.7615894033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1831270.714566947,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1831177.3622047321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3010480.7064516637,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 3010298.3870967645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6157.183385703735,
            "unit": "ns/iter",
            "extra": "iterations: 113613\ncpu: 6157.114062651246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34978.889294646324,
            "unit": "ns/iter",
            "extra": "iterations: 19990\ncpu: 34978.219109555015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28889.848764155846,
            "unit": "ns/iter",
            "extra": "iterations: 24194\ncpu: 28889.046871124978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28592.795570629885,
            "unit": "ns/iter",
            "extra": "iterations: 24473\ncpu: 28591.108568626587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21935.288278973803,
            "unit": "ns/iter",
            "extra": "iterations: 31917\ncpu: 21934.574051446052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 159101.51104028785,
            "unit": "ns/iter",
            "extra": "iterations: 4393\ncpu: 159097.17732756518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 256399.3349212062,
            "unit": "ns/iter",
            "extra": "iterations: 2729\ncpu: 256396.7020886794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 64203.61207291592,
            "unit": "ns/iter",
            "extra": "iterations: 10917\ncpu: 64201.15416323184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 64193.37037037161,
            "unit": "ns/iter",
            "extra": "iterations: 10881\ncpu: 64190.37772263658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 64182.836109077194,
            "unit": "ns/iter",
            "extra": "iterations: 10928\ncpu: 64182.11017569579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 132304.32792146396,
            "unit": "ns/iter",
            "extra": "iterations: 5297\ncpu: 132298.82952614635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 121578.46675924999,
            "unit": "ns/iter",
            "extra": "iterations: 5761\ncpu: 121577.17410171758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 42098.58934811566,
            "unit": "ns/iter",
            "extra": "iterations: 16598\ncpu: 42097.57802144789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 195745.03872053363,
            "unit": "ns/iter",
            "extra": "iterations: 3564\ncpu: 195742.9012345674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 160765.46787934777,
            "unit": "ns/iter",
            "extra": "iterations: 4343\ncpu: 160763.68869445013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 162095.27736548803,
            "unit": "ns/iter",
            "extra": "iterations: 4312\ncpu: 162086.54916512314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 161242.77263303215,
            "unit": "ns/iter",
            "extra": "iterations: 4341\ncpu: 161233.4254780012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 297361.33433864603,
            "unit": "ns/iter",
            "extra": "iterations: 2321\ncpu: 297344.9806118088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1094174.6389325815,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1094162.0094191462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 915999.3772845946,
            "unit": "ns/iter",
            "extra": "iterations: 766\ncpu: 915944.1253263669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 921235.0932983073,
            "unit": "ns/iter",
            "extra": "iterations: 761\ncpu: 921225.0985545343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 916757.202099707,
            "unit": "ns/iter",
            "extra": "iterations: 762\ncpu: 916715.3543307032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 607228.1281384857,
            "unit": "ns/iter",
            "extra": "iterations: 1155\ncpu: 607197.7489177521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 909891.9662337663,
            "unit": "ns/iter",
            "extra": "iterations: 770\ncpu: 909882.0779220626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 42419.081284069536,
            "unit": "ns/iter",
            "extra": "iterations: 16510\ncpu: 42417.08661417359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 199145.696022737,
            "unit": "ns/iter",
            "extra": "iterations: 3520\ncpu: 199137.30113636306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 162740.11116312462,
            "unit": "ns/iter",
            "extra": "iterations: 4273\ncpu: 162731.82775567647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 162645.17213305613,
            "unit": "ns/iter",
            "extra": "iterations: 4299\ncpu: 162643.42870435052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 163843.85370414154,
            "unit": "ns/iter",
            "extra": "iterations: 4279\ncpu: 163833.9565319015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 294528.6875262384,
            "unit": "ns/iter",
            "extra": "iterations: 2381\ncpu: 294525.2834943284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1089849.32866051,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1089837.5389408104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 915904.0117801185,
            "unit": "ns/iter",
            "extra": "iterations: 764\ncpu: 915894.5026178044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 920011.0486841445,
            "unit": "ns/iter",
            "extra": "iterations: 760\ncpu: 920000.1315789458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 917664.8823528857,
            "unit": "ns/iter",
            "extra": "iterations: 765\ncpu: 917605.0980392152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 603942.8915662467,
            "unit": "ns/iter",
            "extra": "iterations: 1162\ncpu: 603936.746987951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 908480.9299610946,
            "unit": "ns/iter",
            "extra": "iterations: 771\ncpu: 908454.0856031225 ns\nthreads: 1"
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
          "id": "3da6f92518ebbffed2e11d1053cee2ce52bff1f0",
          "message": "Upd README",
          "timestamp": "2023-12-13T00:12:53+03:00",
          "tree_id": "2f3e289da6746982a8c43b0c572e183f11742827",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/3da6f92518ebbffed2e11d1053cee2ce52bff1f0"
        },
        "date": 1702415983237,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15419.566456345503,
            "unit": "ns/iter",
            "extra": "iterations: 38988\ncpu: 15419.452139119732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 125305.83389930592,
            "unit": "ns/iter",
            "extra": "iterations: 6773\ncpu: 125299.42418426105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 234846.3229729741,
            "unit": "ns/iter",
            "extra": "iterations: 3700\ncpu: 234839.00000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 342821.728321399,
            "unit": "ns/iter",
            "extra": "iterations: 2514\ncpu: 342813.76292760536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 452296.82606437884,
            "unit": "ns/iter",
            "extra": "iterations: 1926\ncpu: 452275.2336448597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 560817.987741944,
            "unit": "ns/iter",
            "extra": "iterations: 1550\ncpu: 560809.2903225806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 539357.136999996,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 539342.3999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 624643.724000009,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 624600.3 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 711277.5776923067,
            "unit": "ns/iter",
            "extra": "iterations: 1300\ncpu: 711265.3846153845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12302.720331235374,
            "unit": "ns/iter",
            "extra": "iterations: 56878\ncpu: 12302.486022715299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10309.207828449826,
            "unit": "ns/iter",
            "extra": "iterations: 68085\ncpu: 10308.725857384155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10660.532797557664,
            "unit": "ns/iter",
            "extra": "iterations: 66819\ncpu: 10659.92157919154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10359.027991063844,
            "unit": "ns/iter",
            "extra": "iterations: 67593\ncpu: 10358.548962170631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17373.689153635896,
            "unit": "ns/iter",
            "extra": "iterations: 40290\ncpu: 17372.990816579797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 54205.843899998734,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54205.43000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 289297.7600676821,
            "unit": "ns/iter",
            "extra": "iterations: 2955\ncpu: 289295.3637901865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 231934.9520793164,
            "unit": "ns/iter",
            "extra": "iterations: 3631\ncpu: 231933.04874690162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 228874.87676337216,
            "unit": "ns/iter",
            "extra": "iterations: 3757\ncpu: 228865.55762576574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 226282.39164003934,
            "unit": "ns/iter",
            "extra": "iterations: 3756\ncpu: 226272.92332268303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 623431.8652631724,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 623405.6842105262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3901091.3333333028,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3900947.4999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3139038.711864394,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3138873.2203389946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3133772.612794613,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3133614.14141414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3110249.06040267,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3110128.5234899237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1847855.1037924215,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1847733.333333334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3053703.3465346363,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3053582.178217828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11624957.164835555,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11624534.065934077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5252118.369999721,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5251827.999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14960000.830986015,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14959319.718309846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 60121.51879999693,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60118.4 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 321699.4776119391,
            "unit": "ns/iter",
            "extra": "iterations: 2680\ncpu: 321687.72388059756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 256648.11423445173,
            "unit": "ns/iter",
            "extra": "iterations: 3344\ncpu: 256640.6399521539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 255538.35197857936,
            "unit": "ns/iter",
            "extra": "iterations: 3361\ncpu: 255518.5956560548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 251284.08970588492,
            "unit": "ns/iter",
            "extra": "iterations: 3400\ncpu: 251273.70588235214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 612800.2683596372,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 612787.9203843505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3936618.9872882804,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3936467.3728813455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3177038.164383505,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3176939.383561663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3180786.2047781604,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3180673.3788395706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3166379.300341294,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3166292.1501706494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1862294.6172345,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1862213.426853713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3075967.3576160246,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3075944.0397351123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11856851.411110686,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 11856243.3333334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5178792.009999711,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5178753.000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52335.53110000457,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52330.69000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 281688.8924942565,
            "unit": "ns/iter",
            "extra": "iterations: 3051\ncpu: 281680.4981973123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 223300.28423771626,
            "unit": "ns/iter",
            "extra": "iterations: 3870\ncpu: 223292.1705426357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 222072.3727108501,
            "unit": "ns/iter",
            "extra": "iterations: 3877\ncpu: 222066.10781532084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 219270.97734878465,
            "unit": "ns/iter",
            "extra": "iterations: 3885\ncpu: 219260.10296010398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 556633.6626429368,
            "unit": "ns/iter",
            "extra": "iterations: 1574\ncpu: 556621.664548916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3884456.0502091087,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3884366.527196641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3140138.0942761134,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3139994.6127946028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3132799.8255034764,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3132710.0671140845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3122155.8422819213,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3122068.456375839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1831460.9901574922,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1831432.4803149565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3045093.272130991,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3044972.1311475416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6207.05286648539,
            "unit": "ns/iter",
            "extra": "iterations: 112699\ncpu: 6206.950372230466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34871.053612357806,
            "unit": "ns/iter",
            "extra": "iterations: 20070\ncpu: 34869.920279023456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29123.147026852937,
            "unit": "ns/iter",
            "extra": "iterations: 24839\ncpu: 29122.66194291242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28731.13857892944,
            "unit": "ns/iter",
            "extra": "iterations: 24376\ncpu: 28729.943386937826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22169.39063340075,
            "unit": "ns/iter",
            "extra": "iterations: 31623\ncpu: 22169.016222369934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 160529.2065167472,
            "unit": "ns/iter",
            "extra": "iterations: 4358\ncpu: 160526.13584212936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 258820.32260451769,
            "unit": "ns/iter",
            "extra": "iterations: 2703\ncpu: 258815.90825009157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 65110.72196392009,
            "unit": "ns/iter",
            "extra": "iterations: 10754\ncpu: 65108.8246233959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 65457.064781107845,
            "unit": "ns/iter",
            "extra": "iterations: 10713\ncpu: 65456.00672080628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 64810.962339227095,
            "unit": "ns/iter",
            "extra": "iterations: 10807\ncpu: 64809.81771074355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 133013.5750713513,
            "unit": "ns/iter",
            "extra": "iterations: 5255\ncpu: 133009.81921979174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 123039.32741651879,
            "unit": "ns/iter",
            "extra": "iterations: 5690\ncpu: 123037.13532513319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 42190.71111645689,
            "unit": "ns/iter",
            "extra": "iterations: 16633\ncpu: 42188.775326158815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 201623.70337273608,
            "unit": "ns/iter",
            "extra": "iterations: 3469\ncpu: 201619.8904583443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 162867.57831044644,
            "unit": "ns/iter",
            "extra": "iterations: 4297\ncpu: 162864.4170351411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 162929.3592187826,
            "unit": "ns/iter",
            "extra": "iterations: 4301\ncpu: 162926.57521506838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 162050.09551340676,
            "unit": "ns/iter",
            "extra": "iterations: 4324\ncpu: 162046.85476410767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 297436.00127875817,
            "unit": "ns/iter",
            "extra": "iterations: 2346\ncpu: 297415.6862745123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1122053.821543461,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1121985.2090032285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 943974.49596776,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 943938.8440860264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 944677.9405405206,
            "unit": "ns/iter",
            "extra": "iterations: 740\ncpu: 944660.270270267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 933940.489361663,
            "unit": "ns/iter",
            "extra": "iterations: 752\ncpu: 933896.8085106323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 612275.4484265784,
            "unit": "ns/iter",
            "extra": "iterations: 1144\ncpu: 612243.4440559439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 925166.3474801253,
            "unit": "ns/iter",
            "extra": "iterations: 754\ncpu: 925112.5994694877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 42513.24671514881,
            "unit": "ns/iter",
            "extra": "iterations: 16363\ncpu: 42511.72767829849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 203212.92776328514,
            "unit": "ns/iter",
            "extra": "iterations: 3447\ncpu: 203202.11778358257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 165266.1714690474,
            "unit": "ns/iter",
            "extra": "iterations: 4234\ncpu: 165257.6995748698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 164160.37338653277,
            "unit": "ns/iter",
            "extra": "iterations: 4261\ncpu: 164151.81882187334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 164872.70164705426,
            "unit": "ns/iter",
            "extra": "iterations: 4250\ncpu: 164857.7647058841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 297199.1005942469,
            "unit": "ns/iter",
            "extra": "iterations: 2356\ncpu: 297185.27164686064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1114992.8118022378,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1114984.6889952226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 935538.3328876453,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 935530.8823529488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 933993.2343542245,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 933951.3981358174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 929180.8592297881,
            "unit": "ns/iter",
            "extra": "iterations: 753\ncpu: 929150.3320053036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 609160.4965217812,
            "unit": "ns/iter",
            "extra": "iterations: 1150\ncpu: 609132.5217391347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 921878.587846751,
            "unit": "ns/iter",
            "extra": "iterations: 757\ncpu: 921871.3342139953 ns\nthreads: 1"
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
          "id": "3da6f92518ebbffed2e11d1053cee2ce52bff1f0",
          "message": "Upd README",
          "timestamp": "2023-12-13T00:12:53+03:00",
          "tree_id": "2f3e289da6746982a8c43b0c572e183f11742827",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/3da6f92518ebbffed2e11d1053cee2ce52bff1f0"
        },
        "date": 1702418335249,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16185.264900816808,
            "unit": "ns/iter",
            "extra": "iterations: 42850\ncpu: 16184.128354725788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 123482.0742748349,
            "unit": "ns/iter",
            "extra": "iterations: 6826\ncpu: 123478.53794315852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 232488.93793471926,
            "unit": "ns/iter",
            "extra": "iterations: 3738\ncpu: 232477.12680577853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 338138.51057993795,
            "unit": "ns/iter",
            "extra": "iterations: 2552\ncpu: 338128.33072100324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 446149.0662217735,
            "unit": "ns/iter",
            "extra": "iterations: 1948\ncpu: 446141.9917864476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 553316.2530273959,
            "unit": "ns/iter",
            "extra": "iterations: 1569\ncpu: 553282.9827915871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 531328.185999996,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 531327.2000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 616294.8649999861,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 616244.9000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 718212.6593323051,
            "unit": "ns/iter",
            "extra": "iterations: 1318\ncpu: 718174.8103186655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12296.386587424164,
            "unit": "ns/iter",
            "extra": "iterations: 56872\ncpu: 12296.34618089744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10377.909399218028,
            "unit": "ns/iter",
            "extra": "iterations: 67229\ncpu: 10377.762572699268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10419.041988244975,
            "unit": "ns/iter",
            "extra": "iterations: 67376\ncpu: 10419.070588933746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10426.123332234409,
            "unit": "ns/iter",
            "extra": "iterations: 66706\ncpu: 10426.066620693811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17409.692357448217,
            "unit": "ns/iter",
            "extra": "iterations: 40196\ncpu: 17409.69250671708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 53433.186899997054,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53433.77 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 291853.3525204235,
            "unit": "ns/iter",
            "extra": "iterations: 2936\ncpu: 291848.8760217979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 232548.63438520062,
            "unit": "ns/iter",
            "extra": "iterations: 3676\ncpu: 232551.4145810662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 230385.12792890437,
            "unit": "ns/iter",
            "extra": "iterations: 3713\ncpu: 230386.3991381633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 226943.85229067493,
            "unit": "ns/iter",
            "extra": "iterations: 3798\ncpu: 226942.49605055328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 611716.5958904115,
            "unit": "ns/iter",
            "extra": "iterations: 1460\ncpu: 611711.5068493155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3768286.8577235704,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3768219.105691062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3097589.8476819587,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3097530.794701987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3062923.1419143043,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3062866.0066006533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3075905.854785506,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3075857.095709563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1818250.055876684,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1818252.7938342951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2990398.667741961,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 2990195.161290322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11375824.602149958,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 11375276.344086034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5263410.509999745,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5263418.000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14732741.513888925,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14731679.166666634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 60337.73960000417,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60338.359999999724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 321992.0576208092,
            "unit": "ns/iter",
            "extra": "iterations: 2690\ncpu: 321972.6022304827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 258283.56330827286,
            "unit": "ns/iter",
            "extra": "iterations: 3325\ncpu: 258283.87969924766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 255395.41743529367,
            "unit": "ns/iter",
            "extra": "iterations: 3361\ncpu: 255387.92026182616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 250197.28075801826,
            "unit": "ns/iter",
            "extra": "iterations: 3430\ncpu: 250185.97667638562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 598938.480385441,
            "unit": "ns/iter",
            "extra": "iterations: 1453\ncpu: 598924.3633860957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3834083.5500001446,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3833859.5833333326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3120145.7348993397,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3120016.4429530273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3099125.4166665766,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3098949.0000000093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3102166.649999845,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3102071.9999999832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1839849.8809523245,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1839775.198412708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3018268.948051985,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3018129.220779208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11751903.60000013,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 11751665.55555557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5105156.41999973,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5104951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52096.835600002574,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52095.239999999874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 282153.395081967,
            "unit": "ns/iter",
            "extra": "iterations: 3050\ncpu: 282151.0819672137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 224323.4996086696,
            "unit": "ns/iter",
            "extra": "iterations: 3833\ncpu: 224312.18366814364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 221761.64721075085,
            "unit": "ns/iter",
            "extra": "iterations: 3872\ncpu: 221751.31714876048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 218393.3488668167,
            "unit": "ns/iter",
            "extra": "iterations: 3927\ncpu: 218378.76241405826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 553661.1563890616,
            "unit": "ns/iter",
            "extra": "iterations: 1573\ncpu: 553636.1729179912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3791547.89999987,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3791425.416666675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3087284.894039778,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3087123.17880795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3059108.127868952,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3059009.180327877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3061699.57565784,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3061539.4736842196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1803805.2446601875,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1803768.1553398003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2983437.7628204925,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2983286.538461531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6281.530331889986,
            "unit": "ns/iter",
            "extra": "iterations: 111302\ncpu: 6281.216869418335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 35077.39489647443,
            "unit": "ns/iter",
            "extra": "iterations: 19947\ncpu: 35075.40482278047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28094.308574637722,
            "unit": "ns/iter",
            "extra": "iterations: 24934\ncpu: 28093.506858105284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 26784.534333039654,
            "unit": "ns/iter",
            "extra": "iterations: 26141\ncpu: 26783.520140774977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22189.823458628216,
            "unit": "ns/iter",
            "extra": "iterations: 31579\ncpu: 22188.771018714826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 161911.51966682266,
            "unit": "ns/iter",
            "extra": "iterations: 4322\ncpu: 161904.4192503466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 254744.78542804957,
            "unit": "ns/iter",
            "extra": "iterations: 2745\ncpu: 254736.42987249378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 64026.91503027837,
            "unit": "ns/iter",
            "extra": "iterations: 10898\ncpu: 64026.01394751456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 64107.86495882605,
            "unit": "ns/iter",
            "extra": "iterations: 10930\ncpu: 64107.25526075023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 64050.63912248927,
            "unit": "ns/iter",
            "extra": "iterations: 10940\ncpu: 64047.733089579786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 131562.6511933905,
            "unit": "ns/iter",
            "extra": "iterations: 5321\ncpu: 131555.49708701583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 120677.63584710883,
            "unit": "ns/iter",
            "extra": "iterations: 5808\ncpu: 120672.17630854165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 41727.16142295161,
            "unit": "ns/iter",
            "extra": "iterations: 16782\ncpu: 41724.75271123828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 197406.9863907025,
            "unit": "ns/iter",
            "extra": "iterations: 3527\ncpu: 197399.43294584707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 161301.37925445597,
            "unit": "ns/iter",
            "extra": "iterations: 4319\ncpu: 161291.78050474662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 161577.0155020307,
            "unit": "ns/iter",
            "extra": "iterations: 4193\ncpu: 161575.79298831284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 158890.4239526467,
            "unit": "ns/iter",
            "extra": "iterations: 4392\ncpu: 158888.09198542667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 296632.6777032703,
            "unit": "ns/iter",
            "extra": "iterations: 2386\ncpu: 296630.259849122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1098654.9687499902,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1098593.5937499967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 920981.9020887928,
            "unit": "ns/iter",
            "extra": "iterations: 766\ncpu: 920928.1984334261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 917386.445751668,
            "unit": "ns/iter",
            "extra": "iterations: 765\ncpu: 917358.4313725546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 914313.2002670094,
            "unit": "ns/iter",
            "extra": "iterations: 749\ncpu: 914234.0453938654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 599555.2996546138,
            "unit": "ns/iter",
            "extra": "iterations: 1158\ncpu: 599541.8825561227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 908712.2018111045,
            "unit": "ns/iter",
            "extra": "iterations: 773\ncpu: 908683.9586028415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 42144.59760837103,
            "unit": "ns/iter",
            "extra": "iterations: 16725\ncpu: 42144.508221225646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 199053.46551236074,
            "unit": "ns/iter",
            "extra": "iterations: 3523\ncpu: 199050.5818904359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 163151.4686114299,
            "unit": "ns/iter",
            "extra": "iterations: 4285\ncpu: 163143.05717619532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 163199.2282659281,
            "unit": "ns/iter",
            "extra": "iterations: 4302\ncpu: 163189.14458391452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 163003.60288640845,
            "unit": "ns/iter",
            "extra": "iterations: 4296\ncpu: 162998.34729981312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 296354.3213378394,
            "unit": "ns/iter",
            "extra": "iterations: 2362\ncpu: 296344.792548685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1082141.9503105714,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1082100.1552794995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 912087.3054830608,
            "unit": "ns/iter",
            "extra": "iterations: 766\ncpu: 912050.9138381094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 906563.2373540387,
            "unit": "ns/iter",
            "extra": "iterations: 771\ncpu: 906542.4124513614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 906982.0570687244,
            "unit": "ns/iter",
            "extra": "iterations: 771\ncpu: 906961.2191958497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 596239.5829787288,
            "unit": "ns/iter",
            "extra": "iterations: 1175\ncpu: 596214.7234042538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 899282.3303226266,
            "unit": "ns/iter",
            "extra": "iterations: 775\ncpu: 899235.3548387104 ns\nthreads: 1"
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
          "id": "93a417e35b7cddb2aff5c69874155ac65b18afac",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:35:38+03:00",
          "tree_id": "ac2b7d38c5e0b561e002516e4bf347cf5169f70d",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/93a417e35b7cddb2aff5c69874155ac65b18afac"
        },
        "date": 1702420959863,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15414.505200430844,
            "unit": "ns/iter",
            "extra": "iterations: 45477\ncpu: 15413.186885678475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 124842.24664997631,
            "unit": "ns/iter",
            "extra": "iterations: 6791\ncpu: 124828.28743925784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 235362.84496753282,
            "unit": "ns/iter",
            "extra": "iterations: 3696\ncpu: 235344.69696969696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 343020.3354556262,
            "unit": "ns/iter",
            "extra": "iterations: 2513\ncpu: 342983.36649422994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 452576.73010921496,
            "unit": "ns/iter",
            "extra": "iterations: 1923\ncpu: 452521.73686947447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 556893.6119307223,
            "unit": "ns/iter",
            "extra": "iterations: 1559\ncpu: 556850.4810776135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 539608.4279999797,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 539528.4999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 624909.7660000018,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 624880.4000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 713462.9309286261,
            "unit": "ns/iter",
            "extra": "iterations: 1303\ncpu: 713395.7789716044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12477.725399361181,
            "unit": "ns/iter",
            "extra": "iterations: 56340\ncpu: 12476.388001419931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10398.67240503192,
            "unit": "ns/iter",
            "extra": "iterations: 64943\ncpu: 10397.53014181667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10368.48682438061,
            "unit": "ns/iter",
            "extra": "iterations: 66069\ncpu: 10367.350799921305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10508.938054290733,
            "unit": "ns/iter",
            "extra": "iterations: 66752\ncpu: 10508.516598753571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17397.949338656832,
            "unit": "ns/iter",
            "extra": "iterations: 40070\ncpu: 17396.51360119789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 54598.76569999835,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54590.53000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 294000.80994853796,
            "unit": "ns/iter",
            "extra": "iterations: 2915\ncpu: 293978.8336192107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 233933.16811045053,
            "unit": "ns/iter",
            "extra": "iterations: 3694\ncpu: 233921.33188955052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 229594.27480505232,
            "unit": "ns/iter",
            "extra": "iterations: 3719\ncpu: 229579.53751008396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 225261.5192409107,
            "unit": "ns/iter",
            "extra": "iterations: 3794\ncpu: 225246.59989457036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 614009.0232081928,
            "unit": "ns/iter",
            "extra": "iterations: 1465\ncpu: 613968.1228668947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3814818.159836072,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3814526.6393442596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3122682.8754208875,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3122394.276094273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3120796.718120756,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3120487.583892611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3105737.8926174766,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3105465.4362416146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1837457.710317482,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1837284.5238095256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3032182.557377032,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3031873.114754092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11693861.565217143,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11683746.73913041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5115038.82999989,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5114561.000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14948308.816901596,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14947183.098591566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 60402.74352139793,
            "unit": "ns/iter",
            "extra": "iterations: 13506\ncpu: 60398.70427957934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 326760.3675018971,
            "unit": "ns/iter",
            "extra": "iterations: 2634\ncpu: 326741.4958238427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 258296.99247214236,
            "unit": "ns/iter",
            "extra": "iterations: 3321\ncpu: 258272.08672086656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 255302.63455247998,
            "unit": "ns/iter",
            "extra": "iterations: 3363\ncpu: 255283.67528992007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 251751.84112974472,
            "unit": "ns/iter",
            "extra": "iterations: 3399\ncpu: 251730.12650779609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 592142.5302515366,
            "unit": "ns/iter",
            "extra": "iterations: 1471\ncpu: 592112.7804214814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3903059.1890755226,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3902690.756302515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3157451.942372923,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3157167.1186440624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3159271.30169494,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3159078.644067802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3163398.8163265316,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3163137.7551020235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1873249.2745490884,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1873107.8156312532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3070593.3927393453,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3070284.8184818546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11859806.288889118,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 11858902.222222254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5123190.269999895,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5122484.999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52958.50630000132,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52953.89999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 282398.060426922,
            "unit": "ns/iter",
            "extra": "iterations: 3045\ncpu: 282374.909688013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 223983.8125815719,
            "unit": "ns/iter",
            "extra": "iterations: 3831\ncpu: 223968.70268859348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 220382.40124095517,
            "unit": "ns/iter",
            "extra": "iterations: 3868\ncpu: 220362.7456049633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 218951.87403796456,
            "unit": "ns/iter",
            "extra": "iterations: 3898\ncpu: 218928.09132888657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 550962.4332700851,
            "unit": "ns/iter",
            "extra": "iterations: 1581\ncpu: 550916.9512966468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3838787.2798354276,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3838495.061728392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3118500.438127138,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3118257.85953177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3119398.695652198,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3119144.481605349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3122559.689999965,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3122205.333333336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1822614.4294117726,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1822530.5882352965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3027109.5113269063,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3026709.7087378623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6282.2327092363175,
            "unit": "ns/iter",
            "extra": "iterations: 111895\ncpu: 6281.8213503731295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 35427.334471503505,
            "unit": "ns/iter",
            "extra": "iterations: 19915\ncpu: 35425.06653276424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28133.959049036283,
            "unit": "ns/iter",
            "extra": "iterations: 24859\ncpu: 28133.06649503188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28909.505519949573,
            "unit": "ns/iter",
            "extra": "iterations: 24185\ncpu: 28907.703121769733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22646.588910499315,
            "unit": "ns/iter",
            "extra": "iterations: 31363\ncpu: 22645.563243312183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 160459.31667433155,
            "unit": "ns/iter",
            "extra": "iterations: 4342\ncpu: 160445.55504375914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 256136.78883072984,
            "unit": "ns/iter",
            "extra": "iterations: 2865\ncpu: 256121.4310645759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 64843.19413071858,
            "unit": "ns/iter",
            "extra": "iterations: 10802\ncpu: 64835.447139418065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 64801.94986587541,
            "unit": "ns/iter",
            "extra": "iterations: 10811\ncpu: 64796.901304226834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 64726.26333827514,
            "unit": "ns/iter",
            "extra": "iterations: 10796\ncpu: 64721.12819562769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 132290.30960045033,
            "unit": "ns/iter",
            "extra": "iterations: 5281\ncpu: 132282.1056618064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 116108.28857615523,
            "unit": "ns/iter",
            "extra": "iterations: 6040\ncpu: 116098.50993377432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 42968.73971003974,
            "unit": "ns/iter",
            "extra": "iterations: 16278\ncpu: 42966.62980710133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 198581.2595008528,
            "unit": "ns/iter",
            "extra": "iterations: 3526\ncpu: 198578.2756664775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 162710.86901997626,
            "unit": "ns/iter",
            "extra": "iterations: 4306\ncpu: 162697.39897817012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 163733.5452636516,
            "unit": "ns/iter",
            "extra": "iterations: 4286\ncpu: 163717.35884274408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 163595.78576429165,
            "unit": "ns/iter",
            "extra": "iterations: 4285\ncpu: 163576.05600933338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 297661.7120306986,
            "unit": "ns/iter",
            "extra": "iterations: 2344\ncpu: 297642.15017065324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1108312.8841270145,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1108195.238095251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 934344.3834886869,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 934267.6431424714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 937437.9973261764,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 937347.0588235112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 927761.7767503497,
            "unit": "ns/iter",
            "extra": "iterations: 757\ncpu: 927671.0700132098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 609695.8726003298,
            "unit": "ns/iter",
            "extra": "iterations: 1146\ncpu: 609659.6858638804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 920375.0632411346,
            "unit": "ns/iter",
            "extra": "iterations: 759\ncpu: 920288.0105401947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 42779.70569175226,
            "unit": "ns/iter",
            "extra": "iterations: 16357\ncpu: 42776.199792137944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 201324.71239191864,
            "unit": "ns/iter",
            "extra": "iterations: 3470\ncpu: 201302.9971181568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 165079.38284766613,
            "unit": "ns/iter",
            "extra": "iterations: 4221\ncpu: 165066.59559346092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 166572.24009489818,
            "unit": "ns/iter",
            "extra": "iterations: 4215\ncpu: 166557.86476868298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 166077.28737266132,
            "unit": "ns/iter",
            "extra": "iterations: 4221\ncpu: 166067.63800047248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 298080.2777541597,
            "unit": "ns/iter",
            "extra": "iterations: 2351\ncpu: 298046.3207145896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1102531.6698113778,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1102468.710691822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 930769.0225166079,
            "unit": "ns/iter",
            "extra": "iterations: 755\ncpu: 930701.986754968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 932846.6129458527,
            "unit": "ns/iter",
            "extra": "iterations: 757\ncpu: 932763.9365918068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 924521.7802929325,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 924466.9773635074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 608962.3622183566,
            "unit": "ns/iter",
            "extra": "iterations: 1154\ncpu: 608906.1525130066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 917157.9318479454,
            "unit": "ns/iter",
            "extra": "iterations: 763\ncpu: 917102.8833551714 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702421412441,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16166.434479533671,
            "unit": "ns/iter",
            "extra": "iterations: 44902\ncpu: 16165.066144047036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 124736.26399406008,
            "unit": "ns/iter",
            "extra": "iterations: 6735\ncpu: 124727.27542687458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 233924.70303680724,
            "unit": "ns/iter",
            "extra": "iterations: 3721\ncpu: 233900.5912389143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 340751.81405448756,
            "unit": "ns/iter",
            "extra": "iterations: 2533\ncpu: 340745.9928938018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 448884.45374676696,
            "unit": "ns/iter",
            "extra": "iterations: 1935\ncpu: 448794.0568475454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 563601.7078795686,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 563570.0192184492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 534826.6980000176,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 534776.4999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 619801.1860000179,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 619802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 705657.019923356,
            "unit": "ns/iter",
            "extra": "iterations: 1305\ncpu: 705577.8544061308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12277.882451575211,
            "unit": "ns/iter",
            "extra": "iterations: 57253\ncpu: 12277.07369046164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10302.436063208052,
            "unit": "ns/iter",
            "extra": "iterations: 67903\ncpu: 10301.590504101434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10316.963113786534,
            "unit": "ns/iter",
            "extra": "iterations: 67776\ncpu: 10316.432070349396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10411.641532756848,
            "unit": "ns/iter",
            "extra": "iterations: 67147\ncpu: 10410.809120288326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17413.967070325773,
            "unit": "ns/iter",
            "extra": "iterations: 40298\ncpu: 17413.8046553179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 53676.84850000387,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53656.540000000066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 292009.4960276306,
            "unit": "ns/iter",
            "extra": "iterations: 2895\ncpu: 291988.4283246976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 233379.1771117127,
            "unit": "ns/iter",
            "extra": "iterations: 3670\ncpu: 233368.03814713884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 230751.24271315275,
            "unit": "ns/iter",
            "extra": "iterations: 3671\ncpu: 230730.5911195858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 227298.57720979402,
            "unit": "ns/iter",
            "extra": "iterations: 3756\ncpu: 227275.37273695358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 602555.2671141039,
            "unit": "ns/iter",
            "extra": "iterations: 1490\ncpu: 602516.6442953019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3812572.9795082253,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3812199.999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3102330.1066666893,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3102145.3333333326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3093424.0900000986,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3093184.3333333237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3086134.5264898976,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3086031.7880794713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1814569.4990176735,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1814500.5893909624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3005925.2110389736,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3005746.7532467535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11552228.483870989,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 11551917.20430105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5119380.730000103,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5118836.000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14697006.972222464,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14696270.833333358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 59705.86189999949,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59705.890000000036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 324547.98794728983,
            "unit": "ns/iter",
            "extra": "iterations: 2655\ncpu: 324530.4331450092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 256813.5403466775,
            "unit": "ns/iter",
            "extra": "iterations: 3346\ncpu: 256805.37955768107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 256299.6382915151,
            "unit": "ns/iter",
            "extra": "iterations: 3348\ncpu: 256288.14217443304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 254538.55670713188,
            "unit": "ns/iter",
            "extra": "iterations: 3377\ncpu: 254525.02220906038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 587398.3636977073,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 587379.5546558715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3874620.1791667547,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3874280.4166666646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3129141.664429646,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3128861.744966431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3163842.0469799624,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3163698.9932886064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3125585.268456489,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3125316.4429530175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1830112.730844749,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1830001.7681728895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3040286.00983593,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3040064.590163941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11723004.406593231,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11722704.395604344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5345428.030000221,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5344797.999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52066.47659999817,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52063.979999999785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 284525.1365740718,
            "unit": "ns/iter",
            "extra": "iterations: 3024\ncpu: 284512.0701058187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 225009.50341745015,
            "unit": "ns/iter",
            "extra": "iterations: 3804\ncpu: 224989.30073606697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 224371.41405433047,
            "unit": "ns/iter",
            "extra": "iterations: 3828\ncpu: 224348.48484848518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 221862.310362684,
            "unit": "ns/iter",
            "extra": "iterations: 3860\ncpu: 221849.68911917115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 546260.8978696598,
            "unit": "ns/iter",
            "extra": "iterations: 1596\ncpu: 546215.2255639073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3826149.197530772,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3825969.958847741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3168992.943521616,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3168828.5714285895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3084727.7887790403,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3084500.330032989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3078610.4818482553,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3078463.696369639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1792801.59692895,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1792666.7946257303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2994990.7193548777,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 2994852.9032258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6228.847246828627,
            "unit": "ns/iter",
            "extra": "iterations: 112325\ncpu: 6227.960827954575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 35209.57465396846,
            "unit": "ns/iter",
            "extra": "iterations: 20374\ncpu: 35207.79915578651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27130.968896644612,
            "unit": "ns/iter",
            "extra": "iterations: 25785\ncpu: 27128.338181113042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 26781.35607480371,
            "unit": "ns/iter",
            "extra": "iterations: 26149\ncpu: 26779.92275039212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22152.446747246595,
            "unit": "ns/iter",
            "extra": "iterations: 31604\ncpu: 22150.544234906913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 160598.21038062114,
            "unit": "ns/iter",
            "extra": "iterations: 4335\ncpu: 160588.35063437177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 256923.56445098078,
            "unit": "ns/iter",
            "extra": "iterations: 2723\ncpu: 256900.33051781435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 64619.62785325073,
            "unit": "ns/iter",
            "extra": "iterations: 10821\ncpu: 64615.91350152424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 64271.379772393484,
            "unit": "ns/iter",
            "extra": "iterations: 10896\ncpu: 64271.62261380305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 63948.57245979739,
            "unit": "ns/iter",
            "extra": "iterations: 10944\ncpu: 63941.200657894246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 131842.3573042108,
            "unit": "ns/iter",
            "extra": "iterations: 5312\ncpu: 131833.79141566347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 121607.21108593032,
            "unit": "ns/iter",
            "extra": "iterations: 5737\ncpu: 121589.87275579596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 42338.11428225882,
            "unit": "ns/iter",
            "extra": "iterations: 16538\ncpu: 42335.8326278869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 199913.0603719527,
            "unit": "ns/iter",
            "extra": "iterations: 3495\ncpu: 199895.56509298884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 161980.28953434672,
            "unit": "ns/iter",
            "extra": "iterations: 4338\ncpu: 161972.8907330562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 162649.77545813558,
            "unit": "ns/iter",
            "extra": "iterations: 4311\ncpu: 162634.70192530978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 162049.730599956,
            "unit": "ns/iter",
            "extra": "iterations: 4317\ncpu: 162041.02385916183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 294824.5382996704,
            "unit": "ns/iter",
            "extra": "iterations: 2376\ncpu: 294797.85353535524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1096450.255086083,
            "unit": "ns/iter",
            "extra": "iterations: 639\ncpu: 1096423.9436619796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 924740.0238095563,
            "unit": "ns/iter",
            "extra": "iterations: 756\ncpu: 924740.4761904804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 919605.7516425811,
            "unit": "ns/iter",
            "extra": "iterations: 761\ncpu: 919486.5965834445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 916107.9342105363,
            "unit": "ns/iter",
            "extra": "iterations: 760\ncpu: 916055.789473671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 601001.3540051575,
            "unit": "ns/iter",
            "extra": "iterations: 1161\ncpu: 600931.8690783861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 909958.3800259603,
            "unit": "ns/iter",
            "extra": "iterations: 771\ncpu: 909957.7172503307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 42368.834551934604,
            "unit": "ns/iter",
            "extra": "iterations: 16549\ncpu: 42364.95860777033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 202692.63704775678,
            "unit": "ns/iter",
            "extra": "iterations: 3455\ncpu: 202681.88133140525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 164798.1784622614,
            "unit": "ns/iter",
            "extra": "iterations: 4253\ncpu: 164798.21302609736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 164482.0981638471,
            "unit": "ns/iter",
            "extra": "iterations: 4248\ncpu: 164482.2269303219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 164354.89981229493,
            "unit": "ns/iter",
            "extra": "iterations: 4262\ncpu: 164344.67386203515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 294012.7165056729,
            "unit": "ns/iter",
            "extra": "iterations: 2381\ncpu: 293998.23603528086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1090193.3198127688,
            "unit": "ns/iter",
            "extra": "iterations: 641\ncpu: 1090127.7691107597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 921311.0696452403,
            "unit": "ns/iter",
            "extra": "iterations: 761\ncpu: 921210.6438896189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 913397.3537859317,
            "unit": "ns/iter",
            "extra": "iterations: 766\ncpu: 913339.6866840775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 913006.083441958,
            "unit": "ns/iter",
            "extra": "iterations: 767\ncpu: 912985.3976531914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 597417.6448839601,
            "unit": "ns/iter",
            "extra": "iterations: 1163\ncpu: 597368.6156491827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 905838.3717616649,
            "unit": "ns/iter",
            "extra": "iterations: 772\ncpu: 905780.1813471513 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702421912223,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15533.348185474671,
            "unit": "ns/iter",
            "extra": "iterations: 45246\ncpu: 15532.769747601998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 123821.26109890128,
            "unit": "ns/iter",
            "extra": "iterations: 6825\ncpu: 123811.94139194141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 232415.1087305782,
            "unit": "ns/iter",
            "extra": "iterations: 3734\ncpu: 232403.24049276914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 339087.09787737567,
            "unit": "ns/iter",
            "extra": "iterations: 2544\ncpu: 339064.70125786157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 449778.1503604457,
            "unit": "ns/iter",
            "extra": "iterations: 1942\ncpu: 449759.6807415038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 553911.2319489015,
            "unit": "ns/iter",
            "extra": "iterations: 1565\ncpu: 553905.0479233229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 533087.1209999941,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 533039.8 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 619447.330000014,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 619416.9 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 705814.2252873594,
            "unit": "ns/iter",
            "extra": "iterations: 1305\ncpu: 705795.0957854406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12370.616922667366,
            "unit": "ns/iter",
            "extra": "iterations: 56315\ncpu: 12370.139394477512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10368.404929734037,
            "unit": "ns/iter",
            "extra": "iterations: 67671\ncpu: 10368.417786053098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10423.546514918946,
            "unit": "ns/iter",
            "extra": "iterations: 67129\ncpu: 10423.439943988422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10420.870280318182,
            "unit": "ns/iter",
            "extra": "iterations: 67245\ncpu: 10420.691501226853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17345.16084350908,
            "unit": "ns/iter",
            "extra": "iterations: 40213\ncpu: 17344.80889264666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 54031.18820000259,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54029.26000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 290057.1861412986,
            "unit": "ns/iter",
            "extra": "iterations: 2944\ncpu: 290049.21874999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 232847.28073492923,
            "unit": "ns/iter",
            "extra": "iterations: 3701\ncpu: 232838.01675222907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 228242.72234099914,
            "unit": "ns/iter",
            "extra": "iterations: 3742\ncpu: 228238.1346873325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 226836.4948096786,
            "unit": "ns/iter",
            "extra": "iterations: 3757\ncpu: 226830.02395528372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 613149.2694406662,
            "unit": "ns/iter",
            "extra": "iterations: 1466\ncpu: 613132.9467939982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3782622.6382114654,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3782595.121951221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3083301.960132726,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3083211.6279069865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3078460.7019867753,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3078359.6026490144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3089455.4635761366,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3089341.059602643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1799897.1035156907,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1799857.421874995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3013216.051779866,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3013086.4077669904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11382433.48387116,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 11381937.634408604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5104970.689999959,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5104837.999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14703194.722222356,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14702679.166666677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 60380.222899999586,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60378.31000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 320931.96330615354,
            "unit": "ns/iter",
            "extra": "iterations: 2698\ncpu: 320921.23795404093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 258429.8685235098,
            "unit": "ns/iter",
            "extra": "iterations: 3339\ncpu: 258411.62024558114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 255132.39751185064,
            "unit": "ns/iter",
            "extra": "iterations: 3376\ncpu: 255130.15402843582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 252609.6143656169,
            "unit": "ns/iter",
            "extra": "iterations: 3397\ncpu: 252592.4639387709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 605541.5849447508,
            "unit": "ns/iter",
            "extra": "iterations: 1448\ncpu: 604733.5635359114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3866361.3360996386,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3866234.0248962813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3125607.6020067944,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3125530.10033445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3114836.458193978,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3114782.2742475094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3110867.8260869947,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3110841.806020067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1828172.2823529686,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1828125.6862745131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3029561.8441558955,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3029511.0389610394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11644753.27173875,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11644342.391304301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5152390.640000136,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5152324.000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52532.54680000055,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52531.36000000041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 283168.1043793202,
            "unit": "ns/iter",
            "extra": "iterations: 3037\ncpu: 283157.7543628577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 224214.183503007,
            "unit": "ns/iter",
            "extra": "iterations: 3831\ncpu: 224207.64813364611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 221406.82287633274,
            "unit": "ns/iter",
            "extra": "iterations: 3873\ncpu: 221404.079524916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 219703.82275879834,
            "unit": "ns/iter",
            "extra": "iterations: 3893\ncpu: 219697.07166709518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 555230.7273877177,
            "unit": "ns/iter",
            "extra": "iterations: 1581\ncpu: 555227.0082226436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3808553.9877048256,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3808444.262295069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3110156.6711409586,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3110106.375838932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3096982.0766665633,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3096872.333333328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3109077.0133333,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3108970.3333333316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1814178.209302288,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1814164.922480626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3012055.213592338,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3011853.0744336504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6203.04333622534,
            "unit": "ns/iter",
            "extra": "iterations: 112954\ncpu: 6202.714379304875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34956.68955686735,
            "unit": "ns/iter",
            "extra": "iterations: 19994\ncpu: 34955.60668200432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27086.423846184505,
            "unit": "ns/iter",
            "extra": "iterations: 25849\ncpu: 27086.44434987798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27986.57630083021,
            "unit": "ns/iter",
            "extra": "iterations: 25157\ncpu: 27984.14755336472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22118.96090092393,
            "unit": "ns/iter",
            "extra": "iterations: 31612\ncpu: 22117.20549158544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 161190.53008992813,
            "unit": "ns/iter",
            "extra": "iterations: 4337\ncpu: 161179.2713857513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 256145.5920234134,
            "unit": "ns/iter",
            "extra": "iterations: 2733\ncpu: 256141.8587632615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 64588.7301923258,
            "unit": "ns/iter",
            "extra": "iterations: 10867\ncpu: 64586.71206404825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 64476.98524909615,
            "unit": "ns/iter",
            "extra": "iterations: 10779\ncpu: 64474.923462287945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 64265.92414235616,
            "unit": "ns/iter",
            "extra": "iterations: 10902\ncpu: 64264.2359200137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 130947.039476151,
            "unit": "ns/iter",
            "extra": "iterations: 5345\ncpu: 130933.8072965378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 121236.47945917207,
            "unit": "ns/iter",
            "extra": "iterations: 5769\ncpu: 121230.02253423484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 42583.3390759124,
            "unit": "ns/iter",
            "extra": "iterations: 16427\ncpu: 42580.440737809666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 201246.77413792757,
            "unit": "ns/iter",
            "extra": "iterations: 3480\ncpu: 201235.34482758652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 164009.10533706588,
            "unit": "ns/iter",
            "extra": "iterations: 4272\ncpu: 163997.98689138613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 162811.44485721076,
            "unit": "ns/iter",
            "extra": "iterations: 4307\ncpu: 162804.34176921326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 162984.59753259053,
            "unit": "ns/iter",
            "extra": "iterations: 4296\ncpu: 162982.09962756187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 296022.8455008656,
            "unit": "ns/iter",
            "extra": "iterations: 2356\ncpu: 296013.2427843806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1110004.1244018853,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1109981.6586921676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 927311.6230158044,
            "unit": "ns/iter",
            "extra": "iterations: 756\ncpu: 927270.8994708874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 928587.6281540605,
            "unit": "ns/iter",
            "extra": "iterations: 753\ncpu: 928569.1899070326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 921625.5736842377,
            "unit": "ns/iter",
            "extra": "iterations: 760\ncpu: 921592.5000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 605235.6202422203,
            "unit": "ns/iter",
            "extra": "iterations: 1156\ncpu: 605220.1557093442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 913128.1074705016,
            "unit": "ns/iter",
            "extra": "iterations: 763\ncpu: 913098.1651376142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 42601.59224664164,
            "unit": "ns/iter",
            "extra": "iterations: 16380\ncpu: 42600.79975580016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 200812.45705258168,
            "unit": "ns/iter",
            "extra": "iterations: 3481\ncpu: 200807.38293593796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 165193.93110796466,
            "unit": "ns/iter",
            "extra": "iterations: 4224\ncpu: 165188.54166666738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 165259.50707547218,
            "unit": "ns/iter",
            "extra": "iterations: 4240\ncpu: 165256.2500000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 165536.07601510687,
            "unit": "ns/iter",
            "extra": "iterations: 4236\ncpu: 165529.27289896196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 293947.0965170072,
            "unit": "ns/iter",
            "extra": "iterations: 2383\ncpu: 293941.20856064104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1101742.347484242,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1101729.2452830116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 923287.1646903964,
            "unit": "ns/iter",
            "extra": "iterations: 759\ncpu: 923288.5375493945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 923513.3175230317,
            "unit": "ns/iter",
            "extra": "iterations: 759\ncpu: 923482.4769433349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 919833.085638983,
            "unit": "ns/iter",
            "extra": "iterations: 759\ncpu: 919794.7299077671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 603985.2789291651,
            "unit": "ns/iter",
            "extra": "iterations: 1158\ncpu: 603978.1519861807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 912117.0418300643,
            "unit": "ns/iter",
            "extra": "iterations: 765\ncpu: 912105.359477118 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702453366866,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15459.92612334816,
            "unit": "ns/iter",
            "extra": "iterations: 45400\ncpu: 15458.233480176212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 123696.5666275301,
            "unit": "ns/iter",
            "extra": "iterations: 6814\ncpu: 123689.36014088643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 232107.25768511568,
            "unit": "ns/iter",
            "extra": "iterations: 3741\ncpu: 232101.6038492382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 338800.072605977,
            "unit": "ns/iter",
            "extra": "iterations: 2548\ncpu: 338798.2731554161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 446119.3240883192,
            "unit": "ns/iter",
            "extra": "iterations: 1947\ncpu: 446106.3174114021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 553633.1828025618,
            "unit": "ns/iter",
            "extra": "iterations: 1570\ncpu: 553590.7643312102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 531165.8719999741,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 531127.9000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 615312.1320000424,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 615314.9000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 702017.3012869095,
            "unit": "ns/iter",
            "extra": "iterations: 1321\ncpu: 701980.6964420893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12396.799596109535,
            "unit": "ns/iter",
            "extra": "iterations: 56451\ncpu: 12396.71396432305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10376.183312489415,
            "unit": "ns/iter",
            "extra": "iterations: 67164\ncpu: 10375.33500089334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10461.774469437276,
            "unit": "ns/iter",
            "extra": "iterations: 66062\ncpu: 10461.570948502927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10582.971569674612,
            "unit": "ns/iter",
            "extra": "iterations: 67428\ncpu: 10582.854303850027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17438.053387681462,
            "unit": "ns/iter",
            "extra": "iterations: 40234\ncpu: 17424.650792861732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 54682.71479999771,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54683.17000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 299048.8573407081,
            "unit": "ns/iter",
            "extra": "iterations: 2888\ncpu: 299046.88365650957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 236039.73530223474,
            "unit": "ns/iter",
            "extra": "iterations: 3623\ncpu: 236039.85647253628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 235905.78781223745,
            "unit": "ns/iter",
            "extra": "iterations: 3643\ncpu: 235906.31347790308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 231416.73649932115,
            "unit": "ns/iter",
            "extra": "iterations: 3685\ncpu: 231419.62008141022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 610350.1256756611,
            "unit": "ns/iter",
            "extra": "iterations: 1480\ncpu: 610332.1621621617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3784326.8857143032,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3784236.734693875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3067202.509933829,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3067141.721854305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3054922.3476819843,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3054829.4701986667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3128608.4768211236,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3128454.6357615916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1799577.620622581,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1799502.723735404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2976247.8446601448,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 2976130.4207119704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11378643.709677715,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 11378425.806451643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5072417.1199999545,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5072477.0000000065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14665674.22222198,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14665331.944444453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 59832.077600003686,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59832.489999999794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 329200.85197868873,
            "unit": "ns/iter",
            "extra": "iterations: 2628\ncpu: 329195.54794520506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 260402.5565349593,
            "unit": "ns/iter",
            "extra": "iterations: 3290\ncpu: 260401.0942249245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 257783.6051282069,
            "unit": "ns/iter",
            "extra": "iterations: 3315\ncpu: 257776.47058823513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 256488.94747835747,
            "unit": "ns/iter",
            "extra": "iterations: 3351\ncpu: 256488.95851984597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 586616.6437247029,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 586611.1336032354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4028730.349999895,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 4028576.2499999935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3130991.228187825,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3130851.34228187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3117778.7710437304,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3117637.037037028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3261606.979798088,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3261403.3670033626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1832738.5157480813,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1832674.8031496017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3102362.7589576202,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3102247.2312703584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11685227.032966554,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11684842.85714284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5249310.37999977,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5249080.000000034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52774.3695999959,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52761.19999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 289129.3265031822,
            "unit": "ns/iter",
            "extra": "iterations: 2977\ncpu: 289125.529056097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 227910.14716781589,
            "unit": "ns/iter",
            "extra": "iterations: 3778\ncpu: 227898.43832715738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 225453.08749344456,
            "unit": "ns/iter",
            "extra": "iterations: 3806\ncpu: 225448.26589595532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 224541.78224542525,
            "unit": "ns/iter",
            "extra": "iterations: 3830\ncpu: 224533.15926892846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 542594.9751243584,
            "unit": "ns/iter",
            "extra": "iterations: 1608\ncpu: 542576.2437810937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3799593.8653060487,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3799500.816326516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3074001.976973612,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3073826.6447368357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3068727.0098683424,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3068674.671052651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3079244.3234323063,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3079203.9603960398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1792199.7938342402,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1792151.6377649235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2991380.549839347,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2991295.1768488633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6262.889801750739,
            "unit": "ns/iter",
            "extra": "iterations: 111980\ncpu: 6262.537953205925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 35233.22834248742,
            "unit": "ns/iter",
            "extra": "iterations: 19843\ncpu: 35231.99113037344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28311.532643827482,
            "unit": "ns/iter",
            "extra": "iterations: 24752\ncpu: 28309.86586942472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27136.29489839801,
            "unit": "ns/iter",
            "extra": "iterations: 25541\ncpu: 27135.4214791903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22319.78011222283,
            "unit": "ns/iter",
            "extra": "iterations: 31366\ncpu: 22319.01103105272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 159670.82971924066,
            "unit": "ns/iter",
            "extra": "iterations: 4381\ncpu: 159664.4829947497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 255932.6430667556,
            "unit": "ns/iter",
            "extra": "iterations: 2726\ncpu: 255924.06456346496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 64298.04768905735,
            "unit": "ns/iter",
            "extra": "iterations: 10883\ncpu: 64295.34135808147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 64420.269032733915,
            "unit": "ns/iter",
            "extra": "iterations: 10876\ncpu: 64420.926811326564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 64554.28178884359,
            "unit": "ns/iter",
            "extra": "iterations: 10845\ncpu: 64553.2411249429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 132140.57618510383,
            "unit": "ns/iter",
            "extra": "iterations: 5316\ncpu: 132136.81339352796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 122029.8628234018,
            "unit": "ns/iter",
            "extra": "iterations: 5759\ncpu: 122021.67042889455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 42153.28385197408,
            "unit": "ns/iter",
            "extra": "iterations: 16646\ncpu: 42152.00048059601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 199070.00399885597,
            "unit": "ns/iter",
            "extra": "iterations: 3501\ncpu: 199061.0397029416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 160954.7197056797,
            "unit": "ns/iter",
            "extra": "iterations: 4349\ncpu: 160949.09174522734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 162592.09440964655,
            "unit": "ns/iter",
            "extra": "iterations: 4311\ncpu: 162588.26258408756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 161685.13213213749,
            "unit": "ns/iter",
            "extra": "iterations: 4329\ncpu: 161677.31577731698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 297919.31581197085,
            "unit": "ns/iter",
            "extra": "iterations: 2340\ncpu: 297912.73504273756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1097513.4858044167,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1097456.9400630863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 919391.3009198396,
            "unit": "ns/iter",
            "extra": "iterations: 761\ncpu: 919389.3561103856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 919377.8869908095,
            "unit": "ns/iter",
            "extra": "iterations: 761\ncpu: 919323.9159001367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 918379.9388020238,
            "unit": "ns/iter",
            "extra": "iterations: 768\ncpu: 918361.9791666708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 597985.6284246558,
            "unit": "ns/iter",
            "extra": "iterations: 1168\ncpu: 597973.3732876715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 909218.1417425337,
            "unit": "ns/iter",
            "extra": "iterations: 769\ncpu: 909197.5292587877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 42453.85554338711,
            "unit": "ns/iter",
            "extra": "iterations: 16434\ncpu: 42453.40148472655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 200388.07166760863,
            "unit": "ns/iter",
            "extra": "iterations: 3586\ncpu: 200380.591187952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 163413.75689574316,
            "unit": "ns/iter",
            "extra": "iterations: 4278\ncpu: 163414.89013557893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 164201.9123091179,
            "unit": "ns/iter",
            "extra": "iterations: 4322\ncpu: 164198.380379452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 167746.94071982696,
            "unit": "ns/iter",
            "extra": "iterations: 4251\ncpu: 167741.33145142256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 295001.11199999275,
            "unit": "ns/iter",
            "extra": "iterations: 2375\ncpu: 294989.3052631535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1092189.388455505,
            "unit": "ns/iter",
            "extra": "iterations: 641\ncpu: 1092168.3307332161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 911477.0065359742,
            "unit": "ns/iter",
            "extra": "iterations: 765\ncpu: 911425.7516339801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 902886.4566623339,
            "unit": "ns/iter",
            "extra": "iterations: 773\ncpu: 902869.8576972912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 913647.5236220314,
            "unit": "ns/iter",
            "extra": "iterations: 762\ncpu: 913607.7427821599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 596080.5544130139,
            "unit": "ns/iter",
            "extra": "iterations: 1167\ncpu: 596061.9537275059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 908059.345360855,
            "unit": "ns/iter",
            "extra": "iterations: 776\ncpu: 908064.046391769 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702476626909,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15376.173183989134,
            "unit": "ns/iter",
            "extra": "iterations: 45443\ncpu: 15375.446163325487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 124182.8146217978,
            "unit": "ns/iter",
            "extra": "iterations: 6716\ncpu: 124181.2239428231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 234308.05876010633,
            "unit": "ns/iter",
            "extra": "iterations: 3710\ncpu: 234301.2398921833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 341852.5596512084,
            "unit": "ns/iter",
            "extra": "iterations: 2523\ncpu: 341844.5501387238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 450092.0207361274,
            "unit": "ns/iter",
            "extra": "iterations: 1929\ncpu: 450068.0663556246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 559072.9446233134,
            "unit": "ns/iter",
            "extra": "iterations: 1553\ncpu: 559036.1880231808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 535684.4840000008,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 535656.6999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 622793.1069999783,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 622794.2999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 710789.4980842791,
            "unit": "ns/iter",
            "extra": "iterations: 1305\ncpu: 710761.2260536394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12126.441051916368,
            "unit": "ns/iter",
            "extra": "iterations: 57381\ncpu: 12125.9807253272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10320.44257254225,
            "unit": "ns/iter",
            "extra": "iterations: 69270\ncpu: 10319.423993070606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10292.962749745802,
            "unit": "ns/iter",
            "extra": "iterations: 67919\ncpu: 10292.407132024908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10318.887068834549,
            "unit": "ns/iter",
            "extra": "iterations: 65810\ncpu: 10318.833004102728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17309.281338907604,
            "unit": "ns/iter",
            "extra": "iterations: 40421\ncpu: 17309.311991291648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 54201.329899999,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54199.88 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 290344.70746468793,
            "unit": "ns/iter",
            "extra": "iterations: 2974\ncpu: 290334.9024882311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 231216.4934888733,
            "unit": "ns/iter",
            "extra": "iterations: 3686\ncpu: 231211.8556701033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 229647.37130458286,
            "unit": "ns/iter",
            "extra": "iterations: 3687\ncpu: 229640.92758340097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 225998.96296296438,
            "unit": "ns/iter",
            "extra": "iterations: 3780\ncpu: 225994.68253968222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 615922.9643835544,
            "unit": "ns/iter",
            "extra": "iterations: 1460\ncpu: 615903.3561643843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3812973.87295085,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3812834.836065559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3077891.14285714,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3077815.6146179438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3066996.5666667544,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3066858.999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3063655.5115511282,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3063577.557755771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1806123.5381604554,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1806083.1702543998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2997845.7548387204,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 2997716.4516128963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11465514.53763445,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 11465188.172042979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5161348.849999854,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5161360.999999971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14759827.986111023,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14759193.055555532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 59741.315800002325,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59741.44000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 322109.2794776146,
            "unit": "ns/iter",
            "extra": "iterations: 2680\ncpu: 322098.39552238764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 256172.27867383865,
            "unit": "ns/iter",
            "extra": "iterations: 3348\ncpu: 256172.78972521028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 256674.05792773663,
            "unit": "ns/iter",
            "extra": "iterations: 3349\ncpu: 256668.91609435665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 253905.96460176818,
            "unit": "ns/iter",
            "extra": "iterations: 3390\ncpu: 253901.00294985107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 596719.2271486972,
            "unit": "ns/iter",
            "extra": "iterations: 1466\ncpu: 596689.5634379251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3852682.7800830104,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3852586.721991707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3122069.673400608,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3122031.649831656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3128197.4646464414,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3128090.235690228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3105692.8233333756,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3105675.9999999884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1839042.2950494892,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1838970.4950495071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3042320.692810433,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3042216.666666673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11738646.760869456,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11738443.478260856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6661824.435714437,
            "unit": "ns/iter",
            "extra": "iterations: 140\ncpu: 6661685.000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52734.77900000216,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52734.339999999946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 282012.1655149688,
            "unit": "ns/iter",
            "extra": "iterations: 3039\ncpu: 282006.0546232334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 222185.37814037548,
            "unit": "ns/iter",
            "extra": "iterations: 3861\ncpu: 222182.64698264748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 220661.47456320692,
            "unit": "ns/iter",
            "extra": "iterations: 3892\ncpu: 220656.88591983687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 219679.81867145823,
            "unit": "ns/iter",
            "extra": "iterations: 3899\ncpu: 219676.7376250317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 550763.9911504436,
            "unit": "ns/iter",
            "extra": "iterations: 1582\ncpu: 550757.5853350201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3816730.639344223,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3816650.4098360855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3087719.574750736,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3087621.926910293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3082913.8874170384,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3082827.4834437203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3064584.5756577663,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3064543.0921052434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1801086.3075435224,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1801056.6731141233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2994553.5796179837,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2994491.7197452094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6257.577387006339,
            "unit": "ns/iter",
            "extra": "iterations: 112086\ncpu: 6257.537069750066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34833.45547741666,
            "unit": "ns/iter",
            "extra": "iterations: 20192\ncpu: 34833.161648177505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27157.98513833565,
            "unit": "ns/iter",
            "extra": "iterations: 25771\ncpu: 27157.568584843226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28684.413991531863,
            "unit": "ns/iter",
            "extra": "iterations: 24329\ncpu: 28683.68202556609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22195.20843570826,
            "unit": "ns/iter",
            "extra": "iterations: 31746\ncpu: 22195.032445032368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 160709.22097292755,
            "unit": "ns/iter",
            "extra": "iterations: 4358\ncpu: 160699.88526847065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 257596.67681584906,
            "unit": "ns/iter",
            "extra": "iterations: 2726\ncpu: 257586.42699926315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 64296.0367748473,
            "unit": "ns/iter",
            "extra": "iterations: 10877\ncpu: 64294.26312402273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 64337.3757581349,
            "unit": "ns/iter",
            "extra": "iterations: 10882\ncpu: 64335.57250505381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 63685.38641578626,
            "unit": "ns/iter",
            "extra": "iterations: 10895\ncpu: 63683.386874713564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 130831.16554558529,
            "unit": "ns/iter",
            "extra": "iterations: 5352\ncpu: 130822.51494768311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 120355.31858102485,
            "unit": "ns/iter",
            "extra": "iterations: 5807\ncpu: 120350.16359565982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 42406.80679008597,
            "unit": "ns/iter",
            "extra": "iterations: 16583\ncpu: 42403.25031658932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 199507.12942857406,
            "unit": "ns/iter",
            "extra": "iterations: 3500\ncpu: 199502.2571428576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 162220.43533782332,
            "unit": "ns/iter",
            "extra": "iterations: 4307\ncpu: 162207.49941955027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 162326.62893949,
            "unit": "ns/iter",
            "extra": "iterations: 4347\ncpu: 162319.89878076856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 160393.10933887542,
            "unit": "ns/iter",
            "extra": "iterations: 4326\ncpu: 160389.38973647647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 296295.5979686758,
            "unit": "ns/iter",
            "extra": "iterations: 2363\ncpu: 296290.7321201875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1101707.6006289313,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1101709.7484276835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 917580.1997355002,
            "unit": "ns/iter",
            "extra": "iterations: 756\ncpu: 917536.5079365007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 922169.9722955106,
            "unit": "ns/iter",
            "extra": "iterations: 758\ncpu: 922156.068601577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 918113.8503937157,
            "unit": "ns/iter",
            "extra": "iterations: 762\ncpu: 918106.0367454187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 605156.6585998356,
            "unit": "ns/iter",
            "extra": "iterations: 1157\ncpu: 605138.5479688873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 909359.8894668814,
            "unit": "ns/iter",
            "extra": "iterations: 769\ncpu: 909352.9258777692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 42655.14288332566,
            "unit": "ns/iter",
            "extra": "iterations: 16370\ncpu: 42653.81795968265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 200855.06810344526,
            "unit": "ns/iter",
            "extra": "iterations: 3480\ncpu: 200853.735632184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 165302.24397731718,
            "unit": "ns/iter",
            "extra": "iterations: 4234\ncpu: 165296.71705243186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 163746.90309713167,
            "unit": "ns/iter",
            "extra": "iterations: 4262\ncpu: 163745.7062412023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 163763.80200326766,
            "unit": "ns/iter",
            "extra": "iterations: 4293\ncpu: 163760.23759608457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 296545.36726039974,
            "unit": "ns/iter",
            "extra": "iterations: 2358\ncpu: 296543.3842239208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1090473.6338461763,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1090454.6153846276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 918782.3412073518,
            "unit": "ns/iter",
            "extra": "iterations: 762\ncpu: 918729.9212598345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 914761.6908150495,
            "unit": "ns/iter",
            "extra": "iterations: 773\ncpu: 914736.6106080154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 907510.9516971066,
            "unit": "ns/iter",
            "extra": "iterations: 766\ncpu: 907493.3420365548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 599363.7114556216,
            "unit": "ns/iter",
            "extra": "iterations: 1161\ncpu: 599340.9130060294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 900740.4886075838,
            "unit": "ns/iter",
            "extra": "iterations: 790\ncpu: 900676.8354430398 ns\nthreads: 1"
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
          "id": "6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d",
          "message": "fail-fast: false",
          "timestamp": "2023-12-13T17:51:42+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d"
        },
        "date": 1702479531727,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15518.073730944423,
            "unit": "ns/iter",
            "extra": "iterations: 44147\ncpu: 15517.425872652731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 124433.88791208959,
            "unit": "ns/iter",
            "extra": "iterations: 6825\ncpu: 124427.80952380953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 234299.0341765298,
            "unit": "ns/iter",
            "extra": "iterations: 3716\ncpu: 234296.39397201288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 342535.79499403667,
            "unit": "ns/iter",
            "extra": "iterations: 2517\ncpu: 342517.7195073502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 451362.4831168851,
            "unit": "ns/iter",
            "extra": "iterations: 1925\ncpu: 451340.8311688309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 561611.7689832697,
            "unit": "ns/iter",
            "extra": "iterations: 1554\ncpu: 561596.6537966538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 536993.6799999948,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 536979.8999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 623326.9809999911,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 623297.8000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 710627.4861750974,
            "unit": "ns/iter",
            "extra": "iterations: 1302\ncpu: 709221.658986175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12361.054290253867,
            "unit": "ns/iter",
            "extra": "iterations: 56640\ncpu: 12360.605579096058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10334.572854527594,
            "unit": "ns/iter",
            "extra": "iterations: 67724\ncpu: 10333.927411257457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10399.344257179042,
            "unit": "ns/iter",
            "extra": "iterations: 67284\ncpu: 10398.815468759296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10438.771871787218,
            "unit": "ns/iter",
            "extra": "iterations: 67107\ncpu: 10438.09289641917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17421.84836412434,
            "unit": "ns/iter",
            "extra": "iterations: 40162\ncpu: 17420.504456949373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 53714.18789999893,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53712.56999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 291311.24404356047,
            "unit": "ns/iter",
            "extra": "iterations: 2938\ncpu: 291301.8720217839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 234245.5171755665,
            "unit": "ns/iter",
            "extra": "iterations: 3668\ncpu: 234230.7797164666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 229952.50067186047,
            "unit": "ns/iter",
            "extra": "iterations: 3721\ncpu: 229940.23112066623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 227317.80899175757,
            "unit": "ns/iter",
            "extra": "iterations: 3759\ncpu: 227308.7523277466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 619571.7056396212,
            "unit": "ns/iter",
            "extra": "iterations: 1454\ncpu: 619528.3356258597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3826810.0452673673,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3826715.637860087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3106190.2441470358,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3105990.9698996674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3100222.0499999565,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3100065.6666666637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3103424.073578578,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3103258.8628762555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1821347.656862724,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1821210.3921568599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3021196.9542483976,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3021064.052287577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11576956.064516252,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 11576186.021505391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5192803.9599999925,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5192571.999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14753199.347222473,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14752259.722222246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 59485.167700000835,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59481.68000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 323124.2720808495,
            "unit": "ns/iter",
            "extra": "iterations: 2672\ncpu: 323103.66766467097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 259212.7364294421,
            "unit": "ns/iter",
            "extra": "iterations: 3316\ncpu: 259200.241254523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 258185.56589613075,
            "unit": "ns/iter",
            "extra": "iterations: 3331\ncpu: 258165.47583308394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 253550.64926254412,
            "unit": "ns/iter",
            "extra": "iterations: 3390\ncpu: 253536.69616518993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 602542.1652777949,
            "unit": "ns/iter",
            "extra": "iterations: 1440\ncpu: 602505.9027777748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3899843.3389120675,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3899565.2719665235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3156157.052083349,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3155997.569444427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3129878.639730683,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3129697.306397299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3154398.7830509576,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3154240.3389830454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1840655.9603959925,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1840561.584158425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3058060.534426174,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3057933.1147540887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11710686.75824177,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11709951.648351625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5068351.0800001845,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5068264.999999954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52213.52089999982,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52208.59000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 282568.52825229,
            "unit": "ns/iter",
            "extra": "iterations: 3044\ncpu: 282553.3180026275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 225282.60792027152,
            "unit": "ns/iter",
            "extra": "iterations: 3813\ncpu: 225266.56176239156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 221971.610147553,
            "unit": "ns/iter",
            "extra": "iterations: 3863\ncpu: 221962.15376650315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 220990.61888832468,
            "unit": "ns/iter",
            "extra": "iterations: 3886\ncpu: 220977.17447246582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 555167.6836409785,
            "unit": "ns/iter",
            "extra": "iterations: 1571\ncpu: 555141.5022278819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3844389.706611439,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3844107.0247933716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3117466.9230768057,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3117256.187290954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3100455.860465217,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3100325.5813953397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3115652.480000032,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3115457.999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1809314.4854368651,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1809269.1262135915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3015485.3009708095,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3015312.2977346443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6232.077358105951,
            "unit": "ns/iter",
            "extra": "iterations: 112813\ncpu: 6231.871326886072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 35284.10950674143,
            "unit": "ns/iter",
            "extra": "iterations: 19807\ncpu: 35281.940728025496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29125.15431662195,
            "unit": "ns/iter",
            "extra": "iterations: 24035\ncpu: 29122.0969419595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27062.021671705657,
            "unit": "ns/iter",
            "extra": "iterations: 25794\ncpu: 27060.029464216397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22159.486723422986,
            "unit": "ns/iter",
            "extra": "iterations: 31597\ncpu: 22158.499224609954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 163133.77730460512,
            "unit": "ns/iter",
            "extra": "iterations: 3992\ncpu: 163133.69238477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 256758.51531930416,
            "unit": "ns/iter",
            "extra": "iterations: 2709\ncpu: 256755.5924695462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 64727.7639803412,
            "unit": "ns/iter",
            "extra": "iterations: 10783\ncpu: 64722.19233979385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 64542.871172997024,
            "unit": "ns/iter",
            "extra": "iterations: 10844\ncpu: 64539.81003319881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 64535.489332220786,
            "unit": "ns/iter",
            "extra": "iterations: 10827\ncpu: 64532.76992703508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 132061.8276447318,
            "unit": "ns/iter",
            "extra": "iterations: 5303\ncpu: 132061.79521025805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 123479.45167447664,
            "unit": "ns/iter",
            "extra": "iterations: 5763\ncpu: 123475.13447856963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 42457.12544737423,
            "unit": "ns/iter",
            "extra": "iterations: 16485\ncpu: 42452.18683651824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 200341.02034383666,
            "unit": "ns/iter",
            "extra": "iterations: 3490\ncpu: 200335.84527220586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 163165.3979972052,
            "unit": "ns/iter",
            "extra": "iterations: 4294\ncpu: 163160.0372612954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 162298.06171694587,
            "unit": "ns/iter",
            "extra": "iterations: 4310\ncpu: 162294.0603248249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 162766.41807647096,
            "unit": "ns/iter",
            "extra": "iterations: 4315\ncpu: 162762.45654692937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 299002.21391971945,
            "unit": "ns/iter",
            "extra": "iterations: 2342\ncpu: 298994.4064901799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1107379.880952359,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1107365.5555555383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 923683.6586666565,
            "unit": "ns/iter",
            "extra": "iterations: 750\ncpu: 923671.0666666568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 928160.046357593,
            "unit": "ns/iter",
            "extra": "iterations: 755\ncpu: 928150.5960264994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 917082.8926701192,
            "unit": "ns/iter",
            "extra": "iterations: 764\ncpu: 917061.5183245958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 602953.2227979332,
            "unit": "ns/iter",
            "extra": "iterations: 1158\ncpu: 602937.564766838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 911721.0886570597,
            "unit": "ns/iter",
            "extra": "iterations: 767\ncpu: 911700.2607561887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 42591.707437415,
            "unit": "ns/iter",
            "extra": "iterations: 16417\ncpu: 42590.01644636664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 203134.19727297864,
            "unit": "ns/iter",
            "extra": "iterations: 3447\ncpu: 203129.79402378932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 165655.6316410766,
            "unit": "ns/iter",
            "extra": "iterations: 4235\ncpu: 165650.01180637733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 164516.0271981218,
            "unit": "ns/iter",
            "extra": "iterations: 4265\ncpu: 164514.09144196683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 164577.76607773546,
            "unit": "ns/iter",
            "extra": "iterations: 4245\ncpu: 164577.66784452435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 299357.1219511998,
            "unit": "ns/iter",
            "extra": "iterations: 2337\ncpu: 299354.00085579674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1099441.990595658,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1099441.849529782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 921637.3657894762,
            "unit": "ns/iter",
            "extra": "iterations: 760\ncpu: 921610.2631578892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 920344.6582781252,
            "unit": "ns/iter",
            "extra": "iterations: 755\ncpu: 920333.1125827796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 916182.7316754309,
            "unit": "ns/iter",
            "extra": "iterations: 764\ncpu: 916123.8219895336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 601831.6655201906,
            "unit": "ns/iter",
            "extra": "iterations: 1163\ncpu: 601797.2484952697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 909549.7116882674,
            "unit": "ns/iter",
            "extra": "iterations: 770\ncpu: 909521.1688311715 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T20:22:18+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702488551786,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16843.961771349845,
            "unit": "ns/iter",
            "extra": "iterations: 41618\ncpu: 16843.531644961316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 129330.78161965727,
            "unit": "ns/iter",
            "extra": "iterations: 6594\ncpu: 129326.32696390657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 240873.50305215764,
            "unit": "ns/iter",
            "extra": "iterations: 3604\ncpu: 240870.28301886792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 350349.50590149255,
            "unit": "ns/iter",
            "extra": "iterations: 2457\ncpu: 350338.25803825806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 462889.76734258985,
            "unit": "ns/iter",
            "extra": "iterations: 1874\ncpu: 462872.99893276446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 575811.3419312142,
            "unit": "ns/iter",
            "extra": "iterations: 1512\ncpu: 575768.1878306878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 550548.761000016,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 550539.3999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 659034.4429999959,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 658998.6000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 729926.7161187003,
            "unit": "ns/iter",
            "extra": "iterations: 1247\ncpu: 729897.1932638333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12416.532300657285,
            "unit": "ns/iter",
            "extra": "iterations: 56423\ncpu: 12415.642557113228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10436.44886975299,
            "unit": "ns/iter",
            "extra": "iterations: 66888\ncpu: 10436.40264322448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10566.299667704581,
            "unit": "ns/iter",
            "extra": "iterations: 66507\ncpu: 10565.925391312183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10599.536896433063,
            "unit": "ns/iter",
            "extra": "iterations: 63746\ncpu: 10599.347410033593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17495.78219463673,
            "unit": "ns/iter",
            "extra": "iterations: 39797\ncpu: 17494.162876598766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 53907.64999999646,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53904.939999999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 294488.09666439367,
            "unit": "ns/iter",
            "extra": "iterations: 2938\ncpu: 294463.27433628304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 236296.96676906888,
            "unit": "ns/iter",
            "extra": "iterations: 3581\ncpu: 236273.27562133502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 229201.10531944202,
            "unit": "ns/iter",
            "extra": "iterations: 3741\ncpu: 229187.08901363274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 226247.21645939397,
            "unit": "ns/iter",
            "extra": "iterations: 3779\ncpu: 226235.27388197932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 609399.5553292525,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 609386.2186014944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3826727.3456790647,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3826602.8806584394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3129792.4882154013,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3129746.1279461286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3156849.636054499,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3156769.387755101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3139803.8576271883,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3139726.10169491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1836999.5178572268,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1836919.4444444445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3054789.178217821,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3054632.0132013187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11608236.217390956,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11607568.47826088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5256397.239999728,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5256222.000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14949776.352112545,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14949232.394366194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 61424.57149037452,
            "unit": "ns/iter",
            "extra": "iterations: 13869\ncpu: 61423.29656067473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 323503.12317485263,
            "unit": "ns/iter",
            "extra": "iterations: 2671\ncpu: 323497.0797454135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 258439.29367469234,
            "unit": "ns/iter",
            "extra": "iterations: 3320\ncpu: 258430.51204819378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 257019.332735426,
            "unit": "ns/iter",
            "extra": "iterations: 3345\ncpu: 257001.1360239167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 252079.19688050388,
            "unit": "ns/iter",
            "extra": "iterations: 3398\ncpu: 252066.86286050561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 604332.2559241831,
            "unit": "ns/iter",
            "extra": "iterations: 1477\ncpu: 604325.1184834163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3902269.911764615,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3902106.722689081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3171211.469178033,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3171140.7534246338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3191831.9278349476,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3191705.1546391672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3188569.0482758083,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3188441.034482747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1855651.8323352858,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1855606.1876247453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3092231.641196131,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3092120.598006663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11910689.644444497,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 11910403.333333382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5241405.360000044,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5241036.999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52575.87039999975,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52573.58999999937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 281597.789783878,
            "unit": "ns/iter",
            "extra": "iterations: 3054\ncpu: 281593.51669941033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 224316.21151341597,
            "unit": "ns/iter",
            "extra": "iterations: 3839\ncpu: 224300.26048450204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 221295.66985028598,
            "unit": "ns/iter",
            "extra": "iterations: 3874\ncpu: 221289.41662364575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 219803.37493580006,
            "unit": "ns/iter",
            "extra": "iterations: 3894\ncpu: 219784.51463790552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 547880.8286252391,
            "unit": "ns/iter",
            "extra": "iterations: 1593\ncpu: 547857.2504708119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3863734.941666763,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3863607.083333331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3129613.0436241156,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3129539.5973154292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3142946.199999973,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3142836.61016949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3145553.7736487286,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3145393.581081073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1822318.087890573,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1822262.8906249956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3040519.356209099,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3040396.078431373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6265.335169441581,
            "unit": "ns/iter",
            "extra": "iterations: 110923\ncpu: 6265.1848579645275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34323.3861609346,
            "unit": "ns/iter",
            "extra": "iterations: 20406\ncpu: 34321.69459962772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28347.706269287984,
            "unit": "ns/iter",
            "extra": "iterations: 24628\ncpu: 28346.166964430726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29077.746495861295,
            "unit": "ns/iter",
            "extra": "iterations: 24043\ncpu: 29075.24435386599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22254.866793589772,
            "unit": "ns/iter",
            "extra": "iterations: 31515\ncpu: 22254.113914009118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 159926.94154199903,
            "unit": "ns/iter",
            "extra": "iterations: 4345\ncpu: 159920.89758343037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 246660.6320422456,
            "unit": "ns/iter",
            "extra": "iterations: 2840\ncpu: 246655.4929577449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 65503.974500281365,
            "unit": "ns/iter",
            "extra": "iterations: 10706\ncpu: 65500.02802167024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 65474.07734910722,
            "unit": "ns/iter",
            "extra": "iterations: 10653\ncpu: 65472.101755373704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 65440.63682983796,
            "unit": "ns/iter",
            "extra": "iterations: 10725\ncpu: 65437.04428904431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 133259.26908397206,
            "unit": "ns/iter",
            "extra": "iterations: 5240\ncpu: 133253.01526717463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 122885.89372149961,
            "unit": "ns/iter",
            "extra": "iterations: 5702\ncpu: 122883.12872676269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 42517.362493132605,
            "unit": "ns/iter",
            "extra": "iterations: 16381\ncpu: 42514.75489896825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 200504.86483390268,
            "unit": "ns/iter",
            "extra": "iterations: 3492\ncpu: 200499.7136311587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 164527.52599531107,
            "unit": "ns/iter",
            "extra": "iterations: 4270\ncpu: 164524.00468384053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 164893.85394581428,
            "unit": "ns/iter",
            "extra": "iterations: 4245\ncpu: 164890.05889281645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 163983.68368063626,
            "unit": "ns/iter",
            "extra": "iterations: 4271\ncpu: 163971.7162257082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 297812.00170283805,
            "unit": "ns/iter",
            "extra": "iterations: 2349\ncpu: 297804.7679863755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1109679.9587956092,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1109655.625990495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 932190.0757979325,
            "unit": "ns/iter",
            "extra": "iterations: 752\ncpu: 932144.1489361672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 943744.3328822386,
            "unit": "ns/iter",
            "extra": "iterations: 739\ncpu: 943676.3193504746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 932718.7506631371,
            "unit": "ns/iter",
            "extra": "iterations: 754\ncpu: 932658.753315659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 610035.4033101025,
            "unit": "ns/iter",
            "extra": "iterations: 1148\ncpu: 610015.2439024433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 922807.6368421064,
            "unit": "ns/iter",
            "extra": "iterations: 760\ncpu: 922807.3684210501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43326.475315515396,
            "unit": "ns/iter",
            "extra": "iterations: 16164\ncpu: 43326.905468943405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 203801.29497238054,
            "unit": "ns/iter",
            "extra": "iterations: 3441\ncpu: 203796.74513222952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 166587.18249579062,
            "unit": "ns/iter",
            "extra": "iterations: 4159\ncpu: 166588.91560471433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 167663.66261034977,
            "unit": "ns/iter",
            "extra": "iterations: 4191\ncpu: 167665.42591266945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 166659.96595238973,
            "unit": "ns/iter",
            "extra": "iterations: 4200\ncpu: 166661.66666666645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 300252.0188517654,
            "unit": "ns/iter",
            "extra": "iterations: 2334\ncpu: 300248.24335904105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1102708.9351266013,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1102707.1202531515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 928542.041114015,
            "unit": "ns/iter",
            "extra": "iterations: 754\ncpu: 928482.7586207028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 936809.8422460257,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 936714.9732620177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 986586.085675991,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 986529.7188755001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 604644.3316062466,
            "unit": "ns/iter",
            "extra": "iterations: 1158\ncpu: 604616.9257340314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 921644.6213720175,
            "unit": "ns/iter",
            "extra": "iterations: 758\ncpu: 921574.8021108059 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T20:22:18+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702490781984,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15913.047863796242,
            "unit": "ns/iter",
            "extra": "iterations: 43582\ncpu: 15912.190812720852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 128118.54394516334,
            "unit": "ns/iter",
            "extra": "iterations: 6565\ncpu: 128114.62300076164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 240490.00110773338,
            "unit": "ns/iter",
            "extra": "iterations: 3611\ncpu: 240479.42398227635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 350415.7512195184,
            "unit": "ns/iter",
            "extra": "iterations: 2460\ncpu: 350404.6747967479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 461269.1578108353,
            "unit": "ns/iter",
            "extra": "iterations: 1882\ncpu: 461245.0053134965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 572665.0157790802,
            "unit": "ns/iter",
            "extra": "iterations: 1521\ncpu: 572643.4582511507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 553930.2910000287,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 553893.8 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 639347.2650000262,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 639312.6999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 731812.5169157834,
            "unit": "ns/iter",
            "extra": "iterations: 1271\ncpu: 731786.3886703383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12780.042700173466,
            "unit": "ns/iter",
            "extra": "iterations: 55152\ncpu: 12779.462213519006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10636.782143779432,
            "unit": "ns/iter",
            "extra": "iterations: 65837\ncpu: 10636.584291507812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10610.001999938624,
            "unit": "ns/iter",
            "extra": "iterations: 65502\ncpu: 10609.67604042625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10656.445796950606,
            "unit": "ns/iter",
            "extra": "iterations: 65393\ncpu: 10656.02587432908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17730.79491010451,
            "unit": "ns/iter",
            "extra": "iterations: 39490\ncpu: 17730.311471258545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 54010.97910000203,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54010.64000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 291874.33254397294,
            "unit": "ns/iter",
            "extra": "iterations: 2956\ncpu: 291861.907983762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 234828.26559956514,
            "unit": "ns/iter",
            "extra": "iterations: 3686\ncpu: 234823.25013564856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 230390.98003237287,
            "unit": "ns/iter",
            "extra": "iterations: 3706\ncpu: 230382.27199136541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 227061.92144934714,
            "unit": "ns/iter",
            "extra": "iterations: 3781\ncpu: 227054.7738693462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 613016.9911684662,
            "unit": "ns/iter",
            "extra": "iterations: 1472\ncpu: 612992.7309782591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3942006.5840708734,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 3941961.0619468917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3182093.3986254237,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3182006.1855670162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3161049.187713277,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3160899.6587030706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3182937.634812361,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3182828.3276450546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1833016.5099206353,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1832955.7539682603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3088964.410000017,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3088910.3333333284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11605957.260869723,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11605766.304347822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5251641.120000272,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5251562.999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15088118.657142298,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 15087685.714285724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 60375.94560000343,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60374.79999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 327440.96989329305,
            "unit": "ns/iter",
            "extra": "iterations: 2624\ncpu: 327430.06859756104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 256636.64142470894,
            "unit": "ns/iter",
            "extra": "iterations: 3341\ncpu: 256635.55821610335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 254524.79668540866,
            "unit": "ns/iter",
            "extra": "iterations: 3379\ncpu: 254520.9233501036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 250309.4043731835,
            "unit": "ns/iter",
            "extra": "iterations: 3430\ncpu: 250304.6647230319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 592674.3662355318,
            "unit": "ns/iter",
            "extra": "iterations: 1469\ncpu: 592667.5289312432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3999992.432900389,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 3999850.649350655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3218863.702422044,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3218769.8961937763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3213537.882758656,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3213487.9310344765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3210281.29065756,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3210302.4221453415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1870379.5483871305,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1870369.153225811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3139601.530201289,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3139492.61744966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11883877.067415588,
            "unit": "ns/iter",
            "extra": "iterations: 89\ncpu: 11883864.044943755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5159344.979999787,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5159380.999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52916.8057999982,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52915.339999999844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 283657.676567654,
            "unit": "ns/iter",
            "extra": "iterations: 3030\ncpu: 283649.10891089233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 228752.48257023818,
            "unit": "ns/iter",
            "extra": "iterations: 3844\ncpu: 228745.7596253901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 222296.22282609035,
            "unit": "ns/iter",
            "extra": "iterations: 3864\ncpu: 222288.5093167707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 218948.8335035752,
            "unit": "ns/iter",
            "extra": "iterations: 3916\ncpu: 218943.53932584389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 549539.1802763885,
            "unit": "ns/iter",
            "extra": "iterations: 1592\ncpu: 549512.6256281394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3950366.834042481,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3950261.7021276574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3199813.505119373,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3199741.9795221877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3172170.108474594,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3172032.5423728856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3172856.8367346185,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3172837.414965972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1822742.2436150138,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1822638.1139489154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3076585.5346533908,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3076514.8514851467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6217.944285296235,
            "unit": "ns/iter",
            "extra": "iterations: 112753\ncpu: 6217.674030846189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 35422.042571457496,
            "unit": "ns/iter",
            "extra": "iterations: 19802\ncpu: 35420.78577921418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29196.76515583199,
            "unit": "ns/iter",
            "extra": "iterations: 24578\ncpu: 29195.91097729676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29002.985371514027,
            "unit": "ns/iter",
            "extra": "iterations: 24131\ncpu: 29002.121752103114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22354.199974467894,
            "unit": "ns/iter",
            "extra": "iterations: 31334\ncpu: 22353.07333886506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 160827.79423962266,
            "unit": "ns/iter",
            "extra": "iterations: 4340\ncpu: 160827.48847926225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 265342.8866565671,
            "unit": "ns/iter",
            "extra": "iterations: 2638\ncpu: 265341.7740712653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66304.90749315252,
            "unit": "ns/iter",
            "extra": "iterations: 10583\ncpu: 66305.38599640908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 66133.34822440664,
            "unit": "ns/iter",
            "extra": "iterations: 10588\ncpu: 66129.6278806184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66219.52466155439,
            "unit": "ns/iter",
            "extra": "iterations: 10563\ncpu: 66215.04307488343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 133179.7141771149,
            "unit": "ns/iter",
            "extra": "iterations: 5262\ncpu: 133175.63664006232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 123856.67569480794,
            "unit": "ns/iter",
            "extra": "iterations: 5649\ncpu: 123851.33651973809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43656.09082391331,
            "unit": "ns/iter",
            "extra": "iterations: 16009\ncpu: 43654.581797738625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 207448.25490196023,
            "unit": "ns/iter",
            "extra": "iterations: 3366\ncpu: 207438.94830659527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 168578.42006270032,
            "unit": "ns/iter",
            "extra": "iterations: 4147\ncpu: 168576.7542802028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 168462.10062589977,
            "unit": "ns/iter",
            "extra": "iterations: 4154\ncpu: 168463.28839672726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 168914.30921848447,
            "unit": "ns/iter",
            "extra": "iterations: 4133\ncpu: 168915.53351076768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 304074.7489121205,
            "unit": "ns/iter",
            "extra": "iterations: 2298\ncpu: 304073.5422106138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1142358.1009772639,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1142311.726384377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 957379.4357922913,
            "unit": "ns/iter",
            "extra": "iterations: 732\ncpu: 957342.7595628401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 951005.968750027,
            "unit": "ns/iter",
            "extra": "iterations: 736\ncpu: 950961.5489130396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 951064.528532596,
            "unit": "ns/iter",
            "extra": "iterations: 736\ncpu: 951023.0978260782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 617857.9361135609,
            "unit": "ns/iter",
            "extra": "iterations: 1127\ncpu: 617843.5669920021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 941044.7560322431,
            "unit": "ns/iter",
            "extra": "iterations: 746\ncpu: 941006.0321715925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43802.40391984456,
            "unit": "ns/iter",
            "extra": "iterations: 15919\ncpu: 43802.23632137684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 212416.6215394191,
            "unit": "ns/iter",
            "extra": "iterations: 3287\ncpu: 212418.13203529108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 172644.95267441153,
            "unit": "ns/iter",
            "extra": "iterations: 4057\ncpu: 172636.62805028094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 171411.558902753,
            "unit": "ns/iter",
            "extra": "iterations: 4083\ncpu: 171405.06980161575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 171582.8837665447,
            "unit": "ns/iter",
            "extra": "iterations: 4078\ncpu: 171576.23835213357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 305486.80008730775,
            "unit": "ns/iter",
            "extra": "iterations: 2291\ncpu: 305476.4295067623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1135471.277597413,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1135436.201298699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 954404.2027211036,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 954334.6938775525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 942955.8021535458,
            "unit": "ns/iter",
            "extra": "iterations: 743\ncpu: 942952.8936742956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 947845.2367347371,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 947842.0408163323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 615450.6517150598,
            "unit": "ns/iter",
            "extra": "iterations: 1137\ncpu: 615426.0334212828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 935324.8672921753,
            "unit": "ns/iter",
            "extra": "iterations: 746\ncpu: 935290.6166219814 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}