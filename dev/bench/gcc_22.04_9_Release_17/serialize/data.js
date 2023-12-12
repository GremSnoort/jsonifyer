window.BENCHMARK_DATA = {
  "lastUpdate": 1702387017525,
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
        "date": 1702382262988,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 964.5718947599555,
            "unit": "ns/iter",
            "extra": "iterations: 722577\ncpu: 964.5282094503423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 19575.610789936,
            "unit": "ns/iter",
            "extra": "iterations: 42725\ncpu: 19575.178466939728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 45138.9678095533,
            "unit": "ns/iter",
            "extra": "iterations: 20037\ncpu: 45136.577331935914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 56136.096599999524,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56135.430000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 67949.47703576012,
            "unit": "ns/iter",
            "extra": "iterations: 11605\ncpu: 67946.30762602325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 84585.99291880989,
            "unit": "ns/iter",
            "extra": "iterations: 10309\ncpu: 84582.77233485309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 100665.32403857469,
            "unit": "ns/iter",
            "extra": "iterations: 8607\ncpu: 100660.75287556648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 128529.50461414881,
            "unit": "ns/iter",
            "extra": "iterations: 7477\ncpu: 128526.72194730499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 148935.22906276627,
            "unit": "ns/iter",
            "extra": "iterations: 5815\ncpu: 148929.90541702494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 791.7226506215286,
            "unit": "ns/iter",
            "extra": "iterations: 884170\ncpu: 791.7115486840758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 644.5385685654051,
            "unit": "ns/iter",
            "extra": "iterations: 1086714\ncpu: 644.5183369313357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 637.1188668379795,
            "unit": "ns/iter",
            "extra": "iterations: 1014118\ncpu: 637.0934151647042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 624.84050167157,
            "unit": "ns/iter",
            "extra": "iterations: 1100162\ncpu: 624.8036198305338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1195.1660012959737,
            "unit": "ns/iter",
            "extra": "iterations: 584887\ncpu: 1195.1311962823581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5415.961139999582,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5415.758999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 30740.949974041156,
            "unit": "ns/iter",
            "extra": "iterations: 26966\ncpu: 30739.560928576713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 22655.749238327342,
            "unit": "ns/iter",
            "extra": "iterations: 36433\ncpu: 22654.587873631048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 20896.507253335414,
            "unit": "ns/iter",
            "extra": "iterations: 39568\ncpu: 20895.94116457739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 21701.076975280394,
            "unit": "ns/iter",
            "extra": "iterations: 38311\ncpu: 21700.263631855087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 54344.376900002084,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54340.24999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 645432.2339999976,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 645420.3999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 509917.72300000093,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509875.00000000093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 513000.00499998074,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512971.10000000143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 506884.73200000316,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 506884.59999999934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 370383.51162792055,
            "unit": "ns/iter",
            "extra": "iterations: 2365\ncpu: 370371.3742071889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 504402.23100002867,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504373.69999999856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 3008415.9786585406,
            "unit": "ns/iter",
            "extra": "iterations: 328\ncpu: 3008291.4634146364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1250068.7137254598,
            "unit": "ns/iter",
            "extra": "iterations: 765\ncpu: 1250041.307189543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3768516.0000001965,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3768131.90661479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5571.94250000009,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5571.6390000000265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 30796.914376125256,
            "unit": "ns/iter",
            "extra": "iterations: 27177\ncpu: 30795.10983552275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 22765.481295533675,
            "unit": "ns/iter",
            "extra": "iterations: 36649\ncpu: 22764.861251330152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 22583.24997299326,
            "unit": "ns/iter",
            "extra": "iterations: 37028\ncpu: 22582.38900291671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 22704.62748938932,
            "unit": "ns/iter",
            "extra": "iterations: 36756\ncpu: 22699.62727173794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 53515.27380000221,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53514.05999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 626882.3309999902,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 626873.500000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 518667.30599999754,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518657.4999999962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 519976.35300000414,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 519954.69999999955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 515939.2749999938,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515925.89999999915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 370219.5477894747,
            "unit": "ns/iter",
            "extra": "iterations: 2375\ncpu: 370202.8210526309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 507203.4490000306,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507196.29999999685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2976622.880126232,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2976558.9905362744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1266670.1443849779,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 1266610.4278074838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5475.774870000123,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5475.583999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 30812.483197328715,
            "unit": "ns/iter",
            "extra": "iterations: 26960\ncpu: 30811.565281899322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 22766.959554079036,
            "unit": "ns/iter",
            "extra": "iterations: 36419\ncpu: 22766.915620967076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 22455.2314862208,
            "unit": "ns/iter",
            "extra": "iterations: 37121\ncpu: 22454.459739769893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 22778.82486893844,
            "unit": "ns/iter",
            "extra": "iterations: 36624\ncpu: 22778.32022717363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 53379.61190000442,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53377.42000000034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 615912.5909999829,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 615874.599999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 503746.35500003246,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503709.00000000064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 509876.797000004,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509869.5999999947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 507158.7959999988,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507128.0000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 376655.6454622446,
            "unit": "ns/iter",
            "extra": "iterations: 2358\ncpu: 376641.2213740461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 508833.8369999974,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508813.7000000046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 320.08995658054266,
            "unit": "ns/iter",
            "extra": "iterations: 2188189\ncpu: 320.0776532557304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2714.5180766082713,
            "unit": "ns/iter",
            "extra": "iterations: 256630\ncpu: 2714.4371273818165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1958.6249342823985,
            "unit": "ns/iter",
            "extra": "iterations: 353786\ncpu: 1958.5772189968052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1821.3376860290066,
            "unit": "ns/iter",
            "extra": "iterations: 384819\ncpu: 1821.2635031014497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1473.426816248272,
            "unit": "ns/iter",
            "extra": "iterations: 475816\ncpu: 1473.4214486271935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 11850.98621063431,
            "unit": "ns/iter",
            "extra": "iterations: 59031\ncpu: 11850.808897020226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 32252.90459331486,
            "unit": "ns/iter",
            "extra": "iterations: 21749\ncpu: 32252.26447192993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7616.906252026638,
            "unit": "ns/iter",
            "extra": "iterations: 92514\ncpu: 7616.694770521265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7593.03854505969,
            "unit": "ns/iter",
            "extra": "iterations: 92100\ncpu: 7592.776330076037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7648.321585999551,
            "unit": "ns/iter",
            "extra": "iterations: 91198\ncpu: 7648.244479045616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 16305.416181484807,
            "unit": "ns/iter",
            "extra": "iterations: 43111\ncpu: 16304.72733177139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 15045.338310487938,
            "unit": "ns/iter",
            "extra": "iterations: 46546\ncpu: 15045.312164310471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 4101.527962151838,
            "unit": "ns/iter",
            "extra": "iterations: 170999\ncpu: 4101.355563482829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 22105.675283633427,
            "unit": "ns/iter",
            "extra": "iterations: 31643\ncpu: 22105.09117340329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 16972.303380511734,
            "unit": "ns/iter",
            "extra": "iterations: 39284\ncpu: 16971.861317584768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 16758.917364493504,
            "unit": "ns/iter",
            "extra": "iterations: 41677\ncpu: 16758.871799793615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 17401.132790193395,
            "unit": "ns/iter",
            "extra": "iterations: 40628\ncpu: 17400.615339174867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 36706.09772415848,
            "unit": "ns/iter",
            "extra": "iterations: 18982\ncpu: 36705.11537245812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 151409.58640776758,
            "unit": "ns/iter",
            "extra": "iterations: 4635\ncpu: 151407.72384034577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 131235.39169640487,
            "unit": "ns/iter",
            "extra": "iterations: 5323\ncpu: 131231.31692654418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 130348.07323890936,
            "unit": "ns/iter",
            "extra": "iterations: 5366\ncpu: 130346.08647037113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 130445.96181205587,
            "unit": "ns/iter",
            "extra": "iterations: 5342\ncpu: 130440.45301385205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 78619.28496071507,
            "unit": "ns/iter",
            "extra": "iterations: 8910\ncpu: 78617.47474747445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 130446.58406255524,
            "unit": "ns/iter",
            "extra": "iterations: 5371\ncpu: 130444.81474585687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 4109.198474902948,
            "unit": "ns/iter",
            "extra": "iterations: 169563\ncpu: 4109.190094537072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 21272.224632185935,
            "unit": "ns/iter",
            "extra": "iterations: 32965\ncpu: 21271.47884119489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 16659.498976824667,
            "unit": "ns/iter",
            "extra": "iterations: 42026\ncpu: 16659.17289297087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 16580.94150483636,
            "unit": "ns/iter",
            "extra": "iterations: 42277\ncpu: 16580.72710930289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 17680.874999999614,
            "unit": "ns/iter",
            "extra": "iterations: 39712\ncpu: 17680.434125705073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 36184.93298224019,
            "unit": "ns/iter",
            "extra": "iterations: 19368\ncpu: 36183.57600165254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 148716.91695059117,
            "unit": "ns/iter",
            "extra": "iterations: 4696\ncpu: 148710.45570698514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 129875.54092000182,
            "unit": "ns/iter",
            "extra": "iterations: 5413\ncpu: 129875.28172917041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 129942.64510096562,
            "unit": "ns/iter",
            "extra": "iterations: 5348\ncpu: 129937.82722513078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 130671.98152640462,
            "unit": "ns/iter",
            "extra": "iterations: 5359\ncpu: 130671.72980033606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 76516.6447973729,
            "unit": "ns/iter",
            "extra": "iterations: 9130\ncpu: 76514.698795182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 131723.72994309163,
            "unit": "ns/iter",
            "extra": "iterations: 5447\ncpu: 131720.26803745018 ns\nthreads: 1"
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
          "id": "7d92f1613fa4ae9edff977fb9a4ee38db56bedcc",
          "message": "Enable another Clangs : try",
          "timestamp": "2023-12-12T16:01:28+03:00",
          "tree_id": "088c43bf274cde79393a5114d044a347c612360f",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/7d92f1613fa4ae9edff977fb9a4ee38db56bedcc"
        },
        "date": 1702387017177,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 937.7614102025982,
            "unit": "ns/iter",
            "extra": "iterations: 743808\ncpu: 937.7255958526931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 19119.82285323291,
            "unit": "ns/iter",
            "extra": "iterations: 43845\ncpu: 19119.22454099669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 43983.64216501968,
            "unit": "ns/iter",
            "extra": "iterations: 20434\ncpu: 43982.37741019869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 54621.45579999743,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54619.42999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 66600.89965658514,
            "unit": "ns/iter",
            "extra": "iterations: 11939\ncpu: 66599.14565709021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 82982.15945611928,
            "unit": "ns/iter",
            "extra": "iterations: 10517\ncpu: 82979.30018065988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 99569.53835425837,
            "unit": "ns/iter",
            "extra": "iterations: 8604\ncpu: 99567.78242677831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 116566.47028251727,
            "unit": "ns/iter",
            "extra": "iterations: 7504\ncpu: 116565.25852878475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 146974.82025894194,
            "unit": "ns/iter",
            "extra": "iterations: 6565\ncpu: 146970.7387661843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 793.5044350527302,
            "unit": "ns/iter",
            "extra": "iterations: 883755\ncpu: 793.4971796482071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 701.5262384849431,
            "unit": "ns/iter",
            "extra": "iterations: 1004231\ncpu: 701.4918878226223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 698.5631891772885,
            "unit": "ns/iter",
            "extra": "iterations: 999380\ncpu: 698.5448978366583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 695.5492825130868,
            "unit": "ns/iter",
            "extra": "iterations: 1003642\ncpu: 695.5313747332208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1218.1812243280513,
            "unit": "ns/iter",
            "extra": "iterations: 575287\ncpu: 1218.1846626118813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5380.688060000125,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5380.61899999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 28944.971011440615,
            "unit": "ns/iter",
            "extra": "iterations: 28494\ncpu: 28943.50038604618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 21250.58693031668,
            "unit": "ns/iter",
            "extra": "iterations: 38991\ncpu: 21250.10643481828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 22649.560205701862,
            "unit": "ns/iter",
            "extra": "iterations: 36558\ncpu: 22648.875759067778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 21943.282992368077,
            "unit": "ns/iter",
            "extra": "iterations: 37736\ncpu: 21942.15868136522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 53913.1387999987,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53910.180000000095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 639247.6770000145,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 639208.4999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 508744.99000002514,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508738.69999999856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 515262.550999978,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515251.19999999803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 514501.52000001026,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514486.9000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 374012.25320240937,
            "unit": "ns/iter",
            "extra": "iterations: 2342\ncpu: 374000.8539709654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 502863.98999998026,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 502825.09999999905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2881870.4242424206,
            "unit": "ns/iter",
            "extra": "iterations: 330\ncpu: 2881789.090909086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1201937.8656716458,
            "unit": "ns/iter",
            "extra": "iterations: 804\ncpu: 1201901.3681592061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3807124.419354763,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3806983.46774193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5503.088130000151,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5502.760000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 30945.42974807915,
            "unit": "ns/iter",
            "extra": "iterations: 26953\ncpu: 30944.69261306718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 22737.890028240454,
            "unit": "ns/iter",
            "extra": "iterations: 36473\ncpu: 22737.49074657964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 22452.167859660432,
            "unit": "ns/iter",
            "extra": "iterations: 36882\ncpu: 22451.713573016616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 22677.138880516155,
            "unit": "ns/iter",
            "extra": "iterations: 36499\ncpu: 22676.571960875695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 53781.3081999957,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53781.5700000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 632084.195999994,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 632071.1999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 523472.28399997903,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 523460.59999999637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 520242.622000012,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520244.6999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 521701.39300000074,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 521682.09999999957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 371199.8843566011,
            "unit": "ns/iter",
            "extra": "iterations: 2378\ncpu: 371186.16484440473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 509711.5770000187,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509706.2999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 3011844.45686885,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 3011726.5175718763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1238023.2522756332,
            "unit": "ns/iter",
            "extra": "iterations: 769\ncpu: 1237997.2691807586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5434.8461600000055,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5434.697000000028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 30714.633515939313,
            "unit": "ns/iter",
            "extra": "iterations: 27199\ncpu: 30714.695393212933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 22837.319953160775,
            "unit": "ns/iter",
            "extra": "iterations: 36721\ncpu: 22836.839955338928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 22445.37846318929,
            "unit": "ns/iter",
            "extra": "iterations: 37285\ncpu: 22444.956416789508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 22747.893953437397,
            "unit": "ns/iter",
            "extra": "iterations: 36682\ncpu: 22747.284771822782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 53319.44579999686,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53319.60999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 623662.3309999913,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 623655.9000000028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 513179.4540000101,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 513173.39999999944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 514899.5819999982,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514895.199999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 513696.78799994744,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 513681.6999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 380155.81978494884,
            "unit": "ns/iter",
            "extra": "iterations: 2325\ncpu: 380137.33333333285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 512308.470999983,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512310.2000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 355.33825474323544,
            "unit": "ns/iter",
            "extra": "iterations: 1974231\ncpu: 355.3308604717481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2755.979078341844,
            "unit": "ns/iter",
            "extra": "iterations: 253326\ncpu: 2755.9559618831204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 2022.2295492270127,
            "unit": "ns/iter",
            "extra": "iterations: 346405\ncpu: 2022.2086863642269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 2024.7343936071384,
            "unit": "ns/iter",
            "extra": "iterations: 345131\ncpu: 2024.722496675191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1539.884729567064,
            "unit": "ns/iter",
            "extra": "iterations: 454401\ncpu: 1539.8386007073032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 11884.993287566933,
            "unit": "ns/iter",
            "extra": "iterations: 58995\ncpu: 11884.6732773963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 32121.571155014084,
            "unit": "ns/iter",
            "extra": "iterations: 21411\ncpu: 32120.223249731403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7668.744309526726,
            "unit": "ns/iter",
            "extra": "iterations: 91908\ncpu: 7668.377072724858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7661.241677063408,
            "unit": "ns/iter",
            "extra": "iterations: 91374\ncpu: 7661.17823450871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7657.311083412769,
            "unit": "ns/iter",
            "extra": "iterations: 91461\ncpu: 7657.0920938979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 16235.911560358565,
            "unit": "ns/iter",
            "extra": "iterations: 43035\ncpu: 16235.722086673539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 13790.970437998223,
            "unit": "ns/iter",
            "extra": "iterations: 52466\ncpu: 13790.504326611495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 4406.516366081594,
            "unit": "ns/iter",
            "extra": "iterations: 165067\ncpu: 4406.485245385179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 22423.30834054407,
            "unit": "ns/iter",
            "extra": "iterations: 31209\ncpu: 22423.1183312505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 17433.924962630306,
            "unit": "ns/iter",
            "extra": "iterations: 40140\ncpu: 17433.712007972044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 17353.06137022908,
            "unit": "ns/iter",
            "extra": "iterations: 40329\ncpu: 17352.389099655313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 18203.891124106598,
            "unit": "ns/iter",
            "extra": "iterations: 38475\ncpu: 18203.139701104617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 37312.765690153436,
            "unit": "ns/iter",
            "extra": "iterations: 18706\ncpu: 37311.77696995638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 156204.14317623695,
            "unit": "ns/iter",
            "extra": "iterations: 4477\ncpu: 156200.08934554382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 133112.19827751498,
            "unit": "ns/iter",
            "extra": "iterations: 5225\ncpu: 133107.3301435407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 133603.36731950173,
            "unit": "ns/iter",
            "extra": "iterations: 5208\ncpu: 133595.58371735865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 133986.4964633918,
            "unit": "ns/iter",
            "extra": "iterations: 5231\ncpu: 133986.981456701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 81712.10226476607,
            "unit": "ns/iter",
            "extra": "iterations: 8566\ncpu: 81711.35886061164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 133739.62957288537,
            "unit": "ns/iter",
            "extra": "iterations: 5221\ncpu: 133737.65562152825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 4215.6450821550225,
            "unit": "ns/iter",
            "extra": "iterations: 165906\ncpu: 4215.603413981349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 21800.497196087028,
            "unit": "ns/iter",
            "extra": "iterations: 32098\ncpu: 21800.11527197955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 17084.85278179593,
            "unit": "ns/iter",
            "extra": "iterations: 40783\ncpu: 17084.373390873738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 17187.17798583366,
            "unit": "ns/iter",
            "extra": "iterations: 40801\ncpu: 17186.767481189247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 17857.599286986973,
            "unit": "ns/iter",
            "extra": "iterations: 39270\ncpu: 17857.000254647497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 36735.71320102671,
            "unit": "ns/iter",
            "extra": "iterations: 19097\ncpu: 36733.764465622924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 152338.5925603604,
            "unit": "ns/iter",
            "extra": "iterations: 4597\ncpu: 152336.89362627614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 133249.32495201848,
            "unit": "ns/iter",
            "extra": "iterations: 5210\ncpu: 133245.37428023186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 131917.72404009625,
            "unit": "ns/iter",
            "extra": "iterations: 5287\ncpu: 131916.41762814517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 135295.52421051846,
            "unit": "ns/iter",
            "extra": "iterations: 5225\ncpu: 135292.24880382765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 80498.42578935545,
            "unit": "ns/iter",
            "extra": "iterations: 8678\ncpu: 80496.3816547589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 131370.6372346394,
            "unit": "ns/iter",
            "extra": "iterations: 5323\ncpu: 131367.40559834766 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}