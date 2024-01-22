window.BENCHMARK_DATA = {
  "lastUpdate": 1705960436719,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-12 20.04 Release c++-17": [
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702490367436,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 742.5573070381403,
            "unit": "ns/iter",
            "extra": "iterations: 943645\ncpu: 742.5340037832024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10860.388475342494,
            "unit": "ns/iter",
            "extra": "iterations: 75230\ncpu: 10860.152864548718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24477.618182887214,
            "unit": "ns/iter",
            "extra": "iterations: 34032\ncpu: 24477.433004231305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38311.277197264375,
            "unit": "ns/iter",
            "extra": "iterations: 22107\ncpu: 38311.23626000814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48020.16093609763,
            "unit": "ns/iter",
            "extra": "iterations: 16665\ncpu: 48018.40984098409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 60181.65212440394,
            "unit": "ns/iter",
            "extra": "iterations: 14051\ncpu: 60180.955092164215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60605.23429999876,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60604.66000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 69307.80669833272,
            "unit": "ns/iter",
            "extra": "iterations: 12421\ncpu: 69306.98816520411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 79675.4302705637,
            "unit": "ns/iter",
            "extra": "iterations: 11014\ncpu: 79673.6153985837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 602.9130330760413,
            "unit": "ns/iter",
            "extra": "iterations: 1161959\ncpu: 602.9124091297548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 513.7087979355388,
            "unit": "ns/iter",
            "extra": "iterations: 1363263\ncpu: 513.704105517424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 518.7179523981183,
            "unit": "ns/iter",
            "extra": "iterations: 1344695\ncpu: 518.7137603694512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 498.8959505831211,
            "unit": "ns/iter",
            "extra": "iterations: 1404054\ncpu: 498.87653893653584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 969.114673383055,
            "unit": "ns/iter",
            "extra": "iterations: 721824\ncpu: 969.1078434632257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3299.4028394458123,
            "unit": "ns/iter",
            "extra": "iterations: 236032\ncpu: 3299.241628253791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14883.34066665393,
            "unit": "ns/iter",
            "extra": "iterations: 54091\ncpu: 14882.784566748638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11935.843003165128,
            "unit": "ns/iter",
            "extra": "iterations: 68581\ncpu: 11935.760633411559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11244.910686792104,
            "unit": "ns/iter",
            "extra": "iterations: 72744\ncpu: 11244.842186297117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11713.693885830457,
            "unit": "ns/iter",
            "extra": "iterations: 69020\ncpu: 11713.581570559236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 36614.46541264676,
            "unit": "ns/iter",
            "extra": "iterations: 22913\ncpu: 36611.975734299376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 472748.519271917,
            "unit": "ns/iter",
            "extra": "iterations: 1868\ncpu: 472724.7323340463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 376173.1062254926,
            "unit": "ns/iter",
            "extra": "iterations: 2297\ncpu: 376146.3212886371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 368644.2224576313,
            "unit": "ns/iter",
            "extra": "iterations: 2360\ncpu: 368626.35593220306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 376835.5853234864,
            "unit": "ns/iter",
            "extra": "iterations: 2303\ncpu: 376825.9227095089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 230297.56339144887,
            "unit": "ns/iter",
            "extra": "iterations: 3786\ncpu: 230280.42789223386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 374271.27761065477,
            "unit": "ns/iter",
            "extra": "iterations: 2327\ncpu: 374259.0889557365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1905266.783505232,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1905095.463917529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 749883.39697699,
            "unit": "ns/iter",
            "extra": "iterations: 1257\ncpu: 749834.6062052483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2567706.106741832,
            "unit": "ns/iter",
            "extra": "iterations: 356\ncpu: 2567522.1910112365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3242.832463982693,
            "unit": "ns/iter",
            "extra": "iterations: 243285\ncpu: 3242.636414082256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14921.749736221205,
            "unit": "ns/iter",
            "extra": "iterations: 54970\ncpu: 14920.953247225807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12420.479521252953,
            "unit": "ns/iter",
            "extra": "iterations: 65922\ncpu: 12419.661114650593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11586.431521878447,
            "unit": "ns/iter",
            "extra": "iterations: 70643\ncpu: 11585.697096669184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12288.246039550362,
            "unit": "ns/iter",
            "extra": "iterations: 66091\ncpu: 12287.579246796138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 36228.81467232121,
            "unit": "ns/iter",
            "extra": "iterations: 22873\ncpu: 36227.22861015171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 477277.74709464685,
            "unit": "ns/iter",
            "extra": "iterations: 1807\ncpu: 477244.88101826113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 388040.75233852956,
            "unit": "ns/iter",
            "extra": "iterations: 2245\ncpu: 388036.16926503513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 380747.5910683012,
            "unit": "ns/iter",
            "extra": "iterations: 2284\ncpu: 380724.124343257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 381249.0331588248,
            "unit": "ns/iter",
            "extra": "iterations: 2292\ncpu: 381226.83246073354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 229621.34587058733,
            "unit": "ns/iter",
            "extra": "iterations: 3802\ncpu: 229622.11993687713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 377922.0736117309,
            "unit": "ns/iter",
            "extra": "iterations: 2323\ncpu: 377917.8217821802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1926295.4767933607,
            "unit": "ns/iter",
            "extra": "iterations: 474\ncpu: 1926123.6286919818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 764815.3485342327,
            "unit": "ns/iter",
            "extra": "iterations: 1228\ncpu: 764777.7687296413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3290.1722708105935,
            "unit": "ns/iter",
            "extra": "iterations: 242856\ncpu: 3290.1340712191677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14959.544815176765,
            "unit": "ns/iter",
            "extra": "iterations: 55026\ncpu: 14959.571838767139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12054.154268590159,
            "unit": "ns/iter",
            "extra": "iterations: 67739\ncpu: 12054.045675312638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 10536.09675677772,
            "unit": "ns/iter",
            "extra": "iterations: 77793\ncpu: 10535.877264021272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11508.652637910223,
            "unit": "ns/iter",
            "extra": "iterations: 71496\ncpu: 11508.677408526377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 35934.13593736641,
            "unit": "ns/iter",
            "extra": "iterations: 23246\ncpu: 35933.27454185653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 467784.1336206967,
            "unit": "ns/iter",
            "extra": "iterations: 1856\ncpu: 467784.85991379514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 380869.0175208399,
            "unit": "ns/iter",
            "extra": "iterations: 2283\ncpu: 380869.5575996519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 373298.0497001053,
            "unit": "ns/iter",
            "extra": "iterations: 2334\ncpu: 373294.1730934021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 379014.70547347487,
            "unit": "ns/iter",
            "extra": "iterations: 2302\ncpu: 379015.85577758553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 232182.53829785067,
            "unit": "ns/iter",
            "extra": "iterations: 3760\ncpu: 232177.15425531878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 378174.6080818189,
            "unit": "ns/iter",
            "extra": "iterations: 2054\ncpu: 378175.85199610563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 317.7280320262772,
            "unit": "ns/iter",
            "extra": "iterations: 2050815\ncpu: 317.7286103329636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1509.8736802860092,
            "unit": "ns/iter",
            "extra": "iterations: 464021\ncpu: 1509.8592520597238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1152.3033343688794,
            "unit": "ns/iter",
            "extra": "iterations: 608421\ncpu: 1152.2781100586546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1140.850825455281,
            "unit": "ns/iter",
            "extra": "iterations: 612571\ncpu: 1140.853060298314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1005.4679676378864,
            "unit": "ns/iter",
            "extra": "iterations: 698965\ncpu: 1005.4708032591068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6738.657764370714,
            "unit": "ns/iter",
            "extra": "iterations: 103756\ncpu: 6738.669570916346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19585.243778329557,
            "unit": "ns/iter",
            "extra": "iterations: 35963\ncpu: 19584.842755053873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4598.637517077389,
            "unit": "ns/iter",
            "extra": "iterations: 152981\ncpu: 4598.6083239094705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4522.7163574241795,
            "unit": "ns/iter",
            "extra": "iterations: 155703\ncpu: 4522.729812527711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4530.486386483492,
            "unit": "ns/iter",
            "extra": "iterations: 154589\ncpu: 4530.495701505299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9245.544388099517,
            "unit": "ns/iter",
            "extra": "iterations: 75527\ncpu: 9245.261959299232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 7753.632220144608,
            "unit": "ns/iter",
            "extra": "iterations: 88814\ncpu: 7753.658207039436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3160.2000180829114,
            "unit": "ns/iter",
            "extra": "iterations: 221205\ncpu: 3160.2115684545856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15884.390936897305,
            "unit": "ns/iter",
            "extra": "iterations: 44135\ncpu: 15884.43185680279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12573.50938621571,
            "unit": "ns/iter",
            "extra": "iterations: 55720\ncpu: 12573.348887293587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12352.350149651025,
            "unit": "ns/iter",
            "extra": "iterations: 55462\ncpu: 12352.059067469656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13290.892195501512,
            "unit": "ns/iter",
            "extra": "iterations: 52521\ncpu: 13290.923630547722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 27635.83644711735,
            "unit": "ns/iter",
            "extra": "iterations: 25264\ncpu: 27635.279449018457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 101555.8474920371,
            "unit": "ns/iter",
            "extra": "iterations: 6898\ncpu: 101556.23369092401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85751.56027933872,
            "unit": "ns/iter",
            "extra": "iterations: 8162\ncpu: 85749.0566037747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85004.06410411553,
            "unit": "ns/iter",
            "extra": "iterations: 8221\ncpu: 85002.6274175888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85329.46432491862,
            "unit": "ns/iter",
            "extra": "iterations: 8199\ncpu: 85329.7597267962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55638.33609693557,
            "unit": "ns/iter",
            "extra": "iterations: 12544\ncpu: 55638.52838010229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84918.84094526553,
            "unit": "ns/iter",
            "extra": "iterations: 8167\ncpu: 84919.1379943684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3113.5809362987175,
            "unit": "ns/iter",
            "extra": "iterations: 225035\ncpu: 3113.4725709334257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15376.888481387628,
            "unit": "ns/iter",
            "extra": "iterations: 45535\ncpu: 15376.907873064642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12374.506434813178,
            "unit": "ns/iter",
            "extra": "iterations: 56645\ncpu: 12374.539676935347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12130.180685573006,
            "unit": "ns/iter",
            "extra": "iterations: 57791\ncpu: 12130.21577754328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12637.24217382565,
            "unit": "ns/iter",
            "extra": "iterations: 55423\ncpu: 12637.045991736322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 26856.2567406413,
            "unit": "ns/iter",
            "extra": "iterations: 25999\ncpu: 26855.359821531474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 99997.33779889457,
            "unit": "ns/iter",
            "extra": "iterations: 6942\ncpu: 99997.55113800195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84578.55583879715,
            "unit": "ns/iter",
            "extra": "iterations: 8238\ncpu: 84578.78125758823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83170.57864100645,
            "unit": "ns/iter",
            "extra": "iterations: 8418\ncpu: 83170.82442385322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84277.90264843937,
            "unit": "ns/iter",
            "extra": "iterations: 8269\ncpu: 84276.9258676984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 56164.92368736984,
            "unit": "ns/iter",
            "extra": "iterations: 12475\ncpu: 56163.33466933813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84746.88210347333,
            "unit": "ns/iter",
            "extra": "iterations: 8253\ncpu: 84747.08590815436 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702492945502,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 738.759220594837,
            "unit": "ns/iter",
            "extra": "iterations: 946414\ncpu: 738.7425587533575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11018.585289472343,
            "unit": "ns/iter",
            "extra": "iterations: 74722\ncpu: 11018.426969299537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24414.110193807104,
            "unit": "ns/iter",
            "extra": "iterations: 34158\ncpu: 24413.46390303882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38293.86918485306,
            "unit": "ns/iter",
            "extra": "iterations: 21947\ncpu: 38293.602770310295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48324.8287916486,
            "unit": "ns/iter",
            "extra": "iterations: 16477\ncpu: 48323.59652849426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 60297.06060606061,
            "unit": "ns/iter",
            "extra": "iterations: 14058\ncpu: 60294.96372172428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60168.622200001206,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60167.07000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 69476.25690784556,
            "unit": "ns/iter",
            "extra": "iterations: 12522\ncpu: 69474.82830218814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 79285.10583271977,
            "unit": "ns/iter",
            "extra": "iterations: 10904\ncpu: 79282.41012472496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 621.1682575893082,
            "unit": "ns/iter",
            "extra": "iterations: 1177409\ncpu: 621.1584929281166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 503.3240040736262,
            "unit": "ns/iter",
            "extra": "iterations: 1391393\ncpu: 503.31416070082224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 504.5227459999069,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 504.50829999999945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 479.97016112473295,
            "unit": "ns/iter",
            "extra": "iterations: 1422004\ncpu: 479.9560338789478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 944.0541272006418,
            "unit": "ns/iter",
            "extra": "iterations: 740829\ncpu: 944.0298638417236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3283.8590233982136,
            "unit": "ns/iter",
            "extra": "iterations: 243395\ncpu: 3283.756445284412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14909.587617755702,
            "unit": "ns/iter",
            "extra": "iterations: 53819\ncpu: 14908.95780300637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11783.158451267316,
            "unit": "ns/iter",
            "extra": "iterations: 68753\ncpu: 11782.799296030733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11092.993052363343,
            "unit": "ns/iter",
            "extra": "iterations: 78300\ncpu: 11092.413793103433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11852.488578809618,
            "unit": "ns/iter",
            "extra": "iterations: 68513\ncpu: 11852.085005765348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 36299.66144242526,
            "unit": "ns/iter",
            "extra": "iterations: 22587\ncpu: 36298.61867445878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 459550.0374077559,
            "unit": "ns/iter",
            "extra": "iterations: 1898\ncpu: 459538.61959957844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 376847.5178105894,
            "unit": "ns/iter",
            "extra": "iterations: 2302\ncpu: 376841.398783667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 375239.5968992266,
            "unit": "ns/iter",
            "extra": "iterations: 2322\ncpu: 375227.9069767442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 379702.05739132164,
            "unit": "ns/iter",
            "extra": "iterations: 2300\ncpu: 379697.00000000047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 231406.6981982092,
            "unit": "ns/iter",
            "extra": "iterations: 3774\ncpu: 231400.31796502374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 375849.16404884524,
            "unit": "ns/iter",
            "extra": "iterations: 2292\ncpu: 375837.9581151843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1909487.4208334999,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1909423.5416666695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 760700.5802567933,
            "unit": "ns/iter",
            "extra": "iterations: 1246\ncpu: 760683.7078651668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2578767.1825843533,
            "unit": "ns/iter",
            "extra": "iterations: 356\ncpu: 2578695.224719109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3176.5060718620502,
            "unit": "ns/iter",
            "extra": "iterations: 247947\ncpu: 3176.3695467176444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15225.230517912963,
            "unit": "ns/iter",
            "extra": "iterations: 53870\ncpu: 15224.904399480283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12259.054817871747,
            "unit": "ns/iter",
            "extra": "iterations: 66876\ncpu: 12258.600992882382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11290.402845439014,
            "unit": "ns/iter",
            "extra": "iterations: 72256\ncpu: 11290.327446855663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11684.548514965862,
            "unit": "ns/iter",
            "extra": "iterations: 69123\ncpu: 11684.400271978946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 36176.28435688331,
            "unit": "ns/iter",
            "extra": "iterations: 22943\ncpu: 36175.10787604063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 481218.4161560342,
            "unit": "ns/iter",
            "extra": "iterations: 1795\ncpu: 481204.90250696574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 390100.1337807667,
            "unit": "ns/iter",
            "extra": "iterations: 2235\ncpu: 390092.348993288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 383782.10202287335,
            "unit": "ns/iter",
            "extra": "iterations: 2274\ncpu: 383773.13104661205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 387861.600177307,
            "unit": "ns/iter",
            "extra": "iterations: 2256\ncpu: 387853.05851063906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 228311.9929760539,
            "unit": "ns/iter",
            "extra": "iterations: 3844\ncpu: 228310.40582726253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 382749.97760207,
            "unit": "ns/iter",
            "extra": "iterations: 2277\ncpu: 382739.83311374724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1923615.8466386895,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1923550.4201680692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 774124.8624078954,
            "unit": "ns/iter",
            "extra": "iterations: 1221\ncpu: 774096.6420966416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3279.2783104378295,
            "unit": "ns/iter",
            "extra": "iterations: 244371\ncpu: 3279.146870946207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 15121.155212836551,
            "unit": "ns/iter",
            "extra": "iterations: 54596\ncpu: 15120.534471389949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12228.989827843136,
            "unit": "ns/iter",
            "extra": "iterations: 67439\ncpu: 12228.60362698142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11562.380901677932,
            "unit": "ns/iter",
            "extra": "iterations: 71378\ncpu: 11561.95186191822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 12104.876825229252,
            "unit": "ns/iter",
            "extra": "iterations: 68553\ncpu: 12104.627076860219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 35998.02866545203,
            "unit": "ns/iter",
            "extra": "iterations: 23094\ncpu: 35996.63981986644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 472632.69167576014,
            "unit": "ns/iter",
            "extra": "iterations: 1826\ncpu: 472619.4961664849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 381222.3061403162,
            "unit": "ns/iter",
            "extra": "iterations: 2280\ncpu: 381215.0877192989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 375632.68814879406,
            "unit": "ns/iter",
            "extra": "iterations: 2312\ncpu: 375618.20934256166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 378861.62026969844,
            "unit": "ns/iter",
            "extra": "iterations: 2299\ncpu: 378856.0678555895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 232252.06235075346,
            "unit": "ns/iter",
            "extra": "iterations: 3769\ncpu: 232244.73335102224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 375126.8959512641,
            "unit": "ns/iter",
            "extra": "iterations: 2297\ncpu: 375115.4114061831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 298.48520253215446,
            "unit": "ns/iter",
            "extra": "iterations: 2339184\ncpu: 298.4689960259648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1500.2390658882446,
            "unit": "ns/iter",
            "extra": "iterations: 467139\ncpu: 1500.2003686268908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1186.1062587838378,
            "unit": "ns/iter",
            "extra": "iterations: 589156\ncpu: 1186.0483471270688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1145.4332366341616,
            "unit": "ns/iter",
            "extra": "iterations: 611518\ncpu: 1145.3983365984368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1003.0570928302056,
            "unit": "ns/iter",
            "extra": "iterations: 697338\ncpu: 1003.0351135317474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6866.338049830347,
            "unit": "ns/iter",
            "extra": "iterations: 104032\ncpu: 6866.148877268526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 20114.9466275145,
            "unit": "ns/iter",
            "extra": "iterations: 34737\ncpu: 20114.414025391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4740.776559573947,
            "unit": "ns/iter",
            "extra": "iterations: 147941\ncpu: 4740.73786171509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4694.135973548622,
            "unit": "ns/iter",
            "extra": "iterations: 148801\ncpu: 4694.002728476232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4748.169524171001,
            "unit": "ns/iter",
            "extra": "iterations: 147448\ncpu: 4747.997260050973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9825.161884068231,
            "unit": "ns/iter",
            "extra": "iterations: 71335\ncpu: 9824.99754678639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8807.164549617077,
            "unit": "ns/iter",
            "extra": "iterations: 79277\ncpu: 8807.065100848851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3173.22289116099,
            "unit": "ns/iter",
            "extra": "iterations: 222907\ncpu: 3173.1574154243617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15979.168642290393,
            "unit": "ns/iter",
            "extra": "iterations: 43868\ncpu: 15978.818273000708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12671.698509081803,
            "unit": "ns/iter",
            "extra": "iterations: 55335\ncpu: 12671.444835998902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12662.602918545066,
            "unit": "ns/iter",
            "extra": "iterations: 55233\ncpu: 12662.203755001505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13355.836248627254,
            "unit": "ns/iter",
            "extra": "iterations: 51853\ncpu: 13355.728694578942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28090.6959624732,
            "unit": "ns/iter",
            "extra": "iterations: 24941\ncpu: 28089.916202237207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 103960.79195028813,
            "unit": "ns/iter",
            "extra": "iterations: 6758\ncpu: 103955.4158034917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 88113.36913939519,
            "unit": "ns/iter",
            "extra": "iterations: 7913\ncpu: 88110.5269809174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 87545.88908340492,
            "unit": "ns/iter",
            "extra": "iterations: 7997\ncpu: 87545.06690008612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 88144.9251709282,
            "unit": "ns/iter",
            "extra": "iterations: 7898\ncpu: 88141.97265130564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 56394.53297812186,
            "unit": "ns/iter",
            "extra": "iterations: 12387\ncpu: 56391.773633647805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 87081.56606120711,
            "unit": "ns/iter",
            "extra": "iterations: 8038\ncpu: 87078.99975118133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3140.572361813497,
            "unit": "ns/iter",
            "extra": "iterations: 223032\ncpu: 3140.4255891531766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15658.347219734555,
            "unit": "ns/iter",
            "extra": "iterations: 44672\ncpu: 15658.0430694842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12586.206928722297,
            "unit": "ns/iter",
            "extra": "iterations: 55739\ncpu: 12586.051059401876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12477.646337989103,
            "unit": "ns/iter",
            "extra": "iterations: 56144\ncpu: 12477.103519521179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12918.39534883685,
            "unit": "ns/iter",
            "extra": "iterations: 54266\ncpu: 12918.046290494925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27306.316996143287,
            "unit": "ns/iter",
            "extra": "iterations: 25647\ncpu: 27304.788084376232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 100516.29099841454,
            "unit": "ns/iter",
            "extra": "iterations: 6921\ncpu: 100513.39401820683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84593.15427396493,
            "unit": "ns/iter",
            "extra": "iterations: 8271\ncpu: 84590.38810300965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83895.30954955317,
            "unit": "ns/iter",
            "extra": "iterations: 8325\ncpu: 83892.62462462459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 85265.38245699309,
            "unit": "ns/iter",
            "extra": "iterations: 8197\ncpu: 85264.4626082716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 56504.741995628814,
            "unit": "ns/iter",
            "extra": "iterations: 12337\ncpu: 56501.523871282036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 85426.44963540554,
            "unit": "ns/iter",
            "extra": "iterations: 8091\ncpu: 85424.90421455914 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702504003859,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 738.3807339787597,
            "unit": "ns/iter",
            "extra": "iterations: 950191\ncpu: 738.3491319113737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10845.211499347552,
            "unit": "ns/iter",
            "extra": "iterations: 76700\ncpu: 10831.462842242501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23690.777480808472,
            "unit": "ns/iter",
            "extra": "iterations: 35170\ncpu: 23689.99147000284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37058.625491149076,
            "unit": "ns/iter",
            "extra": "iterations: 22651\ncpu: 37056.562624166705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 46573.54115648559,
            "unit": "ns/iter",
            "extra": "iterations: 17069\ncpu: 46571.72652176459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58179.620217454845,
            "unit": "ns/iter",
            "extra": "iterations: 14532\ncpu: 58178.206716212495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60254.97940000832,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60255.02999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67683.95393920231,
            "unit": "ns/iter",
            "extra": "iterations: 12896\ncpu: 67680.08684863518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77013.66875276182,
            "unit": "ns/iter",
            "extra": "iterations: 11345\ncpu: 77009.86337593649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 587.5015795225536,
            "unit": "ns/iter",
            "extra": "iterations: 1189600\ncpu: 587.4546065904506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 500.4013342543573,
            "unit": "ns/iter",
            "extra": "iterations: 1397035\ncpu: 500.37966121106484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 488.96642899564705,
            "unit": "ns/iter",
            "extra": "iterations: 1429567\ncpu: 488.9395880011221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 531.5624879999632,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 531.5520000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 954.1868864631917,
            "unit": "ns/iter",
            "extra": "iterations: 735286\ncpu: 954.1347176472825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3281.438091823663,
            "unit": "ns/iter",
            "extra": "iterations: 242682\ncpu: 3281.3241196298013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15159.947207444457,
            "unit": "ns/iter",
            "extra": "iterations: 53947\ncpu: 15159.523235768442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12280.077665262404,
            "unit": "ns/iter",
            "extra": "iterations: 66954\ncpu: 12279.11103145442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11204.338422875755,
            "unit": "ns/iter",
            "extra": "iterations: 73615\ncpu: 11203.228961488852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12364.389142874297,
            "unit": "ns/iter",
            "extra": "iterations: 69558\ncpu: 12363.525403260586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 37152.897608003484,
            "unit": "ns/iter",
            "extra": "iterations: 22199\ncpu: 37151.457272850115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 465497.7732836575,
            "unit": "ns/iter",
            "extra": "iterations: 1879\ncpu: 465482.5971261305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 375070.4999999937,
            "unit": "ns/iter",
            "extra": "iterations: 2316\ncpu: 375048.4455958554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 373422.3452278928,
            "unit": "ns/iter",
            "extra": "iterations: 2326\ncpu: 373421.62510748085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 376701.5316673501,
            "unit": "ns/iter",
            "extra": "iterations: 2321\ncpu: 376685.0926324856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 230249.35145784792,
            "unit": "ns/iter",
            "extra": "iterations: 3807\ncpu: 230239.11216180702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 377312.497837365,
            "unit": "ns/iter",
            "extra": "iterations: 2312\ncpu: 377296.1505190302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1913572.8447203834,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1913391.3043478294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 746276.7211690892,
            "unit": "ns/iter",
            "extra": "iterations: 1266\ncpu: 746249.9210110602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2562808.3361344,
            "unit": "ns/iter",
            "extra": "iterations: 357\ncpu: 2562485.7142857164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3315.873604785967,
            "unit": "ns/iter",
            "extra": "iterations: 243063\ncpu: 3315.7518832566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15314.23232209525,
            "unit": "ns/iter",
            "extra": "iterations: 53301\ncpu: 15313.658280332458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12125.197630372124,
            "unit": "ns/iter",
            "extra": "iterations: 68112\ncpu: 12124.982381959078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11294.903446101469,
            "unit": "ns/iter",
            "extra": "iterations: 72923\ncpu: 11294.506534289598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12022.857744856734,
            "unit": "ns/iter",
            "extra": "iterations: 68581\ncpu: 12022.59809568247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 36211.501302762794,
            "unit": "ns/iter",
            "extra": "iterations: 23028\ncpu: 36210.03560882405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 484310.5399999735,
            "unit": "ns/iter",
            "extra": "iterations: 1800\ncpu: 484281.2777777776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 391358.97265800013,
            "unit": "ns/iter",
            "extra": "iterations: 2231\ncpu: 391335.230838189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 381156.20996915136,
            "unit": "ns/iter",
            "extra": "iterations: 2267\ncpu: 381148.6546096158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 387231.37846153515,
            "unit": "ns/iter",
            "extra": "iterations: 2275\ncpu: 387214.9010989024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 229656.99127908907,
            "unit": "ns/iter",
            "extra": "iterations: 3784\ncpu: 229477.11416490446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 379265.7004809352,
            "unit": "ns/iter",
            "extra": "iterations: 2287\ncpu: 379247.7481416708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1906023.0943395267,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1905914.8846960242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 735328.0891870204,
            "unit": "ns/iter",
            "extra": "iterations: 1267\ncpu: 735273.6385161787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3282.597602187679,
            "unit": "ns/iter",
            "extra": "iterations: 242054\ncpu: 3282.408470837085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 15489.073597916511,
            "unit": "ns/iter",
            "extra": "iterations: 54526\ncpu: 15488.385357444142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12138.391076115322,
            "unit": "ns/iter",
            "extra": "iterations: 67437\ncpu: 12137.698889333788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11356.491247294349,
            "unit": "ns/iter",
            "extra": "iterations: 72092\ncpu: 11355.807856627638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11948.733760597344,
            "unit": "ns/iter",
            "extra": "iterations: 69122\ncpu: 11948.255258817713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 35877.50752405673,
            "unit": "ns/iter",
            "extra": "iterations: 22860\ncpu: 35876.24234470702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 466074.9607738301,
            "unit": "ns/iter",
            "extra": "iterations: 1861\ncpu: 466047.71628157044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 379458.01260869537,
            "unit": "ns/iter",
            "extra": "iterations: 2300\ncpu: 379434.73913043505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 373823.0133333389,
            "unit": "ns/iter",
            "extra": "iterations: 2325\ncpu: 373805.6774193563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 376880.8164939704,
            "unit": "ns/iter",
            "extra": "iterations: 2316\ncpu: 376856.17443868716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 229995.72793924564,
            "unit": "ns/iter",
            "extra": "iterations: 3819\ncpu: 229980.83267871197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 377990.80371811055,
            "unit": "ns/iter",
            "extra": "iterations: 2313\ncpu: 377970.3847816691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 301.12350448792085,
            "unit": "ns/iter",
            "extra": "iterations: 2323786\ncpu: 301.1143022636349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1499.3405626795063,
            "unit": "ns/iter",
            "extra": "iterations: 466340\ncpu: 1499.2518334262506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1184.3154547948448,
            "unit": "ns/iter",
            "extra": "iterations: 593971\ncpu: 1181.6265440568668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1174.607901453632,
            "unit": "ns/iter",
            "extra": "iterations: 597485\ncpu: 1174.5591939546646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 988.5721108429414,
            "unit": "ns/iter",
            "extra": "iterations: 703951\ncpu: 988.5332928002063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6758.853677265939,
            "unit": "ns/iter",
            "extra": "iterations: 105486\ncpu: 6758.825815748117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18389.12157799303,
            "unit": "ns/iter",
            "extra": "iterations: 38099\ncpu: 18388.60075067593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4495.951396780579,
            "unit": "ns/iter",
            "extra": "iterations: 155751\ncpu: 4495.737427047063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4456.11424993549,
            "unit": "ns/iter",
            "extra": "iterations: 157313\ncpu: 4455.980751749753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4499.202201469586,
            "unit": "ns/iter",
            "extra": "iterations: 155805\ncpu: 4499.014794133696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9448.594409553683,
            "unit": "ns/iter",
            "extra": "iterations: 74198\ncpu: 9448.49187309616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8539.000952602539,
            "unit": "ns/iter",
            "extra": "iterations: 81881\ncpu: 8538.59259168802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3098.975641467785,
            "unit": "ns/iter",
            "extra": "iterations: 226122\ncpu: 3098.894844376083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15816.395193500826,
            "unit": "ns/iter",
            "extra": "iterations: 44315\ncpu: 15816.344352927863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12508.417540974755,
            "unit": "ns/iter",
            "extra": "iterations: 55949\ncpu: 12508.173515165601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12341.282824922155,
            "unit": "ns/iter",
            "extra": "iterations: 57106\ncpu: 12341.060484012223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13151.135812707764,
            "unit": "ns/iter",
            "extra": "iterations: 53051\ncpu: 13150.854837797555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 27705.765961676814,
            "unit": "ns/iter",
            "extra": "iterations: 25154\ncpu: 27705.414645782323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99863.60571020083,
            "unit": "ns/iter",
            "extra": "iterations: 7005\ncpu: 99861.27052105682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84971.49641946609,
            "unit": "ns/iter",
            "extra": "iterations: 8239\ncpu: 84968.85544362047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 83688.83753134085,
            "unit": "ns/iter",
            "extra": "iterations: 8377\ncpu: 83686.23612271714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85566.82950659508,
            "unit": "ns/iter",
            "extra": "iterations: 8188\ncpu: 85563.48314606829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54455.14612263846,
            "unit": "ns/iter",
            "extra": "iterations: 12818\ncpu: 54454.52488687723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84762.06509090622,
            "unit": "ns/iter",
            "extra": "iterations: 8250\ncpu: 84759.29696969718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3073.6898159153484,
            "unit": "ns/iter",
            "extra": "iterations: 227178\ncpu: 3073.65810069637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15244.751179218176,
            "unit": "ns/iter",
            "extra": "iterations: 46005\ncpu: 15244.401695467921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12332.51295208904,
            "unit": "ns/iter",
            "extra": "iterations: 56709\ncpu: 12332.229452115276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12014.86416343483,
            "unit": "ns/iter",
            "extra": "iterations: 58298\ncpu: 12014.82383615223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12635.462286930077,
            "unit": "ns/iter",
            "extra": "iterations: 55498\ncpu: 12634.965223972056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 26859.74959587582,
            "unit": "ns/iter",
            "extra": "iterations: 25982\ncpu: 26859.19867600612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98275.61876332822,
            "unit": "ns/iter",
            "extra": "iterations: 7035\ncpu: 98271.34328358283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83344.44751977934,
            "unit": "ns/iter",
            "extra": "iterations: 8346\ncpu: 83342.64318236295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81593.72027890621,
            "unit": "ns/iter",
            "extra": "iterations: 8605\ncpu: 81592.51597908205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82848.59794424116,
            "unit": "ns/iter",
            "extra": "iterations: 8464\ncpu: 82845.7348771278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55167.22758023668,
            "unit": "ns/iter",
            "extra": "iterations: 12712\ncpu: 55166.087161737094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83902.32528392148,
            "unit": "ns/iter",
            "extra": "iterations: 8365\ncpu: 83897.57322175738 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1705575673670,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 753.124715399185,
            "unit": "ns/iter",
            "extra": "iterations: 929372\ncpu: 753.1121015051025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11178.602292008587,
            "unit": "ns/iter",
            "extra": "iterations: 74258\ncpu: 11178.330954240619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24359.612848240395,
            "unit": "ns/iter",
            "extra": "iterations: 34028\ncpu: 24359.615610673558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38882.89765562179,
            "unit": "ns/iter",
            "extra": "iterations: 22522\ncpu: 38882.51931444811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 50215.298360657885,
            "unit": "ns/iter",
            "extra": "iterations: 16470\ncpu: 50213.54584092289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59568.22704975906,
            "unit": "ns/iter",
            "extra": "iterations: 14270\ncpu: 59566.51016117723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58343.463500000325,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58337.72000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67547.19962614123,
            "unit": "ns/iter",
            "extra": "iterations: 12839\ncpu: 67544.0610639457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77218.57941696115,
            "unit": "ns/iter",
            "extra": "iterations: 11320\ncpu: 77214.27561837454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 587.5015110458656,
            "unit": "ns/iter",
            "extra": "iterations: 1190897\ncpu: 587.4773385103842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 503.17755143440337,
            "unit": "ns/iter",
            "extra": "iterations: 1394931\ncpu: 503.1691173255169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 483.5600573196164,
            "unit": "ns/iter",
            "extra": "iterations: 1445927\ncpu: 483.51839339053805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 493.91996717302385,
            "unit": "ns/iter",
            "extra": "iterations: 1413470\ncpu: 493.89601477215706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 958.9337173185498,
            "unit": "ns/iter",
            "extra": "iterations: 729889\ncpu: 958.8930645618725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3293.904831340066,
            "unit": "ns/iter",
            "extra": "iterations: 241403\ncpu: 3293.7606409199534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14249.292650850768,
            "unit": "ns/iter",
            "extra": "iterations: 57027\ncpu: 14248.754098935595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11541.203565440645,
            "unit": "ns/iter",
            "extra": "iterations: 69781\ncpu: 11540.751780570623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 12252.92624245122,
            "unit": "ns/iter",
            "extra": "iterations: 72196\ncpu: 12251.925314421818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12565.221152649172,
            "unit": "ns/iter",
            "extra": "iterations: 64200\ncpu: 12564.728971962604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 36646.278684211095,
            "unit": "ns/iter",
            "extra": "iterations: 22800\ncpu: 36644.442982456276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 460251.9027113652,
            "unit": "ns/iter",
            "extra": "iterations: 1881\ncpu: 460222.22222222365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 372316.41576910147,
            "unit": "ns/iter",
            "extra": "iterations: 2321\ncpu: 372303.1882809131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 378466.33578541386,
            "unit": "ns/iter",
            "extra": "iterations: 2311\ncpu: 378458.24318476877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 377888.961825386,
            "unit": "ns/iter",
            "extra": "iterations: 2279\ncpu: 377874.6818780174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 234735.1134713746,
            "unit": "ns/iter",
            "extra": "iterations: 3719\ncpu: 234720.7851573002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 374240.73586534744,
            "unit": "ns/iter",
            "extra": "iterations: 2317\ncpu: 374220.5006473887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1899070.5392560575,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1898971.6942148807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 767676.7012987421,
            "unit": "ns/iter",
            "extra": "iterations: 1232\ncpu: 767634.8214285728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2567183.637882872,
            "unit": "ns/iter",
            "extra": "iterations: 359\ncpu: 2567061.002785514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3192.7305163161764,
            "unit": "ns/iter",
            "extra": "iterations: 243165\ncpu: 3192.5675981329673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 13968.496571446756,
            "unit": "ns/iter",
            "extra": "iterations: 59792\ncpu: 13967.972303987113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11245.172175575395,
            "unit": "ns/iter",
            "extra": "iterations: 73245\ncpu: 11244.59826609318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11202.15839384339,
            "unit": "ns/iter",
            "extra": "iterations: 73816\ncpu: 11201.79635851305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11466.114040861634,
            "unit": "ns/iter",
            "extra": "iterations: 69896\ncpu: 11465.651825569355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 36827.516160154715,
            "unit": "ns/iter",
            "extra": "iterations: 22803\ncpu: 36826.2947857739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 477719.0354416348,
            "unit": "ns/iter",
            "extra": "iterations: 1834\ncpu: 477711.1777535434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 384464.13618335297,
            "unit": "ns/iter",
            "extra": "iterations: 2269\ncpu: 384454.4733362718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 381104.60570172773,
            "unit": "ns/iter",
            "extra": "iterations: 2280\ncpu: 381086.5350877198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 381150.0473061995,
            "unit": "ns/iter",
            "extra": "iterations: 2283\ncpu: 381136.0490582547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 229950.41915061168,
            "unit": "ns/iter",
            "extra": "iterations: 3791\ncpu: 229941.70403587515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 377711.1674620274,
            "unit": "ns/iter",
            "extra": "iterations: 2305\ncpu: 377693.14533622557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1918855.3970588348,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1918763.025210088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 755736.9345718826,
            "unit": "ns/iter",
            "extra": "iterations: 1238\ncpu: 755698.5460420019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3251.9273577134336,
            "unit": "ns/iter",
            "extra": "iterations: 245174\ncpu: 3251.9214924910457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14377.626290589882,
            "unit": "ns/iter",
            "extra": "iterations: 57435\ncpu: 14377.332636893856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11619.975016881084,
            "unit": "ns/iter",
            "extra": "iterations: 71088\ncpu: 11619.935854152556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11638.654496757985,
            "unit": "ns/iter",
            "extra": "iterations: 70940\ncpu: 11638.143501550554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11841.927331995623,
            "unit": "ns/iter",
            "extra": "iterations: 69329\ncpu: 11841.454513984014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 36284.941299880695,
            "unit": "ns/iter",
            "extra": "iterations: 22879\ncpu: 36284.48358756935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 460593.7206969604,
            "unit": "ns/iter",
            "extra": "iterations: 1894\ncpu: 460577.4551214354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 371717.7866037134,
            "unit": "ns/iter",
            "extra": "iterations: 2329\ncpu: 371702.23271790316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 372170.93867925124,
            "unit": "ns/iter",
            "extra": "iterations: 2332\ncpu: 372154.0737564337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 371705.02008548164,
            "unit": "ns/iter",
            "extra": "iterations: 2340\ncpu: 371691.9230769214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 230474.5434954078,
            "unit": "ns/iter",
            "extra": "iterations: 3805\ncpu: 230470.67017082815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 370672.73432835477,
            "unit": "ns/iter",
            "extra": "iterations: 2345\ncpu: 370653.3475479728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 304.22805095299486,
            "unit": "ns/iter",
            "extra": "iterations: 2298118\ncpu: 304.21105443671865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1514.0895553604141,
            "unit": "ns/iter",
            "extra": "iterations: 463769\ncpu: 1514.0820106561648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1190.8893164235803,
            "unit": "ns/iter",
            "extra": "iterations: 589166\ncpu: 1190.8788015601651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1189.9537802896982,
            "unit": "ns/iter",
            "extra": "iterations: 590960\ncpu: 1189.9047312846833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 993.5291685584225,
            "unit": "ns/iter",
            "extra": "iterations: 704800\ncpu: 993.4909194097689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6742.605360692911,
            "unit": "ns/iter",
            "extra": "iterations: 103606\ncpu: 6742.227284134143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19134.591593888366,
            "unit": "ns/iter",
            "extra": "iterations: 36640\ncpu: 19133.771834061146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4518.272523002467,
            "unit": "ns/iter",
            "extra": "iterations: 154875\ncpu: 4517.979015335001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4452.651874609155,
            "unit": "ns/iter",
            "extra": "iterations: 156886\ncpu: 4452.395369886452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4506.0702056344335,
            "unit": "ns/iter",
            "extra": "iterations: 155130\ncpu: 4505.791916457147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9440.249077963757,
            "unit": "ns/iter",
            "extra": "iterations: 74021\ncpu: 9439.871117655746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8562.794522226965,
            "unit": "ns/iter",
            "extra": "iterations: 81566\ncpu: 8562.347056371442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3135.365867124109,
            "unit": "ns/iter",
            "extra": "iterations: 222794\ncpu: 3135.232097812339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15805.912400198438,
            "unit": "ns/iter",
            "extra": "iterations: 44338\ncpu: 15804.837836618855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12321.434858719438,
            "unit": "ns/iter",
            "extra": "iterations: 56554\ncpu: 12320.914524171654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12320.364943284407,
            "unit": "ns/iter",
            "extra": "iterations: 57039\ncpu: 12320.107295008773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13155.169735803294,
            "unit": "ns/iter",
            "extra": "iterations: 53218\ncpu: 13155.159908301644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 27783.583822829314,
            "unit": "ns/iter",
            "extra": "iterations: 25196\ncpu: 27782.89411017613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99944.53372308203,
            "unit": "ns/iter",
            "extra": "iterations: 7013\ncpu: 99938.42863253987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85931.80210629849,
            "unit": "ns/iter",
            "extra": "iterations: 8166\ncpu: 85928.56967915689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84011.73602111614,
            "unit": "ns/iter",
            "extra": "iterations: 8334\ncpu: 84005.72354211658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85610.79645260012,
            "unit": "ns/iter",
            "extra": "iterations: 8175\ncpu: 85610.50764525893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55612.759353609785,
            "unit": "ns/iter",
            "extra": "iterations: 12562\ncpu: 55611.367616621224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85424.90262126099,
            "unit": "ns/iter",
            "extra": "iterations: 8164\ncpu: 85419.72072513416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3100.8735390398438,
            "unit": "ns/iter",
            "extra": "iterations: 219633\ncpu: 3100.714373523079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15415.282324510408,
            "unit": "ns/iter",
            "extra": "iterations: 45515\ncpu: 15414.426013402406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12287.11994940528,
            "unit": "ns/iter",
            "extra": "iterations: 56924\ncpu: 12286.53643454426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12203.339118313017,
            "unit": "ns/iter",
            "extra": "iterations: 57390\ncpu: 12202.523087645981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12632.113851649805,
            "unit": "ns/iter",
            "extra": "iterations: 55423\ncpu: 12631.865831874742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27444.787522002476,
            "unit": "ns/iter",
            "extra": "iterations: 25565\ncpu: 27443.966360258193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98844.0434782727,
            "unit": "ns/iter",
            "extra": "iterations: 7084\ncpu: 98842.3630717121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84083.17414248342,
            "unit": "ns/iter",
            "extra": "iterations: 8338\ncpu: 84079.15567282372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83361.80199667742,
            "unit": "ns/iter",
            "extra": "iterations: 8414\ncpu: 83355.90682196472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 85846.48231472536,
            "unit": "ns/iter",
            "extra": "iterations: 8312\ncpu: 85842.40856592948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 56934.02931808861,
            "unit": "ns/iter",
            "extra": "iterations: 12245\ncpu: 56932.70722743994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 86761.36881280875,
            "unit": "ns/iter",
            "extra": "iterations: 8061\ncpu: 86756.23371790118 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705773492147,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 739.4322097924847,
            "unit": "ns/iter",
            "extra": "iterations: 946383\ncpu: 739.3972630531192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10720.529066971907,
            "unit": "ns/iter",
            "extra": "iterations: 76943\ncpu: 10720.31113941489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23879.307161001114,
            "unit": "ns/iter",
            "extra": "iterations: 35037\ncpu: 23878.68538973086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38121.51378411136,
            "unit": "ns/iter",
            "extra": "iterations: 21474\ncpu: 38120.08475365559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47413.82713621974,
            "unit": "ns/iter",
            "extra": "iterations: 16782\ncpu: 47412.072458586554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59308.772266060376,
            "unit": "ns/iter",
            "extra": "iterations: 14192\ncpu: 59305.411499436275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59342.54799999508,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59339.4 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68516.98862919178,
            "unit": "ns/iter",
            "extra": "iterations: 12664\ncpu: 68513.58970309536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78177.80839776897,
            "unit": "ns/iter",
            "extra": "iterations: 11122\ncpu: 78174.25822693764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 591.0230018851446,
            "unit": "ns/iter",
            "extra": "iterations: 1185555\ncpu: 590.9945974670079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 499.5632472788377,
            "unit": "ns/iter",
            "extra": "iterations: 1392218\ncpu: 499.5543801329971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 480.8869667651993,
            "unit": "ns/iter",
            "extra": "iterations: 1450768\ncpu: 480.8711661685391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 476.48697349408087,
            "unit": "ns/iter",
            "extra": "iterations: 1466318\ncpu: 476.4655415810218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 952.2459764898775,
            "unit": "ns/iter",
            "extra": "iterations: 736111\ncpu: 952.2395399606869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3291.8795558107986,
            "unit": "ns/iter",
            "extra": "iterations: 243590\ncpu: 3291.9048401001687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14394.01926605589,
            "unit": "ns/iter",
            "extra": "iterations: 56680\ncpu: 14393.84262526463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11469.074822186787,
            "unit": "ns/iter",
            "extra": "iterations: 71142\ncpu: 11469.156054089008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11350.703129701957,
            "unit": "ns/iter",
            "extra": "iterations: 73106\ncpu: 11345.327332913886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11594.550400669867,
            "unit": "ns/iter",
            "extra": "iterations: 69384\ncpu: 11594.330104923323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 36556.60164786542,
            "unit": "ns/iter",
            "extra": "iterations: 22696\ncpu: 36555.168311596804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 470795.6968398544,
            "unit": "ns/iter",
            "extra": "iterations: 1867\ncpu: 470759.2394215321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 379067.1672504587,
            "unit": "ns/iter",
            "extra": "iterations: 2284\ncpu: 379048.68651488516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 374266.76404497,
            "unit": "ns/iter",
            "extra": "iterations: 2314\ncpu: 374256.09334485733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 378931.2269779063,
            "unit": "ns/iter",
            "extra": "iterations: 2313\ncpu: 378919.93082576676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 229767.769149506,
            "unit": "ns/iter",
            "extra": "iterations: 3786\ncpu: 229767.5382989963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 373942.65219281125,
            "unit": "ns/iter",
            "extra": "iterations: 2303\ncpu: 373935.60573165363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1897475.3388091917,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1897414.5790554443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 742997.4023529319,
            "unit": "ns/iter",
            "extra": "iterations: 1275\ncpu: 742936.0784313718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2588965.72905045,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 2588735.754189942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3178.4084175734415,
            "unit": "ns/iter",
            "extra": "iterations: 248694\ncpu: 3178.194085904756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15364.674544212943,
            "unit": "ns/iter",
            "extra": "iterations: 52766\ncpu: 15363.25664253488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12360.0028658911,
            "unit": "ns/iter",
            "extra": "iterations: 66297\ncpu: 12359.07808799801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11558.648456795576,
            "unit": "ns/iter",
            "extra": "iterations: 70859\ncpu: 11557.495872084039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11864.25640293714,
            "unit": "ns/iter",
            "extra": "iterations: 66571\ncpu: 11863.921226960645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 37803.57781688926,
            "unit": "ns/iter",
            "extra": "iterations: 22161\ncpu: 37802.97369252315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 482332.74090408057,
            "unit": "ns/iter",
            "extra": "iterations: 1814\ncpu: 482331.14663726813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 388871.2991071535,
            "unit": "ns/iter",
            "extra": "iterations: 2240\ncpu: 388859.0625000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 376583.67803193827,
            "unit": "ns/iter",
            "extra": "iterations: 2317\ncpu: 376581.2688821756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 379964.787197235,
            "unit": "ns/iter",
            "extra": "iterations: 2312\ncpu: 379961.8944636682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 229721.67544089988,
            "unit": "ns/iter",
            "extra": "iterations: 3799\ncpu: 229711.50302711147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 380445.37739131594,
            "unit": "ns/iter",
            "extra": "iterations: 2300\ncpu: 380432.39130434766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1913707.4203822974,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1913671.9745222905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 773066.0928093075,
            "unit": "ns/iter",
            "extra": "iterations: 1196\ncpu: 773028.2608695653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3245.532028933137,
            "unit": "ns/iter",
            "extra": "iterations: 238066\ncpu: 3245.2336746952337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 15535.682325782194,
            "unit": "ns/iter",
            "extra": "iterations: 53281\ncpu: 15534.353709577501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12086.174846179785,
            "unit": "ns/iter",
            "extra": "iterations: 68586\ncpu: 12085.303123086343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11274.251991745748,
            "unit": "ns/iter",
            "extra": "iterations: 73177\ncpu: 11274.188611175641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11829.675283586233,
            "unit": "ns/iter",
            "extra": "iterations: 68586\ncpu: 11829.322310675647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 36127.00879740643,
            "unit": "ns/iter",
            "extra": "iterations: 23416\ncpu: 36126.46053980192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 466575.6503232643,
            "unit": "ns/iter",
            "extra": "iterations: 1856\ncpu: 466552.6939655185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 378212.1631853827,
            "unit": "ns/iter",
            "extra": "iterations: 2298\ncpu: 378206.22280243656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 373311.4065040505,
            "unit": "ns/iter",
            "extra": "iterations: 2337\ncpu: 373308.2156611036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 375231.2570937258,
            "unit": "ns/iter",
            "extra": "iterations: 2326\ncpu: 375216.72398968256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 228249.6404317009,
            "unit": "ns/iter",
            "extra": "iterations: 3799\ncpu: 228249.1708344314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 372936.63496802957,
            "unit": "ns/iter",
            "extra": "iterations: 2345\ncpu: 372926.1407249469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 303.83494203261114,
            "unit": "ns/iter",
            "extra": "iterations: 2305693\ncpu: 303.8332076299823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1523.4686236401756,
            "unit": "ns/iter",
            "extra": "iterations: 459996\ncpu: 1523.4449864781577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1186.9197297415958,
            "unit": "ns/iter",
            "extra": "iterations: 589658\ncpu: 1186.9120744567094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1210.479872888558,
            "unit": "ns/iter",
            "extra": "iterations: 587516\ncpu: 1210.4220140387645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 986.6218690676125,
            "unit": "ns/iter",
            "extra": "iterations: 710611\ncpu: 986.6143361135688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6723.462040870304,
            "unit": "ns/iter",
            "extra": "iterations: 105798\ncpu: 6723.305733567704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19147.981272587484,
            "unit": "ns/iter",
            "extra": "iterations: 36524\ncpu: 19147.87810754573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4504.310715923178,
            "unit": "ns/iter",
            "extra": "iterations: 154807\ncpu: 4504.304714903134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4475.9544954593875,
            "unit": "ns/iter",
            "extra": "iterations: 156380\ncpu: 4475.918915462364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4489.907197664336,
            "unit": "ns/iter",
            "extra": "iterations: 155481\ncpu: 4489.818048507485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9452.543837754398,
            "unit": "ns/iter",
            "extra": "iterations: 73715\ncpu: 9452.473716340008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8529.877739513664,
            "unit": "ns/iter",
            "extra": "iterations: 82177\ncpu: 8529.8696715625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3110.3132406162426,
            "unit": "ns/iter",
            "extra": "iterations: 225488\ncpu: 3110.3380224224693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15593.279912722342,
            "unit": "ns/iter",
            "extra": "iterations: 44914\ncpu: 15593.178073651761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12373.932273865721,
            "unit": "ns/iter",
            "extra": "iterations: 56758\ncpu: 12373.631910920225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12180.356199513591,
            "unit": "ns/iter",
            "extra": "iterations: 57319\ncpu: 12180.015352675462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12991.016260463746,
            "unit": "ns/iter",
            "extra": "iterations: 53750\ncpu: 12990.63627906974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28143.151362667282,
            "unit": "ns/iter",
            "extra": "iterations: 24841\ncpu: 28142.997463870364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100020.6913086933,
            "unit": "ns/iter",
            "extra": "iterations: 7007\ncpu: 100016.8260311103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85190.69885673355,
            "unit": "ns/iter",
            "extra": "iterations: 8222\ncpu: 85191.40111894842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84098.673047016,
            "unit": "ns/iter",
            "extra": "iterations: 8359\ncpu: 84099.3659528638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84671.24709020583,
            "unit": "ns/iter",
            "extra": "iterations: 8248\ncpu: 84668.41658583867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54813.98466257705,
            "unit": "ns/iter",
            "extra": "iterations: 12714\ncpu: 54813.45760578896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84119.73701922302,
            "unit": "ns/iter",
            "extra": "iterations: 8320\ncpu: 84116.17788461548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3011.152971070749,
            "unit": "ns/iter",
            "extra": "iterations: 231011\ncpu: 3011.1085619299674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 14809.14446933483,
            "unit": "ns/iter",
            "extra": "iterations: 47318\ncpu: 14809.108584470903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12147.24069258103,
            "unit": "ns/iter",
            "extra": "iterations: 58448\ncpu: 12147.33267177677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12059.500819601872,
            "unit": "ns/iter",
            "extra": "iterations: 57955\ncpu: 12059.042360452237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12480.291271177211,
            "unit": "ns/iter",
            "extra": "iterations: 55838\ncpu: 12479.983165585993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27057.2183319752,
            "unit": "ns/iter",
            "extra": "iterations: 25791\ncpu: 27056.922957620987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97843.96844761331,
            "unit": "ns/iter",
            "extra": "iterations: 7131\ncpu: 97839.93829757404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 82248.86403768099,
            "unit": "ns/iter",
            "extra": "iterations: 8495\ncpu: 82249.44084755833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82031.11366822266,
            "unit": "ns/iter",
            "extra": "iterations: 8560\ncpu: 82030.81775700937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83142.55331992282,
            "unit": "ns/iter",
            "extra": "iterations: 8449\ncpu: 83139.63782696227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55077.041686326585,
            "unit": "ns/iter",
            "extra": "iterations: 12714\ncpu: 55077.47365109317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83972.59003100726,
            "unit": "ns/iter",
            "extra": "iterations: 8386\ncpu: 83969.73527307333 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705775480344,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 744.4360237720124,
            "unit": "ns/iter",
            "extra": "iterations: 939091\ncpu: 744.431689793641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11061.891855789665,
            "unit": "ns/iter",
            "extra": "iterations: 74863\ncpu: 11061.559114649426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24285.01342262328,
            "unit": "ns/iter",
            "extra": "iterations: 34047\ncpu: 24284.468528798425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38274.713834634254,
            "unit": "ns/iter",
            "extra": "iterations: 22169\ncpu: 38274.16662907662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47945.20752895574,
            "unit": "ns/iter",
            "extra": "iterations: 16576\ncpu: 47943.7319015444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59802.17135784586,
            "unit": "ns/iter",
            "extra": "iterations: 14140\ncpu: 59799.37057991511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59956.59739999155,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59952.70000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 69247.56318813363,
            "unit": "ns/iter",
            "extra": "iterations: 12534\ncpu: 69246.3140258496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78776.74428066787,
            "unit": "ns/iter",
            "extra": "iterations: 11059\ncpu: 78775.54932634046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 584.6902782124205,
            "unit": "ns/iter",
            "extra": "iterations: 1198185\ncpu: 584.6701469305655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 495.40184030860036,
            "unit": "ns/iter",
            "extra": "iterations: 1414002\ncpu: 495.3890447113944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 485.3286386408129,
            "unit": "ns/iter",
            "extra": "iterations: 1443190\ncpu: 485.32590996334534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 491.68997686903543,
            "unit": "ns/iter",
            "extra": "iterations: 1419307\ncpu: 491.68185600437397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1079.4792999761721,
            "unit": "ns/iter",
            "extra": "iterations: 649178\ncpu: 1079.4359944422022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3347.844134638141,
            "unit": "ns/iter",
            "extra": "iterations: 242517\ncpu: 3347.7958246226085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15215.95700870436,
            "unit": "ns/iter",
            "extra": "iterations: 52499\ncpu: 15215.866968894681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12224.008129715972,
            "unit": "ns/iter",
            "extra": "iterations: 66669\ncpu: 12223.451679191208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11819.925939089233,
            "unit": "ns/iter",
            "extra": "iterations: 70334\ncpu: 11819.299343134191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11959.039013861086,
            "unit": "ns/iter",
            "extra": "iterations: 68104\ncpu: 11958.600082227209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 36504.346545468194,
            "unit": "ns/iter",
            "extra": "iterations: 22883\ncpu: 36503.58781628271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 463484.35778838577,
            "unit": "ns/iter",
            "extra": "iterations: 1881\ncpu: 463472.4614566716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 381282.35041608417,
            "unit": "ns/iter",
            "extra": "iterations: 2283\ncpu: 381267.4989049494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 378454.72683779325,
            "unit": "ns/iter",
            "extra": "iterations: 2299\ncpu: 378452.6315789477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 379914.6082564911,
            "unit": "ns/iter",
            "extra": "iterations: 2277\ncpu: 379904.3039086518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 231933.23186456892,
            "unit": "ns/iter",
            "extra": "iterations: 3722\ncpu: 231921.0102095644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 372498.92197655526,
            "unit": "ns/iter",
            "extra": "iterations: 2307\ncpu: 372478.2401387072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1904250.6432990346,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1904220.206185568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 763423.368038689,
            "unit": "ns/iter",
            "extra": "iterations: 1239\ncpu: 763388.216303472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2610808.7408451415,
            "unit": "ns/iter",
            "extra": "iterations: 355\ncpu: 2610713.5211267592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3173.401986671913,
            "unit": "ns/iter",
            "extra": "iterations: 248053\ncpu: 3173.3552910063577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14942.014829424132,
            "unit": "ns/iter",
            "extra": "iterations: 54756\ncpu: 14941.7397180218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12099.371667868636,
            "unit": "ns/iter",
            "extra": "iterations: 67937\ncpu: 12099.159515433465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11290.676110017506,
            "unit": "ns/iter",
            "extra": "iterations: 72679\ncpu: 11290.313570632543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11936.695484800515,
            "unit": "ns/iter",
            "extra": "iterations: 68059\ncpu: 11936.37579159259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 36048.89561362329,
            "unit": "ns/iter",
            "extra": "iterations: 23231\ncpu: 36048.67633765237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 479034.73901100026,
            "unit": "ns/iter",
            "extra": "iterations: 1820\ncpu: 479027.3626373629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 387905.43371884985,
            "unit": "ns/iter",
            "extra": "iterations: 2248\ncpu: 387896.79715302435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 382941.06707585306,
            "unit": "ns/iter",
            "extra": "iterations: 2281\ncpu: 382938.57957036345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 383250.89137099526,
            "unit": "ns/iter",
            "extra": "iterations: 2283\ncpu: 383237.9325448986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 230319.8475465645,
            "unit": "ns/iter",
            "extra": "iterations: 3811\ncpu: 230314.35318813898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 380339.6363636203,
            "unit": "ns/iter",
            "extra": "iterations: 2299\ncpu: 380332.8403653758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1920229.0147677176,
            "unit": "ns/iter",
            "extra": "iterations: 474\ncpu: 1920150.6329114002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 763156.4302134314,
            "unit": "ns/iter",
            "extra": "iterations: 1218\ncpu: 763102.4630541864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3198.542041800531,
            "unit": "ns/iter",
            "extra": "iterations: 248800\ncpu: 3198.458199356918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14947.073596385842,
            "unit": "ns/iter",
            "extra": "iterations: 54894\ncpu: 14946.409443655053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12049.579140238735,
            "unit": "ns/iter",
            "extra": "iterations: 67949\ncpu: 12049.160399711514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11224.427690574412,
            "unit": "ns/iter",
            "extra": "iterations: 72819\ncpu: 11223.631195155102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 13005.984395359028,
            "unit": "ns/iter",
            "extra": "iterations: 63699\ncpu: 13004.828961208115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 37843.16861277968,
            "unit": "ns/iter",
            "extra": "iterations: 22181\ncpu: 37842.02696001079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 470531.5963887317,
            "unit": "ns/iter",
            "extra": "iterations: 1883\ncpu: 470511.4710568248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 382700.57675628713,
            "unit": "ns/iter",
            "extra": "iterations: 2306\ncpu: 382674.8482220321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 374631.16017128964,
            "unit": "ns/iter",
            "extra": "iterations: 2335\ncpu: 374614.7751606012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 374760.75086805155,
            "unit": "ns/iter",
            "extra": "iterations: 2304\ncpu: 374733.7239583321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 232417.3828947395,
            "unit": "ns/iter",
            "extra": "iterations: 3800\ncpu: 232397.9736842088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 371438.20395872416,
            "unit": "ns/iter",
            "extra": "iterations: 2324\ncpu: 371417.51290877676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 297.001758341605,
            "unit": "ns/iter",
            "extra": "iterations: 2351079\ncpu: 296.9767072905669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1512.0122392213195,
            "unit": "ns/iter",
            "extra": "iterations: 463755\ncpu: 1511.960194499245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1176.636427237888,
            "unit": "ns/iter",
            "extra": "iterations: 594610\ncpu: 1176.577925026485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1143.5532261765359,
            "unit": "ns/iter",
            "extra": "iterations: 596821\ncpu: 1143.478530413638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 990.200838141992,
            "unit": "ns/iter",
            "extra": "iterations: 705847\ncpu: 990.1664241684118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6802.917774611578,
            "unit": "ns/iter",
            "extra": "iterations: 105977\ncpu: 6802.470347339579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19214.58429008014,
            "unit": "ns/iter",
            "extra": "iterations: 36321\ncpu: 19213.611960023296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4547.625604005492,
            "unit": "ns/iter",
            "extra": "iterations: 154179\ncpu: 4547.199683484784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4458.309314576286,
            "unit": "ns/iter",
            "extra": "iterations: 156808\ncpu: 4458.141166266958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4448.155188494041,
            "unit": "ns/iter",
            "extra": "iterations: 155469\ncpu: 4447.876425525302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9436.300581701073,
            "unit": "ns/iter",
            "extra": "iterations: 74093\ncpu: 9435.858988028593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8618.653465346057,
            "unit": "ns/iter",
            "extra": "iterations: 81204\ncpu: 8618.166592778694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3172.6900886071185,
            "unit": "ns/iter",
            "extra": "iterations: 221089\ncpu: 3172.5309716901074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16108.429330694991,
            "unit": "ns/iter",
            "extra": "iterations: 43463\ncpu: 16107.058877666042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12856.611872229894,
            "unit": "ns/iter",
            "extra": "iterations: 54379\ncpu: 12827.479357840415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12714.905177407822,
            "unit": "ns/iter",
            "extra": "iterations: 55240\ncpu: 12714.239681390303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13384.49645158146,
            "unit": "ns/iter",
            "extra": "iterations: 51995\ncpu: 13384.031156842098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28057.213533111582,
            "unit": "ns/iter",
            "extra": "iterations: 24961\ncpu: 28055.83910901027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 106184.4991199777,
            "unit": "ns/iter",
            "extra": "iterations: 6818\ncpu: 106180.6394837208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86708.415726168,
            "unit": "ns/iter",
            "extra": "iterations: 8063\ncpu: 86705.20897928804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85704.33341436909,
            "unit": "ns/iter",
            "extra": "iterations: 8227\ncpu: 85699.5259511365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 86545.84249536743,
            "unit": "ns/iter",
            "extra": "iterations: 8095\ncpu: 86535.8492896836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 56850.838584272446,
            "unit": "ns/iter",
            "extra": "iterations: 12347\ncpu: 56848.23843848699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85164.9474349293,
            "unit": "ns/iter",
            "extra": "iterations: 7914\ncpu: 85162.52211271145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3121.7287277842124,
            "unit": "ns/iter",
            "extra": "iterations: 224671\ncpu: 3121.569316912298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15633.763115736634,
            "unit": "ns/iter",
            "extra": "iterations: 44946\ncpu: 15632.906154051645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12502.68047262753,
            "unit": "ns/iter",
            "extra": "iterations: 55604\ncpu: 12502.269620890433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12443.600387990891,
            "unit": "ns/iter",
            "extra": "iterations: 56187\ncpu: 12442.824852724105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12930.715368545,
            "unit": "ns/iter",
            "extra": "iterations: 54091\ncpu: 12930.11776450803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27186.704364692978,
            "unit": "ns/iter",
            "extra": "iterations: 25775\ncpu: 27185.070805043586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 99619.5517982481,
            "unit": "ns/iter",
            "extra": "iterations: 6979\ncpu: 99614.52930219237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83502.66121913532,
            "unit": "ns/iter",
            "extra": "iterations: 8383\ncpu: 83499.64213288833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 87036.86673760862,
            "unit": "ns/iter",
            "extra": "iterations: 8457\ncpu: 87033.90091048731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83787.90370726626,
            "unit": "ns/iter",
            "extra": "iterations: 8308\ncpu: 83781.68030813796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 56300.07583052412,
            "unit": "ns/iter",
            "extra": "iterations: 12462\ncpu: 56295.77916867322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84861.10392749132,
            "unit": "ns/iter",
            "extra": "iterations: 8275\ncpu: 84858.21148036294 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705778460444,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 748.6311847036817,
            "unit": "ns/iter",
            "extra": "iterations: 937171\ncpu: 748.5791813873882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11276.538164067122,
            "unit": "ns/iter",
            "extra": "iterations: 73957\ncpu: 11276.082047676353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24704.63228259913,
            "unit": "ns/iter",
            "extra": "iterations: 33659\ncpu: 24703.431474494188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39391.54560947135,
            "unit": "ns/iter",
            "extra": "iterations: 22298\ncpu: 39389.52820880797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47293.31225437679,
            "unit": "ns/iter",
            "extra": "iterations: 16794\ncpu: 47291.961414790996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58974.00808870005,
            "unit": "ns/iter",
            "extra": "iterations: 14341\ncpu: 58972.45659298512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59358.46639999908,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59355.9 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68669.05687465114,
            "unit": "ns/iter",
            "extra": "iterations: 12677\ncpu: 68667.92616549658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78654.36985684479,
            "unit": "ns/iter",
            "extra": "iterations: 11107\ncpu: 78652.93058431624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 584.0171090683424,
            "unit": "ns/iter",
            "extra": "iterations: 1183992\ncpu: 584.0051284130305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 503.0189459999974,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 501.4694999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 512.15063463783,
            "unit": "ns/iter",
            "extra": "iterations: 1363770\ncpu: 512.1457430505145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 497.54131760785276,
            "unit": "ns/iter",
            "extra": "iterations: 1406640\ncpu: 497.5343371438321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 949.4478443013667,
            "unit": "ns/iter",
            "extra": "iterations: 739018\ncpu: 949.4098925871912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3347.8225598847584,
            "unit": "ns/iter",
            "extra": "iterations: 239292\ncpu: 3347.6213162161725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14763.949647457715,
            "unit": "ns/iter",
            "extra": "iterations: 54178\ncpu: 14763.45933773855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11942.001636732812,
            "unit": "ns/iter",
            "extra": "iterations: 69040\ncpu: 11941.733777520261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11223.255482863224,
            "unit": "ns/iter",
            "extra": "iterations: 72909\ncpu: 11222.80239750921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12095.102653207898,
            "unit": "ns/iter",
            "extra": "iterations: 69350\ncpu: 12095.152126892564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 37446.36635091872,
            "unit": "ns/iter",
            "extra": "iterations: 20797\ncpu: 37444.69394624222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 465328.7518716664,
            "unit": "ns/iter",
            "extra": "iterations: 1870\ncpu: 465316.25668449275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 383422.31156875833,
            "unit": "ns/iter",
            "extra": "iterations: 2282\ncpu: 383414.76774758945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 375307.478806229,
            "unit": "ns/iter",
            "extra": "iterations: 2312\ncpu: 375287.6297577865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 380498.0148796434,
            "unit": "ns/iter",
            "extra": "iterations: 2285\ncpu: 380483.0634573307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 228652.74242877908,
            "unit": "ns/iter",
            "extra": "iterations: 3335\ncpu: 228651.2143928038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 375404.1723541927,
            "unit": "ns/iter",
            "extra": "iterations: 2315\ncpu: 375383.75809935207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1897035.3662552952,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1896941.7695473274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 761463.2512038341,
            "unit": "ns/iter",
            "extra": "iterations: 1246\ncpu: 761415.008025684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2548974.9554317617,
            "unit": "ns/iter",
            "extra": "iterations: 359\ncpu: 2548932.590529243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3045.082588461124,
            "unit": "ns/iter",
            "extra": "iterations: 240869\ncpu: 3044.879166683977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15421.85158018842,
            "unit": "ns/iter",
            "extra": "iterations: 53443\ncpu: 15421.134666841272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12150.563670665235,
            "unit": "ns/iter",
            "extra": "iterations: 66255\ncpu: 12150.032450381063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11202.132681450192,
            "unit": "ns/iter",
            "extra": "iterations: 73326\ncpu: 11201.61197937978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11865.995025164293,
            "unit": "ns/iter",
            "extra": "iterations: 68746\ncpu: 11865.488901172434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 36354.82900611172,
            "unit": "ns/iter",
            "extra": "iterations: 23071\ncpu: 36354.33661306409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 482883.96473824925,
            "unit": "ns/iter",
            "extra": "iterations: 1815\ncpu: 482859.5592286511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 394169.89682539966,
            "unit": "ns/iter",
            "extra": "iterations: 2142\ncpu: 394164.5191409905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 385865.5269855057,
            "unit": "ns/iter",
            "extra": "iterations: 2279\ncpu: 385846.64326459065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 384367.3384346067,
            "unit": "ns/iter",
            "extra": "iterations: 2287\ncpu: 384359.64145168295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 232118.89261030755,
            "unit": "ns/iter",
            "extra": "iterations: 3762\ncpu: 232109.43646996186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 381526.33870967396,
            "unit": "ns/iter",
            "extra": "iterations: 2294\ncpu: 381507.018308632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1928242.4564756623,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1928200.4246284526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 761005.2119476631,
            "unit": "ns/iter",
            "extra": "iterations: 1222\ncpu: 760950.3273322406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3258.0289965409756,
            "unit": "ns/iter",
            "extra": "iterations: 244305\ncpu: 3257.986533226914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 15005.302532728248,
            "unit": "ns/iter",
            "extra": "iterations: 53776\ncpu: 15004.317911335927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12322.366602216603,
            "unit": "ns/iter",
            "extra": "iterations: 69304\ncpu: 12322.02758859514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 10920.406414507357,
            "unit": "ns/iter",
            "extra": "iterations: 75984\ncpu: 10919.760739102963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11849.265193764208,
            "unit": "ns/iter",
            "extra": "iterations: 70111\ncpu: 11848.945243970187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 36062.03935790901,
            "unit": "ns/iter",
            "extra": "iterations: 23299\ncpu: 36060.52620284132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 472095.3791598534,
            "unit": "ns/iter",
            "extra": "iterations: 1833\ncpu: 472092.4168030565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 380456.87687554286,
            "unit": "ns/iter",
            "extra": "iterations: 2266\ncpu: 380430.0529567548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 372435.3624623377,
            "unit": "ns/iter",
            "extra": "iterations: 2323\ncpu: 372427.7658200587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 377751.95975504763,
            "unit": "ns/iter",
            "extra": "iterations: 2286\ncpu: 377738.1452318483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 233191.36464673522,
            "unit": "ns/iter",
            "extra": "iterations: 3779\ncpu: 233176.9251124633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 379477.62935541844,
            "unit": "ns/iter",
            "extra": "iterations: 2296\ncpu: 379472.12543554034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 301.6178759679447,
            "unit": "ns/iter",
            "extra": "iterations: 2329720\ncpu: 301.60126538811534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1481.4746693217119,
            "unit": "ns/iter",
            "extra": "iterations: 469036\ncpu: 1481.439804194135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1181.6600024923455,
            "unit": "ns/iter",
            "extra": "iterations: 593822\ncpu: 1181.6086301955818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1162.917078146967,
            "unit": "ns/iter",
            "extra": "iterations: 601892\ncpu: 1162.8865311384852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 982.1130715239966,
            "unit": "ns/iter",
            "extra": "iterations: 714362\ncpu: 982.1030513941133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6578.370754973284,
            "unit": "ns/iter",
            "extra": "iterations: 106507\ncpu: 6578.19392152623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19386.20862174123,
            "unit": "ns/iter",
            "extra": "iterations: 36118\ncpu: 19386.040201561285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4567.599736685582,
            "unit": "ns/iter",
            "extra": "iterations: 153429\ncpu: 4567.339942253434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4479.580585810022,
            "unit": "ns/iter",
            "extra": "iterations: 155989\ncpu: 4479.512657943888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4532.419120515869,
            "unit": "ns/iter",
            "extra": "iterations: 153772\ncpu: 4532.275056577306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9303.300935448146,
            "unit": "ns/iter",
            "extra": "iterations: 75365\ncpu: 9303.023950109504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8740.54034759853,
            "unit": "ns/iter",
            "extra": "iterations: 80265\ncpu: 8739.981311904265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3164.0877895182794,
            "unit": "ns/iter",
            "extra": "iterations: 221359\ncpu: 3164.007336498592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15946.017235924954,
            "unit": "ns/iter",
            "extra": "iterations: 44268\ncpu: 15910.154061624504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12623.62656080743,
            "unit": "ns/iter",
            "extra": "iterations: 55420\ncpu: 12623.567304222353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12360.682444396032,
            "unit": "ns/iter",
            "extra": "iterations: 56472\ncpu: 12360.004958209316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13376.5161076998,
            "unit": "ns/iter",
            "extra": "iterations: 52925\ncpu: 13376.434577231921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 27653.541793462544,
            "unit": "ns/iter",
            "extra": "iterations: 25303\ncpu: 27651.930601114167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 101184.10491330357,
            "unit": "ns/iter",
            "extra": "iterations: 6920\ncpu: 101181.01156069392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86429.94137249954,
            "unit": "ns/iter",
            "extra": "iterations: 8102\ncpu: 86423.99407553794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84996.75684184839,
            "unit": "ns/iter",
            "extra": "iterations: 8258\ncpu: 84995.81012351807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85310.1020333645,
            "unit": "ns/iter",
            "extra": "iterations: 8213\ncpu: 85306.8915134544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55414.8887564502,
            "unit": "ns/iter",
            "extra": "iterations: 12585\ncpu: 55410.83035359515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85745.37752863808,
            "unit": "ns/iter",
            "extra": "iterations: 8206\ncpu: 85743.2366561053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3097.5063646468543,
            "unit": "ns/iter",
            "extra": "iterations: 225857\ncpu: 3097.2872215605585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15500.460687580931,
            "unit": "ns/iter",
            "extra": "iterations: 45202\ncpu: 15499.840715012666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12480.858873625004,
            "unit": "ns/iter",
            "extra": "iterations: 56127\ncpu: 12480.936091364294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12296.636339564579,
            "unit": "ns/iter",
            "extra": "iterations: 56649\ncpu: 12296.506557926821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12686.760798494171,
            "unit": "ns/iter",
            "extra": "iterations: 54753\ncpu: 12686.134093109129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27006.08174765461,
            "unit": "ns/iter",
            "extra": "iterations: 25909\ncpu: 27004.63931452349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 100743.01783658567,
            "unit": "ns/iter",
            "extra": "iterations: 6952\ncpu: 100735.94649022029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84261.33890157736,
            "unit": "ns/iter",
            "extra": "iterations: 8321\ncpu: 84257.19264511587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83242.41440687586,
            "unit": "ns/iter",
            "extra": "iterations: 8371\ncpu: 83238.6453231387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84960.56306797796,
            "unit": "ns/iter",
            "extra": "iterations: 8253\ncpu: 84957.17920756123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 56150.20450341785,
            "unit": "ns/iter",
            "extra": "iterations: 12435\ncpu: 56144.366706875924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 86041.49391817252,
            "unit": "ns/iter",
            "extra": "iterations: 8139\ncpu: 86037.04386288208 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705953602603,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 737.7920751104973,
            "unit": "ns/iter",
            "extra": "iterations: 949641\ncpu: 737.7525822916239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11012.5256473023,
            "unit": "ns/iter",
            "extra": "iterations: 75583\ncpu: 11012.046359631135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24535.87348145659,
            "unit": "ns/iter",
            "extra": "iterations: 34161\ncpu: 24535.148268493318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37857.190365120274,
            "unit": "ns/iter",
            "extra": "iterations: 22294\ncpu: 37855.27944738493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48336.2859428713,
            "unit": "ns/iter",
            "extra": "iterations: 16874\ncpu: 48333.578286120675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58325.22427572756,
            "unit": "ns/iter",
            "extra": "iterations: 14014\ncpu: 58322.320536606254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59072.92349999125,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59071.189999999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68240.63207399183,
            "unit": "ns/iter",
            "extra": "iterations: 12758\ncpu: 68238.21131838846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78340.93708490544,
            "unit": "ns/iter",
            "extra": "iterations: 11142\ncpu: 78339.52611739365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 590.9878973784698,
            "unit": "ns/iter",
            "extra": "iterations: 1184702\ncpu: 590.9871849629695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 499.96709736627656,
            "unit": "ns/iter",
            "extra": "iterations: 1401286\ncpu: 499.96167805858386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 530.1737000085434,
            "unit": "ns/iter",
            "extra": "iterations: 1360259\ncpu: 530.1635938449962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 492.6193966017724,
            "unit": "ns/iter",
            "extra": "iterations: 1412268\ncpu: 492.61832739961557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 969.86815155065,
            "unit": "ns/iter",
            "extra": "iterations: 721897\ncpu: 969.8649530334678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3355.826169239093,
            "unit": "ns/iter",
            "extra": "iterations: 239365\ncpu: 3355.822279781923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15298.347889401812,
            "unit": "ns/iter",
            "extra": "iterations: 53563\ncpu: 15298.106902152613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12237.028738212755,
            "unit": "ns/iter",
            "extra": "iterations: 66810\ncpu: 12237.099236641225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11200.528627236648,
            "unit": "ns/iter",
            "extra": "iterations: 72955\ncpu: 11200.08087177028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11991.342377016574,
            "unit": "ns/iter",
            "extra": "iterations: 68851\ncpu: 11991.018285863644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 36092.35465495582,
            "unit": "ns/iter",
            "extra": "iterations: 22997\ncpu: 36091.62064617128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 458866.02278751315,
            "unit": "ns/iter",
            "extra": "iterations: 1887\ncpu: 458856.12082670967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 378631.01132405084,
            "unit": "ns/iter",
            "extra": "iterations: 2296\ncpu: 378620.4703832756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 373894.5757445378,
            "unit": "ns/iter",
            "extra": "iterations: 2317\ncpu: 373878.76564523147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 381604.1856392087,
            "unit": "ns/iter",
            "extra": "iterations: 2284\ncpu: 381598.9054290715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 228948.0843214535,
            "unit": "ns/iter",
            "extra": "iterations: 3795\ncpu: 228942.4505928858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 376132.2085143388,
            "unit": "ns/iter",
            "extra": "iterations: 2302\ncpu: 376124.4569939178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1897996.3580247774,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1897909.6707818902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 779301.7962201302,
            "unit": "ns/iter",
            "extra": "iterations: 1217\ncpu: 779283.8948233362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2579752.9747190573,
            "unit": "ns/iter",
            "extra": "iterations: 356\ncpu: 2579673.314606743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3242.3394098471717,
            "unit": "ns/iter",
            "extra": "iterations: 242683\ncpu: 3242.20732395759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15127.492895090785,
            "unit": "ns/iter",
            "extra": "iterations: 54399\ncpu: 15127.132851706907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12108.180077361578,
            "unit": "ns/iter",
            "extra": "iterations: 67993\ncpu: 12107.896401100097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11298.471876460402,
            "unit": "ns/iter",
            "extra": "iterations: 72786\ncpu: 11298.256532849633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11892.29652860065,
            "unit": "ns/iter",
            "extra": "iterations: 69194\ncpu: 11891.924155273582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 36219.1909758683,
            "unit": "ns/iter",
            "extra": "iterations: 22872\ncpu: 36218.80902413422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 478612.8780353473,
            "unit": "ns/iter",
            "extra": "iterations: 1812\ncpu: 478613.0794701975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 387684.3494623472,
            "unit": "ns/iter",
            "extra": "iterations: 2232\ncpu: 387682.0788530472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 384342.7278703023,
            "unit": "ns/iter",
            "extra": "iterations: 2282\ncpu: 384336.9412795791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 383937.1254386243,
            "unit": "ns/iter",
            "extra": "iterations: 2280\ncpu: 383937.2368421049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 229696.22814892666,
            "unit": "ns/iter",
            "extra": "iterations: 3787\ncpu: 229696.17111169678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 380596.3961123041,
            "unit": "ns/iter",
            "extra": "iterations: 2315\ncpu: 380587.3002159829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1915967.5656777802,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1915829.661016952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 760743.6141349031,
            "unit": "ns/iter",
            "extra": "iterations: 1231\ncpu: 760739.3988627093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3313.6825985865253,
            "unit": "ns/iter",
            "extra": "iterations: 241716\ncpu: 3313.667692664123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 15075.357254291537,
            "unit": "ns/iter",
            "extra": "iterations: 54485\ncpu: 15075.09222721841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12052.759567339488,
            "unit": "ns/iter",
            "extra": "iterations: 68044\ncpu: 12052.837869613762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11254.951788707234,
            "unit": "ns/iter",
            "extra": "iterations: 71560\ncpu: 11254.7778088318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11816.81179007903,
            "unit": "ns/iter",
            "extra": "iterations: 69550\ncpu: 11816.691588785065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 36459.5893614237,
            "unit": "ns/iter",
            "extra": "iterations: 22879\ncpu: 36458.96236723641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 467759.3000539432,
            "unit": "ns/iter",
            "extra": "iterations: 1853\ncpu: 467758.6076632506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 379935.7470613636,
            "unit": "ns/iter",
            "extra": "iterations: 2297\ncpu: 379935.1327818905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 375500.1122183834,
            "unit": "ns/iter",
            "extra": "iterations: 2308\ncpu: 375497.53032929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 378737.7596865453,
            "unit": "ns/iter",
            "extra": "iterations: 2297\ncpu: 378734.17501088174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 231614.49722441315,
            "unit": "ns/iter",
            "extra": "iterations: 3783\ncpu: 231615.96616441951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 375744.68423308595,
            "unit": "ns/iter",
            "extra": "iterations: 2334\ncpu: 375744.6872322186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 296.03054451953057,
            "unit": "ns/iter",
            "extra": "iterations: 2369263\ncpu: 296.02108334954994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1531.2345552752693,
            "unit": "ns/iter",
            "extra": "iterations: 458587\ncpu: 1531.24379888659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1182.8518567925214,
            "unit": "ns/iter",
            "extra": "iterations: 592204\ncpu: 1182.859116115401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1161.0448066151648,
            "unit": "ns/iter",
            "extra": "iterations: 603460\ncpu: 1161.0416597620344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 997.3014405155375,
            "unit": "ns/iter",
            "extra": "iterations: 701485\ncpu: 997.2943113537725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6592.219146219975,
            "unit": "ns/iter",
            "extra": "iterations: 105765\ncpu: 6592.106084243337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19368.119844295066,
            "unit": "ns/iter",
            "extra": "iterations: 36222\ncpu: 19367.754403401097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4534.647306256114,
            "unit": "ns/iter",
            "extra": "iterations: 154766\ncpu: 4534.6038535595635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4549.060750211116,
            "unit": "ns/iter",
            "extra": "iterations: 154090\ncpu: 4548.916217794772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4576.519815686401,
            "unit": "ns/iter",
            "extra": "iterations: 152783\ncpu: 4576.409679087366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9542.48198099822,
            "unit": "ns/iter",
            "extra": "iterations: 73256\ncpu: 9542.161734192383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8671.436005852436,
            "unit": "ns/iter",
            "extra": "iterations: 80648\ncpu: 8671.210693383691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3157.9941698317293,
            "unit": "ns/iter",
            "extra": "iterations: 221949\ncpu: 3157.9646675587405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15927.39956262216,
            "unit": "ns/iter",
            "extra": "iterations: 43898\ncpu: 15927.099184473047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12588.884618858581,
            "unit": "ns/iter",
            "extra": "iterations: 55347\ncpu: 12588.680506622004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12475.08331399639,
            "unit": "ns/iter",
            "extra": "iterations: 56029\ncpu: 12474.773777864908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13298.068381611041,
            "unit": "ns/iter",
            "extra": "iterations: 52441\ncpu: 13297.73269007076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28072.795151711118,
            "unit": "ns/iter",
            "extra": "iterations: 24916\ncpu: 28071.56445657402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99993.26024983011,
            "unit": "ns/iter",
            "extra": "iterations: 6805\ncpu: 99990.55106539365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 87436.11022144726,
            "unit": "ns/iter",
            "extra": "iterations: 7993\ncpu: 87436.68209683533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85231.86093198674,
            "unit": "ns/iter",
            "extra": "iterations: 8219\ncpu: 85230.96483757114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 86170.78244837892,
            "unit": "ns/iter",
            "extra": "iterations: 8136\ncpu: 86169.30924287028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55565.44645694601,
            "unit": "ns/iter",
            "extra": "iterations: 12588\ncpu: 55562.50397203675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85775.78889431673,
            "unit": "ns/iter",
            "extra": "iterations: 8176\ncpu: 85771.89334637858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3066.063951984727,
            "unit": "ns/iter",
            "extra": "iterations: 228093\ncpu: 3065.987119289024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15262.671092350256,
            "unit": "ns/iter",
            "extra": "iterations: 45718\ncpu: 15262.235880834609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12271.374877192948,
            "unit": "ns/iter",
            "extra": "iterations: 57000\ncpu: 12271.452631578864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12073.016911052357,
            "unit": "ns/iter",
            "extra": "iterations: 57832\ncpu: 12072.461612947876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12632.453802198637,
            "unit": "ns/iter",
            "extra": "iterations: 55652\ncpu: 12632.245022640614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27115.62024335567,
            "unit": "ns/iter",
            "extra": "iterations: 25806\ncpu: 27114.9190110828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98625.75841194773,
            "unit": "ns/iter",
            "extra": "iterations: 7103\ncpu: 98623.13107137907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 82888.74884655706,
            "unit": "ns/iter",
            "extra": "iterations: 8453\ncpu: 82886.099609605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82035.23525281646,
            "unit": "ns/iter",
            "extra": "iterations: 8544\ncpu: 82033.157771535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83638.58284553357,
            "unit": "ns/iter",
            "extra": "iterations: 8371\ncpu: 83639.13510930586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55515.023601400106,
            "unit": "ns/iter",
            "extra": "iterations: 12584\ncpu: 55513.151621107216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84288.47295338924,
            "unit": "ns/iter",
            "extra": "iterations: 8282\ncpu: 84285.83675440801 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705955632119,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 726.3314117919111,
            "unit": "ns/iter",
            "extra": "iterations: 961034\ncpu: 726.2949073601976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10768.989039170037,
            "unit": "ns/iter",
            "extra": "iterations: 76819\ncpu: 10768.732995743241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23936.552605926343,
            "unit": "ns/iter",
            "extra": "iterations: 34882\ncpu: 23935.66309271257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38847.681778095255,
            "unit": "ns/iter",
            "extra": "iterations: 22676\ncpu: 38846.727817957326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 49604.82737077782,
            "unit": "ns/iter",
            "extra": "iterations: 16967\ncpu: 49602.06872163613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59217.11410614507,
            "unit": "ns/iter",
            "extra": "iterations: 14320\ncpu: 59214.03631284917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 65569.51599999366,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 65569.98999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68465.98330828633,
            "unit": "ns/iter",
            "extra": "iterations: 12641\ncpu: 68463.05672019621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78561.55211799851,
            "unit": "ns/iter",
            "extra": "iterations: 11119\ncpu: 78556.96555445631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 600.9345620877872,
            "unit": "ns/iter",
            "extra": "iterations: 1165028\ncpu: 600.8980900029867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 509.77541307232354,
            "unit": "ns/iter",
            "extra": "iterations: 1386924\ncpu: 509.7401155362519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 511.6107414923922,
            "unit": "ns/iter",
            "extra": "iterations: 1359960\ncpu: 511.60401776522775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 495.6918954530632,
            "unit": "ns/iter",
            "extra": "iterations: 1411615\ncpu: 495.6592271972179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 969.5543711494269,
            "unit": "ns/iter",
            "extra": "iterations: 723288\ncpu: 969.5331596818975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3227.453753562164,
            "unit": "ns/iter",
            "extra": "iterations: 241424\ncpu: 3227.4094539068215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15161.722873431472,
            "unit": "ns/iter",
            "extra": "iterations: 53149\ncpu: 15161.267380383437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12048.57884432722,
            "unit": "ns/iter",
            "extra": "iterations: 68445\ncpu: 12047.996201329515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11260.546568525811,
            "unit": "ns/iter",
            "extra": "iterations: 72549\ncpu: 11260.203448703605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11759.940258800787,
            "unit": "ns/iter",
            "extra": "iterations: 69165\ncpu: 11759.731077857337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 36290.126124951166,
            "unit": "ns/iter",
            "extra": "iterations: 23001\ncpu: 36289.64827616183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 462431.68666311505,
            "unit": "ns/iter",
            "extra": "iterations: 1867\ncpu: 462418.3717193361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 379546.55422218924,
            "unit": "ns/iter",
            "extra": "iterations: 2250\ncpu: 379527.55555555486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 377253.79287886556,
            "unit": "ns/iter",
            "extra": "iterations: 2303\ncpu: 377236.9518019981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 380851.82236839324,
            "unit": "ns/iter",
            "extra": "iterations: 2280\ncpu: 380849.21052631654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 230555.15612489742,
            "unit": "ns/iter",
            "extra": "iterations: 3747\ncpu: 230550.3602882304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 374562.1569892773,
            "unit": "ns/iter",
            "extra": "iterations: 2325\ncpu: 374551.9139784946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1899206.0807451752,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1899125.2587991736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 741146.2647289936,
            "unit": "ns/iter",
            "extra": "iterations: 1273\ncpu: 741115.3181461117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2567626.7098592883,
            "unit": "ns/iter",
            "extra": "iterations: 355\ncpu: 2567429.014084515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3183.390942583243,
            "unit": "ns/iter",
            "extra": "iterations: 247819\ncpu: 3183.2708549384865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15517.459329689058,
            "unit": "ns/iter",
            "extra": "iterations: 52692\ncpu: 15517.218932665246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12267.000511286127,
            "unit": "ns/iter",
            "extra": "iterations: 66499\ncpu: 12266.422051459404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11184.59178218107,
            "unit": "ns/iter",
            "extra": "iterations: 72574\ncpu: 11184.291895169054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12314.609483037017,
            "unit": "ns/iter",
            "extra": "iterations: 67974\ncpu: 12314.330479300885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 37489.348822491644,
            "unit": "ns/iter",
            "extra": "iterations: 22123\ncpu: 37487.84070876465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 483116.54257096315,
            "unit": "ns/iter",
            "extra": "iterations: 1797\ncpu: 483093.82303839736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 388760.0761692702,
            "unit": "ns/iter",
            "extra": "iterations: 2245\ncpu: 388755.63474387536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 381837.8602620103,
            "unit": "ns/iter",
            "extra": "iterations: 2290\ncpu: 381828.6462882121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 382126.93342037004,
            "unit": "ns/iter",
            "extra": "iterations: 2298\ncpu: 382116.01392515464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 228286.36650167918,
            "unit": "ns/iter",
            "extra": "iterations: 3839\ncpu: 228276.21776504163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 382772.4800700787,
            "unit": "ns/iter",
            "extra": "iterations: 2283\ncpu: 382757.1178274205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1908453.6569037873,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1908375.1046025136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 767176.9114027346,
            "unit": "ns/iter",
            "extra": "iterations: 1219\ncpu: 767141.7555373263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3313.5666058242355,
            "unit": "ns/iter",
            "extra": "iterations: 241060\ncpu: 3313.37094499293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 15105.714148822253,
            "unit": "ns/iter",
            "extra": "iterations: 54266\ncpu: 15104.693546603823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12040.96260251206,
            "unit": "ns/iter",
            "extra": "iterations: 67919\ncpu: 12040.605721521179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11247.530817816809,
            "unit": "ns/iter",
            "extra": "iterations: 72669\ncpu: 11246.971886223897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11830.508790576398,
            "unit": "ns/iter",
            "extra": "iterations: 67743\ncpu: 11829.7905318631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 38280.214835868865,
            "unit": "ns/iter",
            "extra": "iterations: 21812\ncpu: 38277.95250320905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 466195.71772896306,
            "unit": "ns/iter",
            "extra": "iterations: 1867\ncpu: 466184.09212640254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 377417.2878919864,
            "unit": "ns/iter",
            "extra": "iterations: 2296\ncpu: 377399.6080139401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 371572.4849397254,
            "unit": "ns/iter",
            "extra": "iterations: 2324\ncpu: 371554.7762478493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 377014.04782608175,
            "unit": "ns/iter",
            "extra": "iterations: 2300\ncpu: 376996.30434782646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 232881.6562665162,
            "unit": "ns/iter",
            "extra": "iterations: 3782\ncpu: 232868.05922792203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 376828.4349330172,
            "unit": "ns/iter",
            "extra": "iterations: 2313\ncpu: 376815.4777345429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 299.34020245249764,
            "unit": "ns/iter",
            "extra": "iterations: 2314222\ncpu: 299.33900032062604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1518.2011062378224,
            "unit": "ns/iter",
            "extra": "iterations: 462830\ncpu: 1518.1498606399766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1193.0209314271854,
            "unit": "ns/iter",
            "extra": "iterations: 587872\ncpu: 1192.9535681236737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1190.2373083898724,
            "unit": "ns/iter",
            "extra": "iterations: 586608\ncpu: 1190.147594304884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 995.6085793514563,
            "unit": "ns/iter",
            "extra": "iterations: 703573\ncpu: 995.5509947084348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6850.135870495154,
            "unit": "ns/iter",
            "extra": "iterations: 105262\ncpu: 6850.085500940499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18196.006255027278,
            "unit": "ns/iter",
            "extra": "iterations: 38529\ncpu: 18196.140569441413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4499.667627201241,
            "unit": "ns/iter",
            "extra": "iterations: 155816\ncpu: 4499.3883811675405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4460.806939938773,
            "unit": "ns/iter",
            "extra": "iterations: 156889\ncpu: 4460.469503916744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4537.534577796179,
            "unit": "ns/iter",
            "extra": "iterations: 155837\ncpu: 4537.373666074134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9696.571875737103,
            "unit": "ns/iter",
            "extra": "iterations: 72201\ncpu: 9695.889253611485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8718.838153018629,
            "unit": "ns/iter",
            "extra": "iterations: 80434\ncpu: 8718.355421836524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3206.7680828663733,
            "unit": "ns/iter",
            "extra": "iterations: 221273\ncpu: 3206.5308465108883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15983.846930616131,
            "unit": "ns/iter",
            "extra": "iterations: 43771\ncpu: 15983.760937607089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12626.994268720497,
            "unit": "ns/iter",
            "extra": "iterations: 55485\ncpu: 12626.911777958021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12536.290921103222,
            "unit": "ns/iter",
            "extra": "iterations: 55998\ncpu: 12535.535197685505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13376.419543424045,
            "unit": "ns/iter",
            "extra": "iterations: 52171\ncpu: 13375.678058691628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 27772.262747115925,
            "unit": "ns/iter",
            "extra": "iterations: 25241\ncpu: 27770.147775444642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 101616.24753624457,
            "unit": "ns/iter",
            "extra": "iterations: 6900\ncpu: 101610.44927536277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 87030.6643486889,
            "unit": "ns/iter",
            "extra": "iterations: 8053\ncpu: 87024.09040109131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85071.61716453513,
            "unit": "ns/iter",
            "extra": "iterations: 8168\ncpu: 85070.49461312429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85459.97709550716,
            "unit": "ns/iter",
            "extra": "iterations: 8208\ncpu: 85458.78411305965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 56018.2478823717,
            "unit": "ns/iter",
            "extra": "iterations: 12514\ncpu: 56014.05625699223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 86025.50000000742,
            "unit": "ns/iter",
            "extra": "iterations: 8120\ncpu: 86021.37931034384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3143.425719104521,
            "unit": "ns/iter",
            "extra": "iterations: 222325\ncpu: 3143.2146632182553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15442.6057916348,
            "unit": "ns/iter",
            "extra": "iterations: 45065\ncpu: 15441.677576833627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12235.40739254035,
            "unit": "ns/iter",
            "extra": "iterations: 57301\ncpu: 12234.641629291078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12139.341558734357,
            "unit": "ns/iter",
            "extra": "iterations: 57829\ncpu: 12139.264037074727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12693.898947254202,
            "unit": "ns/iter",
            "extra": "iterations: 55189\ncpu: 12693.462465346445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 26855.68707639984,
            "unit": "ns/iter",
            "extra": "iterations: 25968\ncpu: 26854.135859519698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 100703.68593616343,
            "unit": "ns/iter",
            "extra": "iterations: 6954\ncpu: 100699.26660914527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84932.58057474611,
            "unit": "ns/iter",
            "extra": "iterations: 8247\ncpu: 84926.5672365716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83805.5883690353,
            "unit": "ns/iter",
            "extra": "iterations: 8357\ncpu: 83801.495752063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 85001.36895674316,
            "unit": "ns/iter",
            "extra": "iterations: 8253\ncpu: 85002.01138979846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 56051.151045825245,
            "unit": "ns/iter",
            "extra": "iterations: 12526\ncpu: 56047.94826760386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 85507.21896024792,
            "unit": "ns/iter",
            "extra": "iterations: 8175\ncpu: 85502.51987767666 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705957172967,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 744.632493270782,
            "unit": "ns/iter",
            "extra": "iterations: 937708\ncpu: 744.6196470543069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11065.774583679357,
            "unit": "ns/iter",
            "extra": "iterations: 74582\ncpu: 11065.578825990186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24445.45662180869,
            "unit": "ns/iter",
            "extra": "iterations: 34107\ncpu: 24444.612542879757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37481.59159307673,
            "unit": "ns/iter",
            "extra": "iterations: 22196\ncpu: 37479.08181654352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47180.29826977451,
            "unit": "ns/iter",
            "extra": "iterations: 16703\ncpu: 47177.34538705618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 61355.30862163885,
            "unit": "ns/iter",
            "extra": "iterations: 14568\ncpu: 61353.1095551895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59651.84450000151,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59644.06999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68267.16937007941,
            "unit": "ns/iter",
            "extra": "iterations: 12700\ncpu: 68261.9448818898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78007.56771766777,
            "unit": "ns/iter",
            "extra": "iterations: 11164\ncpu: 78002.05123611617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 579.7284327964218,
            "unit": "ns/iter",
            "extra": "iterations: 1193189\ncpu: 579.715786853549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 497.57741126118293,
            "unit": "ns/iter",
            "extra": "iterations: 1395359\ncpu: 497.57868763522504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 502.7638837396277,
            "unit": "ns/iter",
            "extra": "iterations: 1391772\ncpu: 502.7497319963334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 496.0564410321844,
            "unit": "ns/iter",
            "extra": "iterations: 1408532\ncpu: 496.0575975554688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 958.9684197107927,
            "unit": "ns/iter",
            "extra": "iterations: 729569\ncpu: 958.9568635728764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3285.832851328325,
            "unit": "ns/iter",
            "extra": "iterations: 242736\ncpu: 3285.746654801922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15225.632802258064,
            "unit": "ns/iter",
            "extra": "iterations: 54167\ncpu: 15224.967230970902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12313.264736435545,
            "unit": "ns/iter",
            "extra": "iterations: 67384\ncpu: 12313.08322450436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 10474.119842554202,
            "unit": "ns/iter",
            "extra": "iterations: 78503\ncpu: 10473.747500095511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11523.013411426919,
            "unit": "ns/iter",
            "extra": "iterations: 71879\ncpu: 11522.711779518335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 36623.950069652055,
            "unit": "ns/iter",
            "extra": "iterations: 22972\ncpu: 36622.24011840492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 468995.07676019834,
            "unit": "ns/iter",
            "extra": "iterations: 1889\ncpu: 468987.45367919677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 378066.1277056184,
            "unit": "ns/iter",
            "extra": "iterations: 2310\ncpu: 378055.6709956716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 370779.81755891955,
            "unit": "ns/iter",
            "extra": "iterations: 2335\ncpu: 370761.54175588844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 381104.6921723997,
            "unit": "ns/iter",
            "extra": "iterations: 2274\ncpu: 381098.85664028046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 231555.33039998772,
            "unit": "ns/iter",
            "extra": "iterations: 3750\ncpu: 231548.9066666667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 375845.50760540663,
            "unit": "ns/iter",
            "extra": "iterations: 2301\ncpu: 375832.2468491957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1902692.143451072,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1902548.856548858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 761110.5619504905,
            "unit": "ns/iter",
            "extra": "iterations: 1251\ncpu: 761096.962430055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2569555.6045199307,
            "unit": "ns/iter",
            "extra": "iterations: 354\ncpu: 2569474.293785313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3195.35196828948,
            "unit": "ns/iter",
            "extra": "iterations: 245721\ncpu: 3195.2641410380074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14851.341458577052,
            "unit": "ns/iter",
            "extra": "iterations: 55465\ncpu: 14850.9690795997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11996.942639011368,
            "unit": "ns/iter",
            "extra": "iterations: 68897\ncpu: 11996.98825783409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 10547.548337477096,
            "unit": "ns/iter",
            "extra": "iterations: 78014\ncpu: 10547.444048504074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11754.639044071011,
            "unit": "ns/iter",
            "extra": "iterations: 70884\ncpu: 11754.333841205267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 37228.937976254936,
            "unit": "ns/iter",
            "extra": "iterations: 22572\ncpu: 37227.97270955166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 479570.5334429899,
            "unit": "ns/iter",
            "extra": "iterations: 1824\ncpu: 479558.3333333344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 389457.24529989966,
            "unit": "ns/iter",
            "extra": "iterations: 2234\ncpu: 389443.3303491515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 379655.3205741686,
            "unit": "ns/iter",
            "extra": "iterations: 2299\ncpu: 379640.5393649419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 384154.1569231045,
            "unit": "ns/iter",
            "extra": "iterations: 2275\ncpu: 384148.30769230577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 231022.515695064,
            "unit": "ns/iter",
            "extra": "iterations: 3791\ncpu: 231020.6541809541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 376900.8127193274,
            "unit": "ns/iter",
            "extra": "iterations: 2280\ncpu: 376893.33333333425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1915196.1073684057,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1915134.5263157876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 743986.8188348279,
            "unit": "ns/iter",
            "extra": "iterations: 1253\ncpu: 743978.3719074182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3262.433084102059,
            "unit": "ns/iter",
            "extra": "iterations: 245689\ncpu: 3262.395548844261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 15040.912695833968,
            "unit": "ns/iter",
            "extra": "iterations: 55404\ncpu: 15040.442928308468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12320.57870025342,
            "unit": "ns/iter",
            "extra": "iterations: 67090\ncpu: 12320.36667163513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 10888.337907125062,
            "unit": "ns/iter",
            "extra": "iterations: 75284\ncpu: 10888.366718027753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11943.44487350093,
            "unit": "ns/iter",
            "extra": "iterations: 69921\ncpu: 11943.245948999664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 38016.708132446285,
            "unit": "ns/iter",
            "extra": "iterations: 21986\ncpu: 38014.959519694276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 470540.6518479065,
            "unit": "ns/iter",
            "extra": "iterations: 1867\ncpu: 470534.54740224814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 384182.63536152226,
            "unit": "ns/iter",
            "extra": "iterations: 2268\ncpu: 384179.8059964704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 372417.2687473007,
            "unit": "ns/iter",
            "extra": "iterations: 2307\ncpu: 372409.49284785683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 378530.5627177648,
            "unit": "ns/iter",
            "extra": "iterations: 2296\ncpu: 378519.1202090573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 234016.32080000735,
            "unit": "ns/iter",
            "extra": "iterations: 3750\ncpu: 234017.0399999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 375832.1388053165,
            "unit": "ns/iter",
            "extra": "iterations: 2327\ncpu: 375825.3975075199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 296.6158322901896,
            "unit": "ns/iter",
            "extra": "iterations: 2359886\ncpu: 296.60869211478877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1506.121017176034,
            "unit": "ns/iter",
            "extra": "iterations: 464777\ncpu: 1506.1009903674114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1180.1408228808257,
            "unit": "ns/iter",
            "extra": "iterations: 592844\ncpu: 1180.1441863289454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1094.7687764758236,
            "unit": "ns/iter",
            "extra": "iterations: 637846\ncpu: 1094.7720923232241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 986.6425131801689,
            "unit": "ns/iter",
            "extra": "iterations: 709587\ncpu: 986.631660388372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6616.012531801715,
            "unit": "ns/iter",
            "extra": "iterations: 105731\ncpu: 6615.842089831704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19309.62647492547,
            "unit": "ns/iter",
            "extra": "iterations: 37968\ncpu: 19309.281500210567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4505.002016732759,
            "unit": "ns/iter",
            "extra": "iterations: 153714\ncpu: 4504.766644547623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4455.545112877954,
            "unit": "ns/iter",
            "extra": "iterations: 156984\ncpu: 4455.143836314532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4504.761085629557,
            "unit": "ns/iter",
            "extra": "iterations: 155449\ncpu: 4504.473492914097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 8981.586509624527,
            "unit": "ns/iter",
            "extra": "iterations: 78026\ncpu: 8980.88073206377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8635.970218334183,
            "unit": "ns/iter",
            "extra": "iterations: 81023\ncpu: 8635.755279365158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3112.2564537001417,
            "unit": "ns/iter",
            "extra": "iterations: 224871\ncpu: 3112.1594158428625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15708.325698426812,
            "unit": "ns/iter",
            "extra": "iterations: 44314\ncpu: 15708.080967640228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12476.969465512286,
            "unit": "ns/iter",
            "extra": "iterations: 56035\ncpu: 12476.537878111856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12365.97008848398,
            "unit": "ns/iter",
            "extra": "iterations: 56734\ncpu: 12365.995699228037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13130.274506129277,
            "unit": "ns/iter",
            "extra": "iterations: 53354\ncpu: 13129.765340930348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 27864.28985564951,
            "unit": "ns/iter",
            "extra": "iterations: 25147\ncpu: 27863.951962461048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 102676.00834797214,
            "unit": "ns/iter",
            "extra": "iterations: 6828\ncpu: 102676.30345635665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86147.2459627384,
            "unit": "ns/iter",
            "extra": "iterations: 8050\ncpu: 86145.08074534182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85156.43426828939,
            "unit": "ns/iter",
            "extra": "iterations: 8200\ncpu: 85155.28048780448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 86013.03220611495,
            "unit": "ns/iter",
            "extra": "iterations: 8073\ncpu: 86011.80478136941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55530.118677822065,
            "unit": "ns/iter",
            "extra": "iterations: 12555\ncpu: 55526.148944644425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85981.71545810271,
            "unit": "ns/iter",
            "extra": "iterations: 8164\ncpu: 85975.12248897579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3125.389171741465,
            "unit": "ns/iter",
            "extra": "iterations: 224302\ncpu: 3125.229378248942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15284.171366878092,
            "unit": "ns/iter",
            "extra": "iterations: 45849\ncpu: 15283.221008091969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12411.232480765939,
            "unit": "ns/iter",
            "extra": "iterations: 52899\ncpu: 12411.08149492439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12106.128819414962,
            "unit": "ns/iter",
            "extra": "iterations: 57895\ncpu: 12105.041886173161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12610.400876134247,
            "unit": "ns/iter",
            "extra": "iterations: 55471\ncpu: 12609.734816390583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27123.65422586638,
            "unit": "ns/iter",
            "extra": "iterations: 25829\ncpu: 27121.681056177258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 100278.58952340187,
            "unit": "ns/iter",
            "extra": "iterations: 6987\ncpu: 100271.56147130276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84227.65974057102,
            "unit": "ns/iter",
            "extra": "iterations: 8326\ncpu: 84220.56209464291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82265.2813311306,
            "unit": "ns/iter",
            "extra": "iterations: 8474\ncpu: 82259.81826764221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84322.05364029911,
            "unit": "ns/iter",
            "extra": "iterations: 8296\ncpu: 84321.02217936424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55883.93254650911,
            "unit": "ns/iter",
            "extra": "iterations: 12201\ncpu: 55879.82952217066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84964.61386497972,
            "unit": "ns/iter",
            "extra": "iterations: 8251\ncpu: 84957.30214519419 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705958669290,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 743.3470767914752,
            "unit": "ns/iter",
            "extra": "iterations: 943843\ncpu: 743.3422719668421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10953.347023105232,
            "unit": "ns/iter",
            "extra": "iterations: 75263\ncpu: 10953.073887567598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24298.490707512687,
            "unit": "ns/iter",
            "extra": "iterations: 34275\ncpu: 24298.39241429614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38036.73194228861,
            "unit": "ns/iter",
            "extra": "iterations: 21279\ncpu: 38035.485690117006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47932.55884301917,
            "unit": "ns/iter",
            "extra": "iterations: 16595\ncpu: 47931.76860500152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59521.87043539513,
            "unit": "ns/iter",
            "extra": "iterations: 14240\ncpu: 59521.36938202249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59727.10549999647,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59726.759999999944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68446.82523888159,
            "unit": "ns/iter",
            "extra": "iterations: 12663\ncpu: 68444.08907841747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78581.85151188189,
            "unit": "ns/iter",
            "extra": "iterations: 11112\ncpu: 78581.38048956083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 589.8918004572545,
            "unit": "ns/iter",
            "extra": "iterations: 1184127\ncpu: 589.8762548273965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 503.4232829578001,
            "unit": "ns/iter",
            "extra": "iterations: 1390356\ncpu: 503.40660953022166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 484.2683785818365,
            "unit": "ns/iter",
            "extra": "iterations: 1443841\ncpu: 484.254706716321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 490.17124816185594,
            "unit": "ns/iter",
            "extra": "iterations: 1429446\ncpu: 490.17388554726796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 952.0054929610004,
            "unit": "ns/iter",
            "extra": "iterations: 736397\ncpu: 951.9907061001059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3315.381589096402,
            "unit": "ns/iter",
            "extra": "iterations: 239847\ncpu: 3315.3660458542327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14932.42301890971,
            "unit": "ns/iter",
            "extra": "iterations: 54364\ncpu: 14931.988080347284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11923.701469989675,
            "unit": "ns/iter",
            "extra": "iterations: 68844\ncpu: 11923.720295160098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11240.776217240455,
            "unit": "ns/iter",
            "extra": "iterations: 72767\ncpu: 11240.57058831616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11820.239143695653,
            "unit": "ns/iter",
            "extra": "iterations: 68854\ncpu: 11820.200714555445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 36488.269224083306,
            "unit": "ns/iter",
            "extra": "iterations: 23018\ncpu: 36487.54887479359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 464745.50755940395,
            "unit": "ns/iter",
            "extra": "iterations: 1852\ncpu: 464739.2548596109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 380339.3219088889,
            "unit": "ns/iter",
            "extra": "iterations: 2305\ncpu: 380331.5401301505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 379139.6389250376,
            "unit": "ns/iter",
            "extra": "iterations: 2307\ncpu: 379135.37061118346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 383227.9783950395,
            "unit": "ns/iter",
            "extra": "iterations: 2268\ncpu: 383226.23456790234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 233813.2418839607,
            "unit": "ns/iter",
            "extra": "iterations: 3758\ncpu: 233810.1649813725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 379206.2285215714,
            "unit": "ns/iter",
            "extra": "iterations: 2293\ncpu: 379198.7788922806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1902766.9917526622,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1902496.4948453626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 758967.8212598051,
            "unit": "ns/iter",
            "extra": "iterations: 1270\ncpu: 758746.141732283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2566056.234636994,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 2565971.508379888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3171.988473798942,
            "unit": "ns/iter",
            "extra": "iterations: 245007\ncpu: 3171.8608039770243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15425.725470116933,
            "unit": "ns/iter",
            "extra": "iterations: 53710\ncpu: 15425.285794079347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12131.722167931948,
            "unit": "ns/iter",
            "extra": "iterations: 66515\ncpu: 12131.777794482465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11455.917100665529,
            "unit": "ns/iter",
            "extra": "iterations: 72389\ncpu: 11455.540206384914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11990.552100585488,
            "unit": "ns/iter",
            "extra": "iterations: 69433\ncpu: 11990.518917517551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 36534.34215459638,
            "unit": "ns/iter",
            "extra": "iterations: 22937\ncpu: 36533.374024501965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 477218.36920527293,
            "unit": "ns/iter",
            "extra": "iterations: 1812\ncpu: 477221.24724061746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 393632.5342651208,
            "unit": "ns/iter",
            "extra": "iterations: 2218\ncpu: 393606.8079350779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 382414.56379687577,
            "unit": "ns/iter",
            "extra": "iterations: 2265\ncpu: 382398.94039735314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 384883.39428572997,
            "unit": "ns/iter",
            "extra": "iterations: 2275\ncpu: 384863.4285714288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 227797.45064937815,
            "unit": "ns/iter",
            "extra": "iterations: 3850\ncpu: 227788.75324675412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 381949.6879370635,
            "unit": "ns/iter",
            "extra": "iterations: 2288\ncpu: 381933.3479020974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1914607.9682201871,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1914560.3813559301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 776650.2602626827,
            "unit": "ns/iter",
            "extra": "iterations: 1218\ncpu: 776645.402298846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3278.382390133727,
            "unit": "ns/iter",
            "extra": "iterations: 243568\ncpu: 3278.237699533586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14972.995254544749,
            "unit": "ns/iter",
            "extra": "iterations: 55000\ncpu: 14972.605454545503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11945.627624967743,
            "unit": "ns/iter",
            "extra": "iterations: 68858\ncpu: 11945.503790409275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11266.00130476686,
            "unit": "ns/iter",
            "extra": "iterations: 72810\ncpu: 11266.08158220026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11920.913339143295,
            "unit": "ns/iter",
            "extra": "iterations: 69997\ncpu: 11920.548023486679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 36599.242062797064,
            "unit": "ns/iter",
            "extra": "iterations: 22804\ncpu: 36598.37747763545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 468487.4507799737,
            "unit": "ns/iter",
            "extra": "iterations: 1859\ncpu: 468464.22807961545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 380016.13464056666,
            "unit": "ns/iter",
            "extra": "iterations: 2295\ncpu: 380004.83660130634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 377402.66092203103,
            "unit": "ns/iter",
            "extra": "iterations: 2321\ncpu: 377382.2921154653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 379104.6442807292,
            "unit": "ns/iter",
            "extra": "iterations: 2308\ncpu: 379097.3570190666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 233167.3726808483,
            "unit": "ns/iter",
            "extra": "iterations: 3719\ncpu: 233162.9470287719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 378458.5829015647,
            "unit": "ns/iter",
            "extra": "iterations: 2316\ncpu: 378433.7651122627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 298.60468543787727,
            "unit": "ns/iter",
            "extra": "iterations: 2342876\ncpu: 298.589682083048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1485.2985155419972,
            "unit": "ns/iter",
            "extra": "iterations: 467376\ncpu: 1485.2683920440995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1167.5397721682662,
            "unit": "ns/iter",
            "extra": "iterations: 599653\ncpu: 1167.5218834892848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1118.8094042146283,
            "unit": "ns/iter",
            "extra": "iterations: 626719\ncpu: 1118.7828995131827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 988.2955465988229,
            "unit": "ns/iter",
            "extra": "iterations: 707347\ncpu: 988.2415561245004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6651.322435333865,
            "unit": "ns/iter",
            "extra": "iterations: 105891\ncpu: 6650.981669830305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19222.12052135108,
            "unit": "ns/iter",
            "extra": "iterations: 36367\ncpu: 19221.178540985158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4585.83524158017,
            "unit": "ns/iter",
            "extra": "iterations: 152496\ncpu: 4585.634377295103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4527.458276033329,
            "unit": "ns/iter",
            "extra": "iterations: 154887\ncpu: 4527.198538289246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4532.050323298339,
            "unit": "ns/iter",
            "extra": "iterations: 154501\ncpu: 4532.069048096798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9505.26349413172,
            "unit": "ns/iter",
            "extra": "iterations: 76700\ncpu: 9504.864406779558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8599.919752325779,
            "unit": "ns/iter",
            "extra": "iterations: 81236\ncpu: 8599.623319710492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3121.344441763494,
            "unit": "ns/iter",
            "extra": "iterations: 223794\ncpu: 3121.1444453381405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15815.08619519579,
            "unit": "ns/iter",
            "extra": "iterations: 44202\ncpu: 15814.377177503487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12549.262791370036,
            "unit": "ns/iter",
            "extra": "iterations: 55428\ncpu: 12548.60539799391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12291.140063719904,
            "unit": "ns/iter",
            "extra": "iterations: 57124\ncpu: 12290.96526853864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13132.462455416782,
            "unit": "ns/iter",
            "extra": "iterations: 53270\ncpu: 13132.528627745562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 27927.75381116094,
            "unit": "ns/iter",
            "extra": "iterations: 25058\ncpu: 27927.568042142306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 101874.95838788604,
            "unit": "ns/iter",
            "extra": "iterations: 6873\ncpu: 101872.47199185235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 87375.426094563,
            "unit": "ns/iter",
            "extra": "iterations: 8017\ncpu: 87370.23824373198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 86331.41206960895,
            "unit": "ns/iter",
            "extra": "iterations: 8103\ncpu: 86327.91558681961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 87108.99179410569,
            "unit": "ns/iter",
            "extra": "iterations: 8043\ncpu: 87103.87914957065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55924.434668158945,
            "unit": "ns/iter",
            "extra": "iterations: 12536\ncpu: 55923.48436502899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85772.14987111544,
            "unit": "ns/iter",
            "extra": "iterations: 8147\ncpu: 85768.78605621633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3064.796784908082,
            "unit": "ns/iter",
            "extra": "iterations: 225810\ncpu: 3064.811567246772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15268.024013272505,
            "unit": "ns/iter",
            "extra": "iterations: 45808\ncpu: 15267.926999650781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12169.230017408767,
            "unit": "ns/iter",
            "extra": "iterations: 58013\ncpu: 12169.179321876141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11961.16060751004,
            "unit": "ns/iter",
            "extra": "iterations: 58534\ncpu: 11960.997027368707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12525.026338390933,
            "unit": "ns/iter",
            "extra": "iterations: 55888\ncpu: 12525.07336100767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 26713.016603201202,
            "unit": "ns/iter",
            "extra": "iterations: 26260\ncpu: 26712.87128712831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 99413.44444445083,
            "unit": "ns/iter",
            "extra": "iterations: 7056\ncpu: 99413.9172335613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84482.2793269191,
            "unit": "ns/iter",
            "extra": "iterations: 8320\ncpu: 84481.89903846198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83251.69519161877,
            "unit": "ns/iter",
            "extra": "iterations: 8402\ncpu: 83251.28540823591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84509.16451105772,
            "unit": "ns/iter",
            "extra": "iterations: 8273\ncpu: 84509.57331076967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55963.05834194371,
            "unit": "ns/iter",
            "extra": "iterations: 12581\ncpu: 55962.73746125087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 85156.52855069312,
            "unit": "ns/iter",
            "extra": "iterations: 8266\ncpu: 85156.00048390895 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705960436219,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 775.6976016928045,
            "unit": "ns/iter",
            "extra": "iterations: 900802\ncpu: 775.6804491997132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10970.299576271113,
            "unit": "ns/iter",
            "extra": "iterations: 75520\ncpu: 10970.301906779661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24131.5069987579,
            "unit": "ns/iter",
            "extra": "iterations: 34649\ncpu: 24130.800311697312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37594.5454626932,
            "unit": "ns/iter",
            "extra": "iterations: 22315\ncpu: 37592.97333632086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47231.825703482864,
            "unit": "ns/iter",
            "extra": "iterations: 16667\ncpu: 47229.39341213175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58386.67081776501,
            "unit": "ns/iter",
            "extra": "iterations: 14454\ncpu: 58382.717586827195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58817.7815999984,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58818.290000000045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67828.04652619534,
            "unit": "ns/iter",
            "extra": "iterations: 12767\ncpu: 67825.11161588471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77912.82678077719,
            "unit": "ns/iter",
            "extra": "iterations: 11217\ncpu: 77908.64758848176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 592.2975478988001,
            "unit": "ns/iter",
            "extra": "iterations: 1182129\ncpu: 592.2642114354703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 494.34026920619704,
            "unit": "ns/iter",
            "extra": "iterations: 1418615\ncpu: 494.3031054937395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 480.7832371231707,
            "unit": "ns/iter",
            "extra": "iterations: 1456707\ncpu: 480.7815847661886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 489.31310431698535,
            "unit": "ns/iter",
            "extra": "iterations: 1422577\ncpu: 489.2691924584748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 949.672677842244,
            "unit": "ns/iter",
            "extra": "iterations: 740066\ncpu: 949.671515783727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3297.1478909170855,
            "unit": "ns/iter",
            "extra": "iterations: 243044\ncpu: 3296.9993087671387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15450.944121380693,
            "unit": "ns/iter",
            "extra": "iterations: 52793\ncpu: 15450.887428257509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11979.417291309173,
            "unit": "ns/iter",
            "extra": "iterations: 66438\ncpu: 11979.279930160457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11226.842654745758,
            "unit": "ns/iter",
            "extra": "iterations: 72700\ncpu: 11226.188445667127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11896.645203241787,
            "unit": "ns/iter",
            "extra": "iterations: 69203\ncpu: 11896.069534557737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 36265.040629556825,
            "unit": "ns/iter",
            "extra": "iterations: 22619\ncpu: 36264.08771386899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 468538.44644751825,
            "unit": "ns/iter",
            "extra": "iterations: 1886\ncpu: 468516.43690349895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 378015.05410121585,
            "unit": "ns/iter",
            "extra": "iterations: 2292\ncpu: 377996.9022687614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 374862.943864233,
            "unit": "ns/iter",
            "extra": "iterations: 2298\ncpu: 374840.5134899907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 378846.6686903613,
            "unit": "ns/iter",
            "extra": "iterations: 2306\ncpu: 378829.44492627995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 230682.31062813694,
            "unit": "ns/iter",
            "extra": "iterations: 3773\ncpu: 230672.7007686187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 372683.3795777481,
            "unit": "ns/iter",
            "extra": "iterations: 2321\ncpu: 372672.89961223665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1904947.603695984,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1904869.4045174492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 767375.6618122668,
            "unit": "ns/iter",
            "extra": "iterations: 1236\ncpu: 767381.5533980578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2562910.977653815,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 2562657.821229048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3237.3457995569684,
            "unit": "ns/iter",
            "extra": "iterations: 240677\ncpu: 3237.27526934439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15145.911312068773,
            "unit": "ns/iter",
            "extra": "iterations: 54517\ncpu: 15145.528917585307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12455.292403019326,
            "unit": "ns/iter",
            "extra": "iterations: 68751\ncpu: 12455.235560210025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11564.618271577878,
            "unit": "ns/iter",
            "extra": "iterations: 71302\ncpu: 11564.507306947942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11958.907399716454,
            "unit": "ns/iter",
            "extra": "iterations: 67408\ncpu: 11958.316520294264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 36223.64116026745,
            "unit": "ns/iter",
            "extra": "iterations: 23236\ncpu: 36221.36770528498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 475595.1906593504,
            "unit": "ns/iter",
            "extra": "iterations: 1820\ncpu: 475569.3956043929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 392579.22008067777,
            "unit": "ns/iter",
            "extra": "iterations: 2231\ncpu: 392014.1640519951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 382281.4298245659,
            "unit": "ns/iter",
            "extra": "iterations: 2280\ncpu: 382284.166666667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 383925.98555798724,
            "unit": "ns/iter",
            "extra": "iterations: 2285\ncpu: 383929.45295404777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 227670.41833507706,
            "unit": "ns/iter",
            "extra": "iterations: 3796\ncpu: 227668.28240252883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 380622.7346405375,
            "unit": "ns/iter",
            "extra": "iterations: 2295\ncpu: 380612.7668845327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1911180.789915891,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1911088.2352941167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 752480.4679486754,
            "unit": "ns/iter",
            "extra": "iterations: 1248\ncpu: 752469.791666663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3316.111963732408,
            "unit": "ns/iter",
            "extra": "iterations: 240435\ncpu: 3316.0500759040883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 15082.093709579538,
            "unit": "ns/iter",
            "extra": "iterations: 54893\ncpu: 15081.933944218725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12059.41367735803,
            "unit": "ns/iter",
            "extra": "iterations: 68522\ncpu: 12059.313797028693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11253.67566941106,
            "unit": "ns/iter",
            "extra": "iterations: 73348\ncpu: 11253.671538419558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 12023.924765209436,
            "unit": "ns/iter",
            "extra": "iterations: 68572\ncpu: 12023.789593419986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 36425.75781830776,
            "unit": "ns/iter",
            "extra": "iterations: 22863\ncpu: 36425.29851725497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 469520.0048413091,
            "unit": "ns/iter",
            "extra": "iterations: 1859\ncpu: 469516.0839160828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 380733.96523249976,
            "unit": "ns/iter",
            "extra": "iterations: 2301\ncpu: 380733.50717079587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 375665.1688143996,
            "unit": "ns/iter",
            "extra": "iterations: 2328\ncpu: 375659.4931271469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 379185.30675907264,
            "unit": "ns/iter",
            "extra": "iterations: 2308\ncpu: 379169.9306759107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 231223.3605908582,
            "unit": "ns/iter",
            "extra": "iterations: 3791\ncpu: 231223.2392508567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 371606.1945041138,
            "unit": "ns/iter",
            "extra": "iterations: 2329\ncpu: 371602.8767711462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 297.24638669051274,
            "unit": "ns/iter",
            "extra": "iterations: 2357534\ncpu: 297.24389976984315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1549.6707813485461,
            "unit": "ns/iter",
            "extra": "iterations: 453498\ncpu: 1549.651597140452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1244.5477978674114,
            "unit": "ns/iter",
            "extra": "iterations: 560820\ncpu: 1244.546913448171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1181.3764427409064,
            "unit": "ns/iter",
            "extra": "iterations: 593575\ncpu: 1181.3636019037297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1007.9612039094856,
            "unit": "ns/iter",
            "extra": "iterations: 695534\ncpu: 1007.9563328320372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6866.835862706522,
            "unit": "ns/iter",
            "extra": "iterations: 106021\ncpu: 6866.8226106148295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19159.507257709345,
            "unit": "ns/iter",
            "extra": "iterations: 38373\ncpu: 19159.101451541454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4533.360877744659,
            "unit": "ns/iter",
            "extra": "iterations: 155216\ncpu: 4533.257524997437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4436.194432296347,
            "unit": "ns/iter",
            "extra": "iterations: 157767\ncpu: 4435.992317785041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4466.035958510449,
            "unit": "ns/iter",
            "extra": "iterations: 156764\ncpu: 4465.78742568448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9496.138424269528,
            "unit": "ns/iter",
            "extra": "iterations: 73477\ncpu: 9495.446194047074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8543.680651740191,
            "unit": "ns/iter",
            "extra": "iterations: 81873\ncpu: 8543.302431815113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3121.335154062245,
            "unit": "ns/iter",
            "extra": "iterations: 223903\ncpu: 3121.1596092950854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15662.039238921832,
            "unit": "ns/iter",
            "extra": "iterations: 44726\ncpu: 15661.829808165263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12415.529870175404,
            "unit": "ns/iter",
            "extra": "iterations: 56461\ncpu: 12415.623173517954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12392.641737803868,
            "unit": "ns/iter",
            "extra": "iterations: 56347\ncpu: 12392.618950432134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13201.767760493567,
            "unit": "ns/iter",
            "extra": "iterations: 52842\ncpu: 13201.436357442975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 27633.15064647632,
            "unit": "ns/iter",
            "extra": "iterations: 25291\ncpu: 27633.462496540247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 101456.4957824304,
            "unit": "ns/iter",
            "extra": "iterations: 6876\ncpu: 101454.85747527747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85407.2036945906,
            "unit": "ns/iter",
            "extra": "iterations: 8120\ncpu: 85407.89408866901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85098.1766208522,
            "unit": "ns/iter",
            "extra": "iterations: 8221\ncpu: 85097.91996107537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85844.40452322856,
            "unit": "ns/iter",
            "extra": "iterations: 8180\ncpu: 85843.2762836198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55013.866289131605,
            "unit": "ns/iter",
            "extra": "iterations: 12714\ncpu: 55013.040742488854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85998.60751104094,
            "unit": "ns/iter",
            "extra": "iterations: 8148\ncpu: 85997.44722631453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3067.7406289127935,
            "unit": "ns/iter",
            "extra": "iterations: 225214\ncpu: 3067.7360199632385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15120.901640763617,
            "unit": "ns/iter",
            "extra": "iterations: 46198\ncpu: 15120.71518247549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12115.372557825996,
            "unit": "ns/iter",
            "extra": "iterations: 57889\ncpu: 12115.312062740846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11981.966198389338,
            "unit": "ns/iter",
            "extra": "iterations: 58370\ncpu: 11981.917080692028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12546.64785811401,
            "unit": "ns/iter",
            "extra": "iterations: 55932\ncpu: 12546.44568404478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 26970.981778255482,
            "unit": "ns/iter",
            "extra": "iterations: 25958\ncpu: 26970.309731104127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98922.9803783132,
            "unit": "ns/iter",
            "extra": "iterations: 7084\ncpu: 98920.65217391438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 82495.55218216227,
            "unit": "ns/iter",
            "extra": "iterations: 8432\ncpu: 82494.236242884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82232.0778274191,
            "unit": "ns/iter",
            "extra": "iterations: 8506\ncpu: 82232.74159416926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83334.79823935042,
            "unit": "ns/iter",
            "extra": "iterations: 8406\ncpu: 83334.5586485849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55124.27234714122,
            "unit": "ns/iter",
            "extra": "iterations: 12675\ncpu: 55124.22090729811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83777.66321866405,
            "unit": "ns/iter",
            "extra": "iterations: 8314\ncpu: 83776.50950204345 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}