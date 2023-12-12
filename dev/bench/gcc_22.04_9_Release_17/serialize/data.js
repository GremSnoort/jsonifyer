window.BENCHMARK_DATA = {
  "lastUpdate": 1702381085551,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize gcc-9 22.04 Release c++-17": [
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
        "date": 1702381085264,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 981.9183748344315,
            "unit": "ns/iter",
            "extra": "iterations: 714118\ncpu: 981.9134932882241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 19681.493042175713,
            "unit": "ns/iter",
            "extra": "iterations: 42039\ncpu: 19680.981945336476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 45516.846953787855,
            "unit": "ns/iter",
            "extra": "iterations: 19713\ncpu: 45516.369908182416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 56377.93200000374,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56376.840000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 68418.65275209316,
            "unit": "ns/iter",
            "extra": "iterations: 11355\ncpu: 68417.51651254951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 85758.38297872579,
            "unit": "ns/iter",
            "extra": "iterations: 10199\ncpu: 85755.60349053825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 103976.7993660468,
            "unit": "ns/iter",
            "extra": "iterations: 8518\ncpu: 103975.51068325902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 132864.86765513677,
            "unit": "ns/iter",
            "extra": "iterations: 7284\ncpu: 132862.35584843505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 152275.5171692578,
            "unit": "ns/iter",
            "extra": "iterations: 5737\ncpu: 152270.298065191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 796.7680608755228,
            "unit": "ns/iter",
            "extra": "iterations: 877200\ncpu: 796.76379388965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 650.4109493251739,
            "unit": "ns/iter",
            "extra": "iterations: 1082569\ncpu: 650.3893054391914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 650.1138815143688,
            "unit": "ns/iter",
            "extra": "iterations: 1075776\ncpu: 650.1048545422088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 646.7071824739888,
            "unit": "ns/iter",
            "extra": "iterations: 1079447\ncpu: 646.6915930101231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1241.8712305844722,
            "unit": "ns/iter",
            "extra": "iterations: 548593\ncpu: 1241.8375735745785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5388.436439999964,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5388.4159999999965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 30753.67779931394,
            "unit": "ns/iter",
            "extra": "iterations: 26828\ncpu: 30752.806769047223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 22783.450575030216,
            "unit": "ns/iter",
            "extra": "iterations: 36085\ncpu: 22783.342108909477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 22474.490669231378,
            "unit": "ns/iter",
            "extra": "iterations: 36385\ncpu: 22473.041088360595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 22350.199510802235,
            "unit": "ns/iter",
            "extra": "iterations: 36795\ncpu: 22348.889794809147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 54797.66739999832,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54793.7000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 649236.2320000211,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 649206.4000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 506605.4010000016,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 506575.60000000143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 511799.4120000162,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511789.199999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 509266.3309999921,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509225.6999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 377535.5815147647,
            "unit": "ns/iter",
            "extra": "iterations: 2337\ncpu: 377533.8040222503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 505394.71999996976,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505367.59999999957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2904885.233128901,
            "unit": "ns/iter",
            "extra": "iterations: 326\ncpu: 2904832.2085889517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1247947.4116883483,
            "unit": "ns/iter",
            "extra": "iterations: 770\ncpu: 1247883.8961038957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3694822.7686275016,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3694703.5294117574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5512.903480000091,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5512.471999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 30829.560460580742,
            "unit": "ns/iter",
            "extra": "iterations: 27183\ncpu: 30829.06963911265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 22708.604000872576,
            "unit": "ns/iter",
            "extra": "iterations: 36692\ncpu: 22705.167338929456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 22333.680231622347,
            "unit": "ns/iter",
            "extra": "iterations: 37302\ncpu: 22332.411130770466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 22576.436608279244,
            "unit": "ns/iter",
            "extra": "iterations: 36937\ncpu: 22574.548555648784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 54102.15699999981,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54097.450000000084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 630963.3290000535,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 630954.5000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 520573.5879999906,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520542.1000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 508990.4320000187,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508981.80000000086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 514087.1520000019,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514085.99999999895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 371888.7317279385,
            "unit": "ns/iter",
            "extra": "iterations: 2367\ncpu: 371883.1009716944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 506937.99299995136,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 506936.7999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 3005809.3794210874,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 3005636.012861731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1251658.6613756507,
            "unit": "ns/iter",
            "extra": "iterations: 756\ncpu: 1251634.7883597855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5434.64202999985,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5434.514000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 31037.95880845574,
            "unit": "ns/iter",
            "extra": "iterations: 26923\ncpu: 31037.815250900734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 22871.791490645694,
            "unit": "ns/iter",
            "extra": "iterations: 36454\ncpu: 22870.963405936192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 22548.878938685,
            "unit": "ns/iter",
            "extra": "iterations: 36973\ncpu: 22548.40829794733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 22827.289452054287,
            "unit": "ns/iter",
            "extra": "iterations: 36500\ncpu: 22824.934246575314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 53681.01010000146,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53676.34000000053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 617910.4990000041,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 617878.5999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 506977.8200000315,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 506952.8000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 508676.82799997734,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508652.3000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 507871.7459999779,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507853.3000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 383032.4241245142,
            "unit": "ns/iter",
            "extra": "iterations: 2313\ncpu: 383022.87073065096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 507908.75500001677,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507907.8000000052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 317.1464130098976,
            "unit": "ns/iter",
            "extra": "iterations: 2145629\ncpu: 317.1380047529164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2722.621352582979,
            "unit": "ns/iter",
            "extra": "iterations: 255866\ncpu: 2722.610663394125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1987.2435574959695,
            "unit": "ns/iter",
            "extra": "iterations: 376096\ncpu: 1987.18545265038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1931.6073031810706,
            "unit": "ns/iter",
            "extra": "iterations: 361322\ncpu: 1931.572392492012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1477.0115883615279,
            "unit": "ns/iter",
            "extra": "iterations: 474873\ncpu: 1476.9883737336113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 11903.313173917628,
            "unit": "ns/iter",
            "extra": "iterations: 58798\ncpu: 11902.949079900669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 32542.908370987607,
            "unit": "ns/iter",
            "extra": "iterations: 21467\ncpu: 32542.781944379785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7625.842353043614,
            "unit": "ns/iter",
            "extra": "iterations: 91762\ncpu: 7625.629345480678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7558.978236944629,
            "unit": "ns/iter",
            "extra": "iterations: 92680\ncpu: 7558.9469141131285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7565.3362532307365,
            "unit": "ns/iter",
            "extra": "iterations: 92469\ncpu: 7565.219695249258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 16473.510026783017,
            "unit": "ns/iter",
            "extra": "iterations: 44431\ncpu: 16473.268663770883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 15331.470723157026,
            "unit": "ns/iter",
            "extra": "iterations: 46214\ncpu: 15331.421214350687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 4148.147972844687,
            "unit": "ns/iter",
            "extra": "iterations: 168808\ncpu: 4148.132789915163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 22286.997733438766,
            "unit": "ns/iter",
            "extra": "iterations: 31325\ncpu: 22286.633679169965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 17197.531782526432,
            "unit": "ns/iter",
            "extra": "iterations: 40667\ncpu: 17197.034450537172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 16875.96905800421,
            "unit": "ns/iter",
            "extra": "iterations: 41497\ncpu: 16875.911511675593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 17642.17555993887,
            "unit": "ns/iter",
            "extra": "iterations: 40049\ncpu: 17641.61152588085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 37302.71911725735,
            "unit": "ns/iter",
            "extra": "iterations: 18805\ncpu: 37302.552512629794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 153217.74923479618,
            "unit": "ns/iter",
            "extra": "iterations: 4574\ncpu: 153211.32487975573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 130720.60805998066,
            "unit": "ns/iter",
            "extra": "iterations: 5335\ncpu: 130720.29990627985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 130320.94974874538,
            "unit": "ns/iter",
            "extra": "iterations: 5373\ncpu: 130318.2207332948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 132349.7679547629,
            "unit": "ns/iter",
            "extra": "iterations: 5305\ncpu: 132349.38737040717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 78234.03585032366,
            "unit": "ns/iter",
            "extra": "iterations: 8926\ncpu: 78232.75823437123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 131102.66093136882,
            "unit": "ns/iter",
            "extra": "iterations: 5347\ncpu: 131099.04619412625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 4143.044336196951,
            "unit": "ns/iter",
            "extra": "iterations: 169365\ncpu: 4142.981135417625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 21280.59423900664,
            "unit": "ns/iter",
            "extra": "iterations: 32911\ncpu: 21280.23457202765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 16799.758817738173,
            "unit": "ns/iter",
            "extra": "iterations: 41649\ncpu: 16799.490984177188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 16637.8257640468,
            "unit": "ns/iter",
            "extra": "iterations: 42144\ncpu: 16637.18916097181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 17669.110664287324,
            "unit": "ns/iter",
            "extra": "iterations: 39787\ncpu: 17669.027571820025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 36806.50809875627,
            "unit": "ns/iter",
            "extra": "iterations: 19077\ncpu: 36805.739896210136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 151234.00582524235,
            "unit": "ns/iter",
            "extra": "iterations: 4635\ncpu: 151233.33333333483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 132142.45988701002,
            "unit": "ns/iter",
            "extra": "iterations: 5310\ncpu: 132137.15630884896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 130599.43445832725,
            "unit": "ns/iter",
            "extra": "iterations: 5363\ncpu: 130598.91851575553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 131692.3019921893,
            "unit": "ns/iter",
            "extra": "iterations: 5371\ncpu: 131689.05231800495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 76575.71631360974,
            "unit": "ns/iter",
            "extra": "iterations: 9158\ncpu: 76574.60144136232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 126962.05916834618,
            "unit": "ns/iter",
            "extra": "iterations: 5459\ncpu: 126960.92690969014 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}