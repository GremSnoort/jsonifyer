window.BENCHMARK_DATA = {
  "lastUpdate": 1702490368183,
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
      }
    ]
  }
}