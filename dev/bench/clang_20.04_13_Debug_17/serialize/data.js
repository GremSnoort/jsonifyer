window.BENCHMARK_DATA = {
  "lastUpdate": 1702489617889,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-13 20.04 Debug c++-17": [
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
        "date": 1702489608758,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7437.870864992025,
            "unit": "ns/iter",
            "extra": "iterations: 94498\ncpu: 7437.809265804567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 74619.19868593439,
            "unit": "ns/iter",
            "extra": "iterations: 11415\ncpu: 74617.01270258431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 145147.23688940358,
            "unit": "ns/iter",
            "extra": "iterations: 6121\ncpu: 145144.66590426402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 209675.60211946085,
            "unit": "ns/iter",
            "extra": "iterations: 4152\ncpu: 209665.31791907508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 275165.6109528473,
            "unit": "ns/iter",
            "extra": "iterations: 3159\ncpu: 275152.0101297878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 340830.132237879,
            "unit": "ns/iter",
            "extra": "iterations: 2556\ncpu: 340815.21909233177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 407388.49507734325,
            "unit": "ns/iter",
            "extra": "iterations: 2133\ncpu: 407375.10548523173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 473650.8213507607,
            "unit": "ns/iter",
            "extra": "iterations: 1836\ncpu: 473633.6601307185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 540782.9725343677,
            "unit": "ns/iter",
            "extra": "iterations: 1602\ncpu: 540749.8751560543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5701.974623953127,
            "unit": "ns/iter",
            "extra": "iterations: 122990\ncpu: 5701.717212781521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4838.639023952228,
            "unit": "ns/iter",
            "extra": "iterations: 144788\ncpu: 4838.461060308867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4830.38053293114,
            "unit": "ns/iter",
            "extra": "iterations: 144634\ncpu: 4830.133301989855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4876.6748804807685,
            "unit": "ns/iter",
            "extra": "iterations: 143701\ncpu: 4876.4476238857105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8640.754395317324,
            "unit": "ns/iter",
            "extra": "iterations: 80654\ncpu: 8640.341458576131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 29502.1317412809,
            "unit": "ns/iter",
            "extra": "iterations: 27721\ncpu: 29500.99924245161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 118466.10108152339,
            "unit": "ns/iter",
            "extra": "iterations: 7212\ncpu: 118460.06655574063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 97749.63505320731,
            "unit": "ns/iter",
            "extra": "iterations: 8741\ncpu: 97745.65839148856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 99324.15997205638,
            "unit": "ns/iter",
            "extra": "iterations: 8589\ncpu: 99318.60519268818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 98104.19926113714,
            "unit": "ns/iter",
            "extra": "iterations: 8662\ncpu: 98100.49642114967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 255985.34705527898,
            "unit": "ns/iter",
            "extra": "iterations: 3328\ncpu: 255973.37740384552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2113664.9773244243,
            "unit": "ns/iter",
            "extra": "iterations: 441\ncpu: 2113531.0657596425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1754753.1631878044,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1754654.6489563517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1774352.6274130899,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1774257.9150579146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1767784.1321839837,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1767718.7739463637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1026229.7085650834,
            "unit": "ns/iter",
            "extra": "iterations: 899\ncpu: 1026180.8676306978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1700734.5661764694,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1700645.7720588227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6986584.890000813,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6986519.999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3891004.383333533,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3890890.416666674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8869823.834710443,
            "unit": "ns/iter",
            "extra": "iterations: 121\ncpu: 8869594.214876026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 30467.270225366217,
            "unit": "ns/iter",
            "extra": "iterations: 27688\ncpu: 30466.476451892544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 120570.45208949267,
            "unit": "ns/iter",
            "extra": "iterations: 7107\ncpu: 120568.70690868108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 101482.34968522287,
            "unit": "ns/iter",
            "extra": "iterations: 8419\ncpu: 101480.22330443066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 98645.84917426365,
            "unit": "ns/iter",
            "extra": "iterations: 8659\ncpu: 98643.61935558377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 100057.81339316755,
            "unit": "ns/iter",
            "extra": "iterations: 8467\ncpu: 100055.76945789486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 260123.68916465397,
            "unit": "ns/iter",
            "extra": "iterations: 3304\ncpu: 260118.67433414026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2155164.3764432934,
            "unit": "ns/iter",
            "extra": "iterations: 433\ncpu: 2155120.3233256484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1779845.2385495729,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1779800.7633587755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1820093.9746588187,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1820043.8596491155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1800648.3666028024,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1800639.1554702506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1045037.6614172179,
            "unit": "ns/iter",
            "extra": "iterations: 889\ncpu: 1045015.6355455598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1725715.7425926076,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1725694.629629628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7081960.169999775,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7081639.999999965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4030668.689654837,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4030579.310344845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 28017.645208363254,
            "unit": "ns/iter",
            "extra": "iterations: 29468\ncpu: 28017.14402063239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 119354.08691407126,
            "unit": "ns/iter",
            "extra": "iterations: 7168\ncpu: 119351.84151785706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 98489.42323650724,
            "unit": "ns/iter",
            "extra": "iterations: 8676\ncpu: 98487.30982019329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 99552.40562855046,
            "unit": "ns/iter",
            "extra": "iterations: 8599\ncpu: 99551.29666240314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 99132.25250757205,
            "unit": "ns/iter",
            "extra": "iterations: 8574\ncpu: 99128.2831817116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 258010.81678700304,
            "unit": "ns/iter",
            "extra": "iterations: 3324\ncpu: 258005.62575210442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2125714.1522728386,
            "unit": "ns/iter",
            "extra": "iterations: 440\ncpu: 2125668.409090909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1767781.452651484,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1767759.46969697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1795062.0745698977,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1795049.1395793452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1788454.9846450328,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1788384.8368522164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1033820.8080807863,
            "unit": "ns/iter",
            "extra": "iterations: 891\ncpu: 1033800.4489337824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1717031.9484346316,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1716996.5009208047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2924.1030585607236,
            "unit": "ns/iter",
            "extra": "iterations: 238282\ncpu: 2924.0517538043277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14868.757283614557,
            "unit": "ns/iter",
            "extra": "iterations: 47092\ncpu: 14868.538180582775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12034.043978967315,
            "unit": "ns/iter",
            "extra": "iterations: 58005\ncpu: 12033.843634169474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11880.256820686056,
            "unit": "ns/iter",
            "extra": "iterations: 58975\ncpu: 11880.072912250966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9964.822023596618,
            "unit": "ns/iter",
            "extra": "iterations: 69925\ncpu: 9964.580622095054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 60619.91073437296,
            "unit": "ns/iter",
            "extra": "iterations: 11561\ncpu: 60618.34616382694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 141979.32823023436,
            "unit": "ns/iter",
            "extra": "iterations: 4899\ncpu: 141975.70932843367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36094.61848843807,
            "unit": "ns/iter",
            "extra": "iterations: 19331\ncpu: 36094.05617919438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 36687.55661315032,
            "unit": "ns/iter",
            "extra": "iterations: 19121\ncpu: 36686.663877411855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36083.12178130948,
            "unit": "ns/iter",
            "extra": "iterations: 19379\ncpu: 36082.568759998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 73745.40536559762,
            "unit": "ns/iter",
            "extra": "iterations: 9505\ncpu: 73743.5455023671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 65400.107272899426,
            "unit": "ns/iter",
            "extra": "iterations: 10711\ncpu: 65399.57053496418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19946.340855342838,
            "unit": "ns/iter",
            "extra": "iterations: 35097\ncpu: 19946.22617317721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 97069.42676385939,
            "unit": "ns/iter",
            "extra": "iterations: 7271\ncpu: 97065.506807867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 77463.67780113227,
            "unit": "ns/iter",
            "extra": "iterations: 9041\ncpu: 77458.55546952803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 79010.87103689213,
            "unit": "ns/iter",
            "extra": "iterations: 8863\ncpu: 79009.80480649848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 78766.70759379512,
            "unit": "ns/iter",
            "extra": "iterations: 8902\ncpu: 78761.99730397598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 150970.6858808253,
            "unit": "ns/iter",
            "extra": "iterations: 4632\ncpu: 150969.68911916993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 607705.1974026405,
            "unit": "ns/iter",
            "extra": "iterations: 1155\ncpu: 607695.4978355042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 518540.57395139954,
            "unit": "ns/iter",
            "extra": "iterations: 1359\ncpu: 518531.4937453986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 526069.4099099175,
            "unit": "ns/iter",
            "extra": "iterations: 1332\ncpu: 526055.4804804825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 522235.58999255043,
            "unit": "ns/iter",
            "extra": "iterations: 1339\ncpu: 522192.83047049673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 343053.4848927836,
            "unit": "ns/iter",
            "extra": "iterations: 2052\ncpu: 343039.961013646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 506126.3530685607,
            "unit": "ns/iter",
            "extra": "iterations: 1385\ncpu: 506097.3285198571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19846.23464620626,
            "unit": "ns/iter",
            "extra": "iterations: 35317\ncpu: 19845.23883682066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 97644.14229856369,
            "unit": "ns/iter",
            "extra": "iterations: 7161\ncpu: 97642.5638877261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 78724.91711651374,
            "unit": "ns/iter",
            "extra": "iterations: 8892\ncpu: 78722.35717498802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 78066.57927101535,
            "unit": "ns/iter",
            "extra": "iterations: 8944\ncpu: 78064.69141323905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 79670.3607789529,
            "unit": "ns/iter",
            "extra": "iterations: 8781\ncpu: 79668.4318414757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 150699.69048644448,
            "unit": "ns/iter",
            "extra": "iterations: 4646\ncpu: 150698.36418424486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 609286.7571802381,
            "unit": "ns/iter",
            "extra": "iterations: 1149\ncpu: 609267.1018276773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 519882.09393486625,
            "unit": "ns/iter",
            "extra": "iterations: 1352\ncpu: 519873.15088757995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 532089.2562737232,
            "unit": "ns/iter",
            "extra": "iterations: 1315\ncpu: 532079.4676806111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 521456.09213482443,
            "unit": "ns/iter",
            "extra": "iterations: 1335\ncpu: 521432.4344569257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 339444.11342705763,
            "unit": "ns/iter",
            "extra": "iterations: 2063\ncpu: 339411.87590886833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 510186.8454809824,
            "unit": "ns/iter",
            "extra": "iterations: 1372\ncpu: 510161.0058309048 ns\nthreads: 1"
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
        "date": 1702489608758,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7437.870864992025,
            "unit": "ns/iter",
            "extra": "iterations: 94498\ncpu: 7437.809265804567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 74619.19868593439,
            "unit": "ns/iter",
            "extra": "iterations: 11415\ncpu: 74617.01270258431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 145147.23688940358,
            "unit": "ns/iter",
            "extra": "iterations: 6121\ncpu: 145144.66590426402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 209675.60211946085,
            "unit": "ns/iter",
            "extra": "iterations: 4152\ncpu: 209665.31791907508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 275165.6109528473,
            "unit": "ns/iter",
            "extra": "iterations: 3159\ncpu: 275152.0101297878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 340830.132237879,
            "unit": "ns/iter",
            "extra": "iterations: 2556\ncpu: 340815.21909233177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 407388.49507734325,
            "unit": "ns/iter",
            "extra": "iterations: 2133\ncpu: 407375.10548523173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 473650.8213507607,
            "unit": "ns/iter",
            "extra": "iterations: 1836\ncpu: 473633.6601307185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 540782.9725343677,
            "unit": "ns/iter",
            "extra": "iterations: 1602\ncpu: 540749.8751560543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5701.974623953127,
            "unit": "ns/iter",
            "extra": "iterations: 122990\ncpu: 5701.717212781521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4838.639023952228,
            "unit": "ns/iter",
            "extra": "iterations: 144788\ncpu: 4838.461060308867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4830.38053293114,
            "unit": "ns/iter",
            "extra": "iterations: 144634\ncpu: 4830.133301989855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4876.6748804807685,
            "unit": "ns/iter",
            "extra": "iterations: 143701\ncpu: 4876.4476238857105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8640.754395317324,
            "unit": "ns/iter",
            "extra": "iterations: 80654\ncpu: 8640.341458576131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 29502.1317412809,
            "unit": "ns/iter",
            "extra": "iterations: 27721\ncpu: 29500.99924245161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 118466.10108152339,
            "unit": "ns/iter",
            "extra": "iterations: 7212\ncpu: 118460.06655574063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 97749.63505320731,
            "unit": "ns/iter",
            "extra": "iterations: 8741\ncpu: 97745.65839148856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 99324.15997205638,
            "unit": "ns/iter",
            "extra": "iterations: 8589\ncpu: 99318.60519268818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 98104.19926113714,
            "unit": "ns/iter",
            "extra": "iterations: 8662\ncpu: 98100.49642114967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 255985.34705527898,
            "unit": "ns/iter",
            "extra": "iterations: 3328\ncpu: 255973.37740384552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2113664.9773244243,
            "unit": "ns/iter",
            "extra": "iterations: 441\ncpu: 2113531.0657596425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1754753.1631878044,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1754654.6489563517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1774352.6274130899,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1774257.9150579146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1767784.1321839837,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1767718.7739463637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1026229.7085650834,
            "unit": "ns/iter",
            "extra": "iterations: 899\ncpu: 1026180.8676306978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1700734.5661764694,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1700645.7720588227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6986584.890000813,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6986519.999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3891004.383333533,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3890890.416666674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8869823.834710443,
            "unit": "ns/iter",
            "extra": "iterations: 121\ncpu: 8869594.214876026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 30467.270225366217,
            "unit": "ns/iter",
            "extra": "iterations: 27688\ncpu: 30466.476451892544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 120570.45208949267,
            "unit": "ns/iter",
            "extra": "iterations: 7107\ncpu: 120568.70690868108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 101482.34968522287,
            "unit": "ns/iter",
            "extra": "iterations: 8419\ncpu: 101480.22330443066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 98645.84917426365,
            "unit": "ns/iter",
            "extra": "iterations: 8659\ncpu: 98643.61935558377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 100057.81339316755,
            "unit": "ns/iter",
            "extra": "iterations: 8467\ncpu: 100055.76945789486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 260123.68916465397,
            "unit": "ns/iter",
            "extra": "iterations: 3304\ncpu: 260118.67433414026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2155164.3764432934,
            "unit": "ns/iter",
            "extra": "iterations: 433\ncpu: 2155120.3233256484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1779845.2385495729,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1779800.7633587755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1820093.9746588187,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1820043.8596491155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1800648.3666028024,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1800639.1554702506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1045037.6614172179,
            "unit": "ns/iter",
            "extra": "iterations: 889\ncpu: 1045015.6355455598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1725715.7425926076,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1725694.629629628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7081960.169999775,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7081639.999999965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4030668.689654837,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4030579.310344845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 28017.645208363254,
            "unit": "ns/iter",
            "extra": "iterations: 29468\ncpu: 28017.14402063239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 119354.08691407126,
            "unit": "ns/iter",
            "extra": "iterations: 7168\ncpu: 119351.84151785706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 98489.42323650724,
            "unit": "ns/iter",
            "extra": "iterations: 8676\ncpu: 98487.30982019329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 99552.40562855046,
            "unit": "ns/iter",
            "extra": "iterations: 8599\ncpu: 99551.29666240314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 99132.25250757205,
            "unit": "ns/iter",
            "extra": "iterations: 8574\ncpu: 99128.2831817116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 258010.81678700304,
            "unit": "ns/iter",
            "extra": "iterations: 3324\ncpu: 258005.62575210442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2125714.1522728386,
            "unit": "ns/iter",
            "extra": "iterations: 440\ncpu: 2125668.409090909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1767781.452651484,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1767759.46969697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1795062.0745698977,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1795049.1395793452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1788454.9846450328,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1788384.8368522164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1033820.8080807863,
            "unit": "ns/iter",
            "extra": "iterations: 891\ncpu: 1033800.4489337824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1717031.9484346316,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1716996.5009208047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2924.1030585607236,
            "unit": "ns/iter",
            "extra": "iterations: 238282\ncpu: 2924.0517538043277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14868.757283614557,
            "unit": "ns/iter",
            "extra": "iterations: 47092\ncpu: 14868.538180582775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12034.043978967315,
            "unit": "ns/iter",
            "extra": "iterations: 58005\ncpu: 12033.843634169474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11880.256820686056,
            "unit": "ns/iter",
            "extra": "iterations: 58975\ncpu: 11880.072912250966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9964.822023596618,
            "unit": "ns/iter",
            "extra": "iterations: 69925\ncpu: 9964.580622095054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 60619.91073437296,
            "unit": "ns/iter",
            "extra": "iterations: 11561\ncpu: 60618.34616382694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 141979.32823023436,
            "unit": "ns/iter",
            "extra": "iterations: 4899\ncpu: 141975.70932843367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36094.61848843807,
            "unit": "ns/iter",
            "extra": "iterations: 19331\ncpu: 36094.05617919438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 36687.55661315032,
            "unit": "ns/iter",
            "extra": "iterations: 19121\ncpu: 36686.663877411855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36083.12178130948,
            "unit": "ns/iter",
            "extra": "iterations: 19379\ncpu: 36082.568759998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 73745.40536559762,
            "unit": "ns/iter",
            "extra": "iterations: 9505\ncpu: 73743.5455023671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 65400.107272899426,
            "unit": "ns/iter",
            "extra": "iterations: 10711\ncpu: 65399.57053496418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19946.340855342838,
            "unit": "ns/iter",
            "extra": "iterations: 35097\ncpu: 19946.22617317721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 97069.42676385939,
            "unit": "ns/iter",
            "extra": "iterations: 7271\ncpu: 97065.506807867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 77463.67780113227,
            "unit": "ns/iter",
            "extra": "iterations: 9041\ncpu: 77458.55546952803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 79010.87103689213,
            "unit": "ns/iter",
            "extra": "iterations: 8863\ncpu: 79009.80480649848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 78766.70759379512,
            "unit": "ns/iter",
            "extra": "iterations: 8902\ncpu: 78761.99730397598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 150970.6858808253,
            "unit": "ns/iter",
            "extra": "iterations: 4632\ncpu: 150969.68911916993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 607705.1974026405,
            "unit": "ns/iter",
            "extra": "iterations: 1155\ncpu: 607695.4978355042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 518540.57395139954,
            "unit": "ns/iter",
            "extra": "iterations: 1359\ncpu: 518531.4937453986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 526069.4099099175,
            "unit": "ns/iter",
            "extra": "iterations: 1332\ncpu: 526055.4804804825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 522235.58999255043,
            "unit": "ns/iter",
            "extra": "iterations: 1339\ncpu: 522192.83047049673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 343053.4848927836,
            "unit": "ns/iter",
            "extra": "iterations: 2052\ncpu: 343039.961013646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 506126.3530685607,
            "unit": "ns/iter",
            "extra": "iterations: 1385\ncpu: 506097.3285198571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19846.23464620626,
            "unit": "ns/iter",
            "extra": "iterations: 35317\ncpu: 19845.23883682066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 97644.14229856369,
            "unit": "ns/iter",
            "extra": "iterations: 7161\ncpu: 97642.5638877261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 78724.91711651374,
            "unit": "ns/iter",
            "extra": "iterations: 8892\ncpu: 78722.35717498802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 78066.57927101535,
            "unit": "ns/iter",
            "extra": "iterations: 8944\ncpu: 78064.69141323905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 79670.3607789529,
            "unit": "ns/iter",
            "extra": "iterations: 8781\ncpu: 79668.4318414757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 150699.69048644448,
            "unit": "ns/iter",
            "extra": "iterations: 4646\ncpu: 150698.36418424486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 609286.7571802381,
            "unit": "ns/iter",
            "extra": "iterations: 1149\ncpu: 609267.1018276773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 519882.09393486625,
            "unit": "ns/iter",
            "extra": "iterations: 1352\ncpu: 519873.15088757995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 532089.2562737232,
            "unit": "ns/iter",
            "extra": "iterations: 1315\ncpu: 532079.4676806111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 521456.09213482443,
            "unit": "ns/iter",
            "extra": "iterations: 1335\ncpu: 521432.4344569257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 339444.11342705763,
            "unit": "ns/iter",
            "extra": "iterations: 2063\ncpu: 339411.87590886833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 510186.8454809824,
            "unit": "ns/iter",
            "extra": "iterations: 1372\ncpu: 510161.0058309048 ns\nthreads: 1"
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
        "date": 1702489608758,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7437.870864992025,
            "unit": "ns/iter",
            "extra": "iterations: 94498\ncpu: 7437.809265804567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 74619.19868593439,
            "unit": "ns/iter",
            "extra": "iterations: 11415\ncpu: 74617.01270258431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 145147.23688940358,
            "unit": "ns/iter",
            "extra": "iterations: 6121\ncpu: 145144.66590426402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 209675.60211946085,
            "unit": "ns/iter",
            "extra": "iterations: 4152\ncpu: 209665.31791907508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 275165.6109528473,
            "unit": "ns/iter",
            "extra": "iterations: 3159\ncpu: 275152.0101297878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 340830.132237879,
            "unit": "ns/iter",
            "extra": "iterations: 2556\ncpu: 340815.21909233177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 407388.49507734325,
            "unit": "ns/iter",
            "extra": "iterations: 2133\ncpu: 407375.10548523173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 473650.8213507607,
            "unit": "ns/iter",
            "extra": "iterations: 1836\ncpu: 473633.6601307185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 540782.9725343677,
            "unit": "ns/iter",
            "extra": "iterations: 1602\ncpu: 540749.8751560543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5701.974623953127,
            "unit": "ns/iter",
            "extra": "iterations: 122990\ncpu: 5701.717212781521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4838.639023952228,
            "unit": "ns/iter",
            "extra": "iterations: 144788\ncpu: 4838.461060308867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4830.38053293114,
            "unit": "ns/iter",
            "extra": "iterations: 144634\ncpu: 4830.133301989855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4876.6748804807685,
            "unit": "ns/iter",
            "extra": "iterations: 143701\ncpu: 4876.4476238857105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8640.754395317324,
            "unit": "ns/iter",
            "extra": "iterations: 80654\ncpu: 8640.341458576131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 29502.1317412809,
            "unit": "ns/iter",
            "extra": "iterations: 27721\ncpu: 29500.99924245161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 118466.10108152339,
            "unit": "ns/iter",
            "extra": "iterations: 7212\ncpu: 118460.06655574063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 97749.63505320731,
            "unit": "ns/iter",
            "extra": "iterations: 8741\ncpu: 97745.65839148856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 99324.15997205638,
            "unit": "ns/iter",
            "extra": "iterations: 8589\ncpu: 99318.60519268818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 98104.19926113714,
            "unit": "ns/iter",
            "extra": "iterations: 8662\ncpu: 98100.49642114967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 255985.34705527898,
            "unit": "ns/iter",
            "extra": "iterations: 3328\ncpu: 255973.37740384552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2113664.9773244243,
            "unit": "ns/iter",
            "extra": "iterations: 441\ncpu: 2113531.0657596425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1754753.1631878044,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1754654.6489563517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1774352.6274130899,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1774257.9150579146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1767784.1321839837,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1767718.7739463637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1026229.7085650834,
            "unit": "ns/iter",
            "extra": "iterations: 899\ncpu: 1026180.8676306978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1700734.5661764694,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1700645.7720588227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6986584.890000813,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6986519.999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3891004.383333533,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3890890.416666674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8869823.834710443,
            "unit": "ns/iter",
            "extra": "iterations: 121\ncpu: 8869594.214876026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 30467.270225366217,
            "unit": "ns/iter",
            "extra": "iterations: 27688\ncpu: 30466.476451892544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 120570.45208949267,
            "unit": "ns/iter",
            "extra": "iterations: 7107\ncpu: 120568.70690868108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 101482.34968522287,
            "unit": "ns/iter",
            "extra": "iterations: 8419\ncpu: 101480.22330443066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 98645.84917426365,
            "unit": "ns/iter",
            "extra": "iterations: 8659\ncpu: 98643.61935558377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 100057.81339316755,
            "unit": "ns/iter",
            "extra": "iterations: 8467\ncpu: 100055.76945789486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 260123.68916465397,
            "unit": "ns/iter",
            "extra": "iterations: 3304\ncpu: 260118.67433414026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2155164.3764432934,
            "unit": "ns/iter",
            "extra": "iterations: 433\ncpu: 2155120.3233256484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1779845.2385495729,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1779800.7633587755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1820093.9746588187,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1820043.8596491155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1800648.3666028024,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1800639.1554702506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1045037.6614172179,
            "unit": "ns/iter",
            "extra": "iterations: 889\ncpu: 1045015.6355455598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1725715.7425926076,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1725694.629629628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7081960.169999775,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7081639.999999965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4030668.689654837,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4030579.310344845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 28017.645208363254,
            "unit": "ns/iter",
            "extra": "iterations: 29468\ncpu: 28017.14402063239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 119354.08691407126,
            "unit": "ns/iter",
            "extra": "iterations: 7168\ncpu: 119351.84151785706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 98489.42323650724,
            "unit": "ns/iter",
            "extra": "iterations: 8676\ncpu: 98487.30982019329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 99552.40562855046,
            "unit": "ns/iter",
            "extra": "iterations: 8599\ncpu: 99551.29666240314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 99132.25250757205,
            "unit": "ns/iter",
            "extra": "iterations: 8574\ncpu: 99128.2831817116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 258010.81678700304,
            "unit": "ns/iter",
            "extra": "iterations: 3324\ncpu: 258005.62575210442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2125714.1522728386,
            "unit": "ns/iter",
            "extra": "iterations: 440\ncpu: 2125668.409090909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1767781.452651484,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1767759.46969697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1795062.0745698977,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1795049.1395793452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1788454.9846450328,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1788384.8368522164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1033820.8080807863,
            "unit": "ns/iter",
            "extra": "iterations: 891\ncpu: 1033800.4489337824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1717031.9484346316,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1716996.5009208047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2924.1030585607236,
            "unit": "ns/iter",
            "extra": "iterations: 238282\ncpu: 2924.0517538043277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14868.757283614557,
            "unit": "ns/iter",
            "extra": "iterations: 47092\ncpu: 14868.538180582775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12034.043978967315,
            "unit": "ns/iter",
            "extra": "iterations: 58005\ncpu: 12033.843634169474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11880.256820686056,
            "unit": "ns/iter",
            "extra": "iterations: 58975\ncpu: 11880.072912250966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9964.822023596618,
            "unit": "ns/iter",
            "extra": "iterations: 69925\ncpu: 9964.580622095054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 60619.91073437296,
            "unit": "ns/iter",
            "extra": "iterations: 11561\ncpu: 60618.34616382694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 141979.32823023436,
            "unit": "ns/iter",
            "extra": "iterations: 4899\ncpu: 141975.70932843367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36094.61848843807,
            "unit": "ns/iter",
            "extra": "iterations: 19331\ncpu: 36094.05617919438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 36687.55661315032,
            "unit": "ns/iter",
            "extra": "iterations: 19121\ncpu: 36686.663877411855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36083.12178130948,
            "unit": "ns/iter",
            "extra": "iterations: 19379\ncpu: 36082.568759998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 73745.40536559762,
            "unit": "ns/iter",
            "extra": "iterations: 9505\ncpu: 73743.5455023671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 65400.107272899426,
            "unit": "ns/iter",
            "extra": "iterations: 10711\ncpu: 65399.57053496418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19946.340855342838,
            "unit": "ns/iter",
            "extra": "iterations: 35097\ncpu: 19946.22617317721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 97069.42676385939,
            "unit": "ns/iter",
            "extra": "iterations: 7271\ncpu: 97065.506807867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 77463.67780113227,
            "unit": "ns/iter",
            "extra": "iterations: 9041\ncpu: 77458.55546952803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 79010.87103689213,
            "unit": "ns/iter",
            "extra": "iterations: 8863\ncpu: 79009.80480649848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 78766.70759379512,
            "unit": "ns/iter",
            "extra": "iterations: 8902\ncpu: 78761.99730397598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 150970.6858808253,
            "unit": "ns/iter",
            "extra": "iterations: 4632\ncpu: 150969.68911916993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 607705.1974026405,
            "unit": "ns/iter",
            "extra": "iterations: 1155\ncpu: 607695.4978355042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 518540.57395139954,
            "unit": "ns/iter",
            "extra": "iterations: 1359\ncpu: 518531.4937453986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 526069.4099099175,
            "unit": "ns/iter",
            "extra": "iterations: 1332\ncpu: 526055.4804804825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 522235.58999255043,
            "unit": "ns/iter",
            "extra": "iterations: 1339\ncpu: 522192.83047049673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 343053.4848927836,
            "unit": "ns/iter",
            "extra": "iterations: 2052\ncpu: 343039.961013646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 506126.3530685607,
            "unit": "ns/iter",
            "extra": "iterations: 1385\ncpu: 506097.3285198571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19846.23464620626,
            "unit": "ns/iter",
            "extra": "iterations: 35317\ncpu: 19845.23883682066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 97644.14229856369,
            "unit": "ns/iter",
            "extra": "iterations: 7161\ncpu: 97642.5638877261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 78724.91711651374,
            "unit": "ns/iter",
            "extra": "iterations: 8892\ncpu: 78722.35717498802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 78066.57927101535,
            "unit": "ns/iter",
            "extra": "iterations: 8944\ncpu: 78064.69141323905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 79670.3607789529,
            "unit": "ns/iter",
            "extra": "iterations: 8781\ncpu: 79668.4318414757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 150699.69048644448,
            "unit": "ns/iter",
            "extra": "iterations: 4646\ncpu: 150698.36418424486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 609286.7571802381,
            "unit": "ns/iter",
            "extra": "iterations: 1149\ncpu: 609267.1018276773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 519882.09393486625,
            "unit": "ns/iter",
            "extra": "iterations: 1352\ncpu: 519873.15088757995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 532089.2562737232,
            "unit": "ns/iter",
            "extra": "iterations: 1315\ncpu: 532079.4676806111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 521456.09213482443,
            "unit": "ns/iter",
            "extra": "iterations: 1335\ncpu: 521432.4344569257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 339444.11342705763,
            "unit": "ns/iter",
            "extra": "iterations: 2063\ncpu: 339411.87590886833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 510186.8454809824,
            "unit": "ns/iter",
            "extra": "iterations: 1372\ncpu: 510161.0058309048 ns\nthreads: 1"
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
        "date": 1702489608758,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7437.870864992025,
            "unit": "ns/iter",
            "extra": "iterations: 94498\ncpu: 7437.809265804567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 74619.19868593439,
            "unit": "ns/iter",
            "extra": "iterations: 11415\ncpu: 74617.01270258431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 145147.23688940358,
            "unit": "ns/iter",
            "extra": "iterations: 6121\ncpu: 145144.66590426402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 209675.60211946085,
            "unit": "ns/iter",
            "extra": "iterations: 4152\ncpu: 209665.31791907508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 275165.6109528473,
            "unit": "ns/iter",
            "extra": "iterations: 3159\ncpu: 275152.0101297878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 340830.132237879,
            "unit": "ns/iter",
            "extra": "iterations: 2556\ncpu: 340815.21909233177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 407388.49507734325,
            "unit": "ns/iter",
            "extra": "iterations: 2133\ncpu: 407375.10548523173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 473650.8213507607,
            "unit": "ns/iter",
            "extra": "iterations: 1836\ncpu: 473633.6601307185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 540782.9725343677,
            "unit": "ns/iter",
            "extra": "iterations: 1602\ncpu: 540749.8751560543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5701.974623953127,
            "unit": "ns/iter",
            "extra": "iterations: 122990\ncpu: 5701.717212781521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4838.639023952228,
            "unit": "ns/iter",
            "extra": "iterations: 144788\ncpu: 4838.461060308867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4830.38053293114,
            "unit": "ns/iter",
            "extra": "iterations: 144634\ncpu: 4830.133301989855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4876.6748804807685,
            "unit": "ns/iter",
            "extra": "iterations: 143701\ncpu: 4876.4476238857105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8640.754395317324,
            "unit": "ns/iter",
            "extra": "iterations: 80654\ncpu: 8640.341458576131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 29502.1317412809,
            "unit": "ns/iter",
            "extra": "iterations: 27721\ncpu: 29500.99924245161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 118466.10108152339,
            "unit": "ns/iter",
            "extra": "iterations: 7212\ncpu: 118460.06655574063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 97749.63505320731,
            "unit": "ns/iter",
            "extra": "iterations: 8741\ncpu: 97745.65839148856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 99324.15997205638,
            "unit": "ns/iter",
            "extra": "iterations: 8589\ncpu: 99318.60519268818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 98104.19926113714,
            "unit": "ns/iter",
            "extra": "iterations: 8662\ncpu: 98100.49642114967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 255985.34705527898,
            "unit": "ns/iter",
            "extra": "iterations: 3328\ncpu: 255973.37740384552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2113664.9773244243,
            "unit": "ns/iter",
            "extra": "iterations: 441\ncpu: 2113531.0657596425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1754753.1631878044,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1754654.6489563517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1774352.6274130899,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1774257.9150579146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1767784.1321839837,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1767718.7739463637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1026229.7085650834,
            "unit": "ns/iter",
            "extra": "iterations: 899\ncpu: 1026180.8676306978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1700734.5661764694,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1700645.7720588227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6986584.890000813,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6986519.999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3891004.383333533,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3890890.416666674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8869823.834710443,
            "unit": "ns/iter",
            "extra": "iterations: 121\ncpu: 8869594.214876026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 30467.270225366217,
            "unit": "ns/iter",
            "extra": "iterations: 27688\ncpu: 30466.476451892544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 120570.45208949267,
            "unit": "ns/iter",
            "extra": "iterations: 7107\ncpu: 120568.70690868108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 101482.34968522287,
            "unit": "ns/iter",
            "extra": "iterations: 8419\ncpu: 101480.22330443066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 98645.84917426365,
            "unit": "ns/iter",
            "extra": "iterations: 8659\ncpu: 98643.61935558377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 100057.81339316755,
            "unit": "ns/iter",
            "extra": "iterations: 8467\ncpu: 100055.76945789486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 260123.68916465397,
            "unit": "ns/iter",
            "extra": "iterations: 3304\ncpu: 260118.67433414026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2155164.3764432934,
            "unit": "ns/iter",
            "extra": "iterations: 433\ncpu: 2155120.3233256484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1779845.2385495729,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1779800.7633587755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1820093.9746588187,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1820043.8596491155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1800648.3666028024,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1800639.1554702506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1045037.6614172179,
            "unit": "ns/iter",
            "extra": "iterations: 889\ncpu: 1045015.6355455598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1725715.7425926076,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1725694.629629628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7081960.169999775,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7081639.999999965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4030668.689654837,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4030579.310344845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 28017.645208363254,
            "unit": "ns/iter",
            "extra": "iterations: 29468\ncpu: 28017.14402063239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 119354.08691407126,
            "unit": "ns/iter",
            "extra": "iterations: 7168\ncpu: 119351.84151785706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 98489.42323650724,
            "unit": "ns/iter",
            "extra": "iterations: 8676\ncpu: 98487.30982019329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 99552.40562855046,
            "unit": "ns/iter",
            "extra": "iterations: 8599\ncpu: 99551.29666240314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 99132.25250757205,
            "unit": "ns/iter",
            "extra": "iterations: 8574\ncpu: 99128.2831817116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 258010.81678700304,
            "unit": "ns/iter",
            "extra": "iterations: 3324\ncpu: 258005.62575210442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2125714.1522728386,
            "unit": "ns/iter",
            "extra": "iterations: 440\ncpu: 2125668.409090909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1767781.452651484,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1767759.46969697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1795062.0745698977,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1795049.1395793452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1788454.9846450328,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1788384.8368522164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1033820.8080807863,
            "unit": "ns/iter",
            "extra": "iterations: 891\ncpu: 1033800.4489337824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1717031.9484346316,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1716996.5009208047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2924.1030585607236,
            "unit": "ns/iter",
            "extra": "iterations: 238282\ncpu: 2924.0517538043277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14868.757283614557,
            "unit": "ns/iter",
            "extra": "iterations: 47092\ncpu: 14868.538180582775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12034.043978967315,
            "unit": "ns/iter",
            "extra": "iterations: 58005\ncpu: 12033.843634169474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11880.256820686056,
            "unit": "ns/iter",
            "extra": "iterations: 58975\ncpu: 11880.072912250966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9964.822023596618,
            "unit": "ns/iter",
            "extra": "iterations: 69925\ncpu: 9964.580622095054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 60619.91073437296,
            "unit": "ns/iter",
            "extra": "iterations: 11561\ncpu: 60618.34616382694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 141979.32823023436,
            "unit": "ns/iter",
            "extra": "iterations: 4899\ncpu: 141975.70932843367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36094.61848843807,
            "unit": "ns/iter",
            "extra": "iterations: 19331\ncpu: 36094.05617919438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 36687.55661315032,
            "unit": "ns/iter",
            "extra": "iterations: 19121\ncpu: 36686.663877411855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36083.12178130948,
            "unit": "ns/iter",
            "extra": "iterations: 19379\ncpu: 36082.568759998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 73745.40536559762,
            "unit": "ns/iter",
            "extra": "iterations: 9505\ncpu: 73743.5455023671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 65400.107272899426,
            "unit": "ns/iter",
            "extra": "iterations: 10711\ncpu: 65399.57053496418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19946.340855342838,
            "unit": "ns/iter",
            "extra": "iterations: 35097\ncpu: 19946.22617317721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 97069.42676385939,
            "unit": "ns/iter",
            "extra": "iterations: 7271\ncpu: 97065.506807867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 77463.67780113227,
            "unit": "ns/iter",
            "extra": "iterations: 9041\ncpu: 77458.55546952803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 79010.87103689213,
            "unit": "ns/iter",
            "extra": "iterations: 8863\ncpu: 79009.80480649848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 78766.70759379512,
            "unit": "ns/iter",
            "extra": "iterations: 8902\ncpu: 78761.99730397598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 150970.6858808253,
            "unit": "ns/iter",
            "extra": "iterations: 4632\ncpu: 150969.68911916993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 607705.1974026405,
            "unit": "ns/iter",
            "extra": "iterations: 1155\ncpu: 607695.4978355042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 518540.57395139954,
            "unit": "ns/iter",
            "extra": "iterations: 1359\ncpu: 518531.4937453986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 526069.4099099175,
            "unit": "ns/iter",
            "extra": "iterations: 1332\ncpu: 526055.4804804825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 522235.58999255043,
            "unit": "ns/iter",
            "extra": "iterations: 1339\ncpu: 522192.83047049673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 343053.4848927836,
            "unit": "ns/iter",
            "extra": "iterations: 2052\ncpu: 343039.961013646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 506126.3530685607,
            "unit": "ns/iter",
            "extra": "iterations: 1385\ncpu: 506097.3285198571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19846.23464620626,
            "unit": "ns/iter",
            "extra": "iterations: 35317\ncpu: 19845.23883682066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 97644.14229856369,
            "unit": "ns/iter",
            "extra": "iterations: 7161\ncpu: 97642.5638877261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 78724.91711651374,
            "unit": "ns/iter",
            "extra": "iterations: 8892\ncpu: 78722.35717498802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 78066.57927101535,
            "unit": "ns/iter",
            "extra": "iterations: 8944\ncpu: 78064.69141323905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 79670.3607789529,
            "unit": "ns/iter",
            "extra": "iterations: 8781\ncpu: 79668.4318414757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 150699.69048644448,
            "unit": "ns/iter",
            "extra": "iterations: 4646\ncpu: 150698.36418424486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 609286.7571802381,
            "unit": "ns/iter",
            "extra": "iterations: 1149\ncpu: 609267.1018276773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 519882.09393486625,
            "unit": "ns/iter",
            "extra": "iterations: 1352\ncpu: 519873.15088757995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 532089.2562737232,
            "unit": "ns/iter",
            "extra": "iterations: 1315\ncpu: 532079.4676806111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 521456.09213482443,
            "unit": "ns/iter",
            "extra": "iterations: 1335\ncpu: 521432.4344569257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 339444.11342705763,
            "unit": "ns/iter",
            "extra": "iterations: 2063\ncpu: 339411.87590886833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 510186.8454809824,
            "unit": "ns/iter",
            "extra": "iterations: 1372\ncpu: 510161.0058309048 ns\nthreads: 1"
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
        "date": 1702489608758,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7437.870864992025,
            "unit": "ns/iter",
            "extra": "iterations: 94498\ncpu: 7437.809265804567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 74619.19868593439,
            "unit": "ns/iter",
            "extra": "iterations: 11415\ncpu: 74617.01270258431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 145147.23688940358,
            "unit": "ns/iter",
            "extra": "iterations: 6121\ncpu: 145144.66590426402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 209675.60211946085,
            "unit": "ns/iter",
            "extra": "iterations: 4152\ncpu: 209665.31791907508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 275165.6109528473,
            "unit": "ns/iter",
            "extra": "iterations: 3159\ncpu: 275152.0101297878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 340830.132237879,
            "unit": "ns/iter",
            "extra": "iterations: 2556\ncpu: 340815.21909233177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 407388.49507734325,
            "unit": "ns/iter",
            "extra": "iterations: 2133\ncpu: 407375.10548523173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 473650.8213507607,
            "unit": "ns/iter",
            "extra": "iterations: 1836\ncpu: 473633.6601307185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 540782.9725343677,
            "unit": "ns/iter",
            "extra": "iterations: 1602\ncpu: 540749.8751560543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5701.974623953127,
            "unit": "ns/iter",
            "extra": "iterations: 122990\ncpu: 5701.717212781521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4838.639023952228,
            "unit": "ns/iter",
            "extra": "iterations: 144788\ncpu: 4838.461060308867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4830.38053293114,
            "unit": "ns/iter",
            "extra": "iterations: 144634\ncpu: 4830.133301989855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4876.6748804807685,
            "unit": "ns/iter",
            "extra": "iterations: 143701\ncpu: 4876.4476238857105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8640.754395317324,
            "unit": "ns/iter",
            "extra": "iterations: 80654\ncpu: 8640.341458576131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 29502.1317412809,
            "unit": "ns/iter",
            "extra": "iterations: 27721\ncpu: 29500.99924245161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 118466.10108152339,
            "unit": "ns/iter",
            "extra": "iterations: 7212\ncpu: 118460.06655574063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 97749.63505320731,
            "unit": "ns/iter",
            "extra": "iterations: 8741\ncpu: 97745.65839148856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 99324.15997205638,
            "unit": "ns/iter",
            "extra": "iterations: 8589\ncpu: 99318.60519268818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 98104.19926113714,
            "unit": "ns/iter",
            "extra": "iterations: 8662\ncpu: 98100.49642114967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 255985.34705527898,
            "unit": "ns/iter",
            "extra": "iterations: 3328\ncpu: 255973.37740384552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2113664.9773244243,
            "unit": "ns/iter",
            "extra": "iterations: 441\ncpu: 2113531.0657596425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1754753.1631878044,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1754654.6489563517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1774352.6274130899,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1774257.9150579146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1767784.1321839837,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1767718.7739463637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1026229.7085650834,
            "unit": "ns/iter",
            "extra": "iterations: 899\ncpu: 1026180.8676306978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1700734.5661764694,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1700645.7720588227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6986584.890000813,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6986519.999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3891004.383333533,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3890890.416666674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8869823.834710443,
            "unit": "ns/iter",
            "extra": "iterations: 121\ncpu: 8869594.214876026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 30467.270225366217,
            "unit": "ns/iter",
            "extra": "iterations: 27688\ncpu: 30466.476451892544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 120570.45208949267,
            "unit": "ns/iter",
            "extra": "iterations: 7107\ncpu: 120568.70690868108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 101482.34968522287,
            "unit": "ns/iter",
            "extra": "iterations: 8419\ncpu: 101480.22330443066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 98645.84917426365,
            "unit": "ns/iter",
            "extra": "iterations: 8659\ncpu: 98643.61935558377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 100057.81339316755,
            "unit": "ns/iter",
            "extra": "iterations: 8467\ncpu: 100055.76945789486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 260123.68916465397,
            "unit": "ns/iter",
            "extra": "iterations: 3304\ncpu: 260118.67433414026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2155164.3764432934,
            "unit": "ns/iter",
            "extra": "iterations: 433\ncpu: 2155120.3233256484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1779845.2385495729,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1779800.7633587755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1820093.9746588187,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1820043.8596491155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1800648.3666028024,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1800639.1554702506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1045037.6614172179,
            "unit": "ns/iter",
            "extra": "iterations: 889\ncpu: 1045015.6355455598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1725715.7425926076,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1725694.629629628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7081960.169999775,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7081639.999999965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4030668.689654837,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4030579.310344845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 28017.645208363254,
            "unit": "ns/iter",
            "extra": "iterations: 29468\ncpu: 28017.14402063239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 119354.08691407126,
            "unit": "ns/iter",
            "extra": "iterations: 7168\ncpu: 119351.84151785706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 98489.42323650724,
            "unit": "ns/iter",
            "extra": "iterations: 8676\ncpu: 98487.30982019329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 99552.40562855046,
            "unit": "ns/iter",
            "extra": "iterations: 8599\ncpu: 99551.29666240314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 99132.25250757205,
            "unit": "ns/iter",
            "extra": "iterations: 8574\ncpu: 99128.2831817116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 258010.81678700304,
            "unit": "ns/iter",
            "extra": "iterations: 3324\ncpu: 258005.62575210442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2125714.1522728386,
            "unit": "ns/iter",
            "extra": "iterations: 440\ncpu: 2125668.409090909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1767781.452651484,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1767759.46969697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1795062.0745698977,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1795049.1395793452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1788454.9846450328,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1788384.8368522164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1033820.8080807863,
            "unit": "ns/iter",
            "extra": "iterations: 891\ncpu: 1033800.4489337824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1717031.9484346316,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1716996.5009208047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2924.1030585607236,
            "unit": "ns/iter",
            "extra": "iterations: 238282\ncpu: 2924.0517538043277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14868.757283614557,
            "unit": "ns/iter",
            "extra": "iterations: 47092\ncpu: 14868.538180582775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12034.043978967315,
            "unit": "ns/iter",
            "extra": "iterations: 58005\ncpu: 12033.843634169474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11880.256820686056,
            "unit": "ns/iter",
            "extra": "iterations: 58975\ncpu: 11880.072912250966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9964.822023596618,
            "unit": "ns/iter",
            "extra": "iterations: 69925\ncpu: 9964.580622095054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 60619.91073437296,
            "unit": "ns/iter",
            "extra": "iterations: 11561\ncpu: 60618.34616382694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 141979.32823023436,
            "unit": "ns/iter",
            "extra": "iterations: 4899\ncpu: 141975.70932843367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36094.61848843807,
            "unit": "ns/iter",
            "extra": "iterations: 19331\ncpu: 36094.05617919438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 36687.55661315032,
            "unit": "ns/iter",
            "extra": "iterations: 19121\ncpu: 36686.663877411855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36083.12178130948,
            "unit": "ns/iter",
            "extra": "iterations: 19379\ncpu: 36082.568759998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 73745.40536559762,
            "unit": "ns/iter",
            "extra": "iterations: 9505\ncpu: 73743.5455023671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 65400.107272899426,
            "unit": "ns/iter",
            "extra": "iterations: 10711\ncpu: 65399.57053496418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19946.340855342838,
            "unit": "ns/iter",
            "extra": "iterations: 35097\ncpu: 19946.22617317721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 97069.42676385939,
            "unit": "ns/iter",
            "extra": "iterations: 7271\ncpu: 97065.506807867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 77463.67780113227,
            "unit": "ns/iter",
            "extra": "iterations: 9041\ncpu: 77458.55546952803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 79010.87103689213,
            "unit": "ns/iter",
            "extra": "iterations: 8863\ncpu: 79009.80480649848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 78766.70759379512,
            "unit": "ns/iter",
            "extra": "iterations: 8902\ncpu: 78761.99730397598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 150970.6858808253,
            "unit": "ns/iter",
            "extra": "iterations: 4632\ncpu: 150969.68911916993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 607705.1974026405,
            "unit": "ns/iter",
            "extra": "iterations: 1155\ncpu: 607695.4978355042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 518540.57395139954,
            "unit": "ns/iter",
            "extra": "iterations: 1359\ncpu: 518531.4937453986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 526069.4099099175,
            "unit": "ns/iter",
            "extra": "iterations: 1332\ncpu: 526055.4804804825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 522235.58999255043,
            "unit": "ns/iter",
            "extra": "iterations: 1339\ncpu: 522192.83047049673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 343053.4848927836,
            "unit": "ns/iter",
            "extra": "iterations: 2052\ncpu: 343039.961013646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 506126.3530685607,
            "unit": "ns/iter",
            "extra": "iterations: 1385\ncpu: 506097.3285198571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19846.23464620626,
            "unit": "ns/iter",
            "extra": "iterations: 35317\ncpu: 19845.23883682066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 97644.14229856369,
            "unit": "ns/iter",
            "extra": "iterations: 7161\ncpu: 97642.5638877261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 78724.91711651374,
            "unit": "ns/iter",
            "extra": "iterations: 8892\ncpu: 78722.35717498802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 78066.57927101535,
            "unit": "ns/iter",
            "extra": "iterations: 8944\ncpu: 78064.69141323905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 79670.3607789529,
            "unit": "ns/iter",
            "extra": "iterations: 8781\ncpu: 79668.4318414757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 150699.69048644448,
            "unit": "ns/iter",
            "extra": "iterations: 4646\ncpu: 150698.36418424486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 609286.7571802381,
            "unit": "ns/iter",
            "extra": "iterations: 1149\ncpu: 609267.1018276773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 519882.09393486625,
            "unit": "ns/iter",
            "extra": "iterations: 1352\ncpu: 519873.15088757995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 532089.2562737232,
            "unit": "ns/iter",
            "extra": "iterations: 1315\ncpu: 532079.4676806111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 521456.09213482443,
            "unit": "ns/iter",
            "extra": "iterations: 1335\ncpu: 521432.4344569257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 339444.11342705763,
            "unit": "ns/iter",
            "extra": "iterations: 2063\ncpu: 339411.87590886833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 510186.8454809824,
            "unit": "ns/iter",
            "extra": "iterations: 1372\ncpu: 510161.0058309048 ns\nthreads: 1"
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
        "date": 1702489608758,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7437.870864992025,
            "unit": "ns/iter",
            "extra": "iterations: 94498\ncpu: 7437.809265804567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 74619.19868593439,
            "unit": "ns/iter",
            "extra": "iterations: 11415\ncpu: 74617.01270258431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 145147.23688940358,
            "unit": "ns/iter",
            "extra": "iterations: 6121\ncpu: 145144.66590426402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 209675.60211946085,
            "unit": "ns/iter",
            "extra": "iterations: 4152\ncpu: 209665.31791907508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 275165.6109528473,
            "unit": "ns/iter",
            "extra": "iterations: 3159\ncpu: 275152.0101297878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 340830.132237879,
            "unit": "ns/iter",
            "extra": "iterations: 2556\ncpu: 340815.21909233177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 407388.49507734325,
            "unit": "ns/iter",
            "extra": "iterations: 2133\ncpu: 407375.10548523173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 473650.8213507607,
            "unit": "ns/iter",
            "extra": "iterations: 1836\ncpu: 473633.6601307185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 540782.9725343677,
            "unit": "ns/iter",
            "extra": "iterations: 1602\ncpu: 540749.8751560543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5701.974623953127,
            "unit": "ns/iter",
            "extra": "iterations: 122990\ncpu: 5701.717212781521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4838.639023952228,
            "unit": "ns/iter",
            "extra": "iterations: 144788\ncpu: 4838.461060308867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4830.38053293114,
            "unit": "ns/iter",
            "extra": "iterations: 144634\ncpu: 4830.133301989855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4876.6748804807685,
            "unit": "ns/iter",
            "extra": "iterations: 143701\ncpu: 4876.4476238857105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8640.754395317324,
            "unit": "ns/iter",
            "extra": "iterations: 80654\ncpu: 8640.341458576131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 29502.1317412809,
            "unit": "ns/iter",
            "extra": "iterations: 27721\ncpu: 29500.99924245161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 118466.10108152339,
            "unit": "ns/iter",
            "extra": "iterations: 7212\ncpu: 118460.06655574063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 97749.63505320731,
            "unit": "ns/iter",
            "extra": "iterations: 8741\ncpu: 97745.65839148856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 99324.15997205638,
            "unit": "ns/iter",
            "extra": "iterations: 8589\ncpu: 99318.60519268818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 98104.19926113714,
            "unit": "ns/iter",
            "extra": "iterations: 8662\ncpu: 98100.49642114967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 255985.34705527898,
            "unit": "ns/iter",
            "extra": "iterations: 3328\ncpu: 255973.37740384552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2113664.9773244243,
            "unit": "ns/iter",
            "extra": "iterations: 441\ncpu: 2113531.0657596425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1754753.1631878044,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1754654.6489563517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1774352.6274130899,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1774257.9150579146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1767784.1321839837,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1767718.7739463637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1026229.7085650834,
            "unit": "ns/iter",
            "extra": "iterations: 899\ncpu: 1026180.8676306978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1700734.5661764694,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1700645.7720588227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6986584.890000813,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6986519.999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3891004.383333533,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3890890.416666674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8869823.834710443,
            "unit": "ns/iter",
            "extra": "iterations: 121\ncpu: 8869594.214876026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 30467.270225366217,
            "unit": "ns/iter",
            "extra": "iterations: 27688\ncpu: 30466.476451892544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 120570.45208949267,
            "unit": "ns/iter",
            "extra": "iterations: 7107\ncpu: 120568.70690868108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 101482.34968522287,
            "unit": "ns/iter",
            "extra": "iterations: 8419\ncpu: 101480.22330443066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 98645.84917426365,
            "unit": "ns/iter",
            "extra": "iterations: 8659\ncpu: 98643.61935558377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 100057.81339316755,
            "unit": "ns/iter",
            "extra": "iterations: 8467\ncpu: 100055.76945789486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 260123.68916465397,
            "unit": "ns/iter",
            "extra": "iterations: 3304\ncpu: 260118.67433414026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2155164.3764432934,
            "unit": "ns/iter",
            "extra": "iterations: 433\ncpu: 2155120.3233256484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1779845.2385495729,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1779800.7633587755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1820093.9746588187,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1820043.8596491155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1800648.3666028024,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1800639.1554702506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1045037.6614172179,
            "unit": "ns/iter",
            "extra": "iterations: 889\ncpu: 1045015.6355455598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1725715.7425926076,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1725694.629629628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7081960.169999775,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7081639.999999965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4030668.689654837,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4030579.310344845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 28017.645208363254,
            "unit": "ns/iter",
            "extra": "iterations: 29468\ncpu: 28017.14402063239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 119354.08691407126,
            "unit": "ns/iter",
            "extra": "iterations: 7168\ncpu: 119351.84151785706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 98489.42323650724,
            "unit": "ns/iter",
            "extra": "iterations: 8676\ncpu: 98487.30982019329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 99552.40562855046,
            "unit": "ns/iter",
            "extra": "iterations: 8599\ncpu: 99551.29666240314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 99132.25250757205,
            "unit": "ns/iter",
            "extra": "iterations: 8574\ncpu: 99128.2831817116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 258010.81678700304,
            "unit": "ns/iter",
            "extra": "iterations: 3324\ncpu: 258005.62575210442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2125714.1522728386,
            "unit": "ns/iter",
            "extra": "iterations: 440\ncpu: 2125668.409090909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1767781.452651484,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1767759.46969697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1795062.0745698977,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1795049.1395793452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1788454.9846450328,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1788384.8368522164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1033820.8080807863,
            "unit": "ns/iter",
            "extra": "iterations: 891\ncpu: 1033800.4489337824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1717031.9484346316,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1716996.5009208047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2924.1030585607236,
            "unit": "ns/iter",
            "extra": "iterations: 238282\ncpu: 2924.0517538043277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14868.757283614557,
            "unit": "ns/iter",
            "extra": "iterations: 47092\ncpu: 14868.538180582775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12034.043978967315,
            "unit": "ns/iter",
            "extra": "iterations: 58005\ncpu: 12033.843634169474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11880.256820686056,
            "unit": "ns/iter",
            "extra": "iterations: 58975\ncpu: 11880.072912250966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9964.822023596618,
            "unit": "ns/iter",
            "extra": "iterations: 69925\ncpu: 9964.580622095054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 60619.91073437296,
            "unit": "ns/iter",
            "extra": "iterations: 11561\ncpu: 60618.34616382694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 141979.32823023436,
            "unit": "ns/iter",
            "extra": "iterations: 4899\ncpu: 141975.70932843367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36094.61848843807,
            "unit": "ns/iter",
            "extra": "iterations: 19331\ncpu: 36094.05617919438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 36687.55661315032,
            "unit": "ns/iter",
            "extra": "iterations: 19121\ncpu: 36686.663877411855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36083.12178130948,
            "unit": "ns/iter",
            "extra": "iterations: 19379\ncpu: 36082.568759998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 73745.40536559762,
            "unit": "ns/iter",
            "extra": "iterations: 9505\ncpu: 73743.5455023671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 65400.107272899426,
            "unit": "ns/iter",
            "extra": "iterations: 10711\ncpu: 65399.57053496418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19946.340855342838,
            "unit": "ns/iter",
            "extra": "iterations: 35097\ncpu: 19946.22617317721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 97069.42676385939,
            "unit": "ns/iter",
            "extra": "iterations: 7271\ncpu: 97065.506807867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 77463.67780113227,
            "unit": "ns/iter",
            "extra": "iterations: 9041\ncpu: 77458.55546952803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 79010.87103689213,
            "unit": "ns/iter",
            "extra": "iterations: 8863\ncpu: 79009.80480649848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 78766.70759379512,
            "unit": "ns/iter",
            "extra": "iterations: 8902\ncpu: 78761.99730397598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 150970.6858808253,
            "unit": "ns/iter",
            "extra": "iterations: 4632\ncpu: 150969.68911916993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 607705.1974026405,
            "unit": "ns/iter",
            "extra": "iterations: 1155\ncpu: 607695.4978355042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 518540.57395139954,
            "unit": "ns/iter",
            "extra": "iterations: 1359\ncpu: 518531.4937453986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 526069.4099099175,
            "unit": "ns/iter",
            "extra": "iterations: 1332\ncpu: 526055.4804804825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 522235.58999255043,
            "unit": "ns/iter",
            "extra": "iterations: 1339\ncpu: 522192.83047049673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 343053.4848927836,
            "unit": "ns/iter",
            "extra": "iterations: 2052\ncpu: 343039.961013646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 506126.3530685607,
            "unit": "ns/iter",
            "extra": "iterations: 1385\ncpu: 506097.3285198571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19846.23464620626,
            "unit": "ns/iter",
            "extra": "iterations: 35317\ncpu: 19845.23883682066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 97644.14229856369,
            "unit": "ns/iter",
            "extra": "iterations: 7161\ncpu: 97642.5638877261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 78724.91711651374,
            "unit": "ns/iter",
            "extra": "iterations: 8892\ncpu: 78722.35717498802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 78066.57927101535,
            "unit": "ns/iter",
            "extra": "iterations: 8944\ncpu: 78064.69141323905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 79670.3607789529,
            "unit": "ns/iter",
            "extra": "iterations: 8781\ncpu: 79668.4318414757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 150699.69048644448,
            "unit": "ns/iter",
            "extra": "iterations: 4646\ncpu: 150698.36418424486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 609286.7571802381,
            "unit": "ns/iter",
            "extra": "iterations: 1149\ncpu: 609267.1018276773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 519882.09393486625,
            "unit": "ns/iter",
            "extra": "iterations: 1352\ncpu: 519873.15088757995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 532089.2562737232,
            "unit": "ns/iter",
            "extra": "iterations: 1315\ncpu: 532079.4676806111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 521456.09213482443,
            "unit": "ns/iter",
            "extra": "iterations: 1335\ncpu: 521432.4344569257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 339444.11342705763,
            "unit": "ns/iter",
            "extra": "iterations: 2063\ncpu: 339411.87590886833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 510186.8454809824,
            "unit": "ns/iter",
            "extra": "iterations: 1372\ncpu: 510161.0058309048 ns\nthreads: 1"
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
        "date": 1702489608758,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7437.870864992025,
            "unit": "ns/iter",
            "extra": "iterations: 94498\ncpu: 7437.809265804567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 74619.19868593439,
            "unit": "ns/iter",
            "extra": "iterations: 11415\ncpu: 74617.01270258431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 145147.23688940358,
            "unit": "ns/iter",
            "extra": "iterations: 6121\ncpu: 145144.66590426402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 209675.60211946085,
            "unit": "ns/iter",
            "extra": "iterations: 4152\ncpu: 209665.31791907508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 275165.6109528473,
            "unit": "ns/iter",
            "extra": "iterations: 3159\ncpu: 275152.0101297878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 340830.132237879,
            "unit": "ns/iter",
            "extra": "iterations: 2556\ncpu: 340815.21909233177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 407388.49507734325,
            "unit": "ns/iter",
            "extra": "iterations: 2133\ncpu: 407375.10548523173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 473650.8213507607,
            "unit": "ns/iter",
            "extra": "iterations: 1836\ncpu: 473633.6601307185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 540782.9725343677,
            "unit": "ns/iter",
            "extra": "iterations: 1602\ncpu: 540749.8751560543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5701.974623953127,
            "unit": "ns/iter",
            "extra": "iterations: 122990\ncpu: 5701.717212781521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4838.639023952228,
            "unit": "ns/iter",
            "extra": "iterations: 144788\ncpu: 4838.461060308867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4830.38053293114,
            "unit": "ns/iter",
            "extra": "iterations: 144634\ncpu: 4830.133301989855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4876.6748804807685,
            "unit": "ns/iter",
            "extra": "iterations: 143701\ncpu: 4876.4476238857105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8640.754395317324,
            "unit": "ns/iter",
            "extra": "iterations: 80654\ncpu: 8640.341458576131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 29502.1317412809,
            "unit": "ns/iter",
            "extra": "iterations: 27721\ncpu: 29500.99924245161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 118466.10108152339,
            "unit": "ns/iter",
            "extra": "iterations: 7212\ncpu: 118460.06655574063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 97749.63505320731,
            "unit": "ns/iter",
            "extra": "iterations: 8741\ncpu: 97745.65839148856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 99324.15997205638,
            "unit": "ns/iter",
            "extra": "iterations: 8589\ncpu: 99318.60519268818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 98104.19926113714,
            "unit": "ns/iter",
            "extra": "iterations: 8662\ncpu: 98100.49642114967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 255985.34705527898,
            "unit": "ns/iter",
            "extra": "iterations: 3328\ncpu: 255973.37740384552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2113664.9773244243,
            "unit": "ns/iter",
            "extra": "iterations: 441\ncpu: 2113531.0657596425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1754753.1631878044,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1754654.6489563517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1774352.6274130899,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1774257.9150579146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1767784.1321839837,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1767718.7739463637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1026229.7085650834,
            "unit": "ns/iter",
            "extra": "iterations: 899\ncpu: 1026180.8676306978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1700734.5661764694,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1700645.7720588227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6986584.890000813,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6986519.999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3891004.383333533,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3890890.416666674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8869823.834710443,
            "unit": "ns/iter",
            "extra": "iterations: 121\ncpu: 8869594.214876026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 30467.270225366217,
            "unit": "ns/iter",
            "extra": "iterations: 27688\ncpu: 30466.476451892544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 120570.45208949267,
            "unit": "ns/iter",
            "extra": "iterations: 7107\ncpu: 120568.70690868108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 101482.34968522287,
            "unit": "ns/iter",
            "extra": "iterations: 8419\ncpu: 101480.22330443066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 98645.84917426365,
            "unit": "ns/iter",
            "extra": "iterations: 8659\ncpu: 98643.61935558377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 100057.81339316755,
            "unit": "ns/iter",
            "extra": "iterations: 8467\ncpu: 100055.76945789486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 260123.68916465397,
            "unit": "ns/iter",
            "extra": "iterations: 3304\ncpu: 260118.67433414026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2155164.3764432934,
            "unit": "ns/iter",
            "extra": "iterations: 433\ncpu: 2155120.3233256484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1779845.2385495729,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1779800.7633587755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1820093.9746588187,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1820043.8596491155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1800648.3666028024,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1800639.1554702506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1045037.6614172179,
            "unit": "ns/iter",
            "extra": "iterations: 889\ncpu: 1045015.6355455598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1725715.7425926076,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1725694.629629628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7081960.169999775,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7081639.999999965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4030668.689654837,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4030579.310344845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 28017.645208363254,
            "unit": "ns/iter",
            "extra": "iterations: 29468\ncpu: 28017.14402063239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 119354.08691407126,
            "unit": "ns/iter",
            "extra": "iterations: 7168\ncpu: 119351.84151785706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 98489.42323650724,
            "unit": "ns/iter",
            "extra": "iterations: 8676\ncpu: 98487.30982019329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 99552.40562855046,
            "unit": "ns/iter",
            "extra": "iterations: 8599\ncpu: 99551.29666240314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 99132.25250757205,
            "unit": "ns/iter",
            "extra": "iterations: 8574\ncpu: 99128.2831817116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 258010.81678700304,
            "unit": "ns/iter",
            "extra": "iterations: 3324\ncpu: 258005.62575210442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2125714.1522728386,
            "unit": "ns/iter",
            "extra": "iterations: 440\ncpu: 2125668.409090909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1767781.452651484,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1767759.46969697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1795062.0745698977,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1795049.1395793452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1788454.9846450328,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1788384.8368522164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1033820.8080807863,
            "unit": "ns/iter",
            "extra": "iterations: 891\ncpu: 1033800.4489337824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1717031.9484346316,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1716996.5009208047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2924.1030585607236,
            "unit": "ns/iter",
            "extra": "iterations: 238282\ncpu: 2924.0517538043277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14868.757283614557,
            "unit": "ns/iter",
            "extra": "iterations: 47092\ncpu: 14868.538180582775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12034.043978967315,
            "unit": "ns/iter",
            "extra": "iterations: 58005\ncpu: 12033.843634169474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11880.256820686056,
            "unit": "ns/iter",
            "extra": "iterations: 58975\ncpu: 11880.072912250966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9964.822023596618,
            "unit": "ns/iter",
            "extra": "iterations: 69925\ncpu: 9964.580622095054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 60619.91073437296,
            "unit": "ns/iter",
            "extra": "iterations: 11561\ncpu: 60618.34616382694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 141979.32823023436,
            "unit": "ns/iter",
            "extra": "iterations: 4899\ncpu: 141975.70932843367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36094.61848843807,
            "unit": "ns/iter",
            "extra": "iterations: 19331\ncpu: 36094.05617919438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 36687.55661315032,
            "unit": "ns/iter",
            "extra": "iterations: 19121\ncpu: 36686.663877411855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36083.12178130948,
            "unit": "ns/iter",
            "extra": "iterations: 19379\ncpu: 36082.568759998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 73745.40536559762,
            "unit": "ns/iter",
            "extra": "iterations: 9505\ncpu: 73743.5455023671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 65400.107272899426,
            "unit": "ns/iter",
            "extra": "iterations: 10711\ncpu: 65399.57053496418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19946.340855342838,
            "unit": "ns/iter",
            "extra": "iterations: 35097\ncpu: 19946.22617317721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 97069.42676385939,
            "unit": "ns/iter",
            "extra": "iterations: 7271\ncpu: 97065.506807867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 77463.67780113227,
            "unit": "ns/iter",
            "extra": "iterations: 9041\ncpu: 77458.55546952803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 79010.87103689213,
            "unit": "ns/iter",
            "extra": "iterations: 8863\ncpu: 79009.80480649848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 78766.70759379512,
            "unit": "ns/iter",
            "extra": "iterations: 8902\ncpu: 78761.99730397598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 150970.6858808253,
            "unit": "ns/iter",
            "extra": "iterations: 4632\ncpu: 150969.68911916993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 607705.1974026405,
            "unit": "ns/iter",
            "extra": "iterations: 1155\ncpu: 607695.4978355042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 518540.57395139954,
            "unit": "ns/iter",
            "extra": "iterations: 1359\ncpu: 518531.4937453986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 526069.4099099175,
            "unit": "ns/iter",
            "extra": "iterations: 1332\ncpu: 526055.4804804825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 522235.58999255043,
            "unit": "ns/iter",
            "extra": "iterations: 1339\ncpu: 522192.83047049673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 343053.4848927836,
            "unit": "ns/iter",
            "extra": "iterations: 2052\ncpu: 343039.961013646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 506126.3530685607,
            "unit": "ns/iter",
            "extra": "iterations: 1385\ncpu: 506097.3285198571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19846.23464620626,
            "unit": "ns/iter",
            "extra": "iterations: 35317\ncpu: 19845.23883682066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 97644.14229856369,
            "unit": "ns/iter",
            "extra": "iterations: 7161\ncpu: 97642.5638877261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 78724.91711651374,
            "unit": "ns/iter",
            "extra": "iterations: 8892\ncpu: 78722.35717498802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 78066.57927101535,
            "unit": "ns/iter",
            "extra": "iterations: 8944\ncpu: 78064.69141323905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 79670.3607789529,
            "unit": "ns/iter",
            "extra": "iterations: 8781\ncpu: 79668.4318414757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 150699.69048644448,
            "unit": "ns/iter",
            "extra": "iterations: 4646\ncpu: 150698.36418424486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 609286.7571802381,
            "unit": "ns/iter",
            "extra": "iterations: 1149\ncpu: 609267.1018276773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 519882.09393486625,
            "unit": "ns/iter",
            "extra": "iterations: 1352\ncpu: 519873.15088757995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 532089.2562737232,
            "unit": "ns/iter",
            "extra": "iterations: 1315\ncpu: 532079.4676806111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 521456.09213482443,
            "unit": "ns/iter",
            "extra": "iterations: 1335\ncpu: 521432.4344569257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 339444.11342705763,
            "unit": "ns/iter",
            "extra": "iterations: 2063\ncpu: 339411.87590886833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 510186.8454809824,
            "unit": "ns/iter",
            "extra": "iterations: 1372\ncpu: 510161.0058309048 ns\nthreads: 1"
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
        "date": 1702489608758,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7437.870864992025,
            "unit": "ns/iter",
            "extra": "iterations: 94498\ncpu: 7437.809265804567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 74619.19868593439,
            "unit": "ns/iter",
            "extra": "iterations: 11415\ncpu: 74617.01270258431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 145147.23688940358,
            "unit": "ns/iter",
            "extra": "iterations: 6121\ncpu: 145144.66590426402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 209675.60211946085,
            "unit": "ns/iter",
            "extra": "iterations: 4152\ncpu: 209665.31791907508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 275165.6109528473,
            "unit": "ns/iter",
            "extra": "iterations: 3159\ncpu: 275152.0101297878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 340830.132237879,
            "unit": "ns/iter",
            "extra": "iterations: 2556\ncpu: 340815.21909233177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 407388.49507734325,
            "unit": "ns/iter",
            "extra": "iterations: 2133\ncpu: 407375.10548523173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 473650.8213507607,
            "unit": "ns/iter",
            "extra": "iterations: 1836\ncpu: 473633.6601307185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 540782.9725343677,
            "unit": "ns/iter",
            "extra": "iterations: 1602\ncpu: 540749.8751560543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5701.974623953127,
            "unit": "ns/iter",
            "extra": "iterations: 122990\ncpu: 5701.717212781521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4838.639023952228,
            "unit": "ns/iter",
            "extra": "iterations: 144788\ncpu: 4838.461060308867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4830.38053293114,
            "unit": "ns/iter",
            "extra": "iterations: 144634\ncpu: 4830.133301989855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4876.6748804807685,
            "unit": "ns/iter",
            "extra": "iterations: 143701\ncpu: 4876.4476238857105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8640.754395317324,
            "unit": "ns/iter",
            "extra": "iterations: 80654\ncpu: 8640.341458576131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 29502.1317412809,
            "unit": "ns/iter",
            "extra": "iterations: 27721\ncpu: 29500.99924245161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 118466.10108152339,
            "unit": "ns/iter",
            "extra": "iterations: 7212\ncpu: 118460.06655574063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 97749.63505320731,
            "unit": "ns/iter",
            "extra": "iterations: 8741\ncpu: 97745.65839148856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 99324.15997205638,
            "unit": "ns/iter",
            "extra": "iterations: 8589\ncpu: 99318.60519268818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 98104.19926113714,
            "unit": "ns/iter",
            "extra": "iterations: 8662\ncpu: 98100.49642114967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 255985.34705527898,
            "unit": "ns/iter",
            "extra": "iterations: 3328\ncpu: 255973.37740384552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2113664.9773244243,
            "unit": "ns/iter",
            "extra": "iterations: 441\ncpu: 2113531.0657596425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1754753.1631878044,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1754654.6489563517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1774352.6274130899,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1774257.9150579146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1767784.1321839837,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1767718.7739463637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1026229.7085650834,
            "unit": "ns/iter",
            "extra": "iterations: 899\ncpu: 1026180.8676306978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1700734.5661764694,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1700645.7720588227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6986584.890000813,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6986519.999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3891004.383333533,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3890890.416666674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8869823.834710443,
            "unit": "ns/iter",
            "extra": "iterations: 121\ncpu: 8869594.214876026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 30467.270225366217,
            "unit": "ns/iter",
            "extra": "iterations: 27688\ncpu: 30466.476451892544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 120570.45208949267,
            "unit": "ns/iter",
            "extra": "iterations: 7107\ncpu: 120568.70690868108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 101482.34968522287,
            "unit": "ns/iter",
            "extra": "iterations: 8419\ncpu: 101480.22330443066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 98645.84917426365,
            "unit": "ns/iter",
            "extra": "iterations: 8659\ncpu: 98643.61935558377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 100057.81339316755,
            "unit": "ns/iter",
            "extra": "iterations: 8467\ncpu: 100055.76945789486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 260123.68916465397,
            "unit": "ns/iter",
            "extra": "iterations: 3304\ncpu: 260118.67433414026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2155164.3764432934,
            "unit": "ns/iter",
            "extra": "iterations: 433\ncpu: 2155120.3233256484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1779845.2385495729,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1779800.7633587755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1820093.9746588187,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1820043.8596491155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1800648.3666028024,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1800639.1554702506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1045037.6614172179,
            "unit": "ns/iter",
            "extra": "iterations: 889\ncpu: 1045015.6355455598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1725715.7425926076,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1725694.629629628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7081960.169999775,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7081639.999999965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4030668.689654837,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4030579.310344845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 28017.645208363254,
            "unit": "ns/iter",
            "extra": "iterations: 29468\ncpu: 28017.14402063239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 119354.08691407126,
            "unit": "ns/iter",
            "extra": "iterations: 7168\ncpu: 119351.84151785706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 98489.42323650724,
            "unit": "ns/iter",
            "extra": "iterations: 8676\ncpu: 98487.30982019329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 99552.40562855046,
            "unit": "ns/iter",
            "extra": "iterations: 8599\ncpu: 99551.29666240314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 99132.25250757205,
            "unit": "ns/iter",
            "extra": "iterations: 8574\ncpu: 99128.2831817116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 258010.81678700304,
            "unit": "ns/iter",
            "extra": "iterations: 3324\ncpu: 258005.62575210442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2125714.1522728386,
            "unit": "ns/iter",
            "extra": "iterations: 440\ncpu: 2125668.409090909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1767781.452651484,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1767759.46969697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1795062.0745698977,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1795049.1395793452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1788454.9846450328,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1788384.8368522164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1033820.8080807863,
            "unit": "ns/iter",
            "extra": "iterations: 891\ncpu: 1033800.4489337824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1717031.9484346316,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1716996.5009208047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2924.1030585607236,
            "unit": "ns/iter",
            "extra": "iterations: 238282\ncpu: 2924.0517538043277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14868.757283614557,
            "unit": "ns/iter",
            "extra": "iterations: 47092\ncpu: 14868.538180582775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12034.043978967315,
            "unit": "ns/iter",
            "extra": "iterations: 58005\ncpu: 12033.843634169474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11880.256820686056,
            "unit": "ns/iter",
            "extra": "iterations: 58975\ncpu: 11880.072912250966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9964.822023596618,
            "unit": "ns/iter",
            "extra": "iterations: 69925\ncpu: 9964.580622095054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 60619.91073437296,
            "unit": "ns/iter",
            "extra": "iterations: 11561\ncpu: 60618.34616382694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 141979.32823023436,
            "unit": "ns/iter",
            "extra": "iterations: 4899\ncpu: 141975.70932843367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36094.61848843807,
            "unit": "ns/iter",
            "extra": "iterations: 19331\ncpu: 36094.05617919438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 36687.55661315032,
            "unit": "ns/iter",
            "extra": "iterations: 19121\ncpu: 36686.663877411855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36083.12178130948,
            "unit": "ns/iter",
            "extra": "iterations: 19379\ncpu: 36082.568759998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 73745.40536559762,
            "unit": "ns/iter",
            "extra": "iterations: 9505\ncpu: 73743.5455023671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 65400.107272899426,
            "unit": "ns/iter",
            "extra": "iterations: 10711\ncpu: 65399.57053496418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19946.340855342838,
            "unit": "ns/iter",
            "extra": "iterations: 35097\ncpu: 19946.22617317721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 97069.42676385939,
            "unit": "ns/iter",
            "extra": "iterations: 7271\ncpu: 97065.506807867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 77463.67780113227,
            "unit": "ns/iter",
            "extra": "iterations: 9041\ncpu: 77458.55546952803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 79010.87103689213,
            "unit": "ns/iter",
            "extra": "iterations: 8863\ncpu: 79009.80480649848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 78766.70759379512,
            "unit": "ns/iter",
            "extra": "iterations: 8902\ncpu: 78761.99730397598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 150970.6858808253,
            "unit": "ns/iter",
            "extra": "iterations: 4632\ncpu: 150969.68911916993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 607705.1974026405,
            "unit": "ns/iter",
            "extra": "iterations: 1155\ncpu: 607695.4978355042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 518540.57395139954,
            "unit": "ns/iter",
            "extra": "iterations: 1359\ncpu: 518531.4937453986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 526069.4099099175,
            "unit": "ns/iter",
            "extra": "iterations: 1332\ncpu: 526055.4804804825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 522235.58999255043,
            "unit": "ns/iter",
            "extra": "iterations: 1339\ncpu: 522192.83047049673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 343053.4848927836,
            "unit": "ns/iter",
            "extra": "iterations: 2052\ncpu: 343039.961013646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 506126.3530685607,
            "unit": "ns/iter",
            "extra": "iterations: 1385\ncpu: 506097.3285198571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19846.23464620626,
            "unit": "ns/iter",
            "extra": "iterations: 35317\ncpu: 19845.23883682066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 97644.14229856369,
            "unit": "ns/iter",
            "extra": "iterations: 7161\ncpu: 97642.5638877261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 78724.91711651374,
            "unit": "ns/iter",
            "extra": "iterations: 8892\ncpu: 78722.35717498802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 78066.57927101535,
            "unit": "ns/iter",
            "extra": "iterations: 8944\ncpu: 78064.69141323905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 79670.3607789529,
            "unit": "ns/iter",
            "extra": "iterations: 8781\ncpu: 79668.4318414757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 150699.69048644448,
            "unit": "ns/iter",
            "extra": "iterations: 4646\ncpu: 150698.36418424486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 609286.7571802381,
            "unit": "ns/iter",
            "extra": "iterations: 1149\ncpu: 609267.1018276773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 519882.09393486625,
            "unit": "ns/iter",
            "extra": "iterations: 1352\ncpu: 519873.15088757995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 532089.2562737232,
            "unit": "ns/iter",
            "extra": "iterations: 1315\ncpu: 532079.4676806111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 521456.09213482443,
            "unit": "ns/iter",
            "extra": "iterations: 1335\ncpu: 521432.4344569257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 339444.11342705763,
            "unit": "ns/iter",
            "extra": "iterations: 2063\ncpu: 339411.87590886833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 510186.8454809824,
            "unit": "ns/iter",
            "extra": "iterations: 1372\ncpu: 510161.0058309048 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}