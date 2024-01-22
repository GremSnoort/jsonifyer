window.BENCHMARK_DATA = {
  "lastUpdate": 1705957884110,
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
        "date": 1702492195318,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7520.267566205452,
            "unit": "ns/iter",
            "extra": "iterations: 93233\ncpu: 7520.294316390119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 72942.4575431445,
            "unit": "ns/iter",
            "extra": "iterations: 11706\ncpu: 72939.9196992995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 140216.26968440786,
            "unit": "ns/iter",
            "extra": "iterations: 6274\ncpu: 140215.66783551165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 207563.82059169794,
            "unit": "ns/iter",
            "extra": "iterations: 4225\ncpu: 207561.79881656813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 272191.0997474546,
            "unit": "ns/iter",
            "extra": "iterations: 3168\ncpu: 272189.01515151514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 346665.90557942126,
            "unit": "ns/iter",
            "extra": "iterations: 2563\ncpu: 346657.70581349987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 403074.27015750826,
            "unit": "ns/iter",
            "extra": "iterations: 2158\ncpu: 403055.7924003707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 467061.31652362476,
            "unit": "ns/iter",
            "extra": "iterations: 1864\ncpu: 467039.9141630905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 533303.0445665586,
            "unit": "ns/iter",
            "extra": "iterations: 1638\ncpu: 533269.0476190478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5762.545998005092,
            "unit": "ns/iter",
            "extra": "iterations: 121277\ncpu: 5762.327564171275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4896.056892963198,
            "unit": "ns/iter",
            "extra": "iterations: 142689\ncpu: 4896.005999060897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4787.410724375858,
            "unit": "ns/iter",
            "extra": "iterations: 141584\ncpu: 4787.33613967681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4896.397505654792,
            "unit": "ns/iter",
            "extra": "iterations: 142803\ncpu: 4896.407638494995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8748.572133061185,
            "unit": "ns/iter",
            "extra": "iterations: 79693\ncpu: 8748.586450503797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 30657.74655300035,
            "unit": "ns/iter",
            "extra": "iterations: 26980\ncpu: 30657.794662713186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 120477.1237302536,
            "unit": "ns/iter",
            "extra": "iterations: 7088\ncpu: 120476.36851015796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 99445.08497036365,
            "unit": "ns/iter",
            "extra": "iterations: 8603\ncpu: 99444.05439962819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 105697.1475937082,
            "unit": "ns/iter",
            "extra": "iterations: 8083\ncpu: 105697.30298156595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 102708.8996411468,
            "unit": "ns/iter",
            "extra": "iterations: 8360\ncpu: 102708.25358851659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 273324.69673704455,
            "unit": "ns/iter",
            "extra": "iterations: 3126\ncpu: 273323.06461932237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2123316.7557079056,
            "unit": "ns/iter",
            "extra": "iterations: 438\ncpu: 2123303.424657531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1777862.4990511555,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1777838.3301707767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1802668.15250965,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1802649.6138996137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1820155.5117185465,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1820105.6640625019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1072892.3179191158,
            "unit": "ns/iter",
            "extra": "iterations: 865\ncpu: 1072894.21965318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1733646.134328371,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1733633.0223880613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7194760.459999544,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7194664.000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4064214.3187770713,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4064062.0087336157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9062952.858333992,
            "unit": "ns/iter",
            "extra": "iterations: 120\ncpu: 9062892.499999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 29953.210819009324,
            "unit": "ns/iter",
            "extra": "iterations: 27692\ncpu: 29953.00086667621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 122627.04334720722,
            "unit": "ns/iter",
            "extra": "iterations: 6967\ncpu: 122625.764317497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 102506.76064786458,
            "unit": "ns/iter",
            "extra": "iterations: 8335\ncpu: 102502.53149370097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 101850.4013807905,
            "unit": "ns/iter",
            "extra": "iterations: 8401\ncpu: 101849.79169146557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 104465.17507673087,
            "unit": "ns/iter",
            "extra": "iterations: 8145\ncpu: 104463.17986494822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 266746.30905694334,
            "unit": "ns/iter",
            "extra": "iterations: 3213\ncpu: 266747.4945533771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2182720.6605079626,
            "unit": "ns/iter",
            "extra": "iterations: 433\ncpu: 2182665.127020779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1794058.364683332,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1794065.0671785153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1830379.1532417957,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1830366.0117878197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1828939.422924989,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1828926.086956517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1074614.7363531324,
            "unit": "ns/iter",
            "extra": "iterations: 861\ncpu: 1074587.9210220654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1747387.4123134892,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1747377.9850746258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7323501.07000002,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7323217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4236243.072072129,
            "unit": "ns/iter",
            "extra": "iterations: 222\ncpu: 4236163.063063061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 28952.83623117034,
            "unit": "ns/iter",
            "extra": "iterations: 28412\ncpu: 28952.935379417137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 119683.0659202254,
            "unit": "ns/iter",
            "extra": "iterations: 7145\ncpu: 119683.40097970644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 99919.25798526642,
            "unit": "ns/iter",
            "extra": "iterations: 8547\ncpu: 99918.11161811167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 103204.25456510924,
            "unit": "ns/iter",
            "extra": "iterations: 8324\ncpu: 103203.5920230658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 102890.03177659621,
            "unit": "ns/iter",
            "extra": "iterations: 8308\ncpu: 102886.90418873372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 272468.7141952099,
            "unit": "ns/iter",
            "extra": "iterations: 3156\ncpu: 272467.5538656526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2138177.8486239277,
            "unit": "ns/iter",
            "extra": "iterations: 436\ncpu: 2138162.6146788863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1806063.1168582386,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1806006.7049808523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1809857.524366516,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1809863.742690063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1828735.5540273455,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1828723.575638508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1076232.7798377462,
            "unit": "ns/iter",
            "extra": "iterations: 863\ncpu: 1076236.500579369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1742492.2429905292,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1742415.887850466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2988.3288553049133,
            "unit": "ns/iter",
            "extra": "iterations: 234106\ncpu: 2988.3407516253205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15025.785115099981,
            "unit": "ns/iter",
            "extra": "iterations: 46611\ncpu: 15025.371693377112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12289.777107904563,
            "unit": "ns/iter",
            "extra": "iterations: 57059\ncpu: 12289.815804693431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12289.956360699856,
            "unit": "ns/iter",
            "extra": "iterations: 56967\ncpu: 12289.857285797001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10144.780675713622,
            "unit": "ns/iter",
            "extra": "iterations: 69053\ncpu: 10144.528116084783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 62833.34777138763,
            "unit": "ns/iter",
            "extra": "iterations: 11128\ncpu: 62833.53702372378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 139910.81289935653,
            "unit": "ns/iter",
            "extra": "iterations: 5008\ncpu: 139909.0654952083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36584.5150566209,
            "unit": "ns/iter",
            "extra": "iterations: 19161\ncpu: 36584.65111424307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 36604.43382199308,
            "unit": "ns/iter",
            "extra": "iterations: 19100\ncpu: 36602.41361256516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36492.59692099614,
            "unit": "ns/iter",
            "extra": "iterations: 19227\ncpu: 36492.770583034035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 74585.941151476,
            "unit": "ns/iter",
            "extra": "iterations: 9414\ncpu: 74581.11323560584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 65737.70265703148,
            "unit": "ns/iter",
            "extra": "iterations: 10651\ncpu: 65738.0339874187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19889.27340377044,
            "unit": "ns/iter",
            "extra": "iterations: 35208\ncpu: 19888.86616678047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 98193.64554484244,
            "unit": "ns/iter",
            "extra": "iterations: 7149\ncpu: 98193.84529304766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 77743.09753935243,
            "unit": "ns/iter",
            "extra": "iterations: 9022\ncpu: 77742.0084238527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 77582.71164693189,
            "unit": "ns/iter",
            "extra": "iterations: 9041\ncpu: 77580.61055193034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 78075.2526456541,
            "unit": "ns/iter",
            "extra": "iterations: 8977\ncpu: 78075.45950763005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 152951.65312843682,
            "unit": "ns/iter",
            "extra": "iterations: 4555\ncpu: 152946.12513721027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 614157.1026316079,
            "unit": "ns/iter",
            "extra": "iterations: 1140\ncpu: 614160.9649122771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 525431.1726726936,
            "unit": "ns/iter",
            "extra": "iterations: 1332\ncpu: 525433.2582582651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 527847.77300154,
            "unit": "ns/iter",
            "extra": "iterations: 1326\ncpu: 527841.4781297093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 530339.4950795338,
            "unit": "ns/iter",
            "extra": "iterations: 1321\ncpu: 530340.7267221881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 346934.4580228201,
            "unit": "ns/iter",
            "extra": "iterations: 2013\ncpu: 346922.75211127225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 515468.3948529236,
            "unit": "ns/iter",
            "extra": "iterations: 1360\ncpu: 515469.9999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20292.221574934792,
            "unit": "ns/iter",
            "extra": "iterations: 34503\ncpu: 20291.945627916237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 97855.75697154767,
            "unit": "ns/iter",
            "extra": "iterations: 7172\ncpu: 97853.98773006063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 77967.40309818351,
            "unit": "ns/iter",
            "extra": "iterations: 8973\ncpu: 77966.74467847933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 78401.40159067794,
            "unit": "ns/iter",
            "extra": "iterations: 8927\ncpu: 78398.27489638212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 79729.56363221804,
            "unit": "ns/iter",
            "extra": "iterations: 8777\ncpu: 79729.88492651223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 154262.3784378448,
            "unit": "ns/iter",
            "extra": "iterations: 4545\ncpu: 154260.83608360842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 614102.024496907,
            "unit": "ns/iter",
            "extra": "iterations: 1143\ncpu: 614095.4505686823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 523514.67739518755,
            "unit": "ns/iter",
            "extra": "iterations: 1336\ncpu: 523510.2544910209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 529094.4641509205,
            "unit": "ns/iter",
            "extra": "iterations: 1325\ncpu: 529074.264150941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 528864.0598031363,
            "unit": "ns/iter",
            "extra": "iterations: 1321\ncpu: 528866.5404996142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 350167.3244734568,
            "unit": "ns/iter",
            "extra": "iterations: 1994\ncpu: 350164.54363088985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 516212.95568684203,
            "unit": "ns/iter",
            "extra": "iterations: 1354\ncpu: 516215.21418020874 ns\nthreads: 1"
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
        "date": 1702503255857,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7763.688297139661,
            "unit": "ns/iter",
            "extra": "iterations: 90166\ncpu: 7763.04593749307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 73343.77550845167,
            "unit": "ns/iter",
            "extra": "iterations: 11653\ncpu: 73339.57779112675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 141775.33279716526,
            "unit": "ns/iter",
            "extra": "iterations: 6217\ncpu: 141773.78156667206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 210940.07679345214,
            "unit": "ns/iter",
            "extra": "iterations: 4154\ncpu: 210935.86904188734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 278161.0051380922,
            "unit": "ns/iter",
            "extra": "iterations: 3114\ncpu: 278158.18882466265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 345170.0413354476,
            "unit": "ns/iter",
            "extra": "iterations: 2516\ncpu: 345157.11446740845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 411178.7743759303,
            "unit": "ns/iter",
            "extra": "iterations: 2123\ncpu: 411164.20160150755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 477506.20591459126,
            "unit": "ns/iter",
            "extra": "iterations: 1826\ncpu: 477459.2552026285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 545808.0423939531,
            "unit": "ns/iter",
            "extra": "iterations: 1604\ncpu: 545775.9975062344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5833.332771441012,
            "unit": "ns/iter",
            "extra": "iterations: 119833\ncpu: 5832.741398446174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4938.150765764855,
            "unit": "ns/iter",
            "extra": "iterations: 141166\ncpu: 4937.596163382114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4921.378133048694,
            "unit": "ns/iter",
            "extra": "iterations: 142114\ncpu: 4921.423645805474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4945.770150263148,
            "unit": "ns/iter",
            "extra": "iterations: 141884\ncpu: 4945.681683628874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8528.423069435621,
            "unit": "ns/iter",
            "extra": "iterations: 82178\ncpu: 8528.378641485562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 29808.277041579764,
            "unit": "ns/iter",
            "extra": "iterations: 27393\ncpu: 29807.410652356408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 117406.13911235197,
            "unit": "ns/iter",
            "extra": "iterations: 7210\ncpu: 117401.85852981993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 98107.324404421,
            "unit": "ns/iter",
            "extra": "iterations: 8773\ncpu: 98103.1232189671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 99589.98273447747,
            "unit": "ns/iter",
            "extra": "iterations: 8572\ncpu: 99584.41437237506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 97531.60199289928,
            "unit": "ns/iter",
            "extra": "iterations: 8731\ncpu: 97525.86187149232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 260902.21919039893,
            "unit": "ns/iter",
            "extra": "iterations: 3335\ncpu: 260892.05397301345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2135460.262672741,
            "unit": "ns/iter",
            "extra": "iterations: 434\ncpu: 2135324.654377878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1781838.479923628,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1781780.879541113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1756890.451428522,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1756825.9047619014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1780506.8565965148,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1780491.586998092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1056101.8232611322,
            "unit": "ns/iter",
            "extra": "iterations: 877\ncpu: 1056070.923603191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1719016.335807117,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1719030.9833024119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7104807.030000302,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7104630.000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3976709.1957449513,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3976742.1276595765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9004391.603306701,
            "unit": "ns/iter",
            "extra": "iterations: 121\ncpu: 9003869.421487594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 28884.53995977434,
            "unit": "ns/iter",
            "extra": "iterations: 28341\ncpu: 28882.48121096634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 119137.57699287897,
            "unit": "ns/iter",
            "extra": "iterations: 7163\ncpu: 119134.1756247384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 102253.42076960462,
            "unit": "ns/iter",
            "extra": "iterations: 8368\ncpu: 102250.01195028645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 98385.38196928671,
            "unit": "ns/iter",
            "extra": "iterations: 8663\ncpu: 98383.42375620513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 101334.02134765357,
            "unit": "ns/iter",
            "extra": "iterations: 8385\ncpu: 101330.96004770354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 258677.52734836124,
            "unit": "ns/iter",
            "extra": "iterations: 3364\ncpu: 258674.2865636151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2160510.519721628,
            "unit": "ns/iter",
            "extra": "iterations: 431\ncpu: 2160475.8700696086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1808054.60852721,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1808035.2713178361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1785842.8910132635,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1785741.6826003788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1788885.04030712,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1788865.0671785052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1054982.493212668,
            "unit": "ns/iter",
            "extra": "iterations: 884\ncpu: 1054946.1538461517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1731365.9757914464,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1731321.6014897705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7160895.539999502,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7160410.999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3902095.6066944418,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3901904.1841004263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 28106.625060041606,
            "unit": "ns/iter",
            "extra": "iterations: 29146\ncpu: 28106.086598504182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 116889.85945426949,
            "unit": "ns/iter",
            "extra": "iterations: 7293\ncpu: 116885.94542712222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 97405.81767260801,
            "unit": "ns/iter",
            "extra": "iterations: 8748\ncpu: 97400.6630086876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 98960.43322551047,
            "unit": "ns/iter",
            "extra": "iterations: 8656\ncpu: 98958.68761552652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 101075.79356599672,
            "unit": "ns/iter",
            "extra": "iterations: 8424\ncpu: 101072.3171889833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 262007.62228917627,
            "unit": "ns/iter",
            "extra": "iterations: 3320\ncpu: 262001.47590361565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2161331.1977011235,
            "unit": "ns/iter",
            "extra": "iterations: 435\ncpu: 2161248.2758620665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1822569.7360309816,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1822548.9402697498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1766790.844827584,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1766774.521072785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1789184.7543185249,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1789101.535508648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1058715.2771493306,
            "unit": "ns/iter",
            "extra": "iterations: 884\ncpu: 1058682.239819009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1726529.8826815768,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1726543.0167597707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2989.0432486181176,
            "unit": "ns/iter",
            "extra": "iterations: 235337\ncpu: 2989.030199246207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15079.05224732374,
            "unit": "ns/iter",
            "extra": "iterations: 46433\ncpu: 15078.976159197122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11617.86410686729,
            "unit": "ns/iter",
            "extra": "iterations: 60187\ncpu: 11617.409075049383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12045.140858177452,
            "unit": "ns/iter",
            "extra": "iterations: 58030\ncpu: 12044.94054799241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10060.04557205714,
            "unit": "ns/iter",
            "extra": "iterations: 69626\ncpu: 10059.892856116943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 60263.48828595807,
            "unit": "ns/iter",
            "extra": "iterations: 11610\ncpu: 60262.782084410144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 139495.5984455899,
            "unit": "ns/iter",
            "extra": "iterations: 5018\ncpu: 139493.44360302822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36635.10835250021,
            "unit": "ns/iter",
            "extra": "iterations: 19132\ncpu: 36632.02487978232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 36422.630946239595,
            "unit": "ns/iter",
            "extra": "iterations: 19382\ncpu: 36417.81033949015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36362.534503353614,
            "unit": "ns/iter",
            "extra": "iterations: 19259\ncpu: 36360.25234955103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 70682.51954069098,
            "unit": "ns/iter",
            "extra": "iterations: 9928\ncpu: 70677.63900080576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 65063.687720931885,
            "unit": "ns/iter",
            "extra": "iterations: 10750\ncpu: 65061.00465116221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19675.524997187087,
            "unit": "ns/iter",
            "extra": "iterations: 35564\ncpu: 19675.466764143715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 98091.28253789156,
            "unit": "ns/iter",
            "extra": "iterations: 7061\ncpu: 98090.32714913084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 78858.44054998465,
            "unit": "ns/iter",
            "extra": "iterations: 8873\ncpu: 78851.01994815709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 76688.182206166,
            "unit": "ns/iter",
            "extra": "iterations: 9138\ncpu: 76686.66010067833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 79102.46153845271,
            "unit": "ns/iter",
            "extra": "iterations: 8853\ncpu: 79102.37207726177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 152098.9565406416,
            "unit": "ns/iter",
            "extra": "iterations: 4602\ncpu: 152096.84919600276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 626615.6794642898,
            "unit": "ns/iter",
            "extra": "iterations: 1120\ncpu: 626602.321428571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 533371.2437166943,
            "unit": "ns/iter",
            "extra": "iterations: 1313\ncpu: 533375.0952018287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 523408.1998508228,
            "unit": "ns/iter",
            "extra": "iterations: 1341\ncpu: 523364.0566741244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 528195.1543674703,
            "unit": "ns/iter",
            "extra": "iterations: 1328\ncpu: 528178.0873493958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 344862.60345675185,
            "unit": "ns/iter",
            "extra": "iterations: 2025\ncpu: 344847.6049382696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 516555.77917278203,
            "unit": "ns/iter",
            "extra": "iterations: 1354\ncpu: 516553.2496307245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19524.26462200773,
            "unit": "ns/iter",
            "extra": "iterations: 35768\ncpu: 19524.161261462872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 101083.69448864946,
            "unit": "ns/iter",
            "extra": "iterations: 6913\ncpu: 101078.57659482007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 79685.77513918946,
            "unit": "ns/iter",
            "extra": "iterations: 8801\ncpu: 79683.29735257475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 76982.66765449166,
            "unit": "ns/iter",
            "extra": "iterations: 9111\ncpu: 76981.13269674097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 79244.40828335886,
            "unit": "ns/iter",
            "extra": "iterations: 8837\ncpu: 79242.26547470975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 151229.89175146422,
            "unit": "ns/iter",
            "extra": "iterations: 4619\ncpu: 151229.33535397417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 626018.5112107685,
            "unit": "ns/iter",
            "extra": "iterations: 1115\ncpu: 625995.7847533625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 528315.4920754278,
            "unit": "ns/iter",
            "extra": "iterations: 1325\ncpu: 528295.3207547228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 519805.8109711506,
            "unit": "ns/iter",
            "extra": "iterations: 1349\ncpu: 519785.47071905405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 524383.164547486,
            "unit": "ns/iter",
            "extra": "iterations: 1337\ncpu: 524377.8608825748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 342049.83414873946,
            "unit": "ns/iter",
            "extra": "iterations: 2044\ncpu: 342044.5205479394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 515097.6508875614,
            "unit": "ns/iter",
            "extra": "iterations: 1352\ncpu: 515078.03254438256 ns\nthreads: 1"
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
        "date": 1705574920662,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7737.360375465277,
            "unit": "ns/iter",
            "extra": "iterations: 90661\ncpu: 7737.138350558675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 74271.18739054694,
            "unit": "ns/iter",
            "extra": "iterations: 11420\ncpu: 74268.57267950963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 142091.49510123942,
            "unit": "ns/iter",
            "extra": "iterations: 6124\ncpu: 142088.89614630965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 208623.75826294764,
            "unit": "ns/iter",
            "extra": "iterations: 4145\ncpu: 208619.66224366694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 280017.59377118736,
            "unit": "ns/iter",
            "extra": "iterations: 2954\ncpu: 280007.3459715638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 340656.1375786162,
            "unit": "ns/iter",
            "extra": "iterations: 2544\ncpu: 340634.3946540879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 406683.4508697499,
            "unit": "ns/iter",
            "extra": "iterations: 2127\ncpu: 406670.7099200749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 474073.1601307343,
            "unit": "ns/iter",
            "extra": "iterations: 1836\ncpu: 474035.07625272375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 540362.6365336789,
            "unit": "ns/iter",
            "extra": "iterations: 1604\ncpu: 540342.3940149631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6271.067098104347,
            "unit": "ns/iter",
            "extra": "iterations: 118364\ncpu: 6270.911763711946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4966.595125792954,
            "unit": "ns/iter",
            "extra": "iterations: 111731\ncpu: 4966.556282499922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5108.146221229112,
            "unit": "ns/iter",
            "extra": "iterations: 142811\ncpu: 5108.04139737135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4938.0934252400175,
            "unit": "ns/iter",
            "extra": "iterations: 142028\ncpu: 4937.901681358611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8731.633258742615,
            "unit": "ns/iter",
            "extra": "iterations: 79991\ncpu: 8731.459789226266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 29338.7471181843,
            "unit": "ns/iter",
            "extra": "iterations: 27847\ncpu: 29338.011275900495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 119894.18995510369,
            "unit": "ns/iter",
            "extra": "iterations: 7128\ncpu: 119890.4040404041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 98312.03064516418,
            "unit": "ns/iter",
            "extra": "iterations: 8680\ncpu: 98309.33179723521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 99839.95135071789,
            "unit": "ns/iter",
            "extra": "iterations: 8551\ncpu: 99837.00152028976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 99196.32689863535,
            "unit": "ns/iter",
            "extra": "iterations: 8651\ncpu: 99193.01814819094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 270470.6417816871,
            "unit": "ns/iter",
            "extra": "iterations: 3188\ncpu: 270459.7553324968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2126023.693363907,
            "unit": "ns/iter",
            "extra": "iterations: 437\ncpu: 2125945.537757439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1791899.9810247372,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1791854.459203033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1804536.2846003566,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1804501.169590641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1775076.2557250515,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1775033.9694656515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1048735.6903954889,
            "unit": "ns/iter",
            "extra": "iterations: 885\ncpu: 1048702.1468926545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1714608.235514125,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1714580.186915885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7107455.159999745,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7107199.000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4095039.3584069437,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4094942.9203539784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8991384.628098628,
            "unit": "ns/iter",
            "extra": "iterations: 121\ncpu: 8990831.40495869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 28990.203064862846,
            "unit": "ns/iter",
            "extra": "iterations: 28060\ncpu: 28989.640057020613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 122085.7238367944,
            "unit": "ns/iter",
            "extra": "iterations: 6985\ncpu: 122083.53614888978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 102133.45457822052,
            "unit": "ns/iter",
            "extra": "iterations: 8322\ncpu: 102129.70439798145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 98523.69525462892,
            "unit": "ns/iter",
            "extra": "iterations: 8640\ncpu: 98519.65277777854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 100478.0446544568,
            "unit": "ns/iter",
            "extra": "iterations: 8465\ncpu: 100474.89663319588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 270516.0403882276,
            "unit": "ns/iter",
            "extra": "iterations: 3194\ncpu: 270496.0551033188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2148251.0046188263,
            "unit": "ns/iter",
            "extra": "iterations: 433\ncpu: 2148162.124711309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1778065.992380973,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1777983.8095238109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1821970.4148727383,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1821900.0000000093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1789617.278311046,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1789513.819577736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1063633.631999957,
            "unit": "ns/iter",
            "extra": "iterations: 875\ncpu: 1063580.457142856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1735789.9664804006,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1735672.439478579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7166204.729999209,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7166049.999999941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4101340.602619728,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4101013.1004366535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 28249.539315068323,
            "unit": "ns/iter",
            "extra": "iterations: 29200\ncpu: 28248.493150684826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 118652.21728841489,
            "unit": "ns/iter",
            "extra": "iterations: 7184\ncpu: 118646.6314031174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 98069.04740536523,
            "unit": "ns/iter",
            "extra": "iterations: 8691\ncpu: 98067.863306869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 98779.41132948121,
            "unit": "ns/iter",
            "extra": "iterations: 8650\ncpu: 98776.34682080931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 100069.31387201863,
            "unit": "ns/iter",
            "extra": "iterations: 8564\ncpu: 100065.99719757178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 271621.373626394,
            "unit": "ns/iter",
            "extra": "iterations: 3185\ncpu: 271613.56357927783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2140383.591743238,
            "unit": "ns/iter",
            "extra": "iterations: 436\ncpu: 2140354.357798163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1784412.1835562405,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1784374.7609942635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1835742.4694280892,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1835571.7948717973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1797115.496123995,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1797090.5038759718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1059501.4828766384,
            "unit": "ns/iter",
            "extra": "iterations: 876\ncpu: 1059450.1141552462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1736767.2737431065,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1736734.078212293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3022.2141170056525,
            "unit": "ns/iter",
            "extra": "iterations: 231168\ncpu: 3022.1220065061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15457.655673288345,
            "unit": "ns/iter",
            "extra": "iterations: 45300\ncpu: 15457.339955849908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11950.000483500151,
            "unit": "ns/iter",
            "extra": "iterations: 57911\ncpu: 11949.757386334186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11359.421058611013,
            "unit": "ns/iter",
            "extra": "iterations: 61609\ncpu: 11359.285169374687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10176.655886796832,
            "unit": "ns/iter",
            "extra": "iterations: 68832\ncpu: 10176.356927010724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 62582.743471582406,
            "unit": "ns/iter",
            "extra": "iterations: 11067\ncpu: 62580.157224180024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 135854.83877827605,
            "unit": "ns/iter",
            "extra": "iterations: 5173\ncpu: 135851.07287840676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 37257.34748109533,
            "unit": "ns/iter",
            "extra": "iterations: 18778\ncpu: 37256.11353711821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37583.956517072686,
            "unit": "ns/iter",
            "extra": "iterations: 18628\ncpu: 37582.80008589235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 37025.31024064756,
            "unit": "ns/iter",
            "extra": "iterations: 18866\ncpu: 37024.175765927845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 72392.1481826644,
            "unit": "ns/iter",
            "extra": "iterations: 9657\ncpu: 72390.66998032432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 66958.90873507824,
            "unit": "ns/iter",
            "extra": "iterations: 10475\ncpu: 66957.37470166967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20105.38063758943,
            "unit": "ns/iter",
            "extra": "iterations: 34944\ncpu: 20104.96794871775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 98042.48491198244,
            "unit": "ns/iter",
            "extra": "iterations: 7158\ncpu: 98038.80972338641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 78833.10887413466,
            "unit": "ns/iter",
            "extra": "iterations: 8891\ncpu: 78831.45877854008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 81389.53667053954,
            "unit": "ns/iter",
            "extra": "iterations: 8590\ncpu: 81386.67054714794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 81585.87917439282,
            "unit": "ns/iter",
            "extra": "iterations: 8624\ncpu: 81583.61549165002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 151785.13667627584,
            "unit": "ns/iter",
            "extra": "iterations: 4507\ncpu: 151782.02795651185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 627355.0779569608,
            "unit": "ns/iter",
            "extra": "iterations: 1116\ncpu: 627337.4551971264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 534840.1990846422,
            "unit": "ns/iter",
            "extra": "iterations: 1311\ncpu: 534823.8749046503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 544257.3558663577,
            "unit": "ns/iter",
            "extra": "iterations: 1287\ncpu: 544246.3092463108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 536289.9221967879,
            "unit": "ns/iter",
            "extra": "iterations: 1311\ncpu: 536279.099923729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 350384.19040482084,
            "unit": "ns/iter",
            "extra": "iterations: 2001\ncpu: 350373.8630684637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 525159.2150858867,
            "unit": "ns/iter",
            "extra": "iterations: 1339\ncpu: 525142.4943988109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19895.80628734045,
            "unit": "ns/iter",
            "extra": "iterations: 35150\ncpu: 19895.14651493615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 99998.10644977231,
            "unit": "ns/iter",
            "extra": "iterations: 7008\ncpu: 99993.59303652897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 78973.43982420606,
            "unit": "ns/iter",
            "extra": "iterations: 8874\ncpu: 78971.72639170696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 81189.54323001343,
            "unit": "ns/iter",
            "extra": "iterations: 8582\ncpu: 81186.91447215085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 81617.64784789518,
            "unit": "ns/iter",
            "extra": "iterations: 8573\ncpu: 81612.78432287392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 151046.61126701027,
            "unit": "ns/iter",
            "extra": "iterations: 4633\ncpu: 151039.06755881757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 626976.1692031808,
            "unit": "ns/iter",
            "extra": "iterations: 1117\ncpu: 626954.3419874725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 533567.4351144674,
            "unit": "ns/iter",
            "extra": "iterations: 1310\ncpu: 533536.8702290131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 541169.704247102,
            "unit": "ns/iter",
            "extra": "iterations: 1295\ncpu: 541143.6293436233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 529760.8724528268,
            "unit": "ns/iter",
            "extra": "iterations: 1325\ncpu: 529734.867924529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 351010.61180587445,
            "unit": "ns/iter",
            "extra": "iterations: 1999\ncpu: 350988.8444222139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 521026.6005961133,
            "unit": "ns/iter",
            "extra": "iterations: 1342\ncpu: 521006.6318927011 ns\nthreads: 1"
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
        "date": 1705772734909,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7295.963424580596,
            "unit": "ns/iter",
            "extra": "iterations: 95638\ncpu: 7295.8342918086955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 69327.37133789428,
            "unit": "ns/iter",
            "extra": "iterations: 12288\ncpu: 69326.82291666667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 132962.37707892223,
            "unit": "ns/iter",
            "extra": "iterations: 6614\ncpu: 132961.41517992134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 195466.69521868712,
            "unit": "ns/iter",
            "extra": "iterations: 4413\ncpu: 195468.09426693866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 257725.0804080384,
            "unit": "ns/iter",
            "extra": "iterations: 3333\ncpu: 257715.99159916007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 317629.399999972,
            "unit": "ns/iter",
            "extra": "iterations: 2720\ncpu: 317619.1176470588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 383228.5273762732,
            "unit": "ns/iter",
            "extra": "iterations: 2283\ncpu: 383225.5803766973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 442268.66276706144,
            "unit": "ns/iter",
            "extra": "iterations: 1966\ncpu: 442257.1719226855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 503374.56977417093,
            "unit": "ns/iter",
            "extra": "iterations: 1727\ncpu: 503350.7237984945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5628.859428874545,
            "unit": "ns/iter",
            "extra": "iterations: 124421\ncpu: 5628.766848040126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4837.1864910408985,
            "unit": "ns/iter",
            "extra": "iterations: 145385\ncpu: 4837.066409877212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4822.4073350172475,
            "unit": "ns/iter",
            "extra": "iterations: 145303\ncpu: 4822.395958789567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4851.835328760446,
            "unit": "ns/iter",
            "extra": "iterations: 144330\ncpu: 4851.7757915887205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8514.711839347014,
            "unit": "ns/iter",
            "extra": "iterations: 82513\ncpu: 8514.57830887255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 29754.87436511231,
            "unit": "ns/iter",
            "extra": "iterations: 27564\ncpu: 29754.11768974015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 120118.78291963937,
            "unit": "ns/iter",
            "extra": "iterations: 7131\ncpu: 120119.11372878951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 97561.45945637187,
            "unit": "ns/iter",
            "extra": "iterations: 8756\ncpu: 97558.34856098691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 100200.97136486557,
            "unit": "ns/iter",
            "extra": "iterations: 8521\ncpu: 100201.02100692422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 98630.80497973185,
            "unit": "ns/iter",
            "extra": "iterations: 8635\ncpu: 98628.66242038207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 260835.3585585362,
            "unit": "ns/iter",
            "extra": "iterations: 3330\ncpu: 260832.55255255298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2012711.8199566714,
            "unit": "ns/iter",
            "extra": "iterations: 461\ncpu: 2012634.4902386114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1688728.3657657823,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1688721.981981976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1725196.4619666378,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1725171.7996289385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1697071.7444852358,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1697063.2352941195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1028903.0022173158,
            "unit": "ns/iter",
            "extra": "iterations: 902\ncpu: 1028876.607538802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1640439.0353357263,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1640461.66077738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6902119.380000613,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6901958.999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3880556.9668051987,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3880582.1576763527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8699799.738095075,
            "unit": "ns/iter",
            "extra": "iterations: 126\ncpu: 8699573.80952379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 30464.45703472934,
            "unit": "ns/iter",
            "extra": "iterations: 26952\ncpu: 30464.27723360037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 121413.55292618297,
            "unit": "ns/iter",
            "extra": "iterations: 7057\ncpu: 121412.49822870921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 100010.70633621853,
            "unit": "ns/iter",
            "extra": "iterations: 8554\ncpu: 100008.27682955332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 101643.12739157105,
            "unit": "ns/iter",
            "extra": "iterations: 8415\ncpu: 101640.41592394508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 102464.66985009829,
            "unit": "ns/iter",
            "extra": "iterations: 8272\ncpu: 102463.17698259147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 257060.77425095421,
            "unit": "ns/iter",
            "extra": "iterations: 3371\ncpu: 257057.6683476721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2043901.927472539,
            "unit": "ns/iter",
            "extra": "iterations: 455\ncpu: 2043876.48351649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1705894.2645985386,
            "unit": "ns/iter",
            "extra": "iterations: 548\ncpu: 1705896.7153284675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1740814.5306120927,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1740775.1391465706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1717163.985266977,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1717152.302025792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1022620.6825221004,
            "unit": "ns/iter",
            "extra": "iterations: 904\ncpu: 1022618.4734513295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1652663.9044248408,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1652645.6637168133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6963175.600000113,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6963162.999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3952604.666666577,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3952534.1772151743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 28066.906984715868,
            "unit": "ns/iter",
            "extra": "iterations: 29178\ncpu: 28066.029200082092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 119708.74972019829,
            "unit": "ns/iter",
            "extra": "iterations: 7148\ncpu: 119707.02294348128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 97306.46040787625,
            "unit": "ns/iter",
            "extra": "iterations: 8777\ncpu: 97307.23481827485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 100819.58907810294,
            "unit": "ns/iter",
            "extra": "iterations: 8515\ncpu: 100818.91955372927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 99834.88916112864,
            "unit": "ns/iter",
            "extra": "iterations: 8571\ncpu: 99831.78158907952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 259502.5839591256,
            "unit": "ns/iter",
            "extra": "iterations: 3329\ncpu: 259499.00871132562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2012589.3534481456,
            "unit": "ns/iter",
            "extra": "iterations: 464\ncpu: 2012606.250000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1685901.9423424986,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1685894.0540540568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1713677.3327206273,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1713666.911764699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1697275.6090909902,
            "unit": "ns/iter",
            "extra": "iterations: 550\ncpu: 1697276.9090909103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1022235.0298013286,
            "unit": "ns/iter",
            "extra": "iterations: 906\ncpu: 1022236.4238410653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1640522.0546737588,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1640524.1622575007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2888.8759267046835,
            "unit": "ns/iter",
            "extra": "iterations: 242526\ncpu: 2888.82594031157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14662.65688487616,
            "unit": "ns/iter",
            "extra": "iterations: 47844\ncpu: 14662.86681715577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11664.916678791084,
            "unit": "ns/iter",
            "extra": "iterations: 61857\ncpu: 11664.818856394499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11723.347080590445,
            "unit": "ns/iter",
            "extra": "iterations: 59721\ncpu: 11723.24642922929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9943.981967795311,
            "unit": "ns/iter",
            "extra": "iterations: 70485\ncpu: 9943.968220188652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 59577.15216098909,
            "unit": "ns/iter",
            "extra": "iterations: 11777\ncpu: 59575.171945317445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 132220.40147226062,
            "unit": "ns/iter",
            "extra": "iterations: 5298\ncpu: 132222.2725556802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 34610.96524963204,
            "unit": "ns/iter",
            "extra": "iterations: 20230\ncpu: 34610.39545229864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 35100.94181726996,
            "unit": "ns/iter",
            "extra": "iterations: 19920\ncpu: 35101.15461847366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 34541.26543301079,
            "unit": "ns/iter",
            "extra": "iterations: 20265\ncpu: 34540.59215396003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 68386.00078362228,
            "unit": "ns/iter",
            "extra": "iterations: 10209\ncpu: 68386.96248408359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 62342.92484007994,
            "unit": "ns/iter",
            "extra": "iterations: 11256\ncpu: 62342.72388059713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19705.01069789699,
            "unit": "ns/iter",
            "extra": "iterations: 35521\ncpu: 19705.01675065451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 92238.11595928692,
            "unit": "ns/iter",
            "extra": "iterations: 7563\ncpu: 92233.8490017198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 74511.48764905846,
            "unit": "ns/iter",
            "extra": "iterations: 9392\ncpu: 74509.67844974453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 75907.45527573214,
            "unit": "ns/iter",
            "extra": "iterations: 9212\ncpu: 75908.54320451582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 75949.7615426446,
            "unit": "ns/iter",
            "extra": "iterations: 9205\ncpu: 75949.83161325377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 146461.57937669483,
            "unit": "ns/iter",
            "extra": "iterations: 4781\ncpu: 146460.8450115017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 583704.3700919171,
            "unit": "ns/iter",
            "extra": "iterations: 1197\ncpu: 583706.0985797833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 501426.3666190785,
            "unit": "ns/iter",
            "extra": "iterations: 1402\ncpu: 501426.2482168319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 505727.2078204402,
            "unit": "ns/iter",
            "extra": "iterations: 1381\ncpu: 505729.47139754484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 494217.9929478144,
            "unit": "ns/iter",
            "extra": "iterations: 1418\ncpu: 494215.79689704237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 329886.16580310743,
            "unit": "ns/iter",
            "extra": "iterations: 2123\ncpu: 329879.08619878057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 487150.769016054,
            "unit": "ns/iter",
            "extra": "iterations: 1433\ncpu: 487151.91905094177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19711.367735582236,
            "unit": "ns/iter",
            "extra": "iterations: 35550\ncpu: 19711.299578059276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 95265.20667574546,
            "unit": "ns/iter",
            "extra": "iterations: 7340\ncpu: 95263.48773841823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 75426.56766104688,
            "unit": "ns/iter",
            "extra": "iterations: 9252\ncpu: 75424.005620407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 76411.77471087963,
            "unit": "ns/iter",
            "extra": "iterations: 9166\ncpu: 76410.65895701392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 77542.77307478353,
            "unit": "ns/iter",
            "extra": "iterations: 9025\ncpu: 77543.85595567807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 144881.44299334567,
            "unit": "ns/iter",
            "extra": "iterations: 4824\ncpu: 144880.34825870628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 582559.1364393181,
            "unit": "ns/iter",
            "extra": "iterations: 1202\ncpu: 582556.988352742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 497522.55192028394,
            "unit": "ns/iter",
            "extra": "iterations: 1406\ncpu: 497503.20056898904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 503168.09156451694,
            "unit": "ns/iter",
            "extra": "iterations: 1387\ncpu: 503168.4210526301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 495678.0757790753,
            "unit": "ns/iter",
            "extra": "iterations: 1412\ncpu: 495674.00849859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 330387.6134969616,
            "unit": "ns/iter",
            "extra": "iterations: 2119\ncpu: 330387.1165644169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 488043.53931806155,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 488035.5601948561 ns\nthreads: 1"
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
        "date": 1705774386942,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7342.157130235125,
            "unit": "ns/iter",
            "extra": "iterations: 95074\ncpu: 7342.348065717232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 69600.95406996082,
            "unit": "ns/iter",
            "extra": "iterations: 12236\ncpu: 69600.11441647596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 133908.2165742569,
            "unit": "ns/iter",
            "extra": "iterations: 6492\ncpu: 133902.37215033887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 196864.38793301155,
            "unit": "ns/iter",
            "extra": "iterations: 4359\ncpu: 196863.13374627204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 260622.77777777272,
            "unit": "ns/iter",
            "extra": "iterations: 3339\ncpu: 260630.2186283317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 321062.530749169,
            "unit": "ns/iter",
            "extra": "iterations: 2683\ncpu: 321060.2310846069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 383436.54918397265,
            "unit": "ns/iter",
            "extra": "iterations: 2267\ncpu: 383418.5266872519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 446810.5945808017,
            "unit": "ns/iter",
            "extra": "iterations: 1956\ncpu: 446799.69325153367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 507843.4658891675,
            "unit": "ns/iter",
            "extra": "iterations: 1715\ncpu: 507840.64139941754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5676.839873433739,
            "unit": "ns/iter",
            "extra": "iterations: 123571\ncpu: 5676.694370038275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4867.957994777762,
            "unit": "ns/iter",
            "extra": "iterations: 143625\ncpu: 4868.075195822446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4783.440500732735,
            "unit": "ns/iter",
            "extra": "iterations: 141153\ncpu: 4783.104857849292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4887.776833971358,
            "unit": "ns/iter",
            "extra": "iterations: 143391\ncpu: 4887.705644008343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8519.065711714999,
            "unit": "ns/iter",
            "extra": "iterations: 82238\ncpu: 8518.683576935246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 30062.75631544486,
            "unit": "ns/iter",
            "extra": "iterations: 27314\ncpu: 30062.367284176635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 118361.69437890925,
            "unit": "ns/iter",
            "extra": "iterations: 7205\ncpu: 118359.13948646767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 97272.83282051144,
            "unit": "ns/iter",
            "extra": "iterations: 8775\ncpu: 97270.2792022791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 100535.13378766063,
            "unit": "ns/iter",
            "extra": "iterations: 8364\ncpu: 100532.30511716845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 99677.7007712705,
            "unit": "ns/iter",
            "extra": "iterations: 8298\ncpu: 99674.46372619914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 264410.35906864115,
            "unit": "ns/iter",
            "extra": "iterations: 3264\ncpu: 264401.53186274465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2054141.0305676195,
            "unit": "ns/iter",
            "extra": "iterations: 458\ncpu: 2054119.6506550175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1711438.2956203395,
            "unit": "ns/iter",
            "extra": "iterations: 548\ncpu: 1711385.7664233537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1764583.852830257,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1764562.452830189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1755875.4764595693,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1755867.2316384239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1043371.5738254474,
            "unit": "ns/iter",
            "extra": "iterations: 894\ncpu: 1043372.3713646553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1672973.731531472,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1672963.42342342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7057568.879999963,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7057432.000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4137419.1365638687,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4137385.0220264336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8870924.008129708,
            "unit": "ns/iter",
            "extra": "iterations: 123\ncpu: 8870816.260162614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 29421.864565741154,
            "unit": "ns/iter",
            "extra": "iterations: 27829\ncpu: 29421.650077257535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 122157.62621083848,
            "unit": "ns/iter",
            "extra": "iterations: 7020\ncpu: 122159.5726495729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 103334.67842098433,
            "unit": "ns/iter",
            "extra": "iterations: 8309\ncpu: 103333.01239619733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 99169.76691116554,
            "unit": "ns/iter",
            "extra": "iterations: 8589\ncpu: 99169.9033647687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 102313.68292391804,
            "unit": "ns/iter",
            "extra": "iterations: 8386\ncpu: 102313.17672310976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 268254.4787465133,
            "unit": "ns/iter",
            "extra": "iterations: 3223\ncpu: 268255.0108594482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2051256.0862833406,
            "unit": "ns/iter",
            "extra": "iterations: 452\ncpu: 2051244.6902654925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1726256.6845018587,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1726272.878228779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1773788.6209522998,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1773768.76190477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1761984.277882719,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1762026.275992443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1044414.1903695853,
            "unit": "ns/iter",
            "extra": "iterations: 893\ncpu: 1044389.2497200466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1703635.726126113,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1703646.6666666754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7089963.019999458,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7089732.000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4047978.72103003,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 4047801.7167382077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 28001.981904170992,
            "unit": "ns/iter",
            "extra": "iterations: 29178\ncpu: 28001.31948728495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 119340.16597049448,
            "unit": "ns/iter",
            "extra": "iterations: 7182\ncpu: 119341.4369256476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 98631.12150821924,
            "unit": "ns/iter",
            "extra": "iterations: 8699\ncpu: 98630.79664329231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 100561.32723649254,
            "unit": "ns/iter",
            "extra": "iterations: 8529\ncpu: 100563.18442959296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 101352.2576636262,
            "unit": "ns/iter",
            "extra": "iterations: 8449\ncpu: 101348.56195999592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 260631.42529486926,
            "unit": "ns/iter",
            "extra": "iterations: 3052\ncpu: 260628.80078637056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2048940.8665208912,
            "unit": "ns/iter",
            "extra": "iterations: 457\ncpu: 2048924.9452954037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1720519.7845303342,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1720533.3333333354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1759888.2924527782,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1759845.8490566127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1755864.1672931323,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1755824.0601503823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1040784.6424580349,
            "unit": "ns/iter",
            "extra": "iterations: 895\ncpu: 1040768.379888266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1677308.6774774864,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1677270.4504504588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2971.4147435575387,
            "unit": "ns/iter",
            "extra": "iterations: 236076\ncpu: 2971.363035632591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14939.559912203968,
            "unit": "ns/iter",
            "extra": "iterations: 46927\ncpu: 14939.484731604452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11680.215109305562,
            "unit": "ns/iter",
            "extra": "iterations: 60016\ncpu: 11680.098640362598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12012.622272711538,
            "unit": "ns/iter",
            "extra": "iterations: 59858\ncpu: 12012.893848775397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9883.952057695053,
            "unit": "ns/iter",
            "extra": "iterations: 70856\ncpu: 9883.788246584629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 61840.41846945468,
            "unit": "ns/iter",
            "extra": "iterations: 10493\ncpu: 61841.17030401198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 135042.94218537252,
            "unit": "ns/iter",
            "extra": "iterations: 5189\ncpu: 135041.04837155621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 35474.95681818482,
            "unit": "ns/iter",
            "extra": "iterations: 19800\ncpu: 35473.74747474785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 35765.48899643534,
            "unit": "ns/iter",
            "extra": "iterations: 19630\ncpu: 35765.37442689794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 35616.4181901545,
            "unit": "ns/iter",
            "extra": "iterations: 19637\ncpu: 35615.69486174044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 72442.35275819262,
            "unit": "ns/iter",
            "extra": "iterations: 9644\ncpu: 72440.93737038678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 63809.60112666714,
            "unit": "ns/iter",
            "extra": "iterations: 11006\ncpu: 63808.504452117246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19831.094868601303,
            "unit": "ns/iter",
            "extra": "iterations: 35312\ncpu: 19831.36044404151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 93775.9812206568,
            "unit": "ns/iter",
            "extra": "iterations: 7455\ncpu: 93776.05633802818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 75115.53051593114,
            "unit": "ns/iter",
            "extra": "iterations: 9323\ncpu: 75115.81036147203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 78691.9214253657,
            "unit": "ns/iter",
            "extra": "iterations: 8896\ncpu: 78690.27652877747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 77416.02791878078,
            "unit": "ns/iter",
            "extra": "iterations: 9062\ncpu: 77415.30567203714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 151932.26475695986,
            "unit": "ns/iter",
            "extra": "iterations: 4608\ncpu: 151933.6588541679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 600727.2414383461,
            "unit": "ns/iter",
            "extra": "iterations: 1168\ncpu: 600711.9006849357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 511257.47709085606,
            "unit": "ns/iter",
            "extra": "iterations: 1375\ncpu: 511256.4363636445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 518221.457100605,
            "unit": "ns/iter",
            "extra": "iterations: 1352\ncpu: 518215.16272189585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 516012.7905255387,
            "unit": "ns/iter",
            "extra": "iterations: 1351\ncpu: 516006.8097705419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 340670.577896737,
            "unit": "ns/iter",
            "extra": "iterations: 2054\ncpu: 340666.65043817007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 506047.87797834066,
            "unit": "ns/iter",
            "extra": "iterations: 1385\ncpu: 506044.2599277999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19888.12469097332,
            "unit": "ns/iter",
            "extra": "iterations: 35191\ncpu: 19888.045238839346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 95220.21160641358,
            "unit": "ns/iter",
            "extra": "iterations: 7358\ncpu: 95219.17640663178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 75630.29021469329,
            "unit": "ns/iter",
            "extra": "iterations: 9269\ncpu: 75630.30531880501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 79203.09032402908,
            "unit": "ns/iter",
            "extra": "iterations: 8857\ncpu: 79202.22422942202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 78422.59150509551,
            "unit": "ns/iter",
            "extra": "iterations: 8923\ncpu: 78421.59587582646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 148319.38769034343,
            "unit": "ns/iter",
            "extra": "iterations: 4728\ncpu: 148321.21404399344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 596654.6510638936,
            "unit": "ns/iter",
            "extra": "iterations: 1175\ncpu: 596656.5957446789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 507561.48934611236,
            "unit": "ns/iter",
            "extra": "iterations: 1361\ncpu: 507563.55620866775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 519042.4588584523,
            "unit": "ns/iter",
            "extra": "iterations: 1349\ncpu: 519039.2883617443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 517709.4211695341,
            "unit": "ns/iter",
            "extra": "iterations: 1351\ncpu: 517710.7327905168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 339510.72687439533,
            "unit": "ns/iter",
            "extra": "iterations: 2054\ncpu: 339508.2765335931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 505130.31227563083,
            "unit": "ns/iter",
            "extra": "iterations: 1393\ncpu: 505124.62311558146 ns\nthreads: 1"
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
        "date": 1705777720604,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7524.658588248017,
            "unit": "ns/iter",
            "extra": "iterations: 93005\ncpu: 7524.459975270147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 70232.54915810861,
            "unit": "ns/iter",
            "extra": "iterations: 12175\ncpu: 70231.69609856262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 132633.43714026257,
            "unit": "ns/iter",
            "extra": "iterations: 6602\ncpu: 132629.18812481067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 196846.95838021394,
            "unit": "ns/iter",
            "extra": "iterations: 4445\ncpu: 196602.4971878516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 258700.08305746774,
            "unit": "ns/iter",
            "extra": "iterations: 3323\ncpu: 258687.30063195905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 318137.87564957875,
            "unit": "ns/iter",
            "extra": "iterations: 2694\ncpu: 318124.2761692653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 380476.3403508603,
            "unit": "ns/iter",
            "extra": "iterations: 2280\ncpu: 380459.21052631555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 441561.7572371927,
            "unit": "ns/iter",
            "extra": "iterations: 1969\ncpu: 441553.42813610914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 504047.9722542894,
            "unit": "ns/iter",
            "extra": "iterations: 1730\ncpu: 504025.66473988415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5693.728662660917,
            "unit": "ns/iter",
            "extra": "iterations: 121981\ncpu: 5693.560472532602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4849.013146132199,
            "unit": "ns/iter",
            "extra": "iterations: 144301\ncpu: 4848.938676793648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4783.947495288036,
            "unit": "ns/iter",
            "extra": "iterations: 146444\ncpu: 4783.855944934579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4841.88069058531,
            "unit": "ns/iter",
            "extra": "iterations: 144515\ncpu: 4841.8323357436875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8543.134534892646,
            "unit": "ns/iter",
            "extra": "iterations: 81949\ncpu: 8543.019438919333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 29872.493679671687,
            "unit": "ns/iter",
            "extra": "iterations: 27372\ncpu: 29872.091918749073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 118013.14134033097,
            "unit": "ns/iter",
            "extra": "iterations: 7252\ncpu: 118011.10038610033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 96833.56052542213,
            "unit": "ns/iter",
            "extra": "iterations: 8831\ncpu: 96831.94428717035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 106348.86459627423,
            "unit": "ns/iter",
            "extra": "iterations: 8050\ncpu: 106346.0124223604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 100443.89879831106,
            "unit": "ns/iter",
            "extra": "iterations: 8488\ncpu: 100442.58953817165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 254011.3722778371,
            "unit": "ns/iter",
            "extra": "iterations: 3398\ncpu: 254006.1212477927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2048817.8392070802,
            "unit": "ns/iter",
            "extra": "iterations: 454\ncpu: 2048737.004405289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1689070.5992780926,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1688968.4115523426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1735309.3599257607,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1735249.9072356245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1707371.0586081715,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1707279.670329672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1029649.6607538817,
            "unit": "ns/iter",
            "extra": "iterations: 902\ncpu: 1029613.414634146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1712787.60283677,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1712461.1702127652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6872881.829999642,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6872643.000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3807187.3346773777,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3806831.0483871005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8675359.136000225,
            "unit": "ns/iter",
            "extra": "iterations: 125\ncpu: 8674620.799999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 30059.051207024193,
            "unit": "ns/iter",
            "extra": "iterations: 27340\ncpu: 30057.32991953191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 124698.32873328964,
            "unit": "ns/iter",
            "extra": "iterations: 6884\ncpu: 124691.38582219655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 100292.1621876368,
            "unit": "ns/iter",
            "extra": "iterations: 8484\ncpu: 100287.75341819967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 106441.95106461157,
            "unit": "ns/iter",
            "extra": "iterations: 8031\ncpu: 106438.10235338053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 107066.56489601707,
            "unit": "ns/iter",
            "extra": "iterations: 7982\ncpu: 107064.19443748462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 254617.4062130236,
            "unit": "ns/iter",
            "extra": "iterations: 3380\ncpu: 254611.42011834463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2066098.1244443771,
            "unit": "ns/iter",
            "extra": "iterations: 450\ncpu: 2066018.222222223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1713123.7239488938,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1713049.5429616128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1758104.348314685,
            "unit": "ns/iter",
            "extra": "iterations: 534\ncpu: 1758039.5131086106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1724280.8592592846,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1724253.3333333312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1025387.0888157641,
            "unit": "ns/iter",
            "extra": "iterations: 912\ncpu: 1025373.2456140291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1660207.0516933014,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1660185.3832441978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6937065.5499994885,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6936893.9999999665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3872797.349557877,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 3872736.725663725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 27902.97365114844,
            "unit": "ns/iter",
            "extra": "iterations: 29451\ncpu: 27902.387015720902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 117188.09302005102,
            "unit": "ns/iter",
            "extra": "iterations: 7278\ncpu: 117186.74086287465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 96665.31623641528,
            "unit": "ns/iter",
            "extra": "iterations: 8832\ncpu: 96664.06250000028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 104844.39977973551,
            "unit": "ns/iter",
            "extra": "iterations: 8172\ncpu: 104843.47772882978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 104546.08786509729,
            "unit": "ns/iter",
            "extra": "iterations: 8183\ncpu: 104542.71049737216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 255246.46694337841,
            "unit": "ns/iter",
            "extra": "iterations: 3373\ncpu: 255240.32018974258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2058498.7621144352,
            "unit": "ns/iter",
            "extra": "iterations: 454\ncpu: 2058473.348017623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1704569.4963636296,
            "unit": "ns/iter",
            "extra": "iterations: 550\ncpu: 1704555.4545454553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1732070.4077489835,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1732045.3874538802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1718193.8315019454,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1718171.611721605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1020109.2612513385,
            "unit": "ns/iter",
            "extra": "iterations: 911\ncpu: 1020095.2799121912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1660816.7392858164,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1660802.321428572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2887.593660120248,
            "unit": "ns/iter",
            "extra": "iterations: 242686\ncpu: 2887.5163791895707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15203.531699474286,
            "unit": "ns/iter",
            "extra": "iterations: 46026\ncpu: 15203.435014991475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12051.755123109111,
            "unit": "ns/iter",
            "extra": "iterations: 58119\ncpu: 12051.566613327752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11558.07689380681,
            "unit": "ns/iter",
            "extra": "iterations: 60447\ncpu: 11557.96152000931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9898.842475048372,
            "unit": "ns/iter",
            "extra": "iterations: 70738\ncpu: 9898.754559077168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 59247.71595528031,
            "unit": "ns/iter",
            "extra": "iterations: 11808\ncpu: 59246.74796747958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 127743.49014597129,
            "unit": "ns/iter",
            "extra": "iterations: 5480\ncpu: 127742.62773722639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 35118.1973901304,
            "unit": "ns/iter",
            "extra": "iterations: 20001\ncpu: 35116.79416029232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 34965.69025753458,
            "unit": "ns/iter",
            "extra": "iterations: 20036\ncpu: 34965.347374725425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 34716.621245968534,
            "unit": "ns/iter",
            "extra": "iterations: 20145\ncpu: 34715.9841151651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 71113.14955923149,
            "unit": "ns/iter",
            "extra": "iterations: 9869\ncpu: 71112.37207417162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 62899.1572287535,
            "unit": "ns/iter",
            "extra": "iterations: 11143\ncpu: 62898.151305753134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19365.63900736704,
            "unit": "ns/iter",
            "extra": "iterations: 36106\ncpu: 19365.42402924718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 90758.30848728154,
            "unit": "ns/iter",
            "extra": "iterations: 7741\ncpu: 90757.48611290475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 73153.33218534621,
            "unit": "ns/iter",
            "extra": "iterations: 9582\ncpu: 73150.96013358458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 75316.37724486497,
            "unit": "ns/iter",
            "extra": "iterations: 9299\ncpu: 75314.21658242817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 74149.84045015287,
            "unit": "ns/iter",
            "extra": "iterations: 9508\ncpu: 74148.01220025212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 146369.9590266278,
            "unit": "ns/iter",
            "extra": "iterations: 4808\ncpu: 146368.30282861824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 593199.8462192102,
            "unit": "ns/iter",
            "extra": "iterations: 1177\ncpu: 593193.6278674641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 505685.0000000554,
            "unit": "ns/iter",
            "extra": "iterations: 1385\ncpu: 505681.08303249686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 506369.70490616973,
            "unit": "ns/iter",
            "extra": "iterations: 1386\ncpu: 506365.87301587197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 501444.8680000214,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501427.3000000031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 341373.6004728328,
            "unit": "ns/iter",
            "extra": "iterations: 2115\ncpu: 341369.97635933827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 493281.52575866977,
            "unit": "ns/iter",
            "extra": "iterations: 1417\ncpu: 493272.2653493352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19343.305200717317,
            "unit": "ns/iter",
            "extra": "iterations: 36245\ncpu: 19343.172851427687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 93049.48286396946,
            "unit": "ns/iter",
            "extra": "iterations: 7528\ncpu: 93047.29011689592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 73825.9505599055,
            "unit": "ns/iter",
            "extra": "iterations: 9466\ncpu: 73820.32537502579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 75472.14741036746,
            "unit": "ns/iter",
            "extra": "iterations: 9287\ncpu: 75472.18692796334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 76074.78033744574,
            "unit": "ns/iter",
            "extra": "iterations: 9246\ncpu: 76075.0054077439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 144058.09962794703,
            "unit": "ns/iter",
            "extra": "iterations: 4838\ncpu: 144046.92021496527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 591494.1465879747,
            "unit": "ns/iter",
            "extra": "iterations: 1187\ncpu: 591473.2097725369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 499969.77027031063,
            "unit": "ns/iter",
            "extra": "iterations: 1406\ncpu: 499934.06827880995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 505749.951729077,
            "unit": "ns/iter",
            "extra": "iterations: 1388\ncpu: 505731.9164265141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 501295.4284692867,
            "unit": "ns/iter",
            "extra": "iterations: 1398\ncpu: 501271.6738197406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 330399.0872230082,
            "unit": "ns/iter",
            "extra": "iterations: 2121\ncpu: 330381.28241395677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 489539.44812679867,
            "unit": "ns/iter",
            "extra": "iterations: 1388\ncpu: 489540.48991355154 ns\nthreads: 1"
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
        "date": 1705952909618,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7527.409903876628,
            "unit": "ns/iter",
            "extra": "iterations: 93317\ncpu: 7527.371218534672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 71487.70982104662,
            "unit": "ns/iter",
            "extra": "iterations: 11903\ncpu: 71483.1723095018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 137330.29816296636,
            "unit": "ns/iter",
            "extra": "iterations: 6369\ncpu: 137323.70858847542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 202535.34494776526,
            "unit": "ns/iter",
            "extra": "iterations: 4305\ncpu: 202526.6202090592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 267688.17621554405,
            "unit": "ns/iter",
            "extra": "iterations: 3229\ncpu: 267674.2644781666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 327103.8242677987,
            "unit": "ns/iter",
            "extra": "iterations: 2629\ncpu: 327079.38379612035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 391392.99595136434,
            "unit": "ns/iter",
            "extra": "iterations: 2223\ncpu: 391360.8636977058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 458858.164910351,
            "unit": "ns/iter",
            "extra": "iterations: 1898\ncpu: 458831.9810326661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 519098.41881354275,
            "unit": "ns/iter",
            "extra": "iterations: 1669\ncpu: 519080.46734571643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5749.515531245274,
            "unit": "ns/iter",
            "extra": "iterations: 122495\ncpu: 5749.291807828884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4899.829157413427,
            "unit": "ns/iter",
            "extra": "iterations: 142763\ncpu: 4899.67498581566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4851.902148202593,
            "unit": "ns/iter",
            "extra": "iterations: 144586\ncpu: 4851.443431590887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4905.5746097121455,
            "unit": "ns/iter",
            "extra": "iterations: 141818\ncpu: 4905.3914171684755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8542.011457824441,
            "unit": "ns/iter",
            "extra": "iterations: 82040\ncpu: 8541.37250121891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 29679.19276011767,
            "unit": "ns/iter",
            "extra": "iterations: 27459\ncpu: 29676.39025456132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 118061.40570236965,
            "unit": "ns/iter",
            "extra": "iterations: 7190\ncpu: 118049.84700973581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 96294.13528418644,
            "unit": "ns/iter",
            "extra": "iterations: 8885\ncpu: 96286.97805289815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 99109.52593108248,
            "unit": "ns/iter",
            "extra": "iterations: 8619\ncpu: 99100.03480682247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 97462.08968200535,
            "unit": "ns/iter",
            "extra": "iterations: 8742\ncpu: 97454.56417295829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 254671.928988872,
            "unit": "ns/iter",
            "extra": "iterations: 3422\ncpu: 254652.92226768046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2103756.9774269504,
            "unit": "ns/iter",
            "extra": "iterations: 443\ncpu: 2103638.6004514657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1761031.3403045218,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1760874.714828901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1737764.8308270967,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1737672.744360905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1756718.0992363535,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1756574.4274809177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1013420.9824946681,
            "unit": "ns/iter",
            "extra": "iterations: 914\ncpu: 1013414.332603939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1695294.0457876583,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1695204.9450549467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6854359.430001296,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6853776.000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3859809.5761315734,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3858865.0205761273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8795939.0887099,
            "unit": "ns/iter",
            "extra": "iterations: 124\ncpu: 8795183.064516114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 30328.9926173544,
            "unit": "ns/iter",
            "extra": "iterations: 27226\ncpu: 30327.668405200908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 120561.45557923318,
            "unit": "ns/iter",
            "extra": "iterations: 7035\ncpu: 120554.4562899785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 101335.10205526797,
            "unit": "ns/iter",
            "extra": "iterations: 8466\ncpu: 101327.6754075129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 97780.49788643718,
            "unit": "ns/iter",
            "extra": "iterations: 8753\ncpu: 97777.27636238962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 101298.93094384193,
            "unit": "ns/iter",
            "extra": "iterations: 8370\ncpu: 101293.89486260462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 250251.3115462024,
            "unit": "ns/iter",
            "extra": "iterations: 3473\ncpu: 250237.20126691693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2151758.351851535,
            "unit": "ns/iter",
            "extra": "iterations: 432\ncpu: 2151621.0648148004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1789675.7112811536,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1789562.90630976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1772857.8614801844,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1772800.7590132845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1783262.9999999013,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1783153.0418250975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1011679.93471158,
            "unit": "ns/iter",
            "extra": "iterations: 919\ncpu: 1011615.5603917297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1705965.2948718905,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1705860.2564102565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6972310.8499988485,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6971882.000000064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3868469.88796768,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3868258.5062240656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 28193.09347376083,
            "unit": "ns/iter",
            "extra": "iterations: 28960\ncpu: 28190.64226519334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 117647.62308762841,
            "unit": "ns/iter",
            "extra": "iterations: 7190\ncpu: 117643.05980528485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 96470.88994458903,
            "unit": "ns/iter",
            "extra": "iterations: 8841\ncpu: 96467.43581042797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 99201.89246566597,
            "unit": "ns/iter",
            "extra": "iterations: 8667\ncpu: 99199.95384792898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 101410.90906933475,
            "unit": "ns/iter",
            "extra": "iterations: 8435\ncpu: 101409.02193242435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 255273.58833873516,
            "unit": "ns/iter",
            "extra": "iterations: 3413\ncpu: 255258.33577497763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2118779.984162938,
            "unit": "ns/iter",
            "extra": "iterations: 442\ncpu: 2118664.9321266958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1763733.7849056972,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1763636.9811320798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1735853.2574627106,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1735757.6492537323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1754789.2257459636,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1754688.6194029923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1014414.1993497113,
            "unit": "ns/iter",
            "extra": "iterations: 923\ncpu: 1014355.037919824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1688652.9601450823,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1688554.8913043435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2886.340699206923,
            "unit": "ns/iter",
            "extra": "iterations: 242017\ncpu: 2886.23733043546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14941.126724211677,
            "unit": "ns/iter",
            "extra": "iterations: 47268\ncpu: 14939.86417872547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11480.797869543874,
            "unit": "ns/iter",
            "extra": "iterations: 60926\ncpu: 11479.91169615598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11964.40920798934,
            "unit": "ns/iter",
            "extra": "iterations: 61729\ncpu: 11963.270099953083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9928.840541653533,
            "unit": "ns/iter",
            "extra": "iterations: 70451\ncpu: 9928.428269293545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 58941.308516031415,
            "unit": "ns/iter",
            "extra": "iterations: 11860\ncpu: 58939.15682967959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 135243.34382238283,
            "unit": "ns/iter",
            "extra": "iterations: 5180\ncpu: 135236.62162162163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 35466.17561000092,
            "unit": "ns/iter",
            "extra": "iterations: 19754\ncpu: 35464.407208666176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 35189.40502961446,
            "unit": "ns/iter",
            "extra": "iterations: 19922\ncpu: 35187.370745908935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 35261.92220037577,
            "unit": "ns/iter",
            "extra": "iterations: 19833\ncpu: 35260.81782887066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 71281.81313541338,
            "unit": "ns/iter",
            "extra": "iterations: 9836\ncpu: 71277.19601463992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 63336.65956678294,
            "unit": "ns/iter",
            "extra": "iterations: 11080\ncpu: 63332.45487364567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19566.021959076304,
            "unit": "ns/iter",
            "extra": "iterations: 35384\ncpu: 19564.8598236488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 94290.85284233719,
            "unit": "ns/iter",
            "extra": "iterations: 7441\ncpu: 94288.95309770346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 75901.78770830658,
            "unit": "ns/iter",
            "extra": "iterations: 9242\ncpu: 75899.24258818357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 74941.22404779585,
            "unit": "ns/iter",
            "extra": "iterations: 9373\ncpu: 74938.8242825138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 75436.77143164443,
            "unit": "ns/iter",
            "extra": "iterations: 9297\ncpu: 75435.47380875498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 149770.0715356441,
            "unit": "ns/iter",
            "extra": "iterations: 4669\ncpu: 149765.9670164916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 605600.0284728359,
            "unit": "ns/iter",
            "extra": "iterations: 1159\ncpu: 605587.4892148443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 515250.4845587119,
            "unit": "ns/iter",
            "extra": "iterations: 1360\ncpu: 515247.6470588246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 516554.7885040622,
            "unit": "ns/iter",
            "extra": "iterations: 1357\ncpu: 516538.3198231472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 511533.9137427465,
            "unit": "ns/iter",
            "extra": "iterations: 1368\ncpu: 511519.1520467874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 334254.02486847487,
            "unit": "ns/iter",
            "extra": "iterations: 2091\ncpu: 334236.2505977985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 502399.1910920669,
            "unit": "ns/iter",
            "extra": "iterations: 1392\ncpu: 502387.42816092185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19644.755470872995,
            "unit": "ns/iter",
            "extra": "iterations: 35689\ncpu: 19642.842332371318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 95409.01934340979,
            "unit": "ns/iter",
            "extra": "iterations: 7341\ncpu: 95405.312627707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 76126.88484915115,
            "unit": "ns/iter",
            "extra": "iterations: 9214\ncpu: 76124.2999782933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 75298.80728831657,
            "unit": "ns/iter",
            "extra": "iterations: 9330\ncpu: 75295.10182207817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 77136.58081528869,
            "unit": "ns/iter",
            "extra": "iterations: 9101\ncpu: 77134.88627623285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 146775.70567304362,
            "unit": "ns/iter",
            "extra": "iterations: 4777\ncpu: 146770.75570441975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 602425.09232084,
            "unit": "ns/iter",
            "extra": "iterations: 1159\ncpu: 602405.1768766153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 515940.41016199195,
            "unit": "ns/iter",
            "extra": "iterations: 1358\ncpu: 515930.78055964195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 511864.16873626644,
            "unit": "ns/iter",
            "extra": "iterations: 1369\ncpu: 511835.1351351375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 513406.8203239617,
            "unit": "ns/iter",
            "extra": "iterations: 1358\ncpu: 513395.5081001456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 331160.6783515445,
            "unit": "ns/iter",
            "extra": "iterations: 2111\ncpu: 331144.2444339161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 500930.8842030047,
            "unit": "ns/iter",
            "extra": "iterations: 1399\ncpu: 500921.01501072303 ns\nthreads: 1"
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
        "date": 1705954315071,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7720.9562529141085,
            "unit": "ns/iter",
            "extra": "iterations: 90086\ncpu: 7720.8056745776275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 73416.43039393665,
            "unit": "ns/iter",
            "extra": "iterations: 11601\ncpu: 73409.94741832602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 140867.53378378527,
            "unit": "ns/iter",
            "extra": "iterations: 6216\ncpu: 140857.93114543112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 207510.71230585617,
            "unit": "ns/iter",
            "extra": "iterations: 4185\ncpu: 207494.24133811236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 278541.5672309141,
            "unit": "ns/iter",
            "extra": "iterations: 3131\ncpu: 278530.88470137323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 338047.4241352251,
            "unit": "ns/iter",
            "extra": "iterations: 2544\ncpu: 338028.5770440254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 405320.2027972265,
            "unit": "ns/iter",
            "extra": "iterations: 2145\ncpu: 405292.49417249433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 470311.4547915404,
            "unit": "ns/iter",
            "extra": "iterations: 1847\ncpu: 470265.4033567949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 536734.0554187475,
            "unit": "ns/iter",
            "extra": "iterations: 1624\ncpu: 536720.2586206899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5999.596821402852,
            "unit": "ns/iter",
            "extra": "iterations: 116844\ncpu: 5999.519016808746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5011.987806449117,
            "unit": "ns/iter",
            "extra": "iterations: 139746\ncpu: 5011.844346170907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4948.378316938282,
            "unit": "ns/iter",
            "extra": "iterations: 141207\ncpu: 4948.222821814785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5013.697107260846,
            "unit": "ns/iter",
            "extra": "iterations: 139660\ncpu: 5013.4762995847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8774.235622409722,
            "unit": "ns/iter",
            "extra": "iterations: 79377\ncpu: 8773.955931819024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31059.164197155802,
            "unit": "ns/iter",
            "extra": "iterations: 26456\ncpu: 31057.12503779862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 124420.72276656982,
            "unit": "ns/iter",
            "extra": "iterations: 6940\ncpu: 124418.91930835733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 101109.5865213855,
            "unit": "ns/iter",
            "extra": "iterations: 8443\ncpu: 101105.57858581081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 106354.80186104903,
            "unit": "ns/iter",
            "extra": "iterations: 8060\ncpu: 106353.46153846152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 103018.95524560506,
            "unit": "ns/iter",
            "extra": "iterations: 8245\ncpu: 103015.86416009716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 252879.87795617862,
            "unit": "ns/iter",
            "extra": "iterations: 3425\ncpu: 252872.4087591234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2176079.5734263733,
            "unit": "ns/iter",
            "extra": "iterations: 429\ncpu: 2175983.682983681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1810543.5797664495,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1810504.8638132287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1796698.674373669,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1796622.9287090555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1812595.272015441,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1812591.3894324917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1079192.4198829345,
            "unit": "ns/iter",
            "extra": "iterations: 855\ncpu: 1079164.2105263146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1750285.5762712366,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1750282.297551789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7168186.23999984,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7167914.000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4013804.2068966916,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4013718.1034482745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8951255.677686261,
            "unit": "ns/iter",
            "extra": "iterations: 121\ncpu: 8950519.008264482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 32651.740688074402,
            "unit": "ns/iter",
            "extra": "iterations: 25317\ncpu: 32650.049373938466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 124112.48062690026,
            "unit": "ns/iter",
            "extra": "iterations: 6891\ncpu: 124107.03816572342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 105406.47673701971,
            "unit": "ns/iter",
            "extra": "iterations: 8103\ncpu: 105403.41848697959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 103550.62513635021,
            "unit": "ns/iter",
            "extra": "iterations: 8251\ncpu: 103547.4124348563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 106077.17753983711,
            "unit": "ns/iter",
            "extra": "iterations: 8032\ncpu: 106075.99601593582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 246414.34430881112,
            "unit": "ns/iter",
            "extra": "iterations: 3523\ncpu: 246403.83196139656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2222456.50827442,
            "unit": "ns/iter",
            "extra": "iterations: 423\ncpu: 2222430.260047288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1833940.1633858322,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1833905.1181102442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1826617.1132812481,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1826558.9843750042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1813467.4163424107,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1813440.0778210151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1072310.9053118422,
            "unit": "ns/iter",
            "extra": "iterations: 866\ncpu: 1072259.6997690485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1768106.2362948367,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1768082.986767484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7270981.350000056,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7270568.999999938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4066029.4890827914,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4065891.266375551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 28986.599268716316,
            "unit": "ns/iter",
            "extra": "iterations: 28443\ncpu: 28985.286362198196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 121361.81901797604,
            "unit": "ns/iter",
            "extra": "iterations: 7067\ncpu: 121358.92174897436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 100636.9440122618,
            "unit": "ns/iter",
            "extra": "iterations: 8484\ncpu: 100632.555398397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 106201.13249876001,
            "unit": "ns/iter",
            "extra": "iterations: 8068\ncpu: 106199.61576598945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 105529.18774654939,
            "unit": "ns/iter",
            "extra": "iterations: 8112\ncpu: 105522.73175542396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 251881.8515921937,
            "unit": "ns/iter",
            "extra": "iterations: 3423\ncpu: 251876.80397312285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2188771.0141176926,
            "unit": "ns/iter",
            "extra": "iterations: 425\ncpu: 2188691.5294117625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1830702.2352941844,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1830656.6666666693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1795830.3961165159,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1795728.1553398012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1810545.9455254,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1810540.272373539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1069274.4151376316,
            "unit": "ns/iter",
            "extra": "iterations: 872\ncpu: 1069234.6330275238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1753238.0716982018,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1753212.641509443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2925.3313552550685,
            "unit": "ns/iter",
            "extra": "iterations: 239121\ncpu: 2925.17846613222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15160.986286234138,
            "unit": "ns/iter",
            "extra": "iterations: 46158\ncpu: 15160.95584730715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11641.849331692509,
            "unit": "ns/iter",
            "extra": "iterations: 60152\ncpu: 11641.360220774082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11244.883203181787,
            "unit": "ns/iter",
            "extra": "iterations: 61851\ncpu: 11244.700974923584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10133.438905518846,
            "unit": "ns/iter",
            "extra": "iterations: 69147\ncpu: 10133.110619405059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 58754.86968933843,
            "unit": "ns/iter",
            "extra": "iterations: 11910\ncpu: 58753.43408900074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 143174.40790821047,
            "unit": "ns/iter",
            "extra": "iterations: 4881\ncpu: 143174.0626920719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36796.87311591201,
            "unit": "ns/iter",
            "extra": "iterations: 19041\ncpu: 36795.02652171607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 36204.63186472652,
            "unit": "ns/iter",
            "extra": "iterations: 19338\ncpu: 36203.76460854302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36324.358830555066,
            "unit": "ns/iter",
            "extra": "iterations: 19257\ncpu: 36323.78875214245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 75104.34403866189,
            "unit": "ns/iter",
            "extra": "iterations: 9310\ncpu: 75104.18904403986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 66459.10545281641,
            "unit": "ns/iter",
            "extra": "iterations: 10545\ncpu: 66455.98862019957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19488.43482861361,
            "unit": "ns/iter",
            "extra": "iterations: 35913\ncpu: 19488.168629743854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 97103.37877311697,
            "unit": "ns/iter",
            "extra": "iterations: 7189\ncpu: 97098.19168173602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 77821.13740967447,
            "unit": "ns/iter",
            "extra": "iterations: 8995\ncpu: 77818.73262923822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 76366.53581161363,
            "unit": "ns/iter",
            "extra": "iterations: 9173\ncpu: 76365.5510738041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 77830.77878855226,
            "unit": "ns/iter",
            "extra": "iterations: 9014\ncpu: 77828.21167073437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 153350.59227562687,
            "unit": "ns/iter",
            "extra": "iterations: 4557\ncpu: 153348.01404432606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 628272.8036036042,
            "unit": "ns/iter",
            "extra": "iterations: 1110\ncpu: 628235.3153153125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 536688.492686662,
            "unit": "ns/iter",
            "extra": "iterations: 1299\ncpu: 536650.0384911507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 531915.8179741219,
            "unit": "ns/iter",
            "extra": "iterations: 1313\ncpu: 531903.1987814256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 529773.4515884692,
            "unit": "ns/iter",
            "extra": "iterations: 1322\ncpu: 529740.166414523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 344314.4918839672,
            "unit": "ns/iter",
            "extra": "iterations: 2033\ncpu: 344309.59173635655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 520400.84546806704,
            "unit": "ns/iter",
            "extra": "iterations: 1346\ncpu: 520372.4368499273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19722.607388607965,
            "unit": "ns/iter",
            "extra": "iterations: 35460\ncpu: 19722.332205301904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 97873.68739519156,
            "unit": "ns/iter",
            "extra": "iterations: 7156\ncpu: 97869.52207937406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 78938.09927252572,
            "unit": "ns/iter",
            "extra": "iterations: 8935\ncpu: 78936.95579183064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 76932.46925779963,
            "unit": "ns/iter",
            "extra": "iterations: 9108\ncpu: 76931.35704874877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 78463.92354260404,
            "unit": "ns/iter",
            "extra": "iterations: 8920\ncpu: 78461.83856502273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 150534.67097607907,
            "unit": "ns/iter",
            "extra": "iterations: 4641\ncpu: 150532.38526179714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 628275.2473022178,
            "unit": "ns/iter",
            "extra": "iterations: 1112\ncpu: 628257.3741007218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 532668.5221035979,
            "unit": "ns/iter",
            "extra": "iterations: 1312\ncpu: 532651.371951221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 526500.324060139,
            "unit": "ns/iter",
            "extra": "iterations: 1330\ncpu: 526491.5037593972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 526619.7488722389,
            "unit": "ns/iter",
            "extra": "iterations: 1330\ncpu: 526601.6541353368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 343314.8407079201,
            "unit": "ns/iter",
            "extra": "iterations: 2034\ncpu: 343303.4906587983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 517917.1665433325,
            "unit": "ns/iter",
            "extra": "iterations: 1351\ncpu: 517887.12065137597 ns\nthreads: 1"
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
        "date": 1705956416348,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7404.321675673925,
            "unit": "ns/iter",
            "extra": "iterations: 95102\ncpu: 7404.088242097958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 72413.57072214346,
            "unit": "ns/iter",
            "extra": "iterations: 11729\ncpu: 72407.9546423395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 140866.70019094934,
            "unit": "ns/iter",
            "extra": "iterations: 6284\ncpu: 140862.0146403565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 207994.5188566098,
            "unit": "ns/iter",
            "extra": "iterations: 4163\ncpu: 207985.63535911604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 272746.41135458526,
            "unit": "ns/iter",
            "extra": "iterations: 3012\ncpu: 272734.29614873824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 334292.2524347475,
            "unit": "ns/iter",
            "extra": "iterations: 2567\ncpu: 334288.040514219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 403006.194264608,
            "unit": "ns/iter",
            "extra": "iterations: 2162\ncpu: 402987.18778908416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 465237.8638799609,
            "unit": "ns/iter",
            "extra": "iterations: 1866\ncpu: 465219.935691318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 529564.0761730351,
            "unit": "ns/iter",
            "extra": "iterations: 1641\ncpu: 529551.9804996949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5679.729411955614,
            "unit": "ns/iter",
            "extra": "iterations: 123324\ncpu: 5679.680354188968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4868.747215277993,
            "unit": "ns/iter",
            "extra": "iterations: 144000\ncpu: 4868.754166666668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4776.008943056115,
            "unit": "ns/iter",
            "extra": "iterations: 146706\ncpu: 4775.940316006169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4904.159874586542,
            "unit": "ns/iter",
            "extra": "iterations: 143844\ncpu: 4904.169099858189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8492.05585119398,
            "unit": "ns/iter",
            "extra": "iterations: 61073\ncpu: 8491.896582777987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 29437.243687506536,
            "unit": "ns/iter",
            "extra": "iterations: 27802\ncpu: 29437.25271563195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 117793.29251138511,
            "unit": "ns/iter",
            "extra": "iterations: 7251\ncpu: 117790.89780719882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 97334.56787588299,
            "unit": "ns/iter",
            "extra": "iterations: 8766\ncpu: 97331.08601414533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 99060.6149219208,
            "unit": "ns/iter",
            "extra": "iterations: 8645\ncpu: 99059.56043956052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 97619.38859629644,
            "unit": "ns/iter",
            "extra": "iterations: 8734\ncpu: 97618.11312113599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 253874.40603044973,
            "unit": "ns/iter",
            "extra": "iterations: 3416\ncpu: 253871.22365339517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2108274.0273973555,
            "unit": "ns/iter",
            "extra": "iterations: 438\ncpu: 2108217.808219172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1769098.6087785414,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1769072.1374045766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1788754.8604650781,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1788760.271317826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1792815.324271933,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1792782.330097088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1059773.650000037,
            "unit": "ns/iter",
            "extra": "iterations: 880\ncpu: 1059774.2045454525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1715252.3203705002,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1715219.0740740714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7134322.709999878,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7134061.000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4058686.948051966,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4058509.5238095336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9021467.586776903,
            "unit": "ns/iter",
            "extra": "iterations: 121\ncpu: 9021152.066115685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 29075.85478032286,
            "unit": "ns/iter",
            "extra": "iterations: 28178\ncpu: 29074.65398537871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 119187.21352858825,
            "unit": "ns/iter",
            "extra": "iterations: 7170\ncpu: 119186.45746164549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 101808.76170619113,
            "unit": "ns/iter",
            "extra": "iterations: 8393\ncpu: 101804.51566781779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 97956.29026325601,
            "unit": "ns/iter",
            "extra": "iterations: 8699\ncpu: 97952.56926083505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 100300.9074248192,
            "unit": "ns/iter",
            "extra": "iterations: 8512\ncpu: 100297.21569548844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 248737.64709269657,
            "unit": "ns/iter",
            "extra": "iterations: 3474\ncpu: 248730.31088082932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2141891.460829421,
            "unit": "ns/iter",
            "extra": "iterations: 434\ncpu: 2141809.216589861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1791729.936660357,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1791631.28598849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1801186.6821705662,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1801122.0930232506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1823162.0644533208,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1823087.5000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1060582.5799087519,
            "unit": "ns/iter",
            "extra": "iterations: 876\ncpu: 1060523.5159817343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1733181.1626167893,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1733127.8504672947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7189824.880000515,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7189424.000000031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4049864.224138207,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4049696.551724139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 27850.244033717612,
            "unit": "ns/iter",
            "extra": "iterations: 29541\ncpu: 27849.690260993273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 118403.55811373785,
            "unit": "ns/iter",
            "extra": "iterations: 7210\ncpu: 118402.1359223307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 96709.40339365765,
            "unit": "ns/iter",
            "extra": "iterations: 8840\ncpu: 96708.65384615344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 98100.52597179737,
            "unit": "ns/iter",
            "extra": "iterations: 8721\ncpu: 98096.56002751984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 101468.66816869707,
            "unit": "ns/iter",
            "extra": "iterations: 8655\ncpu: 101459.2952050839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 252731.19070040208,
            "unit": "ns/iter",
            "extra": "iterations: 3398\ncpu: 252722.63095938903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2118512.2191781537,
            "unit": "ns/iter",
            "extra": "iterations: 438\ncpu: 2118423.28767123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1768739.2045454923,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1768703.7878787885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1786733.199999993,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1786659.4230769195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1796060.146717944,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1796000.5791505778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1052702.923163842,
            "unit": "ns/iter",
            "extra": "iterations: 885\ncpu: 1052652.3163841807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1775243.7351852544,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1775135.3703703748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2951.186908494319,
            "unit": "ns/iter",
            "extra": "iterations: 237635\ncpu: 2951.072022218958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14640.548704761271,
            "unit": "ns/iter",
            "extra": "iterations: 47829\ncpu: 14640.140918689594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11570.22027358318,
            "unit": "ns/iter",
            "extra": "iterations: 60384\ncpu: 11570.008611552757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11936.705249439496,
            "unit": "ns/iter",
            "extra": "iterations: 59854\ncpu: 11936.23316737396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9834.443877263808,
            "unit": "ns/iter",
            "extra": "iterations: 71308\ncpu: 9833.687664778134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 58682.10449513582,
            "unit": "ns/iter",
            "extra": "iterations: 11924\ncpu: 58679.62093257301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 136770.16406859542,
            "unit": "ns/iter",
            "extra": "iterations: 5132\ncpu: 136765.9976617296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 35560.36571660288,
            "unit": "ns/iter",
            "extra": "iterations: 19753\ncpu: 35558.2088796638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 35889.048965091504,
            "unit": "ns/iter",
            "extra": "iterations: 19422\ncpu: 35886.880856760436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 35567.83766893921,
            "unit": "ns/iter",
            "extra": "iterations: 19682\ncpu: 35566.24326796084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 73972.63298880967,
            "unit": "ns/iter",
            "extra": "iterations: 9482\ncpu: 73970.57582788354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 64039.51185571459,
            "unit": "ns/iter",
            "extra": "iterations: 10923\ncpu: 64035.65870182168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19467.580821843745,
            "unit": "ns/iter",
            "extra": "iterations: 35968\ncpu: 19467.404359430853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 91969.72053031888,
            "unit": "ns/iter",
            "extra": "iterations: 7618\ncpu: 91966.5791546333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 74467.73746940315,
            "unit": "ns/iter",
            "extra": "iterations: 9397\ncpu: 74463.44578056772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 74432.9902096347,
            "unit": "ns/iter",
            "extra": "iterations: 9397\ncpu: 74428.48781526019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 74780.72721431244,
            "unit": "ns/iter",
            "extra": "iterations: 9337\ncpu: 74777.64806683178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 144138.36552720264,
            "unit": "ns/iter",
            "extra": "iterations: 4856\ncpu: 144130.6219110381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 601847.4386266165,
            "unit": "ns/iter",
            "extra": "iterations: 1165\ncpu: 601821.2875536444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 512904.538349175,
            "unit": "ns/iter",
            "extra": "iterations: 1369\ncpu: 512883.78378378146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 511591.6581817973,
            "unit": "ns/iter",
            "extra": "iterations: 1375\ncpu: 511576.5090909112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 509948.6168972982,
            "unit": "ns/iter",
            "extra": "iterations: 1373\ncpu: 509921.84996358963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 339021.2056255907,
            "unit": "ns/iter",
            "extra": "iterations: 2062\ncpu: 339005.96508243924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 501267.29534050974,
            "unit": "ns/iter",
            "extra": "iterations: 1395\ncpu: 501251.39784946654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19650.667350322536,
            "unit": "ns/iter",
            "extra": "iterations: 35593\ncpu: 19650.495884022068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 93935.66438540153,
            "unit": "ns/iter",
            "extra": "iterations: 7452\ncpu: 93930.86419753244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 75085.96847185558,
            "unit": "ns/iter",
            "extra": "iterations: 9325\ncpu: 75082.99195710325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 74559.43513399041,
            "unit": "ns/iter",
            "extra": "iterations: 9404\ncpu: 74554.43428328432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 75821.99305480614,
            "unit": "ns/iter",
            "extra": "iterations: 9215\ncpu: 75820.19533369623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 144186.91397406842,
            "unit": "ns/iter",
            "extra": "iterations: 4859\ncpu: 144185.07923441107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 600603.1758147986,
            "unit": "ns/iter",
            "extra": "iterations: 1166\ncpu: 600568.0102915878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 515793.15243005066,
            "unit": "ns/iter",
            "extra": "iterations: 1358\ncpu: 515773.343151691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 513368.2750548495,
            "unit": "ns/iter",
            "extra": "iterations: 1367\ncpu: 513347.9151426428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 511148.48609080585,
            "unit": "ns/iter",
            "extra": "iterations: 1366\ncpu: 511132.7232796434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 340857.4525547497,
            "unit": "ns/iter",
            "extra": "iterations: 2055\ncpu: 340852.99270073086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 502298.1075268609,
            "unit": "ns/iter",
            "extra": "iterations: 1395\ncpu: 502262.07885303965 ns\nthreads: 1"
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
        "date": 1705957883509,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7473.290484639722,
            "unit": "ns/iter",
            "extra": "iterations: 93554\ncpu: 7472.765461658508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 70855.51525791762,
            "unit": "ns/iter",
            "extra": "iterations: 11961\ncpu: 70852.63773931944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 136643.57205105227,
            "unit": "ns/iter",
            "extra": "iterations: 6426\ncpu: 136636.38344226583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 202058.31349848703,
            "unit": "ns/iter",
            "extra": "iterations: 4319\ncpu: 202056.05464227835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 265814.4157164746,
            "unit": "ns/iter",
            "extra": "iterations: 3245\ncpu: 265808.474576271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 333444.37149354815,
            "unit": "ns/iter",
            "extra": "iterations: 2638\ncpu: 333435.6709628508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 391090.48068285495,
            "unit": "ns/iter",
            "extra": "iterations: 2226\ncpu: 391074.4833782571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 454109.637311129,
            "unit": "ns/iter",
            "extra": "iterations: 1919\ncpu: 454090.8285565401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 516857.399881133,
            "unit": "ns/iter",
            "extra": "iterations: 1683\ncpu: 516842.0677361856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5658.500344723905,
            "unit": "ns/iter",
            "extra": "iterations: 123287\ncpu: 5658.370306682792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4778.362133472344,
            "unit": "ns/iter",
            "extra": "iterations: 146203\ncpu: 4778.289775175617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4680.135794388453,
            "unit": "ns/iter",
            "extra": "iterations: 149719\ncpu: 4680.068661960062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4784.265369230342,
            "unit": "ns/iter",
            "extra": "iterations: 146494\ncpu: 4784.135186424022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8551.975744991536,
            "unit": "ns/iter",
            "extra": "iterations: 81880\ncpu: 8551.72936003908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 29605.54819102962,
            "unit": "ns/iter",
            "extra": "iterations: 27640\ncpu: 29605.10130246025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 119355.01664335083,
            "unit": "ns/iter",
            "extra": "iterations: 7150\ncpu: 119353.07692307707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 98280.64642856966,
            "unit": "ns/iter",
            "extra": "iterations: 8680\ncpu: 98277.94930875594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 100640.50956684034,
            "unit": "ns/iter",
            "extra": "iterations: 8519\ncpu: 100638.93649489392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 98851.14594907321,
            "unit": "ns/iter",
            "extra": "iterations: 8640\ncpu: 98848.47222222216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 249918.31675769784,
            "unit": "ns/iter",
            "extra": "iterations: 3479\ncpu: 249913.59586087972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2106083.1795453667,
            "unit": "ns/iter",
            "extra": "iterations: 440\ncpu: 2106016.818181819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1745937.205273095,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1745904.3314500956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1716609.390018381,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1716570.6099815136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1724668.8472998603,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1724632.4022346386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1004471.2741061343,
            "unit": "ns/iter",
            "extra": "iterations: 923\ncpu: 1004435.5362946916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1679884.110307495,
            "unit": "ns/iter",
            "extra": "iterations: 553\ncpu: 1679849.9095840813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6801464.400000441,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6801275.000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3891308.107883628,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3891136.099585073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8627290.333333261,
            "unit": "ns/iter",
            "extra": "iterations: 126\ncpu: 8626857.936507925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 29094.405101752687,
            "unit": "ns/iter",
            "extra": "iterations: 28304\ncpu: 29093.36489542109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 119914.83781121111,
            "unit": "ns/iter",
            "extra": "iterations: 7109\ncpu: 119909.01673934452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 102214.26858169389,
            "unit": "ns/iter",
            "extra": "iterations: 8355\ncpu: 102209.73070017944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 99204.8437064554,
            "unit": "ns/iter",
            "extra": "iterations: 8612\ncpu: 99201.27728750538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 102908.8159771747,
            "unit": "ns/iter",
            "extra": "iterations: 8412\ncpu: 102903.45934379491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 253202.57280140248,
            "unit": "ns/iter",
            "extra": "iterations: 3434\ncpu: 253192.25393127577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2136573.0435781013,
            "unit": "ns/iter",
            "extra": "iterations: 436\ncpu: 2136507.339449529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1778326.5790476003,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1778235.6190476127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1745480.5727612155,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1745441.231343278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1757481.9213482544,
            "unit": "ns/iter",
            "extra": "iterations: 534\ncpu: 1757395.8801498055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1013458.3786724606,
            "unit": "ns/iter",
            "extra": "iterations: 919\ncpu: 1013412.6224156701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1693953.3799999976,
            "unit": "ns/iter",
            "extra": "iterations: 550\ncpu: 1693888.0000000077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6903079.190000199,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6902666.000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3942144.648535626,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3941953.9748953944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 28034.072701306606,
            "unit": "ns/iter",
            "extra": "iterations: 29408\ncpu: 28032.824401523394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 119002.52969054494,
            "unit": "ns/iter",
            "extra": "iterations: 7174\ncpu: 118997.15639810407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 98038.33608909854,
            "unit": "ns/iter",
            "extra": "iterations: 8709\ncpu: 98035.31978413124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 100813.02380115916,
            "unit": "ns/iter",
            "extra": "iterations: 8529\ncpu: 100808.48868566047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 101344.78282947053,
            "unit": "ns/iter",
            "extra": "iterations: 8468\ncpu: 101340.16296646182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 251048.92432589122,
            "unit": "ns/iter",
            "extra": "iterations: 3449\ncpu: 251035.05363873535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2114964.1855203197,
            "unit": "ns/iter",
            "extra": "iterations: 442\ncpu: 2114899.7737556538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1759016.084905689,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1758951.8867924584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1721416.6950092032,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1721347.3197781884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1735630.5929367533,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1735606.8773234223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1007121.518398312,
            "unit": "ns/iter",
            "extra": "iterations: 924\ncpu: 1007103.1385281339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1688238.2540541028,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1688182.7027027064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2926.8854980418214,
            "unit": "ns/iter",
            "extra": "iterations: 238223\ncpu: 2926.7413306019826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14772.334690003934,
            "unit": "ns/iter",
            "extra": "iterations: 47420\ncpu: 14772.08561788276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11596.41509433941,
            "unit": "ns/iter",
            "extra": "iterations: 60526\ncpu: 11596.267719657588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11496.043302115333,
            "unit": "ns/iter",
            "extra": "iterations: 60967\ncpu: 11495.38602850718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9768.338308804156,
            "unit": "ns/iter",
            "extra": "iterations: 71819\ncpu: 9767.945808212316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 58105.43079857115,
            "unit": "ns/iter",
            "extra": "iterations: 12059\ncpu: 58103.059955220626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 137872.7059401951,
            "unit": "ns/iter",
            "extra": "iterations: 5084\ncpu: 137865.53894571122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36034.467151024524,
            "unit": "ns/iter",
            "extra": "iterations: 19407\ncpu: 36032.282166228964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 35069.28083425373,
            "unit": "ns/iter",
            "extra": "iterations: 19994\ncpu: 35067.78533560034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 35414.94429390027,
            "unit": "ns/iter",
            "extra": "iterations: 19190\ncpu: 35413.22042730615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 71072.62550483961,
            "unit": "ns/iter",
            "extra": "iterations: 9904\ncpu: 71070.5674474956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 57774.21428571366,
            "unit": "ns/iter",
            "extra": "iterations: 12138\ncpu: 57773.16691382458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 18985.502769029357,
            "unit": "ns/iter",
            "extra": "iterations: 36836\ncpu: 18985.210120534182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 94281.59407548864,
            "unit": "ns/iter",
            "extra": "iterations: 7393\ncpu: 94277.61395915167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 75823.08001735722,
            "unit": "ns/iter",
            "extra": "iterations: 9223\ncpu: 75817.6081535299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 74127.56579501889,
            "unit": "ns/iter",
            "extra": "iterations: 9484\ncpu: 74124.6731336987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 75182.26360909475,
            "unit": "ns/iter",
            "extra": "iterations: 9332\ncpu: 75180.6472353182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 151921.58424507343,
            "unit": "ns/iter",
            "extra": "iterations: 4570\ncpu: 151918.599562365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 603904.5232358605,
            "unit": "ns/iter",
            "extra": "iterations: 1162\ncpu: 603877.4526678236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 513156.5308370267,
            "unit": "ns/iter",
            "extra": "iterations: 1362\ncpu: 513131.05726872646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 501324.674999978,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501313.1000000044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 504417.387681206,
            "unit": "ns/iter",
            "extra": "iterations: 1380\ncpu: 504402.53623188863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 328665.8490832014,
            "unit": "ns/iter",
            "extra": "iterations: 2127\ncpu: 328656.3704748486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 494481.7793493056,
            "unit": "ns/iter",
            "extra": "iterations: 1414\ncpu: 494471.78217821714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19030.84303859238,
            "unit": "ns/iter",
            "extra": "iterations: 36767\ncpu: 19030.181956645818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 94536.33666036278,
            "unit": "ns/iter",
            "extra": "iterations: 7414\ncpu: 94532.50606959748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 76386.59505661829,
            "unit": "ns/iter",
            "extra": "iterations: 9184\ncpu: 76380.96689895558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 74675.72249467511,
            "unit": "ns/iter",
            "extra": "iterations: 9380\ncpu: 74672.44136460593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 76465.86608505591,
            "unit": "ns/iter",
            "extra": "iterations: 9170\ncpu: 76463.76226826616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 150656.04582615863,
            "unit": "ns/iter",
            "extra": "iterations: 4648\ncpu: 150652.08691910675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 606979.7991341694,
            "unit": "ns/iter",
            "extra": "iterations: 1155\ncpu: 606960.4329004373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 514594.3586155859,
            "unit": "ns/iter",
            "extra": "iterations: 1358\ncpu: 514558.6156111952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 499164.88264573313,
            "unit": "ns/iter",
            "extra": "iterations: 1406\ncpu: 499147.15504978306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 502224.8265232262,
            "unit": "ns/iter",
            "extra": "iterations: 1395\ncpu: 502192.4014336856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 329375.119395961,
            "unit": "ns/iter",
            "extra": "iterations: 2119\ncpu: 329364.7947144882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 496950.2441448442,
            "unit": "ns/iter",
            "extra": "iterations: 1409\ncpu: 496935.77004968846 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}