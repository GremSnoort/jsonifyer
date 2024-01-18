window.BENCHMARK_DATA = {
  "lastUpdate": 1705574922155,
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
      }
    ]
  }
}