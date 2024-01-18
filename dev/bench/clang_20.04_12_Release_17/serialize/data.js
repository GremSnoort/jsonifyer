window.BENCHMARK_DATA = {
  "lastUpdate": 1705575674081,
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
      }
    ]
  }
}