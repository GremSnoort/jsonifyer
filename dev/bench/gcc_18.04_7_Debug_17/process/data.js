window.BENCHMARK_DATA = {
  "lastUpdate": 1702421423130,
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
      }
    ]
  }
}